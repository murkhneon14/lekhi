const fs = require('fs');
let content = fs.readFileSync('fooror.com/en-us.html', 'utf-8');

// Replace "Selected projects" with "Notice Board"
content = content.replace(
  '<h2 class="txt-56"><span class="thin"><strong>Selected projects<br/></strong></span></h2>',
  '<h2 class="txt-56"><span class="thin"><strong>Notice Board<br/></strong></span></h2>'
);

// Inject the Urgency Ticker immediately after the heading
const urgencyTicker = `
</div>
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
<div class="works-grid" style="margin-top:20px;">
`;

content = content.replace(
  /<\/div><\/div><div class="works-grid">/,
  urgencyTicker
);

fs.writeFileSync('fooror.com/en-us.html', content);
console.log('Notice board and urgency ticker added!');
