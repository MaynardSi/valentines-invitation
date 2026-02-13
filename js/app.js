/* ========================================
   Valentine Meme Site — App Logic
   Array-driven state machine with
   escalating interaction & visual flair
   ======================================== */

// ─── Stage Configuration ────────────────────────────────────────
// Each entry drives one "No" click. Edit freely to customise.
const STAGES = [
  // ── Online GIF stages (1-5) ───────────────────────────────────
  {
    subtext: "Pretty please?",
    gif: "https://media.giphy.com/media/sXv0vaA4331Ti/giphy.gif",                // Puss in Boots sad eyes
    sound: "https://www.myinstants.com/media/sounds/vine-boom.mp3",               // Vine Boom
    yesText: "Okay, fine, you handsome man",
    noText: "Never",
  },
  {
    subtext: "I'll let you pick the restaurant...",
    gif: "https://media.giphy.com/media/4u8WdgQEMVaj6/giphy.gif",                // Cat kitten begging please
    sound: "https://www.myinstants.com/media/sounds/sad-trombone.mp3",            // Sad Trombone
    yesText: "Hmm, tempting",
    noText: "Nope",
  },
  {
    subtext: "I'll even watch your favorite movie",
    gif: "https://media.giphy.com/media/GtZzfs0KuEjQY/giphy.gif",                // Cat shocked OMG face
    sound: "https://www.myinstants.com/media/sounds/movie_1_C2K5NH0.mp3",            // Dramatic Chipmunk
    yesText: "That's sweet...",
    noText: "No way",
  },
  {
    subtext: "Roses are red, violets are blue, just say yes, I'm begging you",
    gif: "https://media.giphy.com/media/ZyNQFqZLFUhr2/giphy.gif",                // Cat begging for food
    sound: "https://www.myinstants.com/media/sounds/let-me-know.mp3",        // Metal Pipe Clang
    yesText: "Fine, poet",
    noText: "Still no",
  },
  {
    subtext: "I'll give you the last slice of pizza. EVERY TIME.",
    gif: "https://media.giphy.com/media/w0CJXS2M44xfW/giphy.gif",                // Cat with pizza
    sound: "https://www.myinstants.com/media/sounds/sad-meow-song.mp3",                // OH NO JoJo
    yesText: "...okay wow",
    noText: "Even pizza won't work",
  },
  // ── Personal photo stages (6-14) ──────────────────────────────
  {
    subtext: "I'll cook dinner for you!",
    gif: "assets/video/food.jpg",                                                 // Me with food
    sound: "https://www.myinstants.com/media/sounds/dry-fart.mp3",                    // Windows XP Error
    yesText: "You cook?!",
    noText: "Sir, that is a chicken nugget",
  },
  {
    subtext: "Look at these guns. You'd say no to THESE?",
    gif: "assets/video/hunk-of-a-man.jpg",                                        // Flexing at the beach
    sound: "https://www.myinstants.com/media/sounds/rizz-sound-effect.mp3",       // Rizz
    yesText: "Those are... impressive",
    noText: "I've seen better",
  },
  {
    subtext: "They say I look like a K-drama lead...",
    gif: "assets/video/oppa.jpg",                                                 // Looking like a Korean actor
    sound: "https://www.myinstants.com/media/sounds/anime-wow-sound-effect.mp3",   // Emotional Damage
    yesText: "You kinda do...",
    noText: "More like a K-drama extra",
  },
  {
    subtext: "I'll drive you anywhere you want",
    gif: "assets/video/go-kart.jpg",                                              // On a go-kart
    sound: "https://www.myinstants.com/media/sounds/tf_nemesis.mp3",              // Sad Violin
    yesText: "Shotgun!",
    noText: "You don't even have a license",
  },
  {
    subtext: "I'm great with kids, look!",
    gif: "assets/video/holding-baby.jpg",                                         // Holding a baby
    sound: "https://www.myinstants.com/media/sounds/sukuna-gugu-gaga-loudest.mp3",              // Law & Order DUN DUN
    yesText: "That's actually adorable",
    noText: "The baby looks scared",
  },
  {
    subtext: "I'll protect you with my life",
    gif: "assets/video/soldier.JPG",                                              // Looking like a soldier
    sound: "https://www.myinstants.com/media/sounds/among-us-role-reveal-sound.mp3", // Among Us
    yesText: "My hero...",
    noText: "Stand down, soldier",
  },
  {
    subtext: "My mom already likes you",
    gif: "assets/video/mom-likes.jpg",                                            // With mom
    sound: "https://www.myinstants.com/media/sounds/untitled_1071.mp3",           // To Be Continued JoJo
    yesText: "She does?!",
    noText: "Tell her I said hi",
  },
  {
    subtext: "I made a whole website just to ask you this",
    gif: "assets/video/coding.jpg",                                               // Coding the website
    sound: "https://www.myinstants.com/media/sounds/lisheng-555.mp3",                   // Darth Vader NOOO
    yesText: "That IS effort...",
    noText: "It's mid",
  },
  {
    subtext: "There is no \"No\". There was never a \"No\".",
    gif: "assets/video/dead-stare-5.jpg",                                         // Final dead stare
    sound: "https://www.myinstants.com/media/sounds/romanceeeeeeeeeeeeee.mp3",  // Careless whisper
    yesText: "I SAID YES!",
    noText: null,  // No button removed at this stage
  },
];

