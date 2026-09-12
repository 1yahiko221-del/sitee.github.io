const FALLBACK_TERMS = [
  {
    id: "paradox-abundance",
    term: "Парадокс изобилия",
    termEn: "Paradox of Abundance",
    category: "Парадоксы",
    description: "Чем больше у нас вариантов выбора, тем сложнее выбрать и тем меньше удовольствия мы получаем от решения. Большое количество опций парадоксально снижает удовлетворённость и может привести к параличу выбора. Полезно помнить, когда вы зависаете в меню доставки или выбираете фильм на вечер."
  },
  {
    id: "paradox-friendship",
    term: "Парадокс дружбы",
    termEn: "Friendship Paradox",
    category: "Парадоксы",
    description: "В среднем у ваших друзей больше друзей, чем у вас. Это статистический эффект: популярные люди попадают в чужие списки друзей чаще, поэтому искажают среднее. Полезно как напоминание, что соцсети создают искажённую картину «у всех всё лучше»."
  },
  {
    id: "paradox-tolerance",
    term: "Парадокс толерантности",
    termEn: "Paradox of Tolerance",
    category: "Парадоксы",
    description: "Если общество неограниченно толерантно, оно в итоге будет уничтожено нетолерантными силами. Чтобы сохранить толерантность как принцип, приходится ограничивать нетерпимость. Это философский аргумент о границах свободы слова и открытости."
  },
  {
    id: "danning-kruger",
    term: "Эффект Даннинга — Крюгера",
    termEn: "Dunning–Kruger Effect",
    category: "Когнитивные искажения",
    description: "Люди с низкой компетенцией склонны переоценивать свои способности, а эксперты — недооценивать. Причина в том, что для правильной самооценки нужны те же навыки, что и для самой задачи. Полезно как проверка: если вы уверены на 100% в новой теме — возможно, вы просто ещё не знаете, чего не знаете."
  },
  {
    id: "survivorship-bias",
    term: "Ошибка выжившего",
    termEn: "Survivorship Bias",
    category: "Когнитивные искажения",
    description: "Мы судим по успешным примерам, забывая о тех, кто выбыл и не попал в статистику. Так рождаются мифы вроде «брось университет и стань миллиардером». Полезно спрашивать: «А кого я не вижу в этой выборке?»"
  },
  {
    id: "anchoring",
    term: "Якорение",
    termEn: "Anchoring",
    category: "Когнитивные искажения",
    description: "Первое число или факт, который мы услышали, сильно влияет на все последующие оценки. Цена «со скидкой» кажется выгодной только потому, что рядом стоит зачёркнутая. Полезно при переговорах: называйте свою цифру первым или сознательно игнорируйте чужой якорь."
  },
  {
    id: "barnum-effect",
    term: "Эффект Барнума",
    termEn: "Barnum Effect",
    category: "Эффекты",
    description: "Мы склонны считать точными общие, расплывчатые описания личности, будто они написаны специально про нас. На этом строятся гороскопы, тесты и гадания. Полезно помнить при чтении «персональных» рекомендаций и фидбэка."
  },
  {
    id: "streisand-effect",
    term: "Эффект Стрейзанд",
    termEn: "Streisand Effect",
    category: "Эффекты",
    description: "Попытка скрыть или запретить информацию приводит к её ещё большему распространению. Цензура работает как реклама. Полезно в PR и личном бренде: не всегда стоит реагировать на критику."
  },
  {
    id: "pygmalion-effect",
    term: "Эффект Пигмалиона",
    termEn: "Pygmalion Effect",
    category: "Эффекты",
    description: "Высокие ожидания от человека улучшают его результаты, низкие — ухудшают. Работает через внимание, поддержку и обратную связь. Полезно в управлении, обучении и воспитании: верьте в людей чуть больше, чем они сами."
  },
  {
    id: "pareto-principle",
    term: "Принцип Парето",
    termEn: "Pareto Principle",
    category: "Принципы и законы",
    description: "Примерно 20% усилий дают 80% результата. Не универсальный закон, но полезная эвристика для приоритизации. Спросите себя: какие 20% задач дадут основной эффект?"
  },
  {
    id: "goodhart-law",
    term: "Закон Гудхарта",
    termEn: "Goodhart's Law",
    category: "Принципы и законы",
    description: "Когда метрика становится целью, она перестаёт быть хорошей метрикой. Люди начинают оптимизировать показатель, а не реальную задачу. Полезно в работе с KPI и OKR: следите, чтобы цифры не подменяли смысл."
  },
  {
    id: "ad-hominem",
    term: "Ad hominem",
    termEn: "Ad Hominem",
    category: "Логические ошибки",
    description: "Вместо аргумента человек атакует личность собеседника. Это не опровергает тезис, но сбивает дискуссию. Полезно распознавать в спорах и не вестись на провокацию."
  },
  {
    id: "straw-man",
    term: "Соломенное чучело",
    termEn: "Straw Man",
    category: "Логические ошибки",
    description: "Вы искажаете аргумент оппонента до карикатуры и побеждаете эту карикатуру. Легко выиграть спор, которого никто не вёл. Полезно проверять: «Я точно отвечаю на то, что сказали, или на то, что мне удобно опровергать?»"
  },
  {
    id: "tragedy-of-commons",
    term: "Трагедия общин",
    termEn: "Tragedy of the Commons",
    category: "Экономика",
    description: "Когда ресурс общий, каждый стремится взять больше, и в итоге ресурс истощается для всех. Классический пример — выпас скота на общем лугу. Полезно в вопросах экологии, командных ресурсов и shared-сервисов."
  },
  {
    id: "prisoners-dilemma",
    term: "Дилемма заключённого",
    termEn: "Prisoner's Dilemma",
    category: "Экономика",
    description: "Два игрока выиграли бы, если бы сотрудничали, но личная выгода толкает к предательству. В повторяющихся играх сотрудничество становится выгоднее. Полезно для понимания переговоров, команд и доверия."
  },
  {
    id: "learned-helplessness",
    term: "Выученная беспомощность",
    termEn: "Learned Helplessness",
    category: "Психология",
    description: "Если человек много раз сталкивался с неудачей и не мог повлиять на ситуацию, он перестаёт пытаться даже при реальной возможности изменить. Это не лень, а усвоенная стратегия. Полезно в терапии, менеджменте и саморазвитии."
  },
  {
    id: "cognitive-dissonance",
    term: "Когнитивный диссонанс",
    termEn: "Cognitive Dissonance",
    category: "Психология",
    description: "Когда убеждения противоречат поступкам, возникает дискомфорт, и мы спешим оправдать себя. Так появляются рационализации вроде «мне это и не нужно было». Полезно замечать момент, когда вы защищаете решение, а не ищете истину."
  },
  {
    id: "occams-razor",
    term: "Бритва Оккама",
    termEn: "Occam's Razor",
    category: "Философия",
    description: "Не следует множить сущности без необходимости: из двух объяснений предпочтительнее более простое. Это не доказательство, но хорошая эвристика. Полезно в диагностике проблем, отладке кода и бытовых выводах."
  },
  {
    id: "ship-of-theseus",
    term: "Корабль Тесея",
    termEn: "Ship of Theseus",
    category: "Философия",
    description: "Если постепенно заменить все части корабля, останется ли он тем же кораблём? Мысленный эксперимент о тождестве и непрерывности. Полезно для размышлений о личности, компаниях и брендах, которые меняются со временем."
  },
  {
    id: "conways-law",
    term: "Закон Конвея",
    termEn: "Conway's Law",
    category: "IT и продукт",
    description: "Архитектура системы повторяет структуру коммуникаций организации, которая её создаёт. Хотите микросервисы — нужны автономные команды. Полезно при проектировании команд и реорганизациях."
  }
];

