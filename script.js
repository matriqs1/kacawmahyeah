/* =============================================
   ✏️  CUSTOMIZE YOUR BIRTHDAY SITE HERE
   =============================================
   Edit the values below to personalize the site.
   ============================================= */

const CONFIG = {

  /* Password to unlock the site */
  password: "dhiyuy",

  /* Name shown on the gift screen */
  name: "Sayangku",

  /* ─── FLIP CARDS ─── */
  cards: [
    {
      title: "First Pap",
      photo: "photos/pap.jpg",          // ← put photo path here, e.g. "photos/pap1.jpg"
      desc:  "maw pap gax, inget banget itu cara kamu nawarin",
    },
    {
      title: "Our First Selfie",
      photo: "photos/selfie.jpg",          // ← e.g. "photos/selfie.jpg"
      desc:  "waktu kamu lagi videoin kelas aku reflek bilang, coba pake kamera depan",
    },
    {
      title: "your art in my book",
      photo: "photos/aboutyou.jpg",          // ← e.g. "photos/memory.jpg"
      desc:  "do u think i have forgotten???",
    },
    {
      title: "so sweet",
      photo: "photos/notes.jpg",         // ← 4th card photo
      desc:  "maaciww jajannyaa",
    },
  ],

  /* ─── BIRTHDAY MESSAGE ───
     Write your personal message below.
     You can use line breaks (\n) between paragraphs. */
  message:
`sayang bubuy dhiyuy sacin candu tuput,

happy birthday yaaaa uda umur 18 aja niii, kebetulan banget kamu ulang tahunnya pas hari-h wisuda. Dhiyuy, meskipun kita baru deket pas kelas 12 ini tapi aku rasa kamu paling banyak ninggalin kenagan sama aku. nahan perasaan dari awal kelas 11 dan baru kesampean bisa interaksi lebih sering di akhir" kelas 12. Tugas buat website mungkin jadi kesempatan awal buat aku bisa ndeketin kamu, dan bener aja kita jadi lebih sering wa an semenjak itu bahkan waktu aku ngga wa kamu pas pulang sekolah kamu langsung minta closure malemnya buat kamu ngga nungguin aku. Maaf ya yuy kalo buat chattingan sama aku aja harus sembunyi-sembunyi sampe bikin akun instagram khusus yang aku yakin itu pasti ribet banget dan bikin kamu ngga nyaman, tapi aku yakin itu adalah effort kita masing-masing demi bisa tetep berhubungan. 

Abis tugas bikin web selesai waktu itu gantian kamu yang bantuin aku buat nyelesein batik, kamu ikut bantuin warnain batikku terus kita jadi ngelukis batik berdua kann. Makasih ya yuy udah jadi penyemangat aku buat ngelakuin hal-hal di sekolah. Kamu uda hadir dateng ke masa di mana aku kayak dijauhin temen-temen lain tapi kamu tetep ada di sampingku. Duduk di depan demi bisa deketan sama kamuuu, gapernah terpikirkan buat jadi sebucin itu tapi kalo cewenya dhiyuy semua harus diusahain si ya ga si yuy. Sampe akhirnya kita berdua dapet biru di SNBP jujur dari awal aku uda yakin kalo kamu bakal keterima, dan ternyata aku pun lolos jugaa walaupun beda kampus dan daerah tapi kita bakal kalahin jarak itu kann yuy. Karna kamu uda mau nerima aku di saat itu and being my support system. Jadi cewe yang cemburuan itu gapapa ko yuy, kamu berhak buat nuntut aku karna semenjak aku sama kamu aku jadi belajar buat menghargai perasaan "pasangan kita", mungkin makin lama kita makin sering berantem karna kita berdua sama-sama pengen dingertiin tanpa mau mengerti. Semoga kamu buka ini sebelum wisuda yaa karena jujur aku inget kamu pernah bilang uda nyiapin template buat jedag-jedug fotbar kita di wisuda tapi gimanaa jadi nggaaaaa. Anyway semoga tambah umurmu ini diikuti doa-doa dan cita-cita terbaikmu yaa, titip salam buat keluarga dan salam hangat dari Fawwaz`,

};

