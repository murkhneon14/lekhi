const fs = require('fs');

// The home page loads a page-specific CSS that handles the navbar properly.
// Inner pages load different page-specific CSS files.
// Solution: Add the HOME PAGE CSS to inner pages so they get the same navbar styling.

const homePageCSS = 'https://cdn.prod.website-files.com/6916200346ddd8428d3d953b/css/fooror-events.webflow.6916200446ddd8428d3d9573-f85fb9c5e.min.css';

const pages = [
  'fooror.com/en-us/consultation.html',
  'fooror.com/en-us/contacts.html',
  'fooror.com/en-us/gallery.html'
];

pages.forEach(f => {
  let h = fs.readFileSync(f, 'utf-8');
  
  // Check if already added
  if (h.includes('6916200446ddd8428d3d9573')) {
    console.log(`⏭️ ${f}: home CSS already included`);
    return;
  }
  
  // Add the home page CSS AFTER the shared CSS
  const sharedCSS = 'fooror-events.webflow.shared.3627ceca9.min.css';
  const insertPoint = h.indexOf(sharedCSS);
  if (insertPoint === -1) {
    console.log(`❌ ${f}: could not find shared CSS link`);
    return;
  }
  
  // Find the end of that link tag
  const afterShared = h.indexOf('>', insertPoint) + 1;
  
  // Insert the home page CSS link
  const newLink = `\n<link href="${homePageCSS}" rel="stylesheet" type="text/css">`;
  h = h.slice(0, afterShared) + newLink + h.slice(afterShared);
  
  fs.writeFileSync(f, h);
  console.log(`✅ ${f}: added home page CSS for consistent navbar`);
});

console.log('\n🎉 All inner pages now include the home page CSS for navbar consistency!');
console.log('The navbar should now look identical to the home page on all devices.');