const ONLINE_CATEGORIES = [
  ['Парадоксы', 'Категория:Парадоксы'],
  ['Когнитивные искажения', 'Категория:Когнитивные искажения'],
  ['Психологические эффекты', 'Категория:Психологические эффекты'],
  ['Экономические эффекты', 'Категория:Экономические эффекты'],
  ['Философские концепции', 'Категория:Философские концепции'],
  ['Научные теории', 'Категория:Научные теории']
];
const ONLINE_LIMIT = 80;
const ONLINE_TIMEOUT_MS = 9000;

const LS_KEYS = {
  learned: 'cr_learnedIds',
  history: 'cr_history',
  hasRolled: 'cr_hasRolled',
  lastTerm: 'cr_lastTermId',
  lastTermFull: 'cr_lastTermFull',
  onlineTerms: 'cr_onlineTerms',
  onlineDate: 'cr_onlineDate',
  version: 'cr_version'
};

const DATA_VERSION = 5;
const ITEMS_AROUND = 18;
const HISTORY_LIMIT = 500;
const ITEM_H_FALLBACK_PX = 160;
const SNAP_DURATION_MS = 1450;
const SNAP_DURATION_REDUCED_MS = 180;
const CENTER_BOUNCE_MS = 520;
const INFO_MODAL_DELAY_MS = 600;
const SWIPE_THRESHOLD = 42;
const TOAST_DURATION_MS = 4200;
const ONLINE_CACHE_TTL_MS = 24 * 60 * 60 * 1000;

let jsonTerms = [];
let learnedIds = [];
let history = [];
let currentTerm = null;
let isRolling = false;
let allTermsCache = null;
let termByIdMap = new Map();
let ITEM_H = ITEM_H_FALLBACK_PX;
let activeRollAnimation = null;
let rollInfoTimerId = null;
let toastTimerId = null;
let lastToastTime = 0;
let lastFocusedElement = null;
let touchStartY = null;
let touchStartX = null;
let infoSource = 'main';
let isRefreshingOnline = false;

const reducedMotionMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
const $ = id => document.getElementById(id);
const el = {
  reel: $('reel'), strip: $('reel-strip'), hint: $('reel-hint'), status: $('reel-status'),
  btnRoll: $('btn-roll'), btnReset: $('btn-reset'), btnHistory: $('btn-history'), btnRefresh: $('btn-refresh'), btnClearHistory: $('btn-clear-history'),
  modalInfo: $('modal-info'), infoCategory: $('info-category'), infoCounter: $('info-counter'), infoTerm: $('info-term'), infoTermEn: $('info-term-en'), infoDescription: $('info-description'), infoSource: $('info-source'), btnCloseInfo: $('btn-close-info'), btnInfoNext: $('btn-info-next'), btnInfoLearn: $('btn-info-learn'), btnInfoLearnText: $('btn-info-learn-text'),
  infoDescWrap: $('info-desc-wrap'), btnInfoExpand: $('btn-info-expand'), btnInfoExpandText: $('btn-info-expand-text'),
  modalHistory: $('modal-history'), historyList: $('history-list'), historyToday: $('history-today'), btnCloseHistory: $('btn-close-history'),
  modalConfirmReset: $('modal-confirm-reset'), btnCancelReset: $('btn-cancel-reset'), btnConfirmReset: $('btn-confirm-reset'),
  toast: $('toast'), toastText: $('toast-text'), toastClose: $('toast-close'),
  cursorGlow: $('cursor-glow')
};

function lsGet(key, fallback) {
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; }
}
function lsSet(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); return true; }
  catch (e) { console.error('localStorage error:', e); showToast('Не удалось сохранить данные браузера.', { important: true }); return false; }
}
function lsRemove(key) { try { localStorage.removeItem(key); } catch {} }

function showToast(message, { important = false } = {}) {
  const now = Date.now();
  if (!important && now - lastToastTime < 1500) return;
  lastToastTime = now;
  if (!el.toast || !el.toastText) return;
  el.toastText.textContent = message;
  el.toast.classList.add('is-visible');
  clearTimeout(toastTimerId);
  toastTimerId = setTimeout(closeToast, TOAST_DURATION_MS);
}
function closeToast() { clearTimeout(toastTimerId); toastTimerId = null; el.toast?.classList.remove('is-visible'); }

function ensureVersion() {
  const stored = lsGet(LS_KEYS.version, null);
  if (stored === null || stored < DATA_VERSION) lsSet(LS_KEYS.version, DATA_VERSION);
}
function loadState() {
  ensureVersion();
  learnedIds = Array.isArray(lsGet(LS_KEYS.learned, [])) ? [...new Set(lsGet(LS_KEYS.learned, []))] : [];
  history = Array.isArray(lsGet(LS_KEYS.history, [])) ? lsGet(LS_KEYS.history, []) : [];
  trimHistory();
}
function invalidateTermCache() { allTermsCache = null; termByIdMap = new Map(); }
function getAllTerms() {
  if (allTermsCache === null) {
    allTermsCache = [...jsonTerms].filter(t => t && t.id && t.term);
    termByIdMap = new Map(allTermsCache.map(t => [t.id, t]));
  }
  return allTermsCache;
}
function findTermById(id) { getAllTerms(); return termByIdMap.get(id); }
function availableForRoll() { const learned = new Set(learnedIds); return getAllTerms().filter(t => !learned.has(t.id)); }
function randomFrom(arr) { return arr.length ? arr[Math.floor(Math.random() * arr.length)] : null; }

function readItemHeightFromCSS() {
  const value = getComputedStyle(document.documentElement).getPropertyValue('--item-h').trim();
  const n = Number.parseFloat(value);
  return Number.isFinite(n) && n > 0 ? Math.round(n) : ITEM_H_FALLBACK_PX;
}
function syncItemHeight() { ITEM_H = readItemHeightFromCSS(); }
function offsetForIndex(idx) { return -(idx * ITEM_H + ITEM_H / 2 - el.reel.clientHeight / 2); }
function cancelAnimation() { if (activeRollAnimation) { try { activeRollAnimation.cancel(); } catch {} activeRollAnimation = null; } }
function positionStripInstant(idx) { cancelAnimation(); el.strip.style.transform = `translate3d(0, ${offsetForIndex(idx)}px, 0)`; }

