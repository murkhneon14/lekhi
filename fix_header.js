const fs = require('fs');
let content = fs.readFileSync('fooror.com/en-us.html', 'utf-8');

// Replace white color with black and reduce the size slightly for the header logo
content = content.replace(
  '<span class="txt-40" style="color: white; font-weight: bold;">The Lekhi Tutorials</span></a>',
  '<span class="txt-32" style="color: #111; font-weight: bold;">The Lekhi Tutorials</span></a>'
);

fs.writeFileSync('fooror.com/en-us.html', content);
console.log('Fixed header text color!');
