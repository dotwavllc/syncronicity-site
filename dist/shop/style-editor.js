(()=>{
  const variations=[
    {id:'v01',name:'01 · Original',layout:'classic',defaults:{}},
    {id:'v02',name:'02 · Center stage',layout:'center',defaults:{heroSize:94,heroHeight:620,contentWidth:1240,sectionSpace:110,columns:3,artHeight:240}},
    {id:'v03',name:'03 · Behind the show',layout:'image-right',defaults:{heroSize:86,heroHeight:620,heroWidth:640,contentWidth:1320,columns:3,artHeight:250}},
    {id:'v04',name:'04 · From the wings',layout:'image-left',defaults:{heroSize:78,heroHeight:640,heroWidth:650,contentWidth:1280,columns:2,artHeight:260}},
    {id:'v05',name:'05 · The index',layout:'index',defaults:{heroSize:82,heroHeight:480,contentWidth:1160,sectionSpace:80,columns:1,artHeight:170,cardTitle:26}},
    {id:'v06',name:'06 · Open studio',layout:'wide',defaults:{heroSize:118,heroHeight:670,contentWidth:1600,sectionSpace:135,columns:2,gridGap:32,artHeight:320}},
    {id:'v07',name:'07 · The setlist',layout:'list',defaults:{heroSize:74,heroHeight:460,contentWidth:1120,sectionSpace:75,columns:1,artHeight:150,cardTitle:24}},
    {id:'v08',name:'08 · Quiet confidence',layout:'center',defaults:{heroSize:72,heroHeight:560,heroLeading:1.08,contentWidth:1120,sectionSpace:140,columns:2,artHeight:300}},
    {id:'v09',name:'09 · Playback notes',layout:'rail',defaults:{heroSize:88,heroHeight:560,contentWidth:1280,sectionSpace:100,columns:3,artHeight:210,gridGap:26}},
    {id:'v10',name:'10 · Full frame',layout:'image-right',defaults:{heroSize:70,heroHeight:720,heroWidth:600,contentWidth:1400,sectionSpace:120,columns:2,artHeight:310,gridGap:25}},
    {id:'v11',name:'11 · Headliner',layout:'poster',defaults:{heroSize:142,heroHeight:670,heroLeading:.86,contentWidth:1500,sectionSpace:115,columns:4,artHeight:210,cardTitle:20}},
    {id:'v12',name:'12 · Two channels',layout:'split',defaults:{heroSize:90,heroHeight:580,contentWidth:1200,sectionSpace:105,columns:2,gridGap:36,artHeight:280}},
    {id:'v13',name:'13 · Contact sheet',layout:'compact',defaults:{heroSize:80,heroHeight:500,contentWidth:1450,sectionSpace:70,columns:4,gridGap:12,artHeight:185,cardTitle:19}},
    {id:'v14',name:'14 · Show notes',layout:'index',defaults:{heroSize:64,heroHeight:400,contentWidth:1000,sectionSpace:75,columns:1,artHeight:140,cardTitle:22}},
    {id:'v15',name:'15 · In the room',layout:'image-left',defaults:{heroSize:68,heroHeight:600,heroWidth:570,contentWidth:1120,sectionSpace:140,columns:3,artHeight:235}},
    {id:'v16',name:'16 · The collection',layout:'gallery',defaults:{heroSize:104,heroHeight:580,contentWidth:1500,sectionSpace:100,columns:3,gridGap:30,artHeight:350,cardTitle:24}},
    {id:'v17',name:'17 · Front of house',layout:'center',defaults:{heroSize:116,heroHeight:710,contentWidth:1400,sectionSpace:85,columns:4,gridGap:16,artHeight:200,cardTitle:20}},
    {id:'v18',name:'18 · The handoff',layout:'split',defaults:{heroSize:76,heroHeight:490,contentWidth:1180,sectionSpace:85,columns:2,gridGap:18,artHeight:190}},
    {id:'v19',name:'19 · The work',layout:'rail',defaults:{heroSize:112,heroHeight:650,contentWidth:1500,sectionSpace:120,columns:2,gridGap:30,artHeight:300}},
    {id:'v20',name:'20 · After soundcheck',layout:'image-right',defaults:{heroSize:78,heroHeight:570,heroWidth:560,contentWidth:1200,sectionSpace:95,columns:3,artHeight:225}}
  ];
  const variationById=id=>variations.find(v=>v.id===id)||variations[0];
  const visualRules={
    classic:'',
    center:'.hero{justify-content:center;align-items:center;text-align:center}.hero-content{margin-inline:auto}.hero .intro{margin-inline:auto}.hero .actions{justify-content:center}.section-head{align-items:center}.story .wrap{grid-template-columns:1fr 1fr}',
    'image-right':'.hero{align-items:center;overflow:hidden}.hero::before{content:"";position:absolute;right:0;top:0;width:40%;height:100%;background:url("https://pub-d5ed5e2b96684f8ca98bd9817f6707dc.r2.dev/media/bf4fa9b5d163-IMG_7523.jpg") center/cover no-repeat}.hero-content{max-width:55%}.story .story-art{order:-1}',
    'image-left':'.hero{justify-content:flex-end;align-items:center;overflow:hidden}.hero::before{content:"";position:absolute;left:0;top:0;width:40%;height:100%;background:url("https://pub-d5ed5e2b96684f8ca98bd9817f6707dc.r2.dev/media/bf4fa9b5d163-IMG_7523.jpg") center/cover no-repeat}.hero-content{width:52%;max-width:52%}.story .story-art{order:-1}',
    index:'.hero{align-items:center;border-bottom:1px solid #777}.hero h1{letter-spacing:-.02em}.section-head{align-items:start;border-bottom:1px solid #777;padding-bottom:30px}.card{display:grid;grid-template-columns:minmax(120px,180px) minmax(0,1fr);column-gap:24px;align-items:start}.card .art{grid-row:1 / span 4;margin:12px 0}.card .art-inner{inset:8%;padding:10px}.card .art-inner strong{font-size:18px;line-height:1.05}.card-meta{margin-top:12px}.card p{min-height:0}.card button{justify-self:start}.story .wrap{grid-template-columns:1fr 1fr}',
    wide:'.hero{align-items:center}.hero-content{max-width:1200px}.section-head{padding-bottom:25px;border-bottom:1px solid #777}.art-inner{inset:8%}.story .story-art{order:-1}',
    list:'.hero{align-items:center}.hero h1{letter-spacing:-.02em}.section-head{border-top:1px solid #777;padding-top:30px}.card{display:grid;grid-template-columns:minmax(120px,210px) minmax(0,1fr);column-gap:30px;align-items:start}.card .art{grid-row:1 / span 4;margin:12px 0}.card .art-inner{inset:8%;padding:10px}.card .art-inner strong{font-size:18px;line-height:1.05}.card-meta{margin-top:12px}.card p{min-height:0}.card button{justify-self:start}.story .wrap{grid-template-columns:1fr 1fr}',
    rail:'.hero{align-items:center;border-left:12px solid #eee;padding-left:7%}.section-head{display:block}.section-head p{margin-top:24px}.card .art-inner{border:0;inset:8%;padding:10px}.story .story-art{order:-1}',
    poster:'.hero{align-items:end}.hero h1{letter-spacing:-.065em}.hero .intro{border-left:2px solid #eee;padding-left:20px}.section-head{border-top:1px solid #777;padding-top:30px}.card .art-inner{border:0;inset:8%}',
    split:'.hero{align-items:center}.hero-content{border-left:2px solid #eee;padding-left:28px}.section-head{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:end}.card .art-inner{inset:10%}.story .story-art{order:-1}',
    compact:'.hero{align-items:center}.hero h1{letter-spacing:-.035em}.section-head{align-items:end;border-bottom:1px solid #777;padding-bottom:24px}.card .art-inner{inset:8%;padding:12px}.card .art-inner strong{font-size:clamp(18px,2vw,30px)}',
    gallery:'.hero{align-items:center}.section-head{display:block}.section-head p{margin-top:20px}.card .art-inner{inset:8%;border-color:#999}.story .story-art{order:-1}'
  };
  variations.push(
    {id:'v21',name:'21 · The people first',layout:'manifesto',headline:'The work begins with people.',intro:'Tools for the people preparing, programming, and running the music.',order:['story','hero','shop','faq'],defaults:{heroSize:100,heroHeight:560,contentWidth:1200,sectionSpace:100,columns:2,artHeight:250}},
    {id:'v22',name:'22 · Open the session',layout:'paper',headline:'Start with a little less setup.',intro:'Explore a considered starting point for your playback workflow.',order:['hero','shop','faq','story'],defaults:{heroSize:104,heroHeight:560,contentWidth:1320,sectionSpace:110,columns:3,artHeight:240}},
    {id:'v23',name:'23 · Catalog first',layout:'shelf',headline:'A place to start.',intro:'Templates, racks, and tools for playback and programming.',order:['shop','hero','story','faq'],defaults:{heroSize:82,heroHeight:440,contentWidth:1450,sectionSpace:75,columns:4,artHeight:190,cardTitle:20}},
    {id:'v24',name:'24 · The working page',layout:'minimal-list',headline:'For the work behind the show.',intro:'Digital tools built around the people putting the music together.',order:['shop','story','hero','faq'],defaults:{heroSize:80,heroHeight:440,contentWidth:1100,sectionSpace:75,columns:1,cardTitle:26}},
    {id:'v25',name:'25 · A closer look',layout:'feature',headline:'Start with the whole picture.',intro:'A core playback template, with tools that can fit into the workflow around it.',order:['hero','shop','story','faq'],defaults:{heroSize:90,heroHeight:540,contentWidth:1480,sectionSpace:100,columns:3}},
    {id:'v26',name:'26 · The human side',layout:'portrait-left',headline:'Music is more than tech.',intro:'It’s people, preparation, and the work behind each performance.',order:['story','hero','shop','faq'],defaults:{heroSize:78,heroHeight:650,heroWidth:600,contentWidth:1260,sectionSpace:110,columns:2,artHeight:280}},
    {id:'v27',name:'27 · One good starting point',layout:'narrow',headline:'A starting point, not a blank page.',intro:'Make room for the details that make a show your own.',order:['hero','story','shop','faq'],defaults:{heroSize:94,heroHeight:620,heroWidth:720,contentWidth:1100,sectionSpace:130,columns:2,artHeight:260}},
    {id:'v28',name:'28 · The useful details',layout:'specimen',headline:'Little details. More room for music.',intro:'Explore tools for click, cues, tuning, and the broader playback session.',order:['hero','faq','shop','story'],defaults:{heroSize:92,heroHeight:520,contentWidth:1220,sectionSpace:85,columns:3,artHeight:220}},
    {id:'v29',name:'29 · Stage right',layout:'portrait-right',headline:'Make space for the music.',intro:'Prepared tools for the work that supports the performance.',order:['hero','story','shop','faq'],defaults:{heroSize:82,heroHeight:700,heroWidth:570,contentWidth:1350,sectionSpace:115,columns:2,artHeight:290}},
    {id:'v30',name:'30 · Less but better',layout:'quiet',headline:'The details matter.',intro:'For playback teams, a little preparation can go a long way.',order:['hero','shop','faq','story'],defaults:{heroSize:62,heroHeight:420,heroWidth:650,contentWidth:1000,sectionSpace:150,columns:2,gridGap:40,artHeight:230}},
    {id:'v31',name:'31 · The field guide',layout:'ledger',headline:'Tools for the work.',intro:'Find a starting point for your next session.',order:['faq','shop','hero','story'],defaults:{heroSize:76,heroHeight:440,contentWidth:1180,sectionSpace:85,columns:1,artHeight:160,cardTitle:22}},
    {id:'v32',name:'32 · In black and white',layout:'paper',headline:'Get to the good part.',intro:'A little less time building from scratch. More time with the music.',order:['hero','shop','story','faq'],defaults:{heroSize:126,heroHeight:650,contentWidth:1500,sectionSpace:90,columns:2,artHeight:300}},
    {id:'v33',name:'33 · The foundation',layout:'feature',headline:'One session. Many possibilities.',intro:'Explore a modular starting point and the components around it.',order:['shop','hero','faq','story'],defaults:{heroSize:94,heroHeight:540,contentWidth:1400,sectionSpace:115,columns:3}},
    {id:'v34',name:'34 · The workbench',layout:'workbench',headline:'Build around your workflow.',intro:'Start with a template, or find a smaller piece that fits your setup.',order:['shop','hero','story','faq'],defaults:{heroSize:74,heroHeight:450,contentWidth:1500,sectionSpace:70,columns:2,gridGap:14,artHeight:200}},
    {id:'v35',name:'35 · Before the lights',layout:'portrait-right',headline:'Before the lights go up.',intro:'The work behind the performance has its own rhythm.',order:['story','hero','faq','shop'],defaults:{heroSize:80,heroHeight:680,heroWidth:590,contentWidth:1200,sectionSpace:135,columns:3,artHeight:215}},
    {id:'v36',name:'36 · The short list',layout:'minimal-list',headline:'Find your starting point.',intro:'A focused collection for playback and show preparation.',order:['shop','faq','hero','story'],defaults:{heroSize:70,heroHeight:400,contentWidth:1000,sectionSpace:75,columns:1,cardTitle:24}},
    {id:'v37',name:'37 · A note from backstage',layout:'note',headline:'From backstage, with care.',intro:'We make tools for the people who keep the music moving.',order:['hero','story','faq','shop'],defaults:{heroSize:88,heroHeight:560,heroWidth:760,contentWidth:1120,sectionSpace:120,columns:2,artHeight:255}},
    {id:'v38',name:'38 · Big picture',layout:'type-led',headline:'Make room for the moment.',intro:'Playback and programming tools, designed around the work behind the music.',order:['hero','shop','story','faq'],defaults:{heroSize:146,heroHeight:720,contentWidth:1600,sectionSpace:90,columns:4,artHeight:210,cardTitle:20}},
    {id:'v39',name:'39 · Catalog and context',layout:'shelf',headline:'Tools that meet you where you are.',intro:'Start with the whole session or a single component.',order:['shop','story','faq','hero'],defaults:{heroSize:76,heroHeight:470,contentWidth:1350,sectionSpace:100,columns:3,artHeight:220}},
    {id:'v40',name:'40 · People, then tools',layout:'manifesto',headline:'People first. Always.',intro:'The tools are here to support the music, the crew, and the artist.',order:['story','shop','hero','faq'],defaults:{heroSize:106,heroHeight:600,contentWidth:1250,sectionSpace:105,columns:2,artHeight:260}},
    {id:'v41',name:'41 · The session map',layout:'specimen',headline:'Put the pieces together.',intro:'A practical starting point for cues, click, tuning, and playback.',order:['hero','shop','faq','story'],defaults:{heroSize:86,heroHeight:500,contentWidth:1300,sectionSpace:85,columns:4,artHeight:200,cardTitle:19}},
    {id:'v42',name:'42 · The rehearsal',layout:'portrait-left',headline:'The work before the show.',intro:'Space to prepare, refine, and make the workflow your own.',order:['hero','story','faq','shop'],defaults:{heroSize:72,heroHeight:640,heroWidth:590,contentWidth:1150,sectionSpace:125,columns:2,artHeight:290}},
    {id:'v43',name:'43 · Product spotlight',layout:'feature',headline:'A closer look at the tools.',intro:'Explore the core template and the components around it.',order:['shop','faq','story','hero'],defaults:{heroSize:88,heroHeight:480,contentWidth:1550,sectionSpace:90,columns:3}},
    {id:'v44',name:'44 · The long view',layout:'stacked',headline:'For the work. For the music.',intro:'Explore a digital toolkit for live playback and programming.',order:['hero','faq','story','shop'],defaults:{heroSize:96,heroHeight:620,contentWidth:1080,sectionSpace:150,columns:1,artHeight:250}},
    {id:'v45',name:'45 · Dark room',layout:'type-led',headline:'Everything has its place.',intro:'Thoughtful starting points for the moving parts of a show.',order:['hero','shop','story','faq'],defaults:{heroSize:126,heroHeight:620,contentWidth:1450,sectionSpace:100,columns:2,artHeight:300}},
    {id:'v46',name:'46 · The white page',layout:'paper',headline:'More time for what matters.',intro:'Build on a starting point and make it your own.',order:['hero','faq','shop','story'],defaults:{heroSize:86,heroHeight:520,heroWidth:850,contentWidth:1150,sectionSpace:125,columns:3,artHeight:220}},
    {id:'v47',name:'47 · The quick reference',layout:'ledger',headline:'Ready to explore?',intro:'Templates, racks, and software concepts in one place.',order:['shop','faq','story','hero'],defaults:{heroSize:74,heroHeight:420,contentWidth:1150,sectionSpace:70,columns:1,artHeight:150,cardTitle:22}},
    {id:'v48',name:'48 · Built around people',layout:'note',headline:'Made for the people behind the music.',intro:'A place to explore the tools and the thinking behind them.',order:['story','hero','shop','faq'],defaults:{heroSize:84,heroHeight:590,heroWidth:800,contentWidth:1350,sectionSpace:115,columns:2,artHeight:275}},
    {id:'v49',name:'49 · First things first',layout:'workbench',headline:'Find the right piece.',intro:'Browse the suite and choose a starting point for your setup.',order:['shop','hero','faq','story'],defaults:{heroSize:80,heroHeight:460,contentWidth:1450,sectionSpace:75,columns:3,artHeight:200}},
    {id:'v50',name:'50 · When it all aligns',layout:'narrow',headline:'The music comes first.',intro:'A collection of tools for the work that helps it happen.',order:['hero','story','faq','shop'],defaults:{heroSize:98,heroHeight:660,heroWidth:760,contentWidth:1200,sectionSpace:130,columns:2,artHeight:280}}
  );
  Object.assign(visualRules,{
    manifesto:'.hero{justify-content:center;align-items:center;text-align:center;border-top:1px solid #aaa;border-bottom:1px solid #aaa}.hero-content{margin-inline:auto}.hero .intro{margin-inline:auto}.hero .actions{justify-content:center}.section-head{display:block}.section-head p{margin-top:20px}.story .story-art{order:-1}',
    paper:'.hero{align-items:center;background:#ededed;color:#181818}.hero h1{color:#181818}.hero .intro{color:#333}.hero .eyebrow{color:#444}.hero .button{background:#161616;color:#fff}.hero .textlink{color:#181818}.section-head{border-bottom:1px solid #888;padding-bottom:28px}.art-inner{inset:8%}',
    shelf:'.hero{align-items:center;border-top:1px solid #777}.section-head{display:block;border-bottom:1px solid #777;padding-bottom:24px}.section-head p{margin-top:18px}.art-inner{inset:8%;border:0}.card .art-inner strong{font-size:clamp(18px,2vw,27px)}',
    'minimal-list':'.hero{align-items:center}.section-head{display:block;border-bottom:1px solid #777;padding-bottom:28px}.section-head p{margin-top:20px}.card{display:grid;grid-template-columns:1fr auto;column-gap:24px;padding:18px 0}.card .art{display:none}.card-meta{grid-column:1 / -1}.card p{min-height:0}.card button{justify-self:end;align-self:end}.card h3{margin-top:8px}',
    feature:'.hero{align-items:center}.section-head{display:block}.section-head p{margin-top:18px}.card:first-child{grid-column:span 2}.card:first-child .art{height:360px}.card:first-child .art-inner strong{font-size:clamp(30px,4vw,50px)}',
    'portrait-left':'.hero{justify-content:flex-end;align-items:center;overflow:hidden}.hero::before{content:"";position:absolute;left:0;top:0;width:45%;height:100%;background:url("https://pub-d5ed5e2b96684f8ca98bd9817f6707dc.r2.dev/media/bf4fa9b5d163-IMG_7523.jpg") center/cover no-repeat}.hero-content{width:46%;max-width:46%}.story .story-art{order:-1}',
    'portrait-right':'.hero{align-items:center;overflow:hidden}.hero::before{content:"";position:absolute;right:0;top:0;width:46%;height:100%;background:url("https://pub-d5ed5e2b96684f8ca98bd9817f6707dc.r2.dev/media/bf4fa9b5d163-IMG_7523.jpg") center/cover no-repeat}.hero-content{width:46%;max-width:46%}.section-head{display:block}.section-head p{margin-top:20px}',
    narrow:'.hero{justify-content:center;align-items:center;text-align:center}.hero-content{margin-inline:auto;border-top:1px solid #aaa;border-bottom:1px solid #aaa;padding-block:40px}.hero .intro{margin-inline:auto}.hero .actions{justify-content:center}.section-head{display:block}.section-head p{margin-top:20px}',
    specimen:'.hero{align-items:center;border-bottom:1px solid #777}.hero-content{border-left:2px solid #eee;padding-left:28px}.section-head{align-items:end;border-bottom:1px solid #777;padding-bottom:24px}.art-inner{inset:8%;border:0}',
    quiet:'.hero{align-items:center}.hero-content{border-top:1px solid #888;padding-top:28px}.hero h1{letter-spacing:-.02em}.section-head{display:block}.section-head p{margin-top:20px}.art-inner{inset:8%}',
    ledger:'.hero{align-items:center;border-top:1px solid #777}.section-head{display:grid;grid-template-columns:1fr 1fr;gap:35px;align-items:end;border-bottom:1px solid #777;padding-bottom:25px}.card{display:grid;grid-template-columns:minmax(120px,180px) minmax(0,1fr);column-gap:25px}.card .art{grid-row:1 / span 4;margin:12px 0}.card .art-inner{inset:8%;padding:10px}.card .art-inner strong{font-size:18px;line-height:1.05}.card-meta{margin-top:12px}.card p{min-height:0}.card button{justify-self:start}',
    workbench:'.hero{align-items:center}.hero-content{border-left:3px solid #eee;padding-left:26px}.section-head{display:block}.section-head p{margin-top:18px}.card{border:1px solid #666;padding:12px}.card .art{margin:0 0 14px}.art-inner{inset:8%;border:0}',
    note:'.hero{align-items:center;justify-content:center}.hero-content{border:1px solid #888;padding:40px}.section-head{border-top:1px solid #777;padding-top:28px}.story .story-art{order:-1}',
    'type-led':'.hero{align-items:center}.hero h1{letter-spacing:-.065em}.hero .intro{border-left:2px solid #eee;padding-left:20px}.section-head{display:block;border-top:1px solid #777;padding-top:25px}.section-head p{margin-top:20px}',
    stacked:'.hero{align-items:center}.hero-content{border-bottom:1px solid #888;padding-bottom:32px}.section-head{display:block}.section-head p{margin-top:20px}.card .art{height:230px}.story .wrap{display:block}.story .story-art{margin-top:35px}'
  });

  function baseCss(v){let rules=visualRules[v.layout]||'';if(!rules)return '';rules+='.art-inner strong{overflow-wrap:anywhere;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}';let prefix='body[data-variation="'+v.id+'"] ';let css=rules.replace(/(^|})([^{}]+)\{/g,(_,end,sel)=>end+sel.split(',').map(x=>prefix+x.trim()).join(',')+'{');return css+'\n@media(max-width:1000px){'+prefix+'.hero::before{display:none}'+prefix+'.hero-content{width:100%}}\n@media(max-width:750px){'+prefix+'.hero::before{display:none}'+prefix+'.hero-content{width:100%;max-width:100%}'+prefix+'.hero{justify-content:flex-start;text-align:left}'+prefix+'.hero .actions{justify-content:flex-start}'+prefix+'.hero .intro{margin-inline:0}'+prefix+'.section-head{display:block}'+prefix+'.story .wrap{display:block}'+prefix+'.story .story-art{margin-top:30px}'+prefix+'.card{display:block}'+prefix+'.card:first-child{grid-column:auto}'+prefix+'.card:first-child .art{height:250px}'+prefix+'.card .art{margin:14px 0 18px}}';}

  const key='syncro-shop-style-v1';
  let current='v47';try{const id=localStorage.getItem('syncro-shop-active-variation');if(variations.some(v=>v.id===id))current=id}catch(e){}
  const storageKey=id=>id==='v01'?key:key+':'+id;
  const fonts=[['Avant Garde','"itc-avant-garde-gothic-pro","Syncro Avant Garde",sans-serif'],['Pragmatica','pragmatica,"Helvetica Neue",Arial,sans-serif'],['Helvetica Neue','"Helvetica Neue",Helvetica,Arial,sans-serif'],['Arial','Arial,sans-serif'],['Georgia','Georgia,serif']];
  const weights=[['Light','300'],['Demi','600'],['Bold','700']];
  const range=(id,label,selector,property,min,max,step,unit,initial,extra={})=>({id,label,selector,property,min,max,step,unit,initial,type:'range',...extra});
  const color=(id,label,selector,property,initial)=>({id,label,selector,property,initial,type:'color'});
  const select=(id,label,selector,property,options,initial)=>({id,label,selector,property,options,initial,type:'select'});
  const textField=(id,label,max)=>({id,label,max,type:'text',content:true});
  const sectionOrders=[
    ['Hero → shop → story → FAQ','hero,shop,story,faq'],
    ['Hero → story → shop → FAQ','hero,story,shop,faq'],
    ['Hero → FAQ → shop → story','hero,faq,shop,story'],
    ['Hero → FAQ → story → shop','hero,faq,story,shop'],
    ['Hero → story → FAQ → shop','hero,story,faq,shop'],
    ['Shop → hero → story → FAQ','shop,hero,story,faq'],
    ['Shop → hero → FAQ → story','shop,hero,faq,story'],
    ['Shop → story → hero → FAQ','shop,story,hero,faq'],
    ['Shop → story → FAQ → hero','shop,story,faq,hero'],
    ['Shop → FAQ → hero → story','shop,faq,hero,story'],
    ['Shop → FAQ → story → hero','shop,faq,story,hero'],
    ['Story → hero → shop → FAQ','story,hero,shop,faq'],
    ['Story → hero → FAQ → shop','story,hero,faq,shop'],
    ['Story → shop → hero → FAQ','story,shop,hero,faq'],
    ['FAQ → shop → hero → story','faq,shop,hero,story']
  ];
  const groups=[
    ['Page layout',[
      {...select('sectionOrder','Page section order','','',sectionOrders,'hero,shop,story,faq'),layout:true},
      range('contentWidth','Content width','main .wrap','max-width',800,1800,20,'px',1440),
      range('gutter','Side gutter','main .wrap','padding-inline',2,12,.5,'vw',5),
      range('sectionSpace','Section spacing','main .section','padding-block',30,180,5,'px',110),
      color('pageBg','Page background','body','background-color','#222222'),
      color('pageText','Page text','body','color','#f5f5f5')
    ]],
    ['Header + navigation',[
      range('headerHeight','Vertical padding','body > header','padding-block',5,60,1,'px',23),
      range('logoWidth','Logo width','body > header .logo','width',120,600,10,'px',440),
      range('navSize','Navigation size','body > header nav a','font-size',10,28,1,'px',14),
      range('navGap','Navigation spacing','body > header nav','gap',5,60,1,'px',25),
      select('navWeight','Navigation weight','body > header nav','font-weight',weights,'600'),
      color('headerBg','Header background','body > header','background-color','#050505'),
      color('navColor','Navigation color','body > header nav','color','#ffffff')
    ]],
    ['Hero',[
      range('heroHeight','Minimum height','main .hero','min-height',300,900,10,'px',590),
      range('heroTop','Top padding','main .hero','padding-top',20,220,5,'px',100),
      range('heroBottom','Bottom padding','main .hero','padding-bottom',20,180,5,'px',65),
      range('heroWidth','Content width','main .hero-content','max-width',360,1400,20,'px',1000),
      range('heroSize','Headline size','main .hero h1','font-size',36,160,2,'px',112,{responsive:true}),
      range('heroLeading','Headline line height','main .hero h1','line-height',.75,1.5,.01,'',.94),
      range('heroTracking','Headline letter spacing','main .hero h1','letter-spacing',-5,5,.1,'px',-3),
      range('introSize','Intro size','main .hero .intro','font-size',14,36,1,'px',24),
      range('introWidth','Intro width','main .hero .intro','max-width',240,900,10,'px',570),
      select('heroAlign','Text alignment','main .hero-content','text-align',[['Left','left'],['Center','center'],['Right','right']],'left'),
      color('heroBg','Hero background','main .hero','background-color','#202020')
    ]],
    ['Typography',[
      select('headingFont','Heading font','main h1,main h2,main h3', 'font-family',fonts,fonts[0][1]),
      select('headingWeight','Heading weight','main h1,main h2,main h3','font-weight',weights,'600'),
      range('sectionHeading','Section heading size','main .section-head h2,main .story h2,main .faq h2','font-size',28,100,2,'px',72,{responsive:true}),
      range('headingLeading','Section heading line height','main .section-head h2,main .story h2,main .faq h2','line-height',.8,1.6,.02,'',1),
      select('bodyFont','Paragraph font','main p,body > footer p','font-family',fonts,fonts[0][1]),
      select('bodyWeight','Paragraph weight','main p,body > footer p','font-weight',weights,'300'),
      range('bodySize','Paragraph size','main p','font-size',12,30,1,'px',16),
      range('bodyLeading','Paragraph line height','main p','line-height',1,2.2,.05,'',1.5),
      range('bodyTracking','Paragraph letter spacing','main p','letter-spacing',-1,3,.1,'px',0)
    ]],
    ['Product cards',[
      select('artVisibility','Product artwork','main .card .art','display',[['Show','block'],['Hide','none']],'block'),
      range('columns','Desktop columns','main #products','grid-template-columns',1,4,1,'',3,{grid:true,desktop:true}),
      range('gridGap','Card gap','main #products','gap',4,64,1,'px',18),
      range('artHeight','Artwork height','main .card .art','height',120,420,5,'px',270),
      range('artInset','Artwork frame inset','main .art-inner','inset',0,25,1,'%',15),
      range('cardTitle','Product title size','main .card h3','font-size',16,42,1,'px',23),
      range('cardCopy','Product description size','main .card p','font-size',12,24,1,'px',14),
      range('cardLabel','Category label size','main .card-meta','font-size',9,20,1,'px',11),
      color('cardBg','Artwork background','main .art.core,main .art.rack,main .art.app,main .art.bundle','background','#303030'),
      color('cardBorder','Card divider','main .card','border-top-color','#666666')
    ]],
    ['Buttons + details',[
      range('buttonSize','Button text size','main .button,main .filter,main .card button','font-size',11,24,1,'px',14),
      range('buttonY','Button vertical padding','main .button','padding-block',6,28,1,'px',16),
      range('buttonX','Button horizontal padding','main .button','padding-inline',10,45,1,'px',23),
      range('buttonRadius','Button corner radius','main .button,main .filter','border-radius',0,40,1,'px',0),
      color('buttonBg','Primary button background','main .button:not(:disabled)','background-color','#f5f5f5'),
      color('buttonText','Primary button text','main .button:not(:disabled)','color','#161616'),
      range('faqSize','FAQ question size','main .faq summary','font-size',14,30,1,'px',19),
      range('faqSpacing','FAQ row padding','main .faq details','padding-block',8,36,1,'px',20)
    ]],
    ['Story + footer',[
      range('storyGap','Story column gap','main .story .wrap','gap',0,20,1,'%',10),
      range('storyImage','Story image height','main .story-art','height',180,700,10,'px',390),
      color('storyBg','Story background','main .story','background-color','#ececec'),
      color('storyText','Story text','main .story,main .story p','color','#222222'),
      range('footerPadding','Footer padding','body > footer','padding-block',20,140,5,'px',55),
      color('footerBg','Footer background','body > footer','background-color','#000000'),
      color('footerText','Footer text','body > footer','color','#aaaaaa')
    ]]
  ];
  const scopes=[
    {id:'global',name:'Global styles',groups:[groups[0],groups[3],['Buttons',groups[5][1].filter(x=>!x.id.startsWith('faq'))]]},
    {id:'header',name:'Header + navigation',groups:[groups[1],['Typography',[
      select('headerFont','Navigation font','body > header nav','font-family',fonts,fonts[0][1])
    ]]]},
    {id:'hero',name:'Hero',groups:[groups[2],['Hero typography',[
      textField('headlineText','Headline text',160),
      textField('introText','Intro text',300),
      select('heroFont','Headline font','main .hero h1','font-family',fonts,fonts[0][1]),
      select('heroWeight','Headline weight','main .hero h1','font-weight',weights,'600'),
      select('heroBodyFont','Intro font','main .hero .intro','font-family',fonts,fonts[0][1]),
      select('heroBodyWeight','Intro weight','main .hero .intro','font-weight',weights,'300'),
      range('heroBodyLeading','Intro line height','main .hero .intro','line-height',1,2,.05,'',1.35),
      color('heroText','Headline color','main .hero h1','color','#f5f5f5'),
      color('heroBodyColor','Intro color','main .hero .intro','color','#d5d5d1')
    ]]]},
    {id:'shop',name:'Shop + products',groups:[['Shop section',[
      range('shopPadding','Section spacing','main #shop','padding-block',30,180,5,'px',110),
      range('shopWidth','Content width','main #shop','max-width',800,1800,20,'px',1440),
      color('shopBg','Section background','main #shop','background-color','#222222'),
      select('shopHeadingFont','Heading font','main #shop h2,main #shop h3','font-family',fonts,fonts[0][1]),
      select('shopHeadingWeight','Heading weight','main #shop h2,main #shop h3','font-weight',weights,'600'),
      range('shopTitleSize','Section heading size','main #shop .section-head h2','font-size',28,100,2,'px',72,{responsive:true}),
      select('shopBodyFont','Description font','main #shop p','font-family',fonts,fonts[0][1]),
      select('shopBodyWeight','Description weight','main #shop p','font-weight',weights,'300'),
      color('shopText','Heading color','main #shop h2,main #shop h3','color','#f5f5f5')
    ]],groups[4]]},
    {id:'story',name:'Story',groups:[['Story layout',groups[6][1].filter(x=>x.id.startsWith('story')).concat([
      range('storyPadding','Section spacing','main .story','padding-block',30,180,5,'px',110),
      range('storyWidth','Content width','main .story .wrap','max-width',800,1800,20,'px',1440),
      range('storyTitleSize','Heading size','main .story h2','font-size',28,100,2,'px',72,{responsive:true}),
      select('storyHeadingFont','Heading font','main .story h2','font-family',fonts,fonts[0][1]),
      select('storyHeadingWeight','Heading weight','main .story h2','font-weight',weights,'600'),
      select('storyBodyFont','Paragraph font','main .story p','font-family',fonts,fonts[0][1]),
      select('storyBodyWeight','Paragraph weight','main .story p','font-weight',weights,'300'),
      range('storyBodySize','Paragraph size','main .story p','font-size',12,32,1,'px',20)
    ])]]},
    {id:'faq',name:'FAQ',groups:[['FAQ layout',groups[5][1].filter(x=>x.id.startsWith('faq')).concat([
      range('faqPadding','Section spacing','main .faq','padding-block',30,180,5,'px',110),
      range('faqWidth','Content width','main .faq','max-width',500,1400,20,'px',850),
      range('faqTitleSize','Heading size','main .faq h2','font-size',28,90,2,'px',52,{responsive:true}),
      select('faqHeadingFont','Heading font','main .faq h2','font-family',fonts,fonts[0][1]),
      select('faqHeadingWeight','Heading weight','main .faq h2','font-weight',weights,'600'),
      select('faqBodyFont','Answer font','main .faq p','font-family',fonts,fonts[0][1]),
      select('faqBodyWeight','Answer weight','main .faq p','font-weight',weights,'300'),
      range('faqBodySize','Answer size','main .faq p','font-size',12,30,1,'px',16),
      color('faqBg','Section background','main .faq','background-color','#222222')
    ])]]},
    {id:'footer',name:'Footer',groups:[['Footer layout',groups[6][1].filter(x=>x.id.startsWith('footer')).concat([
      range('footerLogoWidth','Logo width','body > footer .footer-logo','max-width',120,500,10,'px',300),
      select('footerFont','Footer font','body > footer,body > footer p','font-family',fonts,fonts[0][1]),
      select('footerWeight','Footer weight','body > footer,body > footer p','font-weight',weights,'300'),
      range('footerSize','Footer text size','body > footer,body > footer p','font-size',10,24,1,'px',13)
    ])]]}
  ];
  const defs=scopes.flatMap(scope=>scope.groups.flatMap(g=>g[1]));
  let values={};const valid=(d,v)=>d.type==='range'?(Number.isFinite(Number(v))&&Number(v)>=d.min&&Number(v)<=d.max):d.type==='color'?(/^#[0-9a-f]{6}$/i.test(v)):d.type==='text'?(typeof v==='string'&&v.length<=d.max):d.options.some(o=>o[1]===v);
  function loadValues(id){let result={...variationById(id).defaults};try{const saved=JSON.parse(localStorage.getItem(storageKey(id))||'{}');if(saved&&typeof saved==='object'&&!Array.isArray(saved))defs.forEach(d=>{if(saved[d.id]!==undefined&&valid(d,saved[d.id]))result[d.id]=saved[d.id]})}catch(e){}return result}
  values=loadValues(current);
  const style=document.createElement('style');style.id='editor-live-style';document.head.append(style);
  const generate=()=>defs.filter(d=>values[d.id]!==undefined&&!d.layout&&!d.content).map(d=>{let v=values[d.id];v=d.grid?'repeat('+Number(v)+',minmax(0,1fr))':d.type==='range'?Number(v)+d.unit:v;let rule=d.selector+'{'+d.property+':'+v+' !important;}';if(d.responsive)rule+='@media(max-width:600px){'+d.selector+'{'+d.property+':min('+v+', 11vw) !important;}}';return d.desktop?'@media(min-width:751px){'+rule+'}':rule}).join('\n');
  function apply(){document.body.dataset.variation=current;renderVariantContent();style.textContent=baseCss(variationById(current))+'\n'+generate();try{localStorage.setItem(storageKey(current),JSON.stringify(values));localStorage.setItem('syncro-shop-active-variation',current)}catch(e){status.textContent='Browser storage unavailable; changes are temporary.'}}
  const launch=document.createElement('button');launch.className='editor-launch';launch.textContent='Edit page style';launch.setAttribute('aria-controls','style-editor');launch.setAttribute('aria-expanded','false');
  const panel=document.createElement('aside');panel.id='style-editor';panel.className='editor-panel';panel.hidden=true;panel.setAttribute('aria-label','Page style editor');
  panel.innerHTML='<div class="editor-head"><h2>Style editor</h2><button class="editor-close" type="button" aria-label="Close style editor">Close</button></div><div class="editor-scroll"><p class="editor-note">Hover over a page section and use its pencil to edit it, or choose below. Section settings override global settings. Changes are saved in this browser only; export your design to share it.</p><label class="editor-scope-label" for="editor-scope">Editing</label><select id="editor-scope" class="editor-scope"></select><div class="editor-groups"></div></div><div class="editor-actions"><button type="button" data-action="design">Export design</button><label class="editor-import-label secondary">Import design<input class="editor-import" type="file" accept=".json,application/json"></label><button type="button" class="secondary" data-action="reset-section">Reset section</button><button type="button" class="secondary" data-action="reset">Reset all</button></div><div class="editor-status" role="status" aria-live="polite"></div>';
  document.body.append(launch,panel);const status=panel.querySelector('.editor-status');const root=panel.querySelector('.editor-groups');
  const variationBar=document.createElement('div');variationBar.className='variation-bar';variationBar.innerHTML='<label for="variation-select">Design variations</label><div class="variation-switch"><button type="button" class="variation-prev" aria-label="Previous variation">‹</button><select id="variation-select" aria-label="Design variation"></select><button type="button" class="variation-next" aria-label="Next variation">›</button></div><span class="variation-help">'+variations.length+' directions · edits saved separately in this browser</span>';
  document.body.insertBefore(variationBar,document.querySelector('body > header'));const variantSelect=variationBar.querySelector('#variation-select');variations.forEach(v=>variantSelect.add(new Option(v.name,v.id)));variantSelect.value=current;
  function switchVariation(id){if(!variations.some(v=>v.id===id))return;current=id;values=loadValues(id);variantSelect.value=id;apply();makeControls();status.textContent='Editing '+variationById(id).name+'.'}
  variantSelect.addEventListener('change',()=>switchVariation(variantSelect.value));variationBar.querySelector('.variation-prev').addEventListener('click',()=>{let i=variations.findIndex(v=>v.id===current);switchVariation(variations[(i+variations.length-1)%variations.length].id)});variationBar.querySelector('.variation-next').addEventListener('click',()=>{let i=variations.findIndex(v=>v.id===current);switchVariation(variations[(i+1)%variations.length].id)});
  const scopeSelect=panel.querySelector('#editor-scope');scopes.forEach(x=>scopeSelect.add(new Option(x.name,x.id)));let selected='global';
  const targets={header:document.querySelector('body > header'),hero:document.querySelector('main .hero'),shop:document.querySelector('main #shop'),story:document.querySelector('main .story'),faq:document.querySelector('main .faq'),footer:document.querySelector('body > footer')};
  const mainNode=document.querySelector('main'),heroTitle=targets.hero.querySelector('h1'),heroIntro=targets.hero.querySelector('.intro');
  const originalTitle=heroTitle.innerHTML,originalIntro=heroIntro.textContent,defaultOrder=['hero','shop','story','faq'];let renderedVariation=null,renderedOrder=null;
  function renderVariantContent(){let v=variationById(current),signature=JSON.stringify([current,values.sectionOrder,values.headlineText,values.introText]);if(renderedVariation===signature)return;let order=values.sectionOrder?values.sectionOrder.split(','):(v.order||defaultOrder);heroTitle.innerHTML=originalTitle;heroIntro.textContent=originalIntro;if(v.headline)heroTitle.textContent=v.headline;if(v.intro)heroIntro.textContent=v.intro;if(values.headlineText!==undefined)heroTitle.textContent=values.headlineText;if(values.introText!==undefined)heroIntro.textContent=values.introText;let orderKey=order.join(',');if(renderedOrder!==orderKey){order.forEach(id=>mainNode.append(targets[id]));renderedOrder=orderKey}renderedVariation=signature}
  function markSection(){Object.values(targets).forEach(el=>{if(el)el.classList.remove('editor-selected-section')});if(!panel.hidden&&targets[selected])targets[selected].classList.add('editor-selected-section')}
  function selectScope(id){if(!scopes.some(x=>x.id===id))return;selected=id;scopeSelect.value=id;makeControls();markSection();status.textContent='Editing '+scopes.find(x=>x.id===id).name+'.'}
  scopeSelect.addEventListener('change',()=>selectScope(scopeSelect.value));
  Object.entries(targets).forEach(([id,el])=>{if(!el)return;el.classList.add('editor-section-target');let button=document.createElement('button');button.type='button';button.className='editor-section-pencil';button.setAttribute('aria-label','Edit '+scopes.find(x=>x.id===id).name+' styles');button.setAttribute('title','Edit '+scopes.find(x=>x.id===id).name+' styles');button.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l4.2-.9L19 8.3l-3.3-3.3L4.9 15.8 4 20zm10.6-13.9 3.3 3.3M14.6 6.1l1.6-1.6a2.3 2.3 0 013.3 3.3L18 9.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';el.append(button);button.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();panel.hidden=false;document.body.classList.add('editor-open');launch.setAttribute('aria-expanded','true');selectScope(id);panel.querySelector('.editor-close').focus()})});
  function makeControls(){root.replaceChildren();scopes.find(x=>x.id===selected).groups.forEach(([title,fields],idx)=>{let details=document.createElement('details');if(idx===0)details.open=true;let sum=document.createElement('summary');sum.textContent=title;details.append(sum);let box=document.createElement('div');box.className='editor-controls';fields.forEach(d=>{let row=document.createElement('label');row.className='editor-row';let name=document.createElement('span');name.textContent=d.label;row.append(name);let input;if(d.type==='select'){input=document.createElement('select');d.options.forEach(([label,value])=>input.add(new Option(label,value)))}else{input=document.createElement('input');input.type=d.type;if(d.type==='range'){input.min=d.min;input.max=d.max;input.step=d.step}if(d.type==='text')input.maxLength=d.max}let fallback=d.initial;if(d.id==='sectionOrder')fallback=(variationById(current).order||defaultOrder).join(',');if(d.id==='headlineText')fallback=heroTitle.textContent;if(d.id==='introText')fallback=heroIntro.textContent;if(d.id==='artVisibility')fallback=variationById(current).layout==='minimal-list'?'none':'block';input.value=values[d.id]??fallback;input.setAttribute('aria-label',d.label);if(d.type==='range'){let wrap=document.createElement('span');wrap.className='editor-range';let out=document.createElement('output');out.textContent=input.value+d.unit;wrap.append(input,out);row.append(wrap);input.addEventListener('input',()=>{out.textContent=input.value+d.unit;values[d.id]=Number(input.value);apply()})}else{row.append(input);input.addEventListener('input',()=>{values[d.id]=input.value;apply()})}box.append(row)});details.append(box);root.append(details)})}
  function download(filename,content,type){let url=URL.createObjectURL(new Blob([content],{type}));let a=document.createElement('a');a.href=url;a.download=filename;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)}
  launch.addEventListener('click',()=>{panel.hidden=false;document.body.classList.add('editor-open');launch.setAttribute('aria-expanded','true');markSection();panel.querySelector('.editor-close').focus()});panel.querySelector('.editor-close').addEventListener('click',()=>{panel.hidden=true;document.body.classList.remove('editor-open');markSection();launch.setAttribute('aria-expanded','false');launch.focus()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden&&panel.contains(document.activeElement)){panel.querySelector('.editor-close').click()}});
  panel.querySelector('[data-action=reset]').addEventListener('click',()=>{values={...variationById(current).defaults};apply();makeControls();status.textContent='Styles reset to this variation’s defaults.'});
  panel.querySelector('[data-action=reset-section]').addEventListener('click',()=>{let scope=scopes.find(x=>x.id===selected),defaults=variationById(current).defaults;scope.groups.flatMap(g=>g[1]).forEach(d=>{if(defaults[d.id]!==undefined)values[d.id]=defaults[d.id];else delete values[d.id]});apply();makeControls();status.textContent=scope.name+' settings reset.'});
  panel.querySelector('[data-action=design]').addEventListener('click',()=>{let v=variationById(current);download('syncronicity-shop-design-'+current+'.json',JSON.stringify({version:1,variation:{id:v.id,name:v.name,html_attribute:'data-variation="'+v.id+'"'},content:{headline:values.headlineText??v.headline??null,intro:values.introText??v.intro??null,section_order:values.sectionOrder?values.sectionOrder.split(','):(v.order||defaultOrder)},values,css:'/* Syncronicity shop design: '+v.name+'; set '+ 'data-variation="'+v.id+'" on body */\n'+baseCss(v)+'\n'+generate()},null,2),'application/json');status.textContent='Design exported with editable settings, content choices and CSS.'});
  panel.querySelector('.editor-import').addEventListener('change',async e=>{let file=e.target.files[0];if(!file)return;try{if(file.size>150000)throw Error();let data=JSON.parse(await file.text());if(data.version!==1||!data.values||typeof data.values!=='object'||Array.isArray(data.values))throw Error();let id=data.variation?.id||'v01';if(!variations.some(v=>v.id===id))throw Error();let result={};for(let [id,v] of Object.entries(data.values)){let d=defs.find(x=>x.id===id);if(!d||!valid(d,v))throw Error();result[id]=v}current=id;variantSelect.value=id;values=result;apply();makeControls();status.textContent='Design imported: '+variationById(current).name+'.'}catch(err){status.textContent='Could not import that design.'}e.target.value=''});
  makeControls();apply();
})();
