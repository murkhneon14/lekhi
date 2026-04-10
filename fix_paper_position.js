const fs = require('fs');
const cheerio = require('cheerio');
let content = fs.readFileSync('fooror.com/en-us.html', 'utf-8');
const $ = cheerio.load(content);

// 1. Remove that bad custom container I injected
$('.folder-back').empty();

// 2. Fooror relies on background images for the folder flaps.
// Let's create an absolutely positioned paper that sits exactly inside the folder boundaries.
// The .all-projects-wrap has position:relative usually.
$('.all-projects-wrap').prepend(`
  <div class="custom-tutor-paper" style="position: absolute; top: -40px; left: 15%; width: 70%; height: 60%; background: #fff0df; border-radius: 16px 16px 0 0; display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 0; box-shadow: 0 -10px 20px rgba(0,0,0,0.05); padding-bottom: 20px;">
    <h3 style="font-family: 'Caveat', cursive, serif; font-size: 34px; font-weight: 700; color: #111; margin: 0; line-height: 1;">Find My Tutor</h3>
    <h4 style="font-family: 'Caveat', cursive, serif; font-size: 24px; font-weight: 400; color: #d32f2f; margin: 0; line-height: 1; transform: rotate(-2deg); margin-top: 5px;">coming soon</h4>
  </div>
`);

// The folder front must sit on top
$('.folder-front').css('position', 'relative');
$('.folder-front').css('z-index', '10');

// Fooror's folder-back also needs to sit underneath everything else but create the dark purple background
$('.folder-back').append(`
  <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 80%; background: #4a36b5; border-radius: 20px; z-index: -1;"></div>
`);

fs.writeFileSync('fooror.com/en-us.html', $.html());
console.log('Fixed the CSS positioning of the folder paper!');
