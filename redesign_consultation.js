const fs = require('fs');
const cheerio = require('cheerio');

// Load HTML
let content = fs.readFileSync('fooror.com/en-us/consultation.html', 'utf-8');
const $ = cheerio.load(content);

// ============================================================
// 1. FIX NAVBAR — match home page style
// ============================================================

// Replace the page title
$('title').text('The Lekhi Tutorials | Enquire Now');
$('meta[name="description"]').attr('content', 'Enquire about admissions at The Lekhi Tutorials. Fill a short form and book your free demo class.');

// Replace the preloader logo + text
const transitionWrapper = $('.transition-wrapper');
transitionWrapper.empty();
transitionWrapper.append('<span class="txt-56" style="color:var(--yellow)"><strong>The Lekhi Tutorials</strong></span>');

// Replace the header logo area — match home page exactly
const logoTxtWrap = $('.logo-txt-wrap');
logoTxtWrap.empty();
logoTxtWrap.append(`
  <a href="../en-us.html" class="logo-wrap w-inline-block">
    <style>.logo-wrap { text-decoration: none !important; border: none !important; box-shadow: none !important; }</style>
    <span class="txt-32" style="color: #111; font-weight: 800; font-family: 'Inter', system-ui, -apple-system, sans-serif; letter-spacing: -0.5px; text-decoration: none;">The Lekhi Tutorials</span>
  </a>
`);

// Remove the UA/EN language toggle from the header bar
$('.locales-wrapper').remove();

// Remove "event design studio" text
$('.txt-20.mob-hide').remove();