// Accepted-state assets
const ACCEPTED = {
  header: "I never doubted you'd say yes!",
  subtext: "Hope you're ready for a date with the most handsome nerd in Taipei",
  video: "assets/video/dance.mp4",  // Dance celebration video
  sounds: [
    "https://www.myinstants.com/media/sounds/chipi-chapa-cat-meme.mp3",  // Chipi Chipi Chapa Chapa
    "https://www.myinstants.com/media/sounds/confetti-pop-sound-effect.mp3",
  ],
};

// ─── DOM References ─────────────────────────────────────────────
const headerEl  = document.getElementById("header");
const subtextEl = document.getElementById("subtext");
const memeEl    = document.getElementById("meme");
const btnYes    = document.getElementById("btn-yes");
const btnNo     = document.getElementById("btn-no");
const bgm       = document.getElementById("bgm");
const sfx       = document.getElementById("sfx");
const sfx2      = document.getElementById("sfx2");
const container = document.querySelector(".container");
const vignetteEl  = document.getElementById("vignette");
const flashEl     = document.getElementById("flash");
const loaderEl    = document.getElementById("loader");
const loaderBar   = document.getElementById("loader-bar");
const memeVideo   = document.getElementById("meme-video");

// ─── Asset Preloader ────────────────────────────────────────────
// Collect every unique GIF and sound URL, preload them all in
// parallel, update the progress bar, then reveal the page.
(function preloadAssets() {
  const urls = new Set();

  // Default GIF (from the <img> tag)
  urls.add(memeEl.src);

  // Stage GIFs + sounds
  STAGES.forEach((s) => {
    urls.add(s.gif);
    urls.add(s.sound);
  });

  // Accepted sounds (video preloaded by browser via preload="auto")
  ACCEPTED.sounds.forEach((s) => urls.add(s));

  const total = urls.size;
  let loaded = 0;

  function tick() {
    loaded++;
    const pct = Math.round((loaded / total) * 100);
    loaderBar.style.width = pct + "%";

    if (loaded >= total) {
      finishLoading();
    }
  }

  function finishLoading() {
    // Small extra delay so the bar visually reaches 100%
    setTimeout(() => {
      loaderEl.classList.add("done");
      container.classList.remove("hidden");

      // Remove loader from DOM after fade-out
      setTimeout(() => loaderEl.remove(), 600);

      // Now try to play BGM
      tryPlayBGM();
    }, 300);
  }

  urls.forEach((url) => {
    if (url.match(/\.(gif|png|jpg|jpeg|webp)(\?.*)?$/i) || url.includes("giphy.com")) {
      // Preload image
      const img = new Image();
      img.onload = tick;
      img.onerror = tick;   // count errors too so we never get stuck
      img.src = url;
    } else {
      // Preload audio via fetch (just download into cache)
      fetch(url, { mode: "no-cors" })
        .then(() => tick())
        .catch(() => tick());
    }
  });

  // Safety timeout — reveal page after 8s even if some assets fail
  setTimeout(() => {
    if (!loaderEl.classList.contains("done")) {
      finishLoading();
    }
  }, 8000);
})();

