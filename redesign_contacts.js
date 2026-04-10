const fs = require('fs');
const cheerio = require('cheerio');

// Load HTML
let content = fs.readFileSync('fooror.com/en-us/contacts.html', 'utf-8');
const $ = cheerio.load(content);

// ============================================================
// 1. FIX NAVBAR — match home page style
// ============================================================

// Replace the page title & meta
$('title').text('The Lekhi Tutorials | Contact Us');
$('meta[name="description"]').attr('content', 'Get in touch with The Lekhi Tutorials. Reach us via WhatsApp, email, or phone.');
$('meta[property="og:title"]').attr('content', 'The Lekhi Tutorials | Contact Us');
$('meta[property="og:description"]').attr('content', 'Get in touch with The Lekhi Tutorials. Reach us via WhatsApp, email, or phone.');
$('meta[property="twitter:title"]').attr('content', 'The Lekhi Tutorials | Contact Us');
$('meta[property="twitter:description"]').attr('content', 'Get in touch with The Lekhi Tutorials. Reach us via WhatsApp, email, or phone.');

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

// Fix sidebar menu — replace with home-page style items (no Projects)
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
  <a href="consultation.html" class="button white w-inline-block">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 64 64" fill="none" class="icon-48">
      <path d="M49.667 8.33398C52.0096 8.33407 54.2566 9.26331 55.9131 10.918C57.5696 12.5727 58.5 14.8171 58.5 17.1572V40.6865C58.5 43.0266 57.5696 45.2711 55.9131 46.9258C54.2566 48.5804 52.0096 49.5097 49.667 49.5098H35.4978C35.1356 49.5098 34.7802 49.6081 34.4696 49.7943L23.2509 56.5188C21.9178 57.3179 20.2227 56.3576 20.2227 54.8034V51.5098C20.2227 50.4052 19.3272 49.5098 18.2227 49.5098H14.333C11.9904 49.5097 9.74341 48.5804 8.08691 46.9258C6.43044 45.2711 5.5 43.0266 5.5 40.6865V17.1572C5.5 14.8171 6.43043 12.5727 8.08691 10.918C9.74341 9.26331 11.9904 8.33407 14.333 8.33398H49.667ZM18.6562 30.8311C17.8278 30.8311 17.1562 31.5026 17.1562 32.3311C17.1562 33.1595 17.8278 33.8311 18.6562 33.8311H37.6562C38.4847 33.8311 39.1562 33.1595 39.1562 32.3311C39.1562 31.5026 38.4847 30.8311 37.6562 30.8311H18.6562ZM18.6562 23.8311C17.8278 23.8311 17.1562 24.5026 17.1562 25.3311C17.1562 26.1595 17.8278 26.8311 18.6562 26.8311H45.6562C46.4847 26.8311 47.1562 26.1595 47.1562 25.3311C47.1562 24.5026 46.4847 23.8311 45.6562 23.8311H18.6562Z" fill="currentColor"></path>
    </svg>
    <div class="menu-txt">Consultation</div>
  </a>
  <a contacts-btn="" href="contacts.html" aria-current="page" class="button white w-inline-block w--current">
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
$('.bubble-img').remove();

// ============================================================
// 2. REPLACE THE CONTACT SECTION CONTENT
// ============================================================
const cardWrap = $('.s2-card-wrap._w-70');
cardWrap.empty();

