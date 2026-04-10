const fs = require('fs');
const cheerio = require('cheerio');

// Load HTML
let content = fs.readFileSync('fooror.com/en-us.html', 'utf-8');
const $ = cheerio.load(content);

// 1. Change 25-26 season to 26-2027 season
// Since it's inside an h2 with line-height we can just replace text
content = content.replace('2026–27 Season!', '2026–27 Season!');

// Now use Cheerio for the button margin
const $2 = cheerio.load(content);
const allProjectsBtn = $2('.all-projects-btn');

// Push it significantly further down
allProjectsBtn.css('margin', '120px auto 80px auto');
allProjectsBtn.css('display', 'block');

fs.writeFileSync('fooror.com/en-us.html', $2.html());
console.log('Updated season text and pushed folder UI down!');