/* =============================================
   DON'T EDIT BELOW THIS LINE
   (unless you know JavaScript 😄)
   ============================================= */

// ─── HELPERS ───────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) {
    el.style.display = '';
    // Force reflow then add class
    requestAnimationFrame(() => {
      el.classList.add('active');
    });
  }
}

function typeText(el, text, speed = 22, onDone) {
  el.textContent = '';
  let i = 0;
  const t = setInterval(() => {
    el.textContent += text[i++];
    if (i >= text.length) { clearInterval(t); if (onDone) onDone(); }
  }, speed);
}

// ─── WEB CORNER SVGs (generated) ──────────
function buildWebSVG() {
  const SIZE = 220;
  const ANGLES = [0, 12, 25, 38, 52, 65, 78, 90];
  const DISTS  = [38, 75, 115, 160, 210];

  function makeSVG() {
    const ns  = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', `0 0 ${SIZE} ${SIZE}`);
    svg.setAttribute('width',  SIZE);
    svg.setAttribute('height', SIZE);

    // Radial lines from (0,0)
    ANGLES.forEach(deg => {
      const r = deg * Math.PI / 180;
      const l = document.createElementNS(ns, 'line');
      l.setAttribute('x1', 0); l.setAttribute('y1', 0);
      l.setAttribute('x2', SIZE * Math.cos(r));
      l.setAttribute('y2', SIZE * Math.sin(r));
      l.setAttribute('stroke', 'rgba(255,255,255,.18)');
      l.setAttribute('stroke-width', '.7');
      svg.appendChild(l);
    });

    // Connecting polylines at each distance
    DISTS.forEach(d => {
      const pts = ANGLES.map(deg => {
        const r = deg * Math.PI / 180;
        return `${(d * Math.cos(r)).toFixed(1)},${(d * Math.sin(r)).toFixed(1)}`;
      }).join(' ');
      const pl = document.createElementNS(ns, 'polyline');
      pl.setAttribute('points', pts);
      pl.setAttribute('stroke', 'rgba(255,255,255,.13)');
      pl.setAttribute('stroke-width', '.6');
      pl.setAttribute('fill', 'none');
      svg.appendChild(pl);
    });

    return svg;
  }

  ['webTL','webTR','webBL','webBR'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.appendChild(makeSVG());
  });
}

// Mini webs inside message card
function buildMiniWebs() {
  const SIZE = 60;
  const ANGLES = [0, 20, 45, 70, 90];
  const DISTS  = [15, 35, 58];
  const ns = 'http://www.w3.org/2000/svg';

  document.querySelectorAll('.msg-web-corner').forEach(el => {
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', `0 0 ${SIZE} ${SIZE}`);
    svg.setAttribute('width', SIZE); svg.setAttribute('height', SIZE);
    ANGLES.forEach(deg => {
      const r = deg * Math.PI / 180;
      const l = document.createElementNS(ns, 'line');
      l.setAttribute('x1', 0); l.setAttribute('y1', 0);
      l.setAttribute('x2', SIZE * Math.cos(r));
      l.setAttribute('y2', SIZE * Math.sin(r));
      l.setAttribute('stroke', 'rgba(255,255,255,.12)');
      l.setAttribute('stroke-width', '.6');
      svg.appendChild(l);
    });
    DISTS.forEach(d => {
      const pts = ANGLES.map(deg => {
        const r = deg * Math.PI / 180;
        return `${(d*Math.cos(r)).toFixed(1)},${(d*Math.sin(r)).toFixed(1)}`;
      }).join(' ');
      const pl = document.createElementNS(ns, 'polyline');
      pl.setAttribute('points', pts);
      pl.setAttribute('stroke', 'rgba(255,255,255,.10)');
      pl.setAttribute('stroke-width', '.5');
      pl.setAttribute('fill', 'none');
      svg.appendChild(pl);
    });
    el.appendChild(svg);
  });
}

