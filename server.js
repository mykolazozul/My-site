const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const PORT = 4100;
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=UTF-8',
  '.xml': 'application/xml; charset=UTF-8'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  
  // Clean URL redirect if user types .html directly
  if (reqPath.endsWith('.html')) {
    const cleanPath = reqPath === '/index.html' ? '/' : reqPath.slice(0, -5);
    res.writeHead(301, { 'Location': cleanPath });
    return res.end();
  }

  // Handle root and route aliases
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  } else if (reqPath === '/resume') {
    reqPath = '/us.html';
  }

  let filePath = path.join(__dirname, reqPath);

  // Check if file exists as-is
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      return serveFile(filePath, req, res);
    }

    if (!err && stats.isDirectory()) {
      const dirIndex = path.join(filePath, 'index.html');
      if (fs.existsSync(dirIndex)) {
        return serveFile(dirIndex, req, res);
      }
    }

    // Try appending .html for clean URLs (e.g. /links -> /links.html)
    const htmlPath = filePath + '.html';
    fs.stat(htmlPath, (htmlErr, htmlStats) => {
      if (!htmlErr && htmlStats.isFile()) {
        return serveFile(htmlPath, req, res);
      }

      // 404 fallback - serve custom 404.html
      const notFoundPath = path.join(__dirname, '404.html');
      fs.readFile(notFoundPath, (err404, data404) => {
        if (!err404) {
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8', 'Access-Control-Allow-Origin': '*' });
          res.end(data404);
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
          res.end('404 Not Found');
        }
      });
    });
  });
});

function serveFile(filePath, req, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  const acceptEncoding = req.headers['accept-encoding'] || '';

  const isDevAsset = ['.html', '.css', '.js'].includes(ext);
  const cacheControl = isDevAsset ? 'no-cache, must-revalidate' : 'public, max-age=86400, stale-while-revalidate=604800';
  const isCompressible = ['.html', '.css', '.js', '.json', '.svg', '.txt', '.xml'].includes(ext);

  if (isCompressible && acceptEncoding.includes('gzip')) {
    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Encoding': 'gzip',
      'Cache-Control': cacheControl,
      'Vary': 'Accept-Encoding',
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(filePath).pipe(zlib.createGzip()).pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': cacheControl,
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(filePath).pipe(res);
  }
}

server.listen(PORT, () => {
  console.log(`Portfolio server live at: http://localhost:${PORT}/`);
  console.log(`Personal links live at:  http://localhost:${PORT}/links`);
  console.log(`US Executive Resume at:  http://localhost:${PORT}/us`);
});
