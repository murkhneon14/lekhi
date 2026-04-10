const fs = require('fs');

const pages = [
  'fooror.com/en-us/contacts.html',
  'fooror.com/en-us/gallery.html'
];

pages.forEach(f => {
  let h = fs.readFileSync(f, 'utf-8');
  
  // Match the navbar span with multi-line text "The Lekhi Tutorials" (any whitespace)
  h = h.replace(
    /(letter-spacing: -0\.5px;\s*text-decoration: none;)(">)\s*The\s+Lekhi\s+Tutorials(<\/span>)/gi,
    '$1 text-transform: uppercase;$2THE LEKHI TUTORIALS$3'
  );

  fs.writeFileSync(f, h);
  console.log(`✅ ${f}: navbar updated`);
});
