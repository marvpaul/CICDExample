// test.js
const fs = require('fs');
test('should render a heading with the correct text', () => {
  const html = fs.readFileSync('dist/index.html', 'utf8');
  document.body.innerHTML = html;

  const heading = document.querySelector('h1');
  expect(heading.textContent).toBe('Hello, CI/CD!');
});
