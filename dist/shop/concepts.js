(() => {
  const legacy = document.querySelector('#main');
  const legacyPicker = document.querySelector('.variation-bar');
  const legacyEditor = document.querySelector('.editor-launch');
  const skip = document.querySelector('.skip');
  const shopLink = document.querySelector('header a[href="#shop"]');
  const photos = [
    document.querySelector('.story-art img').src,
    'https://pub-d5ed5e2b96684f8ca98bd9817f6707dc.r2.dev/media/7bf4f25a2903-addison-rae-spotify-bna.webp',
    'https://pub-d5ed5e2b96684f8ca98bd9817f6707dc.r2.dev/media/3cb9f9dd289e-IMG_5351.jpeg'
  ];
  const picker = document.createElement('div');
  picker.className = 'concept-picker';
  picker.innerHTML = `<label>Original concepts <select id="concept-design"><option value="">Storefront variations</option></select></label>
    <label hidden>Edition <select id="concept-edition"></select></label>
    <button type="button" aria-expanded="false" aria-controls="concept-settings" hidden>Edit concept</button>
    <span class="concept-picker-note" aria-live="polite"></span><details id="concept-settings" hidden><summary>Concept settings</summary>
      <div><label>Headline <input name="title" maxlength="160"></label>
      <label>Intro <input name="intro" maxlength="300"></label>
      <label>Canvas <select name="canvas"><option value="">Edition default</option><option value="paper">Paper</option><option value="ink">Ink</option></select></label>
      <label>Headline scale <input type="range" name="scale" min="65" max="125"></label>
      <label>Spacing <input type="range" name="space" min="12" max="60"></label>
      <button type="button" data-reset>Reset edition</button></div>
    </details>`;
  legacyPicker.before(picker);
  const root = document.createElement('main');
  root.id = 'concept-page';
  root.tabIndex = -1;
  root.hidden = true;
  legacy.after(root);
  const conceptPick = picker.querySelector('#concept-design');
  const editionPick = picker.querySelector('#concept-edition');
  const editButton = picker.querySelector('[aria-controls]');
  const note = picker.querySelector('.concept-picker-note');
  const settings = picker.querySelector('#concept-settings');
  shopConcepts.forEach(({id,name}) => conceptPick.add(new Option(name,id)));

  const escape = (value = '') => String(value).replace(/[&<>"']/g, ch => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  })[ch]);
  const action = (i, label='Product details') => `<button class="cp-action" type="button" data-product="${i}">${escape(label)} <span aria-hidden="true">↗</span></button>`;
  const status = p => `${p.label === 'Future concept' ? 'Future concept · ' : ''}Draft ${p.price}`;
  const photo = (index, cls='') => `<figure class="${cls}"><img src="${photos[index]}" alt="From the Syncronicity live show portfolio"></figure>`;
  const title = () => '<h1 data-copy="title"></h1>';
  const intro = () => '<p class="cp-intro" data-copy="intro"></p>';
  const mast = (label) => `<div class="cp-mast"><span class="cp-label">${label}</span>${title()}${intro()}</div>`;
  const rows = ids => ids.map(i => {
    const p = products[i];
    return `<li><div><strong>${escape(p.name)}</strong><small>${escape(p.format)}</small></div><span>${escape(status(p))}</span>${action(i,'View')}</li>`;
  }).join('');
  const feature = (i, cls='') => {
    const p = products[i];
    return `<article class="cp-feature ${cls}"><span class="cp-label">${escape(p.format)}</span><h2>${escape(p.name)}</h2><p>${escape(p.description)}</p><span class="cp-price">${escape(status(p))}</span>${action(i)}</article>`;
  };
  const catalog = (ids, label='All digital tools', open=false) => {
    const rest = products.map((_,i) => i).filter(i => !ids.includes(i));
    if (!rest.length) return '';
    return `<details class="cp-catalog" ${open ? 'open' : ''}><summary>${label}</summary><ul class="cp-rows">${rows(rest)}</ul></details>`;
  };
  const cue = ['Load the session','Prepare stage cues','Prepare music cues','Set the click','Prepare tuning clips','Review line counts','Plan the set','Review the package','Explore MIDI utilities','Review timecode'];
  const jobLabels = [
    ['Prepare playback','Plan the set','Cue the crew','Keep time','Scope the whole kit'],
    ['Playback operator','Music director','Stage crew','Line checks'],
    ['One layer','Core session','Session and app'],
    ['Rack','Clip collection','Template','Standalone app'],
    ['Set preparation','Rehearsal','Stage cues','Music cues']
  ];
  const layouts = {
    patch({ids}) {
      return `${mast('Playback workflow')}<ol class="cp-path">${ids.map(i =>
        `<li><span class="cp-port" aria-hidden="true"></span><span class="cp-label">${cue[i]}</span>${feature(i)}</li>`).join('')}</ol>${catalog(ids,'Browse the rest of the catalog')}`;
    },
    lens({ids,image}) {
      return `<div class="cp-lens-frame">${photo(image)}<div class="cp-lens-title">${title()}${intro()}</div></div>
        <div class="cp-lens-notes"><a href="https://www.syncronicity.live/work">See the work ↗</a><div>${ids.map(i => feature(i)).join('')}</div></div>${catalog(ids,'Browse the rest of the catalog')}`;
    },
    library({ids}) {
      return `<div class="cp-library">${mast('Digital product index')}
        <div><label class="cp-search">Search this edition <input type="search" placeholder="Try click or Ableton" data-search></label>
        <p class="cp-search-status" role="status"></p><ul class="cp-rows" data-results>${rows(ids)}</ul></div></div>${catalog(ids,'Browse other tools')}`;
    },
    manual({ids}) {
      return `<div class="cp-manual"><aside>${mast('Documentation')}<nav aria-label="Manual contents">${ids.map(i => `<a href="#manual-${i}" data-chapter="${i}">${escape(products[i].name)}</a>`).join('')}</nav></aside>
        <div>${ids.map((i,n) => {
          const p = products[i];
          return `<details id="manual-${i}" ${n===0 ? 'open' : ''}><summary><span class="cp-label">§ ${String(n+1).padStart(2,'0')}</span> ${escape(p.name)}</summary>
            <p>${escape(p.description)}</p><dl><dt>Format</dt><dd>${escape(p.format)}</dd><dt>Draft scope</dt><dd>${escape(p.included)}</dd></dl>${action(i)}</details>`;
        }).join('')}</div></div>${catalog(ids,'Browse other tools')}`;
    },
    poster({ids}) {
      return `<div class="cp-poster"><div class="cp-poster-type"><span class="cp-label">Digital product showcase</span>${title()}<div class="cp-poster-bottom">${intro()}${action(ids[0],products[ids[0]].name)}</div></div>
        <div class="cp-poster-mark" aria-hidden="true"><i></i><i></i><i></i></div></div>
        <div class="cp-poster-shelf">${ids.slice(1).map(i=>feature(i)).join('')}</div>${catalog(ids,'Browse the rest of the catalog')}`;
    },
    compare({ids}) {
      const fields = [['Draft price','price'],['Format','format'],['Purpose','description'],['Draft scope','included']];
      return `${mast('Compare digital products')}<div class="cp-table-scroll" tabindex="0" role="region" aria-label="Product comparison"><table class="cp-table"><thead><tr><td></td>${ids.map(i=>`<th scope="col">${escape(products[i].name)}</th>`).join('')}</tr></thead>
        <tbody>${fields.map(([label,key])=>`<tr><th scope="row">${label}</th>${ids.map(i=>`<td>${escape(products[i][key])}</td>`).join('')}</tr>`).join('')}
        <tr><td></td>${ids.map(i=>`<td>${action(i,'View')}</td>`).join('')}</tr></tbody></table></div>${catalog(ids,'Browse other tools')}`;
    },
    outfitter({ids, number}) {
      return `${mast('Choose a starting point')}<div class="cp-kit"><div class="cp-choices" aria-label="Choose your starting point">${ids.map((i,n) => `<button type="button" data-inspect="${i}" aria-pressed="${n===0}">${jobLabels[number][n]} <span aria-hidden="true">↗</span></button>`).join('')}</div>
        <div class="cp-selection" data-selection aria-live="polite">${feature(ids[0])}</div></div>${catalog(ids,'Browse more tools')}`;
    },
    desk({ids}) {
      return `<div class="cp-desktop"><div>${mast('Digital tools workspace')}<div class="cp-desk-list" aria-label="Tools at this desk">${ids.map((i,n) =>
        `<button data-inspect="${i}" type="button" aria-pressed="${n===0}"><span>${escape(products[i].name)}</span><small>${escape(products[i].format)}</small></button>`).join('')}</div></div>
        <div class="cp-inspector" data-selection aria-live="polite">${inspect(ids[0])}</div></div>${catalog(ids,'Browse the rest of the catalog')}`;
    },
    press({ids,image}) {
      const [first,...rest] = ids;
      return `<div class="cp-newspaper"><div class="cp-nameplate"><span>Syncronicity</span><span>Soundcheck Journal</span></div>
        <div class="cp-news-grid"><article class="cp-news-lead">${title()}${photo(image)}${intro()}${action(first,products[first].name)}</article>
        <aside aria-label="Related tools">${rest.map(i=>feature(i)).join('')}</aside></div></div>${catalog(ids,'Product index')}`;
    },
    call({ids}) {
      return `<div class="cp-call">${mast('Sample running order')}<ol class="cp-call-list">${ids.map((i,n) =>
        `<li><span class="cp-call-num" aria-hidden="true">${String(n+1).padStart(2,'0')}</span><div><h2>${cue[i]}</h2><span>${escape(products[i].name)}</span></div><span class="cp-call-price">${escape(status(products[i]))}</span>${action(i,'View')}</li>`).join('')}</ol></div>${catalog(ids,'Browse other tools')}`;
    }
  };
  function inspect(i) {
    const p = products[i];
    return `${feature(i)}<dl><dt>Draft scope</dt><dd>${escape(p.included)}</dd><dt>Compatibility</dt><dd>${escape(p.compat || 'To be confirmed')}</dd></dl>`;
  }
  let active, edition;
  let edits = {};
  const editKey = () => 'syncro-shop-concept:' + active.id + ':' + edition;
  const defaults = {scale:100,space:28};
  function readEdits() {
    try { return JSON.parse(localStorage.getItem(editKey())) || {}; } catch { return {}; }
  }
  function applyEdits() {
    const [,head,body] = active.editions[edition];
    root.querySelector('[data-copy="title"]').textContent = edits.title ?? head;
    root.querySelector('[data-copy="intro"]').textContent = edits.intro ?? body;
    root.dataset.canvas = edits.canvas || '';
    root.style.setProperty('--cp-scale', (edits.scale ?? defaults.scale) / 100);
    root.style.setProperty('--cp-space', (edits.space ?? defaults.space) + 'px');
  }
  function syncEditor() {
    const [,head,body] = active.editions[edition];
    const values = {title:head,intro:body,canvas:'',...defaults,...edits};
    settings.querySelectorAll('[name]').forEach(input => { input.value = values[input.name]; });
  }
  function showEditor(open) {
    settings.hidden = !open;
    settings.open = open;
    editButton.setAttribute('aria-expanded',open);
  }
  function render() {
    root.hidden = !active;
    note.textContent = active?.note || '';
    note.hidden = !active;
    legacy.hidden = legacyPicker.hidden = legacyEditor.hidden = Boolean(active);
    document.body.toggleAttribute('data-concept-open',Boolean(active));
    skip.href = active ? '#concept-page' : '#main';
    shopLink.href = active ? '#concept-page' : '#shop';
    editionPick.closest('label').hidden = editButton.hidden = !active;
    if (!active) {
      showEditor(false);
      root.replaceChildren();
      return;
    }
    const [, , , ids, image] = active.editions[edition];
    root.dataset.design = active.id;
    root.dataset.edition = edition;
    root.innerHTML = `<div class="cp-container">${layouts[active.id]({ids,image,number:edition})}
      <p class="cp-disclaimer">Product scope, pricing and availability are subject to review.</p></div>`;
    edits = readEdits();
    applyEdits();
    syncEditor();
  }
  function select(id, index=0, writeUrl=true) {
    active = shopConcepts.find(concept => concept.id === id);
    edition = active?.editions[index] ? index : 0;
    conceptPick.value = active?.id || '';
    if (active) {
      editionPick.replaceChildren(...active.editions.map(([name],n) => new Option(name,n)));
      editionPick.value = edition;
    }
    if (writeUrl) {
      const url = new URL(location.href);
      url.searchParams.delete('concept');
      url.searchParams.delete('edition');
      if (active) {
        url.searchParams.set('concept',active.id);
        url.searchParams.set('edition',edition + 1);
      }
      url.hash = '';
      history.replaceState(null,'',url);
    }
    render();
  }
  conceptPick.addEventListener('change',() => select(conceptPick.value));
  editionPick.addEventListener('change',() => select(active.id,Number(editionPick.value)));
  editButton.addEventListener('click',() => showEditor(settings.hidden || !settings.open));
  settings.addEventListener('toggle',() => editButton.setAttribute('aria-expanded',settings.open));
  settings.addEventListener('input',event => {
    const {name,value,type} = event.target;
    if (!name || !active) return;
    edits[name] = type === 'range' ? Number(value) : value;
    try { localStorage.setItem(editKey(),JSON.stringify(edits)); } catch {}
    applyEdits();
  });
  settings.querySelector('[data-reset]').addEventListener('click',() => {
    try { localStorage.removeItem(editKey()); } catch {}
    edits = {};
    applyEdits();
    syncEditor();
  });
  root.addEventListener('click',event => {
    const product = event.target.closest('[data-product]');
    if (product) openProduct(products[Number(product.dataset.product)]);
    const chapter = event.target.closest('[data-chapter]');
    if (chapter) document.getElementById('manual-' + chapter.dataset.chapter).open = true;
    const tab = event.target.closest('[data-inspect]');
    if (tab) {
      root.querySelectorAll('[data-inspect]').forEach(button => button.setAttribute('aria-pressed',String(button === tab)));
      const i = Number(tab.dataset.inspect);
      root.querySelector('[data-selection]').innerHTML = active.id === 'desk' ? inspect(i) : feature(i);
    }
  });
  root.addEventListener('input',event => {
    if (!event.target.matches('[data-search]')) return;
    const query = event.target.value.trim().toLowerCase();
    const ids = active.editions[edition][3].filter(i => {
      const p = products[i];
      return [p.name,p.format,p.description].join(' ').toLowerCase().includes(query);
    });
    root.querySelector('[data-results]').innerHTML = rows(ids);
    root.querySelector('.cp-search-status').textContent = ids.length ? '' : 'No results. Try another search.';
  });
  const params = new URLSearchParams(location.search);
  select(params.get('concept'),Number(params.get('edition'))-1,false);
})();
