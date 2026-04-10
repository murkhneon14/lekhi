const fs = require('fs');
const path = require('path');

// Find all HTML files
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

htmlFiles.forEach(f => {
  let h = fs.readFileSync(f, 'utf-8');
  const rel = path.relative('fooror.com', f).replace(/\\/g, '/');
  
  // Determine relative path to root for favicon
  const depth = rel.split('/').length - 1;
  const prefix = depth > 0 ? '../'.repeat(depth) : '';
  
  // 1. Replace page title
  // Home page
  h = h.replace(/<title>Fooror \| Event Website Design That Sells Out Tickets<\/title>/gi, 
    '<title>The Lekhi Tutorials</title>');
  // Consultation 
  h = h.replace(/<title>Fooror \| Free Consultation[^<]*<\/title>/gi,
    '<title>The Lekhi Tutorials | Enquire Now</title>');
  // Contacts
  h = h.replace(/<title>Fooror \| Contacts[^<]*<\/title>/gi,
    '<title>The Lekhi Tutorials | Contact Us</title>');
  // Generic catch-all for any remaining Fooror titles
  h = h.replace(/<title>Fooror[^<]*<\/title>/gi, '<title>The Lekhi Tutorials</title>');
  
  // 2. Replace favicon links — point to our logo
  const logoPath = prefix + 'lekhi-logo.jpg';
  
  // Replace shortcut icon
  h = h.replace(
    /<link[^>]*rel="shortcut icon"[^>]*>/gi,
    `<link href="${logoPath}" rel="shortcut icon" type="image/jpeg">`
  );
  
  // Replace apple-touch-icon
  h = h.replace(
    /<link[^>]*rel="apple-touch-icon"[^>]*>/gi,
    `<link href="${logoPath}" rel="apple-touch-icon">`
  );
  
  // 3. Update meta og:title and twitter:title
  h = h.replace(/content="Fooror[^"]*"\s+name="title"/gi, 
    'content="The Lekhi Tutorials" name="title"');
  h = h.replace(/property="og:title"\s+content="Fooror[^"]*"/gi,
    'property="og:title" content="The Lekhi Tutorials"');
  h = h.replace(/name="twitter:title"\s+content="Fooror[^"]*"/gi,
    'name="twitter:title" content="The Lekhi Tutorials"');
  
  // 4. Replace OG/meta descriptions mentioning Fooror
  h = h.replace(/Fooror/g, 'The Lekhi Tutorials');

  fs.writeFileSync(f, h);
  console.log(`✅ ${rel}: title + favicon updated`);
});

console.log('\n🎉 All pages now show "The Lekhi Tutorials" tab title with the logo favicon!');
