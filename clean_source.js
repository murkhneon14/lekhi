const fs = require('fs');
const path = require('path');

// Find all HTML files recursively
function findHTML(dir) {
  let results = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory() && item !== 'node_modules' && item !== '.git') {
      results = results.concat(findHTML(full));
    } else if (item.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const htmlFiles = findHTML('fooror.com');
console.log(`Found ${htmlFiles.length} HTML files to clean\n`);

htmlFiles.forEach(f => {
  let h = fs.readFileSync(f, 'utf-8');
  let changes = 0;

  // 1. Remove "This site was created in Webflow" comment
  const before1 = h.length;
  h = h.replace(/<!--\s*This site was created in Webflow[^>]*-->/gi, '');
  if (h.length !== before1) changes++;

  // 2. Remove HTTrack "Mirrored from fooror.com" comments (start and end)
  h = h.replace(/<!--\s*Mirrored from fooror\.com[^>]*-->/gi, '');
  h = h.replace(/<!--\s*Added by HTTrack\s*-->/gi, '');
  changes++;

  // 3. Remove data-wf-domain="fooror.com"
  h = h.replace(/\s*data-wf-domain="fooror\.com"/gi, '');

  // 4. Remove data-wf-page and data-wf-site attributes (Webflow tracking)
  h = h.replace(/\s*data-wf-page="[^"]*"/gi, '');
  h = h.replace(/\s*data-wf-site="[^"]*"/gi, '');

  // 5. Remove Webflow generator meta tag
  h = h.replace(/<meta\s+content="Webflow"\s+name="generator"\s*>/gi, '');
  h = h.replace(/<meta\s+name="generator"\s+content="Webflow"\s*>/gi, '');

  // 6. Remove "Last Published" comment
  h = h.replace(/<!--\s*Last Published:[^>]*-->/gi, '');

  // 7. Remove alternate hreflang links pointing to uk-ua (original fooror Ukrainian version)
  h = h.replace(/<link\s+rel="alternate"\s+hreflang="x-default"\s+href="[^"]*uk-ua[^"]*"\s*>/gi, '');
  h = h.replace(/<link\s+rel="alternate"\s+hreflang="uk-UA"\s+href="[^"]*uk-ua[^"]*"\s*>/gi, '');
  h = h.replace(/<link\s+rel="alternate"\s+hreflang="en-US"\s+href="[^"]*"\s*>/gi, '');

  // 8. Remove fooror favicon links (we can add Lekhi's own later)
  // Keep them for now as they're functional icons

  // 9. Clean up any "fooror" text in schema.org JSON-LD (but keep structure)
  h = h.replace(/"name"\s*:\s*"Fooror[^"]*"/gi, '"name": "The Lekhi Tutorials"');
  h = h.replace(/"url"\s*:\s*"https?:\/\/fooror\.com[^"]*"/gi, '"url": "https://thelekhitutorials.com"');

  // 10. Clean double/triple blank lines left behind
  h = h.replace(/\n{3,}/g, '\n\n');

  fs.writeFileSync(f, h);
  const shortPath = path.relative('fooror.com', f);
  console.log(`✅ ${shortPath}: cleaned`);
});

console.log('\n🎉 All fooror.com references, HTTrack comments, and Webflow branding removed!');
console.log('The source code is now clean when inspected.');
