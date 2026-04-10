const fs = require('fs');
let content = fs.readFileSync('fooror.com/en-us.html', 'utf-8');

// The exact string that I injected earlier which broke the layout
const injectedCode = `</div>
<div class="urgency-ticker-wrapper" style="margin: 40px 0 60px 0; overflow: hidden; border-radius: 20px;">
  <div class="urgency-ticker">
    <div class="ticker-content">
      <span>Batches Now Enrolling 🔴</span>
      <span>Batches Now Enrolling 🔴</span>
      <span>Batches Now Enrolling 🔴</span>
      <span>Batches Now Enrolling 🔴</span>
      <span>Batches Now Enrolling 🔴</span>
      <span>Batches Now Enrolling 🔴</span>
      <span>Batches Now Enrolling 🔴</span>
      <span>Batches Now Enrolling 🔴</span>
    </div>
  </div>
  <style>
  .urgency-ticker {
    background: #FACC15;
    color: #111;
    padding: 16px 0;
    overflow: hidden;
    width: 100%;
    transform: rotate(-1.5deg) scale(1.05);
    box-shadow: 0 5px 20px rgba(250, 204, 21, 0.3);
    display: flex;
    white-space: nowrap;
  }
  .ticker-content {
    display: flex;
    animation: tickerScroll 10s linear infinite;
    font-weight: 800;
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .ticker-content span {
    padding: 0 1.5rem;
  }
  @keyframes tickerScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @media screen and (max-width: 768px) {
    .urgency-ticker-wrapper { margin: 20px 0 40px 0 !important; }
    .urgency-ticker { padding: 12px 0; }
    .ticker-content { font-size: 1rem; }
  }
  </style>
</div>
<div class="works-grid" style="margin-top:20px;">`;

// We must restore the TWO closing divs we accidentally destroyed, 
// AND we must ensure urgency-ticker-wrapper properly spans full width (grid-column: 1 / -1)!
const fixedCode = `</div></div>
<div class="urgency-ticker-wrapper" style="grid-column: 1 / -1; width: 100%; margin: 0 0 40px 0; overflow: hidden; border-radius: 12px; z-index: 10;">
  <div class="urgency-ticker">
    <div class="ticker-content">
      <span>Batches Now Enrolling 🔴</span>
      <span>Batches Now Enrolling 🔴</span>
      <span>Batches Now Enrolling 🔴</span>
      <span>Batches Now Enrolling 🔴</span>
      <span>Batches Now Enrolling 🔴</span>
      <span>Batches Now Enrolling 🔴</span>
      <span>Batches Now Enrolling 🔴</span>
      <span>Batches Now Enrolling 🔴</span>
      <span>Batches Now Enrolling 🔴</span>
      <span>Batches Now Enrolling 🔴</span>
      <span>Batches Now Enrolling 🔴</span>
      <span>Batches Now Enrolling 🔴</span>
      <span>Batches Now Enrolling 🔴</span>
    </div>
  </div>
  <style>
  .urgency-ticker {
    background: #ccff00;
    color: #111;
    padding: 12px 0;
    overflow: hidden;
    width: 100%;
    transform: rotate(-1deg) scale(1.02);
    box-shadow: 0 10px 30px rgba(204, 255, 0, 0.2);
    display: flex;
    white-space: nowrap;
  }
  .ticker-content {
    display: flex;
    animation: tickerScroll 12s linear infinite;
    font-weight: 900;
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .ticker-content span {
    padding: 0 2rem;
  }
  @keyframes tickerScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @media screen and (max-width: 768px) {
    .urgency-ticker-wrapper { margin: 20px 0 40px 0 !important; border-radius: 8px; }
    .urgency-ticker { padding: 8px 0; }
    .ticker-content { font-size: 1.1rem; }
  }
  </style>
</div>
<div class="works-grid">`;

// Fix the file
if (content.indexOf(injectedCode) !== -1) {
  content = content.replace(injectedCode, fixedCode);
  fs.writeFileSync('fooror.com/en-us.html', content);
  console.log('Fixed grid layout and improved ticker aesthetics!');
} else {
  console.log('Could not find injected code to fix!');
}
