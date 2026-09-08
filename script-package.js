let formatPeso = amount => '₱' + amount.toLocaleString('en-PH');

/* 
  TOUR PACKAGE DATA (if theres a changes on pricing, distination and iclusions also photos )
    */

let tourPackages = [
  {
    id: 'coron-a', name: 'Coron Island Tour A', price: 1200,
    pickup: '8:00 AM – 8:30 AM', duration: 'Full-Day Island Tour',
    badge: null,
    desc: 'The classic Coron sampler — swim in the legendary Kayangan Lake, relax on postcard beaches and snorkel two thriving coral gardens.',
    includes: ['Kayangan Lake', 'CYC Beach', 'Las Islas de Coral Garden', 'Reef Garden', 'Green Lagoon','Sunset Beach'],
    images:[
     "Kayangan-lake-Package-img.jpg", "CYC-package-img.jpg","lasIslasenhace-package-img.jpg","Reef Garden-package-img.jpg","Green lagoon-package-img.jpg","Sunset Beach-package img.jpg"

    ],
    palettes: [['#0e3f46','#1d858f','#d4af37'],['#123a2c','#2fa47c','#f0d98c'],['#153043','#2b7ab5','#e6c766']]
  },
  {
    id: 'coron-b', name: 'Coron Island Tour B', price: 1400,
    pickup: '8:00 AM – 8:30 AM', duration: 'Full-Day Island Tour',
    badge: null,
    desc: "Dive deeper into Coron's magic — the mystical Barracuda Lake, the iconic Twin Lagoon and a sunken WWII Skeleton Wreck.",
    includes: ['Barracuda Lake', 'Smith Beach', 'Twin Lagoon', 'Skeleton Wreck', 'Coral Garden'],
    images:["Barracudalake package-img.jpg","Smith beach package img.png","Twin lagoon -pakage img.png","Skeleton Wreck Package img.jpg","coral garden package img.jpg"
    ],
    palettes: [['#0d2f4b','#1f6fa8','#d4af37'],['#0e4038','#27957f','#f0d98c'],['#20303c','#3f7f96','#e6c766']]
  },
  {
    id: 'coron-c', name: 'Coron Ultimate Tour', price: 1700,
    pickup: '8:00 AM – 8:30 AM', duration: 'Full-Day Island Tour',
    badge: null,
    desc: 'The best of both worlds — Kayangan Lake AND Twin Lagoon in one perfectly paced day, plus wrecks, reefs and beach time.',
    includes: ['Kayangan Lake', 'Twin Lagoon', 'Las Islas de Coral', 'Skeleton Wreck','Sunset Beach', 'CYC Beach','Reef Garden','Barracuda Lake (Optional 200/pax)'],
    images:["Kayangan-lake-Package-img.jpg","Twin lagoon -pakage img.png","lasIslasenhace-package-img.jpg","Skeleton Wreck Package img.jpg","Sunset Beach-package img.jpg","CYC-package-img.jpg","Reef Garden-package-img.jpg"

    ],
    palettes: [['#123a45','#2492a4','#d4af37'],['#15303f','#3a6ea5','#f0d98c'],['#0e4038','#2fa47c','#e6c766']]
  },
  {
    id: 'super-ultimate', name: 'Super Ultimate Tour', price: 1900,
    pickup: '8:00 AM – 8:30 AM', duration: 'Full-Day Grand Tour',
    badge: 'Best Seller',
    desc: 'Our #1 guest favorite — every must-see spot in Coron packed into one epic, unforgettable day. If you only have one day, make it this one.',
    includes: ['Kayangan Lake', 'Barracuda Lake', 'Twin Lagoon', 'Skeleton Wreck', 'Atwayan Beach or Banol Beach', 'Siete Picados or Las Islas de Coral', 'CYC Beach'],
    images:["Kayangan-lake-Package-img.jpg","Barracudalake package-img.jpg","Twin lagoon -pakage img.png","Skeleton Wreck Package img.jpg","Atwayan package img.jpg","Siete Picados Package img.jpg","CYC-package-img.jpg"
    ],
    palettes: [['#3a2c07','#b3892a','#f0d98c'],['#123a45','#2492a4','#d4af37'],['#0d2f4b','#1f6fa8','#e6c766']]
  },
  {
    id: 'escape-e', name: 'Island Escape Tour E', price: 1600,
    pickup: '7:00 AM – 8:00 AM', duration: 'Full-Day Beach Escape',
    badge: null,
    desc: 'Trade the crowds for powder-white sand — a laid-back day of pure beach bliss across three stunning islands.',
    includes: ['Malcapuya Island', 'Coco Beach', 'Ditaytayan Island'],
    images:["Malcapuya Package img.jpg","coco Island package img.jpg","Ditaytayan Island package img.jpg"],
    palettes: [['#0e4038','#2fa47c','#f0d98c'],['#153043','#2b7ab5','#d4af37'],['#123a2c','#48b98e','#e6c766']]
  },
  {
    id: 'escape', name: 'Island Escape Tour', price: 1700,
    pickup: '7:00 AM – 8:00 AM', duration: 'Full-Day Beach Escape',
    badge: null,
    desc: "Three of Coron's dreamiest islands in one blissful day — including the famous golden sandbar of Ditaytayan.",
    includes: ['Malcapuya Island', 'Banana Island', 'Bulog Dos Island'],
    images:["Malcapuya Package img.jpg","Banana Island package img.jpg","Bulog island package img.jpg"

    ],
    palettes: [['#144a3f','#31a184','#f0d98c'],['#0d2f4b','#2b7ab5','#d4af37'],['#3a2c07','#b3892a','#e6c766']]
  },
  {
    id: 'reef-wrecks', name: 'Reef and Wrecks Tours', price: 1700,
    pickup: '7:00 AM – 8:00 AM', duration: 'Full-Day Snorkel Adventure',
    badge: null,
    desc: "A snorkeler's paradise — glide over WWII shipwrecks and technicolor coral gardens teeming with marine life.",
    includes: ['Pass Island', 'Lusong Gunboat', 'Lusong Coral Garden', 'East Tangat Wreck'],
     images:["pass island package img.jpg","Lusong gun oat package img.jpg","Lusong Coral garden Package img.jpg","east tanget wreck pacakage img.jpg"
    ],
    palettes: [['#0d2f4b','#1f6fa8','#d4af37'],['#123a45','#2492a4','#f0d98c'],['#15303f','#3f7f96','#e6c766']]
  },
  {
    id: 'calauit-a', name: 'Calauit Safari Tour A', price: 2700,
    pickup: '7:30 AM – 8:30 AM', duration: 'Full-Day Safari & Beach',
    badge: null,
    desc: 'Africa meets Palawan — meet giraffes and zebras at Calauit Wildlife Sanctuary, then cool off at beautiful Ocam-Ocam Beach.',
    includes: ['Calauit Wildlife Sanctuary', 'Ocam-Ocam', 'Busuanga Town Proper', 'Malbato Church'],
    images:["Calauit Wildlife Sanctuary package img.jpg","Ocam-Ocam package img.jpg","busunga town Package img.jpg","Malbato church Package img.jpg"
    ],
    palettes: [['#2c3a12','#6f8f2f','#d4af37'],['#3a2c07','#b3892a','#f0d98c'],['#123a2c','#2fa47c','#e6c766']]
  },
  {
    id: 'calauit-b', name: 'Calauit Safari Tour B', price: 2700,
    pickup: '7:30 AM – 8:30 AM', duration: 'Full-Day Safari & Beach',
    badge: null,
    desc: 'The safari adventure with a twist — wildlife encounters at Calauit plus the dramatic dark sands and cliffs of Black Island.',
    includes: ['Calauit Wildlife Sanctuary', 'Black Island', 'Busuanga Town Proper', 'Malbato Church'],
    images:["Calauit Wildlife Sanctuary package img.jpg","Black Island package img.jpg","busunga town Package img.jpg","Malbato church Package img.jpg"

    ],
    palettes: [['#2c3a12','#6f8f2f','#f0d98c'],['#20242b','#4a5568','#d4af37'],['#153043','#2b7ab5','#e6c766']]
  },
  {
    id: 'town-proper', name: 'Coron Town Proper', price: 800,
    pickup: '3:00 PM – 3:30 PM', duration: 'Half-Day Town Tour',
    badge: null,
    desc: 'Discover Coron beyond the islands — sunset views from Mt. Tapyas, a soothing soak at Maquinit Hot Spring, and local culture in between.',
    includes: ['Lualhati Park', 'Souvenir Shop', 'Cashew Factory', 'Mt. Tapyas View Deck', 'St. Augustine Church', 'Maquinit Hot Spring'],
    images:["Lualhati park Pacakage img.jpg","Souvenir shop package img.jpg","cashew package img.jpg","tapyas package img.jpg","St. Augustine Package img.jpg","Maquinit hotsping package img.jpg"
    ],
    palettes: [['#3a2c07','#b3892a','#f0d98c'],['#4a2410','#a85b2a','#d4af37'],['#123a2c','#2fa47c','#e6c766']]
  },
  {
    id: 'fireflies', name: "Glittering Firefly's", price: 1200,
    pickup: '5:30 PM – 6:00 PM', duration: 'Evening Tour',
    badge: null,
    desc: "A magical evening you'll never forget — thousands of fireflies sparkling over the mangrove forest, capped with dinner on a floating restaurant.",
    includes: ['Mangrove Forest Park', 'Floating Restaurant'],
    images:["mangrove package img.jpg", "Floating retaurant package img.jpg"],
    palettes: [['#0d1026','#2a2f6b','#f0d98c'],['#101c14','#1e4d33','#d4af37'],['#1a0e26','#4a2a6b','#e6c766']]
  },
  {
    id: 'dugong', name: 'Dugong Watching', price: 5500,
    pickup: '4:00 AM – 5:00 AM', duration: 'Sunrise Wildlife Encounter',
    badge: null,
    desc: 'A once-in-a-lifetime sunrise encounter with the gentle dugong (sea cow) in its natural habitat — with optional bird watching for nature lovers.',
    includes: ['Dugong Watching Experience', 'Bird Watching (Optional)'],
    images:["Dugong watching 1.jpg","Dugong 2.jpg","Dugong 3.jpg","Dugong 4.jpg","dugong 5.jpg"
    ],
    palettes: [['#0d2f4b','#1f6fa8','#f0d98c'],['#123a45','#2492a4','#d4af37'],['#15303f','#3f7f96','#e6c766']]
  }
];

