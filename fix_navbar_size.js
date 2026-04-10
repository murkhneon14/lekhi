const fs = require('fs');

// The home page navbar appears more centered/contained because the header-bg 
// has specific max-width and centering from the page-specific Webflow CSS.
// We need to match that on inner pages.

const navbarFixCSS = `
<style>
/* Match home page navbar — centered, contained layout */
.header-bg {
  max-width: 1200px !important;
  margin: 8px auto 0 auto !important;
  border-radius: 100px !important;
  padding: 8px 12px 8px 20px !important;
}

@media (max-width: 991px) {
  .header-bg {
    max-width: 95% !important;
    margin: 6px auto 0 auto !important;
  }
}
@media (max-width: 767px) {
  .header-bg {
    max-width: 95% !important;
    margin: 4px auto 0 auto !important;
    padding: 6px 10px 6px 14px !important;
  }
}
@media (max-width: 479px) {
  .header-bg {
    max-width: 96% !important;
    margin: 4px auto 0 auto !important;
    padding: 6px 8px 6px 12px !important;
    border-radius: 60px !important;
  }
}
</style>
`;

const pages = [
  'fooror.com/en-us/consultation.html',
  'fooror.com/en-us/contacts.html',
  'fooror.com/en-us/gallery.html'
];

pages.forEach(f => {
  let h = fs.readFileSync(f, 'utf-8');
  
  // Remove old fix if present and add new one
  h = h.replace(/<!-- NAVBAR-SIZE-FIX -->[\s\S]*?<!-- \/NAVBAR-SIZE-FIX -->/g, '');
  
  // Check if we already have centered layout fix
  if (h.includes('Match home page navbar')) {
    console.log(`⏭️ ${f}: already has centered fix`);
    return;
  }
  
  // Insert before </head>
  h = h.replace('</head>', `<!-- NAVBAR-SIZE-FIX -->${navbarFixCSS}<!-- /NAVBAR-SIZE-FIX --></head>`);
  
  fs.writeFileSync(f, h);
  console.log(`✅ ${f}: navbar centered layout fix added`);
});

console.log('\n🎉 Inner page navbars now match home page layout!');
