const fs = require('fs');

// The problem: on inner pages (consultation, contacts, gallery), the navbar
// may have different sizing or be invisible on mobile. The home page uses 
// page-specific CSS that styles the header properly.
//
// Solution: Add inline CSS overrides to ensure consistent navbar sizing 
// and mobile visibility across ALL pages.

const navbarCSS = `
<style>
/* Ensure navbar is always visible and consistent across all pages */
.header {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 9999 !important;
  width: 100% !important;
}
.header-bg {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 12px 20px !important;
  background: rgba(255,255,255,0.95) !important;
  backdrop-filter: blur(10px) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  border-radius: 0 0 16px 16px !important;
  margin: 0 auto !important;
  max-width: 100% !important;
  width: 100% !important;
  box-sizing: border-box !important;
}
.logo-txt-wrap {
  flex: 1 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.logo-txt-wrap .txt-32 {
  font-size: 1.1rem !important;
  white-space: nowrap !important;
}
.btn-burger {
  display: flex !important;
  z-index: 10001 !important;
  cursor: pointer !important;
}
.header-btn {
  z-index: 10000 !important;
}

/* Mobile responsive */
@media (max-width: 767px) {
  .header-bg {
    padding: 10px 12px !important;
  }
  .logo-txt-wrap .txt-32 {
    font-size: 0.85rem !important;
  }
  .header-btn .btn-txt {
    font-size: 0.75rem !important;
  }
}
@media (max-width: 479px) {
  .header-bg {
    padding: 8px 10px !important;
    border-radius: 0 0 12px 12px !important;
  }
  .logo-txt-wrap .txt-32 {
    font-size: 0.75rem !important;
    letter-spacing: 0px !important;
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
  
  // Check if we already added our fix
  if (h.includes('/* Ensure navbar is always visible')) {
    console.log(`⏭️ ${f}: already has navbar fix`);
    return;
  }
  
  // Insert the CSS right before </head>
  h = h.replace('</head>', navbarCSS + '</head>');
  
  fs.writeFileSync(f, h);
  console.log(`✅ ${f}: navbar CSS fix added`);
});

console.log('\n🎉 Navbar should now be consistent and visible on mobile across all pages!');
