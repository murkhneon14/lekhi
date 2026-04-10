const fs = require('fs');
const cheerio = require('cheerio');

// ============================================================
// PART 1: Fix the HOME PAGE — remove gallery, restore courses
// ============================================================
let homeHTML = fs.readFileSync('fooror.com/en-us.html', 'utf-8');
const $home = cheerio.load(homeHTML);

// 1a. Replace gallery section with courses section
const galleryDiv = $home('#gallery-section');
if (galleryDiv.length) {
  const coursesHTML = `
<div id="courses-section" style="padding: 0 5%; margin-bottom: 80px; margin-top: 20px;">
  <div style="margin-bottom: 50px;">
    <h2 class="txt-56" style="line-height: 1.1; margin-bottom: 15px;">
      <span class="thin" style="color: #666;">Courses</span><br>
      Offered
    </h2>
    <div style="width: 80px; height: 5px; background: #FACC15; border-radius: 10px;"></div>
  </div>

  <div style="margin-bottom: 50px; background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%); border-radius: 20px; padding: 40px 45px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
    <div style="display: inline-flex; align-items: center; gap: 10px; margin-bottom: 30px;">
      <span style="font-size: 1.8rem;">🏆</span>
      <h3 class="txt-40" style="margin: 0; font-weight: 700; color: #111;">Competitive Courses</h3>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
      <div style="display: flex; align-items: flex-start; gap: 16px; background: #fff; border-radius: 14px; padding: 22px 24px; border: 1px solid rgba(0,0,0,0.06);">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #FACC15; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; color: #111;">1</div>
        <div>
          <div class="txt-20" style="font-weight: 700; color: #111; margin-bottom: 4px;">NERIST Entrance Exam (NEE)</div>
          <div style="font-size: 0.9rem; color: #888; font-weight: 500;">NEE 1 &amp; NEE 2 Preparation</div>
        </div>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 16px; background: #fff; border-radius: 14px; padding: 22px 24px; border: 1px solid rgba(0,0,0,0.06);">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #FACC15; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; color: #111;">2</div>
        <div>
          <div class="txt-20" style="font-weight: 700; color: #111; margin-bottom: 4px;">Arunachal Pradesh Joint Entrance Exam (APJEE)</div>
          <div style="font-size: 0.9rem; color: #888; font-weight: 500;">State-level entrance preparation</div>
        </div>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 16px; background: #fff; border-radius: 14px; padding: 22px 24px; border: 1px solid rgba(0,0,0,0.06);">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #FACC15; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; color: #111;">3</div>
        <div>
          <div class="txt-20" style="font-weight: 700; color: #111; margin-bottom: 4px;">JEE</div>
          <div style="font-size: 0.9rem; color: #888; font-weight: 500;">Joint Entrance Examination</div>
        </div>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 16px; background: #fff; border-radius: 14px; padding: 22px 24px; border: 1px solid rgba(0,0,0,0.06);">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #FACC15; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; color: #111;">4</div>
        <div>
          <div class="txt-20" style="font-weight: 700; color: #111; margin-bottom: 4px;">SAINIK / JNV School Entrance</div>
          <div style="font-size: 0.9rem; color: #888; font-weight: 500;">Defence &amp; Navodaya school prep</div>
        </div>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 16px; background: #fff; border-radius: 14px; padding: 22px 24px; border: 1px solid rgba(0,0,0,0.06);">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #FACC15; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; color: #111;">5</div>
        <div>
          <div class="txt-20" style="font-weight: 700; color: #111; margin-bottom: 4px;">Elementary Mathematics</div>
          <div style="font-size: 0.9rem; color: #888; font-weight: 500;">Strong math foundation</div>
        </div>
      </div>
    </div>
  </div>

  <div style="margin-bottom: 50px; background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%); border-radius: 20px; padding: 40px 45px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
    <div style="display: inline-flex; align-items: center; gap: 10px; margin-bottom: 30px;">
      <span style="font-size: 1.8rem;">📚</span>
      <h3 class="txt-40" style="margin: 0; font-weight: 700; color: #111;">Regular Courses</h3>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
      <div style="display: flex; align-items: flex-start; gap: 16px; background: #fff; border-radius: 14px; padding: 22px 24px; border: 1px solid rgba(0,0,0,0.06);">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #A78BFA; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; color: #fff;">1</div>
        <div>
          <div class="txt-20" style="font-weight: 700; color: #111; margin-bottom: 4px;">Regular Tuition Classes — Class 8–12th</div>
          <div style="font-size: 0.9rem; color: #888; font-weight: 500;">Science stream focused</div>
        </div>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 16px; background: #fff; border-radius: 14px; padding: 22px 24px; border: 1px solid rgba(0,0,0,0.06);">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #A78BFA; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; color: #fff;">2</div>
        <div>
          <div class="txt-20" style="font-weight: 700; color: #111; margin-bottom: 4px;">Vacational / Crash Course</div>
          <div style="font-size: 0.9rem; color: #888; font-weight: 500;">Intensive short-term batches</div>
        </div>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 16px; background: #fff; border-radius: 14px; padding: 22px 24px; border: 1px solid rgba(0,0,0,0.06);">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #A78BFA; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; color: #fff;">3</div>
        <div>
          <div class="txt-20" style="font-weight: 700; color: #111; margin-bottom: 4px;">English Grammar</div>
          <div style="font-size: 0.9rem; color: #888; font-weight: 500;">Language &amp; communication skills</div>
        </div>
      </div>
    </div>
  </div>

  <div style="background: linear-gradient(135deg, #111 0%, #1a1a2e 100%); border-radius: 20px; padding: 40px 45px; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 4px 30px rgba(0,0,0,0.15);">
    <div style="display: inline-flex; align-items: center; gap: 10px; margin-bottom: 20px;">
      <span style="font-size: 1.8rem;">⚡</span>
      <h3 class="txt-40" style="margin: 0; font-weight: 700; color: #fff;">What Makes Us Different?</h3>
    </div>
    <div style="display: flex; align-items: center; gap: 16px; background: rgba(255,255,255,0.06); border-radius: 14px; padding: 22px 28px; border: 1px solid rgba(255,255,255,0.1);">
      <div style="flex-shrink: 0; width: 50px; height: 50px; background: #FACC15; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.8rem;">🔬</div>
      <div>
        <div class="txt-24" style="font-weight: 700; color: #fff; margin-bottom: 4px;">We Provide Science Practical Classes</div>
        <div style="font-size: 0.95rem; color: rgba(255,255,255,0.5); font-weight: 500;">Hands-on lab experience for better understanding</div>
      </div>
    </div>
  </div>
</div>`;

  galleryDiv.replaceWith(coursesHTML);
  console.log('   ✅ Replaced gallery with courses on home page');
} else {
  console.log('   ⚠️ No gallery section found, courses may already be there');
}