// ─── State ──────────────────────────────────────────────────────
let stageIndex = -1;   // -1 = default (no rejection yet)
let accepted = false;

// ─── BGM Autoplay Workaround ────────────────────────────────────
// Browsers block autoplay until user gesture. We attempt play on
// load, and add a one-time click listener as fallback.
function tryPlayBGM() {
  if (bgm.paused) {
    bgm.volume = 0.3;
    bgm.play().catch(() => {});
  }
}

document.addEventListener("click", function bgmResume() {
  tryPlayBGM();
  document.removeEventListener("click", bgmResume);
}, { once: true });

// ─── Sound Helpers ──────────────────────────────────────────────
function playSound(url, audioEl) {
  audioEl = audioEl || sfx;
  audioEl.pause();
  audioEl.currentTime = 0;
  audioEl.src = url;
  audioEl.volume = 0.7;
  audioEl.play().catch(() => {});
}

// ─── Handle "Yes" ───────────────────────────────────────────────
function handleYes() {
  if (accepted) return;
  accepted = true;

  // Update content
  headerEl.textContent = ACCEPTED.header;

  // Swap image for celebration video
  memeEl.style.display = "none";
  memeVideo.style.display = "block";
  memeVideo.currentTime = 0;
  memeVideo.play().catch(() => {});

  // Typewriter effect for subtext
  subtextEl.textContent = "";
  typeWriter(ACCEPTED.subtext, subtextEl, 40);

  // Play celebration sounds (layered)
  playSound(ACCEPTED.sounds[0], sfx);
  setTimeout(() => playSound(ACCEPTED.sounds[1], sfx2), 300);

  // Visual: celebration class
  container.classList.add("celebration");

  // Update Yes button to accepted state
  btnYes.textContent = "It's a date!";
  btnYes.classList.add("accepted-btn");
  btnYes.classList.remove("pulse", "rainbow");

  // Hide No button
  if (btnNo) btnNo.style.display = "none";

  // Reset any flair
  document.body.style.backgroundColor = "#ffe4e8";
  vignetteEl.classList.remove("active");
  headerEl.classList.remove("glow");

  // Launch confetti!
  launchConfetti();

  // Fade out BGM gracefully
  fadeBGM();
}

// ─── Handle "No" ────────────────────────────────────────────────
function handleNo() {
  if (accepted) return;

  // Ensure BGM is playing
  tryPlayBGM();

  // Advance stage
  stageIndex = Math.min(stageIndex + 1, STAGES.length - 1);
  const stage = STAGES[stageIndex];

  // Dramatic pause for late stages (10+)
  if (stageIndex >= 10) {
    flashEl.classList.add("active");
    setTimeout(() => {
      flashEl.classList.remove("active");
      applyStage(stage);
    }, 350);
  } else {
    applyStage(stage);
  }
}

function applyStage(stage) {
  // Sound
  playSound(stage.sound);

  // GIF — fade out, swap source, fade back in
  swapGif(stage.gif);

  // Subtext with slight delay for comedic timing
  subtextEl.style.opacity = "0";
  setTimeout(() => {
    subtextEl.textContent = stage.subtext;
    subtextEl.style.opacity = "1";
  }, 300);

  // Button labels
  btnYes.textContent = stage.yesText;
  if (stage.noText !== null) {
    btnNo.textContent = stage.noText;
  }

  // ─── Progressive Visual Flair ───────────────────────────────
  applyFlair(stageIndex);
}

// ─── Reliable GIF Swap ──────────────────────────────────────────
// Fade out the current image, load the new one off-screen, then
// swap the src and fade back in.  Handles load errors gracefully
// with a cache-bust retry.
function swapGif(url) {
  memeEl.style.transition = "opacity 0.15s ease";
  memeEl.style.opacity = "0";

  const img = new Image();

  img.onload = function () {
    memeEl.src = url;
    memeEl.style.opacity = "1";
  };

  img.onerror = function () {
    // Retry once with a cache-bust query param
    const retry = new Image();
    retry.onload = function () {
      memeEl.src = url + "?cb=" + Date.now();
      memeEl.style.opacity = "1";
    };
    retry.onerror = function () {
      // Give up — just show whatever we have
      memeEl.style.opacity = "1";
    };
    retry.src = url + "?cb=" + Date.now();
  };

  img.src = url;
}