function createItem(term) {
  const item = document.createElement('div');
  item.className = 'reel__item';
  const termEl = document.createElement('div'); termEl.className = 'reel__item-term'; termEl.textContent = term?.term || '';
  const enEl = document.createElement('div'); enEl.className = 'reel__item-en'; enEl.textContent = term?.termEn || '';
  const catEl = document.createElement('div'); catEl.className = 'reel__item-cat'; catEl.textContent = term?.category || '';
  item.append(termEl, enEl, catEl);
  return item;
}
function setCenterIndex(idx) {
  [...el.strip.children].forEach((item, i) => {
    const d = Math.abs(i - idx);
    item.className = `reel__item ${d === 0 ? 'is-center' : d === 1 ? 'is-near' : 'is-far'}`;
  });
}
function buildStrip(finalTerm, pool) {
  el.strip.replaceChildren();
  const total = ITEMS_AROUND * 2 + 1;
  const finalIndex = ITEMS_AROUND;
  const items = [];
  let previousId = finalTerm.id;
  const used = new Set([finalTerm.id]);
  const safePool = pool && pool.length ? pool : [finalTerm];
  for (let i = 0; i < total; i++) {
    if (i === finalIndex) { items.push(finalTerm); previousId = finalTerm.id; continue; }
    let candidates = safePool.filter(t => t.id !== previousId && !used.has(t.id));
    if (!candidates.length) candidates = safePool.filter(t => t.id !== previousId && t.id !== finalTerm.id);
    if (!candidates.length) candidates = safePool.filter(t => t.id !== previousId);
    const t = randomFrom(candidates) || finalTerm;
    items.push(t); used.add(t.id); previousId = t.id;
  }
  const frag = document.createDocumentFragment();
  items.forEach(t => frag.appendChild(createItem(t)));
  el.strip.appendChild(frag);
  setCenterIndex(finalIndex);
  return finalIndex;
}

function animateSnap(startY, targetY, onFinish) {
  const distance = targetY - startY;
  if (reducedMotionMQ.matches) {
    el.strip.style.transform = `translate3d(0, ${startY}px, 0)`;
    activeRollAnimation = el.strip.animate(
      [{ transform: `translate3d(0, ${startY}px, 0)` }, { transform: `translate3d(0, ${targetY}px, 0)` }],
      { duration: SNAP_DURATION_REDUCED_MS, easing: 'ease-out', fill: 'forwards' }
    );
  } else {
    const overshoot = targetY + Math.sign(distance || -1) * Math.min(22, Math.max(12, Math.abs(distance) * .012));
    const nearTarget = targetY - distance * .13;
    activeRollAnimation = el.strip.animate([
      { transform: `translate3d(0, ${startY}px, 0)`, offset: 0 },
      { transform: `translate3d(0, ${nearTarget}px, 0)`, offset: .76 },
      { transform: `translate3d(0, ${overshoot}px, 0)`, offset: .91 },
      { transform: `translate3d(0, ${targetY}px, 0)`, offset: 1 }
    ], { duration: SNAP_DURATION_MS, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'forwards' });
  }
  const anim = activeRollAnimation;
  anim.onfinish = () => { activeRollAnimation = null; el.strip.style.transform = `translate3d(0, ${targetY}px, 0)`; onFinish?.(); };
  anim.oncancel = () => { if (activeRollAnimation === anim) activeRollAnimation = null; };
}

function shouldShowHint() { return !lsGet(LS_KEYS.hasRolled, false); }
function markHasRolled() { lsSet(LS_KEYS.hasRolled, true); }
function hideHint() { el.hint?.remove(); }
function updateHint() { if (!shouldShowHint()) hideHint(); }

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms))
  ]);
}

async function fetchWikipediaCategory(category, label) {
  const params = new URLSearchParams({
    action: 'query',
    generator: 'categorymembers',
    gcmtitle: category,
    gcmtype: 'page',
    gcmlimit: '35',
    prop: 'extracts|info',
    exintro: '1',
    explaintext: '1',
    inprop: 'url',
    format: 'json',
    origin: '*'
  });
  const url = `https://ru.wikipedia.org/w/api.php?${params}`;
  const response = await withTimeout(fetch(url), ONLINE_TIMEOUT_MS);
  if (!response.ok) throw new Error(`Wikipedia ${response.status}`);
  const data = await response.json();
  return Object.values(data?.query?.pages || {}).map(page => {
    const description = String(page.extract || '').replace(/\s+/g, ' ').trim();
    const term = String(page.title || '').trim();
    if (!page.pageid || term.length < 3 || term.length > 90 || description.length < 80) return null;
    if (/\b(значения|список|категория)\b/i.test(term)) return null;
    return {
      id: `wiki-${page.pageid}`,
      term,
      termEn: '',
      category: label,
      description: description.slice(0, 650),
      sourceUrl: page.fullurl || `https://ru.wikipedia.org/?curid=${page.pageid}`,
      source: 'Wikipedia'
    };
  }).filter(Boolean);
}