// 1b. Update sidebar Gallery link → point to gallery.html page
$home('.menu-list a').each(function() {
  const txt = $home(this).find('.menu-txt').text().trim();
  if (txt === 'Gallery') {
    $home(this).attr('href', 'en-us/gallery.html');
  }
});

fs.writeFileSync('fooror.com/en-us.html', $home.html());
console.log('   ✅ Sidebar Gallery link → en-us/gallery.html');
console.log('   ✅ Home page saved');

// ============================================================
// PART 2: Create gallery.html (standalone page like contacts)
// ============================================================
// Copy contacts.html as the template
let contactsHTML = fs.readFileSync('fooror.com/en-us/contacts.html', 'utf-8');
const $gallery = cheerio.load(contactsHTML);

// 2a. Update page title & meta
$gallery('title').text('The Lekhi Tutorials | Gallery');
$gallery('meta[name="description"]').attr('content', 'Photo gallery of The Lekhi Tutorials coaching center in Arunachal Pradesh.');
$gallery('meta[property="og:title"]').attr('content', 'The Lekhi Tutorials | Gallery');
$gallery('meta[property="og:description"]').attr('content', 'Photo gallery of The Lekhi Tutorials coaching center.');
$gallery('meta[property="twitter:title"]').attr('content', 'The Lekhi Tutorials | Gallery');
$gallery('meta[property="twitter:description"]').attr('content', 'Photo gallery of The Lekhi Tutorials coaching center.');