// ─── Progressive Flair Logic ────────────────────────────────────
function applyFlair(idx) {
  // Yes button grows, No button shrinks
  const yesScale = 1 + idx * 0.07;          // 1.07, 1.14, ... up to ~2.0
  const noScale  = Math.max(0.3, 1 - idx * 0.05);  // 0.95, 0.9, ... down to 0.3

  btnYes.style.setProperty("--yes-scale", yesScale);
  btnYes.style.transform = `scale(${yesScale})`;

  if (btnNo) {
    btnNo.style.setProperty("--no-scale", noScale);
    btnNo.style.transform = `scale(${noScale})`;
  }

  // Stage 0-4: basic size changes only (already handled above)

  // Stage 5-8: background shifts toward red, screen shake
  if (idx >= 5) {
    const redShift = Math.min((idx - 4) * 10, 60);
    document.body.style.backgroundColor = `hsl(${350 - redShift}, 80%, ${92 - idx}%)`;

    // Shake
    container.classList.remove("shake", "shake-hard");
    void container.offsetWidth; // trigger reflow for re-animation
    container.classList.add("shake");
  }

  // Stage 9-12: glow, pulse, semi-transparent No
  if (idx >= 9) {
    headerEl.classList.add("glow");
    btnYes.classList.add("pulse");

    if (btnNo) {
      btnNo.style.opacity = Math.max(0.3, 1 - (idx - 8) * 0.15).toString();
    }

    // Harder shake
    container.classList.remove("shake", "shake-hard");
    void container.offsetWidth;
    container.classList.add("shake-hard");
  }

  // Stage 12 (index 12): vignette + no button shaking
  if (idx >= 12) {
    vignetteEl.classList.add("active");
    if (btnNo) btnNo.classList.add("no-shake");
  }

  // Stage 13 (final, index 13): remove No button, rainbow Yes
  if (idx === STAGES.length - 1) {
    if (btnNo) {
      btnNo.classList.remove("no-shake");
      btnNo.style.display = "none";
    }
    btnYes.classList.add("rainbow");
    btnYes.classList.add("pulse");
    btnYes.style.transform = `scale(${yesScale})`;
    btnYes.style.fontSize = "1.5rem";
    btnYes.style.padding = "1.2rem 3rem";
  }
}

// ─── Typewriter Effect ──────────────────────────────────────────
function typeWriter(text, el, speed) {
  let i = 0;
  el.textContent = "";
  function tick() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(tick, speed);
    }
  }
  tick();
}

// ─── Fade Out BGM ───────────────────────────────────────────────
function fadeBGM() {
  const fade = setInterval(() => {
    if (bgm.volume > 0.05) {
      bgm.volume = Math.max(0, bgm.volume - 0.02);
    } else {
      bgm.pause();
      clearInterval(fade);
    }
  }, 100);
}

// ─── Confetti ───────────────────────────────────────────────────
function launchConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = [
    "#e74c3c", "#e91e63", "#9b59b6", "#3498db",
    "#2ecc71", "#f1c40f", "#e67e22", "#1abc9c",
    "#ff6b6b", "#feca57", "#ff9ff3", "#54a0ff",
  ];

  const particles = [];
  const PARTICLE_COUNT = 180;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 5,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      opacity: 1,
    });
  }

  const startTime = Date.now();
  const DURATION = 5000; // 5 seconds

  function frame() {
    const elapsed = Date.now() - startTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Fade out in last second
    const fadeStart = DURATION - 1000;
    const globalAlpha = elapsed > fadeStart
      ? Math.max(0, 1 - (elapsed - fadeStart) / 1000)
      : 1;

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.04; // gravity
      p.rotation += p.rotationSpeed;
      p.vx *= 0.999; // air resistance

      ctx.save();
      ctx.globalAlpha = globalAlpha * p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (elapsed < DURATION) {
      requestAnimationFrame(frame);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  frame();
}

// ─── Window Resize Handler for Confetti Canvas ──────────────────
window.addEventListener("resize", () => {
  const canvas = document.getElementById("confetti");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