// ─── WEB-CLICK FX ──────────────────────────
document.addEventListener('click', e => {
  const container = document.getElementById('webFxContainer');
  if (!container) return;
  const size = 80 + Math.random() * 60;
  const fx = document.createElement('div');
  fx.className = 'web-fx';
  fx.style.cssText = `
    left: ${e.clientX - size/2}px;
    top:  ${e.clientY - size/2}px;
    width: ${size}px; height: ${size}px;
    border: 1.5px solid rgba(255,255,255,.5);
    box-shadow: 0 0 10px rgba(255,255,255,.25), inset 0 0 10px rgba(255,255,255,.1);
  `;
  container.appendChild(fx);

  // Also shoot 4 thin web lines from click point
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2 + Math.random() * 0.5;
    const len   = 40 + Math.random() * 60;
    const line  = document.createElement('div');
    line.style.cssText = `
      position: fixed;
      left: ${e.clientX}px;
      top:  ${e.clientY}px;
      width: ${len}px; height: 1px;
      background: linear-gradient(90deg, rgba(255,255,255,.6), transparent);
      transform-origin: left center;
      transform: rotate(${angle}rad);
      animation: webPop .5s ease-out forwards;
      pointer-events: none;
      z-index: 999;
    `;
    container.appendChild(line);
    setTimeout(() => line.remove(), 600);
  }
  setTimeout(() => fx.remove(), 600);
});

// ─── SPIDER SWING ──────────────────────────
function startSpiderSwing() {
  const el  = document.getElementById('spiderSwing');
  const th  = document.getElementById('spiderThread');
  if (!el || !th) return;

  let angle  = -35;
  let dir    = 1;
  let thread = 120;

  // Only show every ~15s
  function swingOnce() {
    el.style.display = 'flex';
    el.style.transformOrigin = 'top center';
    angle = -40; dir = 1;
    th.style.height = thread + 'px';

    const anim = setInterval(() => {
      angle += dir * 1.2;
      if (angle > 40)  dir = -1;
      if (angle < -40) dir =  1;
      el.style.transform = `translateX(-50%) rotate(${angle}deg)`;
    }, 16);

    setTimeout(() => {
      clearInterval(anim);
      el.style.display = 'none';
    }, 4000);
  }

  setTimeout(swingOnce, 3000);
  setInterval(swingOnce, 18000);
}

// ─── PASSWORD ──────────────────────────────
function togglePass() {
  const input = document.getElementById('passInput');
  const btn   = document.getElementById('eyeBtn');
  if (input.type === 'password') {
    input.type = 'text'; btn.textContent = '🙈';
  } else {
    input.type = 'password'; btn.textContent = '👁';
  }
}

function checkPassword() {
  const val   = document.getElementById('passInput').value.trim();
  const err   = document.getElementById('passError');
  const input = document.getElementById('passInput');

  if (val === CONFIG.password) {
    // Unlock animation
    document.getElementById('lockWrap').style.animation = 'none';
    document.getElementById('lockWrap').style.transform = 'scale(1.3)';
    document.getElementById('lockWrap').style.opacity   = '0';
    document.getElementById('lockWrap').style.transition = 'all .5s';
    setTimeout(() => {
      showGiftScreen();
    }, 600);
  } else {
    err.classList.add('show');
    input.classList.add('shake');
    setTimeout(() => {
      input.classList.remove('shake');
    }, 500);
    input.value = '';
    input.focus();
  }
}

// ─── GIFT SCREEN ───────────────────────────
function showGiftScreen() {
  showScreen('screen-gift');
  // Write name
  const el = document.getElementById('giftNameEl');
  if (el) typeText(el, CONFIG.name, 80);
}