/*BOOKING EMAIL SETTINGS
   Bookings are sent through FormSubmit 
 */

let bookingEmail = 'ailovetravelandtours26@gmail.com';
let emailEndpoint = `https://formsubmit.co/${bookingEmail}`;


let packagesGrid = document.querySelector('#packagesGrid');

tourPackages.forEach((tour, index) => {
  let card = document.createElement('article');
  card.className = 'pkg-card reveal';
  card.style.transitionDelay = (index % 3) * 0.12 + 's';

  // Use real photos when provided, otherwise the colored gradient slides
  let slides = (tour.images && tour.images.length)
    ? tour.images.map((src, i) => `<div class="pkg-slide${i === 0 ? ' active' : ''}" style="background:url('${src}') center/cover no-repeat"><span class="slide-label">${tour.includes[i] || tour.name}</span></div>`)
    : tour.palettes.map((palette, i) => `<div class="pkg-slide${i === 0 ? ' active' : ''}" style="background:radial-gradient(420px 260px at 70% 20%, ${palette[1]}cc, transparent 65%),radial-gradient(320px 240px at 15% 90%, ${palette[2]}55, transparent 60%),linear-gradient(160deg, ${palette[0]}, #0b0a08)"><span class="slide-label">${tour.includes[i] || tour.name}</span></div>`);

  card.innerHTML = `
    <div class="pkg-media">
      ${tour.badge ? `<span class="pkg-badge">🔥 ${tour.badge}</span>` : ''}
      <span class="pkg-time">🕐 ${tour.pickup}</span>
      ${slides.join('')}
      <div class="pkg-dots">${slides.map((_, i) => `<i class="${i === 0 ? 'on' : ''}"></i>`).join('')}</div>
    </div>
    <div class="pkg-body">
      <div class="pkg-head">
        <h3 class="pkg-name">${tour.name}</h3>
        <div class="pkg-price"><b>${formatPeso(tour.price)}</b><span>php / Pax</span></div>
      </div>
      <p class="pkg-desc">${tour.desc}</p>
      <div class="pkg-meta"><span>⏱ ${tour.duration}</span><span>🚐 Hotel Pick-up: ${tour.pickup}</span></div>
      <ul class="pkg-inc">${tour.includes.slice(0, 4).map(item => `<li>${item}</li>`).join('')}${tour.includes.length > 4 ? `<li style="color:var(--gold-light)">+ ${tour.includes.length - 4} more destination${tour.includes.length - 4 > 1 ? 's' : ''}…</li>` : ''}</ul>
      <div class="pkg-actions">
        <button class="btn btn-outline btn-sm" data-details="${tour.id}">View Details</button>
        <button class="btn btn-gold btn-sm" data-book="${tour.id}">Book Now</button>
      </div>
    </div>`;
  packagesGrid.appendChild(card);
});

