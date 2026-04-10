const fs = require('fs');
const cheerio = require('cheerio');

// Load HTML
let content = fs.readFileSync('fooror.com/en-us.html', 'utf-8');
const $ = cheerio.load(content);

// ============================================================
// 1. Add "COURSES" menu item below HOME in the sidebar menu
// ============================================================
const homeMenuItem = $('.menu-list a.button.white').first(); // The HOME link

const coursesMenuItem = `
<a href="#courses-section" class="button white w-inline-block">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 64 64" fill="none" class="icon-48">
    <path d="M32 6L4 20L32 34L60 20L32 6Z" fill="currentColor"/>
    <path d="M10 24V44C10 44 20 54 32 54C44 54 54 44 54 44V24L32 38L10 24Z" fill="currentColor" opacity="0.7"/>
    <rect x="54" y="20" width="4" height="30" rx="2" fill="currentColor"/>
    <circle cx="56" cy="52" r="4" fill="currentColor"/>
  </svg>
  <div class="menu-txt">Courses</div>
</a>
`;

// Insert after the HOME link
homeMenuItem.after(coursesMenuItem);

// ============================================================
// 2. Add Courses section below the notice board announcement
// ============================================================
const coursesSection = `
<div id="courses-section" style="padding: 0 5%; margin-bottom: 80px; margin-top: 20px;">

  <!-- Section Title -->
  <div style="margin-bottom: 50px;">
    <h2 class="txt-56" style="line-height: 1.1; margin-bottom: 15px;">
      <span class="thin" style="color: #666;">Courses</span><br>
      Offered
    </h2>
    <div style="width: 80px; height: 5px; background: #FACC15; border-radius: 10px;"></div>
  </div>

  <!-- Competitive Courses -->
  <div style="margin-bottom: 50px; background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%); border-radius: 20px; padding: 40px 45px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
    
    <div style="display: inline-flex; align-items: center; gap: 10px; margin-bottom: 30px;">
      <span style="font-size: 1.8rem;">🏆</span>
      <h3 class="txt-40" style="margin: 0; font-weight: 700; color: #111;">Competitive Courses</h3>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
      
      <!-- Course 1 -->
      <div style="display: flex; align-items: flex-start; gap: 16px; background: #fff; border-radius: 14px; padding: 22px 24px; border: 1px solid rgba(0,0,0,0.06); transition: all 0.3s ease;">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #FACC15; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; color: #111;">1</div>
        <div>
          <div class="txt-20" style="font-weight: 700; color: #111; margin-bottom: 4px;">NERIST Entrance Exam (NEE)</div>
          <div style="font-size: 0.9rem; color: #888; font-weight: 500;">NEE 1 & NEE 2 Preparation</div>
        </div>
      </div>

      <!-- Course 2 -->
      <div style="display: flex; align-items: flex-start; gap: 16px; background: #fff; border-radius: 14px; padding: 22px 24px; border: 1px solid rgba(0,0,0,0.06); transition: all 0.3s ease;">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #FACC15; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; color: #111;">2</div>
        <div>
          <div class="txt-20" style="font-weight: 700; color: #111; margin-bottom: 4px;">Arunachal Pradesh Joint Entrance Exam (APJEE)</div>
          <div style="font-size: 0.9rem; color: #888; font-weight: 500;">State-level entrance preparation</div>
        </div>
      </div>

      <!-- Course 3 -->
      <div style="display: flex; align-items: flex-start; gap: 16px; background: #fff; border-radius: 14px; padding: 22px 24px; border: 1px solid rgba(0,0,0,0.06); transition: all 0.3s ease;">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #FACC15; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; color: #111;">3</div>
        <div>
          <div class="txt-20" style="font-weight: 700; color: #111; margin-bottom: 4px;">JEE</div>
          <div style="font-size: 0.9rem; color: #888; font-weight: 500;">Joint Entrance Examination</div>
        </div>
      </div>

      <!-- Course 4 -->
      <div style="display: flex; align-items: flex-start; gap: 16px; background: #fff; border-radius: 14px; padding: 22px 24px; border: 1px solid rgba(0,0,0,0.06); transition: all 0.3s ease;">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #FACC15; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; color: #111;">4</div>
        <div>
          <div class="txt-20" style="font-weight: 700; color: #111; margin-bottom: 4px;">SAINIK / JNV School Entrance</div>
          <div style="font-size: 0.9rem; color: #888; font-weight: 500;">Defence & Navodaya school prep</div>
        </div>
      </div>

      <!-- Course 5 -->
      <div style="display: flex; align-items: flex-start; gap: 16px; background: #fff; border-radius: 14px; padding: 22px 24px; border: 1px solid rgba(0,0,0,0.06); transition: all 0.3s ease;">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #FACC15; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; color: #111;">5</div>
        <div>
          <div class="txt-20" style="font-weight: 700; color: #111; margin-bottom: 4px;">Elementary Mathematics</div>
          <div style="font-size: 0.9rem; color: #888; font-weight: 500;">Strong math foundation</div>
        </div>
      </div>

    </div>
  </div>

  <!-- Normal / Regular Courses -->
  <div style="margin-bottom: 50px; background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%); border-radius: 20px; padding: 40px 45px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
    
    <div style="display: inline-flex; align-items: center; gap: 10px; margin-bottom: 30px;">
      <span style="font-size: 1.8rem;">📚</span>
      <h3 class="txt-40" style="margin: 0; font-weight: 700; color: #111;">Regular Courses</h3>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
      
      <!-- Course 1 -->
      <div style="display: flex; align-items: flex-start; gap: 16px; background: #fff; border-radius: 14px; padding: 22px 24px; border: 1px solid rgba(0,0,0,0.06); transition: all 0.3s ease;">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #A78BFA; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; color: #fff;">1</div>
        <div>
          <div class="txt-20" style="font-weight: 700; color: #111; margin-bottom: 4px;">Regular Tuition Classes — Class 8–12th</div>
          <div style="font-size: 0.9rem; color: #888; font-weight: 500;">Science stream focused</div>
        </div>
      </div>

      <!-- Course 2 -->
      <div style="display: flex; align-items: flex-start; gap: 16px; background: #fff; border-radius: 14px; padding: 22px 24px; border: 1px solid rgba(0,0,0,0.06); transition: all 0.3s ease;">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #A78BFA; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; color: #fff;">2</div>
        <div>
          <div class="txt-20" style="font-weight: 700; color: #111; margin-bottom: 4px;">Vacational / Crash Course</div>
          <div style="font-size: 0.9rem; color: #888; font-weight: 500;">Intensive short-term batches</div>
        </div>
      </div>

      <!-- Course 3 -->
      <div style="display: flex; align-items: flex-start; gap: 16px; background: #fff; border-radius: 14px; padding: 22px 24px; border: 1px solid rgba(0,0,0,0.06); transition: all 0.3s ease;">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #A78BFA; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; color: #fff;">3</div>
        <div>
          <div class="txt-20" style="font-weight: 700; color: #111; margin-bottom: 4px;">English Grammar</div>
          <div style="font-size: 0.9rem; color: #888; font-weight: 500;">Language & communication skills</div>
        </div>
      </div>

    </div>
  </div>

  <!-- What Makes Us Different -->
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

</div>
`;

