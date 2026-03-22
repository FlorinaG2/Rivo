document.addEventListener('DOMContentLoaded', () => {
    const menuData = [
      {
        category:'Piadina',
        name:'Piadina Rustic',
        weight:'400 g',
        price:'31 RON',
        description:'O piadină bogată, perfectă pentru poftă serioasă și gust intens.',
        ingredients:['lipie','maioneză','ketchup','cremă de brânză','mozzarella','piept de pui','kaizer','rucola','roșii']
      },
      {
        category:'Piadina',
        name:'Piadina Rivo',
        price:'31 RON',
        description:'Semnătura casei, cu profil clasic și foarte echilibrat.',
        ingredients:['lipie','maioneză','ketchup','cremă de brânză','mozzarella','jambon','kaizer','rucola','roșii']
      },
      {
        category:'Piadina',
        name:'Piadina Picante',
        price:'30 RON',
        description:'O variantă ușor mai intensă, cu salam Milano și piept de pui.',
        ingredients:['lipie','maioneză','ketchup','cremă de brânză','mozzarella','salam Milano','piept de pui','rucola','roșii']
      },
      {
        category:'Piadina',
        name:'Piadina Diavolo',
        price:null,
        description:'Pentru cei care vor mai multă personalitate și o notă picantă.',
        ingredients:['lipie','maioneză','ketchup','cremă de brânză','mozzarella','salam Milano','salam picant','rucola','roșii']
      },
      {
        category:'Piadina',
        name:'Piadina Quatro Formagi',
        price:null,
        description:'Cremoasă, bogată și elegantă, cu patru tipuri de brânză.',
        ingredients:['lipie','usturoi','cremă de brânză','mozzarella','cașcaval','brie','parmezan','roșii','rucola']
      },
      {
        category:'Piadina',
        name:'Piadina Clasică',
        price:null,
        description:'Sweet chilli, pui și parmezan într-o combinație clară și foarte plăcută.',
        ingredients:['lipie','sos sweet chilli','rucola','cremă de brânză','parmezan','piept de pui','roșii']
      },
      {
        category:'Piadina',
        name:'Piadina Vegetariană',
        price:null,
        description:'Alternativa fără carne, construită simplu și gustos.',
        ingredients:['lipie','brânză de post','sos sweet chilli','burger post','roșii']
      },
      {
        category:'Piadina',
        name:'Piadina Tradițională',
        price:null,
        description:'O combinație familiară, directă și foarte ușor de iubit.',
        ingredients:['lipie','maioneză','ketchup','kaizer','salam Milano','rucola','roșii']
      },
      {
        category:'Burger',
        name:'Clasic Burger',
        price:null,
        description:'Burger de vită cu salată, coleslaw, cheddar și sos burger.',
        ingredients:['chiflă','salată creață','salată coleslaw','burger vită','cheddar','roșii','castraveți murați','sos burger']
      },
      {
        category:'Burger',
        name:'Crispy Burger',
        price:null,
        description:'Crocant, suculent și foarte satisfăcător.',
        ingredients:['chiflă','salată creață','salată coleslaw','cheddar','pui crispy','roșii','castraveți murați','sos burger']
      },
      {
        category:'Burger',
        name:'Cheese Burger',
        price:null,
        description:'Variantă mai intensă, cu ceapă caramelizată și sos cheddar.',
        ingredients:['chiflă','salată creață','salată coleslaw','burger vită','cheddar','roșii','castraveți murați','ceapă caramelizată','sos burger','sos cheddar']
      },
      {
        category:'Burger',
        name:'Double Cheese Burger',
        price:null,
        description:'Pentru poftă serioasă: double burger de vită și impact maxim.',
        ingredients:['chiflă','cheddar','sos burger','ketchup','salată creață','salată coleslaw','double burger vită','castraveți murați','roșii']
      },
      {
        category:'Pui',
        name:'Aripioare de pui picante / nepicante',
        price:null,
        description:'Aripioare crispy, cartofi și sos la alegere.',
        ingredients:['aripioare crispy','cartofi','sos la alegere']
      },
      {
        category:'Pui',
        name:'Pui Crispy',
        price:null,
        description:'Fâșii crocante de pui, servite cu cartofi și sos la alegere.',
        ingredients:['fâșii de pui crispy','cartofi','sos la alegere']
      },
      {
        category:'Garnituri',
        name:'Cartofi Pai',
        weight:'200 g',
        price:'7 RON',
        description:'Garnitura clasică pentru aproape orice combinație.',
        ingredients:['cartofi pai']
      },
      {
        category:'Salate',
        name:'Salată Cheddar',
        price:null,
        description:'Fresh, sățioasă și bine echilibrată, cu pui și mozzarella.',
        ingredients:['salată iceberg','ulei de măsline','condimente','dressing','castraveți','roșii','porumb','mozzarella','piept de pui']
      },
      {
        category:'Salate',
        name:'Salată Rivo',
        price:null,
        description:'Mix fresh cu pui crispy și identitatea casei.',
        ingredients:['mix salată','condimente','maioneză','porumb','roșii','castraveți','mozzarella','pui crispy']
      },
      {
        category:'Salate',
        name:'Salată Ton',
        price:null,
        description:'Ton, mozzarella și dressing aromat într-o versiune foarte fresh.',
        ingredients:['salată iceberg','ulei de măsline','condimente','ceapă','roșii','castraveți','mozzarella','ton','dressing']
      },
      {
        category:'Deserturi',
        name:'Piadina Sweet',
        price:null,
        description:'Final dulce și confortabil.',
        ingredients:['lipie','finetti','banane','nucă de cocos']
      },
      {
        category:'Deserturi',
        name:'Lava Cake',
        price:null,
        description:'Desert intens și catifelat, servit cu înghețată de vanilie.',
        ingredients:['lava cake','înghețată de vanilie']
      },
      {
        category:'Sosuri',
        name:'Sos Cheddar',
        price:null,
        description:'Sos cremos cu cheddar.',
        ingredients:['cheddar']
      },
      {
        category:'Sosuri',
        name:'Sos Maioneză',
        price:null,
        description:'Clasic și versatil.',
        ingredients:['maioneză']
      },
      {
        category:'Sosuri',
        name:'Sos de Usturoi',
        price:null,
        description:'Intens, aromat și foarte iubit.',
        ingredients:['usturoi']
      },
      {
        category:'Sosuri',
        name:'Sosul Casei',
        price:null,
        description:'Semnătura gustului Rivo.',
        ingredients:['rețetă proprie']
      },
      {
        category:'Sosuri',
        name:'Sos Sweet Chilli',
        price:null,
        description:'Echilibru între dulce și picant.',
        ingredients:['sweet chilli']
      }
    ];
  
    const state = {
      category: 'Toate',
      search: ''
    };
  
    const filtersEl = document.getElementById('filters');
    const menuGridEl = document.getElementById('menuGrid');
    const searchInput = document.getElementById('searchInput');
    const menuOverlay = document.getElementById('menuOverlay');
    const modalContent = document.getElementById('modalContent');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const header = document.getElementById('header');
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.getElementById('menuToggle');
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
  
    function renderFilters() {
      const categories = ['Toate', ...new Set(menuData.map(item => item.category))];
      filtersEl.innerHTML = categories.map(cat => `
        <button class="${state.category === cat ? 'active' : ''}" data-category="${cat}" type="button">${cat}</button>
      `).join('');
    }
  
    function displayPrice(item) {
      return item.price || 'Preț în locație';
    }
  
    function renderMenu() {
      const q = state.search.trim().toLowerCase();
  
      const items = menuData.filter(item => {
        const catOk = state.category === 'Toate' || item.category === state.category;
        const hay = `${item.name} ${item.description} ${item.ingredients.join(' ')}`.toLowerCase();
        const searchOk = !q || hay.includes(q);
        return catOk && searchOk;
      });
  
      if (!items.length) {
        menuGridEl.innerHTML = `
          <article class="menu-card">
            <span class="chip">Fără rezultate</span>
            <h3>Niciun preparat nu se potrivește.</h3>
            <div class="desc">Încearcă altă categorie sau șterge termenul de căutare.</div>
            <div class="bottom"><span class="price muted">Rivo Bistro Cafe</span><span class="see">—</span></div>
          </article>
        `;
        return;
      }
  
      menuGridEl.innerHTML = items.map(item => {
        const index = menuData.indexOf(item);
        return `
          <article class="menu-card reveal show" data-index="${index}" tabindex="0" role="button" aria-label="Vezi detalii pentru ${item.name}">
            <span class="chip">${item.category}</span>
            <h3>${item.name}</h3>
            <div class="desc">${item.ingredients.join(', ')}</div>
            <div class="bottom">
              <span class="price ${item.price ? '' : 'muted'}">${item.weight ? item.weight + ' • ' : ''}${displayPrice(item)}</span>
              <span class="see">Vezi detalii</span>
            </div>
          </article>
        `;
      }).join('');
    }
  
    function openMenuItem(index) {
      const item = menuData[index];
      if (!item) return;
  
      modalContent.innerHTML = `
        <div class="meta">
          <span>${item.category}</span>
          ${item.weight ? `<span>${item.weight}</span>` : ''}
          <span>${displayPrice(item)}</span>
        </div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="ingredients">
          ${item.ingredients.map(ing => `<span>${ing}</span>`).join('')}
        </div>
      `;
  
      menuOverlay.classList.add('open');
      menuOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  
    function closeMenuItem() {
      menuOverlay.classList.remove('open');
      menuOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
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
  
    function setupMenu() {
      filtersEl.addEventListener('click', e => {
        const btn = e.target.closest('[data-category]');
        if (!btn) return;
        state.category = btn.dataset.category;
        renderFilters();
        renderMenu();
      });
  
      searchInput.addEventListener('input', e => {
        state.search = e.target.value;
        renderMenu();
      });
  
      menuGridEl.addEventListener('click', e => {
        const card = e.target.closest('.menu-card[data-index]');
        if (!card) return;
        openMenuItem(card.dataset.index);
      });
  
      menuGridEl.addEventListener('keydown', e => {
        const card = e.target.closest('.menu-card[data-index]');
        if (!card) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openMenuItem(card.dataset.index);
        }
      });
  
      document.getElementById('closeMenuOverlay').addEventListener('click', closeMenuItem);
      menuOverlay.addEventListener('click', e => {
        if (e.target === menuOverlay) closeMenuItem();
      });
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
  
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
      });
  
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
            texturePath(prefix, 2), // right
            texturePath(prefix, 4), // left
            texturePath(prefix, 0), // top
            texturePath(prefix, 5), // bottom
            texturePath(prefix, 1), // front
            texturePath(prefix, 3)  // back
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
        closeMenuItem();
        closeLightbox();
      }
    });
  
    buildIntro();
    renderFilters();
    renderMenu();
    setupMenu();
    setupLightbox();
    setupReveal();
    setupTilt();
    setupHeader();
    setupParticles();
    initRivo360();
  });