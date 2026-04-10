const fs = require('fs');

// STRATEGY: Remove all custom navbar CSS overrides that were breaking things.
// The Webflow CSS already handles navbar responsiveness (including bottom navbar on mobile).
// We just need to ensure the HTML structure and classes match the home page exactly.

const pages = [
  'fooror.com/en-us/consultation.html',
  'fooror.com/en-us/contacts.html',
  'fooror.com/en-us/gallery.html'
];

pages.forEach(f => {
  let h = fs.readFileSync(f, 'utf-8');
  
  // 1. Remove the "Ensure navbar is always visible" CSS block
  h = h.replace(/<style>\s*\/\* Ensure navbar is always visible[\s\S]*?<\/style>\s*/g, '');
  
  // 2. Remove the "NAVBAR-SIZE-FIX" block
  h = h.replace(/<!-- NAVBAR-SIZE-FIX -->[\s\S]*?<!-- \/NAVBAR-SIZE-FIX -->/g, '');
  
  // 3. Remove "Match home page navbar" CSS block
  h = h.replace(/<style>\s*\/\* Match home page navbar[\s\S]*?<\/style>\s*/g, '');
  
  fs.writeFileSync(f, h);
  console.log(`✅ ${f}: removed custom navbar CSS overrides`);
});

console.log('\n🎉 Navbar CSS overrides removed. Webflow CSS will handle styling naturally.');
