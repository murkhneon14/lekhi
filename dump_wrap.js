const fs = require('fs');
const cheerio = require('cheerio');
const content = fs.readFileSync('fooror.com/en-us.html', 'utf-8');
const $ = cheerio.load(content);
console.log($('.all-projects-wrap').html());
