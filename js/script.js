/**
 * SURYA.SEC // CLIENT MATRIX ENGINE (V2.6 PRO)
 * 1. ULTRA-FUTURISTIC KALI TERMINAL PRELOADER
 * 2. 3D BINARY & SECURITY STRINGS ZOOM-IN ENGINE
 * 3. HERO FULL-HD PHOTO STAGE & PARTICLE CONVERGENCE / SCROLL-DISPERSAL
 * 4. INTERACTIVE DOSSIER (2ND PHOTO HUD & FILTERS)
 * 5. HUD CROSSHAIR CURSOR, ACCORDION, MAGNETIC BUTTONS & INTERACTION
 */

(function () {
  "use strict";

  /* =====================================================================
     1. ULTRA-FUTURISTIC CYBER HOLOGRAPHIC TERMINAL
  ===================================================================== */
  const preloader = document.getElementById("preloader");
  const typingArea = document.getElementById("kali-typing-area");
  const historyBox = document.getElementById("kali-history");
  const meterFill = document.getElementById("kali-meter-fill");
  const hexCounter = document.getElementById("kali-hex-counter");
  const liveClock = document.getElementById("kali-live-clock");

  let isBypassed = false;
  let triggerParticleAssembly = null;

  // Live terminal clock
  function updateTerminalClock() {
    if (!liveClock) return;
    const now = new Date();
    liveClock.textContent = now.toTimeString().split(" ")[0] + " UTC";
  }
  setInterval(updateTerminalClock, 1000);
  updateTerminalClock();

  function dismissPreloader() {
    if (isBypassed) return;
    isBypassed = true;
    if (preloader) {
      preloader.classList.add("hidden");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1250);
    }
    // Trigger real photo shards assembly
    if (typeof triggerParticleAssembly === "function") {
      triggerParticleAssembly();
    }
    // Failsafe: ensures real photo is 100% visible after intro
    setTimeout(() => {
      const p = document.getElementById("hero-hd-photo");
      if (p) p.classList.add("assembled");
    }, 2400);
  }

  // Failsafe timer (Guaranteed never stuck, extended for cinematic pacing)
  const failsafeTimer = setTimeout(() => {
    dismissPreloader();
  }, 9500);

  // Click or ESC/Enter to bypass
  if (preloader) {
    preloader.addEventListener("click", () => {
      clearTimeout(failsafeTimer);
      dismissPreloader();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
      clearTimeout(failsafeTimer);
      dismissPreloader();
    }
  });

  function typeTerminalCommand(text, speed, callback) {
    let idx = 0;
    if (!typingArea) {
      if (callback) callback();
      return;
    }
    typingArea.textContent = "";
    const interval = setInterval(() => {
      if (isBypassed) {
        clearInterval(interval);
        return;
      }
      typingArea.textContent += text[idx];
      idx++;
      if (idx >= text.length) {
        clearInterval(interval);
        setTimeout(callback, 240);
      }
    }, speed);
  }

  function appendTerminalLog(cmd, resp, isOk = false) {
    if (!historyBox) return;
    const item = document.createElement("div");
    item.className = "cyber-line-item";
    item.innerHTML = `
      <div class="cyber-cmd-log"><span class="c-prompt">&gt;&gt; ROOT_SYS$ </span><span class="c-cmd-text">${cmd}</span></div>
      <div class="cyber-sys-resp">${resp}</div>
    `;
    historyBox.appendChild(item);
    if (typingArea) typingArea.textContent = "";
  }

  // Cinematic Entrance: deliberate boot-up pause, slow typing & smooth entrance
  setTimeout(() => {
    if (isBypassed) return;
    if (meterFill) meterFill.style.width = "25%";
    if (hexCounter) hexCounter.textContent = "0x0000 &rarr; 0x04A0";

    // Deliberate, cinematic typing speed (~130ms per character)
    typeTerminalCommand("whoami", 130, () => {
      if (isBypassed) return;

      // Realistic command execution pause
      setTimeout(() => {
        if (isBypassed) return;
        appendTerminalLog(
          "whoami",
          "&gt;&gt; IDENTITY CONFIRMED: SURYAKIRAN T S [CYBER DEFENSE INTELLIGENCE &bull; MG UNIV RANK 2]<br>&gt;&gt; SECURITY CLEARANCE: LEVEL 5 // INITIALIZING NEURAL AVATAR...",
          true
        );
        if (meterFill) meterFill.style.width = "100%";
        if (hexCounter) hexCounter.textContent = "0x04A0 &rarr; 0x1337 [SYNCHRONIZED]";

        // Hold verified identity so the viewer comfortably reads it before smooth entrance
        setTimeout(() => {
          clearTimeout(failsafeTimer);
          dismissPreloader();
        }, 1250);
      }, 420);
    });
  }, 780);

  /* =====================================================================
     2. 3D BINARY & CYBER SECURITY STRINGS ZOOM-IN ENGINE
  ===================================================================== */
  const bgCanvas = document.getElementById("binary-bg");
  if (bgCanvas) {
    const bgCtx = bgCanvas.getContext("2d");
    let bgWidth = (bgCanvas.width = window.innerWidth);
    let bgHeight = (bgCanvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      bgWidth = bgCanvas.width = window.innerWidth;
      bgHeight = bgCanvas.height = window.innerHeight;
    });

    // Rich security encodings: Binary, Hexadecimal, Security terms
    const SECURITY_STRINGS = [
      "01010101", "11001010", "10110001", "00111100", "11110000", "01011010",
      "0x7FFE", "0xDEADBEEF", "0x1337", "0x89504E47", "0xCAFEBABE", "0xBAADF00D",
      "SHA-256", "MD5_HASH", "AES-256-GCM", "WAZUH_EDR", "SPLUNK_SIEM", "PCAP_INSPECT",
      "SYN_ACK", "PORT_443", "TCP/IP_STREAM", "C2_BEACON", "MITRE_T1110", "CANARY_TOKEN",
      "HONEYPOT_TRAP", "AUTOPSY_E01", "FTK_IMAGE", "KALI_LINUX", "BURP_PROXY", "0-DAY_PATCH",
      "BUFFER_0x00", "SQLi_PREVENT", "CHFI_EVIDENCE", "CEH_SOC"
    ];

    const FONT_PRESETS = [
      '9px "JetBrains Mono", monospace',
      '12px "JetBrains Mono", monospace',
      '15px "JetBrains Mono", monospace',
      '18px "JetBrains Mono", monospace'
    ];

    const NUM_TOKENS = 180;
    const tokens3D = [];

    for (let i = 0; i < NUM_TOKENS; i++) {
      tokens3D.push({
        x: (Math.random() - 0.5) * bgWidth * 2.5,
        y: (Math.random() - 0.5) * bgHeight * 2.5,
        z: Math.random() * 1250 + 40,
        text: SECURITY_STRINGS[Math.floor(Math.random() * SECURITY_STRINGS.length)],
        color: Math.random() > 0.4 ? "#00f0ff" : Math.random() > 0.5 ? "#00ff88" : "#8ab4f8",
        opacity: Math.random() * 0.75 + 0.25
      });
    }

    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    window.addEventListener(
      "scroll",
      () => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY;
        scrollVelocity = delta * 1.8;
        lastScrollY = currentY;
      },
      { passive: true }
    );

    function render3DDataStream() {
      bgCtx.clearRect(0, 0, bgWidth, bgHeight);

      // Continuous forward travel + buttery smooth scroll acceleration
      const forwardVelocity = 1.7 + Math.abs(scrollVelocity);
      scrollVelocity *= 0.93; // buttery-smooth damping

      const fov = 460;
      const cX = bgWidth / 2;
      const cY = bgHeight / 2;

      let currentFontIdx = -1;

      for (let i = 0; i < tokens3D.length; i++) {
        const t = tokens3D[i];
        t.z -= forwardVelocity;

        // Loop when passing camera
        if (t.z <= 12) {
          t.z = 1250;
          t.x = (Math.random() - 0.5) * bgWidth * 2.5;
          t.y = (Math.random() - 0.5) * bgHeight * 2.5;
          t.text = SECURITY_STRINGS[Math.floor(Math.random() * SECURITY_STRINGS.length)];
        }

        // 3D perspective projection
        const scale = fov / t.z;
        const projX = cX + t.x * scale;
        const projY = cY + t.y * scale;

        if (projX >= -70 && projX <= bgWidth + 70 && projY >= -70 && projY <= bgHeight + 70) {
          const depthAlpha = Math.min(Math.max((1250 - t.z) / 1000, 0), 1) * t.opacity;

          let fIdx = 0;
          if (scale > 0.85) fIdx = 3;
          else if (scale > 0.55) fIdx = 2;
          else if (scale > 0.32) fIdx = 1;

          if (currentFontIdx !== fIdx) {
            bgCtx.font = FONT_PRESETS[fIdx];
            currentFontIdx = fIdx;
          }

          bgCtx.fillStyle = t.color;
          bgCtx.globalAlpha = depthAlpha * 0.44;
          bgCtx.fillText(t.text, Math.round(projX), Math.round(projY));
        }
      }

      bgCtx.globalAlpha = 1;
      requestAnimationFrame(render3DDataStream);
    }
    render3DDataStream();
  }

  /* =====================================================================
     3. HERO REAL-PHOTO MICRO-SHARD MATRIX (CONVERGENCE & SCROLL DISPERSAL)
  ===================================================================== */
  const heroPhotoStage = document.getElementById("hero-photo-stage");
  const heroHdPhoto = document.getElementById("hero-hd-photo");
  const particleCanvas = document.getElementById("particle-canvas");

  let assembleProgress = 0; // 0 = fully scattered across screen, 1 = assembled into photo
  let isAssembling = false;
  let isAssembled = false;
  let assembleStartTime = 0;
  const ASSEMBLE_DURATION = 1900; // ms for photo shards to converge with cinematic grace
  let shards = [];
  let heroImgRef = null;
  let imgRenderParams = { offsetX: 0, offsetY: 0, drawW: 0, drawH: 0 };
  const mouse = { x: -9999, y: -9999, radius: 125 };
  let targetScrollScatter = 0;
  let smoothedScrollScatter = 0;

  triggerParticleAssembly = function () {
    if (isAssembling || isAssembled) return;
    const frameEl = document.getElementById("hud-photo-frame");
    if (frameEl && particleCanvas && imgRenderParams) {
      const frameRect = frameEl.getBoundingClientRect();
      const canvasRect = particleCanvas.getBoundingClientRect();
      if (frameRect.width > 50 && frameRect.height > 50) {
        imgRenderParams.offsetX = Math.floor(frameRect.left - canvasRect.left);
        imgRenderParams.offsetY = Math.floor(frameRect.top - canvasRect.top);
        imgRenderParams.drawW = Math.round(frameRect.width);
        imgRenderParams.drawH = Math.round(frameRect.height);
      }
    }
    isAssembling = true;
    assembleStartTime = performance.now();
  };

  if (particleCanvas && heroHdPhoto) {
    const pCtx = particleCanvas.getContext("2d");
    const heroSec = document.getElementById("hero");
    let pWidth = (particleCanvas.width = heroSec ? heroSec.clientWidth : window.innerWidth);
    let pHeight = (particleCanvas.height = heroSec ? Math.max(heroSec.clientHeight, window.innerHeight) : window.innerHeight);

    window.addEventListener("resize", () => {
      const hSec = document.getElementById("hero");
      pWidth = particleCanvas.width = hSec ? hSec.clientWidth : window.innerWidth;
      pHeight = particleCanvas.height = hSec ? Math.max(hSec.clientHeight, window.innerHeight) : window.innerHeight;
      buildPhotoShards();
    });

    window.addEventListener("mousemove", (e) => {
      const rect = particleCanvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    window.addEventListener("mouseleave", () => {
      mouse.x = -9999;
      mouse.y = -9999;
    });

    class PhotoShard {
      constructor(img, sx, sy, sW, sH, dx, dy, dW, dH, centerRefX, centerRefY) {
        this.img = img;
        this.sx = sx;
        this.sy = sy;
        this.sW = sW;
        this.sH = sH;
        this.baseX = dx;
        this.baseY = dy;
        this.dW = dW;
        this.dH = dH;

        // Start scattered in 3D-like space
        const ang = Math.random() * Math.PI * 2;
        const dist = Math.random() * 850 + 400;
        this.startX = dx + Math.cos(ang) * dist;
        this.startY = dy + Math.sin(ang) * dist;
        this.startRot = (Math.random() - 0.5) * 4 * Math.PI;
        this.startScale = Math.random() * 0.4 + 0.1;

        this.x = this.startX;
        this.y = this.startY;
        this.rot = this.startRot;
        this.scale = this.startScale;
        this.alpha = 1;

        // Radial dispersion vector for scroll scatter
        const centerDistX = dx - centerRefX;
        const centerDistY = dy - centerRefY;
        const scatterAng = Math.atan2(centerDistY, centerDistX) + (Math.random() - 0.5) * 0.6;
        const scatterSpd = Math.random() * 850 + 380;
        this.scatterDx = Math.cos(scatterAng) * scatterSpd;
        this.scatterDy = Math.sin(scatterAng) * scatterSpd;
        this.scatterRot = (Math.random() - 0.5) * 3.5 * Math.PI;

        this.vx = 0;
        this.vy = 0;
        this.friction = 0.84;
        this.spring = 0.088;
        this.stagger = Math.random() * 0.24; // Organic wave during assembly
      }

      update(currentAssembleProgress, effScatter, mousePos) {
        if (currentAssembleProgress < 1) {
          // Phase 1: Real photo pieces flying in from outer space
          const t = Math.max(0, Math.min(1, (currentAssembleProgress - this.stagger) / (1 - this.stagger)));
          const easeT = 1 - Math.pow(1 - t, 4); // Quart ease-out for ultra smooth landing
          this.x = this.startX + (this.baseX - this.startX) * easeT;
          this.y = this.startY + (this.baseY - this.startY) * easeT;
          this.rot = this.startRot * (1 - easeT);
          this.scale = this.startScale + (1 - this.startScale) * easeT;
          this.alpha = Math.min(1, easeT * 1.6);
        } else {
          // Phase 2: Direct continuous scattering on scroll down - ZERO HITCH, ZERO STICKING
          this.x = this.baseX + this.scatterDx * effScatter;
          this.y = this.baseY + this.scatterDy * effScatter;
          this.rot = this.scatterRot * effScatter;
          this.scale = Math.max(1 - effScatter * 0.35, 0.08);
          this.alpha = Math.max(1 - effScatter * 0.45, 0.12);

          // Interactive mouse disturbance when assembled and near top
          if (mousePos && effScatter < 0.12) {
            const dx = mousePos.x - (this.baseX + this.dW / 2);
            const dy = mousePos.y - (this.baseY + this.dH / 2);
            const dist = Math.hypot(dx, dy);

            if (dist < mousePos.radius && dist > 0) {
              const force = (mousePos.radius - dist) / mousePos.radius;
              const ang = Math.atan2(dy, dx);
              this.x -= Math.cos(ang) * force * 15;
              this.y -= Math.sin(ang) * force * 15;
              this.rot += (Math.random() - 0.5) * 0.18;
            }
          }
        }
      }

      draw(ctx) {
        ctx.globalAlpha = this.alpha;
        // Fast path when untransformed: saves massive CPU/GPU time!
        if (Math.abs(this.rot) > 0.015 || Math.abs(this.scale - 1) > 0.015) {
          ctx.save();
          ctx.translate(this.x + this.dW / 2, this.y + this.dH / 2);
          if (Math.abs(this.rot) > 0.015) ctx.rotate(this.rot);
          if (Math.abs(this.scale - 1) > 0.015) ctx.scale(this.scale, this.scale);
          ctx.drawImage(this.img, this.sx, this.sy, this.sW, this.sH, -this.dW / 2, -this.dH / 2, this.dW, this.dH);
          ctx.restore();
        } else {
          ctx.drawImage(this.img, this.sx, this.sy, this.sW, this.sH, this.x, this.y, this.dW, this.dH);
        }
      }
    }

    function buildPhotoShards() {
      shards = [];
      const img = new Image();

      function initShards() {
        heroImgRef = img;
        const heroRect = heroHdPhoto ? heroHdPhoto.getBoundingClientRect() : null;
        const canvasRect = particleCanvas.getBoundingClientRect();

        // 100% natural aspect ratio of the source photo - strictly preserved!
        const naturalRatio = img.width / img.height; // Exactly 682 / 1024 = 0.666015625

        let targetH;
        let targetW;
        let offsetX;
        let offsetY;

        if (pWidth > 960) {
          // Desktop: enlarged photo on the right side, scaling cleanly with viewport
          targetH = Math.min(pHeight * 0.74, 700);
          targetW = Math.round(targetH * naturalRatio);
          const maxAllowedW = Math.min(pWidth * 0.44, 520);
          if (targetW > maxAllowedW) {
            targetW = Math.round(maxAllowedW);
            targetH = Math.round(targetW / naturalRatio);
          }
          offsetX = Math.floor(pWidth - targetW - Math.max(pWidth * 0.05, 36));
          offsetY = Math.floor((pHeight - (targetH + 50)) / 2);
        } else {
          // Mobile & Tablet: matches .hud-photo-frame with height: min(36vh, 275px)
          targetH = Math.min(pHeight * 0.36, 275);
          targetW = Math.round(targetH * naturalRatio);
          const maxAllowedW = Math.min(pWidth * 0.75, 270);
          if (targetW > maxAllowedW) {
            targetW = Math.round(maxAllowedW);
            targetH = Math.round(targetW / naturalRatio);
          }
          offsetX = Math.floor((pWidth - targetW) / 2);
          offsetY = 160;
        }

        // Exact DOM sync with .hud-photo-frame if layout is active (ensures 100% precision across desktop & mobile)
        const frameEl = document.getElementById("hud-photo-frame");
        if (frameEl) {
          const frameRect = frameEl.getBoundingClientRect();
          if (frameRect.width > 50 && frameRect.height > 50) {
            offsetX = Math.floor(frameRect.left - canvasRect.left);
            offsetY = Math.floor(frameRect.top - canvasRect.top);
            targetW = Math.round(frameRect.width);
            targetH = Math.round(frameRect.height);
          }
        }

        const drawW = targetW;
        const drawH = targetH;

        imgRenderParams = { offsetX, offsetY, drawW, drawH };
        const centerRefX = offsetX + drawW / 2;
        const centerRefY = offsetY + drawH / 2;

        const offCanvas = document.createElement("canvas");
        const offCtx = offCanvas.getContext("2d");
        offCanvas.width = img.width;
        offCanvas.height = img.height;
        offCtx.drawImage(img, 0, 0);

        const imgData = offCtx.getImageData(0, 0, img.width, img.height).data;

        // High-density micro-squares with uniform scaling (scaleX === scaleY)
        const stepS = pWidth < 768 ? 16 : 13;
        const scale = drawH / img.height;
        const scaleX = scale;
        const scaleY = scale;

        for (let sy = 0; sy < img.height; sy += stepS) {
          for (let sx = 0; sx < img.width; sx += stepS) {
            const sW = Math.min(stepS, img.width - sx);
            const sH = Math.min(stepS, img.height - sy);

            // Test if tile has any visible pixels (pure alpha check - preserves white shirt, face, suit)
            let hasVisible = false;
            const midIdx = (Math.floor(sy + sH / 2) * img.width + Math.floor(sx + sW / 2)) * 4;
            if (imgData[midIdx + 3] > 15) {
              hasVisible = true;
            } else {
              // Sample corners
              const c0 = (sy * img.width + sx) * 4;
              const c1 = (sy * img.width + Math.min(sx + sW - 1, img.width - 1)) * 4;
              const c2 = (Math.min(sy + sH - 1, img.height - 1) * img.width + sx) * 4;
              const c3 = (Math.min(sy + sH - 1, img.height - 1) * img.width + Math.min(sx + sW - 1, img.width - 1)) * 4;
              if (imgData[c0 + 3] > 15 || imgData[c1 + 3] > 15 || imgData[c2 + 3] > 15 || imgData[c3 + 3] > 15) {
                hasVisible = true;
              }
            }

            if (hasVisible) {
              const dx = offsetX + Math.floor(sx * scaleX);
              const dy = offsetY + Math.floor(sy * scaleY);
              const dW = Math.ceil(sW * scaleX) + 0.8; // overlap guarantees zero hairline gaps
              const dH = Math.ceil(sH * scaleY) + 0.8;

              shards.push(
                new PhotoShard(
                  img,
                  sx,
                  sy,
                  sW,
                  sH,
                  dx,
                  dy,
                  dW,
                  dH,
                  centerRefX,
                  centerRefY
                )
              );
            }
          }
        }

        // If assembly was already triggered while image was decoding, restart timer
        if (isAssembling && !isAssembled) {
          assembleStartTime = performance.now();
          assembleProgress = 0;
        }
      }

      img.onload = initShards;
      img.src = heroHdPhoto.src;
      if (img.complete && img.naturalWidth > 0) {
        initShards();
      }
    }

    buildPhotoShards();

    function renderShardLoop(now) {
      // Viewport Culling: When scrolled well past hero, pause loop to save 100% GPU for buttery smooth scrolling everywhere!
      if (window.scrollY > window.innerHeight * 1.35) {
        requestAnimationFrame(renderShardLoop);
        return;
      }

      pCtx.clearRect(0, 0, pWidth, pHeight);

      // Smooth scroll scatter interpolation (continuous responsive fluid momentum)
      smoothedScrollScatter += (targetScrollScatter - smoothedScrollScatter) * 0.14;
      if (Math.abs(smoothedScrollScatter - targetScrollScatter) < 0.0005) {
        smoothedScrollScatter = targetScrollScatter;
      }

      // Smoothly fade out the under-photo location & honors badge on scroll
      const photoTelem = document.getElementById("photo-under-telemetry");
      if (photoTelem) {
        photoTelem.style.opacity = Math.max(0, 1 - smoothedScrollScatter * 1.8);
        photoTelem.style.transform = `translateY(${smoothedScrollScatter * 25}px)`;
      }

      if (isAssembling && assembleProgress < 1) {
        const elapsed = now - assembleStartTime;
        const t = Math.min(elapsed / ASSEMBLE_DURATION, 1);
        assembleProgress = t;

        if (t >= 1) {
          assembleProgress = 1;
          isAssembled = true;
          if (heroHdPhoto) heroHdPhoto.classList.add("assembled");
        }
      }

      // Check state:
      const isAtRest = assembleProgress >= 1 && smoothedScrollScatter === 0;

      if (isAtRest) {
        if (heroHdPhoto) {
          heroHdPhoto.classList.add("assembled");
          heroHdPhoto.style.opacity = "1";
        }
        // Photo is fully assembled and at rest at top of page
        const mouseNearPhoto = 
          heroImgRef &&
          mouse.x >= imgRenderParams.offsetX - 40 &&
          mouse.x <= imgRenderParams.offsetX + imgRenderParams.drawW + 40 &&
          mouse.y >= imgRenderParams.offsetY - 40 &&
          mouse.y <= imgRenderParams.offsetY + imgRenderParams.drawH + 40;

        if (!mouseNearPhoto && heroImgRef) {
          // 100% Solid, razor-sharp, photorealistic full render - fully formed! (0.01ms speed)
          pCtx.drawImage(
            heroImgRef,
            imgRenderParams.offsetX,
            imgRenderParams.offsetY,
            imgRenderParams.drawW,
            imgRenderParams.drawH
          );
        } else {
          // Mouse hover over photo: micro-shards deflect dynamically!
          for (let i = 0; i < shards.length; i++) {
            shards[i].update(assembleProgress, smoothedScrollScatter, mouse);
            shards[i].draw(pCtx);
          }
        }
      } else if (assembleProgress < 1) {
        // Micro-shards flying in from around screen to assemble photo
        for (let i = 0; i < shards.length; i++) {
          shards[i].update(assembleProgress, smoothedScrollScatter, mouse);
          shards[i].draw(pCtx);
        }
        // As shards lock into position (final 15%), crossfade smoothly to solid photo
        if (assembleProgress > 0.85 && heroImgRef) {
          const fadeAlpha = (assembleProgress - 0.85) / 0.15;
          pCtx.save();
          pCtx.globalAlpha = Math.min(1, fadeAlpha);
          pCtx.drawImage(
            heroImgRef,
            imgRenderParams.offsetX,
            imgRenderParams.offsetY,
            imgRenderParams.drawW,
            imgRenderParams.drawH
          );
          pCtx.restore();
        }
      } else {
        // Scrolling down: photo shatters into micro-squares with silky smooth damped dispersion
        if (heroHdPhoto) {
          heroHdPhoto.style.opacity = Math.max(0, 1 - smoothedScrollScatter * 2.5);
        }
        for (let i = 0; i < shards.length; i++) {
          shards[i].update(assembleProgress, smoothedScrollScatter, mouse);
          shards[i].draw(pCtx);
        }
      }

      requestAnimationFrame(renderShardLoop);
    }
    requestAnimationFrame(renderShardLoop);

    // Scroll Handler: Updates target scatter ratio with continuous responsive mapping
    window.addEventListener(
      "scroll",
      () => {
        const scrollY = window.scrollY;
        const heroHeight = window.innerHeight;
        targetScrollScatter = Math.min(scrollY / (heroHeight * 0.62), 2.2);
      },
      { passive: true }
    );
  }

  /* =====================================================================
     4. INTERACTIVE 3D HOLOGRAPHIC MODELING RIG (2ND PHOTO)
  ===================================================================== */
  const dossierCard = document.getElementById("dossier-card");
  const dossierChamber = document.getElementById("dossier-chamber");
  const holoModelStage = document.getElementById("holo-model-stage");
  const dossierImg = document.getElementById("dossier-img");
  const holo3dCanvas = document.getElementById("holo-3d-canvas");
  const holoYaw = document.getElementById("holo-yaw");
  const holoPitch = document.getElementById("holo-pitch");
  const dossierStatus = document.getElementById("dossier-status");
  const dossierLaser = document.getElementById("dossier-laser");

  // 3D Canvas Wireframe Gizmos & Holographic Orbit Rings
  if (holo3dCanvas && dossierChamber) {
    const hCtx = holo3dCanvas.getContext("2d");
    let cW = (holo3dCanvas.width = dossierChamber.clientWidth || 400);
    let cH = (holo3dCanvas.height = dossierChamber.clientHeight || 440);

    window.addEventListener("resize", () => {
      if (dossierChamber) {
        cW = holo3dCanvas.width = dossierChamber.clientWidth;
        cH = holo3dCanvas.height = dossierChamber.clientHeight;
      }
    });

    let ringAngle = 0;
    let gyroAngle = 0;

    function render3DHoloGizmos() {
      hCtx.clearRect(0, 0, cW, cH);
      ringAngle += 0.022;
      gyroAngle += 0.015;

      const cX = cW / 2;
      const cY = cH * 0.54;

      // 1. Torso Horizontal Orbit Ring (3D ellipse with ticks)
      const rX1 = 155;
      const rY1 = 44;
      hCtx.save();
      hCtx.translate(cX, cY + 30);
      hCtx.strokeStyle = "rgba(0, 240, 255, 0.45)";
      hCtx.lineWidth = 1.5;
      hCtx.setLineDash([8, 6]);
      hCtx.beginPath();
      hCtx.ellipse(0, 0, rX1, rY1, 0, 0, Math.PI * 2);
      hCtx.stroke();
      hCtx.setLineDash([]);

      // Orbiting biometric nodes on ring 1
      for (let i = 0; i < 3; i++) {
        const a = ringAngle + (i * Math.PI * 2) / 3;
        const px = Math.cos(a) * rX1;
        const py = Math.sin(a) * rY1;
        const pSize = (Math.sin(a) + 1.2) * 2.5;

        hCtx.fillStyle = "#00ff88";
        hCtx.shadowColor = "#00ff88";
        hCtx.shadowBlur = 8;
        hCtx.beginPath();
        hCtx.arc(px, py, pSize, 0, Math.PI * 2);
        hCtx.fill();
        hCtx.shadowBlur = 0;
      }
      hCtx.restore();

      // 2. Gyroscope Inclined Ring (angled 3D orbit)
      const rX2 = 140;
      const rY2 = 58;
      hCtx.save();
      hCtx.translate(cX, cY - 25);
      hCtx.rotate(-0.32);
      hCtx.strokeStyle = "rgba(0, 255, 136, 0.35)";
      hCtx.lineWidth = 1.2;
      hCtx.setLineDash([12, 8]);
      hCtx.beginPath();
      hCtx.ellipse(0, 0, rX2, rY2, 0, 0, Math.PI * 2);
      hCtx.stroke();
      hCtx.setLineDash([]);

      // Gyro node
      const gx = Math.cos(gyroAngle) * rX2;
      const gy = Math.sin(gyroAngle) * rY2;
      hCtx.fillStyle = "#00f0ff";
      hCtx.shadowColor = "#00f0ff";
      hCtx.shadowBlur = 10;
      hCtx.beginPath();
      hCtx.arc(gx, gy, 4, 0, Math.PI * 2);
      hCtx.fill();
      hCtx.shadowBlur = 0;
      hCtx.restore();

      requestAnimationFrame(render3DHoloGizmos);
    }
    render3DHoloGizmos();
  }

  // Interactive 3D Model Parallax & Gyroscopic Tilt
  let targetYaw = 0, targetPitch = 0;
  let currentYaw = 0, currentPitch = 0;

  if (dossierChamber && holoModelStage) {
    dossierChamber.addEventListener("mousemove", (e) => {
      const rect = dossierChamber.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      targetYaw = (x / (rect.width / 2)) * 18; // -18deg to +18deg
      targetPitch = -(y / (rect.height / 2)) * 14; // -14deg to +14deg
    });

    dossierChamber.addEventListener("mouseleave", () => {
      targetYaw = 0;
      targetPitch = 0;
    });

    function update3DModelStage() {
      currentYaw += (targetYaw - currentYaw) * 0.1;
      currentPitch += (targetPitch - currentPitch) * 0.1;

      holoModelStage.style.transform = `perspective(1000px) rotateY(${currentYaw}deg) rotateX(${currentPitch}deg)`;

      if (holoYaw) holoYaw.textContent = `${Math.round(currentYaw)}°`;
      if (holoPitch) holoPitch.textContent = `${Math.round(currentPitch)}°`;

      requestAnimationFrame(update3DModelStage);
    }
    update3DModelStage();
  }

  // 3D Holographic Chamber Filter
  if (dossierImg) {
    dossierImg.style.filter = "drop-shadow(0 0 25px rgba(0, 240, 255, 0.45))";
  }
  if (dossierLaser) {
    dossierLaser.style.display = "block";
  }
  if (dossierStatus) {
    dossierStatus.innerHTML = '<span class="live-radar-dot"></span> 3D HOLOGRAPHIC BIOMETRIC DOSSIER // ACTIVE';
  }

  /* =====================================================================
     4B. 3D ROTARY ANIMATION WHEEL & ARRANGE CONTROLLER
  ===================================================================== */
  const wheelChamber = document.getElementById("project-wheel-chamber");
  const wheelRing = document.getElementById("wheel-rotary-ring");
  const prevBtn = document.getElementById("wheel-prev-btn");
  const nextBtn = document.getElementById("wheel-next-btn");
  const wheelDots = document.querySelectorAll("#wheel-dots .wheel-dot");
  const btnShowWheel = document.getElementById("btn-show-wheel");
  const btnShowArrange = document.getElementById("btn-show-arrange");
  const arrangeButtons = document.querySelectorAll(".wheel-btn-arrange");

  if (wheelRing && wheelChamber) {
    let wheelIndex = 0;
    const totalCards = 4;
    let isDragging = false;
    let startX = 0;
    let currentDragAngle = 0;
    let hasAnimatedEntrance = false;

    function updateWheel(animate = true) {
      if (animate) {
        wheelRing.style.transition = "transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)";
      } else {
        wheelRing.style.transition = "none";
      }

      const targetAngle = wheelIndex * 90;
      wheelRing.style.transform = `rotateY(${-targetAngle}deg)`;

      // Update dot indicators
      wheelDots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === wheelIndex);
      });

      // Update card focus & depth styles
      const cardSlots = wheelRing.querySelectorAll(".wheel-card-slot");
      cardSlots.forEach((slot, idx) => {
        const diff = (idx - wheelIndex + totalCards) % totalCards;
        if (diff === 0) {
          // Front active card
          slot.style.opacity = "1";
          slot.style.filter = "none";
          slot.style.pointerEvents = "auto";
        } else if (diff === 1 || diff === 3) {
          // Left / Right flanking cards
          slot.style.opacity = "0.45";
          slot.style.filter = "brightness(0.7) blur(1px)";
          slot.style.pointerEvents = "auto";
        } else {
          // Back card
          slot.style.opacity = "0.2";
          slot.style.filter = "brightness(0.4) blur(3px)";
          slot.style.pointerEvents = "none";
        }
      });
    }

    // Initialize wheel state
    updateWheel(false);

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        wheelIndex = (wheelIndex - 1 + totalCards) % totalCards;
        updateWheel();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        wheelIndex = (wheelIndex + 1) % totalCards;
        updateWheel();
      });
    }

    wheelDots.forEach((dot) => {
      dot.addEventListener("click", () => {
        wheelIndex = parseInt(dot.getAttribute("data-index"), 10) || 0;
        updateWheel();
      });
    });

    // Clicking on a flanking card rotates it directly to the front
    const cardSlots = wheelRing.querySelectorAll(".wheel-card-slot");
    cardSlots.forEach((slot) => {
      slot.addEventListener("click", (e) => {
        if (e.target.closest("a") || e.target.closest("button")) return;
        const clickedIdx = parseInt(slot.getAttribute("data-index"), 10);
        if (clickedIdx !== wheelIndex) {
          wheelIndex = clickedIdx;
          updateWheel();
        }
      });
    });

    // Horizontal mouse drag gesture for rotary wheel
    wheelChamber.addEventListener("mousedown", (e) => {
      if (e.target.closest("button") || e.target.closest("a")) return;
      isDragging = true;
      startX = e.clientX;
      currentDragAngle = wheelIndex * 90;
      wheelRing.style.transition = "none";
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const angleDelta = (dx / (wheelChamber.clientWidth || 500)) * 110;
      const tempAngle = currentDragAngle - angleDelta;
      wheelRing.style.transform = `rotateY(${-tempAngle}deg)`;
    });

    window.addEventListener("mouseup", (e) => {
      if (!isDragging) return;
      isDragging = false;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 35) {
        if (dx > 0) {
          wheelIndex = (wheelIndex - 1 + totalCards) % totalCards;
        } else {
          wheelIndex = (wheelIndex + 1) % totalCards;
        }
      }
      updateWheel(true);
    });

    // Touch support for mobile devices
    wheelChamber.addEventListener(
      "touchstart",
      (e) => {
        if (e.target.closest("button") || e.target.closest("a")) return;
        isDragging = true;
        startX = e.touches[0].clientX;
        currentDragAngle = wheelIndex * 90;
        wheelRing.style.transition = "none";
      },
      { passive: true }
    );

    wheelChamber.addEventListener(
      "touchmove",
      (e) => {
        if (!isDragging) return;
        const dx = e.touches[0].clientX - startX;
        const angleDelta = (dx / (wheelChamber.clientWidth || 400)) * 110;
        const tempAngle = currentDragAngle - angleDelta;
        wheelRing.style.transform = `rotateY(${-tempAngle}deg)`;
      },
      { passive: true }
    );

    wheelChamber.addEventListener(
      "touchend",
      (e) => {
        if (!isDragging) return;
        isDragging = false;
        const touchEndX = e.changedTouches[0].clientX;
        const dx = touchEndX - startX;
        if (Math.abs(dx) > 30) {
          if (dx > 0) {
            wheelIndex = (wheelIndex - 1 + totalCards) % totalCards;
          } else {
            wheelIndex = (wheelIndex + 1) % totalCards;
          }
        }
        updateWheel(true);
      },
      { passive: true }
    );

    // Cinematic Wheel Entrance when section scrolls into view
    const wheelObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedEntrance) {
            hasAnimatedEntrance = true;
            wheelRing.style.transition = "transform 1.3s cubic-bezier(0.16, 1, 0.3, 1)";
            wheelRing.style.transform = "rotateY(0deg)";
            updateWheel(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    wheelObserver.observe(wheelChamber);

    // Arrange to corresponding location transition
    function scrollToArrangedProject(targetId) {
      if (btnShowArrange && btnShowWheel) {
        btnShowArrange.classList.add("active");
        btnShowWheel.classList.remove("active");
      }
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: "smooth", block: "center" });
        targetElem.style.transition = "box-shadow 0.6s ease, border-color 0.6s ease";
        targetElem.style.borderColor = "var(--cyan)";
        targetElem.style.boxShadow = "0 0 50px rgba(0, 240, 255, 0.4)";
        setTimeout(() => {
          targetElem.style.borderColor = "";
          targetElem.style.boxShadow = "";
        }, 2200);
      }
    }

    arrangeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        scrollToArrangedProject(targetId);
      });
    });

    if (btnShowArrange) {
      btnShowArrange.addEventListener("click", () => {
        scrollToArrangedProject(`op-card-${wheelIndex}`);
      });
    }

    if (btnShowWheel) {
      btnShowWheel.addEventListener("click", () => {
        btnShowWheel.classList.add("active");
        if (btnShowArrange) btnShowArrange.classList.remove("active");
        wheelChamber.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  }

  /* =====================================================================
     5. CUSTOM HUD CURSOR
  ===================================================================== */
  const cursor = document.getElementById("custom-cursor");
  const cursorDot = document.getElementById("custom-cursor-dot");

  let mouseX = 0, mouseY = 0;
  let curX = 0, curY = 0;

  if (cursor && cursorDot && window.innerWidth > 960) {
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = e.clientX + "px";
      cursorDot.style.top = e.clientY + "px";
      cursor.classList.add("visible");
      cursorDot.classList.add("visible");
    });

    function renderCursor() {
      curX += (mouseX - curX) * 0.22;
      curY += (mouseY - curY) * 0.22;
      cursor.style.left = curX + "px";
      cursor.style.top = curY + "px";
      requestAnimationFrame(renderCursor);
    }
    renderCursor();

    const hoverElements = document.querySelectorAll(
      "a, button, .tilt-card, .accordion-trigger, .stream-badge, .hud-box, .btn-dossier-filter"
    );
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("hovering"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("hovering"));
    });

    document.addEventListener("mouseleave", () => {
      cursor.classList.remove("visible");
      cursorDot.classList.remove("visible");
    });
  }

  /* =====================================================================
     6. SCROLL-REVEAL WORD SCRUB
  ===================================================================== */
  const revealContainer = document.getElementById("scroll-reveal-text");
  if (revealContainer) {
    const rawWords = revealContainer.innerText.trim().split(/\s+/);
    const highlights = [
      "Cyber", "Forensics", "2nd", "Rank)", "SIEM", "threat", "detection,", "disk", "forensics,", "offensive", "security"
    ];

    revealContainer.innerHTML = rawWords
      .map((w) => {
        const isHigh = highlights.includes(w);
        return `<span class="word ${isHigh ? "highlight" : ""}">${w}</span>`;
      })
      .join(" ");

    const wordNodes = revealContainer.querySelectorAll(".word");

    function updateWordLit() {
      const rect = revealContainer.getBoundingClientRect();
      const winH = window.innerHeight;
      const progress = Math.min(Math.max((winH * 0.82 - rect.top) / (rect.height + winH * 0.3), 0), 1);
      const litCount = Math.floor(progress * wordNodes.length);

      wordNodes.forEach((node, idx) => {
        if (idx <= litCount) {
          node.classList.add("lit");
        } else {
          node.classList.remove("lit");
        }
      });
    }

    window.addEventListener("scroll", updateWordLit, { passive: true });
    updateWordLit();
  }

  /* =====================================================================
     7. ACCORDION MODULES
  ===================================================================== */
  const accTriggers = document.querySelectorAll(".accordion-trigger");
  accTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion-item");
      const content = item.querySelector(".accordion-content");
      const isAlreadyActive = item.classList.contains("active");

      document.querySelectorAll(".accordion-item").forEach((other) => {
        other.classList.remove("active");
        const c = other.querySelector(".accordion-content");
        if (c) c.style.maxHeight = null;
        const btn = other.querySelector(".accordion-trigger");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });

      if (!isAlreadyActive) {
        item.classList.add("active");
        trigger.setAttribute("aria-expanded", "true");
        content.style.maxHeight = content.scrollHeight + 30 + "px";
      }
    });
  });

  /* =====================================================================
     8. 3D CARD TILT & PROJECT CARD PARALLAX EFFECT
  ===================================================================== */
  const tiltCards = document.querySelectorAll(".tilt-card:not(.op-preview-col)");
  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cX = rect.width / 2;
      const cY = rect.height / 2;
      const rX = ((y - cY) / cY) * -6.5;
      const rY = ((x - cX) / cX) * 6.5;
      card.style.transform = `perspective(900px) rotateX(${rX}deg) rotateY(${rY}deg) translateY(-5px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    });
  });

  // Dedicated High-End 3D Project Card Holographic Tilt
  const projectCards = document.querySelectorAll(".op-preview-col");
  projectCards.forEach((col) => {
    col.addEventListener("mousemove", (e) => {
      const rect = col.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cX = rect.width / 2;
      const cY = rect.height / 2;
      const rX = ((y - cY) / cY) * -9.5;
      const rY = ((x - cX) / cX) * 11;
      col.style.transform = `perspective(1100px) rotateX(${rX}deg) rotateY(${rY}deg) translateY(-8px) scale3d(1.025, 1.025, 1.025)`;
    });

    col.addEventListener("mouseleave", () => {
      col.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)";
    });
  });

  /* =====================================================================
     9. MAGNETIC BUTTONS
  ===================================================================== */
  const magneticBtns = document.querySelectorAll(".magnetic-btn");
  magneticBtns.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.16}px, ${y * 0.16}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0, 0)";
    });
  });

  /* =====================================================================
     10. SCROLL INTERSECTION OBSERVER
  ===================================================================== */
  const animObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll("[data-animate]").forEach((el) => {
    animObserver.observe(el);
  });

  /* =====================================================================
     11. HEADER SCROLL & BACK TO TOP & MOBILE NAV
  ===================================================================== */
  const header = document.getElementById("main-header");
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      if (header) {
        if (y > 70) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
      }
      if (backToTopBtn) {
        if (y > 450) backToTopBtn.classList.add("visible");
        else backToTopBtn.classList.remove("visible");
      }
    },
    { passive: true }
  );

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const hamburger = document.getElementById("hamburger-btn");
  const mobileNav = document.getElementById("mobile-nav");
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileNav.classList.toggle("active");
      document.body.style.overflow = mobileNav.classList.contains("active") ? "hidden" : "";
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileNav.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }

  /* =====================================================================
     12. EMAIL CLIPBOARD COPY TOAST
  ===================================================================== */
  const copyBtn = document.getElementById("copy-email-btn");
  const toast = document.getElementById("toast");
  if (copyBtn && toast) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("suryakirants3157@gmail.com");
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    });
  }
})();
