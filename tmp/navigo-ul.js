/* Navigo \u2013 Study Smart \u00b7 Simplero-bygg 2026-11-07 */
(function(){
function init(){
var host=document.getElementById("navigo");if(!host||host.shadowRoot)return;
if(!document.querySelector('link[data-navigo-fonts]')){var l=document.createElement("link");l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Source+Sans+3:wght@400;600;700&family=IBM+Plex+Mono:wght@500&display=swap";l.setAttribute("data-navigo-fonts","");document.head.appendChild(l);}
var root=host.attachShadow({mode:"open"});
root.innerHTML="<style>"+":host{all:initial;display:block}/* Navigo \u2013 samme tokens som landingssiden */\n:host{\n  --paper:#f5f6f3; --surface:#fff; --ink:#13262e; --muted:#53656b; --line:#d9dfdc;\n  --sea:#1f4e5f; --sea-soft:#e3edee; --brass:#a8741c; --brass-soft:#f4ead6; --sos:#b3402a;\n  --display:\"Libre Caslon Display\",Georgia,serif;\n  --body:\"Source Sans 3\",\"Segoe UI\",system-ui,sans-serif;\n  --mono:\"IBM Plex Mono\",ui-monospace,monospace;\n}\n@media (prefers-color-scheme:dark){:host{\n  --paper:#0e1b20; --surface:#14262d; --ink:#e7eeec; --muted:#9db0b4; --line:#2a3f46;\n  --sea:#7fb6c4; --sea-soft:#183640; --brass:#d9a74c; --brass-soft:#2e2715; --sos:#e8826c; color-scheme:dark}}\n*{box-sizing:border-box}\n[hidden]{display:none!important}\n.navigo-shell{margin:0;background:var(--paper);color:var(--ink);font:1rem/1.55 var(--body)}\nh1,h2{font-family:var(--display);font-weight:400;margin:0 0 .6rem;text-wrap:balance}\nh1{font-size:clamp(1.7rem,4vw,2.4rem)} h2{font-size:1.35rem}\n.muted{color:var(--muted)} .small{font-size:.88rem}\n.top{position:sticky;top:0;z-index:5;display:flex;justify-content:space-between;align-items:center;gap:1rem;\n  padding:.8rem max(16px,env(safe-area-inset-right,0px)) .8rem max(16px,env(safe-area-inset-left,0px));\n  background:var(--surface);border-bottom:1px solid var(--line)}\n.brand{font-family:var(--display);font-size:1.4rem;color:var(--ink);text-decoration:none}\n.brand span{font-family:var(--body);font-size:.75rem;letter-spacing:.14em;text-transform:uppercase;color:var(--brass);margin-left:.3rem}\n.topnav{display:flex;gap:.8rem;align-items:center}\n.saldo{white-space:nowrap;font-family:var(--mono);font-size:.85rem;background:var(--brass-soft);padding:.25rem .6rem;border-radius:999px}\n.demo{background:var(--brass-soft);text-align:center;font-size:.88rem;padding:.4rem 16px}\nmain{max-width:1320px;margin:0 auto;padding:1.6rem max(16px,env(safe-area-inset-right,0px)) 3rem max(16px,env(safe-area-inset-left,0px))}\n.view{display:grid;gap:1.2rem}\n.panel{background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:1.3rem}\n.narrow{max-width:460px;margin:2rem auto}\n.stack{display:grid;gap:.7rem}\n.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem}\n.grid.two{grid-template-columns:repeat(2,minmax(0,1fr))}\n.card{all:unset;cursor:pointer;background:var(--surface);border:1px solid var(--line);border-radius:18px;padding:1.2rem;display:grid;gap:.4rem;align-content:start;min-height:9.5rem;transition:border-color .15s,transform .15s}\n.card:hover{border-color:var(--sea);transform:translateY(-2px)}\n.card:focus-visible,.btn:focus-visible,.phase-btn:focus-visible{outline:3px solid var(--brass);outline-offset:3px}\n.card .ico{width:48px;height:48px;border-radius:14px;background:var(--brass-soft,#f4ead6);color:var(--brass);display:grid;place-items:center;margin-bottom:.3rem}.card .ico svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}\n.card strong{font-family:var(--display);font-weight:400;font-size:1.2rem}\n.card span.txt{color:var(--muted);font-size:.93rem}\n.phase-pick{display:flex;flex-wrap:wrap;gap:.5rem}\n.phase-btn{font:inherit;font-weight:600;border:1.5px solid var(--line);background:var(--surface);color:var(--ink);border-radius:999px;padding:.45rem 1rem;cursor:pointer}\n.phase-btn[aria-pressed=\"true\"]{border-color:var(--sea);background:var(--sea-soft)}\n.phase-btn.sos{border-color:var(--sos);color:var(--sos)}\n.btn,.btn-sm{font:inherit;font-weight:700;border:0;border-radius:999px;background:var(--sea);color:var(--paper);padding:.7rem 1.2rem;cursor:pointer;text-decoration:none;text-align:center}\n.btn-sm{padding:.35rem .9rem;font-size:.9rem;white-space:nowrap}\n.btn.ghost{background:transparent;color:var(--sea);border:1.5px solid var(--sea);justify-self:start}\ninput,select,textarea{font:inherit;color:var(--ink);background:var(--paper);border:1px solid var(--line);border-radius:10px;padding:.6rem .7rem;width:100%}\ninput[type=range]{padding:0}\nfieldset{border:0;padding:0;margin:0;display:flex;flex-wrap:wrap;gap:.4rem 1rem}\nlegend{font-weight:600;margin-bottom:.3rem;width:100%}\nfieldset label{display:flex;gap:.35rem;align-items:center;width:auto}\nfieldset input{width:auto}\n.cost{display:flex;justify-content:space-between;align-items:center;background:var(--brass-soft);border-radius:10px;padding:.6rem .9rem}\n.cost strong{font-family:var(--mono);font-variant-numeric:tabular-nums}\n.back{color:var(--sea);text-decoration:none;font-weight:600}\n.big{font-family:var(--display);font-size:2.6rem;margin:0}\n.books,.log{list-style:none;margin:0;padding:0;display:grid;gap:.45rem}\n.books li{display:flex;align-items:center;gap:.6rem;padding:.5rem .7rem;border:1px solid var(--line);border-radius:10px}\n.books li .t{flex:1;min-width:0}\n.books a{color:var(--sea);font-weight:600;font-size:.9rem}\n.lock{width:20px;height:20px;flex:none}\n.lock.open{color:var(--sea)} .lock.closed{color:var(--brass)}\n.log li{display:grid;grid-template-columns:6.5rem 1fr auto;gap:.6rem;font-size:.93rem;border-bottom:1px solid var(--line);padding-bottom:.45rem}\n.log time,.log .cr{font-family:var(--mono);font-size:.8rem;color:var(--muted)}\n.answer h2{margin-top:.4rem}\n.answer .refs a{display:inline-flex;gap:.3rem;align-items:center;margin-right:.8rem;color:var(--sea)}\n.plan-week{border-left:3px solid var(--sea);padding-left:.8rem;margin:.5rem 0}\n@media (max-width:760px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}.grid.two{grid-template-columns:1fr}}\n@media (max-width:480px){.brand span{display:none}.grid{grid-template-columns:1fr}.log li{grid-template-columns:1fr auto}.log time{grid-column:1/-1}}\n@media (prefers-reduced-motion:reduce){.card{transition:none}}\n.eyebrow-in{font-size:.75rem;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:var(--brass);margin:0 0 .4rem}\n.working{display:flex;gap:.9rem;align-items:center}.working p{margin:0}.working .w-msg{font-weight:600}.spin{flex:none;width:34px;height:34px;fill:none;stroke:var(--brass);stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;animation:navspin 2.4s linear infinite}.spin .needle{fill:var(--brass-soft)}@keyframes navspin{to{transform:rotate(360deg)}}.dots i{font-style:normal;animation:navdot 1.2s infinite}.dots i:nth-child(2){animation-delay:.2s}.dots i:nth-child(3){animation-delay:.4s}@keyframes navdot{0%,100%{opacity:.2}50%{opacity:1}}@media (prefers-reduced-motion:reduce){.spin{animation:navpulse 1.6s ease-in-out infinite}@keyframes navpulse{50%{opacity:.4}}}\n.login-hero{background:#1f4e5f;color:#fff;border-color:#1f4e5f}.login-hero h1{color:#fff}.login-hero .muted,.login-hero label{color:#dbe7e6}.login-hero .eyebrow-in{color:#e0b25a}.login-hero .btn{background:#e0b25a;color:#13262e;border-color:#e0b25a;font-size:1.05rem;padding:.85rem 1.4rem;width:100%;justify-content:center}.login-hero .btn.ghost{background:transparent;color:#fff;border-color:#fff}.login-hero input{background:#fff;color:#13262e}.steps-in{margin:1rem 0 .4rem;padding-left:1.2rem;color:#e7eeec;font-size:.95rem;display:grid;gap:.25rem}.dim{color:#b9cdd0;margin:0}.om{margin-top:1.5rem}.om h2{font-size:1.5rem}.om ul{margin:0;padding-left:1.2rem;display:grid;gap:.3rem}.om hr{border:0;border-top:1px solid var(--line);margin:.6rem 0}.kilder{margin-top:1.2rem;display:grid;gap:.7rem}.bok{display:flex;gap:.9rem;align-items:flex-start;border:1px solid var(--line);border-radius:14px;padding:.8rem;background:var(--paper)}.bok .cover{width:112px;flex:none;aspect-ratio:16/9;object-fit:cover;border-radius:8px}.bok-in{display:grid;gap:.35rem;min-width:0}.bok-in ul{margin:0;padding-left:1rem;font-size:.92rem}.bok-in a{color:var(--sea)}.tag{display:inline-flex;align-items:center;gap:.3rem;font-size:.8rem;font-weight:700}.tag svg{width:14px;height:14px}.tag.ok{color:#1f7a4c}.tag.lock{color:var(--brass)}.btn-sm-buy{justify-self:start;padding:.45rem .9rem;font-size:.85rem}.books .cover{width:72px;aspect-ratio:16/9;object-fit:cover;border-radius:6px;flex:none}.books li .t small{display:block;color:var(--muted);font-size:.78rem}@media (max-width:480px){.bok{flex-direction:column}.bok .cover{width:100%}}\n.boot{display:flex;align-items:center;gap:.6rem;justify-content:center;padding:2rem 1rem;color:var(--muted)}.boot-dot{width:12px;height:12px;border-radius:50%;background:var(--brass);animation:navdot 1.2s infinite}.quote{margin:1rem 0 0;padding:.9rem 1.1rem;border-left:3px solid var(--brass);background:var(--surface);border-radius:0 12px 12px 0}.quote blockquote{margin:0;font-family:var(--display);font-size:1.15rem;line-height:1.35}.quote figcaption{margin-top:.3rem;color:var(--muted);font-size:.88rem}.verdi{margin-top:1rem;background:var(--sea-soft);border-radius:16px;padding:1.2rem 1.3rem;display:grid;gap:.45rem}.verdi:empty{display:none}.verdi h2{font-size:1.3rem;margin:0}.verdi .sub{font-weight:700;margin:.2rem 0 0}.verdi ul{margin:0;padding-left:1.2rem;display:grid;gap:.25rem}\n\n/* kort v5 */\n#cards{grid-template-columns:repeat(2,minmax(0,1fr))}\n#cards .card{grid-template-columns:auto 1fr;gap:1rem;align-items:start;min-height:0;box-shadow:0 1px 2px rgba(16,40,48,.06),0 4px 14px rgba(16,40,48,.06)}\n#cards .card .ico{margin:0}\n#cards .card .body{display:grid;gap:.45rem}\n#cards .card strong{font-family:inherit;font-weight:700;font-size:1.08rem;line-height:1.3;color:var(--ink,inherit)}\n#cards .card span.txt{line-height:1.5}\n#cards .card .go{justify-self:start;display:inline-flex;align-items:center;gap:.4rem;margin-top:.35rem;padding:.45rem .9rem;border-radius:999px;background:var(--sea);color:var(--paper);font-weight:600;font-size:.9rem}\n#cards .card .go svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:transform .15s}\n#cards .card:hover,#cards .card:active{border-color:var(--sea);box-shadow:0 2px 4px rgba(16,40,48,.08),0 10px 24px rgba(16,40,48,.10)}\n#cards .card:hover .go svg{transform:translateX(3px)}\n#cards .card:active{transform:scale(.99)}\n@media (max-width:760px){#cards{grid-template-columns:1fr}}\n\n/* laster */\n.laster{color:var(--muted);font-style:italic;animation:navpuls 1.4s ease-in-out infinite}\n.saldo.laster{font-style:normal}\n@keyframes navpuls{0%,100%{opacity:1}50%{opacity:.45}}\n@media (prefers-reduced-motion:reduce){.laster{animation:none}}\n.login-sec{margin-bottom:1.5rem}\n/* kort 3\u20136 */\nh2.sub{margin:1.6rem 0 .3rem}\n.row-btns{display:flex;flex-wrap:wrap;gap:.6rem}\n.launch{border-left:4px solid var(--sea)}\n.tabs{display:flex;flex-wrap:wrap;gap:.4rem;margin:.4rem 0 1rem}\n.tab{all:unset;cursor:pointer;padding:.5rem .95rem;border-radius:999px;border:1px solid var(--line);background:var(--surface);font-weight:600;font-size:.92rem}\n.tab[aria-selected=\"true\"]{background:var(--sea);border-color:var(--sea);color:var(--paper)}\n.tab:focus-visible{outline:3px solid var(--brass);outline-offset:2px}\n.notes{list-style:none;padding:0;margin:0;display:grid;gap:.5rem}\n.notes li{display:flex;justify-content:space-between;align-items:center;gap:.8rem;background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:.7rem .9rem;cursor:pointer}\n.notes li small,.board li small{display:block;color:var(--muted);font-size:.8rem}\n.notes .del{all:unset;cursor:pointer;color:var(--sos);font-size:.85rem}\n.row-form{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center}\n.row-form input{flex:1 1 220px}\n.board{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.8rem;margin-top:1rem}\n.board .col{background:var(--sea-soft);border-radius:14px;padding:.8rem}\n.board h3{margin:0 0 .6rem;font-size:1rem}\n.board ul{list-style:none;padding:0;margin:0;display:grid;gap:.5rem}\n.board li{background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:.6rem .7rem;display:grid;gap:.4rem}\n.board .mv{display:flex;flex-wrap:wrap;gap:.3rem}\n.board .mv button{all:unset;cursor:pointer;font-size:.8rem;padding:.2rem .55rem;border-radius:999px;border:1px solid var(--line)}\n.board .mv button:hover{border-color:var(--sea)}\n.checks{display:grid;gap:.35rem}\n.books.shop{margin:1rem 0}\n@media (max-width:760px){.board{grid-template-columns:1fr}}\n.checks label{display:flex;gap:.55rem;align-items:center;font-weight:400}\n.checks input[type=checkbox]{width:auto;min-height:0;margin:0;flex:none}\n.books.shop a.btn-sm{color:var(--paper);text-decoration:none;padding:.4rem .95rem}\n.row-form select{flex:0 1 220px;width:auto}\n.row-form .btn{flex:none}\n/* intro p\u00e5 hver tjeneste */\n.verdi.intro{margin:0 0 1.4rem}\n.intro-grid{display:grid;grid-template-columns:1.1fr 1fr;gap:1.6rem}\n.intro-grid h2{margin:.2rem 0 .6rem}\n.intro-grid ul.hjelp{margin:.2rem 0 .6rem;padding-left:1.1rem}\nol.steg{list-style:none;counter-reset:steg;padding:0;margin:.4rem 0 0;display:grid;gap:.6rem}\nol.steg li{counter-increment:steg;display:grid;grid-template-columns:2rem 1fr;gap:.6rem;align-items:start}\nol.steg li::before{content:counter(steg);width:2rem;height:2rem;border-radius:50%;background:var(--sea);color:var(--paper);display:grid;place-items:center;font-weight:700;font-size:.95rem}\n@media (max-width:760px){.intro-grid{grid-template-columns:1fr;gap:1rem}}\n\n/* bredere skjerm */\n@media (min-width:1180px){#cards{grid-template-columns:repeat(3,minmax(0,1fr))}main{padding-left:clamp(16px,3vw,40px);padding-right:clamp(16px,3vw,40px)}}\n.view>form.panel,.view>.tool-form,.view>.answer{max-width:none}\n\n/* tilpasning til alle skjermer */\nimg,svg{max-width:100%}\ninput,select,textarea,button{font:inherit;max-width:100%}\ninput,select,textarea{color:var(--ink);background:var(--paper);border-color:var(--line)}\n.panel,.card,.answer{overflow-wrap:anywhere}\n@media (max-width:420px){.top{gap:.5rem}.brand{font-size:1.2rem}.saldo{font-size:.75rem;padding:.2rem .5rem}.btn-sm{padding:.45rem .8rem;font-size:.85rem}\n  #cards .card{grid-template-columns:1fr;gap:.6rem}.phase-pick{flex-wrap:wrap}.tabs{gap:.35rem}.tab{padding:.45rem .8rem;font-size:.88rem}}\n@media (min-width:761px) and (max-width:1179px){#cards{grid-template-columns:repeat(2,minmax(0,1fr))}}\n@media (hover:none){.card:hover{transform:none}}\n@media (prefers-color-scheme:dark){.quote,.hello figure{background:var(--surface)}.login-hero input{background:#fff;color:#13262e}}\n\n/* kort 6: semestervalg og st\u00f8rre omslag */\n.sem-pick{display:grid;gap:.5rem;margin:1rem 0}\n.sem-pick select{max-width:420px}\n.books.shop{list-style:none;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:1rem}\n.books.shop li{display:grid;grid-template-rows:auto 1fr auto;gap:.6rem;align-items:start;padding:.8rem;border:1px solid var(--line);border-radius:16px;background:var(--surface)}\n.books.shop .cover{width:100%;aspect-ratio:16/9;border-radius:10px;object-fit:cover}\n.books.shop .t{font-weight:600;font-size:1.02rem}\n.books.shop a.btn-sm{justify-self:start}\n#ms-books .cover{width:120px}\n@media (max-width:420px){.books.shop{grid-template-columns:1fr}#ms-books .cover{width:96px}}\n\n/* v9: faneinfo, fase, filer, ressursbank, kort 6 */\n.faneinfo,.faseinfo{background:var(--sea-soft);border-radius:16px;padding:1.1rem 1.3rem;margin:0 0 1rem}\n.faneinfo h3,.faseinfo h3{margin:.2rem 0 .5rem;font-family:var(--display);font-weight:400;font-size:1.25rem}\n.fi-grid{display:grid;grid-template-columns:1.1fr 1fr;gap:1.4rem}\n.faseinfo ul{margin:.3rem 0 0;padding-left:1.1rem;display:grid;gap:.3rem}\n.filknapp{justify-self:start;cursor:pointer}\n.notes .mv{display:flex;gap:.4rem}.notes .mv button{all:unset;cursor:pointer;font-size:.85rem;color:var(--sea)}.notes .mv .del{color:var(--sos)}\n.rb-filter{display:flex;flex-wrap:wrap;gap:.4rem}\n.rb-filter button{all:unset;cursor:pointer;padding:.35rem .8rem;border-radius:999px;border:1px solid var(--line);font-size:.85rem;font-weight:600}\n.rb-filter button.p\u00e5{background:var(--sea);color:var(--paper);border-color:var(--sea)}\n.rb-liste{display:grid;gap:.5rem}\ndetails.rb{border:1px solid var(--line);border-radius:12px;background:var(--paper);padding:.2rem .9rem}\ndetails.rb summary{cursor:pointer;display:grid;grid-template-columns:auto 1fr auto;gap:.7rem;align-items:center;padding:.6rem 0;list-style:none}\ndetails.rb summary::-webkit-details-marker{display:none}\n.rb-type{font-size:.72rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--brass);background:var(--brass-soft);padding:.15rem .5rem;border-radius:999px}\ndetails.rb time{color:var(--muted);font-size:.82rem}\n.rb-innhold{border-top:1px solid var(--line);padding:.8rem 0 1rem}\n.sem-rad{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.8rem}\n.sem-rad label{display:grid;gap:.3rem;font-weight:600;font-size:.92rem}\n.books.shop em.by,.books em.by{display:block;font-style:normal;color:var(--muted);font-size:.86rem;font-weight:400}\n.books.shop .cover.tom{display:grid;place-items:center;background:var(--brass-soft);color:var(--brass);font-weight:700;aspect-ratio:16/9;border-radius:10px}\n.books.shop li.tomt{grid-column:1/-1;display:block;padding:1rem}\n.selgere{display:flex;flex-wrap:wrap;gap:1rem;align-items:center;margin:.4rem 0 .6rem}\n.selgere figure{display:flex;align-items:center;gap:.7rem;margin:0}\n.selgere img{width:64px;height:64px;border-radius:50%;object-fit:cover;border:2px solid var(--brass-soft)}\n.selgere figcaption{display:grid}.selgere figcaption span{color:var(--muted);font-size:.85rem}\n.velg-boker{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:.6rem}\n.valgkort{display:grid;grid-template-columns:auto 72px 1fr;gap:.7rem;align-items:center;border:1.5px solid var(--line);border-radius:12px;padding:.6rem .7rem;cursor:pointer;background:var(--paper)}\n.valgkort.p\u00e5{border-color:var(--sea);background:var(--sea-soft)}\n.valgkort input{width:1.2rem;height:1.2rem;margin:0}\n.valgkort img{width:72px;aspect-ratio:16/9;object-fit:cover;border-radius:6px}\n.valgkort .ikon{width:72px;aspect-ratio:16/9;display:grid;place-items:center;border-radius:6px;background:var(--brass-soft);color:var(--brass);font-size:1.4rem;font-weight:700}\n.valgkort small{display:block;color:var(--muted);font-size:.8rem}\n.tellr{font-weight:600;color:var(--muted)}.tellr.ok{color:#1f7a4c}\n#offer-form button[disabled]{opacity:.5;cursor:not-allowed}\n@media (max-width:760px){.fi-grid,.sem-rad{grid-template-columns:1fr}}\n\n/* v10: Lovdata-visning (lovtekst med markeringer og merknadsfelt). Holdes lys ogs\u00e5 i m\u00f8rk modus, som et skjermbilde. */\n.lim summary{cursor:pointer;font-weight:600;color:var(--sea)}\n.lim textarea{margin-top:.5rem;width:100%}\n.ansvar{border-left:4px solid var(--sos);background:var(--brass-soft);color:var(--ink);border-radius:8px;padding:.6rem .8rem;margin:.8rem 0 0}\n.ld-cap{font-size:.78rem;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:var(--brass);margin:1.2rem 0 .5rem}\n.ld-legend{list-style:none;display:flex;flex-wrap:wrap;gap:.45rem 1.1rem;padding:0;margin:0 0 .9rem;font-size:.9rem}\n.ld-legend li{display:flex;align-items:center;gap:.45rem}\n.ld-legend li span{font-family:Arial,Helvetica,sans-serif;color:#222;background:#fff;padding:0 .25rem;border-radius:2px}\n.ld-wrap{display:grid;gap:12px;margin:0 0 14px;color:#222}\n@media (min-width:820px){.ld-wrap.med-panel{grid-template-columns:minmax(0,1fr) 300px}}\n.ld-doc{background:#fff;border:1px solid #d0d0d0;border-radius:4px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#222;overflow:hidden}\n.ld-bar{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 14px;color:#8d8d8d}\n.ld-bar svg{width:15px;height:15px;fill:currentColor;margin-right:8px;vertical-align:middle}\n.ld-sti{font-size:12px;color:#555;text-align:right}\n.ld-par{background:#f4f4f4;margin:0 10px 10px;border:1px solid #c9c9c9;padding:12px 18px}\n.ld-par h4{font:700 15px/1.4 Arial,Helvetica,sans-serif;margin:0 0 .7rem;color:#222}\n.ld-par h4 em{font-style:italic}\n.ld-par p{margin:0 0 .6rem;text-indent:2.2em}\n.ld-par p.ld-fot{font-size:12px;color:#666;text-indent:0;margin:.4rem 0 0}\n.ld-adv{color:#b3402a;font-weight:700}\n.ld-svart{border-bottom:2px solid #111;padding-bottom:1px}\n.ld-bla{border-bottom:2px solid #1e9bd7;padding-bottom:1px}\n.ld-lilla{border-bottom:2px solid #8e44ad;padding-bottom:1px}\n.ld-gronn{border-bottom:2px solid #22b14c;padding-bottom:1px}\n.ld-rod{border-bottom:2px solid #e3191c;padding-bottom:1px}\n.ld-gul{background:#fff35c;outline:1px solid #c8b900}\n.ld-gronnbak{background:#86e08f}\n.ld-lenke{color:#0b57d0;border-bottom:1px dotted #0b57d0}\n.ld-chev{display:inline-grid;place-items:center;width:15px;height:19px;margin:0 2px 0 1px;padding:0;border:1px solid #a5a5a5;border-radius:2px;background:#fff;color:#666;font:700 14px/1 Arial,sans-serif;cursor:pointer;vertical-align:-3px;text-indent:0}\n.ld-chev svg{width:8px;height:13px;fill:none;stroke:currentColor;stroke-width:1.8}\n.ld-doc{align-self:start}\n.ld-chev:hover,.ld-chev:focus-visible{border-color:#1b6ec2;color:#1b6ec2;outline:none}\n.ld-panel{background:#f0f0f0;border:1px solid #d0d0d0;border-radius:4px;padding:12px 14px;font-family:Arial,Helvetica,sans-serif;color:#222;align-self:start}\n.ld-ptop{display:flex;gap:14px;align-items:baseline}\n.ld-ptop strong{color:#1b6ec2;font-size:17px}\n.ld-ptop span{color:#333;font-size:16px;font-weight:700}\n.ld-pfane{display:flex;gap:16px;font-size:13px;font-weight:700;color:#444;border-bottom:2px solid #cfcfcf;margin:8px 0 0;padding-bottom:6px}\n.ld-pfane .p\u00e5{color:#1b6ec2;box-shadow:0 8px 0 -6px #1b6ec2}\n.ld-panel h5{font:700 18px/1.3 Arial,Helvetica,sans-serif;margin:12px 0 8px;padding-bottom:6px;border-bottom:1px solid #d5d5d5}\n.ld-merk{background:#fff;border-radius:4px;padding:10px 12px;margin-bottom:8px;transition:box-shadow .2s}\n.ld-merk.aktiv{box-shadow:0 0 0 2px #1b6ec2}\n.ld-mhead{display:flex;align-items:center;gap:10px}\n.ld-sq{width:20px;height:20px;background:#fff35c;border:1px solid #c8b900;flex:none}\n.ld-mhead strong{flex:1;font-weight:400;font-size:15px}\n.ld-merk ul{list-style:none;margin:6px 0 0 30px;padding:0;display:grid;gap:3px}\n.ld-merk li{display:flex;align-items:center;gap:6px}\n.ld-ref{border-bottom:1px solid #666;font-size:14px}\n.ld-hvorfor{font-size:12.5px;color:#555;margin:6px 0 0 30px;font-style:italic}\n.kopi{display:inline-flex;align-items:center;gap:5px;border:1px solid #b9c4c7;background:#fff;border-radius:6px;padding:4px 9px;font:600 12.5px/1.2 Arial,Helvetica,sans-serif;color:#1f4e5f;cursor:pointer}\n.kopi svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\n.kopi:hover{border-color:#1f4e5f}\n.kopi.mini{padding:2px 4px;border-color:transparent;background:transparent}\n.kopi.mini:hover{border-color:#b9c4c7;background:#fff}\n.kopi.ok{background:#e2f4e6;border-color:#2e8b57;color:#1e6b3a}\n.kopi.feil{background:#fbe5e1;border-color:#b3402a;color:#8a2a1a}\n.kopi.alle{width:100%;justify-content:center;padding:9px;margin-top:4px}\n\n/* v10.1: kort 3 \u2013 valg mellom hele besvarelsen og en del, og opphavsrett */\n.velg{margin:0 0 1.2rem}\n.velg-grid{display:grid;gap:14px}\n@media (min-width:760px){.velg-grid{grid-template-columns:1fr 1fr}}\n.velg-kort{background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:14px 16px 16px;display:flex;flex-direction:column;gap:.45rem}\n.velg-kort.hel{border-top:4px solid var(--sea)}\n.velg-kort.del{border-top:4px solid var(--brass)}\n.velg-kort h3{margin:0;font-family:var(--display);font-weight:400;font-size:1.35rem}\n.velg-kort p{margin:0}\n.velg-bilde{margin:0 0 .4rem;border-radius:10px;overflow:hidden;aspect-ratio:16/9;background:#f4f1ea}\n.velg-bilde img,.velg-bilde svg{width:100%;height:100%;object-fit:cover;object-position:top left;display:block}\n.velg-tag{font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:var(--brass)}\n.velg-kort.hel .velg-tag{color:var(--sea)}\n.velg-kort dl{margin:.3rem 0 0;display:grid;grid-template-columns:auto 1fr;gap:.35rem .8rem;font-size:.95rem}\n.velg-kort dt{font-weight:700;white-space:nowrap}\n.velg-kort dd{margin:0;color:var(--muted)}\n@media (max-width:420px){.velg-kort dl{grid-template-columns:1fr}.velg-kort dd{margin-bottom:.3rem}}\n.opphav{margin:0 0 1.2rem}\n.opphav-top{display:flex;align-items:center;gap:12px;margin-bottom:.6rem}\n.opphav-top h3{margin:0;font-family:var(--display);font-weight:400;font-size:1.25rem}\n.opphav-ikon{width:44px;height:44px;flex:none;fill:none;stroke:var(--sea);stroke-width:3;stroke-linecap:round}\n.opphav-grid{display:grid;gap:10px}\n@media (min-width:760px){.opphav-grid{grid-template-columns:1fr 1fr}}\n.opphav ul{list-style:none;margin:0;padding:12px 14px;border-radius:12px;display:grid;gap:.45rem}\n.opphav li{position:relative;padding-left:1.7rem}\n.opphav li::before{position:absolute;left:0;top:0;width:1.25rem;height:1.25rem;border-radius:50%;display:grid;place-items:center;font-weight:700;font-size:.8rem;color:#fff}\n.opphav .ja{background:#e6f3ea}\n.opphav .ja li::before{content:\"\u2713\";background:#2e8b57}\n.opphav .nei{background:#fbe9e5}\n.opphav .nei li::before{content:\"\u2715\";background:#b3402a}\n.opphav .ja,.opphav .nei{color:#13262e}\n.bekreft{display:flex;gap:.5rem;align-items:flex-start;font-weight:400}\n.bekreft input{margin-top:.25rem}\n.ld-par p.ld-endret{font-size:12px;color:#444;text-indent:0;margin:.5rem 0 0;display:flex;gap:10px}\n.ld-par p.ld-endret span{color:#888}\n.ld-par p.ld-fot a{color:#c8102e}\n\n/* v10.4: s\u00f8k med forslag i feltet \u00abBestemmelse\u00bb */\n.ac{position:relative}\n.ac input{width:100%}\n.ac-liste{position:absolute;z-index:30;left:0;right:0;top:calc(100% + 4px);margin:0;padding:4px;list-style:none;background:var(--surface);border:1px solid var(--line);border-radius:12px;box-shadow:0 10px 28px rgba(19,38,46,.18);max-height:320px;overflow-y:auto}\n.ac-liste li{padding:9px 12px;border-radius:8px;cursor:pointer;display:grid;gap:1px}\n.ac-liste li strong{font-weight:600;font-size:.97rem}\n.ac-liste li span{font-size:.85rem;color:var(--muted)}\n.ac-liste li.lov strong{color:var(--sea)}\n.ac-liste li:hover,.ac-liste li.p\u00e5{background:var(--sea-soft)}\n\n/* v10.5: Jusshack Kildebase */\n.kb-kilder{margin-top:1.2rem;border:1px solid var(--line);border-left:4px solid #a8823c;border-radius:14px;padding:.9rem 1rem;background:var(--paper)}\n.kb-kilder p{margin:0 0 .4rem}\n.kb-kilder ul{list-style:none;margin:.4rem 0 0;padding:0;display:flex;flex-wrap:wrap;gap:.5rem}\n.kb-kilder a{display:inline-flex;align-items:center;gap:.45rem;text-decoration:none;color:var(--ink);background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:.35rem .8rem .35rem .4rem;font-size:.92rem}\n.kb-kilder a:hover{border-color:#a8823c}\n.kb-ikon{width:24px;height:24px;border-radius:50%;display:grid;place-items:center;font-weight:700;font-size:.85rem;color:#fff;background:#1d3a5f;flex:none}\n.kb-ikon.dom{background:#a8823c}\n.kb-ikon svg{width:14px;height:14px;fill:none;stroke:#fff;stroke-width:2}\n.ld-merk a.ld-ref.kb{color:#1b6ec2;text-decoration:none;border-bottom:1px solid #1b6ec2;font-size:14px}\n.ld-par p.ld-fot a.ld-kb{color:#a8823c;font-weight:700;margin-left:.3rem}\n.kb-merke{font-style:normal;font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#a8823c;border:1px solid #a8823c;border-radius:999px;padding:0 .4rem;margin-left:.45rem;vertical-align:2px}\n\n/* v10.6: vedlegg i verkt\u00f8yene */\n.vedlegg{display:grid;gap:.45rem}\n.vedlegg-knapp{display:flex;align-items:center;justify-content:center;gap:.55rem;border:2px dashed var(--line);border-radius:12px;padding:.85rem 1rem;cursor:pointer;color:var(--sea);font-weight:600;background:var(--paper);text-align:center}\n.vedlegg-knapp:hover,.vedlegg-knapp:focus-within{border-color:var(--sea)}\n.vedlegg-knapp input{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}\n.vedlegg-knapp svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;flex:none}\n.vedlegg-liste{list-style:none;margin:0;padding:0;display:grid;gap:.35rem}\n.vedlegg-liste li{display:flex;align-items:center;gap:.6rem;background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:.45rem .6rem}\n.vd-ikon{font:700 .7rem/1 var(--mono);color:#fff;background:var(--sea);border-radius:5px;padding:.35rem .4rem;flex:none}\n.vd-navn{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.vedlegg-liste small{color:var(--muted);flex:none}\n.vedlegg-liste button{all:unset;cursor:pointer;font-size:1.3rem;line-height:1;padding:0 .3rem;color:var(--muted)}\n.vedlegg-liste li.vd-feil{background:#fbe9e5;border-color:#e8b9ae;color:#8a2a1a;font-size:.9rem}\n\n/* v10.7: strukturer notater */\n.struktur-boks{border-top:1px solid var(--line);padding-top:.8rem;margin-top:.3rem;display:grid;gap:.4rem}\n.struktur-boks p{margin:0}\n.struktur-valg{margin:1rem 0 0;padding-top:.9rem;border-top:1px solid var(--line);align-items:center}\n.answer h4{margin:.9rem 0 .3rem;font-size:1rem}\n/* v10.8 Tankekart: eget redigeringsverkt\u00f8y */\n.mm-modus{display:flex;gap:.4rem;flex-wrap:wrap;margin:.2rem 0 .9rem}\n.mm-modus button{font:inherit;font-weight:600;border:1px solid var(--line);background:var(--surface);color:var(--ink);border-radius:999px;padding:.5rem 1rem;cursor:pointer}\n.mm-modus button small{font-weight:400;color:var(--muted);margin-left:.25rem}\n.mm-modus button[aria-pressed=true]{background:var(--sea);border-color:var(--sea);color:var(--surface)}\n.mm-modus button[aria-pressed=true] small{color:inherit;opacity:.85}\n.mm-tools{display:flex;gap:.35rem;flex-wrap:wrap;align-items:center;margin-bottom:.5rem}\n.mm-tools button,.mm-tools select{font:inherit;font-size:.9rem;border:1px solid var(--line);background:var(--surface);color:var(--ink);border-radius:10px;padding:.4rem .65rem;cursor:pointer;min-height:38px}\n.mm-tools button:disabled{opacity:.45;cursor:default}\n.mm-tools .mm-hoved{background:var(--sea);border-color:var(--sea);color:var(--surface);font-weight:600}\n.mm-fyll{flex:1}\n.mm-farger{display:flex;gap:.35rem;flex-wrap:wrap;margin:0 0 .5rem}\n.mm-farger button{width:30px;height:30px;border-radius:50%;border:2px solid var(--surface);box-shadow:0 0 0 1px var(--line);cursor:pointer}\n.mm-farger .mm-std{width:auto;border-radius:999px;padding:0 .7rem;background:var(--surface);color:var(--ink);font:inherit;font-size:.85rem}\n.mm-flate{position:relative;height:70vh;min-height:360px;background:var(--surface);border:1px solid var(--line);border-radius:14px;overflow:hidden;touch-action:none}\n.mm-flate svg{width:100%;height:100%;display:block;cursor:grab;user-select:none;-webkit-user-select:none}\n.mm-node{cursor:pointer}\n.mm-node rect{fill:var(--surface)}\n.mm-node text{font-size:14px;fill:var(--ink);pointer-events:none;font-family:var(--body)}\n.mm-rot rect{fill:var(--sea)}\n.mm-rot text{fill:var(--surface)}\n.mm-node.sel>rect{stroke:var(--brass)!important}\n.mm-toggle circle{fill:var(--surface)}\n.mm-toggle text{fill:var(--ink);font-size:11px}\n.mm-add rect{fill:#2e8b57}\n.mm-add text{fill:#fff!important;font-size:15px!important}\n.mm-add{opacity:.35;transition:opacity .15s}\n.mm-node:hover .mm-add,.mm-node.sel .mm-add{opacity:1}\n.mm-zoom{position:absolute;right:10px;top:10px;display:flex;flex-direction:column;gap:6px}\n.mm-zoom button{width:40px;height:40px;border-radius:10px;border:1px solid var(--line);background:var(--surface);color:var(--ink);font-size:1.15rem;line-height:1;cursor:pointer}\n.mm-hjelp{position:absolute;left:10px;right:60px;bottom:8px;font-size:.75rem;color:var(--muted);background:color-mix(in srgb,var(--surface) 88%,transparent);padding:4px 8px;border-radius:6px}\n.mm-tom{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:2rem;color:var(--muted)}\n.mm-tom[hidden]{display:none}\n@media (max-width:600px){.mm-flate{height:62vh}.mm-hjelp{display:none}}\n/* v10.9 kort innledning p\u00e5 kort med faner */\n.intro-kort h2{margin:0 0 .35rem}\n.intro-kort p{margin:0}\n/* v11 Studietavle: lister og kort (fra StudySmart-tavlen) */\n.tv-tools{display:flex;gap:.35rem;flex-wrap:wrap;align-items:center;margin-bottom:.4rem}\n.tv-tools button,.tv-tools select,.tv-tools input{font:inherit;font-size:.9rem;border:1px solid var(--line);background:var(--surface);color:var(--ink);border-radius:10px;padding:.4rem .65rem;min-height:38px}\n.tv-tools button{cursor:pointer}\n.tv-tools button:disabled{opacity:.45;cursor:default}\n.tv-tools #tv-ny{background:var(--sea);border-color:var(--sea);color:var(--surface);font-weight:600}\n.tv-tools input[type=search]{flex:1 1 140px;min-width:0;max-width:260px}\n.tv-board{display:flex;gap:.75rem;overflow-x:auto;padding:.2rem .1rem 1rem;align-items:flex-start;scroll-snap-type:x proximity;-webkit-overflow-scrolling:touch}\n.tv-liste{flex:0 0 272px;max-width:84vw;background:var(--sea-soft);border-radius:14px;padding:.55rem;border-top:5px solid transparent;display:flex;flex-direction:column;max-height:75vh;scroll-snap-align:start}\n.tv-lhode{display:flex;align-items:center;gap:.35rem;margin-bottom:.4rem}\n.tv-lhode input{flex:1;min-width:0;font:inherit;font-weight:700;background:transparent;border:1px solid transparent;border-radius:8px;padding:.3rem .4rem;color:var(--ink)}\n.tv-lhode input:focus{border-color:var(--line);background:var(--surface)}\n.tv-antall{font-size:.78rem;color:var(--muted)}\n.tv-lmeny{all:unset;cursor:pointer;padding:.15rem .5rem;border-radius:8px;font-weight:700;color:var(--muted)}\n.tv-lmenyvalg{display:flex;flex-wrap:wrap;gap:.3rem;margin:0 0 .5rem;align-items:center}\n.tv-lmenyvalg>button{font:inherit;font-size:.8rem;border:1px solid var(--line);background:var(--surface);color:var(--ink);border-radius:999px;padding:.25rem .6rem;cursor:pointer}\n.tv-lmenyvalg>button:disabled{opacity:.4}\n.tv-lfarger{display:flex;gap:.25rem;flex-wrap:wrap}\n.tv-lfarger button,.tv-farger button{width:24px;height:24px;border-radius:50%;border:2px solid var(--surface);box-shadow:0 0 0 1px var(--line);cursor:pointer;padding:0}\n.tv-farger{display:flex;gap:.3rem;flex-wrap:wrap}\n.tv-farger button.valgt{box-shadow:0 0 0 2px var(--ink)}\n.tv-fare{color:var(--sos)!important}\n.tv-kortene{display:flex;flex-direction:column;gap:.5rem;overflow-y:auto;min-height:36px;padding:2px}\n.tv-tom{margin:.2rem;color:var(--muted);font-size:.85rem;text-align:center;padding:.6rem;border:1px dashed var(--line);border-radius:10px}\n.tv-kort{background:var(--surface);border:1px solid var(--line);border-top:5px solid var(--line);border-radius:10px;padding:.55rem .65rem;cursor:pointer;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}\n.tv-kort:hover{border-color:var(--sea)}\n.tv-merke{display:inline-block;font-size:.7rem;font-weight:700;border-radius:999px;padding:.1rem .5rem}\n.tv-stjerner{float:right;color:var(--brass);font-size:.85rem}\n.tv-tittel{margin:.3rem 0 .2rem;font-weight:600;line-height:1.3}\n.tv-meta{display:flex;flex-wrap:wrap;gap:.25rem .6rem;font-size:.78rem;color:var(--muted)}\n.tv-forsent{color:var(--sos);font-weight:600}\n.tv-tags{display:flex;flex-wrap:wrap;gap:.25rem;margin-top:.35rem}\n.tv-tags span{font-size:.72rem;background:var(--paper);border:1px solid var(--line);border-radius:999px;padding:.05rem .45rem}\n.tv-nytt{all:unset;cursor:pointer;margin-top:.45rem;padding:.4rem .5rem;border-radius:8px;color:var(--muted);font-size:.9rem}\n.tv-nytt:hover{background:var(--surface);color:var(--ink)}\n.tv-nyliste{flex:0 0 220px}\n.tv-nyliste button{width:100%;font:inherit;font-weight:600;border:1px dashed var(--line);background:transparent;color:var(--ink);border-radius:14px;padding:.8rem;cursor:pointer}\n.tv-drar{opacity:.35}\n.tv-ghost{position:fixed;left:0;top:0;z-index:9999;pointer-events:none;box-shadow:0 10px 24px rgba(0,0,0,.25);transform-origin:0 0;rotate:2deg}\n.tv-dialog{border:1px solid var(--line);border-radius:16px;padding:1rem;max-width:min(560px,94vw);width:100%;background:var(--surface);color:var(--ink)}\n.tv-dialog::backdrop{background:rgba(10,20,25,.45)}\n.tv-dialog label{font-weight:600;font-size:.9rem}\n.tv-dialog input,.tv-dialog select,.tv-dialog textarea{width:100%;box-sizing:border-box}\n.tv-rad2{display:grid;grid-template-columns:1fr 1fr;gap:.6rem}\n.tv-knapper{display:flex;gap:.4rem;flex-wrap:wrap;align-items:center;margin-top:.4rem}\n.tabpane{min-width:0;max-width:100%}\n.tv-board{max-width:100%}\n.tv-dialog{max-height:88vh;overflow:auto}\n.tv-dialog .stack{gap:.45rem}\n.tv-dialog textarea{min-height:4.5em}\n.tv-knapper{position:sticky;bottom:-1rem;background:var(--surface);padding:.55rem 0 .2rem;border-top:1px solid var(--line)}\n.verdi[hidden]{display:none}\n/* v12 Meldinger og varsler */\n.mv-knapp{position:relative;font:inherit;font-size:1.05rem;border:1px solid var(--line);background:var(--surface);border-radius:999px;width:40px;height:36px;cursor:pointer;padding:0}\n.mv-knapp .mv-teller{position:absolute;top:-6px;right:-6px}\n.mv-teller{display:inline-block;min-width:1.2rem;padding:0 .35rem;border-radius:999px;background:var(--sos);color:#fff;font-size:.72rem;font-weight:700;line-height:1.2rem;text-align:center;font-family:var(--body)}\n.mv-teller[hidden]{display:none}\n.mv{display:grid;grid-template-columns:300px minmax(0,1fr);border:1px solid var(--line);border-radius:16px;overflow:hidden;background:var(--surface);height:72vh;min-height:420px}\n.mv-liste{border-right:1px solid var(--line);display:flex;flex-direction:column;min-height:0;padding:.6rem;gap:.45rem}\n.mv-lhode{display:flex;gap:.35rem;align-items:center;flex-wrap:wrap}\n.mv-lhode strong{flex:1}\n.mv-lhode button,.mv-tillat,.mv-mervalg button{font:inherit;font-size:.85rem;border:1px solid var(--line);background:var(--surface);color:var(--ink);border-radius:999px;padding:.3rem .65rem;cursor:pointer}\n.mv-lhode .mv-hoved{background:var(--sea);border-color:var(--sea);color:var(--surface);font-weight:600}\n.mv-tillat{background:var(--brass-soft)!important;border-color:var(--brass)!important;text-align:left}\n.mv-liste input{font:inherit;border:1px solid var(--line);border-radius:10px;padding:.4rem .6rem;background:var(--paper);color:var(--ink)}\n.mv-samtaler{overflow-y:auto;display:flex;flex-direction:column;gap:2px;min-height:0;flex:1}\n.mv-k{all:unset;box-sizing:border-box;display:flex;gap:.55rem;align-items:center;padding:.5rem;border-radius:12px;cursor:pointer;width:100%}\n.mv-k:hover,.mv-k.p\u00e5{background:var(--sea-soft)}\n.mv-ktxt{flex:1;min-width:0;display:flex;flex-direction:column}\n.mv-ktxt b{font-size:.92rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.mv-ktxt small{color:var(--muted);font-size:.8rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.mv-k.ulest .mv-ktxt b,.mv-k.ulest .mv-ktxt small{color:var(--ink);font-weight:700}\n.mv-kmeta{display:flex;flex-direction:column;align-items:flex-end;gap:.2rem;font-size:.72rem;color:var(--muted)}\n.mv-av{flex:0 0 36px;width:36px;height:36px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:.8rem}\n.mv-traad{display:flex;flex-direction:column;min-width:0;min-height:0}\n.mv-thode{display:flex;align-items:center;gap:.55rem;padding:.6rem .8rem;border-bottom:1px solid var(--line)}\n.mv-tnavn{flex:1;min-width:0;display:flex;flex-direction:column}\n.mv-tnavn small{color:var(--muted);font-size:.78rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.mv-tilbake{display:none;all:unset;cursor:pointer;font-size:1.6rem;padding:0 .4rem}\n.mv-mer{all:unset;cursor:pointer;font-weight:700;padding:.2rem .6rem;border-radius:8px}\n.mv-mervalg{display:flex;flex-wrap:wrap;gap:.35rem;padding:.55rem .8rem;border-bottom:1px solid var(--line);background:var(--paper);align-items:center}\n.mv-mervalg p{margin:0 0 .3rem;width:100%}\n.mv-kode{font-family:var(--mono);letter-spacing:.12em;background:var(--surface);border:1px solid var(--line);border-radius:6px;padding:.05rem .4rem}\n.mv-kropp{flex:1;overflow-y:auto;padding:.8rem;display:flex;flex-direction:column;gap:.25rem;background:var(--paper)}\n.mv-tomt{margin:auto;color:var(--muted);text-align:center;max-width:32ch}\n.mv-dag{align-self:center;font-size:.75rem;color:var(--muted);margin:.6rem 0 .2rem}\n.mv-sys{align-self:center;font-size:.8rem;color:var(--muted);background:var(--surface);border:1px dashed var(--line);border-radius:999px;padding:.2rem .7rem;margin:.2rem 0}\n.mv-hvem{font-size:.72rem;color:var(--muted);margin:.4rem 0 0 .3rem}\n.mv-b{display:flex}\n.mv-b.meg{justify-content:flex-end}\n.mv-bt{position:relative;max-width:78%;background:var(--surface);border:1px solid var(--line);border-radius:16px 16px 16px 4px;padding:.45rem .7rem 1.1rem;overflow-wrap:anywhere;line-height:1.35}\n.mv-b.meg .mv-bt{background:var(--sea);border-color:var(--sea);color:var(--surface);border-radius:16px 16px 4px 16px}\n.mv-b.meg .mv-bt a{color:inherit}\n.mv-tid{position:absolute;right:.6rem;bottom:.2rem;font-size:.66rem;opacity:.7}\n.mv-slett{all:unset;cursor:pointer;position:absolute;left:.5rem;bottom:.15rem;font-size:.7rem;opacity:0}\n.mv-bt:hover .mv-slett{opacity:.7}\n.mv-batt{display:flex;flex-direction:column;gap:.25rem;margin-top:.3rem}\n.mv-fil{all:unset;cursor:pointer;text-decoration:underline;font-size:.85rem}\n.mv-vedlegg{display:flex;flex-wrap:wrap;gap:.3rem;padding:.4rem .8rem;border-top:1px solid var(--line);font-size:.82rem}\n.mv-vedlegg button{all:unset;cursor:pointer;margin-left:.2rem}\n.mv-skriv{display:flex;gap:.4rem;align-items:flex-end;padding:.55rem .7rem;border-top:1px solid var(--line)}\n.mv-skriv textarea{flex:1;font:inherit;resize:none;border:1px solid var(--line);border-radius:18px;padding:.5rem .8rem;max-height:140px;background:var(--paper);color:var(--ink)}\n.mv-skriv button{font:inherit;border:1px solid var(--line);background:var(--surface);color:var(--ink);border-radius:50%;width:40px;height:40px;cursor:pointer;flex:0 0 40px}\n.mv-skriv .mv-send{background:var(--sea);border-color:var(--sea);color:var(--surface)}\n.mv-kontakter{max-height:240px;overflow-y:auto;display:flex;flex-direction:column;gap:.2rem}\n.mv-kontakt{display:flex;gap:.55rem;align-items:center;padding:.35rem;border-radius:10px;cursor:pointer;font-weight:400!important}\n.mv-kontakt:hover{background:var(--sea-soft)}\n.mv-kontakt span:last-child{display:flex;flex-direction:column}\n.mv-kontakt small{color:var(--muted)}\n.mv-toast{position:fixed;left:50%;bottom:24px;transform:translate(-50%,140%);z-index:10000;max-width:min(92vw,520px);background:var(--ink);color:var(--surface);border:0;border-radius:14px;padding:.75rem 1rem;font:inherit;font-size:.92rem;text-align:left;box-shadow:0 10px 30px rgba(0,0,0,.3);cursor:pointer;transition:transform .25s}\n.mv-toast.vis{transform:translate(-50%,0)}\n@media (max-width:760px){\n  .mv{grid-template-columns:1fr;height:74vh}\n  .mv-traad{display:none}\n  .mv.traad-apen .mv-liste{display:none}\n  .mv.traad-apen .mv-traad{display:flex}\n  .mv-tilbake{display:inline-block}\n}\n/* v12.2 Koblinger til andre bestemmelser */\n.ld-kobl{margin:.6rem 0 1rem;border:1px solid var(--line);border-left:4px solid #0b57d0;border-radius:10px;background:var(--surface);padding:.7rem .8rem}\n.ld-khead{display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;margin-bottom:.4rem}\n.ld-khead strong{flex:1}\n.ld-kobl ul{list-style:none;margin:0;padding:0;display:grid;gap:.45rem}\n.ld-kobl li{display:flex;flex-wrap:wrap;align-items:center;gap:.4rem}\n.ld-kobl li small{flex-basis:100%;color:var(--muted)}\n.ld-ktype{font-size:.7rem;font-weight:700;border-radius:999px;padding:.05rem .5rem;background:var(--sea-soft);color:var(--ink)}\n.ld-ktype.kh{background:#e3ecfb;color:#0b57d0}\n.ld-legend li>span{white-space:nowrap;flex:0 0 auto}\n.ld-khead strong{flex:1 1 100%}\n/* v12.3 Korte infobokser: overskrift og pris, steg sammenfoldet */\n.fi-kort h3{margin:.15rem 0 .2rem}\n.fi-kort>p{margin:0}\n.intro-kort h2{font-size:1.2rem}\n.fi-mer{margin-top:.55rem}\n.fi-mer>summary{cursor:pointer;font-weight:600;color:var(--sea);list-style:none;display:inline-flex;align-items:center;gap:.35rem}\n.fi-mer>summary::-webkit-details-marker{display:none}\n.fi-mer>summary::before{content:\"\u203a\";display:inline-block;transition:transform .15s;font-size:1.1rem}\n.fi-mer[open]>summary::before{transform:rotate(90deg)}\n.fi-mer>p{margin:.5rem 0}\n.faneinfo{padding:.9rem 1.1rem}\n/* v12.4 Avkrysningsbokser og radioknapper skal ikke arve bredde: 100 % fra feltene */\ninput[type=checkbox],input[type=radio]{width:auto;padding:0;flex:0 0 auto;margin:.25rem 0 0}\n.bekreft{line-height:1.4}\n/* v12.6 knapper i Oppgaveretter-kortet */\n.velg-knapper{margin-top:.8rem}\n/* v12.9 p\u00e5fyll av KI-kreditter */\nbutton.saldo{font-family:var(--mono);font-size:.85rem;color:inherit;border:0;cursor:pointer}\nbutton.saldo:hover{filter:brightness(.96)}\n.lenkeknapp{all:unset;cursor:pointer;color:var(--sea);text-decoration:underline;font-weight:600}\n.kr-liste{list-style:none;margin:0;padding:0;display:grid;gap:.5rem}\n.kr-pakke{display:flex;justify-content:space-between;align-items:center;gap:.8rem;padding:.75rem .9rem;border:1px solid var(--line);border-radius:12px;text-decoration:none;color:var(--ink);background:var(--surface)}\n.kr-pakke:hover{border-color:var(--sea)}\n.kr-navn{display:flex;flex-direction:column;gap:.1rem;min-width:0}\n.kr-merke{font-style:normal;font-size:.72rem;font-weight:700;color:var(--sea);text-transform:uppercase;letter-spacing:.04em}\n.kr-pris{font-weight:700;white-space:nowrap}\n/* v13 studieplan */\n.sp-felt{border:1px solid var(--line);border-radius:12px;padding:.8rem .9rem;margin:0;display:grid;gap:.5rem;min-width:0}\n.sp-felt legend{font-weight:700;padding:0 .3rem}\n.sp-eks-rad{display:grid;grid-template-columns:1fr 1fr auto;gap:.4rem;padding:.5rem 0;border-bottom:1px dashed var(--line)}\n.sp-eks-rad select[name=fag]{grid-column:1/3;grid-row:1}\n.sp-eks-rad input[type=date]{grid-column:1;grid-row:2;min-width:0;width:100%;box-sizing:border-box}\n.sp-eks-rad select[name=form]{grid-column:2/4;grid-row:2;min-width:0}\n.sp-fjern{all:unset;cursor:pointer;padding:.2rem .6rem;color:var(--muted);font-size:1.1rem;grid-column:3;grid-row:1;align-self:center}\n.sp-kap-fag{margin:.2rem 0 .6rem}\n.sp-kap-fag summary{cursor:pointer;padding:.25rem 0}\n.sp-kap-liste{display:flex;flex-wrap:wrap;gap:.35rem;margin:.4rem 0}\n.sp-kap-knapp{all:unset;cursor:pointer;font-size:.82rem;line-height:1.25;padding:.38rem .6rem;border-radius:9px;border:1px solid var(--line);background:var(--surface);max-width:100%}\n.sp-kap-knapp em{font-style:normal;font-size:.7rem;font-weight:700;color:var(--sea)}\n.sp-st{display:inline-block;font-size:.75rem;padding:.1rem .45rem;border-radius:7px;border:1px solid var(--line)}\n.sp-st-1{background:#fff4c2;border-color:#e6c44d;color:#5c4500}\n.sp-st-2{background:#d9f2e3;border-color:#58b483;color:#0d5130}\n.sp-dager{display:flex;flex-wrap:wrap;gap:.35rem}\n.sp-dager label{display:flex;align-items:center;gap:.3rem;font-weight:500;font-size:.9rem;padding:.3rem .55rem;border:1px solid var(--line);border-radius:999px}\n.sp{display:grid;gap:.6rem}\n.sp h3{margin:.6rem 0 .1rem}\n.sp-sum{font-size:1.02rem}\n.sp-tall{display:flex;flex-wrap:wrap;gap:.5rem}\n.sp-tall span{background:var(--brass-soft);border-radius:10px;padding:.35rem .7rem;font-size:.9rem}\n.sp-ford{list-style:none;padding:0;margin:0;display:grid;gap:.55rem}\n.sp-ford li{display:grid;gap:.2rem}\n.sp-ford-navn em{font-style:normal;color:var(--muted);font-size:.85rem}\n.sp-bar{height:8px;border-radius:99px;background:var(--line);overflow:hidden}\n.sp-bar i{display:block;height:100%;background:var(--sea);border-radius:99px}\n.sp-faser{margin:0;padding-left:1.2rem;display:grid;gap:.35rem}\n.sp-uke{border:1px solid var(--line);border-radius:12px;padding:.55rem .8rem;background:var(--surface)}\n.sp-uke summary{cursor:pointer;display:flex;flex-wrap:wrap;gap:.2rem .5rem;align-items:baseline}\n.sp-fokus{flex-basis:100%;font-size:.9rem;color:var(--muted)}\n.sp-dag h4{margin:.7rem 0 .3rem;font-size:.85rem;text-transform:capitalize;color:var(--muted)}\n.sp-dag ul{list-style:none;margin:0;padding:0;display:grid;gap:.4rem}\n.sp-okt{display:grid;grid-template-columns:auto 1fr;gap:.55rem;align-items:start}\n.sp-okt p{margin:.15rem 0 0;font-size:.9rem}\n.sp-type{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.03em;padding:.2rem .45rem;border-radius:6px;background:#e3fcef;color:#006644;min-width:4.6rem;text-align:center}\n.sp-repeter .sp-type{background:#fff0b3;color:#7a4f00}\n.sp-oppgave .sp-type,.sp-innlevering .sp-type{background:#deebff;color:#0747a6}\n.sp-kollokvie .sp-type{background:#eae6ff;color:#403294}\n.sp-prove .sp-type{background:#ffebe6;color:#bf2600}\n.sp-buffer .sp-type,.sp-fri .sp-type{background:var(--line);color:var(--ink)}\n.sp-kap{font-size:.85rem}\n.sp-kap a{color:var(--sea)}\n.sp-punkt,.sp-rad{margin:.4rem 0 0;padding-left:1.1rem;display:grid;gap:.35rem}\n.sp-test{background:var(--brass-soft);border-radius:10px;padding:.5rem .7rem;margin:.6rem 0 .1rem;font-size:.92rem}\n.sp-eks{font-weight:600;color:#bf2600;margin:.4rem 0}\n.sp-mangler{border-left:4px solid #e6c44d;background:#fff8dc;padding:.55rem .75rem;border-radius:8px;font-size:.92rem}\n.sp-handling{margin-top:.6rem}\n@media (prefers-color-scheme:dark){.sp-st-1{background:#4a3d0a;color:#ffe9a3}.sp-st-2{background:#123d27;color:#b8f0cf}.sp-mangler{background:#3a3110}}\n.sp-punkt{list-style:none;padding-left:0}\n.sp-punkt li{display:block;line-height:1.5}\n.sp-punkt .sp-type{display:inline-block;min-width:0;margin-right:.3rem}\n.sp-t-rep{background:#fff0b3;color:#7a4f00}.sp-t-opp{background:#deebff;color:#0747a6}.sp-t-prove{background:#ffebe6;color:#bf2600}.sp-t-koll{background:#eae6ff;color:#403294}.sp-t-buf{background:var(--line);color:var(--ink)}\n/* v14 studieplan: aktiv plan, jobb, glemselskurve, kalender; faglig dugnad */\n.sp-jobb{display:grid;grid-template-columns:1fr 1fr;gap:.5rem}\n.sp-jobb label{display:grid;gap:.2rem;font-weight:500;font-size:.88rem}\n.sp-uketid{margin:.1rem 0 .3rem}\n.sp-aktivkort{border-left:4px solid var(--sea);margin-bottom:1rem}\n.sp-justertips{background:var(--brass-soft);padding:.5rem .7rem;border-radius:9px}\n.sp-budsjett{margin:-.2rem 0 .2rem}\n.sp-glemsel,.sp-ryker{border:1px solid var(--line);border-radius:12px;padding:.7rem .9rem;background:var(--surface)}\n.sp-glemsel h3,.sp-ryker h3{margin-top:0}\n.sp-ryker ol{margin:.2rem 0 0;padding-left:1.2rem;display:grid;gap:.3rem}\n.sp-kurve{width:100%;max-width:420px;height:auto;display:block;margin:.2rem 0 .5rem}\n.sp-kurve .ak{stroke:var(--muted);stroke-width:1}\n.sp-kurve .tx{fill:var(--muted);font-size:10px}\n.sp-kurve .rod{fill:none;stroke:#c0392b;stroke-width:2.5}\n.sp-kurve .gronn{fill:none;stroke:#2e8b57;stroke-width:2.5}\n.sp-handling h3{margin-bottom:.3rem}\n.dg h3{margin:0}\n.dg-typer{display:grid;gap:.35rem}\n.dg-typer label{display:flex;gap:.5rem;align-items:flex-start;font-weight:500;font-size:.92rem}\n.dg-ny summary{cursor:pointer;padding:.3rem 0}\n.dg-mote h4{margin:.6rem 0 .3rem;font-size:.92rem;text-transform:capitalize}\n.dg-mote ul{list-style:none;margin:0;padding:0;display:grid;gap:.3rem}\n.dg-mote li{display:flex;justify-content:space-between;gap:.5rem;align-items:flex-start;padding:.35rem .5rem;border:1px solid var(--line);border-radius:9px}\n.dg-mote li label{display:flex;gap:.5rem;align-items:flex-start;font-weight:400}\n.dg-ferdig span{text-decoration:line-through;color:var(--muted)}\n.dg-slett{all:unset;cursor:pointer;color:var(--muted);padding:0 .3rem}\n/* v14 Lovdata: egne farger og dommer fra b\u00f8kene */\n.ld-egne-li{list-style:none}\n.ld-egne{margin:.4rem 0 .8rem;display:grid;gap:.4rem}\n.ld-egne label{display:grid;grid-template-columns:1fr auto;gap:.5rem;align-items:center;font-weight:500;font-size:.9rem}\n.ld-bok{margin-left:.25rem;text-decoration:none}\n.ld-bokdommer{border:1px solid var(--line);border-radius:12px;padding:.6rem .8rem;margin-top:.8rem;background:var(--surface)}\n.ld-bokdommer summary{cursor:pointer}\n.ld-bokdommer ul{list-style:none;margin:.4rem 0 0;padding:0;display:grid;gap:.5rem}\n.ld-bokdommer li{display:flex;justify-content:space-between;gap:.5rem;border-top:1px dashed var(--line);padding-top:.45rem}\n.ld-bokdommer p{margin:.2rem 0}\n.ld-brukt{font-size:.7rem;background:#d9f2e3;color:#0d5130;border-radius:6px;padding:.05rem .35rem}\n/* v14 lysbilder, quiz/flashcards, podcast, spill */\n.fm-nav{display:flex;align-items:center;justify-content:center;gap:1rem;margin:.3rem 0}\n.fm-nav button{all:unset;cursor:pointer;font-size:1.6rem;padding:.1rem .8rem;border:1px solid var(--line);border-radius:10px;background:var(--surface)}\n.fm-lerret{background:#2b2f3a;border-radius:10px;padding:.4rem;display:flex;justify-content:center}\n.fm-lerret canvas{width:100%;height:auto;display:block;background:#fff;border-radius:4px}\n.fm-eksport{border-top:1px solid var(--line);margin-top:.8rem;padding-top:.6rem;display:grid;gap:.4rem}\n.spill{margin:0 0 .8rem}\n.spill-rad{display:flex;align-items:center;gap:.6rem;flex-wrap:wrap}\n.spill-niva{font-weight:700;background:var(--sea);color:#fff;border-radius:999px;padding:.15rem .6rem;font-size:.85rem}\n.spill-bar{flex:1 1 120px;height:8px;background:var(--line);border-radius:99px;overflow:hidden}\n.spill-bar i{display:block;height:100%;background:#d9a400}\n.spill-rekke{font-weight:700}\n.spill-merker{display:flex;flex-wrap:wrap;gap:.35rem;margin-top:.45rem}\n.spill-merker span{font-size:.8rem;background:var(--brass-soft);border-radius:999px;padding:.15rem .55rem}\n.spill-toast{font:600 .95rem system-ui,-apple-system,\"Segoe UI\",sans-serif;position:fixed;left:50%;bottom:1.2rem;transform:translate(-50%,150%);background:#1f2f36;color:#fff;padding:.6rem 1rem;border-radius:12px;font-weight:600;z-index:9999;transition:transform .3s;max-width:90vw;text-align:center}\n.spill-toast.vis{transform:translate(-50%,0)}\n.qz-temaer{display:flex;flex-wrap:wrap;gap:.35rem;align-items:center}\n.qz-chip{all:unset;cursor:pointer;font-size:.82rem;padding:.3rem .6rem;border-radius:999px;border:1px solid var(--line);background:var(--surface)}\n.qz-chip em{font-style:normal;color:var(--muted);font-size:.72rem}\n.qz-alt{display:grid;gap:.45rem;margin:.6rem 0}\n.qz-svar{all:unset;cursor:pointer;padding:.7rem .85rem;border:1px solid var(--line);border-radius:10px;background:var(--surface);line-height:1.35}\n.qz-svar.rett{border-color:#2e8b57;background:#d9f2e3;color:#0d5130}\n.qz-svar.feil{border-color:#c0392b;background:#fde4e1;color:#7a1d12}\n.qz-dom{font-weight:700;margin:.2rem 0}.qz-dom.ok{color:#2e8b57}.qz-dom.nei{color:#c0392b}\n.qz-kort{all:unset;cursor:pointer;display:grid;place-items:center;text-align:center;gap:.6rem;min-height:190px;padding:1.2rem;border:1px solid var(--line);border-radius:16px;background:var(--surface);box-shadow:0 2px 10px rgba(0,0,0,.06);width:100%;box-sizing:border-box;font-size:1.08rem;line-height:1.4}\n.qz-kort.snudd{background:var(--brass-soft)}\n.qz-mine{margin-top:1rem}.qz-mine ul{list-style:none;padding:0;margin:.4rem 0 0;display:grid;gap:.3rem}\n.pc-kontroll{display:flex;align-items:center;gap:.6rem;flex-wrap:wrap;margin:.4rem 0}\n.pc-kontroll button{all:unset;cursor:pointer;font-size:1.2rem;padding:.3rem .6rem;border:1px solid var(--line);border-radius:10px}\n.pc-kontroll .pc-spill{background:var(--sea);color:#fff;font-size:1.4rem;padding:.35rem .9rem}\n.pc-manus{display:grid;gap:.45rem;padding-left:1.2rem;max-height:55vh;overflow:auto}\n.pc-manus li{cursor:pointer;padding:.25rem .4rem;border-radius:8px}\n.pc-manus li.na{background:var(--brass-soft)}\n.pc-B strong{color:var(--sea)}\n@media (prefers-color-scheme:dark){.qz-svar.rett{background:#123d27;color:#b8f0cf}.qz-svar.feil{background:#4a1a14;color:#ffc9c0}}\n.fi-bruk{font-size:.92rem;line-height:1.5;margin:.35rem 0 .5rem}\n\n/* v15 \u00ab\u2026 p\u00e5 1-2-3\u00bb */\n.k3{background:var(--surface);border:1px solid var(--line);border-radius:18px;padding:1.1rem;display:grid;gap:.7rem;box-shadow:0 6px 18px rgba(19,38,46,.08)}\n.k3-topp{display:flex;align-items:center;gap:.8rem}.k3-hjul{width:46px;height:46px;flex:none}\n.k3-topp h3{margin:0;font-family:var(--display);font-weight:400;font-size:1.6rem;line-height:1.1}.k3-topp h3 span{color:var(--muted);font-size:1.1rem}\n.k3-eyebrow{margin:0;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:var(--brass)}\n.k3-felt{--k:47,111,208;border-left:5px solid rgb(var(--k));background:rgba(var(--k),.08);border-radius:10px;padding:.65rem .85rem}\n.k3-felt h4{margin:0 0 .35rem;display:flex;flex-wrap:wrap;gap:.2rem .5rem;align-items:baseline;font-size:.95rem}\n.k3-merke{color:rgb(var(--k));font-weight:800;letter-spacing:.06em}.k3-sp{color:var(--muted);font-weight:500;font-size:.85rem}\n.k3-felt p{margin:0}.k3-felt ul,.k3-felt ol{margin:0;padding-left:1.15rem;display:grid;gap:.25rem}\n.k3-hvor{--k:214,69,122}.k3-hvorfor{--k:224,164,0}.k3-hvordan{--k:46,155,90}.k3-dommer{--k:224,112,31}\n.k3-felt.k3-dommer ul.k3-dommer{list-style:none;padding:0}\n.k3-tips{margin-top:.5rem;background:var(--surface);border-radius:8px;padding:.45rem .6rem}.k3-tips strong{display:block;font-size:.85rem}\n.k3-knapper{margin-top:.7rem}\n@media (prefers-color-scheme:dark){.k3-felt{background:rgba(var(--k),.14)}}\n\n/* Ulovfestede omr\u00e5der */\n.ul-chips{display:flex;flex-wrap:wrap;gap:6px}\n.ul-chips button{border:1px solid #b9c4c7;background:#fff;border-radius:999px;padding:4px 11px;font:600 12.5px/1.3 Arial,Helvetica,sans-serif;color:#1f4e5f;cursor:pointer}\n.ul-chips button:hover{border-color:#1f4e5f}\n.ul-vis h4{display:flex;align-items:center;gap:8px;margin:18px 0 8px}\n.ul-nr{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:50%;background:#1f4e5f;color:#fff;font-size:12px;flex:none}\n.ul-merke{display:inline-block;background:#fff35c;border:1px solid #c8b900;border-radius:4px;padding:0 6px;font-size:12px;font-weight:700;margin-right:4px}\n.ul-knagg{border:1px solid #d6dde0;border-radius:8px;padding:10px 12px;margin:0 0 8px;background:#fff}\n.ul-knagg.hoved{border-color:#1f4e5f;box-shadow:0 0 0 1px #1f4e5f inset}\n.ul-khead{display:flex;flex-wrap:wrap;align-items:baseline;gap:6px}\n.ul-type{margin-left:auto;font-style:normal;font-size:12px;color:#1f4e5f;font-weight:600}\n.ul-knagg p{margin:6px 0 0}\n.ul-ord{background:#fff35c;padding:0 3px}\n.ul-kryss{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:8px}\n.ul-kryss code{font-size:12.5px;background:#f3f6f7;padding:3px 6px;border-radius:4px}\n.ul-merknad{border:1px solid #c8b900;background:#fffde6;border-radius:8px;padding:10px 12px;margin:0 0 8px}\n.ul-mhead{display:flex;align-items:center;gap:8px;justify-content:space-between}\n.ul-merknad pre{white-space:pre-wrap;margin:8px 0 0;font:14px/1.5 Arial,Helvetica,sans-serif}\n.ul-vilkar>li{margin:0 0 10px}\n.ul-vilkar p{margin:3px 0}\n.ul-vilkar ul{margin:4px 0 0;padding-left:18px}\n"+"</style><div class=\"navigo-shell\">"+"<header class=\"top\">\n  <a class=\"brand\" href=\"#hjem\" data-view=\"hjem\">Navigo <span>Study Smart</span></a>\n  <nav class=\"topnav\">\n    <button type=\"button\" class=\"saldo laster\" id=\"saldo\" title=\"KI-kreditter \u2013 trykk for \u00e5 fylle p\u00e5\" data-kjop-kreditter>henter \u2026</button>\n    <button type=\"button\" class=\"mv-knapp\" id=\"mv-knapp\" hidden aria-label=\"Meldinger\">\ud83d\udcac<span class=\"mv-teller\" id=\"mv-teller\" hidden>0</span></button>\n    <a href=\"#min-side\" data-view=\"min-side\" class=\"btn-sm\">Min side</a>\n  </nav>\n</header>\n<dialog class=\"tv-dialog\" id=\"kr-dialog\" aria-labelledby=\"kr-h\"><div class=\"stack\"><h3 id=\"kr-h\">Fyll p\u00e5 KI-kreditter</h3><p class=\"muted small\">Kredittene legges inn straks og gjelder i Navigo og alle multimedieb\u00f8kene. De varer i 6 m\u00e5neder. Alle priser inkl. mva.</p><ul class=\"kr-liste\" id=\"kr-liste\"></ul><p class=\"muted small\">Etter kj\u00f8pet: kom tilbake hit og last siden p\u00e5 nytt for \u00e5 se den nye saldoen.</p><div class=\"row-btns\"><button type=\"button\" class=\"btn ghost\" id=\"kr-lukk\">Lukk</button></div></div></dialog>\n<div class=\"demo\" id=\"demo-banner\" hidden>Demomodus: eksempeldata, ingen ekte kreditter trekkes.</div>\n\n<main id=\"app\">\n  <div class=\"boot\" id=\"boot\" role=\"status\" hidden><span class=\"boot-dot\"></span> Laster Navigo \u2026</div>\n  <!-- Innlogging -->\n  <section class=\"login-sec\" id=\"view-login\" hidden>\n    <div class=\"panel narrow login-hero\">\n      <p class=\"eyebrow-in\">Sikker innlogging uten passord</p>\n      <h1>Logg inn i Navigo</h1>\n      <p class=\"muted\">Skriv e-postadressen du kj\u00f8pte Navigo med. Du f\u00e5r en innloggingslenke og en kode p\u00e5 e-post. Du trenger ikke passord.</p>\n      <form id=\"login-form\" class=\"stack\">\n        <label for=\"login-email\">E-post</label>\n        <input id=\"login-email\" type=\"email\" required autocomplete=\"email\">\n        <button class=\"btn\" type=\"submit\">Send innloggingslenke</button>\n        <p class=\"muted small\" id=\"login-msg\" role=\"status\"></p>\n      </form>\n      <form id=\"code-form\" class=\"stack\" hidden>\n        <label for=\"login-code\">Kode fra e-posten</label>\n        <input id=\"login-code\" inputmode=\"numeric\" autocomplete=\"one-time-code\" maxlength=\"10\">\n        <button class=\"btn ghost\" type=\"submit\">Logg inn med koden</button>\n        <p class=\"muted small\" id=\"code-msg\" role=\"status\"></p>\n      </form>\n      <ol class=\"steps-in\">\n        <li>Skriv inn e-postadressen du kj\u00f8pte Navigo med.</li>\n        <li>Du f\u00e5r en e-post fra Lexia Education med en lenke og en kode.</li>\n        <li>Trykk p\u00e5 lenken, eller skriv inn koden her hvis du bruker Lexia-appen.</li>\n      </ol>\n      <p class=\"small dim\">Innloggingen og dataene dine h\u00e5ndteres i Lexias sikre database i EU (Supabase). Bare du har tilgang til sp\u00f8rsm\u00e5lene, svarene og planene dine.</p>\n    </div>\n  </section>\n\n  <!-- Hjem: seks kort -->\n  <section class=\"view\" id=\"view-hjem\" hidden>\n    <div class=\"hello\">\n      <p class=\"eyebrow-in\" id=\"hello-date\"></p>\n      <h1 id=\"hello-title\">Hei!</h1>\n      <p class=\"muted\">Velg hva du vil jobbe med i dag.</p>\n      <figure class=\"quote\" id=\"quote\"></figure>\n    </div>\n    <div class=\"phase-pick\" role=\"group\" aria-label=\"Velg l\u00e6ringsfase\">\n      <button class=\"phase-btn\" data-phase=\"oppstart\">Oppstart</button>\n      <button class=\"phase-btn\" data-phase=\"underveis\">Underveis</button>\n      <button class=\"phase-btn sos\" data-phase=\"sos\">SOS eksamen</button>\n    </div>\n    <section class=\"faseinfo\" id=\"faseinfo\" hidden></section>\n    <div class=\"grid\" id=\"cards\"></div>\n  </section>\n\n  <!-- Kort 1 -->\n  <section class=\"view\" id=\"view-kort1\" hidden>\n    <a class=\"back\" href=\"#hjem\" data-view=\"hjem\">\u2190 Alle tjenester</a>\n    <h1>F\u00e5 svar p\u00e5 juridiske sp\u00f8rsm\u00e5l</h1>\n    <section class=\"verdi intro\" data-verdi=\"kort1\"></section>\n    <form id=\"q-form\" class=\"panel stack\">\n      <label for=\"q-fag\">Fagomr\u00e5de</label>\n      <select id=\"q-fag\"></select>\n      <label for=\"q-text\">Sp\u00f8rsm\u00e5let ditt</label>\n      <textarea id=\"q-text\" rows=\"4\" required placeholder=\"F.eks.: N\u00e5r er det \u00e5rsakssammenheng etter erstatningsretten?\"></textarea>\n      <fieldset class=\"seg\">\n        <legend>Svarlengde</legend>\n        <label><input type=\"radio\" name=\"q-len\" value=\"kort\"> Kort</label>\n        <label><input type=\"radio\" name=\"q-len\" value=\"standard\" checked> Standard</label>\n        <label><input type=\"radio\" name=\"q-len\" value=\"omfattende\"> Omfattende</label>\n      </fieldset>\n      <fieldset class=\"toggles\">\n        <legend>Ta med</legend>\n        <label><input type=\"checkbox\" name=\"q-add\" value=\"eksempler\"> Praktiske eksempler</label>\n        <label><input type=\"checkbox\" name=\"q-add\" value=\"filmer\"> Undervisningsfilmer</label>\n        <label><input type=\"checkbox\" name=\"q-add\" value=\"podkaster\"> Podkaster</label>\n        <label><input type=\"checkbox\" name=\"q-add\" value=\"eksamenstips\"> Eksamenstips</label>\n        <label><input type=\"checkbox\" name=\"q-add\" value=\"oppgaver\"> Oppgaveforslag</label>\n      </fieldset>\n      <p class=\"muted small\" style=\"margin:.2rem 0 0\">Forbehold: Vi har ikke undervisningsfilmer og podkaster om alle temaer. Finnes det ikke stoff om temaet ditt, sier svaret fra om det.</p>\n      <div class=\"cost\"><span>Forventet kostnad</span><strong id=\"q-cost\">0,4 kreditter</strong></div>\n      <button class=\"btn\" type=\"submit\">Send sp\u00f8rsm\u00e5let</button>\n    </form>\n    <article class=\"panel answer\" id=\"q-answer\" hidden></article>\n  </section>\n\n  <!-- Kort 2 -->\n  <section class=\"view\" id=\"view-kort2\" hidden>\n    <a class=\"back\" href=\"#hjem\" data-view=\"hjem\">\u2190 Alle tjenester</a>\n    <h1>F\u00e5 kontroll p\u00e5 hele faget</h1>\n    <section class=\"verdi intro\" data-verdi=\"kort2\"></section>\n    <div id=\"sp-aktiv\" hidden></div>\n    <form id=\"plan-form\" class=\"panel stack\">\n      <fieldset class=\"sp-felt\">\n        <legend>1. Eksamenene dine</legend>\n        <div id=\"sp-eksamener\"></div>\n        <button type=\"button\" class=\"btn ghost btn-sm\" id=\"sp-ny-eks\">+ Legg til eksamen</button>\n      </fieldset>\n      <fieldset class=\"sp-felt\">\n        <legend>2. Hvor langt har du kommet?</legend>\n        <p class=\"muted small\">Trykk p\u00e5 kapitlene for \u00e5 endre status: <span class=\"sp-st sp-st-0\">Ikke lest</span> <span class=\"sp-st sp-st-1\">Lest</span> <span class=\"sp-st sp-st-2\">Kan godt</span></p>\n        <div id=\"sp-kapitler\"></div>\n      </fieldset>\n      <fieldset class=\"sp-felt\">\n        <legend>3. Tiden din</legend>\n        <label for=\"p-timer\">Timer per lesedag: <output id=\"p-timer-out\">2</output></label>\n        <input id=\"p-timer\" type=\"range\" min=\"0.5\" max=\"8\" step=\"0.5\" value=\"2\">\n        <label>Lesedager</label>\n        <div class=\"sp-dager\" id=\"sp-dager\">\n          <label><input type=\"checkbox\" value=\"1\" checked>Man</label><label><input type=\"checkbox\" value=\"2\" checked>Tir</label><label><input type=\"checkbox\" value=\"3\" checked>Ons</label><label><input type=\"checkbox\" value=\"4\" checked>Tor</label><label><input type=\"checkbox\" value=\"5\" checked>Fre</label><label><input type=\"checkbox\" value=\"6\">L\u00f8r</label><label><input type=\"checkbox\" value=\"0\">S\u00f8n</label>\n        </div>\n        <p class=\"sp-uketid muted small\" id=\"sp-uketid\"></p>\n        <label>Jobb ved siden av studiene (valgfritt)</label>\n        <div class=\"sp-jobb\"><label>Dager i uka <select id=\"p-jobbdager\"><option value=\"0\">Ingen</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></label><label>Timer i uka <input id=\"p-jobbtimer\" type=\"number\" min=\"0\" max=\"60\" step=\"1\" value=\"0\"></label></div>\n        <label for=\"p-kollokvie\">Kollokviegruppe</label>\n        <select id=\"p-kollokvie\"><option value=\"\">Har ingen fast gruppe</option><option>mandag</option><option>tirsdag</option><option>onsdag</option><option>torsdag</option><option>fredag</option><option>l\u00f8rdag</option><option>s\u00f8ndag</option></select>\n        <label for=\"p-mal\">Ambisjon</label>\n        <select id=\"p-mal\"><option>Best\u00e5</option><option selected>God karakter (C eller bedre)</option><option>Toppkarakter (A/B)</option></select>\n      </fieldset>\n      <fieldset class=\"sp-felt\">\n        <legend>4. Dette b\u00f8r Navigo vite</legend>\n        <label for=\"p-innlev\">Innleveringer og arbeidskrav (valgfritt)</label>\n        <input id=\"p-innlev\" type=\"text\" maxlength=\"500\" placeholder=\"F.eks.: arbeidskrav i avtalerett 14. november\">\n        <label for=\"p-kommentar\">Kommentar til Navigo (valgfritt)</label>\n        <textarea id=\"p-kommentar\" rows=\"3\" maxlength=\"1500\" placeholder=\"F.eks.: Jeg jobber tirsdager, sliter med \u00e5rsaksl\u00e6ren og vil trene mest p\u00e5 praktikum.\"></textarea>\n      </fieldset>\n      <div class=\"cost\"><span>Kartlegging + plan</span><strong id=\"p-cost\">1,3 kreditter</strong></div>\n      <button class=\"btn\" type=\"submit\">Lag studieplanen</button>\n    </form>\n    <article class=\"panel\" id=\"plan-out\" hidden></article>\n  </section>\n\n  <!-- Kort 3 -->\n  <section class=\"view\" id=\"view-kort3\" hidden>\n    <a class=\"back\" href=\"#hjem\" data-view=\"hjem\">\u2190 Alle tjenester</a>\n    <h1>Skriv bedre juridiske oppgaver</h1>\n    <section class=\"verdi intro\" data-verdi=\"kort3\"></section>\n    <section class=\"velg\" aria-labelledby=\"velg-h\">\n      <h2 class=\"sub\" id=\"velg-h\">Hele besvarelsen eller bare en del?</h2>\n      <div class=\"velg-grid\">\n        <article class=\"velg-kort hel\">\n          <figure class=\"velg-bilde\"><img src=\"https://us.simplerousercontent.net/uploads/asset/file/15300513/eksempel-a-merknader.jpg\" alt=\"Eksempel fra Oppgaveretteren: randmerknader i en anonymisert besvarelse\" loading=\"lazy\"></figure>\n          <p class=\"velg-tag\">Hele besvarelsen</p>\n          <h3>Oppgaveretteren</h3>\n          <p>En fullstendig retting, slik en sensor ville gjort den.</p>\n          <dl>\n            <dt>Du sender inn</dt><dd>Hele besvarelsen som fil, med oppgaveteksten</dd>\n            <dt>Du f\u00e5r</dt><dd>Randmerknader i teksten, vurdering av problemstilling, rettskilder, dr\u00f8ftelse, subsumsjon og konklusjon, sluttevaluering og prioriterte forbedringspunkter. Du kan levere en ny versjon og se hva som er blitt bedre.</dd>\n            <dt>Pris</dt><dd>\u00c9n retting per besvarelse. Tre rettinger f\u00f8lger med Semester + Oppgaveretteren.</dd>\n            <dt>Passer n\u00e5r</dt><dd>Du er ferdig med et utkast og vil vite hvor du st\u00e5r f\u00f8r innlevering eller eksamen.</dd>\n          </dl>\n          <div class=\"row-btns velg-knapper\"><a class=\"btn\" id=\"open-oppgaveretter\" href=\"#\" target=\"_top\">\u00c5pne Oppgaveretteren</a><a class=\"btn ghost\" id=\"how-oppgaveretter\" href=\"#\" target=\"_top\">Slik fungerer det</a></div>\n        </article>\n        <article class=\"velg-kort del\">\n          <figure class=\"velg-bilde\"><img src=\"https://us.simplerousercontent.net/uploads/asset/file/15299470/Rk0GK_YTNI.jpg\" alt=\"Eksempel fra Oppgaveretteren: skriver\u00e5d til ett valgt avsnitt\" loading=\"lazy\"></figure>\n          <p class=\"velg-tag\">Bare en del</p>\n          <h3>Raske skriver\u00e5d</h3>\n          <p>Konkrete r\u00e5d om ett avsnitt du jobber med akkurat n\u00e5.</p>\n          <dl>\n            <dt>Du limer inn</dt><dd>Ett avsnitt eller en del, for eksempel \u00e9n dr\u00f8ftelse (opptil om lag 1 000 ord)</dd>\n            <dt>Du f\u00e5r</dt><dd>3\u20136 konkrete forbedringer med eksempler p\u00e5 bedre formuleringer. Ingen karakter og ingen helhetsvurdering av besvarelsen.</dd>\n            <dt>Pris</dt><dd>0,4 kreditter. R\u00e5dene lagres i ressursbanken.</dd>\n            <dt>Passer n\u00e5r</dt><dd>Du st\u00e5r fast underveis i skrivingen og vil ha hjelp med akkurat denne delen.</dd>\n          </dl>\n        </article>\n      </div>\n    </section>\n    <section class=\"opphav panel\" aria-labelledby=\"opphav-h\">\n      <div class=\"opphav-top\">\n        <svg class=\"opphav-ikon\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M30 18.5a8 8 0 1 0 0 11\"/></svg>\n        <div><p class=\"eyebrow-in\">Opphavsrett</p><h3 id=\"opphav-h\">Dette kan du laste opp og lime inn</h3></div>\n      </div>\n      <div class=\"opphav-grid\">\n        <ul class=\"ja\">\n          <li>Tekst du har skrevet selv, ogs\u00e5 utkast og innleverte oppgaver</li>\n          <li>Oppgaveteksten du skal l\u00f8se</li>\n          <li>Korte sitater fra b\u00f8ker og dommer n\u00e5r du bruker dem i din egen tekst (\u00e5ndsverkloven \u00a7 29)</li>\n        </ul>\n        <ul class=\"nei\">\n          <li>Andres besvarelser uten at de har sagt ja (\u00e5ndsverkloven \u00a7 2)</li>\n          <li>Hele kapitler, fasiter eller sensorveiledninger du ikke har rett til \u00e5 dele</li>\n          <li>Personopplysninger om andre enn deg selv</li>\n        </ul>\n      </div>\n      <p class=\"muted small\">Du beholder opphavsretten til din egen tekst. Ved raske skriver\u00e5d lagres bare tilbakemeldingen i ressursbanken din, ikke utdraget du limte inn. Sjekk ogs\u00e5 l\u00e6restedets regler for bruk av KI p\u00e5 innleveringer.</p>\n    </section>\n    <h2 class=\"sub\">Raske skriver\u00e5d: bare en del</h2>\n    <p class=\"muted\">Lim inn ett avsnitt eller \u00e9n del av besvarelsen. Du f\u00e5r konkrete forbedringer p\u00e5 akkurat den delen, ikke en ferdig tekst og ingen helhetsvurdering. Vil du ha hele besvarelsen vurdert, bruker du Oppgaveretteren.</p>\n    <form class=\"panel stack tool-form\" data-tool=\"skriverad\" id=\"t-skriverad\">\n<label>Fag</label><select name=\"fag\" class=\"fag-sel\"></select>\n      <label>Oppgavetype</label><select name=\"oppgavetype\"><option>Praktikumsoppgave</option><option>Teorioppgave</option><option>Hjemmeeksamen</option><option>Masteroppgave</option></select>\n      <label>Oppgaveteksten (valgfritt)</label><textarea name=\"oppgave\" rows=\"3\" placeholder=\"Lim inn oppgaveteksten hvis du har den.\"></textarea>\n      <label>Utdrag fra besvarelsen</label><textarea name=\"tekst\" rows=\"8\" required placeholder=\"Lim inn teksten du vil ha r\u00e5d om (inntil om lag 1 000 ord).\"></textarea>\n      <label class=\"bekreft\"><input type=\"checkbox\" name=\"bekreft\" value=\"ja\" required> Teksten er skrevet av meg, eller jeg har rett til \u00e5 bruke den.</label>\n      <div class=\"cost\"><span>Kostnad</span><strong data-cost=\"notatkontroll\"></strong></div>\n      <button class=\"btn\" type=\"submit\">F\u00e5 skriver\u00e5d</button>\n    </form>\n    <article class=\"panel answer tool-out\" hidden></article>\n  </section>\n\n  <!-- Kort 4 -->\n  <section class=\"view\" id=\"view-kort4\" hidden>\n    <a class=\"back\" href=\"#hjem\" data-view=\"hjem\">\u2190 Alle tjenester</a>\n    <h1>F\u00e5 kontroll p\u00e5 Lovdata</h1>\n    <section class=\"verdi intro\" data-verdi=\"kort4\"></section>\n    <div class=\"tabs\" role=\"tablist\">\n      <button class=\"tab\" role=\"tab\" data-tab=\"ld-veil\" aria-selected=\"true\">Understreking og farger</button>\n      <button class=\"tab\" role=\"tab\" data-tab=\"ld-merk\">Merknadsforslag</button>\n      <button class=\"tab\" role=\"tab\" data-tab=\"ld-ulov\">Ulovfestede omr\u00e5der</button>\n    </div>\n    <section class=\"faneinfo\" aria-live=\"polite\"></section>\n    <div class=\"tabpane\" data-pane=\"ld-veil\">\n    <form class=\"panel stack tool-form\" data-tool=\"lovdata\" id=\"t-lovdata\">\n      <label>Fag</label><select name=\"fag\" class=\"fag-sel\"></select>\n      <label>Bestemmelse</label><input name=\"bestemmelse\" required autocomplete=\"off\" spellcheck=\"false\" placeholder=\"S\u00f8k: lov, paragraf eller tema, f.eks. \u00abskl 3-2\u00bb eller \u00abmenerstatning\u00bb\">\n      <p class=\"muted small\">Begynn \u00e5 skrive, s\u00e5 f\u00e5r du forslag. Navigo henter lovteksten selv, slik den st\u00e5r i Lovdata.</p>\n      <details class=\"lim\" hidden><summary>Lim inn lovteksten selv</summary><textarea name=\"lovtekst\" rows=\"5\" placeholder=\"Bruk dette bare hvis Navigo ikke fant bestemmelsen: kopier paragrafen fra lovdata.no og lim den inn her.\"></textarea></details>\n      <p class=\"ansvar small\">Du har selv ansvaret for at understrekninger, markeringer og innarbeidelser er i samsvar med hjelpemiddelreglene ved ditt l\u00e6rested og i emnet.</p>\n      <div class=\"cost\"><span>Kostnad</span><strong data-cost=\"lovdata\"></strong></div>\n      <button class=\"btn\" type=\"submit\">Vis markeringene</button>\n    </form>\n    <article class=\"panel answer tool-out\" hidden></article>\n    </div>\n    <div class=\"tabpane\" data-pane=\"ld-merk\" hidden>\n    <form class=\"panel stack tool-form\" data-tool=\"merknader\" id=\"t-merknader\">\n      <label>Fag</label><select name=\"fag\" class=\"fag-sel\"></select>\n      <label>Bestemmelse</label><input name=\"bestemmelse\" required autocomplete=\"off\" spellcheck=\"false\" placeholder=\"S\u00f8k: lov, paragraf eller tema, f.eks. \u00abskl 3-2\u00bb eller \u00abmenerstatning\u00bb\">\n      <p class=\"muted small\">Begynn \u00e5 skrive, s\u00e5 f\u00e5r du forslag. Navigo henter lovteksten selv, slik den st\u00e5r i Lovdata.</p>\n      <details class=\"lim\" hidden><summary>Lim inn lovteksten selv</summary><textarea name=\"lovtekst\" rows=\"5\" placeholder=\"Bruk dette bare hvis Navigo ikke fant bestemmelsen: kopier paragrafen fra lovdata.no og lim den inn her.\"></textarea></details>\n      <label>Hva vil du ha merknader om? (valgfritt)</label><textarea name=\"tekst\" rows=\"2\" placeholder=\"F.eks.: dommer om \u00abvarig\u00bb og \u00abbetydelig\u00bb\"></textarea>\n      <p class=\"ansvar small\">Du har selv ansvaret for at merknadene du legger inn i Lovdata, er i samsvar med hjelpemiddelreglene ved ditt l\u00e6rested og i emnet. Kontroller hver henvisning f\u00f8r du legger den inn.</p>\n      <div class=\"cost\"><span>Kostnad</span><strong data-cost=\"merknader\"></strong></div>\n      <button class=\"btn\" type=\"submit\">Foresl\u00e5 merknader</button>\n    </form>\n    <article class=\"panel answer tool-out\" hidden></article>\n    </div>\n    <div class=\"tabpane\" data-pane=\"ld-ulov\" hidden>\n    <form class=\"panel stack tool-form\" data-tool=\"ulovfestet\" id=\"t-ulovfestet\">\n      <label>Fag</label><select name=\"fag\" class=\"fag-sel\"></select>\n      <label>Ulovfestet regel eller tema</label><input name=\"tema\" required autocomplete=\"off\" placeholder=\"F.eks. \u00abculpaansvaret\u00bb eller \u00abadekvat \u00e5rsakssammenheng\u00bb\">\n      <div class=\"ul-chips\" aria-label=\"Popul\u00e6re ulovfestede regler\"><button type=\"button\" data-ul-tema=\"Culpaansvaret\">Culpaansvaret</button><button type=\"button\" data-ul-tema=\"Ulovfestet objektivt ansvar\">Ulovfestet objektivt ansvar</button><button type=\"button\" data-ul-tema=\"Adekvat \u00e5rsakssammenheng\">Adekvat \u00e5rsakssammenheng</button><button type=\"button\" data-ul-tema=\"Lojalitetsplikten i kontraktsforhold\">Lojalitetsplikten</button><button type=\"button\" data-ul-tema=\"Bristende forutsetninger\">Bristende forutsetninger</button><button type=\"button\" data-ul-tema=\"Myndighetsmisbruk i forvaltningsretten\">Myndighetsmisbruk</button></div>\n      <p class=\"muted small\">Navigo finner en \u00abknagg\u00bb i loven der merknaden kan festes, deler regelen inn i vilk\u00e5r og samler dommene fra Lexias b\u00f8ker i en ferdig merknad.</p>\n      <label>\u00d8nsker (valgfritt)</label><textarea name=\"tekst\" rows=\"2\" placeholder=\"F.eks.: s\u00e6rlig dommer om skadeevne og handlingsalternativer\"></textarea>\n      <p class=\"ansvar small\">Du har selv ansvaret for at merknadene du legger inn i Lovdata, er i samsvar med hjelpemiddelreglene ved ditt l\u00e6rested og i emnet. Kontroller hver henvisning f\u00f8r du legger den inn.</p>\n      <div class=\"cost\"><span>Kostnad</span><strong data-cost=\"ulovfestet\"></strong></div>\n      <button class=\"btn\" type=\"submit\">Lag oppsettet</button>\n    </form>\n    <article class=\"panel answer tool-out\" hidden></article>\n    </div>\n  </section>\n\n  <!-- Kort 5 -->\n  <section class=\"view\" id=\"view-kort5\" hidden>\n    <a class=\"back\" href=\"#hjem\" data-view=\"hjem\">\u2190 Alle tjenester</a>\n    <h1>Mitt digitale studierom</h1>\n    <section class=\"verdi intro\" data-verdi=\"kort5\"></section>\n    <div class=\"tabs\" role=\"tablist\">\n      <button class=\"tab\" role=\"tab\" data-tab=\"notter\" aria-selected=\"true\">N\u00f8tteknekkeren</button>\n      <button class=\"tab\" role=\"tab\" data-tab=\"notater\">Notatbank</button>\n      <button class=\"tab\" role=\"tab\" data-tab=\"tavle\">Studietavle</button>\n      <button class=\"tab\" role=\"tab\" data-tab=\"tankekart\">Tankekart</button>\n      <button class=\"tab\" role=\"tab\" data-tab=\"lysbilder\">Lysbilder</button>\n      <button class=\"tab\" role=\"tab\" data-tab=\"kort123\">P\u00e5 1-2-3</button>\n      <button class=\"tab\" role=\"tab\" data-tab=\"quiz\">Quiz og kort</button>\n      <button class=\"tab\" role=\"tab\" data-tab=\"podcast\">Podcast</button>\n      <button class=\"tab\" role=\"tab\" data-tab=\"kollokvie\">Kollokvie</button>\n      <button class=\"tab\" role=\"tab\" data-tab=\"meldinger\">Meldinger <span class=\"mv-teller\" id=\"mv-teller-fane\" hidden>0</span></button>\n    </div>\n    <section class=\"faneinfo\" id=\"faneinfo\" aria-live=\"polite\"></section>\n    <div class=\"tabpane\" data-pane=\"notter\">\n      <p class=\"muted\">St\u00e5r du fast? Beskriv hva du ikke f\u00e5r til, s\u00e5 forklarer Navigo det trinn for trinn med eksempler.</p>\n      <form class=\"panel stack tool-form\" data-tool=\"notteknekker\" id=\"t-notter\">\n<label>Fag</label><select name=\"fag\" class=\"fag-sel\"></select>\n      <label>Hva st\u00e5r du fast p\u00e5?</label><textarea name=\"tekst\" rows=\"4\" placeholder=\"F.eks.: Jeg skj\u00f8nner ikke forskjellen p\u00e5 culpa og objektivt ansvar.\"></textarea>\n      <div class=\"vedlegg\">\n        <label class=\"vedlegg-knapp\"><input type=\"file\" class=\"vedlegg-inn\" accept=\"image/*,.pdf,application/pdf\" multiple><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M21 12.5l-8.2 8.2a5 5 0 0 1-7.1-7.1l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7l-8.5 8.5a1.7 1.7 0 0 1-2.4-2.4l7.8-7.8\"/></svg><span>Last opp lysbilder, bilder eller PDF</span></label>\n        <ul class=\"vedlegg-liste\"></ul>\n        <p class=\"muted small\">Opptil 4 filer: bilder (JPG, PNG) eller PDF. PowerPoint lagrer du som PDF f\u00f8rst. Du kan ogs\u00e5 ta bilde av tavla eller lysbildet med mobilen. Filene lagres i notatbanken din. Hver fil koster 0,1 kreditt ekstra.</p>\n      </div>\n      <div class=\"cost\"><span>Kostnad</span><strong data-cost=\"svar.kort\"></strong></div>\n      <button class=\"btn\" type=\"submit\">Knekk n\u00f8tta</button>\n    </form>\n    <article class=\"panel answer tool-out\" hidden></article>\n    </div>\n    <div class=\"tabpane\" data-pane=\"notater\" hidden>\n      <form class=\"panel stack\" id=\"note-form\">\n        <input type=\"hidden\" name=\"id\">\n        <label>Tittel</label><input name=\"tittel\" required maxlength=\"200\" placeholder=\"F.eks.: Adekvans \u2013 hovedpunkter\">\n        <label>Fag</label><select name=\"fag\" class=\"fag-sel\"></select>\n        <label>Notat</label><textarea name=\"innhold\" rows=\"8\" placeholder=\"Skriv notatet ditt her.\"></textarea>\n        <div class=\"row-btns\"><button class=\"btn\" type=\"submit\">Lagre notat</button><button class=\"btn ghost\" type=\"button\" id=\"note-new\">Nytt notat</button><button class=\"btn ghost\" type=\"button\" id=\"note-check\">Notatkontroll (<span data-cost=\"notatkontroll\"></span>)</button></div>\n        <div class=\"struktur-boks\">\n          <p class=\"eyebrow-in\">Struktur og system</p>\n          <p class=\"muted small\">Navigo ordner notatet etter juridisk systematikk: utgangspunkt, rettskilder, vilk\u00e5r, unntak, rettsf\u00f8lger, dommer og eksamenssp\u00f8rsm\u00e5l. Innholdet ditt beholdes, og du ser hva som mangler.</p>\n          <div class=\"row-btns\"><button class=\"btn ghost\" type=\"button\" id=\"note-struktur\">Strukturer notatet (<span data-cost=\"notatstruktur\"></span>)</button><button class=\"btn ghost\" type=\"button\" id=\"note-system\">Sett alle notatene i faget i system (<span data-cost=\"notatsystem\"></span>)</button></div>\n        </div>\n        <p class=\"muted small\" id=\"note-msg\" role=\"status\"></p>\n      </form>\n      <article class=\"panel answer\" id=\"note-out\" hidden></article>\n      <div class=\"panel stack filer\">\n        <h2>Filene dine</h2>\n        <p class=\"muted small\">Last opp forelesningslysbilder, egne notater, oppgaver eller annet studiemateriale (PDF, Word, PowerPoint, bilder, inntil 25 MB per fil). Filene er private og ligger i ressursbanken din.</p>\n        <label class=\"btn ghost filknapp\">Velg filer \u00e5 laste opp<input type=\"file\" id=\"fil-inn\" multiple hidden accept=\".pdf,.doc,.docx,.ppt,.pptx,.txt,.md,.rtf,.odt,.png,.jpg,.jpeg,.xlsx,.csv\"></label>\n        <p class=\"muted small\" id=\"fil-msg\" role=\"status\"></p>\n        <ul class=\"notes\" id=\"fil-liste\"><li class=\"laster\">henter \u2026</li></ul>\n      </div>\n      <h2 class=\"sub\">Notatene dine</h2>\n      <ul class=\"notes\" id=\"note-list\"><li class=\"laster\">henter \u2026</li></ul>\n    </div>\n    <div class=\"tabpane\" data-pane=\"tavle\" hidden>\n      <div class=\"tv-tools\">\n        <select id=\"tv-velg\" aria-label=\"Velg tavle\" hidden></select>\n        <button type=\"button\" id=\"tv-ny\">\uff0b Ny tavle</button>\n        <button type=\"button\" id=\"tv-navn\" title=\"Endre navn p\u00e5 tavlen\">Navn</button>\n        <input type=\"search\" id=\"tv-sok\" placeholder=\"S\u00f8k i kort \u2026\" aria-label=\"S\u00f8k i kort\">\n        <button type=\"button\" id=\"tv-import\" title=\"Hent tavlene dine fra Lexia StudySmart\">\u2913 Hent fra StudySmart</button>\n        <button type=\"button\" id=\"tv-slett\" title=\"Slett tavlen\">\ud83d\uddd1</button>\n      </div>\n      <p class=\"muted small\" id=\"tv-status\" role=\"status\"></p>\n      <div class=\"tv-board\" id=\"tv-board\"><p class=\"muted\">henter tavlen \u2026</p></div>\n      <dialog class=\"tv-dialog\" id=\"tv-dialog\">\n        <form method=\"dialog\" class=\"stack\" id=\"tv-form\">\n          <div class=\"tv-rad2\"><div><label>Type</label><select name=\"type\" id=\"tv-type\"></select></div><div><label>Liste</label><select name=\"liste\" id=\"tv-liste\"></select></div></div>\n          <label>Tittel</label><input name=\"title\" required maxlength=\"200\" placeholder=\"F.eks.: Les kap. 4 om adekvans\">\n          <div class=\"tv-rad2\"><div><label>Fag</label><select name=\"fag\" class=\"fag-sel\"></select></div><div><label>Frist</label><input name=\"due\" type=\"date\"></div></div>\n          <label>Lenke (valgfritt)</label><input name=\"url\" type=\"url\" placeholder=\"https://\u2026\">\n          <label>Notat</label><textarea name=\"notes\" rows=\"4\" placeholder=\"Stikkord, sidetall, sp\u00f8rsm\u00e5l til forelesningen \u2026\"></textarea>\n          <label>Stikkord (skill med komma)</label><input name=\"tags\" placeholder=\"F.eks.: eksamen, repetisjon\">\n          <div class=\"tv-rad2\"><div><label>Farge</label><div class=\"tv-farger\" id=\"tv-farger\"></div></div><div><label>Viktighet</label><select name=\"stars\"><option value=\"0\">\u2013</option><option value=\"1\">\u2605</option><option value=\"2\">\u2605\u2605</option><option value=\"3\">\u2605\u2605\u2605</option></select></div></div>\n          <p class=\"muted small\" id=\"tv-kilde\" hidden></p>\n          <div class=\"tv-knapper\"><button type=\"button\" class=\"btn ghost tv-fare\" id=\"tv-kslett\">Slett</button><button type=\"button\" class=\"btn ghost\" id=\"tv-kdup\">Dupliser</button><span class=\"mm-fyll\"></span><button type=\"button\" class=\"btn ghost\" id=\"tv-avbryt\">Avbryt</button><button type=\"submit\" class=\"btn\">Lagre</button></div>\n        </form>\n      </dialog>\n    </div>\n    <div class=\"tabpane\" data-pane=\"tankekart\" hidden>\n      <div class=\"mm-modus\" role=\"group\" aria-label=\"Velg hvordan tankekartet lages\"><button type=\"button\" data-mm=\"selv\" aria-pressed=\"true\">Lag selv <small>gratis</small></button><button type=\"button\" data-mm=\"ki\" aria-pressed=\"false\">Lag med KI <small data-cost=\"tankekart\"></small></button></div>\n      <div class=\"mm-selv\">\n        <p class=\"muted\">Bygg ditt eget tankekart: legg til grener, dra dem dit du vil, gi dem farger og last ned som bilde eller PDF. Kartene lagres i studierommet ditt.</p>\n        <div class=\"mm-tools\">\n          <select id=\"mm-velg\" aria-label=\"Velg tankekart\" hidden></select>\n          <button type=\"button\" id=\"mm-ny\" class=\"mm-hoved\">\uff0b Nytt tankekart</button>\n          <button type=\"button\" id=\"mm-gren\" title=\"Legg til undergren (Tab)\">\uff0b Gren</button>\n          <button type=\"button\" id=\"mm-sosken\" title=\"Legg til gren p\u00e5 samme niv\u00e5 (Enter)\">\uff0b S\u00f8sken</button>\n          <button type=\"button\" id=\"mm-tekst\" title=\"Endre tekst (F2 eller dobbelttrykk)\">\u270e Tekst</button>\n          <button type=\"button\" id=\"mm-farge\" title=\"Farge p\u00e5 grenen\">\ud83c\udfa8 Farge</button>\n          <button type=\"button\" id=\"mm-slettgren\" title=\"Slett grenen (Delete)\">Slett gren</button>\n          <span class=\"mm-fyll\"></span>\n          <button type=\"button\" id=\"mm-navn\" title=\"Endre navn eller fag\">Navn</button>\n          <button type=\"button\" id=\"mm-png\" title=\"Last ned som bilde\">\u2913 Bilde</button>\n          <button type=\"button\" id=\"mm-pdf\" title=\"Last ned som PDF\">\u2913 PDF</button>\n          <button type=\"button\" id=\"mm-slett\" title=\"Slett hele tankekartet\">\ud83d\uddd1</button>\n        </div>\n        <div class=\"mm-farger\" hidden></div>\n        <div class=\"mm-flate\">\n          <svg id=\"mm-svg\" role=\"img\" aria-label=\"Tankekart\"></svg>\n          <div class=\"mm-zoom\"><button type=\"button\" id=\"mm-zinn\" aria-label=\"Zoom inn\">\uff0b</button><button type=\"button\" id=\"mm-zut\" aria-label=\"Zoom ut\">\uff0d</button><button type=\"button\" id=\"mm-ztilpass\" aria-label=\"Tilpass til skjermen\">\u2922</button></div>\n          <div class=\"mm-hjelp\"><b id=\"mm-tittel\"></b> \u00b7 trykk p\u00e5 gr\u00f8nt pluss for ny gren \u00b7 dobbelttrykk for \u00e5 endre tekst \u00b7 dra for \u00e5 flytte \u00b7 klyp eller hjul for \u00e5 zoome</div>\n          <div class=\"mm-tom\" id=\"mm-tom\">Ingen tankekart enn\u00e5. Trykk \u00abNytt tankekart\u00bb, eller lag et med KI og \u00e5pne det her.</div>\n        </div>\n        <p class=\"muted small\" id=\"mm-status\" role=\"status\"></p>\n      </div>\n      <div class=\"mm-ki\" hidden>\n      <p class=\"muted\">F\u00e5 et tankekart over et tema, eller over dine egne notater og lysbilder: vilk\u00e5r, unntak, sentrale dommer og typiske eksamensfeller. Du kan \u00e5pne det i redigeringsverkt\u00f8yet etterp\u00e5, bygge videre og laste det ned som bilde eller PDF.</p>\n      <form class=\"panel stack tool-form\" data-tool=\"tankekart\" id=\"t-tankekart\">\n<label>Fag</label><select name=\"fag\" class=\"fag-sel\"></select>\n      <label>Tema</label><input name=\"tema\" placeholder=\"F.eks.: Arbeidsgiveransvaret etter skl. \u00a7 2-1\">\n      <label>Egne notater <span class=\"muted small\">(valgfritt)</span></label><textarea name=\"tekst\" rows=\"4\" placeholder=\"Lim inn notatene dine, s\u00e5 bygger Navigo tankekartet p\u00e5 dem.\"></textarea>\n      <div class=\"vedlegg\">\n        <label class=\"vedlegg-knapp\"><input type=\"file\" class=\"vedlegg-inn\" accept=\"image/*,.pdf,application/pdf,.txt,text/plain,.md\" multiple><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M21 12.5l-8.2 8.2a5 5 0 0 1-7.1-7.1l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7l-8.5 8.5a1.7 1.7 0 0 1-2.4-2.4l7.8-7.8\"/></svg><span>Last opp notater, lysbilder eller PDF</span></label>\n        <ul class=\"vedlegg-liste\"></ul>\n      </div>\n      <p class=\"muted small\">Opptil fire filer. Bilder og PDF koster 0,1 kreditt ekstra per fil. Tekstfiler legges inn i notatfeltet uten ekstra kostnad. Word og PowerPoint lagrer du som PDF f\u00f8rst.</p>\n      <div class=\"cost\"><span>Kostnad</span><strong data-cost=\"tankekart\"></strong></div>\n      <button class=\"btn\" type=\"submit\">Lag tankekart</button>\n    </form>\n    <article class=\"panel answer tool-out\" hidden></article>\n      </div>\n    </div>\n    <div class=\"tabpane\" data-pane=\"meldinger\" hidden>\n      <div class=\"mv\" id=\"mv\">\n        <aside class=\"mv-liste\">\n          <div class=\"mv-lhode\"><strong>Samtaler</strong><button type=\"button\" class=\"mv-hoved\" id=\"mv-ny\">\uff0b Ny</button><button type=\"button\" id=\"mv-blimed\">Bli med i gruppe</button></div>\n          <button type=\"button\" class=\"mv-tillat\" id=\"mv-tillat\" hidden>\ud83d\udd14 Varsle meg p\u00e5 denne enheten</button>\n          <input type=\"search\" id=\"mv-sok\" placeholder=\"S\u00f8k i samtaler \u2026\" aria-label=\"S\u00f8k i samtaler\">\n          <div class=\"mv-samtaler\" id=\"mv-samtaler\"><p class=\"muted small\">henter \u2026</p></div>\n        </aside>\n        <section class=\"mv-traad\">\n          <div class=\"mv-thode\"><button type=\"button\" class=\"mv-tilbake\" id=\"mv-tilbake\" aria-label=\"Tilbake\">\u2039</button><div class=\"mv-av\" id=\"mv-thav\"></div><div class=\"mv-tnavn\"><b id=\"mv-tnavn\">Velg en samtale</b><small id=\"mv-tsub\"></small></div><button type=\"button\" class=\"mv-mer\" id=\"mv-mer\" aria-label=\"Valg for samtalen\" hidden>\u22ef</button></div>\n          <div class=\"mv-mervalg\" id=\"mv-mervalg\" hidden></div>\n          <div class=\"mv-kropp\" id=\"mv-kropp\"><p class=\"mv-tomt\">Velg en samtale, eller start en ny med \u00ab\uff0b Ny\u00bb.</p></div>\n          <div class=\"mv-vedlegg\" id=\"mv-vedlegg\" hidden></div>\n          <div class=\"mv-skriv\" id=\"mv-skriv\" hidden><button type=\"button\" id=\"mv-legg\" aria-label=\"Legg ved fil\">\ud83d\udcce</button><input type=\"file\" id=\"mv-fil\" multiple hidden><textarea id=\"mv-tekst\" rows=\"1\" placeholder=\"Skriv en melding \u2026\" aria-label=\"Melding\"></textarea><button type=\"button\" class=\"mv-send\" id=\"mv-send\" aria-label=\"Send\">\u27a4</button></div>\n        </section>\n      </div>\n      <dialog class=\"tv-dialog\" id=\"mv-dialog\">\n        <div class=\"stack\">\n          <h3 style=\"margin:0\">Ny samtale</h3>\n          <p class=\"muted small\" style=\"margin:0\">Du kan skrive til medstudenter i gruppene dine og til dem du deler en StudySmart-tavle med. Velg \u00e9n for en direkte samtale, eller flere for en gruppe. Du kan ogs\u00e5 lage en kollokviegruppe og dele koden.</p>\n          <input type=\"search\" id=\"mv-ksok\" placeholder=\"S\u00f8k etter navn \u2026\" aria-label=\"S\u00f8k etter kontakt\">\n          <div class=\"mv-kontakter\" id=\"mv-kontakter\"></div>\n          <label>Navn p\u00e5 gruppen</label><input id=\"mv-gnavn\" maxlength=\"80\" placeholder=\"F.eks.: Kollokvie erstatningsrett\">\n          <div class=\"tv-knapper\"><button type=\"button\" class=\"btn ghost\" id=\"mv-davbryt\">Avbryt</button><span class=\"mm-fyll\"></span><button type=\"button\" class=\"btn\" id=\"mv-start\">Lag kollokviegruppe</button></div>\n        </div>\n      </dialog>\n    </div>\n    <div class=\"tabpane\" data-pane=\"lysbilder\" hidden>\n      <section class=\"panel stack fm\">\n        <label for=\"fm-fag\">Fag</label><select id=\"fm-fag\" class=\"fag-sel\"></select>\n        <label class=\"vedlegg-knapp\"><input type=\"file\" id=\"fm-fil\" accept=\"application/pdf,.pdf\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 16V4M6 10l6-6 6 6M4 20h16\"/></svg><span>Last opp lysbildene fra foreleser (PDF)</span></label>\n        <select id=\"fm-tidligere\" hidden><option value=\"\">\u00c5pne en tidligere forelesning \u2026</option></select>\n        <p class=\"muted small\" id=\"fm-status\"></p>\n        <div id=\"fm-visning\" hidden>\n          <div class=\"fm-nav\"><button type=\"button\" id=\"fm-forrige\" aria-label=\"Forrige lysbilde\">\u2039</button><span id=\"fm-side\">1 / 1</span><button type=\"button\" id=\"fm-neste\" aria-label=\"Neste lysbilde\">\u203a</button></div>\n          <div class=\"fm-lerret\"><canvas id=\"fm-canvas\"></canvas></div>\n          <label for=\"fm-notat\">Dine notater til lysbilde <span id=\"fm-nr\">1</span></label>\n          <textarea id=\"fm-notat\" rows=\"6\" placeholder=\"Skriv mens foreleseren snakker. Notatene lagres automatisk og kommer med i notatarket.\"></textarea>\n          <div class=\"row-btns\"><button type=\"button\" class=\"btn ghost\" id=\"fm-forklar\">Forklar lysbildet</button></div>\n          <article class=\"panel answer\" id=\"fm-svar\" hidden></article>\n          <div class=\"fm-eksport\">\n            <h3>Notatark til nedlasting</h3>\n            <label for=\"fm-oppsett\">Oppsett</label>\n            <select id=\"fm-oppsett\"><option value=\"1\">Ett lysbilde per side, linjer under</option><option value=\"2\" selected>To lysbilder per side, linjer ved siden av</option><option value=\"3\">Tre lysbilder per side, smale linjer</option></select>\n            <button type=\"button\" class=\"btn\" id=\"fm-pdf\">Last ned notatark (PDF)</button>\n            <p class=\"muted small\">Skriv videre i GoodNotes, Notability, OneNote eller p\u00e5 papir. Notatene du har skrevet her, st\u00e5r allerede p\u00e5 linjene.</p>\n          </div>\n        </div>\n      </section>\n    </div>\n    <div class=\"tabpane\" data-pane=\"kort123\" hidden>\n      <form class=\"panel stack\" id=\"k3-form\">\n        <label for=\"k3-fag\">Fag</label><select id=\"k3-fag\" class=\"fag-sel\"></select>\n        <label for=\"k3-tema\">Begrep eller regel</label><input id=\"k3-tema\" required placeholder=\"F.eks.: Culpa, adekvans, identifikasjon\">\n        <div class=\"qz-temaer\" id=\"k3-temaer\"></div>\n        <div class=\"cost\"><span>Kostnad</span><strong data-cost=\"kort123\"></strong></div>\n        <button class=\"btn\" type=\"submit\">Lag kortet</button>\n      </form>\n      <div id=\"k3-ut\" hidden></div>\n      <details class=\"panel qz-mine\" id=\"k3-mine\"><summary><strong>Mine 1-2-3-kort</strong></summary><ul id=\"k3-liste\"></ul></details>\n    </div>\n    <div class=\"tabpane\" data-pane=\"quiz\" hidden>\n      <div class=\"spill\" id=\"spill\"></div>\n      <form class=\"panel stack\" id=\"qz-form\">\n        <label for=\"qz-fag\">Fag</label><select id=\"qz-fag\" class=\"fag-sel\"></select>\n        <label for=\"qz-tema\">Tema</label><input id=\"qz-tema\" required placeholder=\"F.eks.: Culpa og arbeidsgiveransvar\">\n        <div class=\"qz-temaer\" id=\"qz-temaer\"></div>\n        <label for=\"qz-antall\">Omfang</label>\n        <select id=\"qz-antall\"><option value=\"5\">Kort: 5 sp\u00f8rsm\u00e5l og 10 kort</option><option value=\"8\" selected>Vanlig: 8 sp\u00f8rsm\u00e5l og 12 kort</option><option value=\"12\">Grundig: 12 sp\u00f8rsm\u00e5l og 20 kort</option></select>\n        <div class=\"cost\"><span>Kostnad</span><strong data-cost=\"quiz\"></strong></div>\n        <button class=\"btn\" type=\"submit\">Lag quiz og flashcards</button>\n      </form>\n      <div id=\"qz-ut\"></div>\n      <details class=\"panel qz-mine\" id=\"qz-mine\"><summary><strong>Mine quizer og kortstokker</strong></summary><ul id=\"qz-liste\"></ul></details>\n    </div>\n    <div class=\"tabpane\" data-pane=\"podcast\" hidden>\n      <form class=\"panel stack\" id=\"pc-form\">\n        <label for=\"pc-fag\">Fag</label><select id=\"pc-fag\" class=\"fag-sel\"></select>\n        <label for=\"pc-tema\">Tema</label><input id=\"pc-tema\" required placeholder=\"F.eks.: Adekvat \u00e5rsakssammenheng\">\n        <div class=\"qz-temaer\" id=\"pc-temaer\"></div>\n        <div class=\"cost\"><span>Kostnad</span><strong data-cost=\"podcast\"></strong></div>\n        <button class=\"btn\" type=\"submit\">Lag podcastepisode</button>\n        <p class=\"muted small\">Finnes det allerede en innspilt lydbok om temaet i Lexias b\u00f8ker, f\u00e5r du den f\u00f8rst, gratis. Ellers lager Navigo en episode med to stemmer som leses opp p\u00e5 enheten din.</p>\n      </form>\n      <div id=\"pc-ut\"></div>\n      <details class=\"panel qz-mine\" id=\"pc-mine\"><summary><strong>Mine podcaster</strong></summary><ul id=\"pc-liste\"></ul></details>\n    </div>\n    <div class=\"tabpane\" data-pane=\"kollokvie\" hidden>\n      <section class=\"panel stack dg\" id=\"dg\">\n        <h3>Faglig dugnad i kollokviegruppa</h3>\n        <p class=\"muted small\">Fordel forberedelsene f\u00f8r neste kollokvie. Alle i gruppa f\u00e5r beskjed i Meldinger, og oppgavene kommer i kalenderen.</p>\n        <div id=\"dg-innhold\"><p class=\"muted small\">Henter gruppene dine \u2026</p></div>\n      </section>\n      <p class=\"muted\">F\u00e5 et ferdig opplegg for kollokviegruppen: tidsplan, case, dr\u00f8ftelsessp\u00f8rsm\u00e5l og fasit i stikkord.</p>\n      <form class=\"panel stack tool-form\" data-tool=\"kollokvie\" id=\"t-kollokvie\">\n<label>Fag</label><select name=\"fag\" class=\"fag-sel\"></select>\n      <label>Tema</label><input name=\"tema\" required placeholder=\"F.eks.: Kontraktsbrudd og prisavslag\">\n      <label>Antall deltakere</label><input name=\"antall\" type=\"number\" min=\"2\" max=\"12\" value=\"4\">\n      <label>Varighet (minutter)</label><input name=\"minutter\" type=\"number\" min=\"30\" max=\"240\" step=\"15\" value=\"90\">\n      <div class=\"cost\"><span>Kostnad</span><strong data-cost=\"kollokvie\"></strong></div>\n      <button class=\"btn\" type=\"submit\">Lag opplegget</button>\n    </form>\n    <article class=\"panel answer tool-out\" hidden></article>\n    </div>\n  </section>\n\n  <!-- Kort 6 -->\n  <section class=\"view\" id=\"view-kort6\" hidden>\n    <a class=\"back\" href=\"#hjem\" data-view=\"hjem\">\u2190 Alle tjenester</a>\n    <h1>Pensumb\u00f8ker og bokpakker</h1>\n    <section class=\"verdi intro\" data-verdi=\"kort6\"></section>\n    <p class=\"muted\">Lexias multimedieb\u00f8ker dekker pensum med tekst, filmer, podkaster og oppgaver. Her ser du hvilke du har, og kan be om et personlig tilbud p\u00e5 resten.</p>\n    <div class=\"panel sem-pick\">\n      <h2>Finn litteraturen for ditt semester</h2>\n      <div class=\"sem-rad\">\n        <label>L\u00e6rested<select id=\"k6-sted\"><option value=\"\">Velg l\u00e6rested</option></select></label>\n        <label>Studieprogram<select id=\"k6-prog\"><option value=\"\">Velg studieprogram</option></select></label>\n        <label>Semester<select id=\"k6-sem\"><option value=\"\">Alle semestre</option></select></label>\n      </div>\n      <p class=\"muted small\" id=\"k6-sem-info\">Velg l\u00e6rested og semester, s\u00e5 viser vi pensumpakken med de fysiske b\u00f8kene og multimedieb\u00f8kene som passer.</p>\n    </div>\n    <h2 class=\"sub\">Pensumpakker med fysiske b\u00f8ker</h2>\n    <p class=\"muted small\">Pakkene inneholder de fysiske pensumb\u00f8kene for semesteret, samlet til \u00e9n pris. <a id=\"k6-alle-fysiske\" href=\"#\" target=\"_blank\" rel=\"noopener\">Se alle fysiske b\u00f8ker</a></p>\n    <ul class=\"books shop pakker\" id=\"k6-pakker\"><li class=\"laster\">henter pensumpakker \u2026</li></ul>\n    <h2 class=\"sub\">Multimedieb\u00f8ker</h2>\n    <ul class=\"books shop\" id=\"k6-books\"></ul>\n    <form class=\"panel stack\" id=\"offer-form\">\n      <h2>Be om et personlig tilbud</h2>\n      <p>Skal du kj\u00f8pe <strong>to eller flere b\u00f8ker</strong>, gir salgsteamet deg et personlig tilbud. Tilbudet tar hensyn til b\u00f8kene du allerede eier, s\u00e5 du betaler ikke for det samme to ganger.</p>\n      <div class=\"selgere\" id=\"selgere\"></div>\n      <p class=\"sub\">Velg b\u00f8kene og pakkene du vil ha tilbud p\u00e5</p>\n      <div class=\"velg-boker\" id=\"offer-books\"></div>\n      <p class=\"tellr\" id=\"offer-count\" role=\"status\">Ingen valgt enn\u00e5. Velg minst to.</p>\n      <label>Melding (valgfritt)</label><textarea name=\"melding\" rows=\"3\" placeholder=\"F.eks.: Jeg tar 2. studie\u00e5r og trenger ogs\u00e5 fysiske b\u00f8ker.\"></textarea>\n      <button class=\"btn\" type=\"submit\">Send foresp\u00f8rselen</button>\n      <p class=\"muted small\" id=\"offer-msg\" role=\"status\"></p>\n    </form>\n  </section>\n\n  <!-- Plassholder for kort 3\u20136 -->\n  <section class=\"view\" id=\"view-kort\" hidden>\n    <a class=\"back\" href=\"#hjem\" data-view=\"hjem\">\u2190 Alle tjenester</a>\n    <h1 id=\"kort-title\"></h1>\n    <div class=\"panel\"><p id=\"kort-text\"></p></div>\n    <section class=\"verdi\" id=\"kort-verdi\"></section>\n  </section>\n\n  <!-- Min side -->\n  <section class=\"view\" id=\"view-min-side\" hidden>\n    <h1>Min side</h1>\n    <div class=\"grid two\">\n      <div class=\"panel stack\">\n        <h2>KI-kreditter</h2>\n        <p class=\"big\" id=\"ms-saldo\">henter \u2026</p>\n        <p class=\"muted small\" id=\"ms-abonnement\"></p>\n        <button type=\"button\" class=\"btn\" id=\"buy-credits\" data-kjop-kreditter>Kj\u00f8p flere kreditter</button>\n      </div>\n      <div class=\"panel stack\">\n        <h2>Multimedieb\u00f8kene dine</h2>\n        <ul class=\"books\" id=\"ms-books\"></ul>\n      </div>\n    </div>\n    <div class=\"panel stack\" id=\"ressursbank\">\n      <h2>Ressursbanken din</h2>\n      <p class=\"muted small\">Alt du har f\u00e5tt og betalt for i Navigo \u2013 svar, studieplaner, Lovdata-veiledninger, tankekart, kollokvieopplegg og skriver\u00e5d \u2013 lagres automatisk her. Ingenting g\u00e5r tapt, og ressursbanken vokser for hvert semester s\u00e5 lenge du har tilgang. Notater og filer finner du i studierommet.</p>\n      <div class=\"rb-filter\" id=\"rb-filter\"></div>\n      <div class=\"rb-liste\" id=\"rb-liste\"><p class=\"laster\">henter \u2026</p></div>\n    </div>\n    <div class=\"panel stack\">\n      <h2>Aktivitetslogg</h2>\n      <ul class=\"log\" id=\"ms-log\"></ul>\n    </div>\n    <button class=\"btn ghost\" id=\"logout\">Logg ut</button>\n  </section>\n  <!-- Om tjenesten: bare p\u00e5 hjemsiden (innlogging og oversikten), nederst -->\n  <section id=\"om-navigo\" class=\"om\" hidden>\n    <div class=\"panel stack\">\n      <p class=\"eyebrow-in\">Om tjenesten</p>\n      <h2>Din personlige KI-studieveileder i rettsvitenskap</h2>\n      <p>Navigo kartlegger hva du kan, hva du vil oppn\u00e5 og hvor mye tid du har. Deretter lager den en studieplan for deg, svarer p\u00e5 juridiske sp\u00f8rsm\u00e5l og hjelper deg med oppgaver og notater. Svarene bygger p\u00e5 Lexias multimedieb\u00f8ker og viser deg rett til riktig kapittel.</p>\n      <ul>\n        <li><strong>Seks tjenester:</strong> juridiske sp\u00f8rsm\u00e5l, studieplan for hele faget, oppgaveskriving, Lovdata, digitalt studierom og pensumb\u00f8ker.</li>\n        <li><strong>Tre l\u00e6ringsfaser:</strong> oppstart, underveis og SOS eksamenshjelp.</li>\n        <li><strong>KI-kreditter:</strong> du ser prisen f\u00f8r du sender, og saldoen er den samme som i multimedieb\u00f8kene og Oppgaveretteren.</li>\n      </ul>\n      <p class=\"muted small\">Navigo er et verkt\u00f8y for studiearbeidet og skal ikke brukes p\u00e5 eksamen.</p>\n      <hr>\n      <p class=\"eyebrow-in\">Utviklet av</p>\n      <h2>Professor dr. juris og advokat Morten Kjelland</h2>\n      <p>Morten Kjelland har v\u00e6rt professor siden 2013 og har arbeidet i over 20 \u00e5r ved Universitetet i Oslo. I dag er han professor II ved Universitetet i Agder og ansatt ved H\u00f8yskolen Kristiania. Han er forfatter av l\u00e6reboken \u00abErstatningsrett \u2013 en l\u00e6rebok\u00bb (3. utg., Universitetsforlaget) og st\u00e5r bak Lexias multimedieb\u00f8ker i Jusshack-serien.</p>\n      <p>Han holder ogs\u00e5 kurs i forsvarlig KI-bruk ved universiteter og h\u00f8yskoler. Navigo bygger p\u00e5 den samme faglige kvalitetssikringen: KI-en svarer med utgangspunkt i kontrollert fagstoff, ikke tilfeldige kilder fra nettet.</p>\n      <p class=\"muted small\">Sp\u00f8rsm\u00e5l? Skriv til <a href=\"mailto:support@lexiaeducation.no\">support@lexiaeducation.no</a>.</p>\n    </div>\n  </section>\n</main>"+"</div>";
window.NAVIGO_ROOT=root;
// Navigo \u2013 klientoppsett.
// Bare offentlige verdier her (Supabase-URL og publishable/anon-n\u00f8kkel). Aldri service-n\u00f8kler.
// St\u00e5r URL eller n\u00f8kkel tom, kj\u00f8rer appen i demomodus med eksempeldata.
window.NAVIGO_CONFIG = {
  supabaseUrl: "https://fvcexxzoxzlrazbqekkq.supabase.co",
  supabaseAnonKey: "sb_publishable_G6jASvkFbySnZMX042hEsA_9INasZLG", // offentlig n\u00f8kkel (publishable)
  schema: "navigo",
  // Kj\u00f8pslenker hentes i drift fra navigo.app_config.purchase_links; disse er reserve.
  purchaseLinks: {
    navigo: "https://www.lexiaeducation.no/products/263788-Navigo-Study-Smart",
    kreditter: "https://www.lexiaeducation.no/products/263788-Navigo-Study-Smart",
    oppgaveretter: "https://www.lexiaeducation.no/products/262709-Jusshack-Oppgaveretter"
  },
  // P\u00e5fyll av KI-kreditter (samme kredittbeholdning som multimedieb\u00f8kene, Simplero credit 6981).
  kredittpakker: [
    { navn: "Liten p\u00e5fyllspakke", antall: "10 kreditter", pris: "249 kroner", merke: "", url: "https://www.lexiaeducation.no/products/262216" },
    { navn: "Stor p\u00e5fyllspakke", antall: "25 kreditter", pris: "499 kroner", merke: "Lavest kredittpris", url: "https://www.lexiaeducation.no/products/262217" },
    { navn: "M\u00e5nedskort 5", antall: "5 kreditter i m\u00e5neden", pris: "129 kroner/mnd", merke: "", url: "https://www.lexiaeducation.no/products/263126" },
    { navn: "M\u00e5nedskort 10", antall: "10 kreditter i m\u00e5neden", pris: "239 kroner/mnd", merke: "Mest brukt", url: "https://www.lexiaeducation.no/products/263127" },
    { navn: "Selvvalgt antall", antall: "Velg antallet selv", pris: "27 kroner per kreditt", merke: "", url: "https://www.lexiaeducation.no/products/256888" }
  ],
  // Bokkatalog (statisk \u00f8yeblikksbilde 25.10.2026, vises straks; oppdateres fra navigo-ki \u00abkatalog\u00bb i bakgrunnen).
  bokkatalog: [{"tittel": "Arverett: enkelt forklart", "byline": "Red. Morten Kjelland (2026)", "url": "https://arverett-enkelt-forklart.simplerosites.com", "cover": "https://us.simplerousercontent.net/uploads/asset/file/15374363/kortbilde.jpg", "kjop": "https://www.lexiaeducation.no/products/250379-Arverett-enkelt-forklart"}, {"tittel": "Avtalerett: enkelt forklart", "byline": "Red. Morten Kjelland (2026)", "url": "https://jusshack-avtalerett.simplerosites.com", "cover": "https://us.simplerousercontent.net/uploads/asset/file/15374364/kortbilde.jpg", "kjop": "https://www.lexiaeducation.no/products/253667-Avtalerett-enkelt-forklart"}, {"tittel": "Erstatningsrett: enkelt forklart", "byline": "Morten Kjelland (2026)", "url": "https://ebok-erstatningsrett.mysimplero.com", "cover": "https://us.simplerousercontent.net/uploads/asset/file/15374365/kortbilde.jpg", "kjop": "https://www.lexiaeducation.no/products/206446-Erstatningsrett-enkelt-forklart"}, {"tittel": "Familierett: enkelt forklart", "byline": "Red. Morten Kjelland (2026)", "url": "https://jusshack-familierett.lexiaeducation.no", "cover": "https://us.simplerousercontent.net/uploads/asset/file/15374366/kortbilde.jpg", "kjop": "https://www.lexiaeducation.no/products/245212-Familierett-enkelt-forklart"}, {"tittel": "Helserett: enkelt forklart", "byline": "Morten Kjelland (2026)", "url": "https://helserettsportalen.lexiaeducation.no", "cover": "https://us.simplerousercontent.net/uploads/asset/file/15374367/kortbilde.jpg", "kjop": "https://www.lexiaeducation.no/products/246772-Helserett-enkelt-forklart"}, {"tittel": "Innf\u00f8ring i juridisk metode og oppgaveteknikk: enkelt forklart", "byline": "Morten Kjelland (2026)", "url": "https://jusshack-metode-oppgaveteknikk.lexiaeducation.no", "cover": "https://us.simplerousercontent.net/uploads/asset/file/15374368/kortbilde.jpg", "kjop": "https://www.lexiaeducation.no/products/235197-Innfring-i-juridisk-metode-og"}, {"tittel": "Obligasjonsrett: enkelt forklart", "byline": "Morten Kjelland (red.) (2026)", "url": "https://jusshack-obligasjonsrett.simplerosites.com", "cover": "https://us.simplerousercontent.net/uploads/asset/file/15374370/kortbilde.jpg", "kjop": "https://www.lexiaeducation.no/products/259202-Obligasjonsrett-enkelt-forklart"}],
  // Semesterkart for kort 6 (veiledende; emneplanene varierer mellom l\u00e6restedene). Titler m\u00e5 samsvare med bokkatalogen.
  semesterkart: [
    { id: "1", navn: "1. semester", boker: ["Innf\u00f8ring i juridisk metode og oppgaveteknikk: enkelt forklart", "Familierett: enkelt forklart", "Arverett: enkelt forklart"] },
    { id: "2", navn: "2. semester", boker: ["Avtalerett: enkelt forklart", "Obligasjonsrett: enkelt forklart", "Erstatningsrett: enkelt forklart", "Innf\u00f8ring i juridisk metode og oppgaveteknikk: enkelt forklart"] },
    { id: "3-4", navn: "3.\u20134. semester", boker: ["Obligasjonsrett: enkelt forklart", "Erstatningsrett: enkelt forklart", "Avtalerett: enkelt forklart"] },
    { id: "5-6", navn: "5.\u20136. semester", boker: ["Erstatningsrett: enkelt forklart", "Helserett: enkelt forklart", "Innf\u00f8ring i juridisk metode og oppgaveteknikk: enkelt forklart"] },
    { id: "master", navn: "Masteremner og valgfag", boker: ["Helserett: enkelt forklart", "Erstatningsrett: enkelt forklart", "Familierett: enkelt forklart", "Arverett: enkelt forklart"] }
  ],
  // Salgsteamet (bilder fra medarbeidersiden).
  salgsteam: [
    { navn: "Tara Eslami Mokri", epost: "tara@lexiaeducation.no", bilde: "https://us.simplerousercontent.net/uploads/asset/file/15099240/Tara-Eslami-Mokri-400-x-400-.png" },
    { navn: "Ingrid K\u00e5sa", epost: "ingrid@lexiaeducation.no", bilde: "https://img.simplerousercontent.net/scaled_image/15284690/edits/15284693/1716c107e06d84d3837262429a83eceae436621f/Ingrid-Kaasa-768w-768h.png" }
  ],
  alleFysiskeBoker: "https://www.lexiaeducation.no/products",
  // Kredittsatser (pkt. 12 i konseptdokumentet). Speiles i navigo.app_config.credit_rates.
  // Lexia-autentikatoren: \u00e9n enhet om gangen og godkjenning i Lexia-appen (edge-funksjonen enhetslas).
  // av: true sl\u00e5r den av. kunFor: ["e-post"] begrenser den til testbrukere.
  enhetslas: { skript: "https://ubxheouiakwplbwyklpk.supabase.co/functions/v1/enhetslas/skript.js" },
  creditRates: {
    svar: { kort: 0.2, standard: 0.4, omfattende: 0.8 },
    tillegg: 0.1,
    kartlegging: 0.5,
    plan: 0.8,
    justering: 0.2,
    lovdata: 0.3,
    merknader: 0.4,
    ulovfestet: 0.4,
    vedlegg: 0.1,
    notatstruktur: 0.4,
    notatsystem: 0.6,
    lysbilde: 0.1,
    tankekart: 0.3,
    kollokvie: 0.5,
    notatkontroll: 0.4,
    quiz: 0.2,
    kort123: 0.2,
    podcast: 0.3
  }
};

function run(){
/* Navigo \u2013 Study Smart \u00b7 klient (grunnmur v0.1)
 * \u00c9n fil uten byggesteg. Datalaget har to implementasjoner:
 *  - Demo: eksempeldata i minnet (n\u00e5r config mangler URL/n\u00f8kkel, eller ?demo i adressen)
 *  - Live: Supabase (skjema navigo) + Edge Function navigo-ki for KI, saldo og kredittrekk.
 * Simplero er sannhetskilden for kj\u00f8p og kreditter; Supabase speiler tilgang (se docs/KOBLINGSPLAN.md).
 */
(function () {
  "use strict";
  const CFG = window.NAVIGO_CONFIG || {};
  const RATES = CFG.creditRates;
  const DEMO = !CFG.supabaseUrl || !CFG.supabaseAnonKey || /[?&]demo\b/.test(location.search);

  // I Simplero rendres appen i en Shadow DOM (se tools/build-simplero.mjs); ellers brukes dokumentet.
  const ROOT = window.NAVIGO_ROOT || document;
  const $ = (s, el = ROOT) => el.querySelector(s);
  const $$ = (s, el = ROOT) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = (n) => (Math.round(n * 10) / 10).toLocaleString("nb-NO", { minimumFractionDigits: n % 1 ? 1 : 0, maximumFractionDigits: 1 });

  /* ---------- Kredittberegning (ren funksjon, testes i tests/) ---------- */
  function estimateAnswerCost(length, extras) {
    const base = RATES.svar[length] ?? RATES.svar.standard;
    return Math.round((base + extras * RATES.tillegg) * 10) / 10;
  }
  window.NavigoCost = { estimateAnswerCost };

  /* ---------- Kortene ---------- */
  const ICON = {
    kort1: '<path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3.5 20.5l1.4-4.8A8.5 8.5 0 1 1 21 11.5z"/><path d="M9.8 9.3a2.3 2.3 0 1 1 3.2 2.1c-.6.3-1 .8-1 1.4v.5"/><path d="M12 16.2v.1"/>',
    kort2: '<circle cx="12" cy="12" r="9"/><path d="M15.6 8.4l-2.1 5.1-5.1 2.1 2.1-5.1z"/><path d="M12 3v1.6M12 19.4V21M3 12h1.6M19.4 12H21"/>',
    kort3: '<path d="M4 20l1.4-5.2L15.6 4.6a2 2 0 0 1 2.8 0l1 1a2 2 0 0 1 0 2.8L9.2 18.6z"/><path d="M13.8 6.4l3.8 3.8"/><path d="M13 20h7"/>',
    kort4: '<path d="M12 3.5v17M8 20.5h8M5 7h14"/><path d="M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>',
    kort5: '<path d="M9.2 17.5h5.6M10 20.5h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5.8 1.1.8 1.8v1.9h5.6v-1.9c0-.7.3-1.3.8-1.8A6 6 0 0 0 12 3z"/>',
    kort6: '<rect x="3" y="4" width="4.5" height="16" rx="1"/><rect x="8.5" y="4" width="4.5" height="16" rx="1"/><path d="M14.6 5.6l4-1 3.6 14.4-4 1z"/><path d="M3 8h4.5M8.5 8H13M3 16h4.5M8.5 16H13"/>'
  };
  const CARDS = [
    { id: "kort1", no: 1, title: "F\u00e5 svar p\u00e5 juridiske sp\u00f8rsm\u00e5l", cta: "Still et sp\u00f8rsm\u00e5l",
      txt: "Skriv sp\u00f8rsm\u00e5let med dine egne ord. Du velger hvor grundig svaret skal v\u00e6re, og om det skal ha eksempler, eksamenstips og \u00f8vingsoppgaver. Svaret viser deg til riktig kapittel i Lexias multimedieb\u00f8ker." },
    { id: "kort2", no: 2, title: "F\u00e5 kontroll p\u00e5 hele faget", cta: "Lag studieplan",
      txt: "Fortell hvilket fag du tar, hva du kan og hvor mye tid du har. Navigo lager en personlig studieplan uke for uke fram mot eksamen, med kapitler, repetisjon og \u00f8ving." },
    { id: "kort3", no: 3, title: "Skriv bedre juridiske oppgaver", cta: "G\u00e5 til oppgaver",
      txt: "Lever besvarelsen i Oppgaveretteren og f\u00e5 konkrete r\u00e5d om problemstilling, struktur, metode og dr\u00f8ftelse. Du ser hva som trekker opp, og hva du b\u00f8r gj\u00f8re annerledes neste gang." },
    { id: "kort4", no: 4, title: "F\u00e5 kontroll p\u00e5 Lovdata", cta: "Se veiledningen",
      txt: "L\u00e6r hva du lovlig kan understreke og innarbeide i lovsamlingen til eksamen, og hvordan du finner fram raskt i lover, forskrifter og dommer p\u00e5 Lovdata." },
    { id: "kort5", no: 5, title: "Mitt digitale studierom", cta: "\u00c5pne studierommet",
      txt: "Samle notater, tankekart og studietavle p\u00e5 ett sted. Bruk N\u00f8tteknekkeren n\u00e5r du st\u00e5r fast, og del arbeid med kollokviegruppen din." },
    { id: "kort6", no: 6, title: "Pensumb\u00f8ker og bokpakker", cta: "Finn b\u00f8kene",
      txt: "Se hvilke multimedieb\u00f8ker og fysiske b\u00f8ker som dekker faget ditt, hvilke du allerede har tilgang til, og be om et personlig tilbud p\u00e5 pensum." }
  ];
  const PLACEHOLDER = {};
  const FAG = ["Erstatningsrett", "Avtalerett", "Obligasjonsrett", "Familierett", "Arverett", "Helserett", "Juridisk metode og oppgaveteknikk"];

  /* ---------- Datalag ---------- */
  const Demo = {
    user: { email: "student@eksempel.no", fornavn: "Ingrid" },
    saldo: 10,
    abonnement: { variant: "Semester", til: "2027-04-25" },
    books: [
      { tittel: "Erstatningsrett: enkelt forklart", aktiv: true, url: "#" },
      { tittel: "Innf\u00f8ring i juridisk metode og oppgaveteknikk", aktiv: true, url: "#" },
      { tittel: "Obligasjonsrett: enkelt forklart", aktiv: false, url: "#" },
      { tittel: "Avtalerett: enkelt forklart", aktiv: false, url: "#" }
    ],
    log: [
      { tid: "2026-10-24", hva: "Sp\u00f8rsm\u00e5l: Adekvat \u00e5rsakssammenheng", kreditter: 0.5 },
      { tid: "2026-10-22", hva: "Studieplan: Erstatningsrett, eksamen 4. desember", kreditter: 1.3 },
      { tid: "2026-10-20", hva: "Semesterabonnement fornyet (+10 kreditter)", kreditter: 10 }
    ],
    async session() { return this.user; },
    async login() { return { ok: true }; },
    async logout() {},
    async status() { return { saldo: this.saldo, abonnement: this.abonnement, books: this.books, log: this.log }; },
    async lovsok(q) {
      const alle = [["skl. \u00a7 3-1", "Skadeserstatningsloven \u00a7 3-1", "erstatning for skade p\u00e5 person"], ["skl. \u00a7 3-2", "Skadeserstatningsloven \u00a7 3-2", "menerstatning", true], ["skl. \u00a7 3-5", "Skadeserstatningsloven \u00a7 3-5", "oppreisning"], ["skl. \u00a7 5-1", "Skadeserstatningsloven \u00a7 5-1", "skadelidtes medvirkning"], ["fkjl. \u00a7 29", "Forbrukerkj\u00f8psloven \u00a7 29", "Retting og omlevering (avhjelp)"], ["avtl. \u00a7 36", "Avtaleloven \u00a7 36", ""]];
      const n = q.toLowerCase().replace(/[\s.]/g, "");
      return { forslag: alle.filter((a) => (a[0] + a[1] + a[2]).toLowerCase().replace(/[\s.]/g, "").includes(n)).map(([verdi, tekst, under, kb]) => ({ verdi, tekst, under, kb: !!kb })) };
    },
    async part(navn) {
      await new Promise((r) => setTimeout(r, 300 + Math.random() * 900));
      if (navn === "katalog") return { books: CFG.bokkatalog || [], pakker: [
        { tittel: "Pensumpakke UiO: Rettsvitenskap 1. semester", byline: "Universitetet i Oslo (UiO) \u00b7 F\u00f8rste semester \u00b7 6 b\u00f8ker", cover: null, kjop: "#" },
        { tittel: "Pensumpakke UiO: Rettsvitenskap 2. semester", byline: "Universitetet i Oslo (UiO) \u00b7 Andre semester \u00b7 5 b\u00f8ker", cover: null, kjop: "#" },
        { tittel: "Pensumpakke UiB: Rettsvitenskap 2. semester", byline: "Universitetet i Bergen (UiB) \u00b7 Andre semester \u00b7 6 b\u00f8ker", cover: null, kjop: "#" } ] };
      if (navn === "saldo") return { fornavn: this.user.fornavn, saldo: this.saldo };
      if (navn === "abonnement") return { abonnement: this.abonnement };
      if (navn === "boker") return { eier: (CFG.bokkatalog || []).filter((b, i) => i % 3 === 2).map((b) => b.url) };
      if (navn === "logg") return { log: this.log };
      if (navn === "ressursbank") return { rader: [
        { id: "s1", type: "svar", tittel: "Sp\u00f8rsm\u00e5l: Hva menes med adekvat \u00e5rsakssammenheng?", fag: "Erstatningsrett", html: "<p>Eksempelsvar i demomodus.</p>", kilder: [], kreditter: 0.4, tid: "2026-10-24" },
        { id: "r1", type: "tankekart", tittel: "Tankekart: menerstatning", fag: "Erstatningsrett", html: "<ul><li>Menerstatning<ul><li>Vilk\u00e5r</li></ul></li></ul>", kilder: [], kreditter: 0.3, tid: "2026-10-23" },
        { id: "p1", type: "plan", tittel: "Studieplan: Erstatningsrett", fag: "Erstatningsrett", html: "<p>Uke 1 \u2026</p>", kilder: [], kreditter: 0, tid: "2026-10-22" } ] };
      return {};
    },
    rom: [{ id: 1, type: "notat", tittel: "Adekvans \u2013 hovedpunkter", fag: "Erstatningsrett", innhold: "P\u00e5regnelighet, ikke for fjern og avledet. Rt. 1992 s. 64 (P-pille II).", status: "gjore" },
          { id: 2, type: "oppgave", tittel: "Les kap. 4 om adekvans", fag: "Erstatningsrett", status: "pagar" }],
    async nyttResultat() { return null; },
    async tool(p) {
      await new Promise((r) => setTimeout(r, 1200));
      const cost = toolCost(p.type);
      if (cost > this.saldo) return { error: "saldo", cost };
      this.saldo = Math.round((this.saldo - cost) * 10) / 10;
      if (p.type === "quiz") return { cost, kilder: [], html: "<p>Eksempelquiz i demomodus.</p>", data: { tittel: p.tema || "Culpa", quiz: [
        { sporsmal: "Hva er utgangspunktet for culpavurderingen?", alternativer: ["Om skadevolder kunne og burde handlet annerledes", "Om skaden var stor", "Om skadelidte var uaktsom", "Om skadevolder hadde forsikring"], riktig: 0, forklaring: "Culpa er en vurdering av om skadevolder kunne og burde ha handlet annerledes (forsvarlighetsnormen).", kilde: "Erstatningsrett: enkelt forklart \u2013 kap. 4" },
        { sporsmal: "Hvilket moment trekker mot ansvar?", alternativer: ["Lav skadeevne", "N\u00e6rliggende og billige handlingsalternativer", "Uforutsigbar hendelse", "Lang tid siden"], riktig: 1, forklaring: "Enkle og billige handlingsalternativer taler for at skadevolder burde ha handlet annerledes.", kilde: "Erstatningsrett: enkelt forklart \u2013 kap. 4" }],
        kort: [{ forside: "Culpanormen", bakside: "Forsvarlighetsnormen: hva en alminnelig fornuftig person ville gjort i situasjonen." }, { forside: "Skadeevne", bakside: "Hvor sannsynlig og alvorlig skade handlingen kunne medf\u00f8re." }] } };
      if (p.type === "ulovfestet") return { cost, kilder: [], html: "<p>Eksempel i demomodus.</p>", data: { form: "ulovfestet", tittel: "Culpaansvaret i Lovdata", regel: "Culpaansvaret", prefiks: "ULOVFESTET: Culpaansvaret", grunnlag: "Culpaansvaret er ulovfestet og bygger p\u00e5 sedvanerett og langvarig rettspraksis. Det er det alminnelige ansvarsgrunnlaget i norsk erstatningsrett.", knagger: [{ bestemmelse: "skl. \u00a7 2-1", tittel: "(Arbeidsgiveransvar.)", ord: "forsettlig eller uaktsomt", type: "forutsetter", url: "#", hvorfor: "Arbeidsgiveransvaret forutsetter at arbeidstakeren har opptr\u00e5dt uaktsomt etter den alminnelige culpanormen." }, { bestemmelse: "skl. \u00a7 5-1", tittel: "(Skadelidtes medvirkning.)", ord: "", type: "naerliggende", url: "#", hvorfor: "Medvirkningsvurderingen bygger p\u00e5 den samme aktsomhetsnormen." }], vilkar: [{ navn: "Normen", innhold: "Hva ville en forsvarlig person ha gjort i situasjonen?", dommer: [{ ref: "HR-2017-1977-A", navn: "H\u00e5rf\u00f8ner", poeng: "Skadeevnen avgj\u00f8r hvor mye som kreves.", url: "#", bok: true }] }, { navn: "Handlingsalternativer", innhold: "Fantes n\u00e6rliggende og rimelige alternativer?", dommer: [{ ref: "Rt-2008-218", navn: "Sarkom", poeng: "Nytteverdien kan heve terskelen.", url: "#", bok: true }] }], merknadKort: "ULOVFESTET: Culpaansvaret\nHR-2017-1977-A; Rt-2008-218", merknadVilkar: "ULOVFESTET: Culpaansvaret\nNormen: HR-2017-1977-A\nHandlingsalternativer: Rt-2008-218", tips: ["Bruk alltid samme prefiks, \u00abULOVFESTET:\u00bb, f\u00f8rst i merknaden.", "Ha \u00e9n hovedmerknad per regel, festet til hovedknaggen, og krysshenvisninger fra de andre knaggene.", "Ordne dommene i den rekkef\u00f8lgen vilk\u00e5rene dr\u00f8ftes."], eksamen: ["Si uttrykkelig at regelen er ulovfestet, og angi rettsgrunnlaget."] } };
      if (p.type === "kort123") return { cost, kilder: [], html: "<p>Eksempelkort i demomodus.</p>", data: { tittel: `${p.tema || "Culpa"} p\u00e5 1-2-3`, tema: p.tema || "Culpa", hva: "Culpa er det alminnelige skyldansvaret: Den som for\u00e5rsaker skade uaktsomt eller forsettlig, m\u00e5 erstatte den. Vurderingen er om skadevolderen kunne og burde ha handlet annerledes.", hvor: "Erstatningsrett, ansvarsgrunnlag. Ulovfestet hovedregel ved siden av de objektive ansvarsgrunnlagene og arbeidsgiveransvaret i skl. \u00a7 2-1.", hvorfor: ["Prevensjon: \u00e5 gi insentiv til forsvarlig opptreden.", "Rettferdighet: den som kunne ha unng\u00e5tt skaden, b\u00f8r b\u00e6re tapet.", "Handlefrihet: ingen skal svare for skader de ikke kunne bebreides for."], hvordan: ["Fastlegg normen: hva ville en forsvarlig person ha gjort?", "Dr\u00f8ft momentene: skadeevne, handlingsalternativer og normer p\u00e5 omr\u00e5det.", "Sammenlign skadevolders handling med normen.", "Konkluder i en delkonklusjon."], eksamenstips: ["Ikke hopp rett til konklusjonen: fastlegg normen f\u00f8rst.", "Bruk konkrete fakta fra oppgaven i hvert moment."], dommer: [{ ref: "HR-2017-1977-A", navn: "H\u00e5rf\u00f8ner", poeng: "Skadeevnen avgj\u00f8r hvor mye som kreves for \u00e5 unng\u00e5 skaden.", url: "#", kapittel: "Kap. 4 Skadeevne" }, { ref: "Rt-2008-218", navn: "Sarkom", poeng: "H\u00f8y nytteverdi kan heve ansvarsterskelen.", url: "#", kapittel: "Kap. 4 Det alminnelige skyldansvaret" }] } };
      if (p.type === "podcast") return { cost, kilder: [], html: "<p>Eksempelpodcast i demomodus.</p>", data: { tittel: "Culpa p\u00e5 fem minutter", replikker: [{ rolle: "A", tekst: "Velkommen! I dag skal vi snakke om culpa." }, { rolle: "B", tekst: "Culpa betyr skyld, og handler om skadevolder kunne og burde handlet annerledes." }, { rolle: "A", tekst: "Hvordan vurderer man det?" }, { rolle: "B", tekst: "Vi ser p\u00e5 momenter som skadeevne, handlingsalternativer og normer p\u00e5 omr\u00e5det." }], nokkelpunkter: ["Forsvarlighetsnormen", "Momentene", "Subsumsjonen"] } };
      if (p.type === "lysbilde") return { cost, kilder: [], html: `<p><em>Eksempel i demomodus.</em> Lysbildet handler om: ${esc(String(p.tekst || "").slice(0, 120))} \u2026</p>` };
      if (p.type === "lovdata" || p.type === "merknader") {
        const tekst = "Har skadelidte f\u00e5tt varig og betydelig skade av medisinsk art, svares s\u00e6rskilt menerstatning. Denne erstatning fastsettes under hensyn til menets medisinske art og st\u00f8rrelse og dets betydning for den personlige livsutfoldelse. Prognoser om forkortet levetid som f\u00f8lge av den ansvarsbetingende hendelsen skal ikke vektlegges ved fastsettelsen av erstatningen. Bestemmelsene i \u00a7 3-1 tredje ledd gjelder tilsvarende for s\u00e5 vidt ytelsene kan anses \u00e5 gi kompensasjon for menet.";
        const merk = [
          { ledd: 1, ord: "f\u00e5tt", henvisninger: ["Rt-1992-64"], lenker: { "Rt-1992-64": "#" }, hvorfor: "\u00c5rsakssammenheng mellom hendelsen og skaden." },
          { ledd: 1, ord: "varig", henvisninger: ["Rt-2003-841", "Rt-2003-1358"], hvorfor: "N\u00e5r et men anses som varig." },
          { ledd: 1, ord: "betydelig", henvisninger: ["Rt-2015-820", "ftrl. \u00a7 13-17"], hvorfor: "Terskelen for menerstatning." }];
        return { cost, kilder: [{ kb: true, type: "lov", tittel: "Skadeserstatningsloven \u00a7 3-2", url: "https://jusshack-kildebase.simplerosites.com/lov-skadeserstatningsloven-3-2" }, { kb: true, type: "dom", tittel: "Rt-2003-1358 Tunnelarbeider", url: "#" }], data: {
          intro: "<p><em>Eksempel i demomodus.</em> I drift lager Navigo dette med KI og Lexias multimedieb\u00f8ker som kunnskapsgrunnlag.</p>",
          bestemmelser: [{ lov: "Skadeserstatningsloven", kort: "skl.", paragraf: "\u00a7 3-2", tittel: "(menerstatning.)", kilde: "lovdata.no", url: "https://lovdata.no/lov/1969-06-13-26/%C2%A73-2", endret: "Endret ved lover 25 mai 1973 nr. 26, 18 des 1987 nr. 96, 12 mai 2015 nr. 29, 18 des 2015 nr. 124.", ledd: [tekst],
            markeringer: [{ ledd: 1, tekst: "skadelidte", kategori: "vilkar" }, { ledd: 1, tekst: "f\u00e5tt", kategori: "tolkning" }, { ledd: 1, tekst: "varig", kategori: "tolkning" }, { ledd: 1, tekst: "betydelig", kategori: "tolkning" }, { ledd: 1, tekst: "medisinsk art", kategori: "vilkar" }, { ledd: 1, tekst: "svares s\u00e6rskilt menerstatning", kategori: "hovedregel" },
              { ledd: 1, tekst: "menets medisinske art og st\u00f8rrelse", kategori: "hensyn" }, { ledd: 1, tekst: "skal ikke vektlegges", kategori: "unntak" }, { ledd: 1, tekst: "\u00a7 3-1", kategori: "henvisning" }],
            merknader: merk, koblinger: [{ bestemmelse: "skl. \u00a7 3-1", type: "krysshenvisning", hvorfor: "Menerstatning er en egen post ved siden av erstatning for \u00f8konomisk tap." }, { bestemmelse: "skl. \u00a7 5-2", type: "sammenheng", hvorfor: "Lempingsregelen kan gi lavere erstatning." }] }],
          rad: "<p>Bruk de samme fargene i alle lovene, s\u00e5 kjenner du igjen strukturen raskt p\u00e5 eksamen.</p>" } };
      }
      return { cost, html: `<p><em>Eksempel i demomodus.</em> I drift lager Navigo dette med Claude og utdrag fra Lexias b\u00f8ker (${esc(p.type)}).</p><ul><li>F\u00f8rste punkt</li><li>Andre punkt</li></ul>`, kilder: [] };
    },
    async romCall(action, p) {
      if (action === "rom_list") return { rader: this.rom.slice() };
      if (action === "rom_lagre") { if (p.id) { Object.assign(this.rom.find((r) => r.id == p.id) || {}, p); return { id: p.id }; } const id = Date.now(); this.rom.unshift({ ...p, id, type: p.type || "notat", status: p.status || "gjore" }); return { id }; }
      if (action === "rom_slett") { this.rom = this.rom.filter((r) => r.id != p.id); return { ok: true }; }
      if (action === "rom_studysmart") return { tavler: [{ id: "demo-ss", name: "Mortens tavle | Erstatningsrett", lists: [{ name: "Forelesninger", cards: [{ type: "forelesning", title: "Forelesning 3 \u2013 \u00e5rsakssammenheng" }] }, { name: "Tidligere eksamensoppgaver", color: "#c0392b", cards: [{ type: "eksamen", title: "Eksamen h\u00f8st 2025", url: "https://www.uio.no", tags: ["eksamen"], stars: 2 }] }] }] };
    },
    // Demo-meldinger: \u00e9n kollokviegruppe og \u00e9n direkte samtale, med svar etter et par sekunder
    demoMsg: { konv: [
      { id: "g1", kind: "group", name: "Kollokvie erstatningsrett", last_message_at: new Date(Date.now() - 3600e3).toISOString(), last_preview: "Skal vi ta adekvans p\u00e5 torsdag?", unread: 1, muted: false, members: [{ user_id: "demo", email: "deg@eksempel.no", display_name: "Deg" }, { user_id: "u2", email: "ida@eksempel.no", display_name: "Ida Berg" }, { user_id: "u3", email: "jonas@eksempel.no", display_name: "Jonas Lie" }] },
      { id: "d1", kind: "dm", name: null, last_message_at: new Date(Date.now() - 86400e3).toISOString(), last_preview: "Takk for notatene!", unread: 0, muted: false, members: [{ user_id: "demo", email: "deg@eksempel.no", display_name: "Deg" }, { user_id: "u2", email: "ida@eksempel.no", display_name: "Ida Berg" }] }],
      msgs: { g1: [{ id: "m1", conversation_id: "g1", user_id: "u3", body: "Hei! Har alle lest kap. 7?", created_at: new Date(Date.now() - 7200e3).toISOString(), attachments: [] }, { id: "m2", conversation_id: "g1", user_id: "u2", body: "Skal vi ta adekvans p\u00e5 torsdag?", created_at: new Date(Date.now() - 3600e3).toISOString(), attachments: [] }], d1: [{ id: "m3", conversation_id: "d1", user_id: "u2", body: "Takk for notatene!", created_at: new Date(Date.now() - 86400e3).toISOString(), attachments: [] }] }, lytter: null },
    async msgOversikt() { return JSON.parse(JSON.stringify(this.demoMsg.konv)); },
    async msgHent(cid) { return (this.demoMsg.msgs[cid] || []).slice(); },
    async msgSend(cid, uid, body, atts) {
      const m = { id: "m" + Date.now(), conversation_id: cid, user_id: uid, body, attachments: atts || [], created_at: new Date().toISOString() };
      (this.demoMsg.msgs[cid] = this.demoMsg.msgs[cid] || []).push(m); const k = this.demoMsg.konv.find((x) => x.id === cid); if (k) { k.last_message_at = m.created_at; k.last_preview = body; }
      if (this.demoMsg.lytter) setTimeout(() => { const svar = { id: "s" + Date.now(), conversation_id: cid, user_id: "u2", body: "H\u00f8res bra ut! \ud83d\udc4d", attachments: [], created_at: new Date().toISOString() }; this.demoMsg.msgs[cid].push(svar); if (k) { k.last_message_at = svar.created_at; k.last_preview = svar.body; } this.demoMsg.lytter("ny", svar); }, 2500);
      return m;
    },
    async msgSlett(id) { for (const l of Object.values(this.demoMsg.msgs)) { const m = l.find((x) => x.id === id); if (m) m.deleted_at = new Date().toISOString(); } },
    async msgLest(cid) { const k = this.demoMsg.konv.find((x) => x.id === cid); if (k) k.unread = 0; },
    async msgKontakter() { return [{ user_id: "u2", email: "ida@eksempel.no", display_name: "Ida Berg" }, { user_id: "u3", email: "jonas@eksempel.no", display_name: "Jonas Lie" }]; },
    async msgStartDm(other) { return other === "u2" ? "d1" : this.msgNyGruppe("", [other]); },
    async msgNyGruppe(gnavn, medlemmer) { const id = "g" + Date.now(); const k = await this.msgKontakter(); this.demoMsg.konv.unshift({ id, kind: "group", name: gnavn || null, last_message_at: null, last_preview: null, unread: 0, muted: false, members: [{ user_id: "demo", email: "deg@eksempel.no", display_name: "Deg" }, ...k.filter((x) => medlemmer.includes(x.user_id))] }); return id; },
    async msgKode() { return "KOLL4X7Q"; },
    async msgBliMed(kode) { if (String(kode).toUpperCase().replace(/[^A-Z0-9]/g, "") !== "KOLL4X7Q") throw new Error("Fant ingen gruppe med den koden"); return "g1"; },
    async msgDemp(cid, uid, muted) { const k = this.demoMsg.konv.find((x) => x.id === cid); if (k) k.muted = muted; },
    async msgForlat(cid) { this.demoMsg.konv = this.demoMsg.konv.filter((x) => x.id !== cid); },
    async msgLastOpp(cid, uid, fil) { return { path: "demo/" + fil.name, name: fil.name, size: fil.size, type: fil.type }; },
    async msgFilUrl() { return null; },
    async msgLytt(uid, cb) { this.demoMsg.lytter = cb; return {}; },
    async tilbud() { await new Promise((r) => setTimeout(r, 500)); return { ok: true }; },
    demoFiler: [{ name: "1729850000000-Forelesning uke 3 - adekvans.pdf", metadata: { size: 1843200 } }],
    async filer() { return this.demoFiler.slice(); },
    async lastOpp(uid, fil) { const name = Date.now() + "-" + fil.name; this.demoFiler.unshift({ name, metadata: { size: fil.size } }); return `${uid}/${name}`; },
    async filUrl() { return "#"; },
    async slettFil(uid, navn) { this.demoFiler = this.demoFiler.filter((f) => f.name !== navn); },
    async ask({ fag, sporsmal, lengde, tillegg }) {
      const cost = estimateAnswerCost(lengde, tillegg.length);
      if (cost > this.saldo) return { error: "saldo", cost };
      this.saldo = Math.round((this.saldo - cost) * 10) / 10;
      this.log.unshift({ tid: new Date().toISOString().slice(0, 10), hva: "Sp\u00f8rsm\u00e5l: " + sporsmal.slice(0, 60), kreditter: cost });
      return {
        cost,
        svar: `<p><em>Eksempelsvar i demomodus.</em> I drift henter Navigo relevante avsnitt fra multimedieboken i ${esc(fag)} og ber Claude besvare sp\u00f8rsm\u00e5let med den svarprofilen du valgte (${esc(lengde)}${tillegg.length ? ", " + tillegg.map(esc).join(", ") : ""}).</p>`,
        kilder: [{ tittel: fag + ": enkelt forklart \u2013 relevant kapittel", url: "#", aktiv: fag === "Erstatningsrett" }]
      };
    },
    async plan(p) {
      const cost = Math.round((RATES.kartlegging + RATES.plan) * 10) / 10;
      if (cost > this.saldo) return { error: "saldo", cost };
      this.saldo = Math.round((this.saldo - cost) * 10) / 10;
      const eks = (p.eksamener || []).filter((e) => e.fag && e.dato);
      const fag = eks.map((e) => e.fag).join(" + ") || "Erstatningsrett";
      const iMorgen = new Date(Date.now() + 864e5).toISOString().slice(0, 10);
      this.log.unshift({ tid: new Date().toISOString().slice(0, 10), hva: `Studieplan: ${fag}`, kreditter: cost });
      return { cost, fag, weeks: 6, days: 30, timer: p.timer, mal: p.mal,
        html: `<div class="sp"><p class="sp-sum"><em>Eksempelplan i demomodus.</em> I drift lager Navigo planen ut fra eksamensdatoene, kapitlene du har igjen og lesedagene dine, med studieteknikk fra metodeboken.</p><div class="sp-tall"><span><strong>30</strong> lesedager</span><span><strong>\u2248 60</strong> timer</span><span><strong>6</strong> uker</span></div><h3>Uke for uke</h3><details class="sp-uke" open><summary><strong>Uke 1</strong> <span class="muted small">27.10\u20132.11 \u00b7 10 timer</span><span class="sp-fokus">Oversikt og ansvarsgrunnlag</span></summary><div class="sp-dag"><h4>mandag 27.10.</h4><ul><li class="sp-okt sp-les"><span class="sp-type">Les</span><div><strong>Kap. 4 Skyldansvaret</strong> <span class="muted small">90 min \u00b7 ${esc(fag)}</span><p>Skumles f\u00f8rst, les s\u00e5 grundig med Lovdata \u00e5pen.</p></div></li><li class="sp-okt sp-oppgave"><span class="sp-type">Oppgave</span><div><strong>Praktikum med praktikumskoden</strong> <span class="muted small">30 min \u00b7 ${esc(fag)}</span></div></li></ul></div><p class="sp-test"><strong>Selvtest:</strong> Hvilke momenter inng\u00e5r i culpavurderingen?</p></details></div>`,
        okter: [{ dato: iMorgen, fag, type: "les", tittel: "Kap. 4 Skyldansvaret", detalj: "Skumles, les grundig med Lovdata.", min: 90, url: "" }] };
    },
    async planSiste() { return { plan: null, kalender: null }; },
    async dugnad(action, p) {
      const d = this.demoDugnad || (this.demoDugnad = { oppgaver: [] });
      const medlemmer = [{ id: "u1", navn: "Deg" }, { id: "u2", navn: "Ida Berg" }, { id: "u3", navn: "Jonas Lie" }];
      const typer = { miniforelesning: "Miniforelesning (10 min) om temaet", disposisjon: "Disposisjon til teorioppgave", praktikum: "L\u00f8sningsforslag til praktikum etter praktikumskoden", resyme: "Resym\u00e9 av kapittelet i boka", notater: "Felles notater fra forelesningen", sporsmal: "Gjenkallingssp\u00f8rsm\u00e5l til gruppa (quiz)", domsanalyse: "Kort analyse av en sentral dom" };
      if (action === "dugnad_fordel") p.typer.forEach((ty, i) => d.oppgaver.push({ id: Date.now() + i, mote_dato: p.dato, tema: p.tema, type: ty, ansvarlig: medlemmer[i % 3].id, frist: p.dato, ferdig: false }));
      if (action === "dugnad_oppdater") { const o = d.oppgaver.find((x) => x.id === p.id); if (o) o.ferdig = p.ferdig; }
      if (action === "dugnad_slett") d.oppgaver = d.oppgaver.filter((x) => x.id !== p.id);
      return { medlemmer, oppgaver: d.oppgaver, typer, kalender: null };
    },
    async kapitler(fag) {
      return { kapitler: Array.from({ length: 10 }, (_, i) => ({ nr: i + 1, tittel: `Kap. ${i + 1} ${fag}: tema ${i + 1}`, url: `#demo-${fag}-${i + 1}`, monster: i === 4 })) };
    }
  };

  const Live = {
    sb: null,
    // supabase-js lastes parallelt med at siden vises; alt som trenger det venter her.
    async ready() {
      if (!this.sb) {
        await (window.NAVIGO_SB || Promise.resolve());
        this.sb = window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseAnonKey, { db: { schema: CFG.schema || "navigo" } });
      }
      return this.sb;
    },
    init() {},
    async session() {
      const { data } = await (await this.ready()).auth.getSession();
      return data.session ? { id: data.session.user.id, email: data.session.user.email, fornavn: data.session.user.user_metadata?.fornavn || "" } : null;
    },
    async verify(email, token) {
      const { error } = await (await this.ready()).auth.verifyOtp({ email, token, type: "email" });
      return error ? { error: error.message } : { ok: true };
    },
    async login(email) {
      const { error } = await (await this.ready()).auth.signInWithOtp({ email, options: { emailRedirectTo: location.origin + location.pathname } });
      return error ? { error: error.message } : { ok: true };
    },
    async logout() { await (await this.ready()).auth.signOut(); },
    async fn(action, body = {}) {
      const { data, error } = await (await this.ready()).functions.invoke("navigo-ki", { body: { action, ...body } });
      if (error) {
        let msg = error.message;
        try { msg = (await error.context.json()).error || msg; } catch (_) { /* behold */ }
        throw new Error(msg);
      }
      return data;
    },
    async status() { return this.fn("status"); },
    async part(navn) { return this.fn(navn); },
    async lovsok(q) { return this.fn("lovsok", { q }); },
    async tool(p) { return this.fn("verktoy", p); },
    /* Brukes n\u00e5r forbindelsen ryker mens KI-en jobber: finn resultatet som serveren likevel lagret */
    async nyttResultat(tabell, etter, type) {
      let q = (await this.ready()).from(tabell).select("*").gt("created_at", etter).order("created_at", { ascending: false }).limit(1);
      if (type) q = q.eq("type", type);
      const { data, error } = await q;
      if (error) throw error; return (data || [])[0] || null;
    },
    async filer(uid) {
      const { data, error } = await (await this.ready()).storage.from("navigo-filer").list(uid, { limit: 200, sortBy: { column: "created_at", order: "desc" } });
      if (error) throw error; return (data || []).filter((f) => f.name && !f.name.startsWith("."));
    },
    async lastOpp(uid, fil) {
      const navn = `${uid}/${Date.now()}-${fil.name.replace(/[^\w.\-\u00e6\u00f8\u00e5\u00c6\u00d8\u00c5 ]+/g, "_")}`;
      const { error } = await (await this.ready()).storage.from("navigo-filer").upload(navn, fil, { upsert: false, contentType: fil.type || undefined });
      if (error) throw error;
      return navn;
    },
    async filUrl(uid, navn) {
      const { data, error } = await (await this.ready()).storage.from("navigo-filer").createSignedUrl(`${uid}/${navn}`, 600);
      if (error) throw error; return data.signedUrl;
    },
    async slettFil(uid, navn) { const { error } = await (await this.ready()).storage.from("navigo-filer").remove([`${uid}/${navn}`]); if (error) throw error; },
    async romCall(action, p) { return this.fn(action, p); },
    // Meldinger: samme samtaler som i Lexia StudySmart (public-skjemaet), pluss Navigos kollokviegrupper (navigo-skjemaet)
    async pub() { return (await this.ready()).schema("public"); },
    async msgOversikt() { const { data, error } = await (await this.pub()).rpc("conversations_overview"); if (error) throw error; return data || []; },
    async msgHent(cid) { const { data, error } = await (await this.pub()).from("messages").select("*").eq("conversation_id", cid).order("created_at", { ascending: false }).limit(200); if (error) throw error; return (data || []).reverse(); },
    async msgSend(cid, uid, body, atts) { const { data, error } = await (await this.pub()).from("messages").insert({ conversation_id: cid, user_id: uid, body: body || null, attachments: atts || [] }).select().single(); if (error) throw error; return data; },
    async msgSlett(id) { const { error } = await (await this.pub()).from("messages").update({ deleted_at: new Date().toISOString() }).eq("id", id); if (error) throw error; },
    async msgLest(cid) { await (await this.pub()).rpc("mark_read", { c: cid }); },
    async msgKontakter() { const { data, error } = await (await this.ready()).rpc("kontakter"); if (error) throw error; return data || []; },
    async msgStartDm(other) { const { data, error } = await (await this.ready()).rpc("start_dm", { other }); if (error) throw error; return data; },
    async msgNyGruppe(gnavn, medlemmer) { const { data, error } = await (await this.ready()).rpc("ny_gruppe", { gnavn, medlemmer }); if (error) throw error; return data; },
    async msgKode(c) { const { data, error } = await (await this.ready()).rpc("gruppekode", { c }); if (error) throw error; return data; },
    async msgBliMed(kode) { const { data, error } = await (await this.ready()).rpc("bli_med", { kode }); if (error) throw error; return data; },
    async msgDemp(cid, uid, muted) { const { error } = await (await this.pub()).from("conversation_members").update({ muted }).eq("conversation_id", cid).eq("user_id", uid); if (error) throw error; },
    async msgForlat(cid, uid) { const { error } = await (await this.pub()).from("conversation_members").delete().eq("conversation_id", cid).eq("user_id", uid); if (error) throw error; },
    async msgLastOpp(cid, uid, fil) {
      const sb = await this.ready(); const navn = fil.name.replace(/[^\w.\-\u00e6\u00f8\u00e5\u00c6\u00d8\u00c5 ]+/g, "_").slice(-80);
      const sti = `${uid}/meldinger/${cid}/${Date.now().toString(36)}-${navn}`;
      const { error } = await sb.storage.from("vedlegg").upload(sti, fil, { upsert: false, contentType: fil.type || undefined }); if (error) throw error;
      return { path: sti, name: fil.name, size: fil.size, type: fil.type };
    },
    async msgFilUrl(sti) { const { data } = await (await this.ready()).storage.from("vedlegg").createSignedUrl(sti, 3600); return data ? data.signedUrl : null; },
    async msgLytt(uid, cb) {
      const sb = await this.ready();
      return sb.channel("navigo-meldinger:" + uid)
        .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" }, (p) => cb("ny", p.new))
        .on("postgres_changes", { event: "UPDATE", schema: "public", table: "messages" }, (p) => cb("endret", p.new))
        .on("postgres_changes", { event: "UPDATE", schema: "public", table: "conversations" }, () => cb("samtale"))
        .subscribe();
    },
    async tilbud(p) { return this.fn("tilbud", p); },          // saldo (Simplero credit 6981), abonnement, b\u00f8ker, logg
    async ask(p) { return this.fn("svar", p); },
    async plan(p) { return this.fn("plan", p); },
    async kapitler(fag) { return this.fn("kapitler", { fag }); },
    async planSiste() { return this.fn("plan_siste"); },
    async dugnad(action, p) { return this.fn(action, p); }
  };

  const API = DEMO ? Demo : Live;

  /* ---------- Visninger ---------- */
  const LOCK_OPEN = '<svg class="lock open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="\u00c5pen"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/></svg>';
  const LOCK_CLOSED = '<svg class="lock closed" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Lukket"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';

  let loggedIn = false, sessionKjent = false, UID = "";
  function show(view) {
    // Innloggingslenker legger #access_token=\u2026 i adressen. Bare rene visningsnavn godtas.
    if (!/^[a-z0-9-]{1,30}$/.test(view || "")) view = "hjem";
    if (sessionKjent && !loggedIn && view && view !== "hjem") {
      view = "hjem";
      setTimeout(() => { const m = $("#login-msg"); if (m && !m.textContent) m.textContent = "Logg inn for \u00e5 bruke denne tjenesten."; const f = $("#login-email"); if (f) { f.scrollIntoView({ behavior: "smooth", block: "center" }); f.focus(); } }, 50);
    }
    $$(".view").forEach((v) => (v.hidden = true));
    if (PLACEHOLDER[view]) {
      const c = CARDS.find((k) => k.id === view);
      $("#kort-title").textContent = c.title;
      $("#kort-text").textContent = PLACEHOLDER[view];
      { const kv = $("#kort-verdi"), h = verdiHtml(view); kv.innerHTML = h; kv.hidden = !h; }
      $("#view-kort").hidden = false;
    } else {
      ($("#view-" + view) || $("#view-hjem")).hidden = false;
      if (view === "kort2" && loggedIn) SP.lastAktiv();
    }
    $("#om-navigo").hidden = !($("#view-hjem").hidden === false);
    if (view === "min-side") renderMinSide();
    if (view === "kort6") paintShop();
    window.scrollTo(0, 0);
  }

  const FASE = {
    oppstart: { navn: "Oppstart", hva: "Kom godt i gang med et nytt fag.", tips: ["Lag en studieplan for hele semesteret (F\u00e5 kontroll p\u00e5 hele faget).", "Still sp\u00f8rsm\u00e5l om grunnbegrepene mens du leser de f\u00f8rste kapitlene.", "Samle forelesningsnotater og lysbilder i studierommet fra f\u00f8rste uke."] },
    underveis: { navn: "Underveis", hva: "Hold tempoet og forst\u00e5 stoffet mens du jobber.", tips: ["Bruk N\u00f8tteknekkeren n\u00e5r du st\u00e5r fast i et tema.", "F\u00e5 skriver\u00e5d p\u00e5 praktikumsoppgaver f\u00f8r du leverer.", "Lag tankekart og kollokvieopplegg for \u00e5 repetere sammen med andre."] },
    sos: { navn: "SOS eksamen", hva: "Prioriter det viktigste n\u00e5r eksamen n\u00e6rmer seg.", tips: ["Studieplanen er n\u00e5 fylt ut for en kort innspurt \u2013 juster datoen og trykk \u00abLag studieplanen\u00bb.", "G\u00e5 gjennom Lovdata-veiledningen for hva du kan understreke og innarbeide.", "Bruk tankekart p\u00e5 de temaene som oftest blir gitt til eksamen."] }
  };
  function visFase(id) {
    const f = FASE[id]; const el = $("#faseinfo"); if (!f || !el) return;
    el.hidden = false;
    el.innerHTML = `<p class="eyebrow-in">${esc(f.navn)}</p><h3>${esc(f.hva)}</h3><ul>${f.tips.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
  }
  const FANEINFO = {
    notter: { bruk: "Bruk den n\u00e5r du sitter fast i lesingen, rett etter en forelesning du ikke fikk med deg, eller n\u00e5r et begrep i lovteksten ikke gir mening. Forklaringen bygger p\u00e5 Lexias b\u00f8ker, s\u00e5 du kan stole p\u00e5 at den f\u00f8lger pensum. Kontrollsp\u00f8rsm\u00e5let til slutt viser om du faktisk har forst\u00e5tt det. Svaret lagres, s\u00e5 du kan bruke det i repetisjonen f\u00f8r eksamen.", navn: "N\u00f8tteknekkeren", hva: "F\u00e5 et vanskelig punkt forklart trinn for trinn.", verdi: "Beskriv hva du ikke forst\u00e5r, eller last opp lysbildene, et bilde av tavla eller notatene dine. Du f\u00e5r en enkel forklaring med ett hverdagslig og ett juridisk eksempel, og et kontrollsp\u00f8rsm\u00e5l du kan svare p\u00e5 selv.", pris: "Koster 0,2 kreditter per forklaring, pluss 0,1 per vedlegg. Svaret lagres i ressursbanken, og filene i notatbanken.", steg: ["Velg faget.", "Skriv hva du st\u00e5r fast p\u00e5, og last gjerne opp lysbildene (bilde eller PDF).", "Trykk \u00abKnekk n\u00f8tta\u00bb og les forklaringen.", "Svar p\u00e5 kontrollsp\u00f8rsm\u00e5let for \u00e5 sjekke at du har forst\u00e5tt."] },
    notater: { bruk: "Bruk notatbanken som ditt faste sted for alt du skriver gjennom semesteret, sortert per fag. Last opp lysbilder og egne dokumenter, s\u00e5 har du alt samlet n\u00e5r eksamen n\u00e6rmer seg. Navigo kan sette notatene i system og kontrollere dem faglig mot b\u00f8kene. Det gj\u00f8r det lettere \u00e5 se hva du kan, og hva du m\u00e5 lese mer p\u00e5.", navn: "Notatbank og filer", hva: "Alle notatene og filene dine p\u00e5 ett sted \u2013 satt i system.", verdi: "Skriv notater per fag og last opp lysbilder, egne dokumenter og oppgaver. Navigo kan strukturere et notat etter juridisk systematikk, eller sette alle notatene i faget i ett felles system, og viser hva som mangler. Med notatkontroll f\u00e5r du en faglig gjennomgang av feil og mangler.", pris: "Notater og filer er gratis. Strukturering koster 0,4 kreditter, hele faget 0,6 kreditter, og notatkontroll 0,4 kreditter.", steg: ["Skriv tittel, velg fag og skriv notatet, og trykk \u00abLagre notat\u00bb.", "Trykk \u00abStrukturer notatet\u00bb for \u00e5 f\u00e5 det ordnet etter vilk\u00e5r, unntak, dommer og eksamenssp\u00f8rsm\u00e5l. Velg om den nye versjonen skal erstatte notatet eller lagres som nytt.", "Trykk \u00abSett alle notatene i faget i system\u00bb for \u00e5 samle alt du har skrevet i \u00e9n oversikt.", "Trykk \u00abNotatkontroll\u00bb for \u00e5 f\u00e5 notatet kvalitetssikret, og last opp filer med \u00abVelg filer \u00e5 laste opp\u00bb."] },
    meldinger: { bruk: "Bruk meldinger til \u00e5 holde kontakten med kollokviegruppen mellom samlingene: avtale tid, dele notater og stille sp\u00f8rsm\u00e5l til hverandre. Du f\u00e5r varsel n\u00e5r noen i gruppen skriver. Lag gruppen her og del koden, s\u00e5 kan dere ogs\u00e5 fordele faglig dugnad under Kollokvie. Samtalene er de samme som i StudySmart.", navn: "Meldinger", hva: "Skriv med kollokviegruppen og medstudenter.", verdi: "Lag en kollokviegruppe og del koden, eller skriv direkte til dem du er i gruppe med. Du kan sende filer og bilder. Samtalene er de samme som i Lexia StudySmart.", pris: "Gratis.", steg: ["Trykk \u00ab\uff0b Ny\u00bb, gi gruppen et navn og trykk \u00abLag kollokviegruppe\u00bb.", "Del invitasjonskoden (under \u00ab\u22ef\u00bb). De andre trykker \u00abBli med i gruppe\u00bb og skriver koden.", "Trykk \u00ab\ud83d\udd14 Varsle meg\u00bb for \u00e5 f\u00e5 varsel p\u00e5 telefonen eller PC-en n\u00e5r noen i gruppen skriver.", "Vil du ha ro: demp varsler for en samtale under \u00ab\u22ef\u00bb."] },
    tavle: { bruk: "Bruk tavla til \u00e5 planlegge uka: lesing, forelesninger, innleveringer og eksamensoppgaver som kort du flytter fra \u00ab\u00c5 gj\u00f8re\u00bb til \u00abFerdig\u00bb. Studieplanen kan legges rett inn som kort med frister. Du ser med ett blikk hva som gjenst\u00e5r, og hva som haster. Har du en tavle i StudySmart, kan du hente den inn.", navn: "Studietavle", hva: "Hold oversikt over semesteret.", verdi: "En tavle med lister og kort, slik du kjenner fra Trello og StudySmart. Lag egne lister, legg inn lesing, forelesninger, notater og eksamensoppgaver som kort, og dra dem dit de h\u00f8rer hjemme. Kortene kan ha fag, frist, lenke, notat, farge og stikkord.", pris: "Gratis. Tavlen lagres automatisk.", steg: ["Trykk \u00abLegg til kort\u00bb under en liste, og fyll inn tittel, fag og eventuelt frist.", "Dra kortene mellom listene. P\u00e5 mobil holder du fingeren p\u00e5 kortet et \u00f8yeblikk f\u00f8r du drar.", "Trykk p\u00e5 et kort for \u00e5 endre, flytte, kopiere eller slette det. Bruk \u00ab\u22ef\u00bb p\u00e5 listen for farge, rekkef\u00f8lge og sletting.", "Har du brukt StudySmart-tavlen: trykk \u00abHent fra StudySmart\u00bb for \u00e5 f\u00e5 kortene dine hit."] },
    tankekart: { bruk: "Bruk tankekartet n\u00e5r du skal f\u00e5 oversikt over et helt tema f\u00f8r du leser detaljene, eller n\u00e5r du repeterer f\u00f8r eksamen. Et godt tankekart viser hvordan vilk\u00e5r, unntak og dommer henger sammen. Det egner seg ogs\u00e5 til \u00e5 forklare stoffet for kollokviegruppen. Du kan lage det ut fra dine egne notater og lysbilder, og laste det ned som bilde eller PDF.", navn: "Tankekart", hva: "Se hele temaet p\u00e5 \u00e9n side.", verdi: "Lag tankekartet selv, gratis, eller la KI lage et utkast med vilk\u00e5r, unntak, sentrale dommer og typiske eksamensfeller. Begge kan redigeres: legg til grener, dra dem dit du vil, gi dem farger og last ned som bilde eller PDF.", pris: "\u00c5 lage selv er gratis. Med KI koster det 0,3 kreditter, pluss 0,1 per bilde eller PDF du laster opp. Kartene lagres i studierommet.", steg: ["Velg \u00abLag selv\u00bb eller \u00abLag med KI\u00bb.", "Lag selv: trykk \u00abNytt tankekart\u00bb og gi det navn etter temaet.", "Trykk p\u00e5 det gr\u00f8nne plusset for \u00e5 legge til grener, og dobbelttrykk for \u00e5 endre tekst.", "Med KI: skriv temaet, eller lim inn notater og last opp lysbilder. Trykk \u00abLag tankekart\u00bb.", "Trykk \u00ab\u00c5pne og rediger\u00bb, eller last det ned som bilde eller PDF."] },
    "ld-veil": { bruk: "Bruk dette n\u00e5r du skal gj\u00f8re klar lovsamlingen eller Lovdata til eksamen, eller n\u00e5r du leser en ny bestemmelse for f\u00f8rste gang. Fargekodene viser hva som er hovedregel, vilk\u00e5r og unntak, slik at du finner fram raskt under tidspress. Du kan bytte til dine egne farger. Koblingene viser hvilke andre bestemmelser du m\u00e5 se i sammenheng.", navn: "Understreking og farger", hva: "Se hvordan lovteksten b\u00f8r markeres i Lovdata Pro.", verdi: "Du f\u00e5r lovteksten vist slik den ser ut i Lovdata Pro, med fargekoder for vilk\u00e5r, rettsf\u00f8lger, unntak, vurderingstemaer og n\u00f8kkelord. Da ser du strukturen i bestemmelsen og kan overf\u00f8re markeringene til din egen Lovdata.", pris: "Koster 0,3 kreditter. Visningen lagres i ressursbanken.", steg: ["Velg fag.", "Skriv bestemmelsen, for eksempel \u00abskl. \u00a7 3-2\u00bb.", "Trykk \u00abVis markeringene\u00bb. Navigo henter lovteksten og viser den slik den ser ut i Lovdata.", "Bruk de samme fargene n\u00e5r du markerer i din egen Lovdata."] },
    "ld-merk": { bruk: "Bruk merknadsforslagene n\u00e5r du bygger opp dine egne merknader i Lovdata Pro gjennom semesteret. Dommene hentes fra Lexias multimedieb\u00f8ker der de er knyttet til bestemmelsen, med lenke til avsnittet. Merknadene inneholder bare henvisninger, slik eksamensreglene normalt krever. Sjekk alltid hjelpemiddelreglene ved ditt l\u00e6rested.", navn: "Merknadsforslag", hva: "F\u00e5 forslag til egne merknader i Lovdata Pro.", verdi: "Navigo foresl\u00e5r merknader til ord i lovteksten, med henvisninger til dommer, andre bestemmelser og forarbeider. Merknadene vises i et merknadsfelt slik i Lovdata, og du kopierer dem med ett trykk og limer dem inn.", pris: "Koster 0,4 kreditter. Forslaget lagres i ressursbanken.", steg: ["Skriv bestemmelsen, for eksempel \u00abskl. \u00a7 3-2\u00bb.", "Skriv gjerne hva du vil ha merknader om.", "Trykk \u00abForesl\u00e5 merknader\u00bb. Navigo henter lovteksten selv.", "Trykk p\u00e5 kopieringsknappen ved en merknad og lim den inn som egen merknad i Lovdata. Kontroller hver henvisning, og sjekk at merknadene er tillatt ved ditt l\u00e6rested."] },
    "ld-ulov": { bruk: "Bruk dette n\u00e5r regelen du skal ha med til eksamen, ikke st\u00e5r i noen lov, for eksempel culpaansvaret, det ulovfestede objektive ansvaret eller adekvat \u00e5rsakssammenheng. Uten en paragraf \u00e5 markere blir slike regler ofte borte i Lovdata. Navigo finner en fast \u00abknagg\u00bb i loven, s\u00e5 du alltid vet hvor merknaden ligger, og samler dommene vilk\u00e5r for vilk\u00e5r. Merknadene inneholder bare henvisninger. Sjekk alltid hjelpemiddelreglene ved ditt l\u00e6rested.", navn: "Ulovfestede omr\u00e5der", hva: "Gi de ulovfestede reglene en fast plass i Lovdata Pro.", verdi: "Du f\u00e5r 1) knaggen: bestemmelsen og ordet merknaden b\u00f8r festes til, med begrunnelse, 2) en ferdig merknad med fast prefiks (\u00abULOVFESTET: \u2026\u00bb) og dommene ordnet etter vilk\u00e5r, klar til \u00e5 kopiere, 3) vilk\u00e5rene med de sentrale dommene fra Lexias b\u00f8ker og 4) r\u00e5d om hvordan du bygger opp alle de ulovfestede omr\u00e5dene likt.", pris: "Koster 0,4 kreditter. Oppsettet lagres i ressursbanken.", steg: ["Velg fag.", "Skriv den ulovfestede regelen, eller trykk p\u00e5 et av forslagene.", "Trykk \u00abLag oppsettet\u00bb.", "\u00c5pne knaggen i Lovdata Pro, lag en merknad p\u00e5 ordet som er angitt, og lim inn merknaden. Lim inn krysshenvisningen ved de andre knaggene. Kontroller hver henvisning."] },
    lysbilder: { bruk: "Bruk dette i forelesningen: \u00e5pne lysbildene p\u00e5 PC eller nettbrett og skriv notater til hvert lysbilde mens foreleseren snakker. Etterp\u00e5 kan du laste ned et notatark og skrive videre for h\u00e5nd i GoodNotes, Notability eller p\u00e5 papir. Er et lysbilde uklart, kan Navigo forklare det ut fra b\u00f8kene. Notatene ligger lagret til repetisjonen.", navn: "Lysbilder med notater", hva: "Skriv notater rett p\u00e5 foreleserens lysbilder.", verdi: "Last opp lysbildene som PDF. Bla gjennom lysbildene og skriv notater til hvert av dem mens foreleseren snakker; alt lagres automatisk. Last ned et notatark (PDF) med lysbildene og linjer til egne notater, klart for GoodNotes, Notability, OneNote eller utskrift.", pris: "Gratis. \u00abForklar lysbildet\u00bb koster 0,1 kreditt.", steg: ["Last opp lysbildene (PDF).", "Skriv notater til hvert lysbilde.", "Trykk \u00abForklar lysbildet\u00bb hvis noe er uklart.", "Last ned notatarket og skriv videre for h\u00e5nd."] },
    kort123: { bruk: "Bruk 1-2-3-kortene n\u00e5r du skal ha et begrep eller en regel helt p\u00e5 plass: rett etter at du har lest kapitlet, f\u00f8r kollokviet og i repetisjonen f\u00f8r eksamen. Hver farge svarer p\u00e5 ett sp\u00f8rsm\u00e5l: hva det er, hvor det h\u00f8rer hjemme, hvorfor vi har regelen, hvordan du bruker den i praktikum og hvilke dommer du m\u00e5 kunne. Dommene hentes fra Lexias b\u00f8ker, s\u00e5 du slipper oppdiktede henvisninger. Kortene samles i ressursbanken og kan lastes ned som PDF.", navn: "P\u00e5 1-2-3", hva: "Ett begrep, fem farger, alt du trenger til eksamen.", verdi: "Skriv et begrep eller en regel, for eksempel \u00abCulpa\u00bb. Du f\u00e5r et kort med fem fargede felt: HVA det er, HVOR det h\u00f8rer hjemme i faget, HVORFOR vi har regelen (de legislative hensynene), HVORDAN du anvender den i praktikum med eksamenstips, og HVILKE dommer som er s\u00e6rlig sentrale.", pris: "Koster 0,2 kreditter per kort. Kortet lagres i ressursbanken.", steg: ["Velg fag.", "Skriv begrepet eller regelen, eller trykk p\u00e5 et popul\u00e6rt tema.", "Trykk \u00abLag kortet\u00bb.", "Last ned som PDF, eller lag en quiz om temaet for \u00e5 teste deg selv."] },
    quiz: { bruk: "Bruk quizen til \u00e5 teste deg selv etter at du har lest et kapittel, og flashcards til korte repetisjons\u00f8kter p\u00e5 bussen eller mellom forelesningene. \u00c5 hente stoffet fram fra hukommelsen er en av de mest effektive m\u00e5tene \u00e5 l\u00e6re p\u00e5. Kortene du ikke kan, kommer oftere igjen til de sitter. Poeng og dager p\u00e5 rad gj\u00f8r det lettere \u00e5 holde jevn innsats.", navn: "Quiz og flashcards", hva: "Test deg selv, og f\u00e5 kortene du m\u00e5 \u00f8ve p\u00e5.", verdi: "Navigo lager en quiz og flashcards fra Lexias b\u00f8ker om temaet du velger, eller om det studentene sp\u00f8r mest om n\u00e5. Du samler XP, holder rekken av dager i gang og f\u00e5r merker. Kortene du ikke kan, kommer oftere igjen.", pris: "Koster 0,2 kreditter per quiz med kortstokk. \u00c5 \u00f8ve p\u00e5 nytt er gratis.", steg: ["Velg fag og tema, eller trykk p\u00e5 et popul\u00e6rt tema.", "Ta quizen og les forklaringene.", "\u00d8v p\u00e5 flashcards: \u00abKan det\u00bb eller \u00ab\u00d8v mer\u00bb.", "Kom tilbake i morgen og hold rekken i gang."] },
    podcast: { bruk: "Bruk podcasten n\u00e5r du ikke kan sitte med boka: p\u00e5 trening, p\u00e5 bussen eller p\u00e5 tur. \u00c5 h\u00f8re et tema forklart med egne eksempler er en god f\u00f8rste gjennomgang, og en fin repetisjon f\u00f8r eksamen. Lexias innleste lydb\u00f8ker foresl\u00e5s f\u00f8rst, og de er gratis. Til slutt f\u00e5r du tre ting \u00e5 huske og et gjenkallingssp\u00f8rsm\u00e5l.", navn: "Podcast", hva: "Lytt deg gjennom et tema p\u00e5 bussen eller p\u00e5 tur.", verdi: "Finnes det en innlest lydbok om temaet i Lexias b\u00f8ker, f\u00e5r du den f\u00f8rst, gratis. Ellers lager Navigo en episode med programleder og fagperson, bygd p\u00e5 b\u00f8kene, som leses opp p\u00e5 enheten din.", pris: "Koster 0,3 kreditter per episode. Lydb\u00f8kene i b\u00f8kene er gratis.", steg: ["Velg fag og tema.", "Lytt til lydboken hvis den finnes.", "Ellers: lag en episode og trykk \u25b6.", "Last ned manuset hvis du vil lese."] },
    kollokvie: { bruk: "Bruk dette n\u00e5r kollokviegruppen skal m\u00f8tes og ingen har tid til \u00e5 lage opplegget. Fordel forberedelsene med faglig dugnad, slik at \u00e9n holder miniforelesning, \u00e9n lager disposisjon og \u00e9n l\u00f8ser praktikumen. Opplegget gir dere case, dr\u00f8ftelsessp\u00f8rsm\u00e5l og fasit, slik at dere kan sammenlikne l\u00f8sningene. Alle f\u00e5r oppgavene i kalenderen.", navn: "Kollokvie", hva: "Et ferdig opplegg for kollokviegruppen.", verdi: "Du f\u00e5r tidsplan, oppvarmingssp\u00f8rsm\u00e5l, en praktisk case med dr\u00f8ftelsessp\u00f8rsm\u00e5l, rollefordeling og fasit i stikkord \u2013 tilpasset antall deltakere og tiden dere har.", pris: "Koster 0,5 kreditter. Opplegget lagres i ressursbanken og kan deles med gruppen.", steg: ["Velg fag og skriv temaet.", "Angi antall deltakere og hvor lenge dere skal holde p\u00e5.", "Trykk \u00abLag opplegget\u00bb.", "Del opplegget med gruppen og bruk fasiten til slutt."] }
  };
  function renderCards() {
    $("#cards").innerHTML = CARDS.map((c) =>
      `<button class="card" data-view="${c.id}" aria-label="${esc(c.title)}: ${esc(c.cta)}"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24">${ICON[c.id]}</svg></span><span class="body"><strong>${esc(c.title)}</strong><span class="txt">${esc(c.txt)}</span><span class="go">${esc(c.cta)}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></span></button>`).join("");
  }

  /* ---------- Progressiv lasting: hvert felt fylles for seg ---------- */
  let KATALOG = (CFG.bokkatalog || []).slice();
  let PAKKER = [], pakkerHentet = false;
  // \u00abRed. Morten Kjelland (2026)\u00bb -> \u00abMorten Kjelland (red.), 2026\u00bb
  function byline(b) {
    const s = String(b.byline || ""); if (!s) return "";
    const aar = (s.match(/(19|20)\d{2}/) || [""])[0];
    const navn = (s.match(/Morten Kjelland/) || s.match(/[A-Z\u00c6\u00d8\u00c5][a-z\u00e6\u00f8\u00e5]+ [A-Z\u00c6\u00d8\u00c5][a-z\u00e6\u00f8\u00e5]+(?= \(|$| \d)/) || ["Morten Kjelland"])[0];
    return `${navn}${/red\./i.test(s) ? " (red.)" : ""}${aar ? ", " + aar : ""}`;
  }
  const S = { ute: false, saldo: undefined, abonnement: undefined, eier: undefined, log: undefined, err: {} };
  const HENTER = '<span class="laster">henter \u2026</span>';

  function paintSaldo() {
    const txt = S.ute ? "Logg inn" : S.err.saldo ? "Saldo utilgjengelig" : S.saldo === undefined ? "henter \u2026" : fmt(S.saldo) + " kreditter";
    const venter = !S.ute && !S.err.saldo && S.saldo === undefined;
    for (const id of ["#saldo", "#ms-saldo"]) { const el = $(id); el.textContent = S.ute && id === "#ms-saldo" ? "Logg inn for \u00e5 se saldoen" : txt; el.classList.toggle("laster", venter); }
  }
  function paintAbo() {
    const el = $("#ms-abonnement");
    if (S.ute) { el.textContent = ""; return; }
    if (S.err.abonnement) { el.textContent = "Abonnementet kunne ikke hentes akkurat n\u00e5."; return; }
    if (S.abonnement === undefined) { el.innerHTML = '<span class="laster">henter abonnement \u2026</span>'; return; }
    el.textContent = S.abonnement
      ? `${S.abonnement.variant}abonnement, aktivt til ${new Date(S.abonnement.til).toLocaleDateString("nb-NO")}`
      : "Ingen aktivt abonnement.";
  }
  function bokStatus(b) {
    if (S.ute) return { tag: "Logg inn for \u00e5 se tilgang", aktiv: false, kjent: false };
    if (S.err.boker) return { tag: "Tilgangen kunne ikke sjekkes", aktiv: false, kjent: false };
    if (S.eier === undefined) return { tag: "sjekker tilgang \u2026", aktiv: false, kjent: false, venter: true };
    const aktiv = S.eier.has(b.url);
    return { tag: aktiv ? "Du har tilgang" : "Ikke kj\u00f8pt", aktiv, kjent: true };
  }
  function paintBooks() {
    paintShop();
    $("#ms-books").innerHTML = KATALOG.map((b) => {
      const st = bokStatus(b);
      const lenke = st.kjent ? (st.aktiv ? `<a href="${esc(b.url)}" target="_blank" rel="noopener">Les</a>` : `<a href="${esc(b.kjop || b.url)}" target="_blank" rel="noopener">Kj\u00f8p tilgang</a>`)
        : `<a href="${esc(b.url)}" target="_blank" rel="noopener">\u00c5pne</a>`;
      return `<li>${b.cover ? `<img class="cover" src="${esc(b.cover)}" alt="" loading="lazy">` : (st.aktiv ? LOCK_OPEN : LOCK_CLOSED)}<span class="t">${esc(b.tittel)}${byline(b) ? `<em class="by">${esc(byline(b))}</em>` : ""}<small class="${st.venter ? "laster" : ""}">${esc(st.tag)}</small></span>${lenke}</li>`;
    }).join("");
  }
  function paintLog() {
    const el = $("#ms-log");
    if (S.ute) { el.innerHTML = '<li class="muted">Logg inn for \u00e5 se aktiviteten din.</li>'; return; }
    if (S.err.logg) { el.innerHTML = '<li class="muted">Aktivitetsloggen kunne ikke hentes akkurat n\u00e5.</li>'; return; }
    if (S.log === undefined) { el.innerHTML = `<li>${HENTER}</li>`; return; }
    el.innerHTML = S.log.map((l) =>
      `<li><time>${esc(l.tid)}</time><span>${esc(l.hva)}</span><span class="cr">${l.pafyll || l.hva.includes("+") ? "+" : "\u2212"}${fmt(l.kreditter)}</span></li>`).join("") || '<li class="muted">Ingen aktivitet enn\u00e5.</li>';
  }
  let RB = null, rbFilter = "";
  const RB_NAVN = { notatstruktur: "Notatstruktur", svar: "Svar", plan: "Studieplaner", lovdata: "Lovdata", merknader: "Merknader", ulovfestet: "Ulovfestet", tankekart: "Tankekart", kollokvie: "Kollokvie", skriverad: "Skriver\u00e5d", notteknekker: "N\u00f8tteknekkeren", notatkontroll: "Notatkontroll", quiz: "Quiz og kort", kort123: "P\u00e5 1-2-3", podcast: "Podcast", lysbilde: "Lysbilder" };
  async function lastRessursbank() {
    const el = $("#rb-liste"); if (!el) return;
    if (S.ute) { el.innerHTML = '<p class="muted">Logg inn for \u00e5 se ressursbanken din.</p>'; return; }
    if (!RB) { el.innerHTML = '<p class="laster">henter \u2026</p>'; try { RB = (await API.part("ressursbank")).rader || []; } catch (e) { el.innerHTML = '<p class="muted">Ressursbanken kunne ikke hentes akkurat n\u00e5.</p>'; return; } }
    const typer = [...new Set(RB.map((r) => r.type))];
    $("#rb-filter").innerHTML = ['<button type="button" data-rb="" class="' + (rbFilter ? "" : "p\u00e5") + '">Alt (' + RB.length + ")</button>", ...typer.map((t) => `<button type="button" data-rb="${esc(t)}" class="${rbFilter === t ? "p\u00e5" : ""}">${esc(RB_NAVN[t] || t)} (${RB.filter((r) => r.type === t).length})</button>`)].join("");
    const liste = RB.filter((r) => !rbFilter || r.type === rbFilter);
    el.innerHTML = liste.map((r) => `<details class="rb"><summary><span class="rb-type">${esc(RB_NAVN[r.type] || r.type)}</span><strong>${esc(r.tittel)}</strong><time>${esc(String(r.tid).slice(0, 10))}</time></summary><div class="rb-innhold">${r.type === "kort123" && r.data && r.data.hva ? k3Html(r.data) : r.data ? ldVis(r.data) : (r.html || "")}${renderKilder(r.kilder || [])}</div></details>`).join("") || '<p class="muted">Ressursbanken er tom enn\u00e5. Alt du lager i Navigo, havner her automatisk.</p>';
  }
  function renderMinSide() {
    paintSaldo(); paintAbo(); paintBooks(); paintLog(); lastRessursbank();
  }

  // Hver del hentes uavhengig; en feil p\u00e5virker bare sitt eget felt.
  function hent(navn, bruk, mal) {
    delete S.err[navn];
    return API.part(navn).then((r) => { if (r && r.error) throw new Error(r.error); bruk(r || {}); })
      .catch((e) => { S.err[navn] = (e && e.message) || "feil"; console.warn("Navigo", navn, e); })
      .finally(mal);
  }
  const DELER = {
    saldo: () => hent("saldo", (r) => {
      S.saldo = Number(r.saldo ?? 0);
      if (r.fornavn) { renderHello(r.fornavn); try { localStorage.setItem("navigo_fornavn", r.fornavn); } catch (_) { /* valgfritt */ } }
    }, paintSaldo),
    abonnement: () => hent("abonnement", (r) => { S.abonnement = r.abonnement || null; }, paintAbo),
    boker: () => hent("boker", (r) => { S.eier = new Set(r.eier || []); }, paintBooks),
    logg: () => hent("logg", (r) => { S.log = r.log || []; }, paintLog)
  };
  function loadParts() { DELER.saldo(); DELER.abonnement(); DELER.boker(); DELER.logg(); }
  // Etter et svar eller en plan: oppdater bare saldo og logg.
  async function refresh() { await Promise.all([DELER.saldo(), DELER.logg()]); }

  /* ---------- Kilder gruppert per bok, med omslag ---------- */
  const KB_IKON = { lov: "\u00a7", dom: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5v17M8 20.5h8M5 7h14"/><path d="M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/></svg>' };
  function renderKildebase(kb) {
    if (!kb.length) return "";
    return `<div class="kb-kilder"><p class="eyebrow-in">I Jusshack Kildebase</p><p class="muted small">Lovtekster og dommer fra svaret, forklart med fargekodede tolkningsn\u00f8kler og koblet til b\u00f8kene.</p><ul>${kb.map((k) => `<li><a href="${esc(k.url)}" target="_blank" rel="noopener"><span class="kb-ikon ${k.type === "dom" ? "dom" : "lov"}">${KB_IKON[k.type] || "\u00a7"}</span><span>${esc(k.tittel)}</span></a></li>`).join("")}</ul></div>`;
  }
  function renderKilder(alle) {
    const kb = alle.filter((k) => k.kb), kilder = alle.filter((k) => !k.kb);
    if (!kilder.length) return renderKildebase(kb);
    const grupper = [];
    for (const k of kilder) {
      const navn = k.bok || k.tittel.split(": ")[0];
      let g = grupper.find((x) => x.navn === navn);
      if (!g) grupper.push((g = { navn, cover: k.cover, aktiv: k.aktiv, kjop: k.kjop, kap: [] }));
      g.kap.push(k);
    }
    return `<div class="kilder"><p class="eyebrow-in">Les mer i b\u00f8kene</p>${grupper.map((g) => `
      <div class="bok">${g.cover ? `<img class="cover" src="${esc(g.cover)}" alt="Omslag: ${esc(g.navn)}" loading="lazy">` : ""}
        <div class="bok-in"><strong>${esc(g.navn)}</strong>
          <span class="tag ${g.aktiv ? "ok" : "lock"}">${g.aktiv ? LOCK_OPEN + "Du har tilgang" : LOCK_CLOSED + "Ikke kj\u00f8pt"}</span>
          <ul>${g.kap.map((k) => `<li><a href="${esc(k.url)}" target="_blank" rel="noopener">${esc(k.kapittel || k.tittel)}</a></li>`).join("")}</ul>
          ${g.aktiv || !g.kjop ? "" : `<a class="btn btn-sm-buy" href="${esc(g.kjop)}" target="_blank" rel="noopener">Kj\u00f8p tilgang til boka</a>`}
        </div></div>`).join("")}</div>${renderKildebase(kb)}`;
  }

  /* ---------- Arbeidsindikator ---------- */
  const WORK_ICON = '<svg class="spin" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path class="needle" d="M15.6 8.4l-2.1 5.1-5.1 2.1 2.1-5.1z"/><path d="M12 3v1.6M12 19.4V21M3 12h1.6M19.4 12H21"/></svg>';
  function startWorking(out, steps) {
    const t0 = Date.now();
    out.innerHTML = `<div class="working" role="status" aria-live="polite">${WORK_ICON}<div><p class="w-msg">${esc(steps[0])}<span class="dots"><i>.</i><i>.</i><i>.</i></span></p><p class="muted small w-time">0 sekunder</p></div></div>`;
    const id = setInterval(() => {
      const m = out.querySelector(".w-msg"), t = out.querySelector(".w-time");
      if (!m) { clearInterval(id); return; }
      const sek = Math.floor((Date.now() - t0) / 1000);
      t.textContent = sek + " sekunder";
      const step = steps[Math.min(steps.length - 1, Math.floor(sek / 5))];
      if (m.firstChild.textContent !== step) m.firstChild.textContent = step;
    }, 1000);
    return () => clearInterval(id);
  }
  const STEPS_SVAR = ["Finner relevante kapitler i b\u00f8kene", "Leser kildene", "Skriver svaret", "Kontrollerer henvisningene", "Nesten ferdig"];
  const STEPS_PLAN = ["Ser p\u00e5 eksamensdatoen og tiden din", "Fordeler kapitlene uke for uke", "Legger inn oppgavetrening og repetisjon", "Nesten ferdig"];

  /* ---------- Hjem: hilsen, dato og dagens sitat (fra Lexia StudySmart) ---------- */
  const QUOTES = [["Utdanning er ikke \u00e5 l\u00e6re fakta, men \u00e5 trene hjernen til \u00e5 tenke.", "Albert Einstein"], ["Det viktigste er \u00e5 ikke slutte \u00e5 stille sp\u00f8rsm\u00e5l.", "Albert Einstein"], ["Jeg har ingen spesielle talenter. Jeg er bare lidenskapelig nysgjerrig.", "Albert Einstein"], ["\u00c5 l\u00e6re uten \u00e5 tenke er nyttel\u00f8st; \u00e5 tenke uten \u00e5 l\u00e6re er farlig.", "Konfutse"], ["Den som ikke leser, har ingen fordel over den som ikke kan lese.", "Mark Twain"], ["Kunnskap er makt.", "Francis Bacon"], ["Investering i kunnskap gir best rente.", "Benjamin Franklin"], ["Lev som om du skulle d\u00f8 i morgen. L\u00e6r som om du skulle leve evig.", "Mahatma Gandhi"], ["Utdanning er det mektigste v\u00e5penet du kan bruke for \u00e5 forandre verden.", "Nelson Mandela"], ["\u00c5 vite at man ikke vet, er begynnelsen p\u00e5 visdom.", "Sokrates"], ["Det eneste jeg vet, er at jeg ingenting vet.", "Sokrates"], ["R\u00f8ttene til utdanning er bitre, men frukten er s\u00f8t.", "Aristoteles"], ["Vi er hva vi gjentatte ganger gj\u00f8r. Fremragende dyktighet er derfor ikke en handling, men en vane.", "Aristoteles"], ["Det er ikke fordi ting er vanskelige at vi ikke v\u00e5ger; det er fordi vi ikke v\u00e5ger at de er vanskelige.", "Seneca"], ["Hver dag l\u00e6rer vi noe nytt \u2013 hvis vi vil.", "Seneca"], ["\u00c5 lese er for sinnet hva trening er for kroppen.", "Joseph Addison"], ["Du trenger ikke se hele trappen. Ta bare det f\u00f8rste trinnet.", "Martin Luther King jr."], ["Suksess er summen av sm\u00e5 innsatser, gjentatt dag etter dag.", "Robert Collier"], ["Den beste tiden \u00e5 plante et tre var for tjue \u00e5r siden. Den nest beste er n\u00e5.", "Kinesisk ordtak"], ["Det du l\u00e6rer med glede, glemmer du aldri.", "Alfred Mercier"], ["\u00c5 studere er \u00e5 s\u00e5; eksamen er bare innh\u00f8stingen.", "Ukjent"], ["Jussen er en \u00f8velse i \u00e5 tenke klart under tvil.", "Ukjent"], ["Man m\u00e5 l\u00e6re reglene for \u00e5 vite n\u00e5r de ikke gjelder.", "Ukjent"], ["Den som sier at noe er umulig, b\u00f8r ikke forstyrre den som holder p\u00e5 \u00e5 gj\u00f8re det.", "Kinesisk ordtak"], ["Utholdenhet er ikke et langt l\u00f8p; det er mange korte l\u00f8p etter hverandre.", "Walter Elliot"], ["Det finnes ingen heis til suksess. Du m\u00e5 ta trappen.", "Zig Ziglar"], ["Jeg har ikke mislyktes. Jeg har bare funnet 10 000 m\u00e5ter som ikke virker.", "Thomas Edison"], ["Tvil er begynnelsen p\u00e5 kunnskap.", "Ren\u00e9 Descartes"], ["Ingenting er s\u00e5 praktisk som en god teori.", "Kurt Lewin"], ["Et m\u00e5l uten en plan er bare et \u00f8nske.", "Antoine de Saint-Exup\u00e9ry"], ["Repetisjon er all l\u00e6rings mor.", "Latinsk ordtak"]];
  const VERDI = {"kort1": {"verdi": "Fra sp\u00f8rsm\u00e5l til forst\u00e5else p\u00e5 minutter \u2013 med kilde du kan stole p\u00e5.", "bruk": ["Forst\u00e5 et begrep eller vilk\u00e5r f\u00f8r forelesningen, for eksempel adekvat \u00e5rsakssammenheng.", "Sjekke at du har forst\u00e5tt en regel eller en dom riktig f\u00f8r du skriver.", "F\u00e5 eksempler og eksamenstips du kan ta med i kollokviet."], "hvorfor": "Svarene bygger p\u00e5 Lexias multimedieb\u00f8ker og viser deg til kapitlet der du kan lese mer \u2013 ikke tilfeldige kilder fra nettet. Du velger selv hvor grundig svaret skal v\u00e6re, og ser prisen f\u00f8r du sender."}, "kort2": {"verdi": "En realistisk plan som passer tiden din og m\u00e5let ditt \u2013 fram til eksamensdagen.", "bruk": ["Ved semesterstart: fordel pensum uke for uke.", "Midt i semesteret: ta igjen etterslep uten \u00e5 miste oversikten.", "SOS: prioriter kjernestoffet n\u00e5r eksamen n\u00e6rmer seg."], "hvorfor": "Planen bygger p\u00e5 kapitlene i Lexias bok for faget, eksamensdatoen og timene du faktisk har per dag. Den lagres p\u00e5 Min side, s\u00e5 du kan f\u00f8lge den hele semesteret."}, "kort3": {"verdi": "Konkret tilbakemelding p\u00e5 dine egne besvarelser \u2013 f\u00f8r det teller.", "bruk": ["Lever praktikumsoppgaven f\u00f8r innlevering eller eksamen.", "\u00d8v p\u00e5 teorioppgaver og se hva som mangler i dr\u00f8ftelsen.", "L\u00e6r av feilene dine fra oppgave til oppgave."], "hvorfor": "Oppgaveretteren ser p\u00e5 det sensor ser etter: problemstilling, rettskilder, dr\u00f8ftelse, subsumsjon og konklusjon \u2013 med henvisning til relevante kapitler i b\u00f8kene."}, "kort4": {"verdi": "Bruk Lovdata effektivt p\u00e5 eksamen \u2013 innenfor reglene.", "bruk": ["Se lovteksten slik den ser ut i Lovdata Pro, med forslag til understreking og farger.", "F\u00e5 forslag til egne merknader med henvisninger til dommer og bestemmelser, klare til \u00e5 kopiere inn.", "Forbered lovlige innarbeidelser f\u00f8r eksamen."], "hvorfor": "Forslagene lages av KI med Lexias multimedieb\u00f8ker som kunnskapsgrunnlag. Du har selv ansvaret for \u00e5 overholde reglene for lovlige innarbeidelser ved ditt l\u00e6rested."}, "kort5": {"verdi": "Forelesninger, notater og kollokvier samlet p\u00e5 ett sted.", "bruk": ["La N\u00f8tteknekkeren forklare lysbildene fra forelesningen.", "F\u00e5 notatene dine kontrollert faglig.", "Lag tankekart og opplegg for kollokviet."], "hvorfor": "Ingenting g\u00e5r tapt: alt du lager og betaler for, lagres automatisk i ressursbanken din p\u00e5 Min side og bygges opp som din egen ressursbank s\u00e5 lenge du har tilgang til Navigo."}, "kort6": {"verdi": "Riktige b\u00f8ker til riktig pris.", "bruk": ["Se hvilke multimedieb\u00f8ker du allerede har tilgang til.", "Finn fysiske b\u00f8ker og pensumpakker for faget ditt.", "Be om et personlig tilbud tilpasset det du har fra f\u00f8r."], "hvorfor": "Tilbudet tar hensyn til b\u00f8kene du allerede eier, s\u00e5 du betaler ikke for det samme to ganger."}};
  const dayOfYear = () => { const d = new Date(); return Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 864e5); };
  const greeting = () => { const t = new Date().getHours(); return t < 5 ? "God natt" : t < 10 ? "God morgen" : t < 12 ? "God formiddag" : t < 18 ? "God ettermiddag" : "God kveld"; };
  function renderHello(navn) {
    const d = new Date();
    const dato = d.toLocaleDateString("nb-NO", { weekday: "long", day: "numeric", month: "long" });
    $("#hello-date").textContent = dato.charAt(0).toUpperCase() + dato.slice(1);
    $("#hello-title").textContent = navn ? `${greeting()}, ${navn}!` : `${greeting()}!`;
    const q = QUOTES[dayOfYear() % QUOTES.length];
    $("#quote").innerHTML = `<blockquote>\u00ab${esc(q[0])}\u00bb</blockquote><figcaption>\u2013 ${esc(q[1])}</figcaption>`;
  }
  const STEG = {
    kort1: ["Velg fagomr\u00e5det sp\u00f8rsm\u00e5let gjelder.", "Skriv sp\u00f8rsm\u00e5let med dine egne ord.", "Velg svarlengde og hva svaret skal ta med. Prisen vises f\u00f8r du sender.", "Trykk \u00abSend sp\u00f8rsm\u00e5let\u00bb. Svaret kommer med lenker til riktig kapittel i b\u00f8kene."],
    kort2: ["Velg fag og eksamensdato.", "Angi hvor mange timer per dag du kan bruke.", "Velg ambisjonen din: best\u00e5, god karakter eller toppkarakter.", "Trykk \u00abLag studieplanen\u00bb. Planen lagres p\u00e5 Min side. N\u00e6r eksamen? Bruk \u00abSOS eksamen\u00bb p\u00e5 forsiden."],
    kort3: ["Har du en hel besvarelse: trykk \u00ab\u00c5pne Oppgaveretteren\u00bb og last den opp der.", "Vil du ha raske r\u00e5d p\u00e5 en del av teksten: velg fag og oppgavetype nedenfor.", "Lim inn oppgaveteksten (valgfritt) og utdraget du vil ha r\u00e5d om.", "Trykk \u00abF\u00e5 skriver\u00e5d\u00bb. Du f\u00e5r konkrete forbedringer, ikke en ferdig tekst."],
    kort4: ["Velg fanen: \u00abUnderstreking og farger\u00bb eller \u00abMerknadsforslag\u00bb.", "Velg fag, og skriv bestemmelsen, for eksempel \u00abskl. \u00a7 3-2\u00bb.", "Navigo henter lovteksten selv og viser den slik den ser ut i Lovdata.", "Overf\u00f8r markeringene til Lovdata, og kopier merknadene med kopieringsknappen. Sjekk alltid hjelpemiddelreglene ved l\u00e6restedet ditt."],
    kort5: ["Velg en fane: N\u00f8tteknekkeren, Notatbank, Studietavle, Tankekart eller Kollokvie.", "Notatbanken og studietavlen er gratis og lagres automatisk.", "KI-verkt\u00f8yene viser prisen f\u00f8r du bruker dem.", "Alt du lagrer, finner du igjen neste gang du logger inn."],
    kort6: ["Se hvilke multimedieb\u00f8ker du allerede har tilgang til.", "Trykk \u00abLes\u00bb for \u00e5 \u00e5pne en bok du har, eller \u00abKj\u00f8p\u00bb for \u00e5 kj\u00f8pe en ny.", "Vil du ha flere b\u00f8ker: kryss av i skjemaet og send foresp\u00f8rselen.", "Salgsteamet svarer deg p\u00e5 e-post med et tilbud som tar hensyn til det du eier."]
  };
  // Kort med faner viser bare en kort innledning; detaljene kommer n\u00e5r man velger et verkt\u00f8y
  const KORT_INTRO = {
    kort4: "Velg et verkt\u00f8y nedenfor for \u00e5 se hva det gj\u00f8r, hva det koster og hvordan du bruker det. Du har selv ansvaret for \u00e5 f\u00f8lge hjelpemiddelreglene ved l\u00e6restedet ditt.",
    kort5: "Velg et verkt\u00f8y nedenfor for \u00e5 se hva det gj\u00f8r, hva det koster og hvordan du bruker det. Alt du lager, lagres i ressursbanken din."
  };
  const KORT_BRUK = {
    kort1: "Bruk det n\u00e5r du lurer p\u00e5 noe i pensum, i stedet for \u00e5 s\u00f8ke p\u00e5 nettet eller vente p\u00e5 svar fra foreleseren. Svaret bygger p\u00e5 Lexias multimedieb\u00f8ker og viser kildene, s\u00e5 du ser hvor du kan lese mer. Velg kort svar for en rask avklaring, eller et grundigere svar n\u00e5r du forbereder deg til eksamen. Alle svarene lagres i ressursbanken din.",
    kort2: "Bruk studieplanen i starten av semesteret, og igjen n\u00e5r eksamen n\u00e6rmer seg. Legg inn eksamenene, hvor langt du har kommet og hvor mye tid du har, s\u00e5 fordeler Navigo resten av pensum uke for uke. Gjenkalling, oppgavetrening og bufferdager er bygget inn, slik at planen t\u00e5ler at noe ryker. Juster den underveis, og legg den i kalenderen eller p\u00e5 studietavla.",
    kort3: "Bruk Oppgaveretteren n\u00e5r du har en hel besvarelse og vil vite hvor du st\u00e5r f\u00f8r innlevering eller eksamen. Bruk raske skriver\u00e5d underveis, n\u00e5r du st\u00e5r fast p\u00e5 ett avsnitt eller \u00e9n dr\u00f8ftelse. Begge viser hva du gj\u00f8r bra og hva du b\u00f8r endre, med henvisning til oppgaveteknikken i b\u00f8kene. Pr\u00f8v deg p\u00e5 nytt med en ny versjon og se forbedringen.",
    kort6: "Bruk denne siden til \u00e5 se hvilke multimedieb\u00f8ker du har, og hvilke som passer for faget og semesteret ditt. B\u00f8kene er kunnskapsgrunnlaget for alle KI-verkt\u00f8yene i Navigo. Har du flere b\u00f8ker, f\u00e5r du bedre og mer presise svar. Vil du ha et tilbud p\u00e5 flere b\u00f8ker, sender du en foresp\u00f8rsel til salgsteamet."
  };
  function verdiHtml(id) {
    const v = VERDI[id]; if (!v) return "";
    if (KORT_INTRO[id]) return ""; // kort med faner: forklaringen kommer n\u00e5r man velger verkt\u00f8y
    const steg = STEG[id] || [];
    return `<div class="intro-kort"><h2>${esc(v.verdi)}</h2>${KORT_BRUK[id] ? `<p class="fi-bruk">${esc(KORT_BRUK[id])}</p>` : ""}<details class="fi-mer"><summary>Slik gj\u00f8r du</summary><ol class="steg">${steg.map((s) => `<li>${esc(s)}</li>`).join("")}</ol><p class="muted small">${esc(v.hvorfor)}</p></details></div>`;
  }

  /* ---------- Kort 1 ---------- */
  function qCost() {
    const len = $('input[name="q-len"]:checked').value;
    const extras = $$('input[name="q-add"]:checked').length;
    const c = estimateAnswerCost(len, extras);
    $("#q-cost").textContent = fmt(c) + " kreditter";
    return c;
  }

  async function onAsk(e) {
    e.preventDefault();
    const payload = {
      fag: $("#q-fag").value,
      sporsmal: $("#q-text").value.trim(),
      lengde: $('input[name="q-len"]:checked').value,
      tillegg: $$('input[name="q-add"]:checked').map((i) => i.value)
    };
    const out = $("#q-answer");
    out.hidden = false;
    const start = new Date(Date.now() - 5000).toISOString();
    const stop = startWorking(out, STEPS_SVAR);
    try {
      const r = await API.ask(payload);
      stop();
      if (r.error === "saldo") {
        out.innerHTML = `<p>Du har for f\u00e5 kreditter til dette svaret (${fmt(r.cost)} kreditter). <button type="button" class="lenkeknapp" data-kjop-kreditter>Kj\u00f8p flere kreditter</button>, s\u00e5 kan du sende sp\u00f8rsm\u00e5let p\u00e5 nytt.</p>`;
        return;
      }
      if (r.error) { out.innerHTML = errorText(r.error); return; }
      out.innerHTML = `<h2>${esc(payload.sporsmal)}</h2>${r.svar}${renderKilder(r.kilder || [])}<p class="muted small">Brukt: ${fmt(r.cost)} kreditter.</p>`;
      await refresh();
    } catch (err) {
      stop();
      if (nettfeil(err)) {
        const rr = await hentEtterBrudd(out, "sporsmal", start);
        out.innerHTML = rr ? `<h2>${esc(rr.sporsmal)}</h2>${rr.svar_md}${renderKilder(rr.kilder || [])}<p class="muted small">Brukt: ${fmt(rr.kreditter)} kreditter.</p>` : bruddTekst;
        refresh(); return;
      }
      out.innerHTML = `<p>Svaret kunne ikke hentes. Ingen kreditter er trukket. Pr\u00f8v igjen om litt. (${esc(err.message || err)})</p>`;
    }
  }

  /* ---------- Kort 2 ---------- */
  /* ---------- Kort 2: studieplan ----------
     Studenten legger inn eksamenene, krysser av hvor langt hun har kommet i hvert kapittel og
     hvilke dager hun leser. Navigo regner ut kalenderen og fordeler resten av pensum. */
  const SP_FORMER = ["Skoleeksamen", "Hjemmeeksamen", "Muntlig eksamen", "Oppgave/innlevering"];
  const SP = {
    eks: [], kap: {}, status: {}, okter: [], navn: "",
    init() {
      this.leggTil(FAG[0], new Date(Date.now() + 40 * 864e5).toISOString().slice(0, 10));
      $("#sp-dager").addEventListener("change", () => this.uketid());
      $("#p-timer").addEventListener("input", () => this.uketid());
      this.uketid();
      $("#sp-ny-eks").addEventListener("click", () => { if (this.eks.length < 4) this.leggTil(FAG.find((f) => !this.eks.some((e) => e.fag === f)) || FAG[0], ""); });
      $("#sp-eksamener").addEventListener("change", (e) => {
        const rad = e.target.closest(".sp-eks-rad"); if (!rad) return;
        const i = +rad.dataset.i, x = this.eks[i];
        if (e.target.name === "fag") { x.fag = e.target.value; this.hentKap(x.fag); }
        if (e.target.name === "dato") x.dato = e.target.value;
        if (e.target.name === "form") x.form = e.target.value;
        this.visKap();
      });
      $("#sp-eksamener").addEventListener("click", (e) => {
        const del = e.target.closest(".sp-fjern"); if (!del) return;
        this.eks.splice(+del.closest(".sp-eks-rad").dataset.i, 1); this.visEks(); this.visKap();
      });
      $("#sp-kapitler").addEventListener("click", (e) => {
        const k = e.target.closest(".sp-kap-knapp");
        if (k) {
          const st = this.status[k.dataset.fag] || (this.status[k.dataset.fag] = {});
          const neste = { undefined: "lest", lest: "kan", kan: undefined }[st[k.dataset.url]];
          if (neste) st[k.dataset.url] = neste; else delete st[k.dataset.url];
          this.visKap(); return;
        }
        const alle = e.target.closest(".sp-alle");
        if (alle) {
          const fag = alle.dataset.fag, st = (this.status[fag] = {});
          if (alle.dataset.st) for (const kk of this.kap[fag] || []) st[kk.url] = alle.dataset.st;
          this.visKap();
        }
      });
    },
    uketid() {
      const d = $$("#sp-dager input:checked").length, t = +$("#p-timer").value;
      $("#sp-uketid").textContent = `${d} lesedager i uka \u00d7 ${fmt(t)} timer = ${fmt(Math.round(d * t * 10) / 10)} timer i uka. Gjenkalling, oppgaveverksted og en bufferdag bygges inn i denne tiden.`;
    },
    aktiv: null,
    async lastAktiv() {
      if (DEMO || this.aktivHentet) return; this.aktivHentet = true;
      try {
        const r = await API.planSiste(); this.aktiv = r.plan; this.kalUrl = r.kalender;
        const el = $("#sp-aktiv"); if (!r.plan) { el.hidden = true; return; }
        el.hidden = false;
        el.innerHTML = `<div class="panel sp-aktivkort"><p class="eyebrow">Din aktive studieplan</p><h3>${esc(r.plan.fag)}</h3><p class="muted small">Laget ${esc(new Date(r.plan.laget).toLocaleDateString("nb-NO", { day: "numeric", month: "long" }))}. Ligger du foran eller etter? Juster planen, s\u00e5 regnes den ut p\u00e5 nytt fra i dag.</p><div class="row-btns"><button type="button" class="btn" id="sp-juster">Juster planen</button><button type="button" class="btn ghost" id="sp-vis">Vis planen</button></div></div>`;
        $("#sp-vis").addEventListener("click", () => { const out = $("#plan-out"); out.hidden = false; visPlan(out, { fag: r.plan.fag, html: r.plan.html, okter: r.plan.okter, ics: r.plan.ics, kalender: r.kalender }); out.scrollIntoView({ behavior: "smooth" }); });
        $("#sp-juster").addEventListener("click", () => this.juster());
      } catch (_) { this.aktivHentet = false; }
    },
    juster() {
      const k = (this.aktiv && this.aktiv.kartlegging) || {};
      if (Array.isArray(k.eksamener) && k.eksamener.length) {
        this.eks = k.eksamener.map((e) => ({ fag: e.fag, dato: e.dato, form: e.form || SP_FORMER[0] }));
        for (const e of k.eksamener) { this.status[e.fag] = Object.assign({}, e.status || {}); this.hentKap(e.fag); }
        this.visEks();
      }
      this.justerer = true; $("#p-cost").textContent = fmt(RATES.plan) + " kreditter (justering)";
      if (k.jobbDager !== undefined) $("#p-jobbdager").value = String(k.jobbDager || 0);
      if (k.jobbTimer !== undefined) $("#p-jobbtimer").value = k.jobbTimer || 0;
      if (k.timer) { $("#p-timer").value = k.timer; $("#p-timer-out").textContent = fmt(k.timer); }
      if (Array.isArray(k.dager)) $$("#sp-dager input").forEach((i) => (i.checked = k.dager.includes(+i.value)));
      if (k.kollokvie !== undefined) $("#p-kollokvie").value = k.kollokvie;
      if (k.mal) $("#p-mal").value = k.mal;
      $("#p-innlev").value = k.innleveringer || ""; $("#p-kommentar").value = k.kommentar || "";
      this.uketid(); this.visKap();
      const f = $("#sp-kapitler"); f.scrollIntoView({ behavior: "smooth", block: "start" });
      $("#sp-kapitler").insertAdjacentHTML("beforebegin", '<p class="sp-justertips small">Oppdater hvilke kapitler du har lest siden sist, s\u00e5 lager Navigo en ny plan fra i dag med de samme eksamenene.</p>');
    },
    leggTil(fag, dato) { this.eks.push({ fag, dato, form: SP_FORMER[0] }); this.visEks(); this.hentKap(fag); },
    visEks() {
      $("#sp-eksamener").innerHTML = this.eks.map((x, i) => `<div class="sp-eks-rad" data-i="${i}">
        <select name="fag" aria-label="Fag">${FAG.map((f) => `<option${f === x.fag ? " selected" : ""}>${esc(f)}</option>`).join("")}</select>
        <input name="dato" type="date" value="${esc(x.dato)}" aria-label="Eksamensdato" required>
        <select name="form" aria-label="Eksamensform">${SP_FORMER.map((f) => `<option${f === x.form ? " selected" : ""}>${esc(f)}</option>`).join("")}</select>
        ${this.eks.length > 1 ? `<button type="button" class="sp-fjern" aria-label="Fjern eksamen">\u2715</button>` : ""}</div>`).join("");
      $("#sp-ny-eks").hidden = this.eks.length >= 4;
    },
    async hentKap(fag) {
      if (this.kap[fag]) { this.visKap(); return; }
      this.kap[fag] = null; this.visKap();
      try { const r = await API.kapitler(fag); this.kap[fag] = (r && r.kapitler) || []; }
      catch (_) { this.kap[fag] = []; }
      this.visKap();
    },
    visKap() {
      const fagene = [...new Set(this.eks.map((e) => e.fag))];
      $("#sp-kapitler").innerHTML = fagene.map((fag) => {
        const kap = this.kap[fag];
        if (kap === null || kap === undefined) return `<div class="sp-kap-fag"><p class="muted small">Henter kapitlene i ${esc(fag)} \u2026</p></div>`;
        if (!kap.length) return `<div class="sp-kap-fag"><p class="muted small">Fant ingen kapitteloversikt for ${esc(fag)}. Beskriv i kommentarfeltet hvor langt du har kommet.</p></div>`;
        const st = this.status[fag] || {};
        const lest = kap.filter((k) => st[k.url]).length;
        return `<details class="sp-kap-fag" open><summary><strong>${esc(fag)}</strong> <span class="muted small">${lest} av ${kap.length} lest</span></summary>
          <div class="sp-kap-liste">${kap.map((k) => { const s = st[k.url] === "kan" ? 2 : st[k.url] === "lest" ? 1 : 0; return `<button type="button" class="sp-kap-knapp sp-st-${s}" data-fag="${esc(fag)}" data-url="${esc(k.url)}" aria-label="${esc(k.tittel)}: ${["ikke lest", "lest", "kan godt"][s]}">${esc(k.tittel)}${k.monster ? ' <em>oppgave</em>' : ""}</button>`; }).join("")}</div>
          <p class="small"><button type="button" class="lenkeknapp sp-alle" data-fag="${esc(fag)}" data-st="">Nullstill</button> \u00b7 <button type="button" class="lenkeknapp sp-alle" data-fag="${esc(fag)}" data-st="lest">Merk alle som lest</button></p></details>`;
      }).join("");
    },
    data() {
      return {
        eksamener: this.eks.filter((e) => e.fag && e.dato).map((e) => ({ ...e, status: this.status[e.fag] || {} })),
        timer: +$("#p-timer").value, dager: $$("#sp-dager input:checked").map((i) => +i.value),
        kollokvie: $("#p-kollokvie").value, mal: $("#p-mal").value,
        jobbDager: +$("#p-jobbdager").value, jobbTimer: +$("#p-jobbtimer").value, juster: !!this.justerer,
        innleveringer: $("#p-innlev").value.trim(), kommentar: $("#p-kommentar").value.trim()
      };
    }
  };
  const SP_TAVLETYPE = { les: "lesing", repeter: "lesing", oppgave: "oppgave", kollokvie: "oppgave", innlevering: "oppgave", prove: "eksamen", buffer: "notat" };
  async function planTilTavle(knapp) {
    if (!SP.okter.length) return;
    knapp.disabled = true; knapp.textContent = "Legger inn \u2026";
    try {
      if (!TV.lastet) await loadRom();
      const b = TV.opprett("Studieplan: " + SP.navn.slice(0, 60), true);
      b.lists[0].cards = SP.okter.map((o) => ({ id: TV.uid(), type: SP_TAVLETYPE[o.type] || "lesing", title: o.tittel, fag: o.fag, due: o.dato || undefined, url: o.url || undefined, notes: [o.detalj, o.min ? o.min + " min" : ""].filter(Boolean).join(" \u00b7 "), created: Date.now() }));
      await TV.lagreNa(b); TV.velger(); TV.vis();
      knapp.textContent = "Lagt i studietavla \u2713";
      knapp.insertAdjacentHTML("afterend", ` <a href="#kort5" data-view="kort5" class="small">\u00c5pne Mitt digitale studierom</a>`);
    } catch (err) { knapp.disabled = false; knapp.textContent = "Pr\u00f8v igjen"; }
  }
  function visPlan(out, r) {
    SP.okter = r.okter || []; SP.navn = r.fag || "";
    out.innerHTML = `<h2>Studieplan: ${esc(r.fag)}</h2>${r.html}` +
      `<div class="sp-handling"><h3>Ta planen med deg</h3><div class="row-btns">` +
      (SP.okter.length ? `<button type="button" class="btn ghost" id="sp-til-tavle">Legg \u00f8ktene i studietavla</button>` : "") +
      (r.ics ? `<button type="button" class="btn ghost" id="sp-ics">Last ned kalender (.ics)</button>` : "") +
      (r.kalender ? `<a class="btn ghost" href="${esc(r.kalender.replace(/^https:/, "webcal:"))}">Abonner p\u00e5 kalenderen</a>` : "") + `</div>` +
      (r.kalender ? `<p class="muted small">Abonnementet oppdateres n\u00e5r du justerer planen, og viser ogs\u00e5 dugnadsoppgavene dine fra kollokviegruppa. Google Kalender: \u00abAndre kalendere\u00bb \u2192 \u00abFra nettadresse\u00bb og lim inn <button type="button" class="lenkeknapp" id="sp-kopier">lenken</button>.</p>` : "") +
      (/Kollokvie/.test(r.html || "") ? `<p class="small"><button type="button" class="lenkeknapp" id="sp-dugnad">Planlegg faglig dugnad med kollokviegruppa \u2192</button></p>` : "") + `</div>` +
      `<p class="muted small">Brukt: ${fmt(r.cost)} kreditter. Planen er lagret p\u00e5 <a href="#min-side" data-view="min-side">Min side</a>. Lag en ny plan n\u00e5r du har kommet lenger, s\u00e5 justeres den.</p>`;
    const k = $("#sp-til-tavle"); if (k) k.addEventListener("click", () => planTilTavle(k));
    const ic = $("#sp-ics"); if (ic) ic.addEventListener("click", () => lastNed("navigo-studieplan.ics", r.ics, "text/calendar"));
    const kp = $("#sp-kopier"); if (kp) kp.addEventListener("click", async () => { try { await navigator.clipboard.writeText(r.kalender); kp.textContent = "lenken (kopiert \u2713)"; } catch (_) { prompt("Kopier lenken:", r.kalender); } });
    const dg = $("#sp-dugnad"); if (dg) dg.addEventListener("click", () => gaaTilKollokvie());
  }
  function lastNed(navn, innhold, type) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([innhold], { type: type + ";charset=utf-8" }));
    a.download = navn; ROOT.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }
  function gaaTilKollokvie() {
    location.hash = "kort5";
    setTimeout(() => { const t = $('#view-kort5 .tab[data-tab="kollokvie"]'); if (t) t.click(); $("#dg").scrollIntoView({ behavior: "smooth" }); }, 150);
  }
  /* ---------- Faglig dugnad i kollokviegruppa ---------- */
  const DG = {
    grupper: [], cid: "", data: null,
    async start() {
      const el = $("#dg-innhold");
      try { this.grupper = (await API.msgOversikt()).filter((k) => k.kind === "group"); }
      catch (_) { el.innerHTML = '<p class="muted small">Gruppene kunne ikke hentes akkurat n\u00e5.</p>'; return; }
      if (!this.grupper.length) { el.innerHTML = '<p class="small">Du er ikke med i noen kollokviegruppe enn\u00e5. <button type="button" class="lenkeknapp" id="dg-ny">Lag en gruppe under Meldinger</button> og del koden med de andre.</p>'; $("#dg-ny").addEventListener("click", () => { const t = $('#view-kort5 .tab[data-tab="meldinger"]'); if (t) t.click(); }); return; }
      if (!this.cid || !this.grupper.some((g) => g.id === this.cid)) this.cid = this.grupper[0].id;
      await this.last();
    },
    async last() {
      try { this.data = await API.dugnad("dugnad_liste", { cid: this.cid }); } catch (err) { $("#dg-innhold").innerHTML = `<p class="muted small">${esc(err.message || err)}</p>`; return; }
      this.vis();
    },
    gnavn(g) { return g.name || (g.members || []).map((m) => m.display_name || (m.email || "").split("@")[0]).filter(Boolean).slice(0, 3).join(", ") || "Gruppe"; },
    vis() {
      const d = this.data || { medlemmer: [], oppgaver: [], typer: {} };
      if (d.error) { $("#dg-innhold").innerHTML = `<p class="muted small">${esc(d.error)}</p>`; return; }
      const navn = new Map((d.medlemmer || []).map((m) => [m.id, m.navn]));
      const neste = new Date(Date.now() + 7 * 864e5).toISOString().slice(0, 10);
      const moter = {}; for (const o of d.oppgaver || []) (moter[o.mote_dato] = moter[o.mote_dato] || []).push(o);
      $("#dg-innhold").innerHTML = `
        <label>Gruppe</label><select id="dg-gruppe">${this.grupper.map((g) => `<option value="${esc(g.id)}"${g.id === this.cid ? " selected" : ""}>${esc(this.gnavn(g))}</option>`).join("")}</select>
        <p class="muted small">${(d.medlemmer || []).length} medlemmer: ${(d.medlemmer || []).map((m) => esc(m.navn)).join(", ")}</p>
        <details class="dg-ny"${Object.keys(moter).length ? "" : " open"}><summary><strong>Fordel oppgaver til neste kollokvie</strong></summary>
          <div class="stack">
            <label>Dato for kollokviet</label><input type="date" id="dg-dato" value="${neste}">
            <label>Fag</label><select id="dg-fag">${FAG.map((f) => `<option>${esc(f)}</option>`).join("")}</select>
            <label>Tema</label><input id="dg-tema" placeholder="F.eks.: Culpa og arbeidsgiveransvar">
            <label>Oppgaver som skal fordeles</label>
            <div class="dg-typer">${Object.entries(d.typer || {}).map(([k, v], i) => `<label><input type="checkbox" value="${esc(k)}"${i < 4 ? " checked" : ""}>${esc(v)}</label>`).join("")}</div>
            <button type="button" class="btn" id="dg-fordel">Fordel oppgavene</button>
            <p class="muted small">Navigo fordeler p\u00e5 omgang, s\u00e5 alle f\u00e5r like mye. Fristen settes til dagen f\u00f8r kollokviet.</p>
          </div></details>
        ${Object.entries(moter).sort().map(([dato, oo]) => `<div class="dg-mote"><h4>Kollokvie ${esc(new Date(dato + "T12:00").toLocaleDateString("nb-NO", { weekday: "long", day: "numeric", month: "short" }))}${oo[0].tema ? " \u00b7 " + esc(oo[0].tema) : ""}</h4><ul>${oo.map((o) => `<li class="${o.ferdig ? "dg-ferdig" : ""}"><label><input type="checkbox" data-dg="${o.id}"${o.ferdig ? " checked" : ""}><span><strong>${esc(navn.get(o.ansvarlig) || "Ingen")}</strong> \u2013 ${esc((d.typer || {})[o.type] || o.type)}</span></label><button type="button" class="dg-slett" data-dgs="${o.id}" aria-label="Slett">\u2715</button></li>`).join("")}</ul></div>`).join("")}
        ${d.kalender ? `<p class="small"><a href="${esc(d.kalender.replace(/^https:/, "webcal:"))}">Abonner p\u00e5 gruppekalenderen</a> \u00b7 <button type="button" class="lenkeknapp" id="dg-kopier">kopier lenken</button></p>` : ""}`;
      $("#dg-gruppe").addEventListener("change", (e) => { this.cid = e.target.value; this.last(); });
      $("#dg-fordel").addEventListener("click", async (e) => {
        const typer = $$(".dg-typer input:checked").map((i) => i.value);
        e.target.disabled = true; e.target.textContent = "Fordeler \u2026";
        try { this.data = await API.dugnad("dugnad_fordel", { cid: this.cid, dato: $("#dg-dato").value, fag: $("#dg-fag").value, tema: $("#dg-tema").value.trim(), typer }); this.vis(); }
        catch (err) { e.target.disabled = false; e.target.textContent = "Pr\u00f8v igjen"; }
      });
      $$("[data-dg]").forEach((c) => c.addEventListener("change", async () => { await API.dugnad("dugnad_oppdater", { id: +c.dataset.dg, ferdig: c.checked }); c.closest("li").classList.toggle("dg-ferdig", c.checked); }));
      $$("[data-dgs]").forEach((b) => b.addEventListener("click", async () => { if (!confirm("Slette oppgaven?")) return; await API.dugnad("dugnad_slett", { id: +b.dataset.dgs }); this.last(); }));
      const kp = $("#dg-kopier"); if (kp) kp.addEventListener("click", async () => { try { await navigator.clipboard.writeText(d.kalender); kp.textContent = "kopiert \u2713"; } catch (_) { prompt("Kopier lenken:", d.kalender); } });
    }
  };
  /* ---------- Felles: last eksternt skript (pdf.js, jsPDF) \u00e9n gang ---------- */
  const SKRIPT = {};
  function lastSkript(url) {
    if (!SKRIPT[url]) SKRIPT[url] = new Promise((ok, feil) => { const s = document.createElement("script"); s.src = url; s.onload = ok; s.onerror = () => feil(new Error("Kunne ikke laste " + url)); document.head.appendChild(s); });
    return SKRIPT[url];
  }
  const PDFJS = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
  const PDFJS_W = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  const JSPDF = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
  async function pdfjs() { await lastSkript(PDFJS); window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_W; return window.pdfjsLib; }

  /* ---------- Spillifisering: XP, niv\u00e5, dager p\u00e5 rad og merker (lagres i studierommet) ---------- */
  const MERKER = {
    forste: ["\ud83c\udfaf", "F\u00f8rste quiz"], full: ["\ud83c\udfc6", "Full pott"], tre: ["\ud83d\udd25", "3 dager p\u00e5 rad"], sju: ["\ud83d\ude80", "7 dager p\u00e5 rad"],
    kort50: ["\ud83c\udccf", "50 kort mestret"], lytter: ["\ud83c\udfa7", "Podcastlytter"], lysbilde: ["\ud83d\udcd1", "Notert til 20 lysbilder"]
  };
  const SPILL = {
    d: { xp: 0, dager: [], merker: [], kort: {}, stats: { quiz: 0, kort: 0, podcast: 0, lysbilder: 0 } }, id: null, hentet: false,
    async hent() {
      if (this.hentet) return; this.hentet = true;
      try { if (!ROM.length) await loadRom(); const r = ROM.find((x) => x.type === "fremdrift"); if (r) { this.id = r.id; Object.assign(this.d, JSON.parse(r.innhold || "{}")); } } catch (_) { /* starter p\u00e5 null */ }
      this.vis();
    },
    rekke() { const s = new Set(this.d.dager); let n = 0; const d = new Date(); for (;;) { const k = d.toISOString().slice(0, 10); if (!s.has(k)) { if (n === 0) { d.setDate(d.getDate() - 1); if (s.has(d.toISOString().slice(0, 10))) continue; } break; } n++; d.setDate(d.getDate() - 1); } return n; },
    gi(xp, stat, merke) {
      const idag = new Date().toISOString().slice(0, 10);
      if (!this.d.dager.includes(idag)) this.d.dager = [...this.d.dager, idag].slice(-120);
      this.d.xp += xp; if (stat) this.d.stats[stat] = (this.d.stats[stat] || 0) + 1;
      const nye = [];
      const gi = (m) => { if (!this.d.merker.includes(m)) { this.d.merker.push(m); nye.push(m); } };
      if (merke) gi(merke);
      const r = this.rekke(); if (r >= 3) gi("tre"); if (r >= 7) gi("sju");
      if (Object.values(this.d.kort).filter((x) => x >= 3).length >= 50) gi("kort50");
      if ((this.d.stats.lysbilder || 0) >= 20) gi("lysbilde");
      this.lagre(); this.vis(nye, xp);
    },
    lagre() {
      clearTimeout(this.t);
      this.t = setTimeout(async () => { try { const r = await API.romCall("rom_lagre", { id: this.id || undefined, type: "fremdrift", tittel: "Fremdrift", innhold: JSON.stringify(this.d) }); if (r && r.id) this.id = r.id; } catch (_) { /* pr\u00f8ver igjen neste gang */ } }, 800);
    },
    vis(nye = [], xp = 0) {
      const el = $("#spill"); if (!el) return;
      const niva = Math.floor(this.d.xp / 100) + 1, rest = this.d.xp % 100;
      el.innerHTML = `<div class="spill-rad"><span class="spill-niva">Niv\u00e5 ${niva}</span><span class="spill-bar"><i style="width:${rest}%"></i></span><span class="muted small">${this.d.xp} XP</span><span class="spill-rekke" title="Dager p\u00e5 rad">\ud83d\udd25 ${this.rekke()}</span></div>` +
        (this.d.merker.length ? `<div class="spill-merker">${this.d.merker.map((m) => MERKER[m] ? `<span title="${esc(MERKER[m][1])}">${MERKER[m][0]} ${esc(MERKER[m][1])}</span>` : "").join("")}</div>` : `<p class="muted small">Samle XP med quiz, flashcards, podcaster og lysbildenotater. \u00d8v litt hver dag for \u00e5 holde rekken i gang.</p>`);
      if (xp || nye.length) visToast(`+${xp} XP${nye.length ? " \u00b7 Nytt merke: " + nye.map((m) => MERKER[m][0] + " " + MERKER[m][1]).join(", ") : ""}`);
    }
  };
  function visToast(tekst) {
    let t = $("#spill-toast"); if (!t) { t = document.createElement("div"); t.id = "spill-toast"; t.className = "spill-toast"; ROOT.appendChild(t); }
    t.textContent = tekst; t.classList.add("vis"); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove("vis"), 2600);
  }

  /* ---------- Popul\u00e6re temaer (det studentene ettersp\u00f8r mest) ---------- */
  async function visTemaer(fag, el, input) {
    el.innerHTML = "";
    try {
      const r = DEMO ? { temaer: [{ tittel: "Kap. 8 \u00c5rsaksvurderingens utgangspunkter", n: 12 }, { tittel: "Kap. 4 Det alminnelige skyldansvaret", n: 9 }] } : await API.fn("quiz_temaer", { fag });
      const t = (r.temaer || []).slice(0, 6);
      if (!t.length) return;
      el.innerHTML = `<span class="muted small">Mest etterspurt n\u00e5:</span>` + t.map((x) => `<button type="button" class="qz-chip" data-tema="${esc(x.tittel.replace(/^Kap\.\s*\d+\s*/, ""))}">${esc(x.tittel.replace(/^Kap\.\s*\d+\s*/, ""))}${x.n ? ` <em>${x.n}</em>` : ""}</button>`).join("");
      el.onclick = (e) => { const b = e.target.closest(".qz-chip"); if (b) { input.value = b.dataset.tema; input.focus(); } };
    } catch (_) { /* valgfritt */ }
  }

  /* ---------- Quiz og flashcards ---------- */
  const QZ = {
    startet: false, data: null, rid: null,
    start() {
      SPILL.hent();
      if (this.startet) return; this.startet = true;
      const f = $("#qz-form");
      visTemaer($("#qz-fag").value, $("#qz-temaer"), $("#qz-tema"));
      $("#qz-fag").addEventListener("change", () => visTemaer($("#qz-fag").value, $("#qz-temaer"), $("#qz-tema")));
      f.addEventListener("submit", async (e) => {
        e.preventDefault();
        const ut = $("#qz-ut"); ut.className = "panel"; ut.hidden = false;
        const n = +$("#qz-antall").value;
        const r = await runTool("quiz", { fag: $("#qz-fag").value, tema: $("#qz-tema").value.trim(), antall: n, kort: n === 5 ? 10 : n === 12 ? 20 : 12 }, ut);
        if (r && r.data) { this.data = r.data; this.rid = r.id; this.quiz(); }
        this.liste(true);
      });
      this.liste();
    },
    async liste(ny) {
      if (ny) RB = null;
      try { if (!RB) RB = (await API.part("ressursbank")).rader || []; } catch (_) { return; }
      const q = RB.filter((r) => r.type === "quiz" && r.data && r.data.quiz);
      $("#qz-liste").innerHTML = q.map((r, i) => `<li><button type="button" class="lenkeknapp" data-qz="${i}">${esc(r.tittel.replace(/^Quiz og flashcards:\s*/, ""))}</button> <span class="muted small">${esc(String(r.tid).slice(0, 10))}</span></li>`).join("") || '<li class="muted small">Ingen enn\u00e5.</li>';
      $("#qz-liste").onclick = (e) => { const b = e.target.closest("[data-qz]"); if (!b) return; const r = q[+b.dataset.qz]; this.data = r.data; this.rid = r.id; const ut = $("#qz-ut"); ut.className = "panel"; this.quiz(); ut.scrollIntoView({ behavior: "smooth" }); };
    },
    quiz() {
      const d = this.data, ut = $("#qz-ut"); let i = 0, riktige = 0;
      if (!d.quiz.length) { this.kort(); return; }
      const vis = () => {
        const q = d.quiz[i];
        ut.innerHTML = `<p class="eyebrow">${esc(d.tittel)} \u00b7 sp\u00f8rsm\u00e5l ${i + 1} av ${d.quiz.length}</p><h3>${esc(q.sporsmal)}</h3><div class="qz-alt">${q.alternativer.map((a, j) => `<button type="button" class="qz-svar" data-j="${j}">${esc(a)}</button>`).join("")}</div><div id="qz-fb"></div>`;
        ut.querySelector(".qz-alt").onclick = (e) => {
          const b = e.target.closest(".qz-svar"); if (!b || ut.querySelector(".qz-svar[disabled]")) return;
          const j = +b.dataset.j, ok = j === q.riktig; if (ok) riktige++;
          ut.querySelectorAll(".qz-svar").forEach((x) => { x.disabled = true; if (+x.dataset.j === q.riktig) x.classList.add("rett"); });
          if (!ok) b.classList.add("feil");
          $("#qz-fb").innerHTML = `<p class="qz-dom ${ok ? "ok" : "nei"}">${ok ? "Riktig!" : "Ikke helt."}</p><p>${esc(q.forklaring)}</p>${q.kilde ? `<p class="muted small">Kilde: ${esc(q.kilde)}</p>` : ""}<button type="button" class="btn" id="qz-neste">${i + 1 < d.quiz.length ? "Neste sp\u00f8rsm\u00e5l" : "Se resultatet"}</button>`;
          $("#qz-neste").onclick = () => { i++; if (i < d.quiz.length) vis(); else slutt(); };
        };
      };
      const slutt = () => {
        const xp = riktige * 10 + (riktige === d.quiz.length ? 20 : 0);
        ut.innerHTML = `<h3>${riktige} av ${d.quiz.length} riktige</h3><p>${riktige === d.quiz.length ? "Full pott! Du kan dette." : riktige / d.quiz.length >= 0.6 ? "Godt jobbet. Ta flashcards p\u00e5 det som satt d\u00e5rligst." : "Dette b\u00f8r du lese mer p\u00e5. Flashcards hjelper deg \u00e5 hente det fram igjen."}</p><div class="row-btns"><button type="button" class="btn" id="qz-tilkort">\u00d8v p\u00e5 flashcards (${d.kort.length})</button><button type="button" class="btn ghost" id="qz-igjen">Ta quizen igjen</button></div>`;
        SPILL.gi(xp, "quiz", riktige === d.quiz.length ? "full" : "forste");
        if (!SPILL.d.merker.includes("forste")) SPILL.gi(0, null, "forste");
        $("#qz-tilkort").onclick = () => this.kort(); $("#qz-igjen").onclick = () => this.quiz();
      };
      vis();
    },
    kort() {
      const d = this.data, ut = $("#qz-ut"), nokkel = (k) => (this.rid || d.tittel) + "|" + k.forside.slice(0, 60);
      let ko = d.kort.map((k) => k).sort((a, b) => (SPILL.d.kort[nokkel(a)] || 0) - (SPILL.d.kort[nokkel(b)] || 0));
      let mestret = 0; const total = ko.length;
      if (!total) { ut.innerHTML = "<p>Ingen flashcards i denne.</p>"; return; }
      const vis = () => {
        if (!ko.length) { ut.innerHTML = `<h3>Alle ${total} kortene sitter!</h3><p>Ta en ny runde i morgen, s\u00e5 holder du glemselskurven unna.</p><button type="button" class="btn ghost" id="qz-kortigjen">Ny runde</button>`; $("#qz-kortigjen").onclick = () => this.kort(); return; }
        const k = ko[0], boks = SPILL.d.kort[nokkel(k)] || 0;
        ut.innerHTML = `<p class="eyebrow">${esc(d.tittel)} \u00b7 ${mestret} av ${total} sitter \u00b7 boks ${boks + 1} av 5</p><button type="button" class="qz-kort" aria-label="Snu kortet"><span class="qz-forside">${esc(k.forside)}</span><span class="qz-bakside" hidden>${esc(k.bakside)}</span><span class="muted small qz-snu">Trykk for \u00e5 snu</span></button><div class="row-btns qz-valg" hidden><button type="button" class="btn ghost" id="qz-ov">\u00d8v mer</button><button type="button" class="btn" id="qz-kan">Kan det</button></div>`;
        ut.querySelector(".qz-kort").onclick = (e) => { const c = e.currentTarget; c.classList.add("snudd"); c.querySelector(".qz-forside").hidden = true; c.querySelector(".qz-bakside").hidden = false; c.querySelector(".qz-snu").hidden = true; ut.querySelector(".qz-valg").hidden = false; };
        $("#qz-kan").onclick = () => { SPILL.d.kort[nokkel(k)] = Math.min(4, boks + 1); ko.shift(); mestret++; SPILL.gi(5, "kort"); vis(); };
        $("#qz-ov").onclick = () => { SPILL.d.kort[nokkel(k)] = 0; ko.push(ko.shift()); SPILL.lagre(); vis(); };
      };
      vis();
    }
  };

  /* ---------- Podcast: finnes det en innspilt lydbok? Ellers et manus som leses opp med to stemmer p\u00e5 enheten ---------- */
  /* ---------- \u00ab\u2026 p\u00e5 1-2-3\u00bb: ett begrep p\u00e5 ett kort med fem farger ---------- */
  const K3_FELT = [
    ["hva", "HVA", "Hva det er"], ["hvor", "HVOR", "Hvor det h\u00f8rer hjemme i faget"], ["hvorfor", "HVORFOR", "Hvorfor vi har regelen"],
    ["hvordan", "HVORDAN", "Hvordan du anvender den i praktikum"], ["dommer", "HVILKE DOMMER", "S\u00e6rlig sentrale dommer"],
  ];
  const K3_FARGE = { hva: [47, 111, 208], hvor: [214, 69, 122], hvorfor: [224, 164, 0], hvordan: [46, 155, 90], dommer: [224, 112, 31] };
  const k3Hjul = () => `<svg class="k3-hjul" viewBox="0 0 40 40" aria-hidden="true">${K3_FELT.map(([k], i) => { const a0 = (i / 5) * 2 * Math.PI - Math.PI / 2, a1 = ((i + 1) / 5) * 2 * Math.PI - Math.PI / 2; const p = (a) => `${(20 + 18 * Math.cos(a)).toFixed(2)} ${(20 + 18 * Math.sin(a)).toFixed(2)}`; return `<path d="M20 20 L${p(a0)} A18 18 0 0 1 ${p(a1)} Z" fill="rgb(${K3_FARGE[k].join(",")})" stroke="#fff" stroke-width="1.2"/>`; }).join("")}<circle cx="20" cy="20" r="6" fill="#fff"/></svg>`;
  function k3Html(d) {
    const tema = String(d.tema || d.tittel || "").replace(/\s*p\u00e5 1-2-3\s*$/i, "");
    const ul = (xs, ol) => xs && xs.length ? `<${ol ? "ol" : "ul"}>${xs.map((x) => `<li>${esc(x)}</li>`).join("")}</${ol ? "ol" : "ul"}>` : "";
    const felt = (k, innhold) => { const f = K3_FELT.find((x) => x[0] === k); return `<section class="k3-felt k3-${k}"><h4><span class="k3-merke">${f[1]}</span><span class="k3-sp">${esc(f[2])}</span></h4>${innhold}</section>`; };
    const dommer = (d.dommer || []).length
      ? `<ul class="k3-dommer">${d.dommer.map((x) => `<li><strong>${esc(x.navn || x.ref)}</strong>${x.navn ? ` <span class="muted small">(${esc(x.ref)})</span>` : ""}${x.poeng ? `<br>${esc(x.poeng)}` : ""}${x.url && x.url !== "#" ? ` <a href="${esc(x.url)}" target="_blank" rel="noopener" class="small">Les i boka</a>` : ""}</li>`).join("")}</ul><p class="muted small">Dommene er hentet fra Lexias b\u00f8ker.</p>`
      : '<p class="muted small">Fant ingen dommer om temaet i Lexias b\u00f8ker. Se kapitlet i boka, eller sp\u00f8r N\u00f8tteknekkeren.</p>';
    return `<article class="k3"><header class="k3-topp">${k3Hjul()}<div><p class="k3-eyebrow">${esc(d.fag || "")}${d.fag ? " \u00b7 " : ""}Navigo</p><h3>${esc(tema)} <span>p\u00e5 1-2-3</span></h3></div></header>` +
      felt("hva", `<p>${esc(d.hva)}</p>`) + felt("hvor", `<p>${esc(d.hvor)}</p>`) + felt("hvorfor", ul(d.hvorfor)) +
      felt("hvordan", ul(d.hvordan, true) + ((d.eksamenstips || []).length ? `<div class="k3-tips"><strong>Eksamenstips</strong>${ul(d.eksamenstips)}</div>` : "")) +
      felt("dommer", dommer) + "</article>";
  }
  const K3 = {
    startet: false, data: null,
    start() {
      if (this.startet) return; this.startet = true;
      visTemaer($("#k3-fag").value, $("#k3-temaer"), $("#k3-tema"));
      $("#k3-fag").addEventListener("change", () => visTemaer($("#k3-fag").value, $("#k3-temaer"), $("#k3-tema")));
      $("#k3-form").addEventListener("submit", async (e) => {
        e.preventDefault();
        const ut = $("#k3-ut"); ut.className = "panel"; ut.hidden = false;
        const fag = $("#k3-fag").value;
        const r = await runTool("kort123", { fag, tema: $("#k3-tema").value.trim() }, ut);
        if (r && r.data && r.data.hva) { this.data = { ...r.data, fag }; this.vis(); }
        this.liste(true);
      });
      this.liste();
    },
    async liste(ny) {
      if (ny) RB = null;
      try { if (!RB) RB = (await API.part("ressursbank")).rader || []; } catch (_) { return; }
      const k = RB.filter((r) => r.type === "kort123" && r.data && r.data.hva);
      $("#k3-liste").innerHTML = k.map((r, i) => `<li><button type="button" class="lenkeknapp" data-k3="${i}">${esc(r.tittel)}</button> <span class="muted small">${esc(String(r.tid).slice(0, 10))}</span></li>`).join("") || '<li class="muted small">Ingen kort enn\u00e5.</li>';
      $("#k3-liste").onclick = (e) => { const b = e.target.closest("[data-k3]"); if (!b) return; const r = k[+b.dataset.k3]; this.data = { ...r.data, fag: r.data.fag || r.fag || "" }; this.vis(); $("#k3-ut").scrollIntoView({ behavior: "smooth", block: "start" }); };
    },
    vis() {
      const ut = $("#k3-ut"); ut.hidden = false; ut.className = "";
      ut.innerHTML = k3Html(this.data) + '<div class="row-btns k3-knapper"><button type="button" class="btn ghost" id="k3-pdf">\u2913 PDF</button><button type="button" class="btn ghost" id="k3-quiz">Lag quiz om temaet</button></div>';
      $("#k3-pdf").onclick = () => this.pdf();
      $("#k3-quiz").onclick = () => {
        const tema = String(this.data.tema || "").trim();
        const tab = $('.tab[data-tab="quiz"]'); if (tab) tab.click();
        const fs = $("#qz-fag"); if (fs && this.data.fag) fs.value = this.data.fag;
        const ti = $("#qz-tema"); if (ti) { ti.value = tema; ti.focus(); }
        $("#qz-form").scrollIntoView({ behavior: "smooth", block: "start" });
      };
    },
    async pdf() {
      const d = this.data; const knapp = $("#k3-pdf"); if (knapp) knapp.disabled = true;
      try {
        await lastSkript(JSPDF);
        const { jsPDF } = window.jspdf; const doc = new jsPDF({ unit: "mm", format: "a4" });
        const W = doc.internal.pageSize.getWidth(), H = doc.internal.pageSize.getHeight(), m = 16, bredde = W - 2 * m - 6;
        let y = m;
        const tema = String(d.tema || d.tittel || "").replace(/\s*p\u00e5 1-2-3\s*$/i, "");
        doc.setFont("helvetica", "bold"); doc.setFontSize(22); doc.setTextColor(19, 38, 46); doc.text(`${tema} p\u00e5 1-2-3`, m, y + 6);
        doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(90); doc.text(`${d.fag ? d.fag + " \u00b7 " : ""}Navigo \u2013 Study Smart \u00b7 Lexia Education`, m, y + 12);
        y += 20;
        const linjer = (tekst, sz) => { doc.setFontSize(sz); return doc.splitTextToSize(String(tekst), bredde); };
        const seksjon = (k, rader) => {
          const f = K3_FELT.find((x) => x[0] === k), c = K3_FARGE[k];
          const blokk = rader.flatMap(([tx, pre]) => linjer((pre || "") + tx, 10.5).map((l, i) => (i && pre ? "   " + l : l)));
          const h = 9 + blokk.length * 4.8 + 3;
          if (y + h > H - m) { doc.addPage(); y = m; }
          doc.setFillColor(c[0], c[1], c[2]); doc.rect(m, y, 2.2, h, "F");
          doc.setFillColor(Math.round(255 - (255 - c[0]) * 0.1), Math.round(255 - (255 - c[1]) * 0.1), Math.round(255 - (255 - c[2]) * 0.1)); doc.rect(m + 2.2, y, W - 2 * m - 2.2, h, "F");
          doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(c[0], c[1], c[2]); doc.text(f[1], m + 5, y + 6);
          doc.setFont("helvetica", "normal"); doc.setTextColor(90); doc.text(f[2], m + 5 + doc.getTextWidth(f[1] + "  "), y + 6);
          doc.setTextColor(19, 38, 46); doc.setFontSize(10.5);
          blokk.forEach((l, i) => doc.text(l, m + 5, y + 11.5 + i * 4.8));
          y += h + 4;
        };
        seksjon("hva", [[d.hva]]); seksjon("hvor", [[d.hvor]]);
        seksjon("hvorfor", (d.hvorfor || []).map((x) => [x, "\u2022 "]));
        seksjon("hvordan", [...(d.hvordan || []).map((x, i) => [x, `${i + 1}. `]), ...((d.eksamenstips || []).length ? [["Eksamenstips:"], ...(d.eksamenstips || []).map((x) => [x, "\u2022 "])] : [])]);
        seksjon("dommer", (d.dommer || []).length ? d.dommer.map((x) => [`${x.navn ? x.navn + " " : ""}(${x.ref})${x.poeng ? ": " + x.poeng : ""}`, "\u2022 "]) : [["Fant ingen dommer om temaet i Lexias b\u00f8ker."]]);
        doc.save(`${tema.replace(/[\\/:*?"<>|]+/g, " ").trim() || "kort"} p\u00e5 1-2-3.pdf`);
      } catch (_) { alert("Kunne ikke lage PDF-en. Pr\u00f8v igjen."); }
      finally { if (knapp) knapp.disabled = false; }
    },
  };
  const PC = {
    startet: false, data: null, i: 0, spiller: false, fart: 1,
    start() {
      SPILL.hent();
      if (this.startet) return; this.startet = true;
      visTemaer($("#pc-fag").value, $("#pc-temaer"), $("#pc-tema"));
      $("#pc-fag").addEventListener("change", () => visTemaer($("#pc-fag").value, $("#pc-temaer"), $("#pc-tema")));
      $("#pc-form").addEventListener("submit", async (e) => {
        e.preventDefault();
        const fag = $("#pc-fag").value, tema = $("#pc-tema").value.trim(), ut = $("#pc-ut");
        if (!e.submitter || e.submitter.id !== "pc-likevel") {
          try {
            const r = DEMO ? { lydbok: [] } : await API.fn("podcast_finnes", { fag, tema });
            if (r.lydbok && r.lydbok.length) {
              ut.className = "panel"; ut.innerHTML = `<h3>Det finnes allerede en innspilt lydbok</h3><p>Lexias bok har et innlest sammendrag om dette. Det er gratis:</p><ul>${r.lydbok.map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">\ud83c\udfa7 ${esc(l.tittel)}</a></li>`).join("")}</ul><button type="submit" form="pc-form" class="btn ghost" id="pc-likevel">Lag en egen episode likevel (${fmt(rateOf("podcast"))} kreditter)</button>`;
              return;
            }
          } catch (_) { /* lag episode */ }
        }
        ut.className = "panel";
        const r = await runTool("podcast", { fag, tema }, ut);
        if (r && r.data) { this.data = r.data; this.spillerVis(); }
        this.liste(true);
      });
      this.liste();
      if (window.speechSynthesis) speechSynthesis.onvoiceschanged = () => {};
    },
    async liste(ny) {
      if (ny) RB = null;
      try { if (!RB) RB = (await API.part("ressursbank")).rader || []; } catch (_) { return; }
      const q = RB.filter((r) => r.type === "podcast" && r.data && r.data.replikker);
      $("#pc-liste").innerHTML = q.map((r, i) => `<li><button type="button" class="lenkeknapp" data-pc="${i}">\ud83c\udfa7 ${esc(r.data.tittel || r.tittel)}</button> <span class="muted small">${esc(String(r.tid).slice(0, 10))}</span></li>`).join("") || '<li class="muted small">Ingen enn\u00e5.</li>';
      $("#pc-liste").onclick = (e) => { const b = e.target.closest("[data-pc]"); if (!b) return; this.data = q[+b.dataset.pc].data; $("#pc-ut").className = "panel"; this.spillerVis(); $("#pc-ut").scrollIntoView({ behavior: "smooth" }); };
    },
    stemmer() {
      const alle = (window.speechSynthesis && speechSynthesis.getVoices()) || [];
      const no = alle.filter((v) => /^(nb|no|nn)/i.test(v.lang));
      return { a: no[0] || null, b: no[1] || no[0] || null, finnes: no.length > 0 };
    },
    spillerVis() {
      this.stopp(); this.i = 0;
      const d = this.data, ut = $("#pc-ut");
      const st = this.stemmer();
      ut.innerHTML = `<p class="eyebrow">Navigo-podcast</p><h3>${esc(d.tittel)}</h3>
        <div class="pc-kontroll"><button type="button" id="pc-forrige" aria-label="Forrige replikk">\u23ee</button><button type="button" class="pc-spill" id="pc-spill" aria-label="Spill av">\u25b6</button><button type="button" id="pc-neste" aria-label="Neste replikk">\u23ed</button>
        <label class="small">Fart <select id="pc-fart"><option value="0.9">0,9\u00d7</option><option value="1" selected>1\u00d7</option><option value="1.15">1,15\u00d7</option><option value="1.3">1,3\u00d7</option></select></label></div>
        ${window.speechSynthesis ? (st.finnes ? "" : '<p class="muted small">Enheten din har ingen norsk stemme installert, s\u00e5 opplesningen kan h\u00f8res utenlandsk ut. P\u00e5 iPhone: Innstillinger \u2192 Tilgjengelighet \u2192 Opplest innhold \u2192 Stemmer \u2192 Norsk.</p>') : '<p class="muted small">Nettleseren din kan ikke lese opp tekst. Les manuset under.</p>'}
        <ol class="pc-manus">${d.replikker.map((x, i) => `<li data-i="${i}" class="pc-${x.rolle}"><strong>${x.rolle === "A" ? "Programleder" : "Fagperson"}:</strong> ${esc(x.tekst)}</li>`).join("")}</ol>
        ${(d.nokkelpunkter || []).length ? `<h4>Husk dette</h4><ul>${d.nokkelpunkter.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
        <div class="row-btns"><button type="button" class="btn ghost" id="pc-manusned">Last ned manus</button></div>`;
      $("#pc-spill").onclick = () => (this.spiller ? this.pause() : this.spill());
      $("#pc-neste").onclick = () => { this.i = Math.min(d.replikker.length - 1, this.i + 1); if (this.spiller) this.spill(true); else this.marker(); };
      $("#pc-forrige").onclick = () => { this.i = Math.max(0, this.i - 1); if (this.spiller) this.spill(true); else this.marker(); };
      $("#pc-fart").onchange = (e) => { this.fart = +e.target.value; if (this.spiller) this.spill(true); };
      ut.querySelector(".pc-manus").onclick = (e) => { const li = e.target.closest("li[data-i]"); if (li) { this.i = +li.dataset.i; this.spill(true); } };
      $("#pc-manusned").onclick = () => lastNed(`${d.tittel}.txt`, d.tittel + "\n\n" + d.replikker.map((x) => `${x.rolle === "A" ? "Programleder" : "Fagperson"}: ${x.tekst}`).join("\n\n") + ((d.nokkelpunkter || []).length ? "\n\nHusk dette:\n- " + d.nokkelpunkter.join("\n- ") : ""), "text/plain");
      this.marker();
    },
    marker() { $$(".pc-manus li").forEach((li) => li.classList.toggle("na", +li.dataset.i === this.i)); const n = $(`.pc-manus li[data-i="${this.i}"]`); if (n && this.spiller) n.scrollIntoView({ block: "nearest", behavior: "smooth" }); },
    spill(fraStart) {
      if (!window.speechSynthesis) return;
      if (!fraStart && speechSynthesis.paused) { speechSynthesis.resume(); this.spiller = true; $("#pc-spill").textContent = "\u23f8"; return; }
      speechSynthesis.cancel(); this.spiller = true; $("#pc-spill").textContent = "\u23f8";
      const d = this.data, st = this.stemmer();
      const neste = () => {
        if (!this.spiller) return;
        if (this.i >= d.replikker.length) { this.spiller = false; $("#pc-spill").textContent = "\u25b6"; SPILL.gi(15, "podcast", "lytter"); return; }
        this.marker();
        const x = d.replikker[this.i], u = new SpeechSynthesisUtterance(x.tekst);
        u.lang = "nb-NO"; const v = x.rolle === "A" ? st.a : st.b; if (v) u.voice = v;
        u.rate = this.fart; u.pitch = x.rolle === "A" ? 1.08 : (st.a === st.b ? 0.82 : 1);
        u.onend = () => { if (!this.spiller) return; this.i++; neste(); };
        speechSynthesis.speak(u);
      };
      neste();
    },
    pause() { if (window.speechSynthesis) speechSynthesis.pause(); this.spiller = false; const b = $("#pc-spill"); if (b) b.textContent = "\u25b6"; },
    stopp() { if (window.speechSynthesis) speechSynthesis.cancel(); this.spiller = false; }
  };

  /* ---------- Lysbilder med notater (forelesningsmodus) og notatark-PDF ---------- */
  const FM = {
    startet: false, pdf: null, side: 1, rad: null, d: null, tekst: {},
    start() {
      SPILL.hent();
      if (!this.startet) {
        this.startet = true;
        $("#fm-fil").addEventListener("change", (e) => { const f = e.target.files[0]; e.target.value = ""; if (f) this.lastOpp(f); });
        $("#fm-forrige").addEventListener("click", () => this.gaa(this.side - 1));
        $("#fm-neste").addEventListener("click", () => this.gaa(this.side + 1));
        $("#fm-notat").addEventListener("input", () => { this.d.notater[this.side] = $("#fm-notat").value; this.lagre(); });
        $("#fm-forklar").addEventListener("click", () => this.forklar());
        $("#fm-pdf").addEventListener("click", () => this.eksport());
        $("#fm-tidligere").addEventListener("change", (e) => { const r = ROM.find((x) => String(x.id) === e.target.value); if (r) this.aapne(r); });
        let sx = 0; const c = $("#fm-canvas");
        c.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
        c.addEventListener("touchend", (e) => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) this.gaa(this.side + (dx < 0 ? 1 : -1)); });
      }
      this.tidligere();
    },
    async tidligere() {
      try { if (!ROM.length) await loadRom(); } catch (_) { return; }
      const f = ROM.filter((x) => x.type === "forelesning");
      const s = $("#fm-tidligere"); s.hidden = !f.length;
      s.innerHTML = '<option value="">\u00c5pne en tidligere forelesning \u2026</option>' + f.map((x) => `<option value="${x.id}">${esc(x.tittel)}</option>`).join("");
    },
    status(t) { $("#fm-status").textContent = t || ""; },
    async lastOpp(fil) {
      if (!/pdf$/i.test(fil.name) && fil.type !== "application/pdf") { this.status("Bruk PDF. PowerPoint lagrer du som PDF f\u00f8rst (Fil \u2192 Eksporter \u2192 PDF)."); return; }
      this.status("Laster opp lysbildene \u2026");
      try {
        let sti = null, url = null;
        if (DEMO) url = URL.createObjectURL(fil); else sti = await API.lastOpp(UID, fil);
        this.d = { fil: sti, navn: fil.name.replace(/\.pdf$/i, ""), fag: $("#fm-fag").value, sider: 0, notater: {} };
        this.rad = null;
        await this.last(url);
        this.lagre(true);
      } catch (err) { this.status("Kunne ikke laste opp: " + (err.message || err)); }
    },
    async aapne(r) {
      try { this.d = JSON.parse(r.innhold || "{}"); this.d.notater = this.d.notater || {}; this.rad = r; await this.last(); } catch (err) { this.status("Kunne ikke \u00e5pne: " + (err.message || err)); }
    },
    async last(objUrl) {
      this.status("Henter lysbildene \u2026");
      const lib = await pdfjs();
      const url = objUrl || await API.filUrl(UID, this.d.fil.split("/").slice(1).join("/"));
      this.pdf = await lib.getDocument(url).promise; this.tekst = {};
      this.d.sider = this.pdf.numPages; this.side = Math.min(this.d.sist || 1, this.d.sider);
      $("#fm-visning").hidden = false; this.status(`${this.d.navn} \u00b7 ${this.d.sider} lysbilder`);
      if (this.d.fag) $("#fm-fag").value = this.d.fag;
      await this.tegn();
    },
    async tegn() {
      const pg = await this.pdf.getPage(this.side), c = $("#fm-canvas");
      const bredde = Math.min(900, c.parentElement.clientWidth || 340) * (window.devicePixelRatio || 1);
      const vp0 = pg.getViewport({ scale: 1 }), vp = pg.getViewport({ scale: bredde / vp0.width });
      c.width = vp.width; c.height = vp.height;
      await pg.render({ canvasContext: c.getContext("2d"), viewport: vp }).promise;
      $("#fm-side").textContent = `${this.side} / ${this.d.sider}`; $("#fm-nr").textContent = this.side;
      $("#fm-notat").value = this.d.notater[this.side] || ""; $("#fm-svar").hidden = true;
    },
    gaa(n) { if (!this.pdf || n < 1 || n > this.d.sider) return; this.d.sist = n; this.side = n; this.tegn(); this.lagre(); },
    lagre(straks) {
      clearTimeout(this.t);
      this.t = setTimeout(async () => {
        try {
          const r = await API.romCall("rom_lagre", { id: this.rad ? this.rad.id : undefined, type: "forelesning", tittel: this.d.navn.slice(0, 200), fag: this.d.fag, innhold: JSON.stringify(this.d) });
          if (r && r.id && !this.rad) { this.rad = { id: r.id }; romLaster = false; ROM = []; this.tidligere(); }
          const antall = Object.values(this.d.notater).filter((x) => String(x).trim()).length;
          if (antall > (this.d.belonnet || 0)) { SPILL.gi(2 * (antall - (this.d.belonnet || 0)), null); SPILL.d.stats.lysbilder = (SPILL.d.stats.lysbilder || 0) + (antall - (this.d.belonnet || 0)); this.d.belonnet = antall; }
        } catch (_) { this.status("Notatene ble ikke lagret. Sjekk nettet."); }
      }, straks ? 0 : 900);
    },
    async sidetekst(n) {
      if (this.tekst[n] != null) return this.tekst[n];
      try { const tc = await (await this.pdf.getPage(n)).getTextContent(); this.tekst[n] = tc.items.map((i) => i.str).join(" ").replace(/\s+/g, " ").trim(); } catch (_) { this.tekst[n] = ""; }
      return this.tekst[n];
    },
    async forklar() {
      const tekst = await this.sidetekst(this.side);
      if (tekst.length < 5) { $("#fm-svar").hidden = false; $("#fm-svar").innerHTML = "<p>Lysbildet har ingen lesbar tekst (det er kanskje et bilde). Beskriv det med egne ord i notatfeltet og bruk N\u00f8tteknekkeren.</p>"; return; }
      await runTool("lysbilde", { fag: $("#fm-fag").value, forelesning: this.d.navn, side: this.side, tekst, notat: $("#fm-notat").value }, $("#fm-svar"));
    },
    async eksport() {
      if (!this.pdf) return;
      const knapp = $("#fm-pdf"), oppsett = +$("#fm-oppsett").value;
      knapp.disabled = true; knapp.textContent = "Lager notatark \u2026";
      try {
        await lastSkript(JSPDF);
        const { jsPDF } = window.jspdf; const doc = new jsPDF({ unit: "mm", format: "a4" });
        const W = 210, H = 297, M = 12, linje = 8;
        const linjer = (x, y0, b, y1) => { doc.setDrawColor(200); doc.setLineWidth(0.2); for (let y = y0; y <= y1; y += linje) doc.line(x, y, x + b, y); };
        const skrivNotat = (tekst, x, y0, b, y1) => { if (!tekst) return; doc.setFontSize(10); doc.setTextColor(30); const l = doc.splitTextToSize(tekst, b); let y = y0 - 1.6; for (const s of l) { if (y > y1) break; doc.text(s, x, y); y += linje; } };
        const perSide = oppsett === 1 ? 1 : oppsett === 2 ? 2 : 3;
        for (let n = 1; n <= this.d.sider; n++) {
          const pos = (n - 1) % perSide;
          if (n > 1 && pos === 0) doc.addPage();
          if (pos === 0) { doc.setFontSize(8); doc.setTextColor(120); doc.text(`${this.d.navn} \u00b7 ${this.d.fag || ""}`, M, 7); doc.text(`Navigo \u00b7 Lexia Education`, W - M, 7, { align: "right" }); }
          const pg = await this.pdf.getPage(n), vp0 = pg.getViewport({ scale: 1 }), vp = pg.getViewport({ scale: 1100 / vp0.width });
          const c = document.createElement("canvas"); c.width = vp.width; c.height = vp.height;
          await pg.render({ canvasContext: c.getContext("2d"), viewport: vp }).promise;
          const bilde = c.toDataURL("image/jpeg", 0.8), forhold = vp.height / vp.width, notat = this.d.notater[n] || "";
          if (perSide === 1) {
            const b = W - 2 * M, h = Math.min(b * forhold, 130);
            doc.addImage(bilde, "JPEG", M, 12, h / forhold, h); doc.setDrawColor(160); doc.rect(M, 12, h / forhold, h);
            const y0 = 12 + h + 12; linjer(M, y0, b, H - 12); skrivNotat(notat, M + 1, y0, b - 2, H - 12);
          } else {
            const radH = (H - 22) / perSide, y = 12 + pos * radH, bb = perSide === 2 ? 108 : 92, h = Math.min(bb * forhold, radH - 8);
            doc.addImage(bilde, "JPEG", M, y, h / forhold, h); doc.setDrawColor(160); doc.rect(M, y, h / forhold, h);
            doc.setFontSize(8); doc.setTextColor(120); doc.text(String(n), M, y + h + 4);
            const x = M + h / forhold + 6, b = W - M - x; linjer(x, y + 6, b, y + radH - 6); skrivNotat(notat, x + 1, y + 6, b - 2, y + radH - 6);
          }
        }
        doc.save(`${this.d.navn} \u2013 notatark.pdf`);
        SPILL.gi(10, null);
      } catch (err) { this.status("Notatarket kunne ikke lages: " + (err.message || err)); }
      knapp.disabled = false; knapp.textContent = "Last ned notatark (PDF)";
    }
  };
  async function onPlan(e) {
    e.preventDefault();
    const p = SP.data();
    const out = $("#plan-out");
    if (!p.eksamener.length) { out.hidden = false; out.innerHTML = "<p>Legg inn minst \u00e9n eksamen med dato.</p>"; return; }
    if (!p.dager.length) { out.hidden = false; out.innerHTML = "<p>Velg minst \u00e9n lesedag.</p>"; return; }
    out.hidden = false;
    const start = new Date(Date.now() - 5000).toISOString();
    const stop = startWorking(out, STEPS_PLAN);
    try {
      const r = await API.plan(p);
      stop();
      if (r.error === "saldo") { out.innerHTML = `<p>Du har for f\u00e5 kreditter (${fmt(r.cost)} trengs). <button type="button" class="lenkeknapp" data-kjop-kreditter>Kj\u00f8p flere kreditter</button>.</p>`; return; }
      if (r.error) { out.innerHTML = r.error === "tilgang" ? errorText(r.error) : `<p>${esc(r.error)}</p>`; return; }
      visPlan(out, r);
      out.scrollIntoView({ behavior: "smooth", block: "start" });
      await refresh();
    } catch (err) {
      stop();
      if (nettfeil(err)) {
        const rr = await hentEtterBrudd(out, "laeringsplaner", start);
        if (rr && rr.plan && rr.plan.html) { visPlan(out, { fag: rr.fag, html: rr.plan.html, okter: rr.plan.okter || [], cost: RATES.kartlegging + RATES.plan }); refresh(); return; }
        out.innerHTML = bruddTekst; refresh(); return;
      }
      out.innerHTML = `<p>Planen kunne ikke lages. Ingen kreditter er trukket. (${esc(err.message || err)})</p>`;
    }
  }

  const LINKS = Object.assign({}, CFG.purchaseLinks || {});
  function errorText(code) {
    if (code === "tilgang") return `<p>Du har ikke et aktivt Navigo-abonnement. <a href="${esc(LINKS.navigo || "#")}" target="_blank" rel="noopener">Se abonnementene</a>.</p>`;
    return `<p>${esc(code)}</p>`;
  }


  /* ---------- Kort 3\u20136: verkt\u00f8y, studierom og b\u00f8ker ---------- */
  const NAV_SITE = "https://navigo-studysmart.simplerosites.com";
  /* ---------- Lovdata-visning: lovtekst med markeringer og merknadsfelt ---------- */
  // Fargekoden (Mortens system). Eldre kategorier beholdes slik at lagrede veiledninger fortsatt vises.
  const LD_KAT = {
    hovedregel: ["Hovedregel", "ld-bla"], vilkar: ["Vilk\u00e5r og andre understrekninger", "ld-svart"], unntak: ["Unntak", "ld-gronn"],
    hensyn: ["Viktig \u00e5 kjenne de legislative hensynene", "ld-rod"], tolkning: ["Tolkes i lys av dommer og rettskilder \u2013 se merknad", "ld-gul"], henvisning: ["Krysshenvisning", "ld-lenke"],
    rettsfolge: ["Rettsf\u00f8lge og valg", "ld-lilla"], vurdering: ["Vurderingstema", "ld-rod"], nokkelord: ["N\u00f8kkelord", "ld-gul"], saerregel: ["S\u00e6rregel (hel setning)", "ld-gronnbak"]
  };
  const KOPI_IKON = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/></svg>';
  const LD_BAR = '<svg viewBox="0 0 16 16"><rect x="2" y="1" width="10" height="13" rx="1"/></svg><svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6"/></svg><svg viewBox="0 0 16 16"><path d="M2 14l6-6 2 2 4-8-6 4-2-2z"/></svg><svg viewBox="0 0 16 16"><rect x="1" y="2" width="3" height="12"/><rect x="5" y="2" width="3" height="12"/><rect x="9" y="2" width="3" height="12"/></svg><svg viewBox="0 0 16 16"><rect x="2" y="2" width="12" height="12" rx="2"/></svg><svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6"/></svg>';
  const ANSVAR = "Du har selv ansvaret for at understrekninger, markeringer, merknader og andre innarbeidelser er i samsvar med hjelpemiddelreglene ved ditt l\u00e6rested og i emnet. Forslagene fra Navigo er veiledende. Kontroller ordlyden og hver henvisning i Lovdata f\u00f8r du legger noe inn.";
  let ldTeller = 0;
  function ldLedd(tekst, marks, merk, pre) {
    const iv = [];
    for (const m of marks) { const i = tekst.indexOf(m.tekst); if (i < 0 || !m.tekst) continue; iv.push({ s: i, e: i + m.tekst.length, k: LD_KAT[m.kategori] ? m.kategori : "vilkar" }); }
    const chev = [];
    for (const m of merk) {
      const i = tekst.indexOf(m.ord); if (i < 0 || !m.ord) continue;
      const e = i + m.ord.length;
      if (!iv.some((x) => x.s <= i && e <= x.e && x.k === "nokkelord")) iv.push({ s: i, e, k: "nokkelord" });
      chev.push({ p: e, id: `${pre}-${m.n}`, n: m.n });
    }
    // Pilen settes etter det markerte ordet, slik Lovdata gj\u00f8r.
    chev.forEach((c) => { const x = iv.find((x) => x.k !== "saerregel" && c.p > x.s && c.p < x.e); if (x) c.p = x.e; });
    const pts = [...new Set([0, tekst.length, ...iv.flatMap((x) => [x.s, x.e]), ...chev.map((c) => c.p)])].sort((a, b) => a - b);
    let out = "";
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      out += chev.filter((c) => c.p === a).map((c) => `<button type="button" class="ld-chev" data-merk="${c.id}" aria-label="Vis merknad ${c.n + 1}"><svg viewBox="0 0 10 16" aria-hidden="true"><path d="M3 3l5 5-5 5"/></svg></button>`).join("");
      if (i === pts.length - 1) break;
      const b = pts[i + 1], dekk = iv.filter((x) => x.s <= a && b <= x.e), s = esc(tekst.slice(a, b));
      out += dekk.length ? `<span class="${dekk.map((x) => LD_KAT[x.k][1] + " ld-k-" + x.k).join(" ")}" title="${esc(dekk.map((x) => LD_KAT[x.k][0]).join(", "))}">${s}</span>` : s;
    }
    return out;
  }
  function ldKilde(b) {
    const lenke = (tekst) => (b.url ? `<a href="${esc(b.url)}" target="_blank" rel="noopener">${esc(tekst)}</a>` : esc(tekst));
    if (b.kilde === "lovdata.no") return `Lovteksten er hentet fra ${lenke("lovdata.no")}.`;
    if (b.kilde === "Jusshack Kildebase") return `Lovteksten er hentet fra ${lenke("Jusshack Kildebase")}.`;
    if (b.kilde === "limt_inn") return "Lovteksten er den du limte inn.";
    return '<span class="ld-adv">Ordlyden er gjengitt av KI. Kontroller den mot Lovdata.</span>';
  }
  const UL_TYPE = { forutsetter: "Loven forutsetter regelen", delvis: "Delvis lovfestet", naerliggende: "N\u00e6rliggende bestemmelse", analogi: "Analogigrunnlag" };
  function ulKopi(tekst, lbl) { return `<button type="button" class="kopi" data-kopi="${esc(tekst)}" title="Kopier og lim inn som merknad i Lovdata">${KOPI_IKON}<span>${esc(lbl || "Kopier")}</span></button>`; }
  function ulHtml(d) {
    const kn = d.knagger || [], vk = d.vilkar || [];
    const lenke = (tekst, url) => url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(tekst)}</a>` : esc(tekst);
    const forste = kn[0] ? kn[0].bestemmelse : "";
    return `<div class="ul-vis"><h3>${esc(d.tittel)}</h3>` +
      (d.grunnlag ? `<p class="ul-grunnlag"><span class="ul-merke">Ulovfestet</span> ${esc(d.grunnlag)}</p>` : "") +
      `<h4><span class="ul-nr">1</span>Fest merknaden her</h4>` +
      (kn.length ? kn.map((k, i) => `<div class="ul-knagg${i ? "" : " hoved"}"><div class="ul-khead"><strong>${lenke(k.bestemmelse, k.url)}</strong>${k.tittel ? ` <span class="muted">${esc(k.tittel)}</span>` : ""}<em class="ul-type">${esc(i ? UL_TYPE[k.type] || "" : "Hovedknagg \u00b7 " + (UL_TYPE[k.type] || ""))}</em></div>` +
        `<p>${k.ord ? `Lag merknaden p\u00e5 ordet <mark class="ul-ord">${esc(k.ord)}</mark>.` : "Lag merknaden p\u00e5 paragrafoverskriften."} ${esc(k.hvorfor || "")}</p>` +
        (i && forste ? `<div class="ul-kryss"><code>${esc(d.prefiks + " \u2013 se merknad til " + forste)}</code>${ulKopi(d.prefiks + " \u2013 se merknad til " + forste, "Kopier krysshenvisning")}</div>` : "") + `</div>`).join("")
        : '<p class="muted">Navigo fant ingen sikker knagg i loven. Legg merknaden p\u00e5 den bestemmelsen du uansett sl\u00e5r opp i n\u00e5r temaet kommer, og bruk samme prefiks.</p>') +
      `<h4><span class="ul-nr">2</span>Merknaden, klar til \u00e5 lime inn</h4>` +
      (d.merknadVilkar ? `<div class="ul-merknad"><div class="ul-mhead"><strong>Ordnet etter vilk\u00e5r</strong>${ulKopi(d.merknadVilkar)}</div><pre>${esc(d.merknadVilkar)}</pre></div>` +
        `<div class="ul-merknad"><div class="ul-mhead"><strong>Bare henvisninger</strong>${ulKopi(d.merknadKort)}</div><pre>${esc(d.merknadKort)}</pre></div>` +
        '<p class="muted small">Velg \u00abBare henvisninger\u00bb hvis l\u00e6restedet ditt ikke tillater stikkord i merknadene. Prefikset \u00abULOVFESTET:\u00bb gj\u00f8r at alle de ulovfestede reglene ser like ut, s\u00e5 du kjenner dem igjen under tidspress.</p>'
        : '<p class="muted">Fant ingen dommer som kunne kontrolleres mot Lexias b\u00f8ker eller Jusshack Kildebase.</p>') +
      `<h4><span class="ul-nr">3</span>Vilk\u00e5rene og dommene</h4><ol class="ul-vilkar">` +
      vk.map((v) => `<li><strong>${esc(v.navn)}</strong>${v.innhold ? `<p>${esc(v.innhold)}</p>` : ""}${(v.dommer || []).length ? `<ul>${v.dommer.map((x) => `<li>${lenke(x.ref, x.url)}${x.navn ? ` (${esc(x.navn)})` : ""}${x.bok ? ' <span title="Omtalt i Lexias multimediebok">\ud83d\udcd8</span>' : ""}${x.poeng ? `: ${esc(x.poeng)}` : ""}</li>`).join("")}</ul>` : ""}</li>`).join("") + `</ol>` +
      ((d.tips || []).length ? `<h4><span class="ul-nr">4</span>Slik organiserer du de ulovfestede omr\u00e5dene</h4><ul>${d.tips.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "") +
      ((d.eksamen || []).length ? `<h4>P\u00e5 eksamen</h4><ul>${d.eksamen.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "") +
      '<p class="ansvar small">Kontroller hver henvisning, og sjekk at merknadene er i samsvar med hjelpemiddelreglene ved ditt l\u00e6rested og i emnet.</p></div>';
  }
  function ldVis(d) {
    if (d && d.form === "ulovfestet") return ulHtml(d);
    const best = Array.isArray(d && d.bestemmelser) ? d.bestemmelser : [];
    const brukt = new Set(); best.forEach((b) => (b.markeringer || []).forEach((m) => brukt.add(m.kategori)));
    if (best.some((b) => (b.merknader || []).length) && !brukt.has("nokkelord")) brukt.add("tolkning");
    const legend = Object.entries(LD_KAT).filter(([k]) => brukt.has(k)).map(([k, [navn, cls]]) => `<li><span class="${cls} ld-k-${k}">Abc</span>${esc(navn)}</li>`).join("") + '<li class="ld-egne-li"><button type="button" class="lenkeknapp ld-egne-knapp">Bruk egne farger</button></li>';
    const blokker = best.map((b) => {
      const pre = "ld" + (++ldTeller);
      const merk = (b.merknader || []).map((m, n) => ({ ...m, n }));
      const ledd = (b.ledd || []).map((l, li) => `<p>${ldLedd(String(l), (b.markeringer || []).filter((m) => (m.ledd || 1) === li + 1), merk.filter((m) => (m.ledd || 1) === li + 1), pre)}</p>`).join("");
      const tittel = String(b.tittel || "");
      const panel = merk.length ? `<aside class="ld-panel"><div class="ld-ptop"><strong>Merknader</strong><span>Lovkommentarer</span></div><div class="ld-pfane"><span class="p\u00e5">Egne</span><span>For alle</span></div><h5>${esc(b.paragraf)}</h5>` +
        merk.map((m) => `<div class="ld-merk" id="${pre}-${m.n}"><div class="ld-mhead"><span class="ld-sq" aria-hidden="true"></span><strong>${esc(m.ord)}</strong><button type="button" class="kopi" data-kopi="${esc((m.henvisninger || []).join("\n"))}" title="Kopier henvisningene og lim dem inn i merknadsfeltet i Lovdata">${KOPI_IKON}<span>Kopier</span></button></div><ul>${(m.henvisninger || []).map((h) => `<li>${m.lenker && m.lenker[h] ? `<a class="ld-ref kb" href="${esc(m.lenker[h])}" target="_blank" rel="noopener" title="\u00c5pne i Jusshack Kildebase">${esc(h)}</a>` : `<span class="ld-ref">${esc(h)}</span>`}${m.bok && m.bok[h] ? `<a class="ld-bok" href="${esc(m.bok[h])}" target="_blank" rel="noopener" title="Omtalt i Lexias multimediebok">\ud83d\udcd8</a>` : ""}<button type="button" class="kopi mini" data-kopi="${esc(h)}" aria-label="Kopier ${esc(h)}">${KOPI_IKON}</button></li>`).join("")}</ul>${m.hvorfor ? `<p class="ld-hvorfor">${esc(m.hvorfor)}</p>` : ""}</div>`).join("") +
        `<button type="button" class="kopi alle" data-kopi="${esc(merk.map((m) => `${m.ord}: ${(m.henvisninger || []).join(", ")}`).join("\n"))}">${KOPI_IKON}<span>Kopier alle merknadene</span></button></aside>` : "";
      const kobl = (b.koblinger || []).length ? `<div class="ld-kobl"><div class="ld-khead"><strong>Viktige koblinger til andre bestemmelser</strong><button type="button" class="kopi" data-kopi="${esc("Se " + b.koblinger.map((k) => k.bestemmelse).join(", "))}" title="Kopier som merknad til Lovdata">${KOPI_IKON}<span>Kopier som merknad</span></button></div><ul>${b.koblinger.map((k) => `<li><span class="ld-ktype ${k.type === "krysshenvisning" ? "kh" : ""}">${k.type === "krysshenvisning" ? "Krysshenvisning" : "Se i sammenheng"}</span>${k.url ? `<a class="ld-ref kb" href="${esc(k.url)}" target="_blank" rel="noopener" title="\u00c5pne i Jusshack Kildebase">${esc(k.bestemmelse)}</a>` : `<span class="ld-ref">${esc(k.bestemmelse)}</span>`}<button type="button" class="kopi mini" data-kopi="${esc(k.bestemmelse)}" aria-label="Kopier ${esc(k.bestemmelse)}">${KOPI_IKON}</button>${k.hvorfor ? `<small>${esc(k.hvorfor)}</small>` : ""}</li>`).join("")}</ul></div>` : "";
      return kobl ? ldBlokk() + kobl : ldBlokk();
      function ldBlokk() { return `<div class="ld-wrap${panel ? " med-panel" : ""}"><div class="ld-doc"><div class="ld-bar" aria-hidden="true"><span>${LD_BAR}</span><span class="ld-sti">${esc(b.lov)}${b.kort ? " (" + esc(b.kort) + ")" : ""}</span></div><div class="ld-par"><h4>${esc(b.paragraf)}. <em>${esc(tittel)}</em></h4>${ledd}${b.endret ? `<p class="ld-endret"><span>0</span>${esc(b.endret)}</p>` : ""}<p class="ld-fot">${ldKilde(b)}${b.kbUrl ? ` <a class="ld-kb" href="${esc(b.kbUrl)}" target="_blank" rel="noopener">Se tolkningsn\u00f8klene i Jusshack Kildebase \u2192</a>` : ""}</p></div></div>${panel}</div>`; }
    }).join("");
    const bd = Array.isArray(d && d.bokdommer) ? d.bokdommer : [];
    const bokHtml = bd.length ? `<details class="ld-bokdommer"${bd.some((x) => !x.brukt) ? "" : ""}><summary><strong>Dommer om bestemmelsen i Lexias multimedieb\u00f8ker</strong> <span class="muted small">(${bd.length})</span></summary><p class="muted small">Disse dommene omtales i b\u00f8kene i tilknytning til bestemmelsen. Kopier henvisningen inn som merknad der den passer, og les avsnittet i boka for sammenhengen.</p><ul>${bd.map((x) => `<li><div><strong>${esc(x.ref)}</strong>${x.navn ? ` <span class="muted">${esc(x.navn)}</span>` : ""}${x.brukt ? ' <span class="ld-brukt">i merknadene</span>' : ""}<p class="small">\u00ab${esc(x.utdrag)}\u00bb</p><a class="small" href="${esc(x.url)}" target="_blank" rel="noopener">\ud83d\udcd8 ${esc(x.kapittel)}</a></div><button type="button" class="kopi mini" data-kopi="${esc(x.ref)}" aria-label="Kopier ${esc(x.ref)}">${KOPI_IKON}</button></li>`).join("")}</ul></details>` : "";
    return `${(d && d.intro) || ""}<div class="ld-vis"><p class="ld-cap">Slik kan det se ut i Lovdata Pro</p>${legend ? `<ul class="ld-legend" aria-label="Fargekoder">${legend}</ul>` : ""}${blokker}${best.some((b) => (b.merknader || []).length) ? '<p class="muted small">Gule ord m\u00e5 tolkes i lys av dommer og andre rettskilder. Trykk p\u00e5 \u203a i lovteksten for \u00e5 se merknaden. Kopieringsknappen legger henvisningene p\u00e5 utklippstavlen, klare til \u00e5 limes inn som egen merknad i Lovdata.</p>' : ""}</div>${(d && d.rad) || ""}<p class="ansvar">${esc(ANSVAR)}</p>` + bokHtml;
  }
  async function kopier(tekst) {
    try { await navigator.clipboard.writeText(tekst); return true; } catch (_) {
      const ta = document.createElement("textarea"); ta.value = tekst; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select(); let ok = false; try { ok = document.execCommand("copy"); } catch (_) { ok = false; } ta.remove(); return ok;
    }
  }
  /* Egne fargekoder i Lovdata-visningen (lagres p\u00e5 enheten). Kategoriene beholder betydningen, bare fargen byttes. */
  const LD_FARGER = { bla: ["Bl\u00e5 strek", "border-bottom:2px solid #1e9bd7"], svart: ["Sort strek", "border-bottom:2px solid #111"], gronn: ["Gr\u00f8nn strek", "border-bottom:2px solid #22b14c"], rod: ["R\u00f8d strek", "border-bottom:2px solid #e3191c"], lilla: ["Lilla strek", "border-bottom:2px solid #8e44ad"], oransje: ["Oransje strek", "border-bottom:2px solid #f28c18"], gul: ["Gul mark\u00f8r", "background:#fff35c;outline:1px solid #c8b900"], gronnmark: ["Gr\u00f8nn mark\u00f8r", "background:#86e08f"], blamark: ["Bl\u00e5 mark\u00f8r", "background:#a9dcff"], rosamark: ["Rosa mark\u00f8r", "background:#ffb3d9"], oransjemark: ["Oransje mark\u00f8r", "background:#ffd08a"] };
  const LD_STD = { hovedregel: "bla", vilkar: "svart", unntak: "gronn", hensyn: "rod", tolkning: "gul" };
  let ldEgne = {};
  try { ldEgne = JSON.parse(localStorage.getItem("navigo-ld-farger") || "{}") || {}; } catch (_) { ldEgne = {}; }
  function ldBrukFarger() {
    let st = ROOT.querySelector("#ld-egne-stil");
    if (!st) { st = document.createElement("style"); st.id = "ld-egne-stil"; ROOT.appendChild(st); }
    st.textContent = Object.entries(ldEgne).filter(([k, f]) => LD_FARGER[f] && LD_STD[k]).map(([k, f]) => `.ld-k-${k}{border-bottom:none !important;background:none !important;outline:none !important;padding-bottom:1px;${LD_FARGER[f][1]} !important}`).join("\n");
  }
  function ldFargeDialog(knapp) {
    const ul = knapp.closest(".ld-legend"); if (!ul) return;
    let p = ul.nextElementSibling;
    if (p && p.classList.contains("ld-egne")) { p.remove(); return; }
    p = document.createElement("div"); p.className = "ld-egne panel";
    p.innerHTML = `<p><strong>Dine egne farger</strong></p><p class="muted small">Velg fargene du bruker i din egen Lovdata. Betydningen er den samme; bare fargen byttes. Valget lagres p\u00e5 denne enheten.</p>` +
      Object.entries(LD_STD).map(([k, std]) => `<label>${esc(LD_KAT[k][0])}<select data-ldk="${k}">${Object.entries(LD_FARGER).map(([f, [navn]]) => `<option value="${f}"${(ldEgne[k] || std) === f ? " selected" : ""}>${esc(navn)}</option>`).join("")}</select></label>`).join("") +
      `<div class="row-btns"><button type="button" class="btn ghost btn-sm ld-egne-nullstill">Tilbake til standard</button></div>`;
    ul.after(p);
    p.addEventListener("change", (e) => { const k = e.target.dataset.ldk; if (!k) return; if (e.target.value === LD_STD[k]) delete ldEgne[k]; else ldEgne[k] = e.target.value; try { localStorage.setItem("navigo-ld-farger", JSON.stringify(ldEgne)); } catch (_) { /* ikke lagret */ } ldBrukFarger(); });
    p.querySelector(".ld-egne-nullstill").addEventListener("click", () => { ldEgne = {}; try { localStorage.removeItem("navigo-ld-farger"); } catch (_) { /* */ } ldBrukFarger(); p.remove(); });
  }
  function initLovdataVis() {
    ldBrukFarger();
    ROOT.addEventListener("click", (e) => { const b = e.target.closest && e.target.closest(".ld-egne-knapp"); if (b) ldFargeDialog(b); });
    ROOT.addEventListener("click", (e) => { const b = e.target.closest && e.target.closest("[data-ul-tema]"); if (!b) return; const f = b.closest("form"); const inp = f && f.querySelector('input[name="tema"]'); if (inp) { inp.value = b.dataset.ulTema; inp.focus(); } });
    ROOT.addEventListener("click", async (e) => {
      const k = e.target.closest && e.target.closest(".kopi");
      if (k) {
        const ok = await kopier(k.dataset.kopi || "");
        const lbl = k.querySelector("span"), gammel = lbl ? lbl.textContent : "";
        k.classList.add(ok ? "ok" : "feil"); if (lbl) lbl.textContent = ok ? "Kopiert" : "Kunne ikke kopiere";
        setTimeout(() => { k.classList.remove("ok", "feil"); if (lbl) lbl.textContent = gammel; }, 1600);
        return;
      }
      const c = e.target.closest && e.target.closest(".ld-chev");
      if (c) {
        const m = ROOT.querySelector("#" + c.dataset.merk); if (!m) return;
        m.parentElement.querySelectorAll(".ld-merk").forEach((x) => x.classList.toggle("aktiv", x === m));
        m.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }

  function toolCost(type) {
    const k = { notatstruktur: "notatstruktur", lovdata: "lovdata", merknader: "merknader", skriverad: "notatkontroll", notatkontroll: "notatkontroll", notteknekker: "svar.kort", tankekart: "tankekart", kollokvie: "kollokvie" }[type] || type;
    return rateOf(k);
  }
  function rateOf(key) {
    const [a, b] = key.split(".");
    const v = b ? (RATES[a] || {})[b] : RATES[a];
    return Number(v ?? 0.3);
  }
  /* Mobilen kan miste forbindelsen mens KI-en jobber (l\u00e5st skjerm, nettbytte). Serveren fullf\u00f8rer likevel,
     s\u00e5 vi ser etter det lagrede resultatet f\u00f8r vi melder feil. */
  const nettfeil = (err) => /Failed to send|Failed to fetch|NetworkError|Load failed|network|aborted/i.test(String(err && (err.message || err)));
  async function hentEtterBrudd(out, tabell, etter, type) {
    out.innerHTML = `<p>Forbindelsen ble brutt mens svaret ble laget. Vi ser etter svaret ditt \u2026</p>`;
    for (let i = 0; i < 20; i++) {
      try { const r = await API.nyttResultat(tabell, etter, type); if (r) return r; } catch (_) { /* pr\u00f8v igjen */ }
      await new Promise((ok) => setTimeout(ok, 6000));
    }
    return null;
  }
  const bruddTekst = `<p>Forbindelsen ble brutt, og vi fant ikke svaret enn\u00e5. Det kan likevel bli lagret i ressursbanken p\u00e5 <a href="#min-side" data-view="min-side">Min side</a> om litt. Sjekk der f\u00f8r du pr\u00f8ver igjen, s\u00e5 du ikke betaler to ganger.</p>`;
  /* P\u00e5fyll av KI-kreditter: liten velger med pakkene fra config.js */
  function visKredittpakker() {
    const d = $("#kr-dialog"); if (!d) { window.open(LINKS.kreditter || "#", "_blank", "noopener"); return; }
    $("#kr-liste").innerHTML = (CFG.kredittpakker || []).map((k) => `<li><a class="kr-pakke" href="${esc(k.url)}" target="_blank" rel="noopener"><span class="kr-navn"><strong>${esc(k.navn)}</strong>${k.merke ? `<em class="kr-merke">${esc(k.merke)}</em>` : ""}<span class="muted small">${esc(k.antall)}</span></span><span class="kr-pris">${esc(k.pris)}</span></a></li>`).join("");
    d.showModal();
  }
  function initKredittpakker() {
    ROOT.addEventListener("click", (e) => {
      const t = e.target.closest && e.target.closest("[data-kjop-kreditter]");
      if (t) { e.preventDefault(); visKredittpakker(); return; }
      if (e.target.id === "kr-lukk" || e.target.id === "kr-dialog") $("#kr-dialog").close();
    });
  }
  async function runTool(type, payload, out) {
    const start = new Date(Date.now() - 5000).toISOString();
    out.hidden = false;
    const stop = startWorking(out, STEPS_SVAR);
    try {
      const r = await API.tool({ type, ...payload });
      stop();
      if (r.error === "saldo") { out.innerHTML = `<p>Du har for f\u00e5 kreditter (${fmt(r.cost)} trengs). <button type="button" class="lenkeknapp" data-kjop-kreditter>Kj\u00f8p flere kreditter</button>.</p>`; return; }
      if (r.error === "lovtekst") {
        out.innerHTML = `<p>${esc(r.melding || "Fant ikke lovteksten.")} Ingen kreditter er trukket.</p>`;
        const lim = out.previousElementSibling && out.previousElementSibling.querySelector(".lim");
        if (lim) { lim.hidden = false; lim.open = true; }
        return;
      }
      if (r.error) { out.innerHTML = errorText(r.error); return; }
      out.innerHTML = `${r.data ? ldVis(r.data) : r.html}${renderKilder(r.kilder || [])}<p class="muted small">Brukt: ${fmt(r.cost)} kreditter. Lagret i ressursbanken din p\u00e5 <a href="#min-side" data-view="min-side">Min side</a>.</p>`;
      RB = null; refresh();
      return r;
    } catch (err) {
      stop();
      if (nettfeil(err)) {
        const rr = await hentEtterBrudd(out, "ressurser", start, type);
        if (rr) {
          out.innerHTML = `${rr.data ? ldVis(rr.data) : rr.html}${renderKilder(rr.kilder || [])}<p class="muted small">Brukt: ${fmt(rr.kreditter)} kreditter. Lagret i ressursbanken din p\u00e5 <a href="#min-side" data-view="min-side">Min side</a>.</p>`;
          RB = null; refresh(); return rr;
        }
        out.innerHTML = bruddTekst; RB = null; refresh(); return;
      }
      out.innerHTML = `<p>Dette kunne ikke lages n\u00e5. Ingen kreditter er trukket. Pr\u00f8v igjen om litt. (${esc(err.message || err)})</p>`;
    }
  }
  /* S\u00f8k med forslag i feltet \u00abBestemmelse\u00bb */
  function initLovsok(inp) {
    const boks = document.createElement("div"); boks.className = "ac";
    inp.parentNode.insertBefore(boks, inp); boks.appendChild(inp);
    const liste = document.createElement("ul"); liste.className = "ac-liste"; liste.setAttribute("role", "listbox"); liste.hidden = true;
    liste.id = "ac-" + Math.random().toString(36).slice(2, 8);
    boks.appendChild(liste);
    inp.setAttribute("role", "combobox"); inp.setAttribute("aria-autocomplete", "list"); inp.setAttribute("aria-controls", liste.id); inp.setAttribute("aria-expanded", "false");
    let forslag = [], valgt = -1, tid = 0, nr = 0;
    const lukk = () => { liste.hidden = true; inp.setAttribute("aria-expanded", "false"); valgt = -1; };
    const vis = () => {
      if (!forslag.length) { lukk(); return; }
      liste.innerHTML = forslag.map((f, i) => `<li role="option" data-i="${i}" class="${i === valgt ? "p\u00e5" : ""}${f.lov ? " lov" : ""}" aria-selected="${i === valgt}"><strong>${esc(f.tekst)}${f.kb ? '<em class="kb-merke">Kildebase</em>' : ""}</strong>${f.under ? `<span>${esc(f.under)}</span>` : ""}</li>`).join("");
      liste.hidden = false; inp.setAttribute("aria-expanded", "true");
    };
    const sok = async () => {
      const q = inp.value.trim(), mitt = ++nr;
      if (q.length < 2) { forslag = []; lukk(); return; }
      try { const r = await API.lovsok(q); if (mitt !== nr) return; forslag = (r && r.forslag) || []; valgt = -1; vis(); } catch (_) { /* forslag er en hjelp, ikke et krav */ }
    };
    const velg = (i) => {
      const f = forslag[i]; if (!f) return;
      inp.value = f.verdi; lukk(); inp.focus();
      if (f.lov) sok();
    };
    inp.addEventListener("input", () => { clearTimeout(tid); tid = setTimeout(sok, 180); });
    inp.addEventListener("focus", () => { if (inp.value.trim().length >= 2) sok(); });
    inp.addEventListener("keydown", (e) => {
      if (liste.hidden) return;
      if (e.key === "ArrowDown") { e.preventDefault(); valgt = (valgt + 1) % forslag.length; vis(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); valgt = (valgt - 1 + forslag.length) % forslag.length; vis(); }
      else if (e.key === "Enter" && valgt >= 0) { e.preventDefault(); velg(valgt); }
      else if (e.key === "Escape") lukk();
    });
    liste.addEventListener("mousedown", (e) => { const li = e.target.closest("li"); if (li) { e.preventDefault(); velg(Number(li.dataset.i)); } });
    inp.addEventListener("blur", () => setTimeout(lukk, 150));
  }
  /* Vedlegg i verkt\u00f8yene: forh\u00e5ndsvisning, kostnad og nedskalering av store bilder */
  function visVedlegg(f, melding = "") {
    const liste = f.querySelector(".vedlegg-liste"); if (!liste) return;
    liste.innerHTML = f._filer.map((x, i) => `<li><span class="vd-ikon">${/\.pdf$/i.test(x.name) ? "PDF" : "IMG"}</span><span class="vd-navn">${esc(x.name)}</span><small>${(x.size / 1e6).toFixed(1).replace(".", ",")} MB</small><button type="button" data-fjern="${i}" aria-label="Fjern ${esc(x.name)}">\u00d7</button></li>`).join("") + (melding ? `<li class="vd-feil">${esc(melding)}</li>` : "");
    const c = f.querySelector("[data-cost]");
    if (c) c.textContent = fmt(Math.round((rateOf(c.dataset.cost) + f._filer.length * rateOf("vedlegg")) * 10) / 10) + " kreditter";
  }
  async function krympBilde(fil) {
    if (!/^image\//.test(fil.type) || (fil.size < 1.5e6 && /jpe?g|png|webp/.test(fil.type))) return fil;
    try {
      const bmp = await createImageBitmap(fil);
      const s = Math.min(1, 2000 / Math.max(bmp.width, bmp.height));
      const c = document.createElement("canvas"); c.width = Math.round(bmp.width * s); c.height = Math.round(bmp.height * s);
      c.getContext("2d").drawImage(bmp, 0, 0, c.width, c.height);
      const blob = await new Promise((r) => c.toBlob(r, "image/jpeg", 0.85));
      return blob ? new File([blob], fil.name.replace(/\.\w+$/, "") + ".jpg", { type: "image/jpeg" }) : fil;
    } catch (_) { return fil; }
  }
  /** Gj\u00f8r KI-svaret om til ren tekst for notatfeltet: overskrifter, punkter og innrykk. */
  function htmlTilTekst(html) {
    const d = document.createElement("div"); d.innerHTML = html;
    const ut = [];
    d.querySelectorAll("h3,h4,p,li,blockquote").forEach((el) => {
      if (el.tagName === "P" && el.closest("li,blockquote")) return;
      const c = el.cloneNode(true); c.querySelectorAll("ul,ol").forEach((x) => x.remove());
      const t = c.textContent.replace(/\s+/g, " ").trim(); if (!t) return;
      if (el.tagName === "H3") ut.push("", t.toUpperCase());
      else if (el.tagName === "H4") ut.push("", t);
      else if (el.tagName === "LI") { let n = 0, x = el.parentElement; while (x && x !== d) { if (x.tagName === "UL" || x.tagName === "OL") n++; x = x.parentElement; } ut.push("  ".repeat(Math.max(0, n - 1)) + "\u2022 " + t); }
      else ut.push(t);
    });
    return ut.join("\n").replace(/^\n+/, "").trim();
  }
  function initTools() {
    initLovdataVis();
    $$('input[name="bestemmelse"]').forEach(initLovsok);
    $$("[data-cost]").forEach((el) => (el.textContent = fmt(rateOf(el.dataset.cost)) + " kreditter"));
    $$(".tool-form").forEach((f) => f.addEventListener("submit", async (e) => {
      e.preventDefault();
      const fd = new FormData(f), data = Object.fromEntries(fd.entries());
      delete data[""];
      for (const k of Object.keys(data)) if (data[k] instanceof File) delete data[k];
      if (f.dataset.tool === "lovdata") data.behov = fd.getAll("behov");
      const out = f.nextElementSibling;
      const filer = f._filer || [];
      if (f.querySelector(".vedlegg") && !String(data.tekst || data.tema || "").trim() && !filer.length) {
        out.hidden = false; out.innerHTML = f.dataset.tool === "tankekart" ? "<p>Skriv et tema, lim inn notatene dine eller last opp lysbilder, bilder eller PDF.</p>" : "<p>Skriv hva du st\u00e5r fast p\u00e5, eller last opp lysbilder eller bilder.</p>"; return;
      }
      if (filer.length) {
        out.hidden = false;
        const stier = [];
        for (let i = 0; i < filer.length; i++) {
          out.innerHTML = `<p class="laster">Laster opp ${esc(filer[i].name)} (${i + 1} av ${filer.length}) \u2026</p>`;
          try { stier.push(await API.lastOpp(UID, await krympBilde(filer[i]))); }
          catch (err) { out.innerHTML = `<p>${esc(filer[i].name)} ble ikke lastet opp: ${esc(err.message || err)}. Ingen kreditter er trukket.</p>`; return; }
        }
        data.vedlegg = stier;
        f._filer = []; visVedlegg(f);
      }
      const r = await runTool(f.dataset.tool, data, out);
      if (f.dataset.tool === "tankekart" && r && r.html) tilbyRedigering(out, r.html, data);
    }));
    $$(".vedlegg").forEach((v) => {
      const f = v.closest("form");
      f._filer = [];
      v.querySelector(".vedlegg-inn").addEventListener("change", (e) => {
        let nye = [...e.target.files];
        e.target.value = "";
        const tekstfiler = nye.filter((x) => /\.(txt|md)$/i.test(x.name) || x.type === "text/plain");
        const ta = f.querySelector('textarea[name="tekst"]');
        if (tekstfiler.length && ta) {
          nye = nye.filter((x) => !tekstfiler.includes(x));
          Promise.all(tekstfiler.map((x) => x.text())).then((tx) => { ta.value = [ta.value.trim(), ...tx.map((t) => t.trim())].filter(Boolean).join("\n\n").slice(0, 12000); });
        }
        const avvist = nye.filter((x) => !/^image\//.test(x.type) && !/\.pdf$/i.test(x.name));
        f._filer = [...f._filer, ...nye.filter((x) => !avvist.includes(x))].slice(0, 4);
        visVedlegg(f, avvist.length ? `${avvist.map((x) => x.name).join(", ")} kan ikke brukes. Bruk bilder, PDF eller tekstfil (Word og PowerPoint: lagre som PDF).` : "");
      });
      v.querySelector(".vedlegg-liste").addEventListener("click", (e) => {
        const b = e.target.closest("[data-fjern]"); if (!b) return;
        f._filer.splice(Number(b.dataset.fjern), 1); visVedlegg(f);
      });
    });
    const o = $("#open-oppgaveretter"), h = $("#how-oppgaveretter");
    if (o) o.href = NAV_SITE + "/oppgaveretteren";
    if (h) h.href = NAV_SITE + "/oppgaveretteren-slik-fungerer-det";
    const visFane = (id, view) => {
      const f = FANEINFO[id]; const el = view ? view.querySelector(".faneinfo") : $("#faneinfo"); if (!f || !el) return;
      // Kort og enkelt: hva verkt\u00f8yet gj\u00f8r og hva det koster. Forklaring og steg ligger sammenfoldet.
      el.innerHTML = `<div class="fi-kort"><p class="eyebrow-in">${esc(f.navn)}</p><h3>${esc(f.hva)}</h3>${f.bruk ? `<p class="fi-bruk">${esc(f.bruk)}</p>` : ""}<p class="muted small">${esc(f.pris)}</p><details class="fi-mer"><summary>Slik gj\u00f8r du</summary><p>${esc(f.verdi)}</p><ol class="steg">${f.steg.map((x) => `<li>${esc(x)}</li>`).join("")}</ol></details></div>`;
    };
    visFane("notter", $("#view-kort5"));
    visFane("ld-veil", $("#view-kort4"));
    initTankekart();
    // Faner i studierommet og Lovdata-kortet (hver visning har sine egne faner)
    $$(".tab").forEach((b) => b.addEventListener("click", () => {
      const v = b.closest(".view");
      $$(".tab", v).forEach((x) => x.setAttribute("aria-selected", String(x === b)));
      $$(".tabpane", v).forEach((p) => (p.hidden = p.dataset.pane !== b.dataset.tab));
      visFane(b.dataset.tab, v);
      if (b.dataset.tab === "notater") lastFiler();
      if (b.dataset.tab === "kollokvie") DG.start();
      if (b.dataset.tab === "lysbilder") FM.start();
      if (b.dataset.tab === "quiz") QZ.start();
      if (b.dataset.tab === "kort123") K3.start();
      if (b.dataset.tab === "podcast") PC.start();
      if (b.dataset.tab !== "podcast") PC.stopp();
      if (b.dataset.tab === "notater" || b.dataset.tab === "tavle" || b.dataset.tab === "tankekart") loadRom();
      if (b.dataset.tab === "tankekart") { MM.autofit = true; setTimeout(() => MM.draw(), 0); }
      if (b.dataset.tab === "meldinger") { MV.start().then(() => MV.last()).catch((err) => { $("#mv-samtaler").innerHTML = `<p class="muted small">Meldingene kunne ikke hentes: ${esc(err.message || err)}</p>`; }); }
    }));
    // Notatbank
    const nf = $("#note-form");
    nf.addEventListener("submit", async (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(nf).entries());
      $("#note-msg").textContent = "Lagrer \u2026";
      try {
        const r = await API.romCall("rom_lagre", { ...d, type: "notat" });
        if (r.error) throw new Error(r.error);
        nf.elements.id.value = r.id; $("#note-msg").textContent = "Lagret.";
        loadRom();
      } catch (err) { $("#note-msg").textContent = "Notatet ble ikke lagret: " + (err.message || err); }
    });
    $("#note-new").addEventListener("click", () => { nf.reset(); nf.elements.id.value = ""; $("#note-msg").textContent = ""; $("#note-out").hidden = true; });
    $("#note-check").addEventListener("click", () => {
      const d = Object.fromEntries(new FormData(nf).entries());
      if ((d.innhold || "").trim().length < 20) { $("#note-msg").textContent = "Skriv litt mer i notatet f\u00f8r kontrollen."; return; }
      runTool("notatkontroll", { fag: d.fag, tittel: d.tittel, tekst: d.innhold }, $("#note-out"));
    });
    // Strukturer notatet / sett alle notatene i faget i system
    const lagreStruktur = (out, r, valg) => {
      const tekst = htmlTilTekst(r.html || "");
      const boks = document.createElement("div"); boks.className = "row-btns struktur-valg";
      boks.innerHTML = valg.map(([id, navn], i) => `<button type="button" class="btn ${i ? "ghost" : ""}" data-valg="${id}">${esc(navn)}</button>`).join("") + '<span class="muted small" role="status"></span>';
      out.append(boks);
      boks.addEventListener("click", async (e) => {
        const b = e.target.closest("[data-valg]"); if (!b) return;
        const d = Object.fromEntries(new FormData(nf).entries()), msg = boks.querySelector("[role=status]");
        const nytt = b.dataset.valg !== "erstatt";
        const rad = { type: "notat", fag: d.fag, innhold: tekst, tittel: b.dataset.valg === "system" ? `Systematisert: ${d.fag}` : nytt ? `Strukturert: ${d.tittel || "notat"}` : d.tittel };
        if (!nytt && d.id) rad.id = d.id;
        msg.textContent = "Lagrer \u2026";
        try {
          const s = await API.romCall("rom_lagre", rad); if (s.error) throw new Error(s.error);
          if (!nytt) nf.elements.innhold.value = tekst;
          msg.textContent = nytt ? "Lagret som nytt notat." : "Notatet er erstattet."; loadRom();
        } catch (err) { msg.textContent = "Ble ikke lagret: " + (err.message || err); }
      });
    };
    $("#note-struktur").addEventListener("click", async () => {
      const d = Object.fromEntries(new FormData(nf).entries());
      if ((d.innhold || "").trim().length < 20) { $("#note-msg").textContent = "Skriv litt mer i notatet f\u00f8r det struktureres."; return; }
      const r = await runTool("notatstruktur", { fag: d.fag, tittel: d.tittel, tekst: d.innhold, modus: "enkelt" }, $("#note-out"));
      if (r && r.html) lagreStruktur($("#note-out"), r, [["erstatt", "Erstatt notatet med denne versjonen"], ["nytt", "Lagre som nytt notat"]]);
    });
    $("#note-system").addEventListener("click", async () => {
      const d = Object.fromEntries(new FormData(nf).entries());
      const r = await runTool("notatstruktur", { fag: d.fag, tittel: `Alle notater i ${d.fag}`, modus: "alle" }, $("#note-out"));
      if (r && r.html) lagreStruktur($("#note-out"), r, [["system", "Lagre oversikten som notat"]]);
    });
    $("#note-list").addEventListener("click", async (e) => {
      const li = e.target.closest("li[data-id]"); if (!li) return;
      const rad = ROM.find((r) => String(r.id) === li.dataset.id); if (!rad) return;
      if (e.target.closest(".del")) { if (!confirm("Slette notatet?")) return; await API.romCall("rom_slett", { id: rad.id }); loadRom(); return; }
      nf.elements.id.value = rad.id; nf.elements.tittel.value = rad.tittel; nf.elements.fag.value = rad.fag || FAG[0]; nf.elements.innhold.value = rad.innhold || "";
      $("#note-msg").textContent = "Redigerer \u00ab" + rad.tittel + "\u00bb.";
      nf.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    // Filer
    $("#rb-filter").addEventListener("click", (e) => { const b = e.target.closest("[data-rb]"); if (!b) return; rbFilter = b.dataset.rb; lastRessursbank(); });
    $("#fil-inn").addEventListener("change", async (e) => {
      const filer = [...e.target.files]; if (!filer.length) return;
      if (!UID) { $("#fil-msg").textContent = "Logg inn for \u00e5 laste opp filer."; return; }
      const store = filer.filter((f) => f.size > 25 * 1024 * 1024);
      if (store.length) { $("#fil-msg").textContent = "Filer over 25 MB kan ikke lastes opp: " + store.map((f) => f.name).join(", "); return; }
      let n = 0;
      for (const f of filer) { $("#fil-msg").textContent = `Laster opp ${f.name} (${++n} av ${filer.length}) \u2026`; try { await API.lastOpp(UID, f); } catch (err) { $("#fil-msg").textContent = `${f.name} ble ikke lastet opp: ${err.message || err}`; return; } }
      $("#fil-msg").textContent = filer.length === 1 ? "Filen er lastet opp." : `${filer.length} filer er lastet opp.`;
      e.target.value = ""; lastFiler();
    });
    $("#fil-liste").addEventListener("click", async (e) => {
      const li = e.target.closest("li[data-fil]"); if (!li) return;
      const navn = li.dataset.fil;
      if (e.target.closest(".aapne")) { try { window.open(await API.filUrl(UID, navn), "_blank", "noopener"); } catch (err) { alert("Filen kunne ikke \u00e5pnes."); } }
      if (e.target.closest(".del")) { if (!confirm("Slette filen for godt?")) return; await API.slettFil(UID, navn); lastFiler(); }
    });
    initTavle();
    initMeldinger(); initKredittpakker();
    // Tilbud
    ["#k6-sted", "#k6-prog", "#k6-sem"].forEach((id) => $(id).addEventListener("change", (e) => { if (id === "#k6-sted") $("#k6-prog").value = ""; paintShop(); }));
    $("#offer-books").addEventListener("change", oppdaterTeller);
    const of = $("#offer-form");
    of.addEventListener("submit", async (e) => {
      e.preventDefault();
      const vil = $$('#offer-books input:checked').map((i) => i.value);
      if (vil.length < 2) { $("#offer-msg").textContent = "Velg minst to b\u00f8ker eller pakker for \u00e5 f\u00e5 et personlig tilbud."; return; }
      const melding = of.elements.melding.value;
      $("#offer-msg").textContent = "Sender \u2026";
      try {
        const kontekst = [$("#k6-sted").value, $("#k6-prog").value, $("#k6-sem").value ? $("#k6-sem").value + ". semester" : ""].filter(Boolean).join(", ");
        const r = await API.tilbud({ vil_kjope: vil, melding: (kontekst ? `L\u00e6rested/semester: ${kontekst}. ` : "") + melding });
        if (r.error) throw new Error(r.error);
        of.reset(); oppdaterTeller(); $("#offer-msg").textContent = "Takk! Foresp\u00f8rselen er sendt til salgsteamet. Du f\u00e5r svar p\u00e5 e-post.";
      } catch (err) { $("#offer-msg").textContent = "Foresp\u00f8rselen ble ikke sendt: " + (err.message || err); }
    });
  }
  async function lastFiler() {
    const ul = $("#fil-liste"); if (!ul) return;
    if (!UID) { ul.innerHTML = '<li class="muted">Logg inn for \u00e5 se filene dine.</li>'; return; }
    try {
      const f = await API.filer(UID);
      ul.innerHTML = f.map((x) => { const vis = x.name.replace(/^\d+-/, ""); const kb = x.metadata?.size ? Math.max(1, Math.round(x.metadata.size / 1024)) + " kB" : ""; return `<li data-fil="${esc(x.name)}"><span><strong>${esc(vis)}</strong><small>${kb}</small></span><span class="mv"><button type="button" class="aapne">\u00c5pne</button><button type="button" class="del">Slett</button></span></li>`; }).join("") || '<li class="muted">Ingen filer enn\u00e5.</li>';
    } catch (err) { ul.innerHTML = '<li class="muted">Filene kunne ikke hentes akkurat n\u00e5.</li>'; }
  }
  let ROM = [], romLaster = false;
  async function loadRom() {
    if (romLaster) return; romLaster = true;
    try {
      const r = await API.romCall("rom_list", {});
      ROM = r.rader || [];
      paintRom();
      MM.fraRom(ROM);
    } catch (err) {
      $("#note-list").innerHTML = '<li class="muted">Notatene kunne ikke hentes akkurat n\u00e5.</li>';
      const tb = $("#tv-board"); if (tb && !TV.lastet) tb.innerHTML = '<p class="muted">Tavlen kunne ikke hentes akkurat n\u00e5.</p>';
    } finally { romLaster = false; }
  }
  function paintRom() {
    const notes = ROM.filter((r) => r.type === "notat");
    $("#note-list").innerHTML = notes.map((n) => `<li data-id="${n.id}"><span><strong>${esc(n.tittel)}</strong><small>${esc(n.fag || "")}</small></span><button class="del" type="button" aria-label="Slett">Slett</button></li>`).join("") || '<li class="muted">Ingen notater enn\u00e5. Skriv det f\u00f8rste over.</li>';
    TV.fraRom(ROM);
  }
  /* ---------- Meldinger (overf\u00f8rt fra StudySmart) med varsler ----------
     Samme samtaler som i StudySmart. Varsler: teller i toppen og p\u00e5 fanen, varselboble i appen
     og varsel p\u00e5 enheten (n\u00e5r studenten har sagt ja) n\u00e5r andre i gruppene skriver. */
  const MV_FARGER = ["#1f4e5f", "#8e44ad", "#c0392b", "#2e8b57", "#d9822b", "#1e6fb8", "#c2185b", "#00897b"];
  const MV = {
    konv: [], cur: null, msgs: [], vent: [], startet: false, kontakter: [],
    farge(id) { let h = 0; for (const ch of String(id || "")) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return MV_FARGER[h % MV_FARGER.length]; },
    fornavn(p) { const n = (p.display_name || "").trim(); if (n) return n.split(/\s+/)[0]; const e = (p.email || "").split("@")[0].split(/[._-]/)[0] || "?"; return e.charAt(0).toUpperCase() + e.slice(1); },
    init(p) { const n = (p.display_name || p.email || "?").trim(); const d = n.split(/[\s@._-]+/).filter(Boolean); return ((d[0] || "?")[0] + ((d[1] || "")[0] || "")).toUpperCase(); },
    navn(c) { if (c.kind === "system") return "Lexia"; if (c.kind === "board") return "Tavle: " + (c.name || ""); if (c.kind === "group" && c.name) return c.name; const andre = (c.members || []).filter((m) => m.user_id !== UID); return andre.length ? andre.map((m) => this.fornavn(m)).join(", ") : "Bare deg"; },
    av(c) { const andre = (c.members || []).filter((m) => m.user_id !== UID); if (c.kind === "dm" && andre[0]) return `<span class="mv-av" style="background:${this.farge(andre[0].user_id)}">${esc(this.init(andre[0]))}</span>`; return `<span class="mv-av" style="background:${c.kind === "board" ? "#1e6fb8" : "#8e44ad"}">${c.kind === "board" ? "\u25a6" : "\ud83d\udc65"}</span>`; },
    naar(iso) { const d = new Date(iso), n = new Date(); if (d.toDateString() === n.toDateString()) return d.toLocaleTimeString("nb-NO", { hour: "2-digit", minute: "2-digit" }); const y = new Date(n); y.setDate(n.getDate() - 1); if (d.toDateString() === y.toDateString()) return "i g\u00e5r"; if (n - d < 6 * 864e5) return d.toLocaleDateString("nb-NO", { weekday: "short" }); return d.toLocaleDateString("nb-NO", { day: "numeric", month: "short" }); },
    lenker(t) { return esc(t).replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>'); },
    async start() {
      if (this.startet) return; this.startet = true;
      $("#mv-knapp").hidden = false;
      try { await this.last(); } catch (_) { /* vises n\u00e5r fanen \u00e5pnes */ }
      try { await API.msgLytt(UID, (type, m) => this.hendelse(type, m)); } catch (_) { /* uten sanntid oppdateres listen n\u00e5r fanen \u00e5pnes */ }
      this.tillatKnapp();
    },
    async last() { this.konv = await API.msgOversikt(); this.teller(); if (this.synlig()) this.liste(); },
    synlig() { const p = $('[data-pane="meldinger"]'); return p && !p.hidden && !$("#view-kort5").hidden; },
    teller() {
      const n = this.konv.filter((c) => !c.muted).reduce((a, c) => a + (c.unread || 0), 0); const txt = n > 99 ? "99+" : String(n);
      for (const id of ["#mv-teller", "#mv-teller-fane"]) { const el = $(id); if (el) { el.hidden = !n; el.textContent = txt; } }
      const t = document.title.replace(/^\(\d+\+?\) /, ""); document.title = n ? `(${txt}) ${t}` : t;
    },
    liste() {
      const q = ($("#mv-sok").value || "").toLowerCase(); const box = $("#mv-samtaler");
      const l = this.konv.filter((c) => !q || this.navn(c).toLowerCase().includes(q) || (c.last_preview || "").toLowerCase().includes(q));
      box.innerHTML = l.map((c) => `<button type="button" class="mv-k${this.cur && this.cur.id === c.id ? " p\u00e5" : ""}${c.unread ? " ulest" : ""}" data-c="${esc(c.id)}">${this.av(c)}<span class="mv-ktxt"><b>${esc(this.navn(c))}${c.muted ? " \ud83d\udd15" : ""}</b><small>${esc(c.last_preview || (c.kind === "group" ? "Ingen meldinger enn\u00e5" : ""))}</small></span><span class="mv-kmeta">${c.last_message_at ? esc(this.naar(c.last_message_at)) : ""}${c.unread ? `<span class="mv-teller">${c.unread}</span>` : ""}</span></button>`).join("")
        || '<p class="muted small" style="padding:.6rem">Ingen samtaler enn\u00e5. Trykk \u00ab\uff0b Ny\u00bb for \u00e5 lage en kollokviegruppe, eller \u00abBli med i gruppe\u00bb hvis du har f\u00e5tt en kode.</p>';
    },
    async apne(id) {
      let c = this.konv.find((x) => x.id === id); if (!c) { await this.last(); c = this.konv.find((x) => x.id === id); } if (!c) return;
      this.cur = c; $("#mv").classList.add("traad-apen"); $("#mv-mervalg").hidden = true;
      $("#mv-tnavn").textContent = this.navn(c);
      $("#mv-tsub").textContent = c.kind === "dm" ? ((c.members || []).find((m) => m.user_id !== UID) || {}).email || "" : (c.members || []).map((m) => m.user_id === UID ? "deg" : this.fornavn(m)).join(", ");
      $("#mv-thav").outerHTML = this.av(c).replace('class="mv-av"', 'class="mv-av" id="mv-thav"');
      $("#mv-mer").hidden = false; $("#mv-skriv").hidden = c.kind === "system";
      $("#mv-kropp").innerHTML = '<p class="mv-tomt">Henter meldinger \u2026</p>';
      try { this.msgs = await API.msgHent(id); } catch (err) { $("#mv-kropp").innerHTML = `<p class="mv-tomt">Kunne ikke hente meldingene: ${esc(err.message || err)}</p>`; return; }
      this.traad(true); if (c.unread) { c.unread = 0; this.teller(); } this.liste(); API.msgLest(id).catch(() => {});
      if (window.innerWidth > 760) setTimeout(() => $("#mv-tekst").focus(), 50);
    },
    traad(rull) {
      const box = $("#mv-kropp"), c = this.cur; if (!c) return;
      if (!this.msgs.length) { box.innerHTML = `<p class="mv-tomt">Ingen meldinger enn\u00e5 \u2013 skriv den f\u00f8rste!${c.kind === "group" ? " Trykk \u00ab\u22ef\u00bb for \u00e5 hente koden andre kan bli med p\u00e5." : ""}</p>`; return; }
      const hvem = (id) => (c.members || []).find((m) => m.user_id === id) || { user_id: id, email: "?" };
      let html = "", dag = "", sist = null, sistT = 0;
      for (const m of this.msgs) {
        const d = new Date(m.created_at || Date.now()); const ds = d.toDateString();
        if (ds !== dag) { html += `<div class="mv-dag">${esc(ds === new Date().toDateString() ? "I dag" : d.toLocaleDateString("nb-NO", { weekday: "long", day: "numeric", month: "long" }))}</div>`; dag = ds; sist = null; }
        const kl = d.toLocaleTimeString("nb-NO", { hour: "2-digit", minute: "2-digit" });
        if (m.kind === "system") { sist = null; html += `<div class="mv-sys">${this.lenker(m.body || "")} <small>${kl}</small></div>`; continue; }
        const meg = m.user_id === UID, forst = m.user_id !== sist || d - sistT > 3e5, p = hvem(m.user_id); sist = m.user_id; sistT = d;
        const tekst = m.deleted_at ? '<i class="muted">Meldingen er slettet</i>' : this.lenker(m.body || "");
        const vedl = !m.deleted_at && (m.attachments || []).length ? `<div class="mv-batt">${m.attachments.map((a) => `<button type="button" class="mv-fil" data-sti="${esc(a.path)}">\ud83d\udcce ${esc(a.name)}</button>`).join("")}</div>` : "";
        html += `${forst && !meg ? `<div class="mv-hvem">${esc(p.display_name || this.fornavn(p))}</div>` : ""}<div class="mv-b${meg ? " meg" : ""}"><div class="mv-bt">${tekst}${vedl}<span class="mv-tid">${kl}</span>${meg && !m.deleted_at ? `<button type="button" class="mv-slett" data-slett="${esc(m.id)}" aria-label="Slett meldingen">\u2715</button>` : ""}</div></div>`;
      }
      box.innerHTML = html; if (rull !== false) box.scrollTop = box.scrollHeight;
    },
    async send() {
      const c = this.cur; if (!c) return; const ta = $("#mv-tekst"); const tekst = ta.value.trim(); if (!tekst && !this.vent.length) return;
      const filer = this.vent.slice(); this.vent = []; this.visVent(); ta.value = ""; ta.style.height = "auto";
      const atts = [];
      for (const f of filer) { try { atts.push(await API.msgLastOpp(c.id, UID, f)); } catch (err) { this.varsel("Vedlegget ble ikke lastet opp: " + (err.message || err)); } }
      if (!tekst && !atts.length) return;
      try {
        const m = await API.msgSend(c.id, UID, tekst, atts);
        if (!this.msgs.find((x) => x.id === m.id)) this.msgs.push(m); this.traad(true);
        c.last_message_at = m.created_at; c.last_preview = tekst || "\ud83d\udcce " + atts[0].name; this.sorter(); this.liste();
      } catch (err) { ta.value = tekst; this.varsel("Meldingen ble ikke sendt: " + (err.message || err)); }
    },
    sorter() { this.konv.sort((a, b) => (b.last_message_at || "").localeCompare(a.last_message_at || "")); },
    visVent() { const b = $("#mv-vedlegg"); b.hidden = !this.vent.length; b.innerHTML = this.vent.map((f, i) => `<span>\ud83d\udcce ${esc(f.name)} <button type="button" data-fjern="${i}" aria-label="Fjern">\u2715</button></span>`).join(""); },
    // Sanntid: nye meldinger fra andre gir varsel
    hendelse(type, m) {
      if (type === "samtale") { if (!this.synlig()) this.last().catch(() => {}); return; }
      if (type === "endret") { const x = this.msgs.find((y) => y.id === m.id); if (x) { Object.assign(x, m); if (this.synlig()) this.traad(false); } return; }
      if (m.user_id === UID && m.kind !== "system") { if (this.cur && this.cur.id === m.conversation_id && !this.msgs.find((x) => x.id === m.id)) { this.msgs.push(m); this.traad(true); } return; }
      const c = this.konv.find((x) => x.id === m.conversation_id); if (!c) { this.last().then(() => this.varsleOm(m)).catch(() => {}); return; }
      c.last_message_at = m.created_at; c.last_preview = m.body || "\ud83d\udcce vedlegg"; this.sorter();
      const aapen = this.synlig() && this.cur && this.cur.id === c.id && !document.hidden;
      if (aapen) { this.msgs.push(m); this.traad(true); API.msgLest(c.id).catch(() => {}); }
      else { if (this.cur && this.cur.id === c.id) this.msgs.push(m); c.unread = (c.unread || 0) + 1; this.teller(); this.varsleOm(m); }
      if (this.synlig()) this.liste();
    },
    varsleOm(m) {
      const c = this.konv.find((x) => x.id === m.conversation_id); if (!c || c.muted) return;
      const p = (c.members || []).find((x) => x.user_id === m.user_id) || {};
      const fra = m.kind === "system" ? this.navn(c) : (p.display_name || this.fornavn(p)) + (c.kind !== "dm" ? " i " + this.navn(c) : "");
      const tekst = (m.body || "\ud83d\udcce vedlegg").slice(0, 120);
      this.varsel(`\ud83d\udcac ${fra}: ${tekst}`, () => this.gaaTil(c.id));
      try {
        if ("Notification" in window && Notification.permission === "granted" && (document.hidden || !document.hasFocus())) {
          const n = new Notification("Navigo \u2013 " + fra, { body: tekst, tag: "navigo-" + c.id }); n.onclick = () => { window.focus(); this.gaaTil(c.id); n.close(); };
        }
      } catch (_) { /* noen nettlesere tillater ikke varsler her */ }
    },
    varsel(tekst, klikk) {
      let t = $("#mv-toast"); if (!t) { t = document.createElement("button"); t.type = "button"; t.id = "mv-toast"; t.className = "mv-toast"; (ROOT === document ? document.body : ROOT.querySelector("#app") || ROOT).appendChild(t); }
      t.textContent = tekst; t.classList.add("vis"); t.onclick = () => { t.classList.remove("vis"); if (klikk) klikk(); };
      clearTimeout(this._tt); this._tt = setTimeout(() => t.classList.remove("vis"), 6000);
    },
    gaaTil(cid) { show("kort5"); const tab = $('#view-kort5 .tab[data-tab="meldinger"]'); if (tab) tab.click(); if (cid) this.apne(cid); setTimeout(() => $("#mv").scrollIntoView({ behavior: "smooth", block: "start" }), 60); },
    tillatKnapp() { const b = $("#mv-tillat"); if (b) b.hidden = !("Notification" in window) || Notification.permission !== "default"; },
    async nyDialog() {
      const d = $("#mv-dialog"); $("#mv-gnavn").value = ""; $("#mv-ksok").value = ""; $("#mv-kontakter").innerHTML = '<p class="muted small">henter kontakter \u2026</p>';
      if (d.showModal) d.showModal(); else d.setAttribute("open", "");
      try { this.kontakter = await API.msgKontakter(); } catch (_) { this.kontakter = []; }
      this.visKontakter();
    },
    visKontakter() {
      const q = ($("#mv-ksok").value || "").toLowerCase();
      const l = this.kontakter.filter((k) => !q || (k.display_name || "").toLowerCase().includes(q) || (k.email || "").toLowerCase().includes(q));
      $("#mv-kontakter").innerHTML = l.map((k) => `<label class="mv-kontakt"><input type="checkbox" value="${esc(k.user_id)}"><span class="mv-av" style="background:${this.farge(k.user_id)}">${esc(this.init(k))}</span><span><b>${esc(k.display_name || this.fornavn(k))}</b><small>${esc(k.email || "")}</small></span></label>`).join("")
        || '<p class="muted small">Ingen kontakter enn\u00e5. Lag en kollokviegruppe nedenfor og del koden med medstudentene dine.</p>';
      this.oppdaterStart();
    },
    oppdaterStart() { const n = $$("#mv-kontakter input:checked").length; $("#mv-start").textContent = n === 1 ? "Start samtale" : "Lag kollokviegruppe"; },
    async startNy() {
      const ids = $$("#mv-kontakter input:checked").map((i) => i.value); const gnavn = $("#mv-gnavn").value.trim();
      try {
        let cid;
        if (ids.length === 1 && !gnavn) cid = await API.msgStartDm(ids[0]);
        else { if (!gnavn && !ids.length) { $("#mv-gnavn").focus(); return; } cid = await API.msgNyGruppe(gnavn, ids); }
        const d = $("#mv-dialog"); if (d.close) d.close(); else d.removeAttribute("open");
        await this.last(); await this.apne(cid);
        if (ids.length !== 1 || gnavn) this.visKode();
      } catch (err) { this.varsel("Kunne ikke starte samtalen: " + (err.message || err)); }
    },
    async visKode() {
      const c = this.cur; if (!c || c.kind !== "group") return;
      try {
        const kode = await API.msgKode(c.id); const m = $("#mv-mervalg");
        m.innerHTML = `<p><b>Invitasjonskode: <span class="mv-kode">${esc(kode)}</span></b><br><small>Andre studenter med Navigo kan bli med ved \u00e5 trykke \u00abBli med i gruppe\u00bb og skrive koden.</small></p><button type="button" data-v="kopier" data-kode="${esc(kode)}">Kopier koden</button>`;
        m.hidden = false;
      } catch (err) { this.varsel(err.message || String(err)); }
    },
    merMeny() {
      const c = this.cur, m = $("#mv-mervalg"); if (!c) return; if (!m.hidden) { m.hidden = true; return; }
      m.innerHTML = (c.kind === "group" ? '<button type="button" data-v="kode">\ud83d\udc65 Invitasjonskode</button>' : "") + (c.kind === "group" ? '<button type="button" data-v="navn">\u270e Gi gruppen nytt navn</button>' : "")
        + `<button type="button" data-v="demp">${c.muted ? "\ud83d\udd14 Sl\u00e5 p\u00e5 varsler" : "\ud83d\udd15 Demp varsler"}</button>` + (c.kind !== "board" ? '<button type="button" data-v="forlat" class="tv-fare">Forlat samtalen</button>' : "");
      m.hidden = false;
    },
  };
  function initMeldinger() {
    if (!$("#mv")) return;
    $("#mv-knapp").addEventListener("click", () => MV.gaaTil(null));
    $("#mv-sok").addEventListener("input", () => MV.liste());
    $("#mv-samtaler").addEventListener("click", (e) => { const b = e.target.closest("[data-c]"); if (b) MV.apne(b.dataset.c); });
    $("#mv-tilbake").addEventListener("click", () => { $("#mv").classList.remove("traad-apen"); MV.cur = null; MV.liste(); });
    $("#mv-send").addEventListener("click", () => MV.send());
    $("#mv-tekst").addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 760) { e.preventDefault(); MV.send(); } });
    $("#mv-tekst").addEventListener("input", (e) => { e.target.style.height = "auto"; e.target.style.height = Math.min(140, e.target.scrollHeight) + "px"; });
    $("#mv-legg").addEventListener("click", () => $("#mv-fil").click());
    $("#mv-fil").addEventListener("change", (e) => { const f = [...e.target.files]; if (f.some((x) => x.size > 25 * 1024 * 1024)) MV.varsel("Filer over 25 MB kan ikke sendes."); MV.vent.push(...f.filter((x) => x.size <= 25 * 1024 * 1024)); e.target.value = ""; MV.visVent(); });
    $("#mv-vedlegg").addEventListener("click", (e) => { const b = e.target.closest("[data-fjern]"); if (b) { MV.vent.splice(Number(b.dataset.fjern), 1); MV.visVent(); } });
    $("#mv-kropp").addEventListener("click", async (e) => {
      const s = e.target.closest("[data-slett]"); if (s) { if (!confirm("Slette meldingen for alle?")) return; try { await API.msgSlett(s.dataset.slett); const m = MV.msgs.find((x) => x.id === s.dataset.slett); if (m) m.deleted_at = new Date().toISOString(); MV.traad(false); } catch (err) { MV.varsel(err.message || String(err)); } return; }
      const f = e.target.closest("[data-sti]"); if (f) { const u = await API.msgFilUrl(f.dataset.sti); if (u) window.open(u, "_blank", "noopener"); else MV.varsel("Vedlegget kunne ikke \u00e5pnes."); }
    });
    $("#mv-mer").addEventListener("click", () => MV.merMeny());
    $("#mv-mervalg").addEventListener("click", async (e) => {
      const b = e.target.closest("[data-v]"); if (!b) return; const c = MV.cur; const v = b.dataset.v;
      if (v === "kode") { MV.visKode(); return; }
      if (v === "kopier") { try { await navigator.clipboard.writeText(b.dataset.kode); b.textContent = "Kopiert \u2713"; } catch (_) { b.textContent = b.dataset.kode; } return; }
      $("#mv-mervalg").hidden = true;
      try {
        if (v === "demp") { await API.msgDemp(c.id, UID, !c.muted); c.muted = !c.muted; MV.teller(); MV.liste(); MV.varsel(c.muted ? "Varsler er dempet for denne samtalen." : "Varsler er sl\u00e5tt p\u00e5."); }
        if (v === "navn") { const n = prompt("Navn p\u00e5 gruppen", c.name || ""); if (n === null) return; const sb = await API.pub(); await sb.from("conversations").update({ name: n.trim().slice(0, 80) || null }).eq("id", c.id); c.name = n.trim() || null; $("#mv-tnavn").textContent = MV.navn(c); MV.liste(); }
        if (v === "forlat") { if (!confirm(`Forlate \u00ab${MV.navn(c)}\u00bb? Du mister tilgangen til meldingene.`)) return; await API.msgForlat(c.id, UID); MV.konv = MV.konv.filter((x) => x !== c); MV.cur = null; $("#mv").classList.remove("traad-apen"); $("#mv-kropp").innerHTML = '<p class="mv-tomt">Velg en samtale.</p>'; $("#mv-skriv").hidden = true; $("#mv-mer").hidden = true; $("#mv-tnavn").textContent = "Velg en samtale"; $("#mv-tsub").textContent = ""; MV.teller(); MV.liste(); }
      } catch (err) { MV.varsel(err.message || String(err)); }
    });
    $("#mv-ny").addEventListener("click", () => MV.nyDialog());
    $("#mv-ksok").addEventListener("input", () => MV.visKontakter());
    $("#mv-kontakter").addEventListener("change", () => MV.oppdaterStart());
    $("#mv-start").addEventListener("click", () => MV.startNy());
    $("#mv-davbryt").addEventListener("click", () => { const d = $("#mv-dialog"); if (d.close) d.close(); else d.removeAttribute("open"); });
    $("#mv-blimed").addEventListener("click", async () => {
      const k = prompt("Skriv invitasjonskoden du har f\u00e5tt (8 tegn)", ""); if (!k || !k.trim()) return;
      try { const cid = await API.msgBliMed(k.trim()); await MV.last(); await MV.apne(cid); MV.varsel("Du er med i gruppen."); } catch (err) { MV.varsel(err.message || String(err)); }
    });
    $("#mv-tillat").addEventListener("click", async () => { try { const r = await Notification.requestPermission(); MV.varsel(r === "granted" ? "Du f\u00e5r varsel p\u00e5 denne enheten n\u00e5r noen i gruppene dine skriver." : "Varsler er ikke sl\u00e5tt p\u00e5. Du kan endre det i nettleserens innstillinger."); } catch (_) { /* */ } MV.tillatKnapp(); });
    document.addEventListener("visibilitychange", () => { if (!document.hidden && MV.cur && MV.synlig()) { const c = MV.cur; if (c.unread) { c.unread = 0; MV.teller(); MV.liste(); } API.msgLest(c.id).catch(() => {}); MV.traad(true); } });
  }
  /* ---------- Studietavle: Trello-liknende tavle (overf\u00f8rt fra StudySmart-tavlen) ----------
     Hver tavle er \u00e9n rad i studierommet (type \u00abtavle\u00bb), med lister og kort som JSON i \u00abinnhold\u00bb. */
  const TV_TYPER = {
    oppgave: { label: "Oppgave", bg: "#deebff", fg: "#0747a6" }, lesing: { label: "Lesing", bg: "#e3fcef", fg: "#006644" },
    notat: { label: "Notat", bg: "#e3fcef", fg: "#006644" }, forelesning: { label: "Forelesning", bg: "#e6f0ff", fg: "#1d3f8f" },
    lysbilde: { label: "Lysbilder", bg: "#eae6ff", fg: "#403294" }, eksamen: { label: "Eksamensoppgave", bg: "#ffebe6", fg: "#bf2600" },
    youtube: { label: "Film", bg: "#ffe2e2", fg: "#b00020" }, podcast: { label: "Podcast", bg: "#fff0b3", fg: "#7a4f00" },
    lenke: { label: "Lenke", bg: "#deebff", fg: "#0747a6" }, fil: { label: "Fil", bg: "#e6fcff", fg: "#006c8f" }
  };
  const TV_FARGER = ["", "#c0392b", "#d9822b", "#b7950b", "#2e8b57", "#00897b", "#1e6fb8", "#8e44ad", "#c2185b"];
  const TV = {
    tavler: [], tavle: null, lastet: false, sok: "", redig: null,
    uid: () => "k" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    standardLister() { return [{ id: this.uid(), name: "\u00c5 gj\u00f8re", cards: [] }, { id: this.uid(), name: "P\u00e5g\u00e5r", cards: [] }, { id: this.uid(), name: "Ferdig", cards: [] }]; },
    fraRom(rader) {
      for (const r of rader.filter((x) => x.type === "tavle")) {
        if (this.tavler.some((b) => b.id === r.id)) continue;
        let d = null; try { d = JSON.parse(r.innhold || "null"); } catch (_) { /* ugyldig */ }
        this.tavler.push({ id: r.id, name: r.tittel, fra: d?.fra || null, lists: Array.isArray(d?.lists) ? d.lists : this.standardLister() });
      }
      // F\u00f8rste gang: lag en tavle og flytt de gamle oppgavene (\u00c5 gj\u00f8re / P\u00e5g\u00e5r / Ferdig) inn i den
      if (!this.tavler.length && !this.lastet) {
        const gamle = rader.filter((x) => x.type === "oppgave");
        const b = this.opprett("Min studietavle", true);
        const idx = { gjore: 0, pagar: 1, ferdig: 2 };
        for (const o of gamle) b.lists[idx[o.status] ?? 0].cards.push({ id: this.uid(), type: "oppgave", title: o.tittel, fag: o.fag || "", notes: o.innhold || "", created: Date.now() });
        if (gamle.length) b._gamle = gamle.map((o) => o.id);
        this.lagre(b);
      }
      this.lastet = true;
      if (!this.tavle && this.tavler.length) this.tavle = this.tavler[0];
      this.vis();
    },
    opprett(name, stille) { const b = { id: null, name, lists: this.standardLister() }; this.tavler.unshift(b); this.tavle = b; if (!stille) { this.lagre(b); this.vis(); } return b; },
    lagre(b = this.tavle) { if (!b) return; clearTimeout(b._t); $("#tv-status").textContent = "Lagrer \u2026"; b._t = setTimeout(() => this.lagreNa(b), 600); },
    async lagreNa(b) {
      try {
        if (b._lagrer) await b._lagrer;
        b._lagrer = API.romCall("rom_lagre", { id: b.id || undefined, type: "tavle", tittel: b.name, innhold: JSON.stringify({ v: 1, fra: b.fra || undefined, lists: b.lists }) });
        const r = await b._lagrer; b._lagrer = null;
        if (r.error) throw new Error(r.error);
        if (!b.id && r.id) { b.id = r.id; this.velger(); }
        if (b._gamle) { const ids = b._gamle; b._gamle = null; for (const id of ids) { try { await API.romCall("rom_slett", { id }); } catch (_) { /* pr\u00f8ves ikke p\u00e5 nytt */ } } }
        $("#tv-status").textContent = "Lagret.";
      } catch (err) { b._lagrer = null; $("#tv-status").textContent = "Ble ikke lagret: " + (err.message || err); }
    },
    velger() {
      const s = $("#tv-velg"); if (!s) return;
      s.innerHTML = this.tavler.map((b, i) => `<option value="${i}"${b === this.tavle ? " selected" : ""}>${esc(b.name)}</option>`).join("");
      s.hidden = this.tavler.length < 2;
    },
    finn(id) { for (const l of this.tavle.lists) { const c = l.cards.find((x) => x.id === id); if (c) return { l, c }; } return null; },
    treff(c) { if (!this.sok) return true; return [c.title, c.notes, c.fag, c.url, (c.tags || []).join(" ")].join(" ").toLowerCase().includes(this.sok); },
    kortHtml(c) {
      const t = TV_TYPER[c.type] || TV_TYPER.oppgave; const idag = new Date().toISOString().slice(0, 10);
      const frist = c.due ? `<span class="${c.due < idag ? "tv-forsent" : ""}">\ud83d\udcc5 ${esc(new Date(c.due + "T12:00").toLocaleDateString("nb-NO", { day: "numeric", month: "short" }))}</span>` : "";
      let vert = ""; try { vert = c.url ? new URL(c.url).hostname.replace(/^www\./, "") : ""; } catch (_) { vert = "lenke"; }
      return `<div class="tv-kort" data-id="${esc(c.id)}" tabindex="0" role="button"${c.color ? ` style="border-top-color:${esc(c.color)}"` : ""}>
        <span class="tv-merke" style="background:${t.bg};color:${t.fg}">${esc(t.label)}</span>${c.stars ? `<span class="tv-stjerner">${"\u2605".repeat(c.stars)}</span>` : ""}
        <div class="tv-tittel">${esc(c.title) || "<i>Uten tittel</i>"}</div>
        <div class="tv-meta">${c.fag ? `<span>${esc(c.fag)}</span>` : ""}${frist}${c.url ? `<span>\ud83d\udd17 ${esc(vert)}</span>` : ""}${c.notes ? "<span>\ud83d\udcdd notat</span>" : ""}${c.fil ? `<span>\ud83d\udcce ${esc(c.fil)}</span>` : ""}</div>
        ${(c.tags || []).length ? `<div class="tv-tags">${c.tags.map((x) => `<span>${esc(x)}</span>`).join("")}</div>` : ""}
      </div>`;
    },
    vis() {
      this.velger();
      const wrap = $("#tv-board"); if (!wrap) return;
      $$(".tv-tools button:not(#tv-ny):not(#tv-import)").forEach((b) => (b.disabled = !this.tavle));
      if (!this.tavle) { wrap.innerHTML = '<p class="muted">Ingen tavle enn\u00e5. Trykk \u00abNy tavle\u00bb.</p>'; return; }
      const sx = wrap.scrollLeft;
      wrap.innerHTML = this.tavle.lists.map((l, i) => {
        const vis = l.cards.filter((c) => this.treff(c));
        return `<section class="tv-liste" data-id="${esc(l.id)}"${l.color ? ` style="border-top-color:${esc(l.color)}"` : ""}>
          <div class="tv-lhode"><input value="${esc(l.name)}" aria-label="Navn p\u00e5 listen" maxlength="80"><span class="tv-antall">${l.cards.length}</span><button type="button" class="tv-lmeny" aria-label="Valg for listen">\u22ef</button></div>
          <div class="tv-lmenyvalg" hidden><button type="button" data-l="venstre"${i ? "" : " disabled"}>\u2190 Flytt</button><button type="button" data-l="hoyre"${i < this.tavle.lists.length - 1 ? "" : " disabled"}>Flytt \u2192</button><span class="tv-lfarger">${TV_FARGER.map((f) => `<button type="button" data-lf="${f}" style="background:${f || "var(--surface)"}" aria-label="Farge"></button>`).join("")}</span><button type="button" data-l="slett" class="tv-fare">Slett liste</button></div>
          <div class="tv-kortene">${vis.map((c) => this.kortHtml(c)).join("") || `<p class="tv-tom">${l.cards.length ? "Ingen treff" : "Tomt \u2013 legg til eller dra kort hit"}</p>`}</div>
          <button type="button" class="tv-nytt">\uff0b Legg til kort</button>
        </section>`;
      }).join("") + '<div class="tv-nyliste"><button type="button" id="tv-nyliste">\uff0b Ny liste</button></div>';
      wrap.scrollLeft = sx;
    },
    // Kortdialogen
    apne(listeId, kortId) {
      const dlg = $("#tv-dialog"), f = $("#tv-form"); const funn = kortId ? this.finn(kortId) : null;
      const c = funn ? funn.c : { type: "oppgave", title: "", notes: "", tags: [] };
      this.redig = { listeId: funn ? funn.l.id : listeId, kortId: funn ? c.id : null, farge: c.color || "" };
      $("#tv-type").innerHTML = Object.entries(TV_TYPER).map(([k, t]) => `<option value="${k}">${esc(t.label)}</option>`).join("");
      $("#tv-liste").innerHTML = this.tavle.lists.map((l) => `<option value="${esc(l.id)}">${esc(l.name)}</option>`).join("");
      f.elements.type.value = TV_TYPER[c.type] ? c.type : "oppgave"; f.elements.liste.value = this.redig.listeId;
      f.elements.title.value = c.title || ""; f.elements.notes.value = c.notes || ""; f.elements.url.value = c.url || ""; f.elements.due.value = c.due || "";
      f.elements.tags.value = (c.tags || []).join(", "); f.elements.stars.value = String(c.stars || 0);
      const fs = f.elements.fag; if (c.fag && ![...fs.options].some((o) => o.value === c.fag)) fs.add(new Option(c.fag, c.fag)); fs.value = c.fag || fs.value;
      this.farger();
      const k = $("#tv-kilde"); k.hidden = !c.fil && !c.studysmart; k.textContent = c.fil ? `Vedlegg \u00ab${c.fil}\u00bb ligger i StudySmart-tavlen.` : "Hentet fra StudySmart.";
      $("#tv-kslett").hidden = !funn; $("#tv-kdup").hidden = !funn;
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
      setTimeout(() => f.elements.title.focus(), 30);
    },
    farger() { $("#tv-farger").innerHTML = TV_FARGER.map((f) => `<button type="button" data-f="${f}" class="${f === this.redig.farge ? "valgt" : ""}" style="background:${f || "var(--surface)"}" aria-label="${f ? "Farge" : "Ingen farge"}"></button>`).join(""); },
    lukk() { const d = $("#tv-dialog"); if (d.close) d.close(); else d.removeAttribute("open"); this.redig = null; },
    lagreKort() {
      const f = $("#tv-form"), e = f.elements, r = this.redig; if (!r) return;
      const data = { type: e.type.value, title: e.title.value.trim().slice(0, 200), fag: e.fag.value, due: e.due.value || undefined, url: e.url.value.trim() || undefined, notes: e.notes.value.slice(0, 5000), tags: e.tags.value.split(",").map((x) => x.trim()).filter(Boolean).slice(0, 10), stars: Number(e.stars.value) || 0, color: r.farge || undefined };
      if (!data.title) { e.title.focus(); return; }
      const til = this.tavle.lists.find((l) => l.id === e.liste.value) || this.tavle.lists[0];
      if (r.kortId) {
        const { l, c } = this.finn(r.kortId); Object.assign(c, data, { updated: Date.now() });
        if (l !== til) { l.cards = l.cards.filter((x) => x !== c); til.cards.push(c); }
      } else til.cards.push({ id: this.uid(), ...data, created: Date.now() });
      this.lukk(); this.lagre(); this.vis();
    },
    // Dra og slipp: mus/penn med \u00e9n gang, ber\u00f8ring etter et kort trykk (s\u00e5 tavlen fortsatt kan rulles)
    initDra() {
      const wrap = $("#tv-board"); let d = null;
      const start = (el, x, y) => {
        const r = el.getBoundingClientRect(); const g = el.cloneNode(true); g.classList.add("tv-ghost"); g.style.width = r.width + "px";
        (ROOT === document ? document.body : ROOT).appendChild(g); el.classList.add("tv-drar");
        d.g = g; d.ox = x - r.left; d.oy = y - r.top; d.aktiv = true; flytt(x, y);
      };
      const flytt = (x, y) => {
        d.g.style.transform = `translate(${x - d.ox}px,${y - d.oy}px)`;
        const under = (ROOT.elementFromPoint ? ROOT.elementFromPoint(x, y) : document.elementFromPoint(x, y));
        const liste = under && under.closest && under.closest(".tv-liste"); if (!liste) return;
        const box = liste.querySelector(".tv-kortene"); const tom = box.querySelector(".tv-tom"); if (tom) tom.remove();
        const etter = [...box.querySelectorAll(".tv-kort:not(.tv-drar)")].find((k) => { const r = k.getBoundingClientRect(); return y < r.top + r.height / 2; });
        if (etter) box.insertBefore(d.el, etter); else box.appendChild(d.el);
        const wr = wrap.getBoundingClientRect(); if (x > wr.right - 40) wrap.scrollLeft += 12; else if (x < wr.left + 40) wrap.scrollLeft -= 12;
      };
      const slutt = () => {
        if (!d) return; clearTimeout(d.timer);
        if (d.aktiv) {
          d.g.remove(); d.el.classList.remove("tv-drar");
          const id = d.el.dataset.id, liste = d.el.closest(".tv-liste"); const funn = this.finn(id);
          if (funn && liste) {
            const til = this.tavle.lists.find((l) => l.id === liste.dataset.id);
            funn.l.cards = funn.l.cards.filter((c) => c !== funn.c);
            const nesteId = d.el.nextElementSibling && d.el.nextElementSibling.dataset.id; const i = nesteId ? til.cards.findIndex((c) => c.id === nesteId) : -1;
            if (i >= 0) til.cards.splice(i, 0, funn.c); else til.cards.push(funn.c);
            this.lagre();
          }
          this.vis(); d.klikk = false;
        }
        const klikk = d.klikk && !d.aktiv, el = d.el; d = null;
        if (klikk) this.apne(null, el.dataset.id);
      };
      wrap.addEventListener("pointerdown", (e) => {
        if (e.pointerType === "touch" || e.button) return; const el = e.target.closest(".tv-kort"); if (!el) return;
        d = { el, sx: e.clientX, sy: e.clientY, klikk: true };
      });
      document.addEventListener("pointermove", (e) => {
        if (!d || e.pointerType === "touch") return;
        if (!d.aktiv && Math.abs(e.clientX - d.sx) + Math.abs(e.clientY - d.sy) > 6) { d.klikk = false; start(d.el, e.clientX, e.clientY); }
        else if (d.aktiv) flytt(e.clientX, e.clientY);
      });
      document.addEventListener("pointerup", (e) => { if (e.pointerType !== "touch") slutt(); });
      wrap.addEventListener("touchstart", (e) => {
        const el = e.target.closest(".tv-kort"); if (!el || e.touches.length > 1) return; const t = e.touches[0];
        d = { el, sx: t.clientX, sy: t.clientY, klikk: true };
        d.timer = setTimeout(() => { if (d && d.el === el) { d.klikk = false; start(el, d.sx, d.sy); if (navigator.vibrate) navigator.vibrate(15); } }, 280);
      }, { passive: true });
      wrap.addEventListener("touchmove", (e) => {
        if (!d) return; const t = e.touches[0];
        if (d.aktiv) { e.preventDefault(); flytt(t.clientX, t.clientY); return; }
        if (Math.abs(t.clientX - d.sx) + Math.abs(t.clientY - d.sy) > 8) { clearTimeout(d.timer); d = null; }
      }, { passive: false });
      wrap.addEventListener("touchend", (e) => { if (!d) return; if (d.klikk && !d.aktiv) e.preventDefault(); slutt(); });
      wrap.addEventListener("touchcancel", () => { if (d && d.aktiv) slutt(); else if (d) { clearTimeout(d.timer); d = null; } });
      wrap.addEventListener("keydown", (e) => { const el = e.target.closest(".tv-kort"); if (el && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); this.apne(null, el.dataset.id); } });
    },
    // StudySmart-kort gj\u00f8res om til Navigo-kort (vedlegg og lysbildenotater blir igjen i StudySmart)
    fraStudySmart(t) {
      const typ = { notat: "notat", lysbilde: "lysbilde", eksamen: "eksamen", youtube: "youtube", podcast: "podcast", lenke: "lenke", fil: "fil", forelesning: "forelesning" };
      return {
        id: null, name: String(t.name || "StudySmart-tavle").slice(0, 200), fra: t.id,
        lists: (t.lists || []).map((l) => ({ id: this.uid(), name: String(l.name || "Liste").slice(0, 80), color: l.color || undefined,
          cards: (l.cards || []).map((c) => ({ id: this.uid(), type: typ[c.type] || "notat", title: String(c.title || "Uten tittel").slice(0, 200), notes: String(c.notes || "").slice(0, 5000), url: c.url || undefined, tags: Array.isArray(c.tags) ? c.tags.slice(0, 10) : [], color: c.color || undefined, stars: Number(c.stars) || 0, fil: c.fil || undefined, studysmart: true, created: c.created || Date.now() })) }))
      };
    },
  };
  function initTavle() {
    const wrap = $("#tv-board"); if (!wrap) return;
    TV.initDra();
    $("#tv-velg").addEventListener("change", (e) => { TV.tavle = TV.tavler[Number(e.target.value)] || null; TV.vis(); });
    $("#tv-ny").addEventListener("click", () => { const n = prompt("Navn p\u00e5 tavlen (for eksempel faget eller semesteret)", ""); if (n && n.trim()) TV.opprett(n.trim().slice(0, 200)); });
    $("#tv-navn").addEventListener("click", () => { if (!TV.tavle) return; const n = prompt("Navn p\u00e5 tavlen", TV.tavle.name); if (n && n.trim()) { TV.tavle.name = n.trim().slice(0, 200); TV.lagre(); TV.velger(); } });
    $("#tv-sok").addEventListener("input", (e) => { TV.sok = e.target.value.trim().toLowerCase(); TV.vis(); });
    $("#tv-slett").addEventListener("click", async () => {
      const b = TV.tavle; if (!b) return; const n = b.lists.reduce((a, l) => a + l.cards.length, 0);
      if (!confirm(n ? `Slette tavlen \u00ab${b.name}\u00bb med ${n} kort?` : `Slette tavlen \u00ab${b.name}\u00bb?`)) return;
      clearTimeout(b._t); TV.tavler = TV.tavler.filter((x) => x !== b); TV.tavle = TV.tavler[0] || null; TV.vis();
      if (b.id) { try { await API.romCall("rom_slett", { id: b.id }); $("#tv-status").textContent = "Tavlen er slettet."; } catch (err) { $("#tv-status").textContent = "Ble ikke slettet: " + (err.message || err); } }
    });
    $("#tv-import").addEventListener("click", async () => {
      const st = $("#tv-status"); st.textContent = "Henter tavlene dine fra StudySmart \u2026";
      try {
        const r = await API.romCall("rom_studysmart", {}); if (r.error) throw new Error(r.error);
        const nye = (r.tavler || []).filter((t) => !TV.tavler.some((b) => b.fra === t.id));
        if (!(r.tavler || []).length) { st.textContent = "Fant ingen tavler i StudySmart p\u00e5 kontoen din."; return; }
        if (!nye.length) { st.textContent = "Tavlene dine fra StudySmart er allerede hentet."; return; }
        for (const t of nye) { const b = TV.fraStudySmart(t); TV.tavler.push(b); await TV.lagreNa(b); }
        TV.tavle = TV.tavler.find((b) => b.fra === nye[0].id) || TV.tavle; TV.vis();
        st.textContent = `Hentet ${nye.length} ${nye.length === 1 ? "tavle" : "tavler"} fra StudySmart. Kortene er kopiert hit; vedlegg og lysbildenotater ligger fortsatt i StudySmart.`;
      } catch (err) { st.textContent = "Kunne ikke hente fra StudySmart: " + (err.message || err); }
    });
    wrap.addEventListener("click", (e) => {
      const l = e.target.closest(".tv-liste"); const liste = l && TV.tavle.lists.find((x) => x.id === l.dataset.id);
      if (e.target.closest("#tv-nyliste")) { const n = prompt("Navn p\u00e5 listen", ""); if (n && n.trim()) { TV.tavle.lists.push({ id: TV.uid(), name: n.trim().slice(0, 80), cards: [] }); TV.lagre(); TV.vis(); wrap.scrollLeft = wrap.scrollWidth; } return; }
      if (!liste) return;
      if (e.target.closest(".tv-nytt")) { TV.apne(liste.id, null); return; }
      if (e.target.closest(".tv-lmeny")) { const m = l.querySelector(".tv-lmenyvalg"); m.hidden = !m.hidden; return; }
      const lf = e.target.closest("[data-lf]"); if (lf) { liste.color = lf.dataset.lf || undefined; TV.lagre(); TV.vis(); return; }
      const v = e.target.closest("[data-l]"); if (!v) return; const ls = TV.tavle.lists, i = ls.indexOf(liste);
      if (v.dataset.l === "venstre" && i > 0) { ls.splice(i, 1); ls.splice(i - 1, 0, liste); }
      if (v.dataset.l === "hoyre" && i < ls.length - 1) { ls.splice(i, 1); ls.splice(i + 1, 0, liste); }
      if (v.dataset.l === "slett") { if (!confirm(liste.cards.length ? `Slette listen \u00ab${liste.name}\u00bb med ${liste.cards.length} kort?` : `Slette listen \u00ab${liste.name}\u00bb?`)) return; ls.splice(i, 1); }
      TV.lagre(); TV.vis();
    });
    wrap.addEventListener("change", (e) => { const inp = e.target.closest(".tv-lhode input"); if (!inp) return; const l = TV.tavle.lists.find((x) => x.id === inp.closest(".tv-liste").dataset.id); if (l) { l.name = inp.value.trim().slice(0, 80) || l.name; TV.lagre(); } });
    $("#tv-farger").addEventListener("click", (e) => { const b = e.target.closest("[data-f]"); if (!b || !TV.redig) return; TV.redig.farge = b.dataset.f; TV.farger(); });
    $("#tv-form").addEventListener("submit", (e) => { e.preventDefault(); TV.lagreKort(); });
    $("#tv-avbryt").addEventListener("click", () => TV.lukk());
    $("#tv-kslett").addEventListener("click", () => { const r = TV.redig; if (!r || !r.kortId) return; const { l, c } = TV.finn(r.kortId); if (!confirm(`Slette kortet \u00ab${c.title}\u00bb?`)) return; l.cards = l.cards.filter((x) => x !== c); TV.lukk(); TV.lagre(); TV.vis(); });
    $("#tv-kdup").addEventListener("click", () => { const r = TV.redig; if (!r || !r.kortId) return; const { l, c } = TV.finn(r.kortId); l.cards.splice(l.cards.indexOf(c) + 1, 0, { ...JSON.parse(JSON.stringify(c)), id: TV.uid(), title: c.title + " (kopi)", created: Date.now() }); TV.lukk(); TV.lagre(); TV.vis(); });
    $("#tv-dialog").addEventListener("click", (e) => { if (e.target.id === "tv-dialog") TV.lukk(); });
  }
  /* ---------- Tankekart: eget redigeringsverkt\u00f8y (overf\u00f8rt fra StudySmart-tavlen) ----------
     Hvert kart er \u00e9n rad i studierommet (type \u00abtankekart\u00bb), med treet som JSON i \u00abinnhold\u00bb. */
  const MM = {
    kart: [], map: null, sel: null, zoom: 1, panX: 0, panY: 0, drag: null, autofit: true, aktiv: false, lastet: false,
    palette: ["#c0392b", "#d9822b", "#b7950b", "#2e8b57", "#00897b", "#1e6fb8", "#3949ab", "#8e44ad", "#c2185b", "#6d4c41", "#546e7a"],
    uid: () => "n" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    nyNode(text) { return { id: this.uid(), text: text || "Ny gren", children: [], color: null, dx: 0, dy: 0 }; },
    fraRom(rader) {
      for (const r of rader.filter((x) => x.type === "tankekart")) {
        if (this.kart.some((m) => m.id === r.id)) continue;
        let root = null; try { root = JSON.parse(r.innhold || "null")?.root; } catch (_) { /* ugyldig innhold */ }
        if (!root) root = this.nyNode(r.tittel);
        this.kart.push({ id: r.id, name: r.tittel, fag: r.fag || "", root });
      }
      this.lastet = true;
      if (!this.map && this.kart.length) { this.map = this.kart[0]; this.sel = this.map.root; this.autofit = true; }
      this.vis();
    },
    // Lagres et \u00f8yeblikk etter siste endring; nye kart f\u00e5r id fra serveren
    lagre() { if (!this.map) return; const m = this.map; clearTimeout(m._t); $("#mm-status").textContent = "Lagrer \u2026"; m._t = setTimeout(() => this.lagreNa(m), 700); },
    async lagreNa(m) {
      const rens = (n) => ({ id: n.id, text: n.text, color: n.color || null, dx: Math.round(n.dx || 0), dy: Math.round(n.dy || 0), collapsed: n.collapsed ? true : undefined, children: (n.children || []).map(rens) });
      try {
        if (m._lagrer) { await m._lagrer; }
        m._lagrer = API.romCall("rom_lagre", { id: m.id || undefined, type: "tankekart", tittel: m.name, fag: m.fag || "", innhold: JSON.stringify({ v: 1, root: rens(m.root) }) });
        const r = await m._lagrer; m._lagrer = null;
        if (r.error) throw new Error(r.error);
        if (!m.id && r.id) { m.id = r.id; this.velger(); }
        $("#mm-status").textContent = "Lagret i studierommet.";
      } catch (err) { m._lagrer = null; $("#mm-status").textContent = "Ble ikke lagret: " + (err.message || err); }
    },
    opprett(name, fag, root) {
      const m = { id: null, name, fag: fag || "", root: root || this.nyNode(name) };
      this.kart.unshift(m); this.map = m; this.sel = m.root; this.autofit = true; this.lagre(); this.vis();
      return m;
    },
    walk(n, fn, parent = null, depth = 0) { fn(n, parent, depth); (n.children || []).forEach((c) => this.walk(c, fn, n, depth + 1)); },
    find(id) { let r = null; if (this.map) this.walk(this.map.root, (n) => { if (n.id === id) r = n; }); return r; },
    parentOf(id) { let r = null; if (this.map) this.walk(this.map.root, (n, p) => { if (n.id === id) r = p; }); return r; },
    linjer(t) { // bryt lange grener over inntil tre linjer
      const ord = String(t || "").split(/\s+/), ut = []; let l = "";
      for (const w of ord) { if ((l + " " + w).trim().length > 30 && l) { ut.push(l); l = w; } else l = (l + " " + w).trim(); }
      if (l) ut.push(l);
      if (ut.length > 3) { ut.length = 3; ut[2] = ut[2].replace(/.{0,2}$/, "") + "\u2026"; }
      return ut.length ? ut : [""];
    },
    layout() {
      const root = this.map.root, GAPY = 14, GAPX = 80;
      const measure = (n) => {
        n._l = this.linjer(n.text); n._w = Math.max(60, Math.min(280, Math.max(...n._l.map((x) => x.length)) * 7.4 + 28)); n._h = 34 + (n._l.length - 1) * 17;
        if (n.collapsed || !(n.children || []).length) { n._sub = n._h; return n._h; }
        n._sub = Math.max(n._h, n.children.reduce((a, c) => a + measure(c) + GAPY, -GAPY)); return n._sub;
      };
      measure(root); root._x = 0; root._y = 0; root._side = 0;
      const kids = root.children || [], right = kids.filter((c, i) => i % 2 === 0), left = kids.filter((c, i) => i % 2 === 1);
      const place = (list, dir) => { const total = list.reduce((a, c) => a + c._sub + GAPY, -GAPY); let y = -total / 2; list.forEach((c) => { c._side = dir; this.placeSub(c, dir > 0 ? root._w / 2 + GAPX : -(root._w / 2 + GAPX), y + c._sub / 2, dir, GAPX, GAPY); y += c._sub + GAPY; }); };
      place(right, 1); place(left, -1);
      this.walk(root, (n) => { n._x += (n.dx || 0); n._y += (n.dy || 0); });
    },
    placeSub(n, x, cy, dir, GAPX, GAPY) {
      n._x = dir > 0 ? x + n._w / 2 : x - n._w / 2; n._y = cy;
      if (n.collapsed || !(n.children || []).length) return;
      let y = cy - n._sub / 2; const nx = dir > 0 ? n._x + n._w / 2 + GAPX : n._x - n._w / 2 - GAPX;
      n.children.forEach((c) => { c._side = dir; this.placeSub(c, nx, y + c._sub / 2, dir, GAPX, GAPY); y += c._sub + GAPY; });
    },
    colorOf(n) {
      if (n.color) return n.color; let p = this.parentOf(n.id), cur = n;
      while (p) { if (cur.color) return cur.color; if (p === this.map.root) break; cur = p; p = this.parentOf(p.id); }
      if (cur !== this.map.root && cur.color) return cur.color;
      const i = (this.map.root.children || []).indexOf(cur); return this.palette[(i < 0 ? 0 : i) % this.palette.length];
    },
    hiddenBy(n) { let p = this.parentOf(n.id); while (p) { if (p.collapsed) return true; p = this.parentOf(p.id); } return false; },
    velger() {
      const s = $("#mm-velg"); if (!s) return;
      s.innerHTML = this.kart.map((m, i) => `<option value="${i}"${m === this.map ? " selected" : ""}>${esc(m.name)}${m.fag ? " \u00b7 " + esc(m.fag) : ""}</option>`).join("");
      s.hidden = this.kart.length < 2;
    },
    vis() { this.velger(); this.draw(); },
    draw() {
      const svg = $("#mm-svg"); if (!svg) return;
      $("#mm-tom").hidden = !!this.map; $$(".mm-tools button:not(#mm-ny)").forEach((b) => (b.disabled = !this.map));
      if (!this.map) { svg.innerHTML = ""; return; }
      if (!svg.clientWidth) return; // fanen er skjult
      this.layout(); const root = this.map.root; const W = svg.clientWidth, H = svg.clientHeight;
      if (this.folg) { const n = this.find(this.folg); this.folg = null; if (n) { const sx = W / 2 + this.panX + n._x * this.zoom, sy = H / 2 + this.panY + n._y * this.zoom, hw = n._w * this.zoom / 2; if (sx - hw < 8 || sx + hw > W - 56 || sy < 20 || sy > H - 20) this.autofit = true; } }
      if (this.autofit) { this.autofit = false; const b = this.bbox(); this.zoom = Math.min(1.1, Math.max(0.3, Math.min((W - 24) / b.w, (H - 24) / b.h))); this.panX = -((b.x0 + b.x1) / 2) * this.zoom; this.panY = -((b.y0 + b.y1) / 2) * this.zoom; }
      const edges = [], nodes = [];
      this.walk(root, (n, p, d) => {
        if (p && !p.collapsed && !this.hiddenBy(n)) { const col = this.colorOf(n); const sw = Math.max(2, 9 - d * 2.3); const x1 = n._side > 0 ? p._x + p._w / 2 : p._x - p._w / 2, y1 = p._y, x2 = n._side > 0 ? n._x - n._w / 2 : n._x + n._w / 2, y2 = n._y, mx = (x1 + x2) / 2; edges.push(`<path d="M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}" stroke="${col}" stroke-width="${sw}" fill="none" stroke-linecap="round"/>`); }
        if (p && this.hiddenBy(n)) return;
        const col = d === 0 ? "" : this.colorOf(n), isSel = this.sel && this.sel.id === n.id, kids = (n.children || []).length;
        const ty = n._h / 2 - (n._l.length - 1) * 8.5 + 5;
        nodes.push(`<g class="mm-node${d === 0 ? " mm-rot" : ""}${isSel ? " sel" : ""}" data-id="${n.id}" transform="translate(${n._x - n._w / 2},${n._y - n._h / 2})">
          <rect width="${n._w}" height="${n._h}" rx="${d === 0 ? 12 : 8}"${d === 0 ? "" : ` stroke="${col}"`} stroke-width="${isSel ? 3.5 : 2}"/>
          <text x="${n._w / 2}" y="${ty}" text-anchor="middle" font-weight="${d <= 1 ? 600 : 400}">${n._l.map((l, i) => `<tspan x="${n._w / 2}" dy="${i ? 17 : 0}">${esc(l)}</tspan>`).join("")}</text>
          ${kids ? `<g class="mm-toggle" data-id="${n.id}" transform="translate(${n._side >= 0 ? n._w + 4 : -18},${n._h / 2 - 7})"><circle cx="7" cy="7" r="7" stroke="${col || "#1f4e5f"}"/><text x="7" y="11" text-anchor="middle" font-size="11">${n.collapsed ? "+" : "\u2013"}</text></g>` : ""}
          <g class="mm-add" data-id="${n.id}" transform="translate(${n._side >= 0 || d === 0 ? n._w + (kids ? 22 : 4) : -36},${n._h / 2 - 10})"><rect width="20" height="20" rx="10"/><text x="10" y="14.5" text-anchor="middle" font-size="15">+</text></g>
        </g>`);
      });
      svg.innerHTML = `<g transform="translate(${W / 2 + this.panX},${H / 2 + this.panY}) scale(${this.zoom})">` + edges.join("") + nodes.join("") + "</g>";
      $("#mm-tittel").textContent = this.map.name;
      const isRoot = this.sel === this.map.root;
      $("#mm-slettgren").disabled = !this.sel || isRoot; $("#mm-farge").disabled = !this.sel || isRoot; $("#mm-sosken").disabled = !this.sel || isRoot;
    },
    bbox() { let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9; this.walk(this.map.root, (n, p) => { if (p && this.hiddenBy(n)) return; x0 = Math.min(x0, n._x - n._w / 2 - 30); x1 = Math.max(x1, n._x + n._w / 2 + 40); y0 = Math.min(y0, n._y - n._h / 2 - 16); y1 = Math.max(y1, n._y + n._h / 2 + 16); }); return { x0, y0, x1, y1, w: x1 - x0, h: y1 - y0 }; },
    addChild(parentId, text) { const p = this.find(parentId || (this.sel && this.sel.id) || this.map.root.id); if (!p) return; const n = this.nyNode(text); (p.children = p.children || []).push(n); p.collapsed = false; this.sel = n; this.folg = n.id; this.lagre(); this.draw(); if (!text) this.edit(n.id, true); },
    addSibling() { if (!this.sel || this.sel === this.map.root) { this.addChild(); return; } const p = this.parentOf(this.sel.id); const n = this.nyNode(); p.children.splice(p.children.indexOf(this.sel) + 1, 0, n); this.sel = n; this.folg = n.id; this.lagre(); this.draw(); this.edit(n.id, true); },
    remove() { const n = this.sel; if (!n || n === this.map.root) return; let cnt = -1; this.walk(n, () => cnt++); if (!confirm(cnt ? `Slette grenen \u00ab${n.text}\u00bb med ${cnt} undergrener?` : `Slette grenen \u00ab${n.text}\u00bb?`)) return; const p = this.parentOf(n.id); p.children = p.children.filter((c) => c !== n); this.sel = p; this.lagre(); this.draw(); },
    edit(id, ny) { const n = this.find(id); if (!n) return; const t = prompt("Tekst p\u00e5 grenen", ny ? "" : n.text); if (t === null) { if (ny && n.text === "Ny gren") { /* behold */ } return; } n.text = t.trim().slice(0, 200) || n.text; if (n === this.map.root && !this.map._navnSatt) this.map.name = n.text; this.lagre(); this.vis(); },
    setColor(c) { if (!this.sel || this.sel === this.map.root) return; this.sel.color = c || null; this.lagre(); this.draw(); },
    zoomAt(k, sx, sy) { const svg = $("#mm-svg"); const W = svg.clientWidth, H = svg.clientHeight; if (sx == null) { sx = W / 2; sy = H / 2; } const nz = Math.min(4, Math.max(0.2, this.zoom * k)); const wx = (sx - W / 2 - this.panX) / this.zoom, wy = (sy - H / 2 - this.panY) / this.zoom; this.zoom = nz; this.panX = sx - W / 2 - wx * nz; this.panY = sy - H / 2 - wy * nz; this.draw(); },
    // Hele kartet som PNG, i lyse farger uavhengig av m\u00f8rk modus
    /** Tegner kartet p\u00e5 et lerret (hvit bakgrunn, h\u00f8y oppl\u00f8sning). */
    lerret() {
      return new Promise((ok, feil) => {
        const svg = $("#mm-svg"); this.layout(); const b = this.bbox(); const inner = svg.querySelector("g"); if (!inner) return feil(new Error("tomt"));
        const clone = inner.cloneNode(true); clone.removeAttribute("transform"); clone.querySelectorAll(".mm-add,.mm-toggle").forEach((e) => e.remove());
        const W = Math.ceil(b.w), H = Math.ceil(b.h);
        const str = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${b.x0} ${b.y0} ${W} ${H}" width="${W}" height="${H}"><style>text{font-family:Segoe UI,Helvetica,Arial,sans-serif;font-size:14px;fill:#13262e}.mm-node rect{fill:#fff}.mm-rot rect{fill:#1f4e5f}.mm-rot text{fill:#fff}</style><rect x="${b.x0}" y="${b.y0}" width="${W}" height="${H}" fill="#fff"/>${new XMLSerializer().serializeToString(clone)}</svg>`;
        const url = URL.createObjectURL(new Blob([str], { type: "image/svg+xml;charset=utf-8" }));
        const img = new Image();
        img.onload = () => { const k = Math.min(3, Math.max(1.5, 2400 / Math.max(W, H))); const cv = document.createElement("canvas"); cv.width = Math.round(W * k); cv.height = Math.round(H * k); const x = cv.getContext("2d"); x.fillStyle = "#fff"; x.fillRect(0, 0, cv.width, cv.height); x.drawImage(img, 0, 0, cv.width, cv.height); URL.revokeObjectURL(url); ok(cv); };
        img.onerror = () => { URL.revokeObjectURL(url); feil(new Error("bilde")); };
        img.src = url;
      });
    },
    filnavn(ending) { return (this.map && this.map.name || "tankekart").replace(/[\\/:*?"<>|]+/g, " ").trim() + "." + ending; },
    async png() {
      try {
        const cv = await this.lerret();
        const a = document.createElement("a"); a.download = this.filnavn("png"); a.href = cv.toDataURL("image/png"); document.body.appendChild(a); a.click(); a.remove();
      } catch (_) { $("#mm-status").textContent = "Kunne ikke lage bildet."; }
    },
    async pdf() {
      const st = $("#mm-status");
      try {
        st.textContent = "Lager PDF \u2026";
        const cv = await this.lerret();
        await lastSkript(JSPDF);
        const liggende = cv.width >= cv.height;
        const { jsPDF } = window.jspdf; const doc = new jsPDF({ unit: "mm", format: "a4", orientation: liggende ? "landscape" : "portrait" });
        const pw = doc.internal.pageSize.getWidth(), ph = doc.internal.pageSize.getHeight(), m = 12;
        doc.setFont("helvetica", "bold"); doc.setFontSize(14); doc.text(String(this.map && this.map.name || "Tankekart"), m, m + 2);
        doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(100); doc.text(((this.map && this.map.fag) ? this.map.fag + " \u00b7 " : "") + "Laget i Navigo \u2013 Study Smart", m, m + 7);
        const maxW = pw - 2 * m, maxH = ph - 2 * m - 12, k = Math.min(maxW / cv.width, maxH / cv.height);
        const w = cv.width * k, h = cv.height * k;
        doc.addImage(cv.toDataURL("image/jpeg", 0.92), "JPEG", m + (maxW - w) / 2, m + 12 + (maxH - h) / 2, w, h);
        doc.save(this.filnavn("pdf"));
        st.textContent = "PDF-en er lastet ned.";
      } catch (_) { st.textContent = "Kunne ikke lage PDF-en. Pr\u00f8v igjen, eller last ned som bilde."; }
    },
    // KI-tankekartet (n\u00f8stet punktliste) gj\u00f8res om til et redigerbart tre
    fraHtml(html, tema) {
      const doc = new DOMParser().parseFromString(`<div>${html}</div>`, "text/html");
      const egenTekst = (li) => [...li.childNodes].filter((c) => !(c.nodeType === 1 && /^(UL|OL)$/.test(c.tagName))).map((c) => c.textContent).join(" ").replace(/\s+/g, " ").trim().slice(0, 200);
      const tre = (ul) => [...ul.children].filter((x) => x.tagName === "LI").map((li) => { const n = this.nyNode(egenTekst(li) || "\u2026"); const sub = li.querySelector(":scope > ul, :scope > ol"); if (sub) n.children = tre(sub); return n; });
      const ul = doc.querySelector("ul, ol"); let kids = ul ? tre(ul) : [];
      let root;
      if (kids.length === 1 && kids[0].children.length) root = kids[0];
      else { root = this.nyNode(tema || doc.querySelector("h1,h2,h3")?.textContent?.trim() || "Tankekart"); root.children = kids; }
      return root;
    },
  };
  function initTankekart() {
    const svg = $("#mm-svg"); if (!svg) return;
    $$(".mm-modus button").forEach((b) => b.addEventListener("click", () => {
      $$(".mm-modus button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      $(".mm-selv").hidden = b.dataset.mm !== "selv"; $(".mm-ki").hidden = b.dataset.mm !== "ki";
      if (b.dataset.mm === "selv") { MM.autofit = true; MM.draw(); }
    }));
    $("#mm-ny").addEventListener("click", () => {
      const navn = prompt("Navn p\u00e5 tankekartet (for eksempel temaet du vil kartlegge)", ""); if (!navn || !navn.trim()) return;
      const fag = $("#t-tankekart select[name=fag]")?.value || ""; MM.opprett(navn.trim().slice(0, 200), fag);
    });
    $("#mm-velg").addEventListener("change", (e) => { MM.map = MM.kart[Number(e.target.value)] || null; MM.sel = MM.map ? MM.map.root : null; MM.autofit = true; MM.draw(); });
    $("#mm-gren").addEventListener("click", () => MM.addChild());
    $("#mm-sosken").addEventListener("click", () => MM.addSibling());
    $("#mm-tekst").addEventListener("click", () => { if (MM.sel) MM.edit(MM.sel.id); });
    $("#mm-slettgren").addEventListener("click", () => MM.remove());
    $("#mm-navn").addEventListener("click", () => { if (!MM.map) return; const n = prompt("Navn p\u00e5 tankekartet", MM.map.name); if (n && n.trim()) { MM.map.name = n.trim().slice(0, 200); MM.map._navnSatt = true; MM.lagre(); MM.vis(); } });
    $("#mm-png").addEventListener("click", () => MM.png());
    $("#mm-pdf").addEventListener("click", () => MM.pdf());
    $("#mm-slett").addEventListener("click", async () => {
      const m = MM.map; if (!m || !confirm(`Slette tankekartet \u00ab${m.name}\u00bb?`)) return;
      clearTimeout(m._t); MM.kart = MM.kart.filter((x) => x !== m); MM.map = MM.kart[0] || null; MM.sel = MM.map ? MM.map.root : null; MM.autofit = true; MM.vis();
      if (m.id) { try { await API.romCall("rom_slett", { id: m.id }); $("#mm-status").textContent = "Tankekartet er slettet."; } catch (err) { $("#mm-status").textContent = "Ble ikke slettet: " + (err.message || err); } }
    });
    const farger = $(".mm-farger");
    farger.innerHTML = MM.palette.map((c) => `<button type="button" data-c="${c}" style="background:${c}" aria-label="Farge ${c}"></button>`).join("") + '<button type="button" data-c="" class="mm-std">Standard</button>';
    $("#mm-farge").addEventListener("click", () => { farger.hidden = !farger.hidden; });
    farger.addEventListener("click", (e) => { const b = e.target.closest("[data-c]"); if (!b) return; MM.setColor(b.dataset.c); farger.hidden = true; });
    $("#mm-zinn").addEventListener("click", () => MM.zoomAt(1.25));
    $("#mm-zut").addEventListener("click", () => MM.zoomAt(1 / 1.25));
    $("#mm-ztilpass").addEventListener("click", () => { MM.autofit = true; MM.draw(); });
    // Pek, dra, panorer og klyp (samme oppf\u00f8rsel som p\u00e5 StudySmart-tavlen)
    MM.ptrs = new Map();
    svg.addEventListener("pointerdown", (e) => {
      MM.aktiv = true; MM.ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (MM.ptrs.size === 2) { if (MM.drag && !MM.drag.pan && MM.drag.moved) { MM.drag.n.dx = MM.drag.dx; MM.drag.n.dy = MM.drag.dy; } MM.drag = null; const [a, b] = [...MM.ptrs.values()]; MM.pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), z: MM.zoom, px: MM.panX, py: MM.panY, cx: (a.x + b.x) / 2, cy: (a.y + b.y) / 2 }; try { svg.setPointerCapture(e.pointerId); } catch (_) { /* */ } MM.draw(); e.preventDefault(); return; }
      if (MM.ptrs.size > 2 || !MM.map) { e.preventDefault(); return; }
      const add = e.target.closest(".mm-add"), tog = e.target.closest(".mm-toggle"), node = e.target.closest(".mm-node");
      if (add) { MM.sel = MM.find(add.dataset.id); MM.ptrs.delete(e.pointerId); MM.addChild(add.dataset.id); e.preventDefault(); return; }
      if (tog) { const n = MM.find(tog.dataset.id); n.collapsed = !n.collapsed; MM.lagre(); MM.draw(); e.preventDefault(); return; }
      if (node) { const n = MM.find(node.dataset.id); MM.sel = n; MM.drag = { n, sx: e.clientX, sy: e.clientY, dx: n.dx || 0, dy: n.dy || 0, moved: false }; try { svg.setPointerCapture(e.pointerId); } catch (_) { /* */ } MM.draw(); }
      else { MM.drag = { pan: true, sx: e.clientX, sy: e.clientY, px: MM.panX, py: MM.panY }; try { svg.setPointerCapture(e.pointerId); } catch (_) { /* */ } }
    });
    svg.addEventListener("pointermove", (e) => {
      if (MM.ptrs.has(e.pointerId)) MM.ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (MM.pinch && MM.ptrs.size >= 2) { const [a, b] = [...MM.ptrs.values()]; const P = MM.pinch; const d = Math.hypot(a.x - b.x, a.y - b.y); const nz = Math.min(4, Math.max(0.2, P.z * d / Math.max(1, P.d))); const r = svg.getBoundingClientRect(); const cx = (a.x + b.x) / 2, cy = (a.y + b.y) / 2; const wx = (P.cx - r.left - r.width / 2 - P.px) / P.z, wy = (P.cy - r.top - r.height / 2 - P.py) / P.z; MM.zoom = nz; MM.panX = cx - r.left - r.width / 2 - wx * nz; MM.panY = cy - r.top - r.height / 2 - wy * nz; MM.draw(); e.preventDefault(); return; }
      const d = MM.drag; if (!d) return; const mx = e.clientX - d.sx, my = e.clientY - d.sy;
      if (d.pan) { MM.panX = d.px + mx; MM.panY = d.py + my; MM.draw(); return; }
      if (Math.abs(mx) + Math.abs(my) > 4) d.moved = true;
      if (d.moved) { d.n.dx = d.dx + mx / MM.zoom; d.n.dy = d.dy + my / MM.zoom; MM.draw(); }
    });
    const endPtr = (e) => { MM.ptrs.delete(e.pointerId); if (MM.ptrs.size < 2) MM.pinch = null; };
    svg.addEventListener("pointercancel", (e) => { endPtr(e); MM.drag = null; });
    let sist = { id: null, t: 0 };
    svg.addEventListener("pointerup", (e) => {
      const varKlyp = !!MM.pinch; endPtr(e); if (varKlyp) return;
      const d = MM.drag; MM.drag = null;
      if (d && !d.pan && d.moved) MM.lagre();
      if (d && !d.pan && !d.moved) { const na = Date.now(); if (sist.id === d.n.id && na - sist.t < 450) { sist = { id: null, t: 0 }; MM.edit(d.n.id); } else sist = { id: d.n.id, t: na }; }
    });
    svg.addEventListener("wheel", (e) => { if (!MM.map) return; e.preventDefault(); const r = svg.getBoundingClientRect(); MM.zoomAt(e.deltaY < 0 ? 1.15 : 1 / 1.15, e.clientX - r.left, e.clientY - r.top); }, { passive: false });
    document.addEventListener("pointerdown", (e) => { if (!e.composedPath().includes(svg)) MM.aktiv = false; }, true);
    document.addEventListener("keydown", (e) => {
      if (!MM.aktiv || !MM.map || !svg.clientWidth) return;
      const fokus = (ROOT.activeElement || document.activeElement); if (fokus && /^(INPUT|TEXTAREA|SELECT)$/.test(fokus.tagName)) return;
      if (e.key === "Tab") { e.preventDefault(); MM.addChild(); }
      else if (e.key === "Enter") { e.preventDefault(); MM.addSibling(); }
      else if (e.key === "Delete" || e.key === "Backspace") { e.preventDefault(); MM.remove(); }
      else if (e.key === "F2") { e.preventDefault(); if (MM.sel) MM.edit(MM.sel.id); }
    });
    window.addEventListener("resize", () => MM.draw());
  }
  // Under KI-tankekartet: \u00e5pne det i redigeringsverkt\u00f8yet
  function tilbyRedigering(out, html, data) {
    const boks = document.createElement("div"); boks.className = "row-btns struktur-valg";
    boks.innerHTML = '<button type="button" class="btn" data-mmv="rediger">\u00c5pne og rediger tankekartet</button><button type="button" class="btn ghost" data-mmv="png">\u2913 Bilde</button><button type="button" class="btn ghost" data-mmv="pdf">\u2913 PDF</button><span class="muted small">Gratis. Kartet lagres i studierommet, og du kan bygge videre selv.</span>';
    out.append(boks);
    let apnet = false;
    const apne = () => {
      if (apnet) return;
      const root = MM.fraHtml(html, data.tema);
      MM.opprett(String(data.tema || root.text || "Tankekart fra notatene").slice(0, 200), data.fag, root);
      apnet = true;
    };
    boks.addEventListener("click", (e) => {
      const k = e.target.closest("[data-mmv]"); if (!k) return;
      apne();
      $('.mm-modus [data-mm="selv"]').click();
      if (k.dataset.mmv === "rediger") { $(".mm-selv").scrollIntoView({ behavior: "smooth", block: "start" }); return; }
      setTimeout(() => (k.dataset.mmv === "pdf" ? MM.pdf() : MM.png()), 150);
    });
  }
  // \u00abPensumpakke UiO: Rettsvitenskap 3. semester\u00bb -> { sted: "UiO", prog: "Rettsvitenskap", sem: 3 }
  function pakkeInfo(p) {
    const m = String(p.tittel).match(/^Pensumpakke ([^:]+):\s*(.+?)(?:\s+(\d+)\.\s*semester(.*))?$/i);
    if (!m) return { sted: "Annet", prog: p.tittel, sem: null };
    return { sted: m[1].trim(), prog: m[2].trim() + (m[4] ? " " + m[4].trim() : ""), sem: m[3] ? Number(m[3]) : null };
  }
  const SEMKART = { 1: "1", 2: "2", 3: "3-4", 4: "3-4", 5: "5-6", 6: "5-6", 7: "master", 8: "master" };
  function fyllValg(sel, verdier, tekst0) {
    const fra = sel.value;
    sel.innerHTML = `<option value="">${tekst0}</option>` + verdier.map((v) => `<option value="${esc(v[0])}">${esc(v[1])}</option>`).join("");
    if (verdier.some((v) => String(v[0]) === fra)) sel.value = fra;
  }
  function paintShop() {
    const el = $("#k6-books"); if (!el) return;
    const sted = $("#k6-sted"), prog = $("#k6-prog"), semSel = $("#k6-sem");
    const info = PAKKER.map((p) => ({ p, ...pakkeInfo(p) }));
    const steder = [...new Set(info.map((x) => x.sted))].sort((a, b) => a.localeCompare(b, "nb"));
    fyllValg(sted, steder.map((x) => [x, x]), pakkerHentet ? "Velg l\u00e6rested" : "henter l\u00e6restedene \u2026");
    const iSted = info.filter((x) => !sted.value || x.sted === sted.value);
    const progs = [...new Set(iSted.map((x) => x.prog))].sort((a, b) => a.localeCompare(b, "nb"));
    fyllValg(prog, progs.map((x) => [x, x]), "Alle studieprogram");
    if (!prog.value && progs.length === 1) prog.value = progs[0];
    const iProg = iSted.filter((x) => !prog.value || x.prog === prog.value);
    const sems = [...new Set(iProg.map((x) => x.sem).filter(Boolean))].sort((a, b) => a - b);
    fyllValg(semSel, (sems.length ? sems : [1, 2, 3, 4, 5, 6, 7, 8]).map((n) => [String(n), n + ". semester"]), "Alle semestre");
    const semNr = Number(semSel.value) || null;
    const treff = iProg.filter((x) => !semNr || x.sem === semNr);
    // Pakker
    const pk = $("#k6-pakker");
    const visPakker = sted.value || semNr ? treff : [];
    pk.innerHTML = !pakkerHentet ? '<li class="laster">henter pensumpakker \u2026</li>'
      : visPakker.length ? visPakker.map((x) => `<li>${x.p.cover ? `<img class="cover" src="${esc(x.p.cover)}" alt="" loading="lazy">` : '<span class="cover tom">Pensumpakke</span>'}<span class="t">${esc(x.p.tittel)}<em class="by">${esc(x.p.byline || "")}</em></span><a class="btn-sm" href="${esc(x.p.kjop)}" target="_blank" rel="noopener">Se pakken</a></li>`).join("")
      : `<li class="muted tomt">${sted.value || semNr ? "Vi har ingen ferdig pensumpakke for dette valget enn\u00e5. Be om et personlig tilbud nedenfor, s\u00e5 setter salgsteamet sammen b\u00f8kene for deg." : "Velg l\u00e6rested og semester ovenfor for \u00e5 se pensumpakken din."}</li>`;
    $("#k6-alle-fysiske").href = CFG.alleFysiskeBoker || "#";
    // Multimedieb\u00f8ker
    const sk = (CFG.semesterkart || []).find((x) => x.id === SEMKART[semNr]);
    const relevant = sk ? new Set(sk.boker) : null;
    const liste = relevant ? KATALOG.filter((b) => relevant.has(b.tittel)) : KATALOG;
    const inf = $("#k6-sem-info");
    if (inf) inf.textContent = semNr || sted.value ? `${visPakker.length} ${visPakker.length === 1 ? "pensumpakke" : "pensumpakker"} og ${liste.length} ${liste.length === 1 ? "multimediebok" : "multimedieb\u00f8ker"} passer til valget ditt.` : "Velg l\u00e6rested og semester, s\u00e5 viser vi pensumpakken med de fysiske b\u00f8kene og multimedieb\u00f8kene som passer.";
    el.innerHTML = liste.map((b) => {
      const st = bokStatus(b);
      const lenke = st.kjent && st.aktiv ? `<a class="btn-sm" href="${esc(b.url)}" target="_blank" rel="noopener">Les</a>` : `<a class="btn-sm" href="${esc(b.kjop || b.url)}" target="_blank" rel="noopener">Kj\u00f8p</a>`;
      return `<li>${b.cover ? `<img class="cover" src="${esc(b.cover)}" alt="" loading="lazy">` : ""}<span class="t">${esc(b.tittel)}${byline(b) ? `<em class="by">${esc(byline(b))}</em>` : ""}<small class="${st.venter ? "laster" : ""}">${esc(st.tag)}</small></span>${lenke}</li>`;
    }).join("");
    // Tilbud: valgkort
    const box = $("#offer-books");
    const valgt = new Set($$('#offer-books input:checked').map((i) => i.value));
    const valg = [
      ...visPakker.map((x) => ({ id: x.p.tittel, tittel: x.p.tittel, by: x.p.byline || "Fysiske b\u00f8ker", cover: x.p.cover, forslag: true })),
      ...KATALOG.filter((b) => !(S.eier && S.eier.has(b.url))).map((b) => ({ id: b.tittel, tittel: b.tittel, by: "Multimediebok" + (byline(b) ? " \u00b7 " + byline(b) : ""), cover: b.cover, forslag: relevant && relevant.has(b.tittel) })),
      { id: "Andre fysiske b\u00f8ker", tittel: "Andre fysiske b\u00f8ker", by: "Skriv hvilke i meldingsfeltet", cover: null }
    ];
    box.innerHTML = valg.map((v) => `<label class="valgkort${valgt.has(v.id) ? " p\u00e5" : ""}"><input type="checkbox" value="${esc(v.id)}"${valgt.has(v.id) ? " checked" : ""}>${v.cover ? `<img src="${esc(v.cover)}" alt="" loading="lazy">` : '<span class="ikon">+</span>'}<span><strong>${esc(v.tittel)}</strong><small>${esc(v.by)}${v.forslag ? " \u00b7 passer til valget ditt" : ""}</small></span></label>`).join("");
    oppdaterTeller();
    // Selgere
    const sg = $("#selgere");
    if (sg && !sg.innerHTML) sg.innerHTML = (CFG.salgsteam || []).map((x) => `<figure><img src="${esc(x.bilde)}" alt="${esc(x.navn)}" loading="lazy"><figcaption><strong>${esc(x.navn)}</strong><span>Salgsteamet</span></figcaption></figure>`).join("") + '<p class="muted small">Tara og Ingrid setter sammen tilbudet og svarer deg p\u00e5 e-post, vanligvis innen \u00e9n arbeidsdag.</p>';
  }
  function oppdaterTeller() {
    const n = $$('#offer-books input:checked').length;
    $$("#offer-books .valgkort").forEach((l) => l.classList.toggle("p\u00e5", l.querySelector("input").checked));
    const t = $("#offer-count");
    t.textContent = n === 0 ? "Ingen valgt enn\u00e5. Velg minst to." : n === 1 ? "1 valgt. Velg minst \u00e9n til for \u00e5 f\u00e5 et personlig tilbud." : `${n} valgt. Klar til \u00e5 sende.`;
    t.classList.toggle("ok", n >= 2);
    const knapp = $('#offer-form button[type="submit"]'); if (knapp) knapp.disabled = n < 2;
  }

  /* ---------- Oppstart ---------- */
  async function start() {
    if (!DEMO) Live.init();
    $("#demo-banner").hidden = !DEMO;
    renderCards();
    const fagOpts = FAG.map((f) => `<option>${esc(f)}</option>`).join("");
    $("#q-fag").innerHTML = fagOpts;
    $$(".fag-sel").forEach((el) => (el.innerHTML = fagOpts));
    initTools();
    SP.init();
    $("#p-cost").textContent = fmt(RATES.kartlegging + RATES.plan) + " kreditter";

    ROOT.addEventListener("click", (e) => {
      const t = e.target.closest("[data-view]");
      if (t) { e.preventDefault(); location.hash = t.dataset.view; }
      const ph = e.target.closest(".phase-btn");
      if (ph) {
        $$(".phase-btn").forEach((b) => b.setAttribute("aria-pressed", String(b === ph)));
        visFase(ph.dataset.phase);
        if (ph.dataset.phase === "sos") { const x = new Date(Date.now() + 10 * 864e5); SP.eks[0].dato = x.toISOString().slice(0, 10); SP.visEks(); $("#p-timer").value = 6; $("#p-timer-out").textContent = "6"; location.hash = "kort2"; }
      }
    });
    $("#q-form").addEventListener("change", qCost);
    $("#q-form").addEventListener("submit", onAsk);
    $("#plan-form").addEventListener("submit", onPlan);
    $("#p-timer").addEventListener("input", (e) => ($("#p-timer-out").textContent = fmt(+e.target.value)));
    $("#login-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = $("#login-email").value.trim();
      const r = await API.login(email);
      $("#login-msg").textContent = r.ok ? "Sjekk e-posten din. Trykk p\u00e5 lenken, eller skriv inn koden fra e-posten her." : "Innloggingen feilet: " + r.error;
      if (r.ok) $("#code-form").hidden = false;
    });
    $("#code-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const r = await API.verify($("#login-email").value.trim(), $("#login-code").value.replace(/\s/g, ""));
      if (r.ok) { location.hash = ""; location.reload(); }
      else $("#code-msg").textContent = "Koden ble ikke godtatt: " + r.error;
    });
    $("#logout").addEventListener("click", async () => { try { window.__lxEnhetslas && window.__lxEnhetslas.stopp && window.__lxEnhetslas.stopp(); } catch (e) { /* */ } await API.logout(); location.hash = ""; location.reload(); });
    const toLogin = () => {
      (window.NAVIGO_ROOT ? window.NAVIGO_ROOT.host : $("#app")).scrollIntoView({ behavior: "smooth", block: "start" });
      const f = $("#login-email"); if (f && !loggedIn) setTimeout(() => f.focus(), 300);
    };
    window.addEventListener("hashchange", () => {
      const h = location.hash.slice(1);
      if (h === "navigo" || h === "logg-inn") { if (!loggedIn) toLogin(); show("hjem"); return; }
      show(h || "hjem");
    });
    if (/^#(navigo|logg-inn)$/.test(location.hash)) setTimeout(toLogin, 200);

    $$("[data-verdi]").forEach((el) => (el.innerHTML = verdiHtml(el.dataset.verdi)));

    // 1) Vis siden straks: kort, tekster, bokliste og kj\u00f8pslenker venter ikke p\u00e5 noe.
    let husket = "";
    try { husket = localStorage.getItem("navigo_fornavn") || ""; } catch (_) { /* valgfritt */ }
    renderHello(husket);
    // Utl\u00f8pt eller brukt innloggingslenke: vis en forst\u00e5elig melding og rydd adressen.
    if (/[#&]error(_code)?=/.test(location.hash)) {
      const utlopt = /otp_expired/.test(location.hash);
      try { history.replaceState(null, "", location.pathname + location.search); } catch (_) { /* valgfritt */ }
      setTimeout(() => { const m = $("#login-msg"); if (m) m.textContent = utlopt ? "Innloggingslenken er utl\u00f8pt eller allerede brukt. Be om en ny lenke under, eller skriv inn koden fra den nyeste e-posten." : "Innloggingen lyktes ikke. Be om en ny lenke under."; }, 0);
    }
    $("#boot").hidden = true;
    renderMinSide();
    show(location.hash.slice(1) || "hjem");
    qCost();
    API.part("katalog").then((r) => {
      if (r && Array.isArray(r.books) && r.books.length) KATALOG = r.books;
      PAKKER = (r && Array.isArray(r.pakker)) ? r.pakker : []; pakkerHentet = true;
      if (r && r.lenker) Object.assign(LINKS, r.lenker);
      paintBooks();
    }).catch(() => { /* behold den innebygde katalogen */ });

    // 2) Innlogging avklares i bakgrunnen.
    const user = await Promise.race([API.session(), new Promise((r) => setTimeout(() => r(null), 10000))]);
    sessionKjent = true;
    if (!user) {
      S.ute = true; renderMinSide();
      $("#view-login").hidden = false;
      if (location.hash.slice(1) && location.hash.slice(1) !== "hjem") show("hjem");
      return;
    }
    loggedIn = true; UID = user.id || "demo";
    if (!DEMO) startEnhetslas(user);
    MV.start().catch(() => {}); // varsler om nye meldinger uansett hvor i Navigo studenten er
    $("#view-login").hidden = true;
    if (user.fornavn) renderHello(user.fornavn);
    // 3) Saldo, abonnement, bokeierskap og logg hentes hver for seg.
    loadParts();
  }

  // Lexia-autentikatoren (enhetsl\u00e5s + godkjenning i Lexia-appen), samme som i Jusshack-b\u00f8kene.
  // E-posten tas fra Navigo-innloggingen, ikke fra Simplero-fletting.
  function startEnhetslas(user) {
    const c = CFG.enhetslas;
    const email = String(user.email || "").trim().toLowerCase();
    if (!c || !c.skript || c.av || !email) return;
    if (Array.isArray(c.kunFor) && !c.kunFor.includes(email)) return;
    try {
      window.LX_BOK = ["navigo", "Navigo \u2013 Study Smart"];
      let ytre = document.getElementById("lx-navigo-kunde");
      if (!ytre) {
        ytre = document.createElement("div"); ytre.id = "lx-navigo-kunde"; ytre.style.display = "none";
        ytre.appendChild(document.createElement("div"));
        document.body.appendChild(ytre);
      }
      const fn = String(user.fornavn || "").replace(/:/g, " ");
      ytre.firstChild.textContent = `LXK:${email}:LXK LXN:${fn}:LXN`;
      if (window.__lxEnhetslas && window.__lxEnhetslas.stopp) { try { window.__lxEnhetslas.stopp(); } catch (e) { /* */ } }
      const sk = document.createElement("script");
      sk.src = c.skript + (c.skript.includes("?") ? "&" : "?") + "v=" + Math.floor(Date.now() / 3600000);
      sk.async = true; document.head.appendChild(sk);
    } catch (e) { /* l\u00e5sen skal aldri stoppe Navigo */ }
  }

  start().catch((err) => { const bt = ROOT.querySelector("#boot"); if (bt) bt.hidden = true; (ROOT.querySelector("#app") || document.body).insertAdjacentHTML("beforeend", `<p style="padding:16px">Navigo kunne ikke starte: ${esc(err.message || err)}</p>`); });
})();

}
// supabase-js lastes parallelt; appen vises straks og venter bare der den trenger innlogging.
window.NAVIGO_SB=(window.supabase&&window.supabase.createClient)?Promise.resolve():new Promise(function(ok,feil){
var s=document.createElement("script");s.src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js";s.async=true;s.onload=function(){ok();};
s.onerror=function(){feil(new Error("Innloggingen kunne ikke lastes. Pr\u00f8v igjen senere."));};
document.head.appendChild(s);});
run();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