function mergeTerms(online) {
  const seen = new Set();
  return [...online, ...FALLBACK_TERMS].filter(term => {
    const key = term.term.trim().toLocaleLowerCase('ru');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, ONLINE_LIMIT + FALLBACK_TERMS.length);
}

function applyOnlineTerms(terms) {
  jsonTerms = terms;
  invalidateTermCache();
}

async function fetchOnlineTerms() {
  const results = await Promise.allSettled(
    ONLINE_CATEGORIES.map(([label, category]) => fetchWikipediaCategory(category, label))
  );
  const fulfilled = results.filter(r => r.status === 'fulfilled').length;
  const rejected = results.filter(r => r.status === 'rejected');
  if (rejected.length) {
    console.warn('[roll] неудачных категорий:', rejected.length);
    rejected.forEach(r => console.warn('[roll] причина:', r.reason?.message || r.reason));
  }
  const online = shuffle(results.flatMap(r => r.status === 'fulfilled' ? r.value : []));
  if (!online.length) throw new Error(`no online terms (категорий удачных: ${fulfilled}/${results.length})`);
  return mergeTerms(online);
}

async function loadOnlineTerms({ silent = false } = {}) {
  if (isRefreshingOnline) return;
  isRefreshingOnline = true;
  el.btnRefresh?.classList.add('is-loading');
  console.log('[roll] загружаю список с Wikipedia…');
  try {
    const terms = await fetchOnlineTerms();
    console.log('[roll] получено', terms.length, 'терминов');
    applyOnlineTerms(terms);
    lsSet(LS_KEYS.onlineTerms, terms);
    lsSet(LS_KEYS.onlineDate, Date.now());
    showToast(`Список обновлён: ${terms.length} терминов.`, { important: true });
  } catch (e) {
    console.error('[roll] ошибка загрузки:', e);
    if (location.protocol === 'file:') {
      showToast('Открой через локальный сервер (Live Server), чтобы загрузить Wikipedia.', { important: true });
    } else if (!silent) {
      showToast('Не удалось обновить список. Использую сохранённый.', { important: true });
    } else {
      showToast('Не удалось загрузить список. Использую встроенный.', { important: true });
    }
  } finally {
    isRefreshingOnline = false;
    el.btnRefresh?.classList.remove('is-loading');
  }
}

function loadCachedOnlineTerms() {
  const cached = lsGet(LS_KEYS.onlineTerms, null);
  const date = lsGet(LS_KEYS.onlineDate, 0);
  if (Array.isArray(cached) && cached.length) {
    applyOnlineTerms(cached);
    return Date.now() - date < ONLINE_CACHE_TTL_MS;
  }
  return false;
}

function applyLearnedBadge() {
  const center = el.strip.querySelector('.reel__item.is-center');
  center?.classList.toggle('is-learned', !!currentTerm && learnedIds.includes(currentTerm.id));
}

function trimHistory() { if (history.length > HISTORY_LIMIT) history = history.slice(-HISTORY_LIMIT); }
function findLastHistoryIndex(id) { for (let i = history.length - 1; i >= 0; i--) if (history[i].id === id) return i; return -1; }
function logRoll(id) {
  const idx = findLastHistoryIndex(id);
  if (idx >= 0) { history[idx].date = Date.now(); history[idx].action = 'rolled'; }
  else history.push({ date: Date.now(), id, action: 'rolled' });
  trimHistory(); lsSet(LS_KEYS.history, history);
}
function setHistoryLearned(id, learned) {
  const idx = findLastHistoryIndex(id);
  if (learned) {
    if (idx >= 0) { history[idx].action = 'learned'; history[idx].date = Date.now(); }
    else history.push({ date: Date.now(), id, action: 'learned' });
  } else if (idx >= 0) history[idx].action = 'rolled';
  trimHistory(); lsSet(LS_KEYS.history, history);
}

function toggleLearned(id) {
  const idx = learnedIds.indexOf(id);
  const nextLearned = idx === -1;
  if (nextLearned) learnedIds.push(id); else learnedIds.splice(idx, 1);
  lsSet(LS_KEYS.learned, learnedIds);
  setHistoryLearned(id, nextLearned);
  applyLearnedBadge();
  updateInfoLearnButton();
  if (nextLearned) clearTimeout(rollInfoTimerId);
  return nextLearned;
}

function saveCurrentTerm(term) {
  if (!term) { lsRemove(LS_KEYS.lastTermFull); return; }
  lsSet(LS_KEYS.lastTerm, term.id);
  lsSet(LS_KEYS.lastTermFull, term);
}

function startRoll() {
  if (isRolling) return;
  const pool = availableForRoll();
  markHasRolled(); hideHint();
  if (!pool.length) { showAllLearned(); return; }
  isRolling = true; el.reel.classList.add('is-rolling'); el.btnRoll.disabled = true; el.status.textContent = 'Ролл…';
  let final = randomFrom(pool);
  if (pool.length > 1 && currentTerm) {
    const alternatives = pool.filter(t => t.id !== currentTerm.id);
    final = randomFrom(alternatives) || final;
  }
  const finalIndex = buildStrip(final, pool);
  const targetY = offsetForIndex(finalIndex);
  const startY = targetY + el.reel.clientHeight + ITEM_H * 5;
  el.strip.style.transform = `translate3d(0, ${startY}px, 0)`;
  animateSnap(startY, targetY, () => finishRoll(final));
}
function finishRoll(final) {
  isRolling = false; el.reel.classList.remove('is-rolling'); el.btnRoll.disabled = false;
  currentTerm = final; el.status.textContent = 'Готово'; el.reel.classList.add('has-term');
  saveCurrentTerm(final); logRoll(final.id); setCenterIndex(ITEMS_AROUND); applyLearnedBadge();
  if (!reducedMotionMQ.matches) {
    const center = el.strip.querySelector('.reel__item.is-center');
    center?.animate([{ transform:'scale(1)' }, { transform:'scale(1.035)' }, { transform:'scale(1)' }], { duration: CENTER_BOUNCE_MS, easing:'cubic-bezier(.34,1.56,.64,1)' });
  }
  clearTimeout(rollInfoTimerId);
  rollInfoTimerId = setTimeout(() => { if (!isRolling && currentTerm === final) openInfoModal(final); }, INFO_MODAL_DELAY_MS);
}
function showAllLearned() {
  cancelAnimation(); el.strip.replaceChildren();
  const item = createItem({ term: 'Всё изучено', termEn: 'Nice work ✦', category: 'Прогресс' });
  item.className = 'reel__item is-center'; el.strip.appendChild(item); positionStripInstant(0);
  currentTerm = null; el.reel.classList.add('has-term'); el.status.textContent = '100%'; lsRemove(LS_KEYS.lastTerm); lsRemove(LS_KEYS.lastTermFull);
  showToast('Все термины изучены. Сбрось прогресс, чтобы начать заново.', { important: true });
}

function restoreLastTerm() {
  if (!lsGet(LS_KEYS.hasRolled, false)) return false;
  let term = lsGet(LS_KEYS.lastTermFull, null);
  if (!term || !term.id) {
    const id = lsGet(LS_KEYS.lastTerm, null);
    term = findTermById(id);
  }
  if (!term || !term.id) return false;
  let pool = getAllTerms();
  let realTerm = pool.find(t => t.id === term.id);
  if (!realTerm) {
    realTerm = term;
    jsonTerms = [realTerm, ...jsonTerms];
    invalidateTermCache();
    pool = getAllTerms();
  }
  currentTerm = realTerm;
  const idx = buildStrip(realTerm, pool);
  positionStripInstant(idx);
  setCenterIndex(idx);
  applyLearnedBadge();
  el.reel.classList.add('has-term');
  el.status.textContent = 'Восстановлено';
  return true;
}

function updateInfoLearnButton() {
  if (!currentTerm) return;
  const learned = learnedIds.includes(currentTerm.id);
  el.btnInfoLearn.classList.toggle('is-active', learned);
  el.btnInfoLearnText.textContent = learned ? 'Изучено' : 'Отметить изученным';
}

/* === Раскрытие описания === */
function resetDescriptionCollapse() {
  if (!el.infoDescWrap || !el.btnInfoExpand) return;
  el.infoDescWrap.classList.remove('is-collapsed', 'is-expanded');
  el.infoDescWrap.style.maxHeight = '';
  el.btnInfoExpand.classList.remove('is-expanded');
  el.btnInfoExpand.hidden = true;
  el.btnInfoExpandText.textContent = 'Показать полностью';
}

function updateDescriptionCollapse() {
  if (!el.infoDescWrap || !el.btnInfoExpand || !el.infoDescription) return;

  // Сброс прошлого состояния, чтобы корректно замерить реальную высоту текста
  el.infoDescWrap.classList.remove('is-collapsed', 'is-expanded');
  el.infoDescWrap.style.maxHeight = 'none';
  el.btnInfoExpand.hidden = true;

  requestAnimationFrame(() => {
    const fullHeight = el.infoDescription.scrollHeight;
    const lineHeight = parseFloat(getComputedStyle(el.infoDescription).lineHeight) || 24;
    const collapsedHeight = lineHeight * 5; // порог: 5 строк

    if (fullHeight > collapsedHeight + 2) {
      el.infoDescWrap.classList.add('is-collapsed');
      el.btnInfoExpand.hidden = false;
    } else {
      el.infoDescWrap.style.maxHeight = '';
    }
  });
}

function toggleDescription() {
  if (!el.infoDescWrap || !el.btnInfoExpand) return;
  const isExpanded = el.infoDescWrap.classList.contains('is-expanded');
  if (isExpanded) {
    el.infoDescWrap.classList.remove('is-expanded');
    el.infoDescWrap.classList.add('is-collapsed');
    el.btnInfoExpand.classList.remove('is-expanded');
    el.btnInfoExpandText.textContent = 'Показать полностью';
    el.modalInfo.querySelector('.modal__content')?.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    el.infoDescWrap.classList.remove('is-collapsed');
    el.infoDescWrap.classList.add('is-expanded');
    el.btnInfoExpand.classList.add('is-expanded');
    el.btnInfoExpandText.textContent = 'Свернуть';
  }
}

function openInfoModal(term = currentTerm, options = {}) {
  if (!term) return;
  currentTerm = term;
  infoSource = options.source || 'main';
  el.btnInfoNext.hidden = infoSource !== 'main';
  el.infoCategory.textContent = term.category || 'Без категории';
  el.infoTerm.textContent = term.term || '—';
  el.infoTermEn.textContent = term.termEn || '';
  el.infoDescription.textContent = term.description || 'Описание отсутствует.';
  if (term.sourceUrl) {
    el.infoSource.href = term.sourceUrl;
    el.infoSource.hidden = false;
  } else {
    el.infoSource.hidden = true;
    el.infoSource.removeAttribute('href');
  }
  const all = getAllTerms();
  const position = all.findIndex(t => t.id === term.id);
  el.infoCounter.textContent = position >= 0 ? `${position + 1} / ${all.length}` : '';
  updateInfoLearnButton();

  // Сброс и пересчёт обрезки описания
  resetDescriptionCollapse();

  openModal(el.modalInfo);

  // После открытия модалки считаем высоту (элемент должен быть видим)
  requestAnimationFrame(() => updateDescriptionCollapse());
}

function renderHistory() {
  el.historyList.replaceChildren();
  const todayStart = new Date(); todayStart.setHours(0,0,0,0);
  const todayLearned = history.filter(h => h.action === 'learned' && h.date >= todayStart.getTime()).length;
  el.historyToday.textContent = `Сегодня изучено: ${todayLearned}`;
  if (!history.length) { const empty = document.createElement('li'); empty.textContent = 'История пока пуста'; el.historyList.appendChild(empty); return; }
  [...history].reverse().forEach(h => {
    const term = findTermById(h.id); const li = document.createElement('li');
    const info = document.createElement('div'); info.className = 'history__info';
    const name = document.createElement('div'); name.className = `history__name h-action--${h.action}`; name.textContent = term?.term || h.id;
    const meta = document.createElement('div'); meta.className = 'history__meta';
    const d = new Date(h.date); const date = `${d.toLocaleDateString('ru-RU',{day:'2-digit',month:'2-digit'})} ${d.toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'})}`;
    meta.textContent = `${h.action === 'learned' ? '✓ изучено' : '✦ ролл'} · ${date}`;
    info.append(name, meta);
    const actions = document.createElement('div'); actions.className = 'history__actions';
    const btnInfo = document.createElement('button'); btnInfo.className='btn btn--icon h-btn-info'; btnInfo.textContent='i'; btnInfo.title='Описание'; btnInfo.setAttribute('aria-label','Описание'); btnInfo.disabled=!term;
    if (term) btnInfo.addEventListener('click', () => { closeModal(el.modalHistory); openInfoModal(term, { source: 'history' }); });
    const learned = learnedIds.includes(h.id); const btnLearn = document.createElement('button'); btnLearn.className='btn btn--icon h-btn-learn'; btnLearn.textContent='✓'; btnLearn.title=learned?'Снять отметку «изучено»':'Отметить изученным'; btnLearn.setAttribute('aria-label',btnLearn.title); btnLearn.classList.toggle('is-learned', learned);
    btnLearn.addEventListener('click', () => { toggleLearned(h.id); renderHistory(); });
    actions.append(btnInfo, btnLearn); li.append(info, actions); el.historyList.appendChild(li);
  });
}

function clearHistory() {
  if (!history.length) { showToast('История уже пуста.'); return; }
  history = [];
  lsSet(LS_KEYS.history, history);
  renderHistory();
  showToast('История очищена.', { important: true });
}

function openModal(modal) { lastFocusedElement = document.activeElement; modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; }
function closeModal(modal) { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); if (!isAnyModalOpen()) document.body.style.overflow=''; if (lastFocusedElement?.focus) setTimeout(()=>lastFocusedElement.focus(),0); }
function isAnyModalOpen() { return [el.modalInfo,el.modalHistory,el.modalConfirmReset].some(m=>m.classList.contains('is-open')); }
function closeTopModal() { const modal = [el.modalInfo,el.modalHistory,el.modalConfirmReset].find(m => m.classList.contains('is-open')); if (modal) closeModal(modal); }
function doResetProgress() {
  learnedIds=[]; lsSet(LS_KEYS.learned, learnedIds); currentTerm=null;
  lsRemove(LS_KEYS.lastTerm); lsRemove(LS_KEYS.lastTermFull);
  lsSet(LS_KEYS.hasRolled,false);
  cancelAnimation(); clearTimeout(rollInfoTimerId);
  el.strip.replaceChildren(); el.reel.classList.remove('has-term','is-rolling'); el.status.textContent='Готово'; el.btnRoll.disabled=false;
  closeModal(el.modalConfirmReset); location.hash='';
  if (!el.hint?.isConnected) location.reload();
}

