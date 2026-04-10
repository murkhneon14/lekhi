const fs = require('fs');
const cheerio = require('cheerio');
let content = fs.readFileSync('fooror.com/en-us.html', 'utf-8');
const $ = cheerio.load(content);

// 1. Ditch Fooror's baked images entirely for the folder
$('.folder-back').remove();
$('.folder-front').remove();

// 2. We'll rebuild a purely CSS folder!
$('.all-projects-wrap').empty();

const cssFolderHTML = `
  <div style="position: relative; width: 400px; height: 300px; margin: 0 auto; display: flex; flex-direction: column; justify-content: flex-end; align-items: center;">
    
    <!-- BACK OF FOLDER -->
    <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 80%; background: #4a36b5; border-radius: 20px 20px 10px 10px; z-index: 1;"></div>
    
    <!-- FOLDER TAB (Top Left) -->
    <div style="position: absolute; bottom: 75%; left: 0; width: 45%; height: 20%; background: #4a36b5; border-radius: 20px 20px 0 0; z-index: 1;"></div>

    <!-- DOCUMENT PAPER STICKING OUT -->
    <div style="position: absolute; top: 10%; left: 10%; width: 80%; height: 75%; background: linear-gradient(135deg, #fffaf0, #fce4ec); border-radius: 12px 12px 0 0; display: flex; flex-direction: column; justify-content: flex-start; align-items: center; padding-top: 30px; box-shadow: 0 -5px 15px rgba(0,0,0,0.1); z-index: 2;">
      <h3 style="font-family: 'Caveat', cursive, serif; font-size: 42px; font-weight: 700; color: #111; margin: 0; line-height: 1;">Find My Tutor</h3>
      <h4 style="font-family: 'Caveat', cursive, serif; font-size: 28px; font-weight: 400; color: #d32f2f; margin: 0; line-height: 1; transform: rotate(-2deg); margin-top: 5px;">coming soon</h4>
    </div>

    <!-- FROSTED GLASS FRONT FOLDER OVERLAY -->
    <div style="position: absolute; bottom: -10px; left: -5%; width: 110%; height: 60%; background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-radius: 16px; border: 1px solid rgba(255,255,255,0.6); box-shadow: 0 10px 30px rgba(0,0,0,0.15); display: flex; justify-content: flex-start; align-items: flex-start; padding: 25px 30px; z-index: 3; transform: rotate(-1deg);">
      <div style="font-family: 'Caveat', cursive, serif; font-size: 54px; font-weight: 700; color: #4a36b5; line-height: 1; text-shadow: 0 2px 10px rgba(255,255,255,0.8);">New Initiative</div>
    </div>
    
  </div>
`;

$('.all-projects-wrap').append(cssFolderHTML);

fs.writeFileSync('fooror.com/en-us.html', $.html());
console.log('Successfully injected completely CSS-based folder without baked image shadows!');