// Fix sidebar menu — replace with home-page style items
const menuList = $('.menu-list');
menuList.empty();
menuList.append(`
  <a href="../en-us.html" class="button white w-inline-block">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 64 64" fill="none" class="icon-48">
      <path d="M7.11133 26.6927C7.11133 26.1185 7.3886 25.5797 7.85579 25.246L29.9336 9.47616C31.1699 8.59312 32.8306 8.59312 34.0668 9.47616L56.1446 25.246C56.6118 25.5797 56.8891 26.1185 56.8891 26.6927V28.4444C56.8891 29.4263 56.0932 30.2222 55.1113 30.2222H8.88911C7.90727 30.2222 7.11133 29.4263 7.11133 28.4444V26.6927Z" fill="currentColor"></path>
      <path d="M50.666 24.8887C51.6477 24.8887 52.4441 25.6844 52.4443 26.666V53.333C52.4443 54.3148 51.6479 55.1113 50.666 55.1113L40.691 55.1113C40.2775 55.1113 39.9999 54.6362 40 54.2227L40 40.8887C39.9999 37.9432 37.6115 35.5557 34.666 35.5557H29.333C26.3875 35.5557 24.0001 37.9432 24 40.8887L24 54.2227C24.0001 54.6361 23.7217 55.1113 23.3082 55.1113H13.333C12.3512 55.1113 11.5547 54.3148 11.5547 53.333V26.666C11.5549 25.6844 12.3513 24.8887 13.333 24.8887H50.666Z" fill="currentColor"></path>
    </svg>
    <div class="menu-txt">Home</div>
  </a>
  <a href="consultation.html" aria-current="page" class="button white w-inline-block w--current">
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

// Fix the sidebar lottie text to match the home page
$('.menu-bubble-txt').html("I'm ready to crack<br>NEE 2027!");
$('.menu-bubble-txt-2').text("Yeah, text them");
$('.lottie-txt').html("One of Lekhi's<br>future toppers");

// Remove bubble image (home page doesn't use one)  
$('.bubble-img').remove();

// ============================================================
// 2. FIX HERO HEADLINE
// ============================================================
const heroHeading = $('h1.heading');
heroHeading.html(`Let's start your <br/><span class="shadows yellow">journey to success</span>`);

// ============================================================
// 3. REPLACE THE ENTIRE FORM SECTION
// ============================================================
const formSection = $('.s2-card-wrap._w-70');

// Clear and rebuild
formSection.empty();

formSection.append(`
  <!-- Form Header -->
  <div class="s2-heading-wrap">
    <div class="hor-wrap align-center">
      <h2 class="txt-40"><strong>Fill out the short form below,</strong> <br/>and we will get back to you within 24 hours</h2>
    </div>
  </div>

  <!-- Custom Form -->
  <div class="form-wrap">
    <div class="w-embed"><style>
      .demo-input-field:focus + .demo-label,
      .demo-input-field:not(:placeholder-shown) + .demo-label {
        top: 0%;
        font-size: 1.25em;
        color:var(--purple);
      }

      .radio-btn.w--redirected-checked ~ .radio-txt,
      .custom-radio-btn.active .radio-txt {
        color: #fff;
      }

      /* Toggle button styles for our custom form */
      .lekhi-toggle-btn {
        display: inline-flex;
        align-items: center;
        padding: 10px 22px;
        border-radius: 100px;
        border: 1.5px solid rgba(0,0,0,0.12);
        background: #fff;
        font-size: 1rem;
        font-weight: 600;
        color: #333;
        cursor: pointer;
        transition: all 0.25s ease;
        user-select: none;
        gap: 8px;
      }
      .lekhi-toggle-btn:hover {
        border-color: rgba(0,0,0,0.25);
        background: #fafafa;
      }
      .lekhi-toggle-btn.active {
        background: var(--purple, #6C3AED);
        color: #fff;
        border-color: var(--purple, #6C3AED);
        box-shadow: 0 4px 15px rgba(108, 58, 237, 0.3);
      }

      .lekhi-field-wrap {
        position: relative;
        width: 100%;
        margin-bottom: 6px;
      }
      .lekhi-input {
        width: 100%;
        padding: 20px 16px 8px 16px;
        border: 1.5px solid rgba(0,0,0,0.1);
        border-radius: 12px;
        background: #fff;
        font-size: 1.05rem;
        font-family: 'Manrope', sans-serif;
        font-weight: 500;
        color: #111;
        outline: none;
        transition: border-color 0.2s;
      }
      .lekhi-input:focus {
        border-color: var(--purple, #6C3AED);
      }
      .lekhi-input::placeholder {
        color: #bbb;
        font-weight: 400;
      }
      .lekhi-label {
        position: absolute;
        top: -10px;
        left: 14px;
        background: #fff;
        padding: 0 6px;
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--purple, #6C3AED);
        letter-spacing: 0.5px;
        text-transform: uppercase;
        pointer-events: none;
      }

      .whatsapp-submit-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        width: 100%;
        padding: 18px 30px;
        background: #25D366;
        color: #fff;
        border: none;
        border-radius: 60px;
        font-size: 1.25rem;
        font-weight: 800;
        font-family: 'Manrope', sans-serif;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 8px 25px rgba(37, 211, 102, 0.35);
        text-transform: none;
        letter-spacing: 0.5px;
        margin-top: 10px;
      }
      .whatsapp-submit-btn:hover {
        background: #1EBE5D;
        box-shadow: 0 12px 35px rgba(37, 211, 102, 0.5);
        transform: translateY(-2px);
      }
      .whatsapp-submit-btn:active {
        transform: translateY(0);
      }
      .whatsapp-submit-btn svg {
        flex-shrink: 0;
      }

      .lekhi-error-msg {
        color: #D32F2F;
        font-size: 0.85rem;
        font-weight: 600;
        margin-top: 8px;
        display: none;
      }

      .lekhi-section-label {
        font-size: 1rem;
        font-weight: 700;
        color: #666;
        margin-bottom: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .lekhi-toggles-row {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 30px;
      }

      .lekhi-fields-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-bottom: 20px;
      }
      .lekhi-fields-grid .full-width {
        grid-column: 1 / -1;
      }

      @media (max-width: 768px) {
        .lekhi-fields-grid {
          grid-template-columns: 1fr;
        }
      }
    </style></div>

    <div id="lekhi-enquiry-form" style="padding: 0 10px;">

      <!-- Enquiring as -->
      <div style="margin-bottom: 35px;">
        <div class="lekhi-section-label">I am enquiring for</div>
        <div class="lekhi-toggles-row" data-group="role">
          <div class="lekhi-toggle-btn active" data-value="Myself (Student)">🎓 Myself (Student)</div>
          <div class="lekhi-toggle-btn" data-value="My Child (Parent)">👨‍👩‍👦 My Child (Parent)</div>
          <div class="lekhi-toggle-btn" data-value="General Info">ℹ️ General Info</div>
        </div>
      </div>

      <!-- Course interest -->
      <div style="margin-bottom: 35px;">
        <div class="lekhi-section-label">Which course are you interested in?</div>
        <div class="lekhi-toggles-row" data-group="course">
          <div class="lekhi-toggle-btn" data-value="Class 8-10">📘 Class 8-10</div>
          <div class="lekhi-toggle-btn" data-value="Class 11-12">📗 Class 11-12</div>
          <div class="lekhi-toggle-btn" data-value="NEE">🎯 NEE</div>
          <div class="lekhi-toggle-btn" data-value="JEE">⚡ JEE</div>
        </div>
      </div>

      <!-- Form Fields -->
      <div class="lekhi-fields-grid">
        <div class="lekhi-field-wrap">
          <input class="lekhi-input" id="lekhi-name" type="text" placeholder="Your name" required />
          <div class="lekhi-label">Full Name *</div>
        </div>
        <div class="lekhi-field-wrap">
          <input class="lekhi-input" id="lekhi-phone" type="tel" placeholder="Your WhatsApp number" required />
          <div class="lekhi-label">Phone Number *</div>
        </div>
        <div class="lekhi-field-wrap">
          <input class="lekhi-input" id="lekhi-class" type="text" placeholder="E.g. Class 10, 11..." />
          <div class="lekhi-label">Student's Current Class</div>
        </div>
        <div class="lekhi-field-wrap">
          <input class="lekhi-input" id="lekhi-batch" type="text" placeholder="Morning / Evening" />
          <div class="lekhi-label">Preferred Batch Timing</div>
        </div>
        <div class="lekhi-field-wrap full-width">
          <input class="lekhi-input" id="lekhi-message" type="text" placeholder="Any specific questions?" />
          <div class="lekhi-label">Message (optional)</div>
        </div>
      </div>

      <!-- Error message -->
      <div class="lekhi-error-msg" id="lekhi-error">Please fill in your name and phone number.</div>

      <!-- WhatsApp Submit Button -->
      <button type="button" class="whatsapp-submit-btn" id="lekhi-submit-btn" onclick="submitLekhi()">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#fff">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Book Free Demo Class on WhatsApp
      </button>

    </div>
  </div>
`);

// ============================================================
// 4. ADD THE JAVASCRIPT FOR FORM INTERACTIONS
// ============================================================
// Add the script before the closing body tag
$('body').append(`
<script>
// Toggle button logic
document.querySelectorAll('.lekhi-toggles-row').forEach(function(row) {
  var group = row.getAttribute('data-group');
  row.querySelectorAll('.lekhi-toggle-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (group === 'role') {
        // Single select for role
        row.querySelectorAll('.lekhi-toggle-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
      } else {
        // Multi-select for course
        btn.classList.toggle('active');
      }
    });
  });
});

function submitLekhi() {
  var name = document.getElementById('lekhi-name').value.trim();
  var phone = document.getElementById('lekhi-phone').value.trim();
  var currentClass = document.getElementById('lekhi-class').value.trim();
  var batch = document.getElementById('lekhi-batch').value.trim();
  var message = document.getElementById('lekhi-message').value.trim();
  var errorEl = document.getElementById('lekhi-error');

  // Get selected role
  var roleBtn = document.querySelector('[data-group="role"] .lekhi-toggle-btn.active');
  var role = roleBtn ? roleBtn.getAttribute('data-value') : 'Not specified';

  // Get selected courses
  var courseBtns = document.querySelectorAll('[data-group="course"] .lekhi-toggle-btn.active');
  var courses = [];
  courseBtns.forEach(function(b) { courses.push(b.getAttribute('data-value')); });
  var courseStr = courses.length > 0 ? courses.join(', ') : 'Not specified';

  // Validate
  if (!name || !phone) {
    errorEl.style.display = 'block';
    return;
  }
  errorEl.style.display = 'none';

  // Build WhatsApp URL
  var text = 'Hello! I would like to enquire about admissions at The Lekhi Tutorials.'
    + '\\n\\nName: ' + name
    + '\\nPhone: ' + phone
    + '\\nEnquiring as: ' + role
    + '\\nCurrent class: ' + (currentClass || 'Not specified')
    + '\\nInterested in: ' + courseStr
    + '\\nPreferred timing: ' + (batch || 'Not specified')
    + '\\nMessage: ' + (message || 'None')
    + '\\n\\nPlease get back to me. Thank you!';

  var url = 'https://wa.me/918798053612?text=' + encodeURIComponent(text);
  window.open(url, '_blank');
}
<\/script>
`);

// ============================================================
// 5. Write file
// ============================================================
fs.writeFileSync('fooror.com/en-us/consultation.html', $.html());
console.log('✅ Consultation page redesigned successfully!');
console.log('   - Navbar matches home page (The Lekhi Tutorials, no language toggle)');
console.log('   - Hero: "Let\'s start your journey to success"');
console.log('   - Form subtext updated');
console.log('   - Role buttons: Myself (Student) / My Child (Parent) / General Info');
console.log('   - Course buttons: Class 8-10 / Class 11-12 / NEE / JEE');
console.log('   - 5 form fields: Name, Phone, Class, Batch, Message');
console.log('   - WhatsApp green submit button with validation');
