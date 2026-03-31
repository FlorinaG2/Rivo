document.addEventListener('DOMContentLoaded', () => {
    const menuData = [
      {
        category: 'Băuturi calde',
        name: 'Cafea Ristretto',
        weight: '10 ml',
        price: '8 RON'
      },
      {
        category: 'Băuturi calde',
        name: 'Cafea Expresso',
        weight: '20 ml',
        price: '8 RON'
      },
      {
        category: 'Băuturi calde',
        name: 'Expresso Americano',
        weight: '90 ml',
        price: '8 RON'
      },
      {
        category: 'Băuturi calde',
        name: 'Espresso Macchiato',
        weight: '60 ml',
        price: '10 RON'
      },
      {
        category: 'Băuturi calde',
        name: 'Cappucino',
        weight: '200 ml',
        price: '13 RON'
      },
      {
        category: 'Băuturi calde',
        name: 'Flat White',
        weight: '200 ml',
        price: '16 RON'
      },
      {
        category: 'Băuturi calde',
        name: 'Latte',
        weight: '300 ml',
        price: '15 RON'
      },
      {
        category: 'Băuturi calde',
        name: 'Ceai Althaus',
        weight: '200 ml',
        price: '10 RON',
        description: 'ceai mentă, ceai fructe, ceai verde, ceai negru'
      },
      {
        category: 'Băuturi calde',
        name: 'Ciocolată Caldă',
        weight: '150 ml',
        price: '15 RON'
      },
      {
        category: 'Băuturi calde',
        name: 'Siropuri',
        weight: '',
        price: '2 RON'
      },
  
      {
        category: 'Băuturi răcoritoare',
        name: 'Pepsi',
        weight: '250 ml',
        price: '9 RON'
      },
      {
        category: 'Băuturi răcoritoare',
        name: 'Pepsi Cola',
        weight: '250 ml',
        price: '9 RON'
      },
      {
        category: 'Băuturi răcoritoare',
        name: 'Pepsi Twist',
        weight: '250 ml',
        price: '9 RON'
      },
      {
        category: 'Băuturi răcoritoare',
        name: 'Everness Tonic',
        weight: '250 ml',
        price: '9 RON'
      },
      {
        category: 'Băuturi răcoritoare',
        name: 'Mirinda Orange',
        weight: '250 ml',
        price: '9 RON'
      },
      {
        category: 'Băuturi răcoritoare',
        name: 'SevenUp',
        weight: '250 ml',
        price: '9 RON'
      },
      {
        category: 'Băuturi răcoritoare',
        name: 'Lipton',
        weight: '500 ml',
        price: '9 RON'
      },
      {
        category: 'Băuturi răcoritoare',
        name: 'Prigat Nectar',
        weight: '250 ml',
        price: '12 RON',
        description: 'pere, mere, kiwi, piersici, portocale, căpșuni și banane'
      },
      {
        category: 'Băuturi răcoritoare',
        name: 'Apă Plată',
        weight: '500 ml',
        price: '8 RON'
      },
      {
        category: 'Băuturi răcoritoare',
        name: 'Apă Minerală',
        weight: '500 ml',
        price: '8 RON'
      },
  
      {
        category: 'Băuturi energizante',
        name: 'Red Bull',
        weight: '250 ml',
        price: '15 RON'
      },
      {
        category: 'Băuturi energizante',
        name: 'Rockstar',
        weight: '250 ml',
        price: '8 RON'
      },
  
      {
        category: 'Limonade',
        name: 'Limonadă Clasică',
        weight: '500 ml',
        price: '18 RON',
        ingredients: ['lămâie', 'apă', 'gheață']
      },
      {
        category: 'Limonade',
        name: 'Limonadă cu Diverse Arome',
        weight: '500 ml',
        price: '20 RON',
        ingredients: ['lămâie', 'apă', 'gheață', 'arome']
      },
  
      {
        category: 'Fresh',
        name: 'Fresh de Portocale',
        weight: '250 ml',
        price: '17 RON',
        ingredients: ['portocale']
      },
      {
        category: 'Fresh',
        name: 'Fresh de Portocale & Gref',
        weight: '250 ml',
        price: '17 RON',
        ingredients: ['portocale', 'gref']
      },
  
      {
        category: 'Cocktail-uri',
        name: 'Gin Tonic',
        weight: '350 ml',
        price: '29 RON',
        ingredients: ['gin 50 ml', 'apă tonică', 'gheață', 'gref']
      },
      {
        category: 'Cocktail-uri',
        name: 'Hugo',
        weight: '300 ml',
        price: '29 RON',
        ingredients: ['mentă', 'sirop soc', 'prosecco 100 ml', 'apă minerală', 'gheață', 'lime']
      },
      {
        category: 'Cocktail-uri',
        name: 'Mojito',
        weight: '300 ml',
        price: '29 RON',
        ingredients: ['rom 100 ml', 'lămâie', 'mentă', 'gheață', 'apă minerală', 'sirop de zahăr']
      },
      {
        category: 'Cocktail-uri',
        name: 'Aperol Spritz',
        weight: '300 ml',
        price: '29 RON',
        ingredients: ['aperol 50 ml', 'prosecco 100 ml', 'apă minerală', 'gheață', 'portocală']
      },
      {
        category: 'Cocktail-uri',
        name: 'Sex On The Beach',
        weight: '300 ml',
        price: '29 RON',
        ingredients: ['vodkă Absolut 50 ml', 'sirop fragola', 'suc de portocale', 'gheață']
      },
      {
        category: 'Cocktail-uri',
        name: 'Aperol Tonic',
        weight: '300 ml',
        price: '29 RON',
        ingredients: ['aperol 50 ml', 'apă tonică', 'gheață', 'portocală']
      },
      {
        category: 'Cocktail-uri',
        name: 'Campari Spritz',
        weight: '300 ml',
        price: '29 RON',
        ingredients: ['campari 50 ml', 'prosecco 100 ml', 'apă minerală', 'gheață', 'portocală']
      },
      {
        category: 'Cocktail-uri',
        name: 'Campari Tonic',
        weight: '300 ml',
        price: '29 RON',
        ingredients: ['campari 50 ml', 'apă tonică 120 ml', 'gheață', 'portocală']
      },
  
      {
        category: 'Coniac',
        name: 'Jidvei',
        weight: '100 ml',
        price: '23 RON',
        description: 'Alc. 42%'
      },
      {
        category: 'Coniac',
        name: 'Miorița',
        weight: '100 ml',
        price: '30 RON',
        description: 'Alc. 40%'
      }
    ];
  
    const state = {
      category: 'Toate',
      search: ''
    };
  
    const filtersEl = document.getElementById('filters');
    const menuGridEl = document.getElementById('drinksMenuGrid');
    const searchInput = document.getElementById('searchInput');
    const menuOverlay = document.getElementById('menuOverlay');
    const modalContent = document.getElementById('modalContent');
    const closeMenuOverlay = document.getElementById('closeMenuOverlay');
  
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
        const hay = `${item.name} ${item.description || ''} ${(item.ingredients || []).join(' ')}`.toLowerCase();
        const searchOk = !q || hay.includes(q);
        return catOk && searchOk;
      });
  
      if (!items.length) {
        menuGridEl.innerHTML = `
          <article class="menu-card">
            <span class="chip">Fără rezultate</span>
            <h3>Nicio băutură nu se potrivește.</h3>
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
        const descText = item.description || (item.ingredients || []).join(', ') || '—';
  
        return `
          <article class="menu-card" data-index="${index}" tabindex="0" role="button">
            <span class="chip">${item.category}</span>
            <h3>${item.name}</h3>
            <div class="desc">${descText}</div>
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
        <p>${item.description || 'Detalii disponibile în locație.'}</p>
        <div class="ingredients">
          ${(item.ingredients || []).map(ing => `<span>${ing}</span>`).join('')}
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
        openMenuItem(Number(card.dataset.index));
      });
  
      menuGridEl.addEventListener('keydown', e => {
        const card = e.target.closest('.menu-card[data-index]');
        if (!card) return;
  
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openMenuItem(Number(card.dataset.index));
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
  