// Find the announcement content div and insert courses section after it
const announcementContent = $('.announcement-content');
announcementContent.after(coursesSection);

// ============================================================
// 3. Remove NEET reference from the notice board (as per ss2: "Don't include Neet")
// ============================================================
// Update the announcement text to remove NEET
const announcementText = announcementContent.find('.txt-40');
if (announcementText.length) {
  let html = announcementText.html();
  html = html.replace(/JEE &amp; NEET/g, 'JEE');
  html = html.replace(/JEE \& NEET/g, 'JEE');
  announcementText.html(html);
}

// Also update the FAQ answer that mentions NEET
$('.answer p.txt-24').each(function() {
  let text = $(this).html();
  if (text.includes('NEET')) {
    text = text.replace(/, JEE \/ NEET/g, ', JEE');
    text = text.replace(/JEE \/ NEET/g, 'JEE');
    text = text.replace(/ NEET/g, '');
    $(this).html(text);
  }
});

// ============================================================
// 4. Add "Courses" link in the footer navigation
// ============================================================
const footerHomeLink = $('.footer-nav a').first();
footerHomeLink.after(`
<a data-w-id="courses-footer-link" href="#courses-section" class="menu-item white w-inline-block">
  <div class="menu-txt small">Courses</div>
  <div class="menu-item-line white"><div class="menu-line-fill white"></div></div>
</a>
`);

// Write the modified HTML
fs.writeFileSync('fooror.com/en-us.html', $.html());
console.log('✅ Courses section added successfully!');
console.log('   - Added "Courses" menu item in sidebar (below Home)');
console.log('   - Added full courses section with Competitive & Regular courses');
console.log('   - Added "What Makes Us Different" highlight');
console.log('   - Removed NEET references');
console.log('   - Added Courses link in footer navigation');
