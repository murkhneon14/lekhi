const fs = require('fs');
let content = fs.readFileSync('fooror.com/en-us.html', 'utf-8');

// 1. Remove the Locales Wrapper (Language toggles UA/EN)
content = content.replace(
  /<div class="locales-wrapper mob-hide w-locales-list">[\s\S]*?<\/div><\/div><\/div>/,
  ''
);

// 2. Remove the Mobile Locales Wrapper
content = content.replace(
  /<div class="locales-wrapper w-locales-list">[\s\S]*?<\/div><\/div><\/div>/,
  ''
);

// 3. Update the Headline
content = content.replace(
  /<h1 fetchpriority="high" class="heading"><span class="thin">We curate students<br\/><\/span>that filling seats <br\/>‍<span class="shadows">at college<\/span><\/h1>/,
  '<h1 fetchpriority="high" class="heading"><span class="thin">The coaching center<br/></span>that fills college seats <br/>‍<span class="shadows">not classrooms</span></h1>'
);

fs.writeFileSync('fooror.com/en-us.html', content);
console.log('Removed UA section and updated headline!');
