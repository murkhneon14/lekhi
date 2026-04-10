const fs = require('fs');
const cheerio = require('cheerio');
const content = fs.readFileSync('fooror.com/en-us.html', 'utf-8');
const $ = cheerio.load(content);

// We need to completely clear out folder-doc d-1 and d-2 safely
$('.folder-doc.d-1').empty();
$('.folder-doc.d-2').empty();

// Reconstruct the document sticking out inside d-2 
// Note: Fooror's d-2 has a specific size set via CSS so it sticks out over the top folder edge.
// We'll give it a clean background and text instead of an image.
const customDocHTML = `
  <div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #fff0df; border-radius: 12px; margin: 15px; box-shadow: inset 0 0 10px rgba(0,0,0,0.1);">
    <h3 style="font-family: 'Inter', system-ui, sans-serif; font-size: 28px; font-weight: 500; font-style: italic; color: #111; margin-bottom: 5px; line-height: 1;">Find My Tutor</h3>
    <h4 style="font-family: 'Inter', system-ui, sans-serif; font-size: 20px; font-weight: 400; font-style: italic; color: #666; margin: 0; line-height: 1;">coming soon</h4>
  </div>
`;

$('.folder-doc.d-2').append(customDocHTML);
// Also ensure d-1 is hidden or styled cleanly if it sticks out too
$('.folder-doc.d-1').css('background', '#eab308'); 

fs.writeFileSync('fooror.com/en-us.html', $.html());
console.log('Fixed the ghost image and inserted the correct typography!');