/* === Свечение за курсором === */
function initCursorGlow() {
  const glow = el.cursorGlow;
  if (!glow) return;
  if (window.matchMedia('(hover: none)').matches) return;
  if (reducedMotionMQ.matches) return;

  // Размер берём прямо из элемента — при смене width/height в CSS ничего править не надо.
  const rect = glow.getBoundingClientRect();
  const halfW = rect.width / 2;
  const halfH = rect.height / 2;

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;
  let rafId = null;
  let isVisible = false;

  const LERP = 0.16;

  const applyTransform = () => {
    glow.style.transform = `translate3d(${currentX - halfW}px, ${currentY - halfH}px, 0)`;
  };

  function tick() {
    currentX += (targetX - currentX) * LERP;
    currentY += (targetY - currentY) * LERP;
    applyTransform();
    if (Math.abs(targetX - currentX) > 0.5 || Math.abs(targetY - currentY) > 0.5) {
      rafId = requestAnimationFrame(tick);
    } else {
      rafId = null;
    }
  }

  function onMove(e) {
    targetX = e.clientX;
    targetY = e.clientY;
    if (!isVisible) {
      isVisible = true;
      currentX = targetX;
      currentY = targetY;
      applyTransform();
      glow.classList.add('is-visible');
    }
    if (rafId === null) rafId = requestAnimationFrame(tick);
  }

  function onLeave() {
    isVisible = false;
    glow.classList.remove('is-visible');
  }

  document.addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('pointerleave', onLeave);
  window.addEventListener('blur', onLeave);
  document.addEventListener('visibilitychange', () => { if (document.hidden) onLeave(); });
}