/* AUTOMATIC SLIDESHOW ON EACH CARD */

document.querySelectorAll('.pkg-media').forEach(media => {
  let slides = media.querySelectorAll('.pkg-slide');
  let dots = media.querySelectorAll('.pkg-dots i');
  if (slides.length < 2) return;
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    dots[current].classList.remove('on');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('on');
  }, 4200 + Math.random() * 1600);
});

/* SCROLL-REVEAL ANIMATION */

let revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

/* BACK-TO-TOP BUTTON + PARALLAX BACKGROUNDS*/

let toTopButton = document.querySelector('#toTop');
let parallaxBackgrounds = document.querySelectorAll('[data-parallax]');
let ticking = false;

window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    let y = window.scrollY;
    toTopButton.classList.toggle('show', y > 600);
    parallaxBackgrounds.forEach(background => {
      let rect = background.parentElement.getBoundingClientRect();
      if (rect.top < innerHeight && rect.bottom > 0) {
        background.style.transform = `translateY(${(rect.top - innerHeight / 2) * -0.06}px)`;
      }
    });
    ticking = false;
  });
}, { passive: true });

toTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* 
  FOOTER YEAR
 */

document.querySelector('#year').textContent = new Date().getFullYear();

/* MODALS (open / close behaviour) */

let detailsOverlay = document.querySelector('#detailsOverlay');
let bookingOverlay = document.querySelector('#bookingOverlay');
let activeTour = null; // the package currently being viewed / booked

