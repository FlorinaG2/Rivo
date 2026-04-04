document.addEventListener('DOMContentLoaded', () => {
    const menuData = [
        {
          category: 'Piadina',
          name: 'Piadina Rustic',
          weight: '400 g',
          price: '31 RON',
          description: 'Gluten, Lapte, Ouă, Muștar*',
          ingredients: ['lipie', 'maioneză', 'ketchup', 'cremă de brânză', 'mozzarella', 'piept de pui', 'kaizer', 'rucola', 'roșii']
        },
        {
          category: 'Piadina',
          name: 'Piadina Rivo',
          weight: '400 g',
          price: '31 RON',
          description: 'Gluten, Lapte, Ouă, Muștar*',
          ingredients: ['lipie', 'maioneză', 'ketchup', 'cremă de brânză', 'mozzarella', 'jambon', 'kaizer', 'rucola', 'roșii']
        },
        {
          category: 'Piadina',
          name: 'Piadina Picante',
          weight: '400 g',
          price: '30 RON',
          description: 'Gluten, Lapte, Ouă, Muștar*',
          ingredients: ['lipie', 'maioneză', 'ketchup picant', 'cremă de brânză', 'mozzarella', 'salam Milano', 'piept de pui', 'rucola', 'roșii']
        },
        {
          category: 'Piadina',
          name: 'Piadina Diavolo',
          weight: '400 g',
          price: '31 RON',
          description: 'Gluten, Lapte, Ouă, Muștar*',
          ingredients: ['lipie', 'maioneză', 'ketchup picant', 'cremă de brânză', 'mozzarella', 'salam Milano', 'salam Chorizo', 'rucola', 'roșii']
        },
        {
          category: 'Piadina',
          name: 'Piadina Quatro Formagi',
          weight: '400 g',
          price: '29 RON',
          description: 'Gluten, Lapte, Ouă*',
          ingredients: ['lipie', 'usturoi', 'cremă de brânză', 'mozzarella', 'cașcaval', 'brie', 'parmezan', 'roșii', 'rucola']
        },
        {
          category: 'Piadina',
          name: 'Piadina Casei',
          weight: '400 g',
          price: '31 RON',
          description: 'Gluten, Lapte, Ouă, Muștar*',
          ingredients: ['lipie', 'maioneză', 'ketchup', 'cremă de brânză', 'mozzarella', 'piept de pui', 'jambon', 'rucola', 'roșii', 'porumb']
        },
        {
          category: 'Piadina',
          name: 'Piadina Clasică',
          weight: '380 g',
          price: '29 RON',
          description: 'Gluten, Lapte, Ouă*',
          ingredients: ['lipie', 'sos sweet chilli', 'rucola', 'cremă de brânză', 'parmezan', 'piept de pui', 'roșii']
        },
        {
          category: 'Piadina',
          name: 'Piadina Vegetariană',
          weight: '400 g',
          price: '30 RON',
          description: 'Gluten, Soia*',
          ingredients: ['lipie', 'rucola', 'brânză de post', 'sos sweet chilli', 'vinete', 'ciuperci', 'dovleac', 'soia', 'roșii']
        },
        {
          category: 'Piadina',
          name: 'Piadina Tradițională',
          weight: '400 g',
          price: '30 RON',
          description: 'Gluten, Lapte, Ouă, Muștar*',
          ingredients: ['lipie', 'maioneză', 'ketchup', 'kaizer', 'salam Milano', 'rucola', 'roșii']
        },
    
        {
          category: 'Burger',
          name: 'Clasic Burger',
          weight: '350 g',
          price: '26 RON',
          description: 'Gluten, Lapte, Ouă, Muștar*',
          ingredients: ['chiflă', 'salată creață', 'salată coleslaw', 'burger vită', 'brânză cheddar', 'roșii', 'castraveți murați', 'sos burger']
        },
        {
          category: 'Burger',
          name: 'Crispy Burger',
          weight: '350 g',
          price: '24 RON',
          description: 'Gluten, Lapte, Ouă, Muștar*',
          ingredients: ['chiflă', 'salată creață', 'salată coleslaw', 'brânză cheddar', 'pui crispy', 'roșii', 'castraveți murați', 'sos burger']
        },
        {
          category: 'Burger',
          name: 'Cheese Burger',
          weight: '400 g',
          price: '32 RON',
          description: 'Gluten, Lapte, Ouă, Muștar*',
          ingredients: ['chiflă', 'salată creață', 'salată coleslaw', 'burger vită', 'brânză cheddar', 'roșii', 'castraveți murați', 'ceapă caramelizată', 'sos burger', 'sos cheddar']
        },
        {
          category: 'Burger',
          name: 'Double Cheese Burger',
          weight: '430 g',
          price: '34 RON',
          description: 'Gluten, Lapte, Ouă, Muștar*',
          ingredients: ['chiflă', 'brânză cheddar', 'sos burger', 'ketchup', 'salată creață', 'salată coleslaw', 'double burger vită', 'castraveți murați', 'roșii']
        },
        {
          category: 'Burger',
          name: 'Burger Vegan',
          weight: '350 g',
          price: '24 RON',
          description: 'Gluten, Soia, Muștar*',
          ingredients: ['chiflă', 'salată coleslaw', 'maioneză de post', 'ketchup', 'burger vegan', 'roșii', 'castraveți murați', 'ceapă caramelizată']
        },
    
        {
          category: 'Pui',
          name: 'Aripioare de pui picante / nepicante',
          weight: '300 / 200 / 50 g',
          price: '38 RON',
          description: 'Gluten, Ouă*',
          ingredients: ['aripioare crispy', 'cartofi', 'sos la alegere']
        },
        {
          category: 'Pui',
          name: 'Pui Crispy',
          weight: '300 / 200 / 50 g',
          price: '38 RON',
          description: 'Gluten, Ouă*',
          ingredients: ['fâșii de pui crispy', 'cartofi', 'sos la alegere']
        },
    
        {
          category: 'Garnituri',
          name: 'Cartofi Pai',
          weight: '200 g',
          price: '7 RON',
          description: 'Produs congelat**',
          ingredients: ['cartofi pai']
        },
        {
          category: 'Garnituri',
          name: 'Cartofi Pai cu Cașcaval',
          weight: '240 g',
          price: '8 RON',
          description: 'Lapte*',
          ingredients: ['cartofi pai', 'cașcaval']
        },
        {
          category: 'Garnituri',
          name: 'Cartofi Pai cu Cheddar',
          weight: '250 g',
          price: '11 RON',
          description: 'Lapte*',
          ingredients: ['cartofi pai', 'sos cheddar']
        },
    
        {
          category: 'Salate',
          name: 'Salată Cheddar',
          weight: '400 g',
          price: '36 RON',
          description: 'Lapte, Muștar*',
          ingredients: ['salată ice', 'ulei de măsline', 'condimente', 'dressing', 'castraveți', 'roșii', 'porumb', 'mozzarella', 'piept de pui']
        },
        {
          category: 'Salate',
          name: 'Salată Rivo',
          weight: '400 g',
          price: '37 RON',
          description: 'Lapte, Muștar*',
          ingredients: ['mix salată', 'condimente', 'maioneză', 'porumb', 'roșii', 'castraveți', 'mozzarella', 'pui crispy']
        },
        {
          category: 'Salate',
          name: 'Salată Ton',
          weight: '400 g',
          price: '37 RON',
          description: 'Lapte, Muștar*',
          ingredients: ['salată iceberg', 'ulei de măsline', 'condimente', 'ceapă', 'roșii', 'castraveți', 'mozzarella', 'ton', 'dressing']
        },
    
        {
          category: 'Deserturi',
          name: 'Piadina Sweet',
          weight: '300 g',
          price: '27 RON',
          description: 'Gluten, Lapte, Soia, Nuci*',
          ingredients: ['lipie', 'finetti', 'banane', 'nucă de cocos']
        },
        {
          category: 'Deserturi',
          name: 'Lava Cake',
          weight: '90 / 80 / 30 g',
          price: '27 RON',
          description: 'Gluten, Lapte, Ouă*',
          ingredients: ['lava cake', 'înghețată de vanilie', 'decor']
        },
    
        {
          category: 'Sosuri',
          name: 'Sos Cheddar',
          weight: '50 g',
          price: '6 RON',
          description: 'Lapte*',
          ingredients: ['cheddar']
        },
        {
          category: 'Sosuri',
          name: 'Sos Maioneză',
          weight: '50 g',
          price: '4 RON',
          description: 'Ouă, Muștar*',
          ingredients: ['maioneză']
        },
        {
          category: 'Sosuri',
          name: 'Sos de Usturoi',
          weight: '50 g',
          price: '4 RON',
          description: 'Ouă*',
          ingredients: ['usturoi']
        },
        {
          category: 'Sosuri',
          name: 'Sosul Casei',
          weight: '50 g',
          price: '6 RON',
          description: 'Ouă, Muștar*',
          ingredients: ['rețetă proprie']
        },
        {
          category: 'Sosuri',
          name: 'Sos Sweet Chilli',
          weight: '50 g',
          price: '6 RON',
          description: '',
          ingredients: ['sweet chilli']
        }
      ];  
    const state = {
      category: 'Toate',
      search: ''
    };
  
    const filtersEl = document.getElementById('filters');
    const menuGridEl = document.getElementById('foodMenuGrid');
    const searchInput = document.getElementById('searchInput');
    const menuOverlay = document.getElementById('menuOverlay');
    const modalContent = document.getElementById('modalContent');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const closeMenuOverlay = document.getElementById('closeMenuOverlay');
  
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
      });

      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('open');
        });
      });
    }
    function displayPrice(item) {
      return item.price || 'Preț în locație';
    }
  
    function renderFilters() {
      const categories = ['Toate', ...new Set(menuData.map(item => item.category))];
  
      filtersEl.innerHTML = categories.map(cat => `
        <button class="${state.category === cat ? 'active' : ''}" data-category="${cat}" type="button">
          ${cat}
        </button>
      `).join('');
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
            <div class="desc">Încearcă altă categorie sau alt termen de căutare.</div>
            <div class="bottom">
              <span class="price muted">Rivo Bistro Cafe</span>
              <span class="see">—</span>
            </div>
          </article>
        `;
        return;
      }
  
      menuGridEl.innerHTML = items.map(item => {
        const index = menuData.indexOf(item);
  
        return `
          <article class="menu-card" data-index="${index}" tabindex="0" role="button">
            <span class="chip">${item.category}</span>
            <h3>${item.name}</h3>
            <div class="desc">${item.ingredients.join(', ')}</div>
            <div class="bottom">
              <span class="price ${item.price ? '' : 'muted'}">
                ${item.weight ? item.weight + ' • ' : ''}${displayPrice(item)}
              </span>
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
  
      closeMenuOverlay.addEventListener('click', closeMenuItem);
  
      menuOverlay.addEventListener('click', e => {
        if (e.target === menuOverlay) closeMenuItem();
      });
    }
  
    renderFilters();
    renderMenu();
    setupMenu();
  });