function bindEvents() {
  el.reel.addEventListener('click', e => {
    if (isRolling) return;
    if (e.target.closest('button')) return;
    startRoll();
  });
  el.reel.addEventListener('keydown', e => {
    if (e.code === 'Enter' || e.code === 'Space') { e.preventDefault(); startRoll(); }
  });
  el.btnRoll.addEventListener('click', startRoll);
  el.btnReset.addEventListener('click', ()=>openModal(el.modalConfirmReset));
  el.btnHistory.addEventListener('click', ()=>{renderHistory();openModal(el.modalHistory);});
  el.btnRefresh?.addEventListener('click', ()=>loadOnlineTerms({ silent: false }));
  el.btnClearHistory.addEventListener('click', clearHistory);
  el.btnCloseHistory.addEventListener('click',()=>closeModal(el.modalHistory)); el.btnCloseInfo.addEventListener('click',()=>closeModal(el.modalInfo));
  el.btnCancelReset.addEventListener('click',()=>closeModal(el.modalConfirmReset)); el.btnConfirmReset.addEventListener('click',doResetProgress);
  el.btnInfoLearn.addEventListener('click',()=>currentTerm&&toggleLearned(currentTerm.id));
  el.btnInfoExpand?.addEventListener('click', toggleDescription);
  el.btnInfoNext.addEventListener('click',()=>{ closeModal(el.modalInfo); setTimeout(startRoll,120); });
  el.toastClose.addEventListener('click',closeToast);
  [el.modalInfo,el.modalHistory,el.modalConfirmReset].forEach(m=>m.addEventListener('click',e=>{if(e.target===m)closeModal(m);}));
  document.addEventListener('keydown',e=>{
    if (e.code==='Escape') { closeTopModal(); closeToast(); return; }
    if (e.code==='Space' && !isAnyModalOpen() && !['INPUT','TEXTAREA','SELECT','BUTTON'].includes(e.target.tagName)) { e.preventDefault(); startRoll(); }
  });
  window.addEventListener('resize',()=>{
    syncItemHeight();
    if(currentTerm&&!isRolling){
      const center=el.strip.querySelector('.is-center');
      if(center){const idx=[...el.strip.children].indexOf(center); if(idx>=0)positionStripInstant(idx);}
    }
    if (el.modalInfo?.classList.contains('is-open')) updateDescriptionCollapse();
  });
  const motionChange=()=>{if(reducedMotionMQ.matches&&activeRollAnimation){const idx=[...el.strip.children].indexOf(el.strip.querySelector('.is-center')); cancelAnimation(); if(idx>=0)positionStripInstant(idx); isRolling=false; el.btnRoll.disabled=false; el.reel.classList.remove('is-rolling');}};
  reducedMotionMQ.addEventListener?.('change',motionChange);
  el.reel.addEventListener('pointerdown', e=>{touchStartY=e.clientY;touchStartX=e.clientX;});
  el.reel.addEventListener('pointerup', e=>{if(touchStartY===null||isRolling){touchStartY=null;return;}const dy=e.clientY-touchStartY,dx=e.clientX-touchStartX; if(Math.abs(dy)>SWIPE_THRESHOLD&&Math.abs(dy)>Math.abs(dx)){e.preventDefault();startRoll();} touchStartY=null;});
}

function init() {
  loadState();

  const cacheFresh = loadCachedOnlineTerms();
  if (!cacheFresh) {
    jsonTerms = FALLBACK_TERMS;
  }
  invalidateTermCache();
  syncItemHeight();
  bindEvents();
  initCursorGlow();

  if (!restoreLastTerm() && !shouldShowHint()) hideHint();
  updateHint();

  // Сетевой запрос к Wikipedia — только при первом запуске (когда кэша нет).
  // Дальше список берётся из localStorage, обновление — только по кнопке ⟳.
  if (!cacheFresh) {
    loadOnlineTerms({ silent: false }).catch(() => {});
  }
}

init();
