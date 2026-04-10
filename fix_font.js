const fs = require('fs');
let content = fs.readFileSync('fooror.com/en-us.html', 'utf-8');

// Replace the previous span with a new span + style tag to remove underline and improve font
const oldHTML = '<span class="txt-32" style="color: #111; font-weight: bold;">The Lekhi Tutorials</span>';
const newHTML = '<style>.logo-wrap { text-decoration: none !important; border: none !important; box-shadow: none !important; }</style><span class="txt-32" style="color: #111; font-weight: 800; font-family: \'Inter\', system-ui, -apple-system, sans-serif; letter-spacing: -0.5px; text-decoration: none;">The Lekhi Tutorials</span>';

content = content.replace(oldHTML, newHTML);

fs.writeFileSync('fooror.com/en-us.html', content);
console.log('Fixed underline and font!');