// 2b. Fix sidebar menu — add Gallery item, remove w--current from contacts
$gallery('.menu-list').empty();
$gallery('.menu-list').append(`
  <a href="../en-us.html" class="button white w-inline-block">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 64 64" fill="none" class="icon-48">
      <path d="M7.11133 26.6927C7.11133 26.1185 7.3886 25.5797 7.85579 25.246L29.9336 9.47616C31.1699 8.59312 32.8306 8.59312 34.0668 9.47616L56.1446 25.246C56.6118 25.5797 56.8891 26.1185 56.8891 26.6927V28.4444C56.8891 29.4263 56.0932 30.2222 55.1113 30.2222H8.88911C7.90727 30.2222 7.11133 29.4263 7.11133 28.4444V26.6927Z" fill="currentColor"></path>
      <path d="M50.666 24.8887C51.6477 24.8887 52.4441 25.6844 52.4443 26.666V53.333C52.4443 54.3148 51.6479 55.1113 50.666 55.1113L40.691 55.1113C40.2775 55.1113 39.9999 54.6362 40 54.2227L40 40.8887C39.9999 37.9432 37.6115 35.5557 34.666 35.5557H29.333C26.3875 35.5557 24.0001 37.9432 24 40.8887L24 54.2227C24.0001 54.6361 23.7217 55.1113 23.3082 55.1113H13.333C12.3512 55.1113 11.5547 54.3148 11.5547 53.333V26.666C11.5549 25.6844 12.3513 24.8887 13.333 24.8887H50.666Z" fill="currentColor"></path>
    </svg>
    <div class="menu-txt">Home</div>
  </a>
  <a href="gallery.html" aria-current="page" class="button white w-inline-block w--current">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 64 64" fill="none" class="icon-48">
      <path d="M52 16H42L38 10H26L22 16H12C9.79 16 8 17.79 8 20V50C8 52.21 9.79 54 12 54H52C54.21 54 56 52.21 56 50V20C56 17.79 54.21 16 52 16ZM32 46C25.37 46 20 40.63 20 34C20 27.37 25.37 22 32 22C38.63 22 44 27.37 44 34C44 40.63 38.63 46 32 46Z" fill="currentColor"/>
      <circle cx="32" cy="34" r="8" fill="currentColor" opacity="0.5"/>
    </svg>
    <div class="menu-txt">Gallery</div>
  </a>
  <a href="consultation.html" class="button white w-inline-block">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 64 64" fill="none" class="icon-48">
      <path d="M49.667 8.33398C52.0096 8.33407 54.2566 9.26331 55.9131 10.918C57.5696 12.5727 58.5 14.8171 58.5 17.1572V40.6865C58.5 43.0266 57.5696 45.2711 55.9131 46.9258C54.2566 48.5804 52.0096 49.5097 49.667 49.5098H35.4978C35.1356 49.5098 34.7802 49.6081 34.4696 49.7943L23.2509 56.5188C21.9178 57.3179 20.2227 56.3576 20.2227 54.8034V51.5098C20.2227 50.4052 19.3272 49.5098 18.2227 49.5098H14.333C11.9904 49.5097 9.74341 48.5804 8.08691 46.9258C6.43044 45.2711 5.5 43.0266 5.5 40.6865V17.1572C5.5 14.8171 6.43043 12.5727 8.08691 10.918C9.74341 9.26331 11.9904 8.33407 14.333 8.33398H49.667ZM18.6562 30.8311C17.8278 30.8311 17.1562 31.5026 17.1562 32.3311C17.1562 33.1595 17.8278 33.8311 18.6562 33.8311H37.6562C38.4847 33.8311 39.1562 33.1595 39.1562 32.3311C39.1562 31.5026 38.4847 30.8311 37.6562 30.8311H18.6562ZM18.6562 23.8311C17.8278 23.8311 17.1562 24.5026 17.1562 25.3311C17.1562 26.1595 17.8278 26.8311 18.6562 26.8311H45.6562C46.4847 26.8311 47.1562 26.1595 47.1562 25.3311C47.1562 24.5026 46.4847 23.8311 45.6562 23.8311H18.6562Z" fill="currentColor"></path>
    </svg>
    <div class="menu-txt">Consultation</div>
  </a>
  <a contacts-btn="" href="contacts.html" class="button white w-inline-block">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 64 64" fill="none" class="icon-48">
      <path d="M48.3633 8.6748C50.1755 8.76478 51.8954 9.52443 53.1846 10.8135C54.5598 12.1887 55.3329 14.0542 55.333 15.999L55.333 47.999C55.333 49.9439 54.5598 51.8093 53.1846 53.1846C51.8093 54.5598 49.9439 55.333 47.999 55.333L21.333 55.333C19.3881 55.333 17.5227 54.5598 16.1475 53.1846C14.7722 51.8093 13.999 49.9439 13.999 47.999L13.999 44.666L10.666 44.666C9.56145 44.666 8.66602 43.7706 8.66602 42.666C8.66602 41.5614 9.56145 40.666 10.666 40.666L13.999 40.666L13.999 33.999L10.666 33.999C9.56145 33.999 8.66602 33.1036 8.66602 31.999C8.66619 30.8946 9.56156 29.999 10.666 29.999L13.999 29.999L13.999 23.333L10.666 23.333C9.56155 23.333 8.66619 22.4374 8.66602 21.333C8.66602 20.2284 9.56145 19.333 10.666 19.333L13.999 19.333L13.999 15.999C13.9991 14.0542 14.7723 12.1887 16.1475 10.8135C17.5227 9.43841 19.3882 8.66602 21.333 8.66602L47.999 8.66602L48.3633 8.6748ZM26.3457 39.9189C25.5173 39.9189 24.8457 40.5905 24.8457 41.4189C24.8457 42.2474 25.5173 42.9189 26.3457 42.9189L44.3457 42.9189C45.1741 42.9189 45.8457 42.2474 45.8457 41.4189C45.8457 40.5905 45.1741 39.9189 44.3457 39.9189L26.3457 39.9189ZM35.3457 19.4189C30.3751 19.4189 26.3457 23.4484 26.3457 28.4189C26.3457 33.3895 30.3751 37.4189 35.3457 37.4189C40.3163 37.4189 44.3457 33.3895 44.3457 28.4189C44.3457 23.4484 40.3163 19.4189 35.3457 19.4189Z" fill="currentColor"></path>
    </svg>
    <div class="menu-txt">Contacts</div>
  </a>
`);

