document.addEventListener('DOMContentLoaded', () => {

  const state = {
    category: 'Toate',
    search: ''
  };

  const modalContent = document.getElementById('modalContent');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const header = document.getElementById('header');
  const navLinks = document.getElementById('navLinks');
  const introGrid = document.getElementById('introGrid');

  function buildIntro() {
    const rows = 9;
    const cols = 9;
    const frag = document.createDocumentFragment();

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const piece = document.createElement('div');
        piece.className = 'cube';
        piece.style.setProperty('--bx', `${(x / (cols - 1)) * 100}%`);
        piece.style.setProperty('--by', `${(y / (rows - 1)) * 100}%`);
        piece.style.setProperty('--sx', `${Math.random() * 1400 - 700}px`);
        piece.style.setProperty('--sy', `${Math.random() * 1000 - 500}px`);
        piece.style.setProperty('--sz', `${Math.random() * 1000 - 500}px`);
        piece.style.setProperty('--rx', `${Math.random() * 540 - 270}deg`);
        piece.style.setProperty('--ry', `${Math.random() * 540 - 270}deg`);
        piece.style.setProperty('--delay', `${0.02 * (x + y) + Math.random() * 0.18}s`);
        frag.appendChild(piece);
      }
    }

    introGrid.appendChild(frag);
    setTimeout(() => {
      const intro = document.getElementById('intro');
      if (intro) intro.classList.add('hidden');
    }, 2600);
  }

  function openLightbox(src) {
    lightboxImage.src = src;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
    document.body.style.overflow = '';
  }

  function setupLightbox() {
    document.querySelectorAll('[data-lightbox]').forEach(el => {
      el.addEventListener('click', () => openLightbox(el.dataset.lightbox));
    });

    document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  function setupReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }

  function setupTilt() {
    document.querySelectorAll('.tilt').forEach(card => {
      card.addEventListener('pointermove', e => {
        if (window.innerWidth < 860) return;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const ry = (x - 0.5) * 12;
        const rx = (0.5 - y) * 12;
        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`;
        card.style.setProperty('--mx', `${x * 100}%`);
        card.style.setProperty('--my', `${y * 100}%`);
      });

      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
      });
    });
  }

  function setupHeader() {
    const allLinks = [...navLinks.querySelectorAll('a')];

    function update() {
      header.classList.toggle('scrolled', window.scrollY > 24);
      const sections = [...document.querySelectorAll('main section[id]')];
      let current = 'home';
      const y = window.scrollY + 140;

      sections.forEach(sec => {
        if (y >= sec.offsetTop) current = sec.id;
      });

      allLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
    
    allLinks.forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  function setupParticles() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const count = Math.min(80, Math.floor((w * h) / 18000));

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2.2 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: Math.random() * 0.5 + 0.15
    }));

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
        g.addColorStop(0, `rgba(216,179,106,${p.a})`);
        g.addColorStop(0.5, `rgba(216,179,106,${p.a * 0.18})`);
        g.addColorStop(1, 'rgba(216,179,106,0)');

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 8, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    draw();
  }

  function initRivo360() {
    const canvasHost = document.getElementById('rivo360Canvas');
    const loaderEl = document.getElementById('rivo360Loader');
    const stageEl = document.getElementById('rivo360Stage');
    const autoBtn = document.getElementById('toggleAutoRotate');
    const fullscreenBtn = document.getElementById('rivo360Fullscreen');
    const sceneButtons = document.querySelectorAll('.rivo360-scene');

    if (!canvasHost || !loaderEl || !stageEl || !autoBtn || !fullscreenBtn || !sceneButtons.length) return;

    if (!window.THREE) {
      console.error('Three.js nu s-a încărcat.');
      loaderEl.classList.add('show');
      loaderEl.querySelector('span').textContent = 'Three.js nu s-a încărcat';
      return;
    }

    const BASE = 'C3F72D12-E746-4C4C-9B21-8776EA54E10C/SweepProcessorData';

    const SCENES = {
      lounge: {
        prefix: '66281c4c1f9d45a8b99c01cfb889de17'
      },
      main: {
        prefix: '4d58c46676214c538c0341c5086a2724'
      },
      entry: {
        prefix: 'deb2012ecb8148d8b5c95577e4b35fb5'
      }
    };

    let renderer, scene, camera, cube;
    let lon = 15;
    let lat = 0;
    let isInteracting = false;
    let pointerDownX = 0;
    let pointerDownY = 0;
    let pointerDownLon = 0;
    let pointerDownLat = 0;
    let autoRotate = true;
    let currentScene = 'lounge';

    function showLoader(show, message = 'Se încarcă turul 360…') {
      loaderEl.querySelector('span').textContent = message;
      loaderEl.classList.toggle('show', show);
    }

    function texturePath(prefix, faceIndex) {
      return `${BASE}/${prefix}_512_${String(faceIndex).padStart(3, '0')}.jpg`;
    }

    function loadTexture(url) {
      return new Promise((resolve, reject) => {
        const loader = new THREE.TextureLoader();
        loader.load(
          url,
          texture => {
            if ('colorSpace' in texture) {
              texture.colorSpace = THREE.SRGBColorSpace;
            } else {
              texture.encoding = THREE.sRGBEncoding;
            }
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.generateMipmaps = false;
            resolve(texture);
          },
          undefined,
          err => reject(err)
        );
      });
    }

    function disposeMaterials(materials) {
      if (!materials) return;
      const arr = Array.isArray(materials) ? materials : [materials];
      arr.forEach(mat => {
        if (mat.map) mat.map.dispose();
        mat.dispose();
      });
    }

    async function setScene(sceneKey) {
      currentScene = sceneKey;
      sceneButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.scene === sceneKey);
      });

      showLoader(true);

      try {
        const prefix = SCENES[sceneKey].prefix;

        const urls = [
          texturePath(prefix, 2),
          texturePath(prefix, 4),
          texturePath(prefix, 0),
          texturePath(prefix, 5),
          texturePath(prefix, 1),
          texturePath(prefix, 3)
        ];

        const textures = await Promise.all(urls.map(loadTexture));

        const materials = textures.map(tex => new THREE.MeshBasicMaterial({
          map: tex,
          side: THREE.BackSide
        }));

        if (!cube) {
          const geometry = new THREE.BoxGeometry(1000, 1000, 1000);
          cube = new THREE.Mesh(geometry, materials);
          scene.add(cube);
        } else {
          const oldMaterials = cube.material;
          cube.material = materials;
          disposeMaterials(oldMaterials);
        }

        showLoader(false);
      } catch (error) {
        console.error('Eroare la încărcarea turului 360:', error);
        showLoader(true, 'Nu s-a putut încărca turul 360');
      }
    }

    function onPointerDown(event) {
      isInteracting = true;
      autoRotate = false;
      autoBtn.classList.remove('active');

      pointerDownX = event.clientX;
      pointerDownY = event.clientY;
      pointerDownLon = lon;
      pointerDownLat = lat;
    }

    function onPointerMove(event) {
      if (!isInteracting) return;

      lon = (pointerDownX - event.clientX) * 0.12 + pointerDownLon;
      lat = (event.clientY - pointerDownY) * 0.12 + pointerDownLat;
    }

    function onPointerUp() {
      isInteracting = false;
    }

    function onWheel(event) {
      event.preventDefault();
      camera.fov += event.deltaY * 0.03;
      camera.fov = Math.max(42, Math.min(90, camera.fov));
      camera.updateProjectionMatrix();
    }

    function onResize() {
      if (!renderer || !camera) return;

      const w = canvasHost.clientWidth;
      const h = canvasHost.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }

    function animate() {
      requestAnimationFrame(animate);

      if (autoRotate && !isInteracting) {
        lon += 0.03;
      }

      lat = Math.max(-85, Math.min(85, lat));

      const phi = THREE.MathUtils.degToRad(90 - lat);
      const theta = THREE.MathUtils.degToRad(lon);

      const target = new THREE.Vector3(
        500 * Math.sin(phi) * Math.cos(theta),
        500 * Math.cos(phi),
        500 * Math.sin(phi) * Math.sin(theta)
      );

      camera.lookAt(target);
      renderer.render(scene, camera);
    }

    function initViewer() {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
      renderer.setSize(canvasHost.clientWidth, canvasHost.clientHeight);

      if ('outputColorSpace' in renderer) {
        renderer.outputColorSpace = THREE.SRGBColorSpace;
      } else {
        renderer.outputEncoding = THREE.sRGBEncoding;
      }

      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.02;

      canvasHost.innerHTML = '';
      canvasHost.appendChild(renderer.domElement);

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        75,
        canvasHost.clientWidth / canvasHost.clientHeight,
        1,
        2000
      );

      camera.position.set(0, 0, 0.1);

      stageEl.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
      stageEl.addEventListener('wheel', onWheel, { passive: false });
      window.addEventListener('resize', onResize);

      sceneButtons.forEach(btn => {
        btn.addEventListener('click', () => setScene(btn.dataset.scene));
      });

      autoBtn.addEventListener('click', () => {
        autoRotate = !autoRotate;
        autoBtn.classList.toggle('active', autoRotate);
      });

      fullscreenBtn.addEventListener('click', async () => {
        try {
          if (!document.fullscreenElement) {
            await stageEl.requestFullscreen?.();
          } else {
            await document.exitFullscreen?.();
          }
        } catch (err) {
          console.error('Fullscreen error:', err);
        }
      });

      setScene(currentScene);
      animate();
    }

    initViewer();
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });

  buildIntro();
  setupLightbox();
  setupReveal();
  setupTilt();
  setupHeader();
  setupParticles();
  initRivo360();
});