function openModal(overlay) {
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(overlay) {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', event => { if (event.target === overlay) closeModal(overlay); });
  overlay.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => closeModal(overlay)));
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') document.querySelectorAll('.modal-overlay.open').forEach(closeModal);
});

/* "VIEW DETAILS" MODAL */

document.addEventListener('click', event => {
  let button = event.target.closest('[data-details]');
  if (!button) return;
  let tour = tourPackages.find(t => t.id === button.dataset.details);
  document.querySelector('#detailsTitle').textContent = tour.name;
  document.querySelector('#detailsSub').textContent = `${formatPeso(tour.price)} php/Pax · Pick-up ${tour.pickup}`;
  document.querySelector('#detailsBody').innerHTML = `
    <div class="detail-block"><p>${tour.desc}</p></div>
    <div class="detail-block"><h4>Itinerary — This Tour Includes</h4><ul>${tour.includes.map(item => `<li>${item}</li>`).join('')}</ul></div>
    <div class="detail-block"><h4>Standard Inclusions</h4><ul>
      <li>Pick-up &amp; Drop-off (Hotel)</li><li>Entrance Fees</li><li>Licensed Tour Guide</li>
      <li>Licensed Tourist Boat</li><li>Life Vest</li><li>Lunch (where applicable)</li>
      <li>Light Snacks</li><li>First Aid Kit</li></ul></div>
    <div class="detail-block"><h4>Pick-up Time</h4><p>🕐 ${tour.pickup} — please be ready at your hotel lobby.</p></div>
    <div class="modal-foot"><button class="btn btn-gold" data-book="${tour.id}">Book This Tour — ${formatPeso(tour.price)}/Pax</button></div>`;
  openModal(detailsOverlay);
});

