const fs = require('fs');
const cheerio = require('cheerio');
const content = fs.readFileSync('fooror.com/en-us.html');
const $ = cheerio.load(content);
console.log($('.all-projects-btn').html());