// 2c. Fix the header Contacts button — remove w--current
$gallery('.header-btn').removeClass('w--current');
$gallery('.header-btn').attr('href', 'contacts.html');

// 2d. Update hero breadcrumb & heading
const heroWrap = $gallery('.hero-heading-wrap');
heroWrap.empty();
heroWrap.append(`
  <div class="way">
    <a data-w-id="breadcrumb-home" href="../en-us.html" class="menu-item white w-inline-block">
      <div class="menu-txt small">Home</div>
    </a>
    <div class="menu-txt small op-60">/</div>
    <a href="gallery.html" aria-current="page" class="menu-item white w-inline-block w--current">
      <div class="menu-txt small">Gallery</div>
    </a>
  </div>
  <h1 class="heading">
    <strong>Our Coaching Center</strong> <br>
    <span class="shadows yellow">a glimpse into life at Lekhi</span>
  </h1>
`);

// 2e. Replace the entire contacts card with the gallery masonry grid
const cardWrap = $gallery('.s2-card-wrap');
cardWrap.removeAttr('class');
cardWrap.attr('style', 'width: 100%;');

cardWrap.empty();
cardWrap.append(`
<style>
  .lekhi-gallery-grid {
    columns: 3;
    column-gap: 16px;
    padding: 0 20px 60px 20px;
  }
  .lekhi-gallery-item {
    break-inside: avoid;
    margin-bottom: 16px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease;
  }
  .lekhi-gallery-item:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 50px rgba(0,0,0,0.4);
    z-index: 10;
  }
  .lekhi-gallery-item img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 16px;
    transition: filter 0.4s ease;
  }
  .lekhi-gallery-item:hover img {
    filter: brightness(1.08);
  }
  .lekhi-gallery-item .gallery-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.4s ease;
    border-radius: 16px;
    display: flex;
    align-items: flex-end;
    padding: 20px;
  }
  .lekhi-gallery-item:hover .gallery-overlay {
    opacity: 1;
  }
  .gallery-overlay span {
    color: #fff;
    font-weight: 600;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
  }
  @media (max-width: 991px) {
    .lekhi-gallery-grid { columns: 2; }
  }
  @media (max-width: 600px) {
    .lekhi-gallery-grid { columns: 1; padding: 0 10px 40px 10px; }
  }
</style>

<div class="lekhi-gallery-grid">
  <div class="lekhi-gallery-item">
    <img src="https://lh3.googleusercontent.com/p/AF1QipMNimJN90YbCTYeW-0lGUOh2N7z5IfCI-c2KjG0=w800-h600-k-no" alt="Lekhi Tutorials" loading="lazy"/>
    <div class="gallery-overlay"><span>📸 Our Classroom</span></div>
  </div>
  <div class="lekhi-gallery-item">
    <img src="https://lh3.googleusercontent.com/p/AF1QipMvQJDhpjNgAz1TYTO0bGHngaP0n00Mn-GS7sSJ=w800-h1200-k-no" alt="Lekhi Tutorials" loading="lazy"/>
    <div class="gallery-overlay"><span>📸 Campus Life</span></div>
  </div>
  <div class="lekhi-gallery-item">
    <img src="https://lh3.googleusercontent.com/p/AF1QipMaMXO1sm_eGmh2tebZlQtZ4c52iJPlgc44HWYF=w800-h600-k-no" alt="Lekhi Tutorials" loading="lazy"/>
    <div class="gallery-overlay"><span>📸 Student Life</span></div>
  </div>
  <div class="lekhi-gallery-item">
    <img src="https://lh3.googleusercontent.com/p/AF1QipMOb8qHh7SU_gerMi4CC7IHwp0UJyLwY5m9cC54=w800-h600-k-no" alt="Lekhi Tutorials" loading="lazy"/>
    <div class="gallery-overlay"><span>📸 Activities</span></div>
  </div>
  <div class="lekhi-gallery-item">
    <img src="https://lh3.googleusercontent.com/p/AF1QipMVGTvQqDLh9UgLq0LwWpE0wcSVZX1h9_AGpx66=w800-h600-k-no" alt="Lekhi Tutorials" loading="lazy"/>
    <div class="gallery-overlay"><span>📸 Our Environment</span></div>
  </div>
  <div class="lekhi-gallery-item">
    <img src="https://lh3.googleusercontent.com/p/AF1QipPNJV15YkxX0prmnXK1BLWMKvgNNmR7oenRvB65=w800-h600-k-no" alt="Lekhi Tutorials" loading="lazy"/>
    <div class="gallery-overlay"><span>📸 Sessions</span></div>
  </div>
  <div class="lekhi-gallery-item">
    <img src="https://lh3.googleusercontent.com/p/AF1QipNjCdF2YW6-3cqaVdydtprQgyXB3h5JsV-swJF-=w800-h600-k-no" alt="Lekhi Tutorials" loading="lazy"/>
    <div class="gallery-overlay"><span>📸 Moments</span></div>
  </div>
  <div class="lekhi-gallery-item">
    <img src="https://lh3.googleusercontent.com/p/AF1QipPpYjX8d1sBIv8aMr-L_zFyIqB6U-c4YznG4hiU=w800-h600-k-no" alt="Lekhi Tutorials" loading="lazy"/>
    <div class="gallery-overlay"><span>📸 The Center</span></div>
  </div>
</div>
`);