let _cakeOpened = false;
function openGiftBox() {
  if (_cakeOpened) return;
  _cakeOpened = true;

  const hint = document.getElementById('clickHintEl');
  const box  = document.getElementById('giftBox');
  if (hint) { hint.style.opacity = '0'; hint.style.transition = '.3s'; }

  if (box) { box.style.animation = 'none'; }

  // Blow candles out rapidly
  const flames = document.querySelectorAll('.flame');
  flames.forEach((f, i) => {
    setTimeout(() => {
      f.style.animation = 'none';
      f.style.transition = 'transform .15s ease, opacity .15s ease';
      f.style.transformOrigin = 'bottom center';
      f.style.transform = 'translateX(-50%) scaleX(0.1) scaleY(2.5)';
      f.style.opacity   = '0';
      setTimeout(() => { f.style.display = 'none'; }, 150);
    }, i * 60);
  });

  const totalFlameTime = flames.length * 60;

  // Cake pulse & open top & sparkle burst
  setTimeout(() => {
    if (box) {
      box.style.transition = 'transform .18s ease';
      box.style.transform  = 'scale(1.05)';
      setTimeout(() => { box.style.transform = 'scale(1)'; }, 180);
    }
    
    const cakeTop = document.getElementById('cakeTop');
    if (cakeTop) cakeTop.classList.add('opened');
    
    // Sparkle burst
    const stage = document.getElementById('giftStage');
    if (stage) {
      stage.style.position = 'relative';
      for (let i = 0; i < 18; i++) {
        const sp    = document.createElement('div');
        const angle = (i / 18) * Math.PI * 2;
        const dist  = 80 + Math.random() * 60;
        sp.style.cssText = `
          position:absolute; left:50%; top:35%;
          width:${4+Math.random()*6}px; height:${4+Math.random()*6}px;
          border-radius:50%; background:#fff; pointer-events:none; z-index:99;
          transition: transform .6s cubic-bezier(0.25, 1, 0.5, 1), opacity .6s ease;
          transform: translate(-50%,-50%) scale(0); opacity:1;
        `;
        stage.appendChild(sp);
        requestAnimationFrame(() => {
          sp.style.transform = `translate(${Math.cos(angle)*dist-6}px, ${Math.sin(angle)*dist-6}px) scale(1)`;
          sp.style.opacity   = '0';
        });
        setTimeout(() => sp.remove(), 700);
      }
    }
  }, totalFlameTime + 50);

  // Navigate to cards using 3D Scatter
  setTimeout(() => {
    createBalloons();
    showCardsScreen();
  }, totalFlameTime + 300);
}

// ─── CARDS SCREEN ──────────────────────────
function showCardsScreen() {
  const cardsScrn = document.getElementById('screen-cards');
  const giftScrn  = document.getElementById('screen-gift');
  
  // Hide other screens except gift and cards
  document.querySelectorAll('.screen').forEach(s => {
    if (s.id !== 'screen-cards' && s.id !== 'screen-gift') {
      s.classList.remove('active');
    }
  });

  giftScrn.classList.add('active');
  cardsScrn.classList.add('active');
  
  cardsScrn.style.background = 'transparent';

  populateCards();

  // 3D Scatter configurations for 4 cards
  const scatterConfig = [
    { startX: '-150px', midX: '-280px', startRY: '-40deg', midRY: '-25deg', midRZ: '-20deg' },
    { startX: '-50px',  midX: '-100px', startRY: '-15deg', midRY: '-10deg', midRZ: '-8deg' },
    { startX: '50px',   midX: '100px',  startRY: '15deg',  midRY: '10deg',  midRZ: '8deg' },
    { startX: '150px',  midX: '280px',  startRY: '40deg',  midRY: '25deg',  midRZ: '20deg' }
  ];

  const cakeRect = document.getElementById('giftBox').getBoundingClientRect();

  const cards = document.querySelectorAll('.flip-card');
  cards.forEach((card, i) => {
    // Calculate initial position from the cake's center
    const cardRect = card.getBoundingClientRect();
    const startX = cakeRect.left + cakeRect.width / 2 - (cardRect.left + cardRect.width / 2);
    const startY = cakeRect.top + cakeRect.height / 2 - (cardRect.top + cardRect.height / 2);

    const conf = scatterConfig[i] || scatterConfig[1];
    card.style.setProperty('--startX', startX + 'px');
    card.style.setProperty('--startY', startY + 'px');
    card.style.setProperty('--midX', conf.midX);
    card.style.setProperty('--startRY', conf.startRY);
    card.style.setProperty('--midRY', conf.midRY);
    card.style.setProperty('--midRZ', conf.midRZ);

    card.classList.remove('card-shooting');
    card.style.opacity   = '0';
    card.style.transform = `translate3d(${startX}px, ${startY}px, -200px) scale(0.01)`;
    card.style.transition = 'none';
  });

  // Shoot each card out with organic stagger
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity   = '';
      card.style.transform = '';
      card.style.transition = '';
      void card.offsetWidth;
      card.classList.add('card-shooting');
    }, 150 + i * 150); // Fast, organic staggered delay
  });

  // Fade out the cake screen gracefully
  setTimeout(() => {
    giftScrn.style.transition = 'opacity 1s ease';
    giftScrn.style.opacity = '0';
    setTimeout(() => {
      giftScrn.classList.remove('active');
      giftScrn.style.opacity = ''; 
      cardsScrn.style.transition = 'background 1.5s ease';
      cardsScrn.style.background = ''; // revert to CSS background
    }, 1000);
  }, 1000);
}