cardWrap.append(`
  <!-- Contact circles: WhatsApp, Email, Phone -->
  <div class="contact-btns-wrap">
    <div class="hor-wrap gap-2" style="justify-content: center;">

      <!-- WhatsApp -->
      <a href="https://wa.me/918798053612" target="_blank" class="circle-btn wa w-inline-block">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 64 64" fill="none" class="icon-64">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M26.185 22.3666C26.1522 22.2865 26.1182 22.2038 26.086 22.1253C26.1187 22.2049 26.1517 22.2854 26.185 22.3666ZM24.167 19.5798C24.1152 19.58 24.0651 19.5802 24.017 19.5775Z" fill="currentColor"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M50.8036 13.0842C48.3552 10.6196 45.4419 8.6654 42.2327 7.33487C39.0235 6.00435 35.5822 5.32395 32.1081 5.3331C17.5415 5.3331 5.68592 17.1886 5.67925 31.7597C5.67925 36.1838 6.77588 40.5076 8.86822 44.3637C9.08056 44.755 9.14195 45.2125 9.02434 45.6419L6.21986 55.8812C5.88088 57.1188 7.00902 58.2592 8.25023 57.9336L18.8285 55.1586C19.2393 55.0508 19.6748 55.1061 20.0527 55.2999C23.7771 57.2096 27.9052 58.208 32.097 58.2086H32.1081C46.6725 58.2086 58.5303 46.353 58.5369 31.7797C58.5477 28.307 57.8697 24.8666 56.5423 21.6576C55.2149 18.4486 53.2644 15.5346 50.8036 13.0842ZM39.6459 35.1442C40.2503 35.3664 43.497 36.9619 44.157 37.293C44.2848 37.3569 44.4048 37.4149 44.5155 37.4684C44.9782 37.6919 45.2888 37.8419 45.4214 38.0642C45.5881 38.3397 45.5881 39.6619 45.037 41.2041C44.4859 42.7464 41.8481 44.1553 40.5792 44.3441C39.4436 44.5153 38.0036 44.5864 36.4214 44.0819C35.4614 43.7797 34.2325 43.373 32.657 42.693C26.4762 40.0246 22.2956 34.0382 21.4944 32.891C21.437 32.8087 21.3969 32.7514 21.3748 32.7219L21.3623 32.7051C20.9903 32.2055 18.6792 29.1013 18.6792 25.8908C18.6792 22.8481 20.1741 21.2536 20.8612 20.5206C20.9083 20.4704 20.9516 20.4243 20.9903 20.382C21.5948 19.7197 22.3103 19.5553 22.7503 19.5553C23.1926 19.5553 23.6326 19.5597 24.017 19.5775C24.0651 19.5802 24.1152 19.58 24.167 19.5798C24.5508 19.5787 25.0298 19.5772 25.5037 20.7109C25.6751 21.1237 25.9218 21.7252 26.185 22.3666C26.7646 23.7791 27.4246 25.3876 27.5392 25.6153C27.7059 25.9464 27.8148 26.3308 27.5948 26.7708C27.5597 26.8406 27.5274 26.9065 27.4966 26.969C27.3326 27.3029 27.2114 27.5497 26.9326 27.8753C26.8253 28.0006 26.7143 28.1357 26.603 28.271C26.3731 28.5507 26.1421 28.8317 25.9414 29.0308C25.6126 29.3597 25.2681 29.7175 25.6526 30.3775C26.037 31.0397 27.3637 33.2019 29.3259 34.9531C31.4272 36.8267 33.2556 37.6221 34.1889 38.0282C34.3758 38.1095 34.5269 38.1752 34.637 38.2308C35.297 38.5597 35.6836 38.5064 36.0681 38.0642C36.4525 37.6242 37.7192 36.1375 38.157 35.4775C38.5992 34.8153 39.0392 34.9242 39.6459 35.1442Z" fill="currentColor"></path>
        </svg>
        <div class="tooltip">
          <div class="txt-20">WhatsApp</div>
        </div>
      </a>

      <!-- Email -->
      <a href="mailto:thelekhitutorials@gmail.com" class="circle-btn be w-inline-block">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 64 64" fill="none" class="icon-64">
          <path d="M8 16C8 13.7909 9.79086 12 12 12H52C54.2091 12 56 13.7909 56 16V48C56 50.2091 54.2091 52 52 52H12C9.79086 52 8 50.2091 8 48V16Z" fill="currentColor" opacity="0.3"/>
          <path d="M8 16L32 34L56 16" stroke="currentColor" stroke-width="4" fill="none"/>
          <path d="M8 16C8 13.7909 9.79086 12 12 12H52C54.2091 12 56 13.7909 56 16L32 34L8 16Z" fill="currentColor"/>
        </svg>
        <div class="tooltip">
          <div class="txt-20">Email</div>
        </div>
      </a>

      <!-- Phone -->
      <a href="tel:8798053612" class="circle-btn linked w-inline-block">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 64 64" fill="none" class="icon-64">
          <path d="M25.333 11.333C23.876 11.333 22.478 11.911 21.447 12.943C20.416 13.975 19.837 15.372 19.837 16.829V17.333C19.837 18.437 20.737 19.333 21.837 19.333C22.937 19.333 23.837 18.437 23.837 17.333V16.829C23.837 16.434 24.006 16.054 24.286 15.774C24.567 15.494 24.946 15.333 25.333 15.333H29.333C29.799 15.333 30.247 15.52 30.581 15.854C30.914 16.187 31.102 16.635 31.102 17.101C31.102 17.834 30.704 18.509 30.073 18.871L25.24 21.656C24.08 22.327 23.333 23.571 23.333 24.925V26.667C23.333 27.771 24.229 28.667 25.333 28.667C26.437 28.667 27.333 27.771 27.333 26.667V24.925L32.167 22.139C34.058 21.047 35.102 19.123 35.102 17.101C35.102 15.572 34.494 14.107 33.414 13.027C32.334 11.947 30.868 11.339 29.339 11.333H25.333ZM25.333 32C24.8 32 24.289 32.211 23.911 32.589C23.533 32.967 23.333 33.478 23.333 34C23.333 34.522 23.533 35.033 23.911 35.411C24.289 35.789 24.8 36 25.333 36H25.352C25.885 36 26.396 35.789 26.774 35.411C27.152 35.033 27.352 34.522 27.352 34C27.352 33.478 27.152 32.967 26.774 32.589C26.396 32.211 25.885 32 25.352 32H25.333Z" fill="currentColor"/>
          <path d="M52.573 46.987L44.64 42.093C43.733 41.534 42.573 41.64 41.773 42.36L39.24 44.627C38.973 44.867 38.587 44.933 38.253 44.787C35.44 43.493 31.2 40.48 28.36 37.64C25.52 34.8 22.507 30.56 21.213 27.747C21.067 27.413 21.133 27.027 21.373 26.76L23.64 24.227C24.36 23.427 24.467 22.267 23.907 21.36L19.013 13.427C18.373 12.387 17.053 12.013 15.96 12.56L11.467 14.8C10.787 15.14 10.307 15.787 10.187 16.54C9.62667 19.88 10.387 25.72 17.333 34.667C24.28 43.613 30.693 47.04 35.2 48.667C36.76 49.227 39.88 50 41.987 50C42.467 50 42.907 49.96 43.293 49.88C44.04 49.72 44.667 49.227 44.987 48.547L47.44 43.987C47.96 42.92 47.587 41.627 46.573 40.987L52.573 46.987Z" fill="currentColor"/>
          <path d="M52.573 46.987L44.64 42.093C43.733 41.534 42.573 41.64 41.773 42.36L39.24 44.627C38.973 44.867 38.587 44.933 38.253 44.787C35.44 43.493 31.2 40.48 28.36 37.64C25.52 34.8 22.507 30.56 21.213 27.747C21.067 27.413 21.133 27.027 21.373 26.76L23.64 24.227C24.36 23.427 24.467 22.267 23.907 21.36L19.013 13.427C18.373 12.387 17.053 12.013 15.96 12.56L11.467 14.8C10.787 15.14 10.307 15.787 10.187 16.54C9.62667 19.88 10.387 25.72 17.333 34.667C24.28 43.613 30.693 47.04 35.2 48.667C36.76 49.227 39.88 50 41.987 50C42.467 50 42.907 49.96 43.293 49.88C44.04 49.72 44.667 49.227 44.987 48.547L47.44 43.987C47.96 42.92 47.587 41.627 46.573 40.987L52.573 46.987Z" fill="currentColor"/>
        </svg>
        <div class="tooltip">
          <div class="txt-20">Phone</div>
        </div>
      </a>

    </div>
  </div>

  <!-- Email display -->
  <div class="ver-wrap gap-1 align-center">
    <div class="txt-20">E-mail</div>
    <a data-w-id="eb427f4d-4681-752f-cdf8-86cb2cd9580b" href="mailto:thelekhitutorials@gmail.com" class="menu-item w-inline-block">
      <div class="menu-txt middle">thelekhitutorials@gmail.com</div>
      <div class="menu-item-line"><div class="menu-line-fill"></div></div>
    </a>
  </div>

  <!-- Location / Phone display -->
  <div class="ver-wrap gap-1 align-center">
    <div class="txt-20">Phone</div>
    <a href="tel:8798053612" class="menu-item w-inline-block" style="text-decoration: none;">
      <div class="menu-txt middle">+91 87980 53612</div>
      <div class="menu-item-line"><div class="menu-line-fill"></div></div>
    </a>
  </div>

  <!-- Location -->
  <div class="ver-wrap gap-1 align-center">
    <div class="txt-20">Location</div>
    <div class="txt-56">Arunachal Pradesh, India</div>
  </div>
`);

// ============================================================
// 3. Remove the old Ukraine time script and replace with IST
// ============================================================
// We'll keep it simple — no live clock needed since we replaced location

// ============================================================
// 4. Write file
// ============================================================
fs.writeFileSync('fooror.com/en-us/contacts.html', $.html());
console.log('✅ Contacts page redesigned successfully!');
console.log('   - Navbar matches home page (The Lekhi Tutorials, no language toggle)');
console.log('   - Removed: Telegram, Behance, LinkedIn icons');
console.log('   - Removed: "Our messengers and social networks" heading');
console.log('   - Kept 3 circles: WhatsApp, Email (envelope), Phone');
console.log('   - WhatsApp → https://wa.me/918798053612');
console.log('   - Email → mailto:thelekhitutorials@gmail.com');
console.log('   - Phone → tel:8798053612');
console.log('   - Email display: thelekhitutorials@gmail.com');
console.log('   - Location: Arunachal Pradesh, India');
