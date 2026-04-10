const fs = require('fs');

// Check what CSS each page uses
const files = [
  'fooror.com/en-us.html',
  'fooror.com/en-us/consultation.html',
  'fooror.com/en-us/contacts.html',
  'fooror.com/en-us/gallery.html'
];

files.forEach(f => {
  const h = fs.readFileSync(f, 'utf-8');
  const cssLinks = [];
  const re = /href="([^"]*\.css[^"]*)"/g;
  let m;
  while ((m = re.exec(h)) !== null) {
    if (m[1].includes('fooror') || m[1].includes('webflow')) {
      cssLinks.push(m[1]);
    }
  }
  console.log(`\n${f}:`);
  cssLinks.forEach(c => console.log(`  ${c}`));
});