function populateCards() {
  CONFIG.cards.forEach((card, i) => {
    const idx = i + 1;
    const titleEl = document.getElementById(`btitle${idx}`);
    const descEl  = document.getElementById(`bdesc${idx}`);
    const imgEl   = document.getElementById(`bphoto${idx}`);
    const noEl    = document.getElementById(`nophoto${idx}`);

    if (titleEl) titleEl.textContent = card.title || '';
    if (descEl)  descEl.textContent  = card.desc  || '';

    if (imgEl && card.photo) {
      imgEl.src = card.photo;
      imgEl.style.display = 'block';
      if (noEl) noEl.style.display = 'none';
    } else {
      if (imgEl) imgEl.style.display = 'none';
      if (noEl)  noEl.style.display  = 'flex';
    }
  });
}

let flippedCards = new Set();
function flipCard(num) {
  const inner = document.getElementById(`fi${num}`);
  const card  = document.getElementById(`fcard${num}`);
  if (!inner || flippedCards.has(num)) return;

  flippedCards.add(num);
  // Remove fly-in animation class so it doesn't interfere with flip
  card.classList.remove('card-shooting');
  card.style.animation = 'none';
  void card.offsetWidth; // reflow
  card.style.animation = '';
  card.classList.add('flipped');

  // Check if all flipped
  if (flippedCards.size === CONFIG.cards.length) {
    setTimeout(() => {
      const cta = document.getElementById('cardsCta');
      if (cta) cta.classList.add('show');
    }, 600);
  }
}

// ─── MESSAGE SCREEN ────────────────────────
function showMessage() {
  showScreen('screen-msg');
  buildMiniWebs();

  // Typing message
  setTimeout(() => {
    const el = document.getElementById('msgBody');
    if (el) typeText(el, CONFIG.message, 18);
  }, 500);

  // Date
  const dateEl = document.getElementById('msgDate');
  if (dateEl) {
    const d = new Date();
    dateEl.textContent = d.toLocaleDateString('id-ID', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  // Sparks
  setTimeout(launchSparks, 400);
}

// ─── SPARKS (B&W confetti) ─────────────────
function launchSparks() {
  const canvas = document.getElementById('sparkCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const COLORS = ['#fff','#ccc','#aaa','#888','#555'];
  const particles = [];

  for (let i = 0; i < 180; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 9 + 4,
      h: Math.random() * 5 + 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      speed: Math.random() * 2.5 + 1,
      tilt: Math.random() * 30 - 15,
      tiltV: Math.random() * .12 + .04,
      opacity: Math.random() * .6 + .4,
    });
  }

  let frame = 0;
  function draw() {
    frame++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.y    += p.speed;
      p.tilt += p.tiltV;
      if (p.y > canvas.height + 20) { p.y = -10; p.x = Math.random() * canvas.width; }
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle   = p.color;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.tilt);
      ctx.beginPath();
      ctx.ellipse(0, 0, p.w/2, p.h/2, 0, 0, Math.PI*2);
      ctx.fill();
      ctx.restore();
    });
    if (frame < 600) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

