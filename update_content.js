const fs = require('fs');

let content = fs.readFileSync('fooror.com/en-us.html', 'utf-8');

// 1. Replace the Main Headline
content = content.replace(
  /<h1 fetchpriority="high" class="heading"><span class="thin">We create websites<br\/><\/span>that filling seats <br\/>‍<span class="shadows">at events<\/span><\/h1>/,
  '<h1 fetchpriority="high" class="heading"><span class="thin">We curate students<br/></span>that filling seats <br/>‍<span class="shadows">at college</span></h1>'
);

// 2. Replace the Subheadline stats
content = content.replace(
  /<p fetchpriority="high" class="txt-40">500K\+ tickets<\/p><p fetchpriority="high" class="txt-20">sell to our customers every year<\/p>/,
  '<p fetchpriority="high" class="txt-40">100+ students</p><p fetchpriority="high" class="txt-20">got admission in NERIST</p>'
);

// 3. Replace the Header Logo and remove "event design studio"
content = content.replace(
  /<img src="https:\/\/cdn\.prod\.website-files\.com\/6916200346ddd8428d3d953b\/694b101b5b7c0eb8703ed8fd_9451f3545ad3dc25856ea3973e60485d_logo-fooror\.svg" loading="lazy" width="232\.5" alt="Fooror logo" class="logo"\/><\/a><div class="txt-20 mob-hide"><strong>event design studio<\/strong><\/div>/,
  '<span class="txt-40" style="color: white; font-weight: bold;">The Lekhi Tutorials</span></a>'
);

// 4. Replace the Preloader Logo and remove "event design studio"
content = content.replace(
  /<img src="https:\/\/cdn\.prod\.website-files\.com\/6916200346ddd8428d3d953b\/693d221a7c80db319bbb9b0f_6f4654df343cc4463350d65fe00456c0_fooror-yellow\.svg" loading="lazy" width="232\.5" alt="Fooror logo yellow" class="logo-preloader"\/><p class="txt-56">event design studio<\/p>/,
  '<span class="txt-56" style="color:var(--yellow)"><strong>The Lekhi Tutorials</strong></span>'
);

fs.writeFileSync('fooror.com/en-us.html', content);
console.log('en-us.html updated successfully!');
