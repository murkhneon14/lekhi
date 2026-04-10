const fs = require('fs');
const cheerio = require('cheerio');
const content = fs.readFileSync('fooror.com/en-us.html', 'utf-8');
const $ = cheerio.load(content);

// Target the second document wrapper sticking out of the folder
const doc2 = $('.folder-doc.d-2');

// We don't want to lose the existing wrapper styling, just its content
// The document background is usually an image or set by the folder-doc
// Replace its contents with nicely styled typography
// Wait, we need to ensure the text looks like Svitlo string. 
// "Find My Tutor" / "coming soon"

const newDocHTML = `
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #fff0df; border-radius: 12px; font-family: 'Inter', system-ui, sans-serif;">
    <h3 style="font-size: 2.2rem; font-style: italic; color: #111; margin-bottom: 5px; font-weight: 500; letter-spacing: -0.5px;">Find My Tutor</h3>
    <h4 style="font-size: 1.8rem; font-style: italic; color: #555; font-weight: 400; letter-spacing: -0.5px;">coming soon</h4>
  </div>
`;

doc2.empty();
doc2.append(newDocHTML);

fs.writeFileSync('fooror.com/en-us.html', $.html());
console.log('Successfully replaced the document image with sleek HTML typography!');
