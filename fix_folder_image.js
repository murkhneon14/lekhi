const fs = require('fs');
const cheerio = require('cheerio');
const content = fs.readFileSync('fooror.com/en-us.html', 'utf-8');
const $ = cheerio.load(content);

// 1. Locate .folder-back
const folderBack = $('.folder-back');

// 2. Eradicate any <img> inside or anything that might be showing the old image!
folderBack.find('img').remove();

// 3. Just to be completely safe, let's empty it completely EXCEPT the .d-1 and .d-2 we left (or just empty it all!)
folderBack.empty();

// 4. Inject a highly custom "paper" element that sticks out of the folder back
// The folder back usually forms the back flap of the folder, and elements inside it stick up.
const customPaperHTML = `
  <div style="position: absolute; bottom: 0; left: 5%; width: 90%; height: 110%; display: flex; flex-direction: column; justify-content: flex-start; align-items: center; background: #fffdf5; border-radius: 12px 12px 0 0; padding-top: 30px; box-shadow: 0 -5px 15px rgba(0,0,0,0.1); z-index: 1;">
    <h3 style="font-family: 'Caveat', cursive, system-ui, sans-serif; font-size: 3rem; font-weight: 700; color: #111; margin-bottom: 5px; line-height: 1;">Find My Tutor</h3>
    <h4 style="font-family: 'Caveat', cursive, system-ui, sans-serif; font-size: 2.2rem; font-weight: 400; color: #d32f2f; margin: 0; line-height: 1; transform: rotate(-2deg);">coming soon</h4>
  </div>
`;
folderBack.append(customPaperHTML);

// 5. Ensure .folder-front is above our injected paper
$('.folder-front').css('z-index', '2');
$('.folder-front').css('position', 'relative');

fs.writeFileSync('fooror.com/en-us.html', $.html());
console.log('Destroyed the ghost image and replaced with perfect Find My Tutor UI!');
