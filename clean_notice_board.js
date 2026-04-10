const fs = require('fs');
const cheerio = require('cheerio');

// Load HTML
let content = fs.readFileSync('fooror.com/en-us.html', 'utf-8');
const $ = cheerio.load(content);

// 1. Locate the s2-card-wrap wrapper
const cardWrap = $('.s2-card-wrap');

// 2. We'll store the .all-projects-btn to place at the bottom
const allProjectsBtn = $('.all-projects-btn');

// Fix button styling from the previous attempt (reset to clean centered block)
allProjectsBtn.css('margin', '60px auto 0 auto');
allProjectsBtn.css('display', 'block');
allProjectsBtn.css('padding-bottom', '40px');

const elegantRedesignStr = `
<div class="s2-heading-wrap" style="padding-top: 60px; padding-left: 5%; margin-bottom: 20px;">
  <div class="hor-wrap align-left">
    <h2 class="txt-56"><span class="thin"><strong>Notice Board</strong></span></h2>
  </div>
</div>

<div class="announcement-content" style="padding: 0 5%; margin-bottom: 80px;">
  
  <div style="display: inline-flex; align-items: center; background: rgba(17, 17, 17, 0.05); color: #111; padding: 12px 28px; border-radius: 60px; font-weight: 800; font-family: 'Inter', system-ui, sans-serif; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 40px; border: 1px solid rgba(17, 17, 17, 0.1);">
    <span style="display:inline-block; margin-right:12px; font-size: 1.2rem; animation: pulseRed 2s infinite;">🔴</span> BATCHES NOW ENROLLING
  </div>

  <h2 class="txt-56" style="line-height: 1.1; margin-bottom: 30px;">
    <span class="thin" style="color: #666;">Admissions Are Now Open for the</span><br/>
    2025–26 Season!
  </h2>

  <div class="txt-40" style="color: #444; font-weight: 300; line-height: 1.4; max-width: 90%;">
    New batches starting for <strong style="color:#111; font-weight: 600;">Class 8–10</strong>, and 
    <span style="position:relative; display:inline-block;">
      <strong style="color:#111; font-weight: 600; position:relative; z-index:2;">NEE BATCHES</strong>
      <span style="position:absolute; bottom:8px; left:-5px; right:-5px; height:12px; background:#ccff00; z-index:1; opacity:0.6; border-radius: 4px;"></span>
    </span> 
    along with Class 11–12, JEE & NEET.
  </div>

  <div class="txt-20" style="margin-top: 50px; color: #d32f2f; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; border-left: 4px solid #d32f2f; padding-left: 15px;">
    Limited seats available — first come, first served.
  </div>

</div>

<style>
@keyframes pulseRed {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}
</style>
`;

// Replace everything inside .s2-card-wrap with our sleek clean setup
cardWrap.empty();
cardWrap.append(elegantRedesignStr);
cardWrap.append(allProjectsBtn);

fs.writeFileSync('fooror.com/en-us.html', $.html());
console.log('Notice board redesigned cleanly with native typography!');
