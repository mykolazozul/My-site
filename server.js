// Tiny static server for local preview (clean URLs like on Vercel): node server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = process.env.PORT || 4100;
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg',
  '.png': 'image/png', '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml',
  '.ico': 'image/x-icon', '.vcf': 'text/vcard',
};

function resolve(urlPath) {
  const clean = path.normalize(decodeURIComponent(urlPath.split('?')[0])).replace(/^([\/])+/, '');
  const base = path.join(ROOT, clean);
  if (!base.startsWith(ROOT)) return null;
  const candidates = [base, base + '.html', path.join(base, 'index.html')];
  return candidates.find((p) => fs.existsSync(p) && fs.statSync(p).isFile()) || null;
}

http.createServer((req, res) => {
  const file = resolve(req.url);
  const send = (status, p) => {
    res.writeHead(status, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    fs.createReadStream(p).pipe(res);
  };
  if (file) return send(200, file);
  const notFound = path.join(ROOT, '404.html');
  if (fs.existsSync(notFound)) return send(404, notFound);
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
}).listen(PORT, () => console.log(`Portfolio running at http://localhost:${PORT}`));
