const fs = require('fs');
const cheerio = require('cheerio');

// Load HTML
let content = fs.readFileSync('fooror.com/en-us.html', 'utf-8');
const $ = cheerio.load(content);

// 1. Locate the s2-card-wrap wrapper
const cardWrap = $('.s2-card-wrap');

// 2. We'll store the .all-projects-btn to place at the bottom
const allProjectsBtn = $('.all-projects-btn');

// Change text "All projects" to "New Initiative"
allProjectsBtn.find('.shadows.purple').text('New Initiative');
allProjectsBtn.css('margin', '0 auto');
allProjectsBtn.css('display', 'block');
allProjectsBtn.css('margin-top', '50px');

// Let's create the new layout elements:
const topHeaderStr = `
<div style="text-align: center; margin-bottom: 30px;">
  <h2 class="txt-56" style="margin-bottom: 20px;"><span class="thin"><strong>Notice Board</strong></span></h2>
  <div style="display: inline-block; background: #FACC15; color: #111; padding: 15px 40px; border-radius: 50px; font-weight: 900; font-size: 2.5rem; text-transform: uppercase; letter-spacing: 2px; box-shadow: 0 10px 30px rgba(250, 204, 21, 0.4); border: 2px solid #CA8A04; transform: rotate(-2deg);">
    Batches Now Enrolling 🔴
  </div>
</div>
`;

// Add Google Font for the handwriting style (Caveat or similar)
if (!content.includes('fonts.googleapis.com/css2?family=Caveat')) {
  $('head').append('<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet">');
}

const middleAnnouncementStr = `
<div style="margin: 0 auto 50px auto; max-width: 800px; background: #FFFDE7; border-radius: 12px; padding: 40px 50px; color: #111; box-shadow: 0 15px 35px rgba(0,0,0,0.3); position: relative; border: 1px solid #E6EE9C;">
  <!-- Pushpin icon -->
  <div style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); width: 40px; height: 40px; background: #D32F2F; border-radius: 50%; box-shadow: inset -5px -5px 10px rgba(0,0,0,0.3), 0 5px 10px rgba(0,0,0,0.5);">
    <div style="position: absolute; top: 10px; left: 10px; width: 10px; height: 10px; background: #FFCDD2; border-radius: 50%;"></div>
    <div style="position: absolute; top: 38px; left: 18px; width: 4px; height: 15px; background: #9E9E9E;"></div>
  </div>

  <h3 style="font-size: 2.2rem; font-weight: 900; text-align: center; margin-bottom: 20px; line-height: 1.3;">
    🎉 Admissions Are Now Open for the <br/>
    <span style="font-family: 'Caveat', cursive; font-size: 3.5rem; color: #D32F2F; line-height: 0.8; display: inline-block; transform: rotate(-3deg);">2026–27 Season!</span>
  </h3>
  <p style="font-size: 1.5rem; font-weight: 700; text-align: center; line-height: 1.6;">
    New batches starting for Class 8–10, and <span style="background: yellow; padding: 0 5px;">NEE BATCHES</span> along with Class 11–12, JEE & NEET. <br/><br/>
    <span style="color: #D32F2F; font-size: 1.8rem; border-bottom: 3px solid #D32F2F;">Limited seats available — first come, first served.</span>
  </p>
</div>
`;

// Now replace everything inside .s2-card-wrap with our new structure
cardWrap.empty();
cardWrap.append(topHeaderStr);
cardWrap.append(middleAnnouncementStr);
cardWrap.append(allProjectsBtn);

// Clean up any remaining .urgency-ticker-wrapper elements if outside .s2-card-wrap
$('.urgency-ticker-wrapper').remove();
$('.s2-heading-wrap').remove(); // if any existed outside
$('.works-grid').remove(); // remove any residual

// Also remove the old extra closing tag hack that was around
// Since Cheerio rebuilt the DOM, it handles tags nicely itself!

fs.writeFileSync('fooror.com/en-us.html', $.html());
console.log('Notice board successfully redesigned with new admission card layout!');
