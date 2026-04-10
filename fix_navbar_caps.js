const fs = require('fs');

const pages = [
  'fooror.com/en-us/consultation.html',
  'fooror.com/en-us/contacts.html',
  'fooror.com/en-us/gallery.html'
];

pages.forEach(f => {
  let h = fs.readFileSync(f, 'utf-8');
  
  // Replace navbar text: "The Lekhi Tutorials" → "THE LEKHI TUTORIALS" 
  // and add text-transform: uppercase to the style
  h = h.replace(
    /text-decoration: none;">(The Lekhi Tutorials|the lekhi tutorials)<\/span>/gi,
    'text-decoration: none; text-transform: uppercase;">THE LEKHI TUTORIALS</span>'
  );
  
  // Also catch cheerio-encoded HTML entities
  h = h.replace(
    /text-decoration: none;&#x22;>(The Lekhi Tutorials|the lekhi tutorials)&#x3C;\/span>/gi,
    'text-decoration: none; text-transform: uppercase;&#x22;>THE LEKHI TUTORIALS&#x3C;/span>'
  );
  
  // Broader catch: any span with the logo text
  h = h.replace(
    />The Lekhi Tutorials<\/span><\/a>/g,
    '>THE LEKHI TUTORIALS</span></a>'
  );

  fs.writeFileSync(f, h);
  console.log(`✅ ${f}: navbar updated`);
});