/* BOOKING MODAL + LIVE PRICE TOTAL*/

let paxInput = document.querySelector('#paxInput');
let totalAmount = document.querySelector('#totalAmount');
let totalCalc = document.querySelector('#totalCalc');

function updateTotal() {
  if (!activeTour) return;
  let pax = parseInt(paxInput.value, 10);
  if (isNaN(pax) || pax < 1) pax = 1;
  if (pax > 100) pax = 100;
  paxInput.value = pax;
  totalAmount.textContent = formatPeso(activeTour.price * pax);
  totalCalc.textContent = `${formatPeso(activeTour.price)} × ${pax} guest${pax > 1 ? 's' : ''}`;
  totalAmount.classList.add('bump');
  setTimeout(() => totalAmount.classList.remove('bump'), 250);
}

paxInput.addEventListener('input', updateTotal);
document.querySelector('#paxMinus').addEventListener('click', () => {
  paxInput.value = Math.max(1, (parseInt(paxInput.value, 10) || 1) - 1);
  updateTotal();
});
document.querySelector('#paxPlus').addEventListener('click', () => {
  paxInput.value = Math.min(100, (parseInt(paxInput.value, 10) || 1) + 1);
  updateTotal();
});

/* Open the booking modal when any "Book Now" button is clicked */
document.addEventListener('click', event => {
  let button = event.target.closest('[data-book]');
  if (!button) return;
  activeTour = tourPackages.find(t => t.id === button.dataset.book);
  closeModal(detailsOverlay);
  document.querySelector('#bookingTitle').textContent = activeTour.name;
  document.querySelector('#bookingSub').textContent = `${formatPeso(activeTour.price)} php/Pax · Pick-up ${activeTour.pickup}`;
  document.querySelector('#bookingFormView').style.display = '';
  document.querySelector('#bookingSuccessView').style.display = 'none';
  paxInput.value = 1;
  updateTotal();
  openModal(bookingOverlay);
});

/* DATE OF TOUR — block past dates */

let tourDateInput = document.querySelector('#bkDate');
tourDateInput.min = new Date().toISOString().split('T')[0]; // today or later

/* 
  FORM VALIDATION 
  FORM VALIDATION
  FORM VALIDATION
  FORM VALIDATION
  FORM VALIDATION
  FORM VALIDATION
*/

let bookingForm = document.querySelector('#bookingForm');
let confirmButton = document.querySelector('#confirmBtn');

function setInvalid(input, isInvalid) {
  input.closest('.field').classList.toggle('invalid', isInvalid);
  return !isInvalid;
}

function validateForm() {
  let ok = true;
  let name = document.querySelector('#bkName');
  let contact = document.querySelector('#bkContact');
  let email = document.querySelector('#bkEmail');
  let tourDate = document.querySelector('#bkDate');
  let pickup = document.querySelector('#bkPickup');
  let allergies = document.querySelector('#bkAllergies');
  let requests = document.querySelector('#bkRequests');

  ok = setInvalid(name, name.value.trim().length < 2) && ok;
  ok = setInvalid(contact, !/^[\d\s()+-]{7,}$/.test(contact.value.trim())) && ok;
  ok = setInvalid(email, !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) && ok;
  ok = setInvalid(tourDate, tourDate.value === '') && ok;
  ok = setInvalid(pickup, pickup.value.trim().length < 2) && ok;
  ok = setInvalid(allergies, allergies.value.trim().length < 1) && ok;
  ok = setInvalid(requests, requests.value.trim().length < 1) && ok;

  let method = bookingForm.querySelector('input[name="Preferred Contact Method"]:checked');
  document.querySelector('#methodErr').style.display = method ? 'none' : 'block';
  if (!method) ok = false;

  return ok;
}

