const App = require('./src');
const {
  h
} = require('preact');
const http = require('http');
const {
  render
} = require('preact-render-to-string');

let js = '';

const server = http.createServer((req, res) => {
  
  const html = render(h(App, {}));

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Sindreboyum.no</title>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `);
})