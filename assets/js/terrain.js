// Hero 3D scene: a ridgeline mountain range drifting in the dark.
// Raw WebGL (no library). The terrain is drawn twice: a black depth-only
// surface, then white ridgelines on top — so nearer hills hide the lines
// behind them (classic hidden-line look). Paused when off-screen.

const NOISE = `
vec3 permute(vec3 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}`;

const VERT = `
precision highp float;
attribute vec2 aPos;
uniform mat4 uProj;
uniform mat4 uView;
uniform float uTime;
varying float vA;
${NOISE}
float ridge(vec2 p){
  float s = 0.0; float a = 0.5;
  for (int i = 0; i < 5; i++) { float n = 1.0 - abs(snoise(p)); s += a * n * n; p *= 2.03; a *= 0.5; }
  return s;
}
void main(){
  float x = aPos.x; float z = aPos.y;
  vec2 q = vec2((x + uTime * 0.5) * 0.075, z * 0.075);
  float far = clamp(-z / 36.0, 0.0, 1.0);
  float valley = smoothstep(0.4, 8.0, abs(x + sin(z * 0.11) * 1.8));
  float h = ridge(q) * (0.35 + far * 3.5 + far * far * 10.0) * (0.12 + 0.88 * valley);
  vec3 p = vec3(x, h - 1.3, z);
  vec4 mv = uView * vec4(p, 1.0);
  gl_Position = uProj * mv;
  float d = -mv.z;
  float fadeFar = 1.0 - smoothstep(16.0, 40.0, d);
  float fadeNear = smoothstep(2.5, 11.0, d);
  vA = (0.10 + clamp(h * 0.09, 0.0, 0.75)) * fadeFar * fadeNear;
}`;

const FRAG = `
precision mediump float;
uniform float uLine;
varying float vA;
void main(){
  if (uLine < 0.5) gl_FragColor = vec4(0.0196, 0.0196, 0.0196, 1.0);
  else gl_FragColor = vec4(vec3(1.0), vA);
}`;

function perspective(fovy, aspect, near, far) {
  const f = 1 / Math.tan(fovy / 2), nf = 1 / (near - far);
  return new Float32Array([f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0]);
}

function lookAt(e, c, u) {
  let zx = e[0] - c[0], zy = e[1] - c[1], zz = e[2] - c[2];
  let l = Math.hypot(zx, zy, zz); zx /= l; zy /= l; zz /= l;
  let xx = u[1] * zz - u[2] * zy, xy = u[2] * zx - u[0] * zz, xz = u[0] * zy - u[1] * zx;
  l = Math.hypot(xx, xy, xz); xx /= l; xy /= l; xz /= l;
  const yx = zy * xz - zz * xy, yy = zz * xx - zx * xz, yz = zx * xy - zy * xx;
  return new Float32Array([
    xx, yx, zx, 0, xy, yy, zy, 0, xz, yz, zz, 0,
    -(xx * e[0] + xy * e[1] + xz * e[2]),
    -(yx * e[0] + yy * e[1] + yz * e[2]),
    -(zx * e[0] + zy * e[1] + zz * e[2]), 1,
  ]);
}

function shader(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
  return s;
}

export function initTerrain(canvas, { reduced = false } = {}) {
  const gl = canvas.getContext('webgl', { alpha: false, antialias: true, depth: true, powerPreference: 'high-performance' });
  if (!gl) return null;

  const prog = gl.createProgram();
  gl.attachShader(prog, shader(gl, gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, shader(gl, gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
  gl.useProgram(prog);

  const small = Math.min(window.innerWidth, window.innerHeight) < 700;
  const cols = small ? 140 : 220, rows = small ? 60 : 84;
  const W = 52, Z0 = 2.5, Z1 = -38;
  const zAt = (r) => Z0 + (Z1 - Z0) * Math.pow(r / (rows - 1), 1.25);
  const xAt = (c) => (c / (cols - 1) - 0.5) * W;

  // ridgelines: one line strip per row
  const lines = new Float32Array(cols * rows * 2);
  let k = 0;
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { lines[k++] = xAt(c); lines[k++] = zAt(r); }
  // occluding surface: one triangle strip per band between rows
  const bands = new Float32Array(cols * 2 * (rows - 1) * 2);
  k = 0;
  for (let r = 0; r < rows - 1; r++) {
    for (let c = 0; c < cols; c++) {
      bands[k++] = xAt(c); bands[k++] = zAt(r + 1);
      bands[k++] = xAt(c); bands[k++] = zAt(r);
    }
  }
  const lineBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, lineBuf);
  gl.bufferData(gl.ARRAY_BUFFER, lines, gl.STATIC_DRAW);
  const bandBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bandBuf);
  gl.bufferData(gl.ARRAY_BUFFER, bands, gl.STATIC_DRAW);

  const aPos = gl.getAttribLocation(prog, 'aPos');
  gl.enableVertexAttribArray(aPos);
  const uProj = gl.getUniformLocation(prog, 'uProj');
  const uView = gl.getUniformLocation(prog, 'uView');
  const uTime = gl.getUniformLocation(prog, 'uTime');
  const uLine = gl.getUniformLocation(prog, 'uLine');

  gl.clearColor(5 / 255, 5 / 255, 5 / 255, 1);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.polygonOffset(1.5, 2.0);

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniformMatrix4fv(uProj, false, perspective(48 * Math.PI / 180, w / Math.max(h, 1), 0.1, 100));
  }
  resize();
  new ResizeObserver(resize).observe(canvas);

  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  window.addEventListener('pointermove', (e) => {
    mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.ty = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });

  let visible = true, raf = 0, last = performance.now(), time = 6;
  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    if (!reduced) time += dt;
    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;
    const sway = reduced ? 0 : Math.sin(time * 0.1) * 0.4;
    gl.uniformMatrix4fv(uView, false, lookAt(
      [mouse.x * 1.2 + sway, 1.1 - mouse.y * 0.35, 6.5],
      [mouse.x * 0.4, 2.2, -26], [0, 1, 0]));
    gl.uniform1f(uTime, time);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // 1) surface — writes depth, pushed back slightly so its own lines stay visible
    gl.uniform1f(uLine, 0);
    gl.disable(gl.BLEND);
    gl.enable(gl.POLYGON_OFFSET_FILL);
    gl.bindBuffer(gl.ARRAY_BUFFER, bandBuf);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
    for (let r = 0; r < rows - 1; r++) gl.drawArrays(gl.TRIANGLE_STRIP, r * cols * 2, cols * 2);
    gl.disable(gl.POLYGON_OFFSET_FILL);

    // 2) ridgelines
    gl.uniform1f(uLine, 1);
    gl.enable(gl.BLEND);
    gl.depthMask(false);
    gl.bindBuffer(gl.ARRAY_BUFFER, lineBuf);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
    for (let r = 0; r < rows; r++) gl.drawArrays(gl.LINE_STRIP, r * cols, cols);
    gl.depthMask(true);

    if (visible && !reduced) raf = requestAnimationFrame(frame);
  }
  function start() { cancelAnimationFrame(raf); last = performance.now(); raf = requestAnimationFrame(frame); }

  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting && !document.hidden;
    if (visible) start(); else cancelAnimationFrame(raf);
  }).observe(canvas);
  document.addEventListener('visibilitychange', () => {
    visible = !document.hidden;
    if (visible) start(); else cancelAnimationFrame(raf);
  });

  start();
  requestAnimationFrame(() => canvas.classList.add('is-ready'));
  return { resize };
}