// ─── KEYBOARD SUPPORT ──────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.getElementById('screen-pass').classList.contains('active')) {
    checkPassword();
  }
  // Space or Enter to flip focused card
  if ((e.key === ' ' || e.key === 'Enter') && e.target.classList.contains('flip-card')) {
    const num = e.target.id.replace('fcard','');
    flipCard(parseInt(num));
  }
});

// ─── COUNTDOWN & BALLOONS ──────────────────
function createBalloons() {
  const container = document.getElementById('balloonContainer');
  if (!container) return;
  // Aesthetic monochrome colors
  const colors = ['#111111', '#222222', '#3a3a3a', '#555555', '#777777', '#999999', '#bbbbbb', '#dddddd', '#ffffff'];
  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.animationDuration = (8 + Math.random() * 7) + 's';
    balloon.style.animationDelay = (Math.random() * 5) + 's';
    container.appendChild(balloon);
  }
}

function startCountdown(targetDate) {
  const daysEl = document.getElementById('cdDays');
  const hoursEl = document.getElementById('cdHours');
  const minsEl = document.getElementById('cdMinutes');
  const secsEl = document.getElementById('cdSeconds');

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      // Time is up, refresh to enter
      location.reload();
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minsEl) minsEl.textContent = minutes.toString().padStart(2, '0');
    if (secsEl) secsEl.textContent = seconds.toString().padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ─── INIT ──────────────────────────────────
(function init() {
  buildWebSVG();
  startSpiderSwing();

  // Target date: May 21, 2026 00:00:00 (Local time)
  // Month is 0-indexed in JS (4 = May)
  const targetDate = new Date(2026, 4, 21, 0, 0, 0).getTime();
  const now = new Date().getTime();

  // ⚠️ SEMENTARA DIMATIKAN UNTUK EDITING (Ubah ke 'false' untuk mengaktifkan timer kembali)
  const skipTimerForNow = false;

  if (!skipTimerForNow && now < targetDate) {
    // Show countdown
    showScreen('screen-cd');
    createBalloons();
    startCountdown(targetDate);
  } else {
    // Show password screen
    showScreen('screen-pass');
  }

  // Keyboard: gift box
  const giftBox = document.getElementById('giftBox');
  if (giftBox) {
    giftBox.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openGiftBox();
    });
  }
})();

// ─── BOUQUET SCREEN ────────────────────────
function showBouquet() {
  showScreen('screen-bouquet');
  
  // Create falling petals
  const wrap = document.getElementById('bouquetWrap');
  if (!wrap) return;

  function spawnPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    
    // Wider spread and more varied paths for a grander effect
    const dx = (Math.random() - 0.5) * 400 + 'px';
    const dy = (Math.random() * 300 + 150) + 'px';
    const rot = (Math.random() * 720) + 'deg';
    const left = (Math.random() * 120 - 10) + '%';
    const top = (Math.random() * 20 - 10) + '%';
    
    petal.style.left = left;
    petal.style.top = top;
    petal.style.setProperty('--dx', dx);
    petal.style.setProperty('--dy', dy);
    petal.style.setProperty('--rot', rot);
    petal.style.animationDuration = (Math.random() * 3 + 2.5) + 's';
    
    wrap.appendChild(petal);
    setTimeout(() => petal.remove(), 6000);
  }

  // Initial burst of petals for a grand opening
  for (let i = 0; i < 40; i++) {
    setTimeout(spawnPetal, Math.random() * 800);
  }

  // Continuous heavy fall (megah)
  setInterval(() => {
    for (let i = 0; i < 3; i++) spawnPetal();
  }, 150);
}