// 2f. Write gallery.html
fs.writeFileSync('fooror.com/en-us/gallery.html', $gallery.html());
console.log('   ✅ Created gallery.html (standalone page like consultation/contacts)');

// ============================================================
// PART 3: Also update consultation.html & contacts.html sidebar
//         to include the Gallery link
// ============================================================
const pages = ['fooror.com/en-us/consultation.html', 'fooror.com/en-us/contacts.html'];
pages.forEach(pagePath => {
  let html = fs.readFileSync(pagePath, 'utf-8');
  const $p = cheerio.load(html);
  
  const menuList = $p('.menu-list');
  const existingGallery = menuList.find('a').filter(function() {
    return $p(this).find('.menu-txt').text().trim() === 'Gallery';
  });
  
  if (existingGallery.length === 0) {
    // Insert Gallery between Home and Consultation
    const homeLink = menuList.find('a').first();
    homeLink.after(`
  <a href="gallery.html" class="button white w-inline-block">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 64 64" fill="none" class="icon-48">
      <path d="M52 16H42L38 10H26L22 16H12C9.79 16 8 17.79 8 20V50C8 52.21 9.79 54 12 54H52C54.21 54 56 52.21 56 50V20C56 17.79 54.21 16 52 16ZM32 46C25.37 46 20 40.63 20 34C20 27.37 25.37 22 32 22C38.63 22 44 27.37 44 34C44 40.63 38.63 46 32 46Z" fill="currentColor"/>
      <circle cx="32" cy="34" r="8" fill="currentColor" opacity="0.5"/>
    </svg>
    <div class="menu-txt">Gallery</div>
  </a>
    `);
    fs.writeFileSync(pagePath, $p.html());
    console.log(`   ✅ Added Gallery link to sidebar in ${pagePath.split('/').pop()}`);
  } else {
    console.log(`   ⏭️ Gallery link already exists in ${pagePath.split('/').pop()}`);
  }
});

console.log('\n🎉 ALL DONE!');
console.log('   📄 Home page: Courses restored, Gallery removed from notice board');
console.log('   📄 gallery.html: New standalone page created (like consultation/contacts)');
console.log('   📄 Sidebar: Gallery link added to ALL pages');