/* Clear the red error state as soon as the guest starts fixing a field */
bookingForm.querySelectorAll('input, textarea').forEach(element =>
  element.addEventListener('input', () => element.closest('.field')?.classList.remove('invalid')));
document.querySelector('#contactMethodRow').addEventListener('change',
  () => document.querySelector('#methodErr').style.display = 'none');

/* 
    SUBMIT — send the booking by email
    SUBMIT — send the booking by email
    SUBMIT — send the booking by email
     */

   bookingForm.addEventListener('submit', async event => {
  event.preventDefault();
  if (!validateForm()) {
    bookingForm.querySelector('.invalid input, .invalid select')?.focus();
    return;
  }

  let pax = parseInt(paxInput.value, 10) || 1;
  let totalPrice = activeTour.price * pax;
  let tourDate = new Date(tourDateInput.value)
    .toLocaleDateString('en-PH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  let submittedAt = new Date().toLocaleString('en-PH', { dateStyle: 'full', timeStyle: 'short' });

  let bookingDetails = {
    _subject: `🌴 New Booking Request — ${activeTour.name} (${pax} Pax)`,
    _template: 'table',
    _captcha: 'false',
    'Tour Package': `${activeTour.name} — ${formatPeso(activeTour.price)} php/Pax`,
    'Full Name': document.querySelector('#bkName').value.trim(),
    'Email Address': document.querySelector('#bkEmail').value.trim(),
    'Contact Number': document.querySelector('#bkContact').value.trim(),
    'Preferred Contact Method': bookingForm.querySelector('input[name="Preferred Contact Method"]:checked').value,
    'Number of Guests (Pax)': String(pax),
    'Date of Tour': tourDate,
    'Pickup Location or Hotel': document.querySelector('#bkPickup').value.trim(),
    'Food Allergy': document.querySelector('#bkAllergies').value.trim(),
    'Special Requests': document.querySelector('#bkRequests').value.trim(),
    'Total Price': formatPeso(totalPrice),
    'Additional Notes': document.querySelector('#bkMessage').value.trim() || '—',
    'Submitted On': submittedAt
  };

  confirmButton.classList.add('loading');
  confirmButton.querySelector('.btn-label').textContent = 'Sending…';

  try {
    let response = await fetch(emailEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(bookingDetails)
    });
    if (!response.ok) throw new Error('Send failed');
    
    // 🚀 This runs perfectly on GitHub Pages!
    showSuccess();
    bookingForm.reset();
  } catch (error) {
    console.error("Submission failed:", error);
    let emailBody = Object.entries(bookingDetails)
      .filter(([key]) => !key.startsWith('_'))
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    window.location.href = 'mailto:' + bookingEmail
      + '?subject=' + encodeURIComponent(bookingDetails._subject)
      + '&body=' + encodeURIComponent(emailBody);
    showSuccess();
  } finally {
    confirmButton.classList.remove('loading');
    confirmButton.querySelector('.btn-label').textContent = 'Confirm Booking';
  }
});


function showSuccess() {
  document.querySelector('#bookingFormView').style.display = 'none';
  let successView = document.querySelector('#bookingSuccessView');
  successView.style.display = 'block';
  successView.querySelector('.success-view').style.animation = 'none';
  void successView.offsetWidth; // restart the animation
  successView.querySelector('.success-view').style.animation = '';
}

document.querySelector('#bookAnotherBtn').addEventListener('click', () => {
  closeModal(bookingOverlay);
  document.querySelector('#packages').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('#backToPackagesBtn').addEventListener('click', () => {
  document.querySelector('#packages').scrollIntoView({ behavior: 'smooth' });
});
