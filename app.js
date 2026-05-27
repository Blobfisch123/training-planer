// ============================================================
// ÜBUNGSBIBLIOTHEK
// ============================================================
const EXERCISES = [
  // Brust
  { id:'e1',  name:'Bankdrücken',             cat:'Brust',     eq:'Langhantel',    muscles:['Brust','Schulter','Trizeps'],            riskParts:['Schulter','Ellenbogen'], desc:'Lege dich auf eine flache Bank und greife die Langhantel etwas breiter als schulterbreit. Senke die Stange kontrolliert zur Brust und drücke sie explosiv wieder nach oben. Ellenbogen nicht voll einrasten lassen.' },
  { id:'e2',  name:'Schrägbankdrücken',       cat:'Brust',     eq:'Langhantel',    muscles:['Obere Brust','Schulter','Trizeps'],      riskParts:['Schulter'],              desc:'Wie Bankdrücken, aber auf einer nach oben geneigten Bank (30–45°). Die schräge Position verlagert den Fokus auf die obere Brustmuskulatur und die vorderen Schultern.' },
  { id:'e3',  name:'Kurzhantel Fliegende',    cat:'Brust',     eq:'Kurzhantel',    muscles:['Brust'],                                 riskParts:['Schulter'],              desc:'Lege dich auf eine Bank, halte je eine Kurzhantel mit leicht gebeugten Armen. Führe die Arme in einem weiten Bogen seitlich herunter und wieder zur Mitte – wie ein Umarmen. Schultern nicht zu tief absinken lassen.' },
  { id:'e4',  name:'Dips (Brust)',            cat:'Brust',     eq:'Körpergewicht', muscles:['Brust','Trizeps'],                       riskParts:['Schulter','Ellenbogen'], desc:'Stütze dich an parallelen Stangen auf, lehne den Oberkörper deutlich nach vorne und senke dich kontrolliert ab bis die Ellenbogen ca. 90° gebeugt sind. Hochdrücken ohne Schwung.' },
  { id:'e5',  name:'Kabelkreuzziehen',        cat:'Brust',     eq:'Kabel',         muscles:['Brust'],                                 riskParts:['Schulter'],              desc:'Stelle die Kabel auf Schulter- oder Kopfhöhe ein. Stehe in der Mitte, greife die Griffe und führe die Arme mit leicht gebeugten Ellenbogen in einem Bogen vor dem Körper zusammen. Langsam zurückführen.' },
  // Rücken
  { id:'e6',  name:'Kreuzheben',              cat:'Rücken',    eq:'Langhantel',    muscles:['Unterer Rücken','Gesäß','Hamstrings'],   riskParts:['Rücken','Knie'],         desc:'Stehe hüftbreit vor der Stange, greife sie schulterbreit. Rücken gerade, Brust raus. Hebe die Stange durch gleichzeitiges Strecken von Hüfte und Knien – nicht mit dem Rücken ziehen. Die Stange bleibt nah am Körper.' },
  { id:'e7',  name:'Klimmzüge',               cat:'Rücken',    eq:'Körpergewicht', muscles:['Latissimus','Bizeps'],                   riskParts:['Schulter','Ellenbogen'], desc:'Hänge an einer Stange mit Überhandgriff, Hände schulterbreit. Ziehe deinen Körper nach oben, bis das Kinn über der Stange ist. Schulterblätter zusammenziehen, nicht mit Schwung helfen. Kontrolliert absenken.' },
  { id:'e8',  name:'Langhantelrudern',        cat:'Rücken',    eq:'Langhantel',    muscles:['Mittlerer Rücken','Latissimus','Bizeps'], riskParts:['Rücken'],                desc:'Beuge den Oberkörper ca. 45° nach vorne, Rücken gerade. Greife die Langhantel und ziehe sie zur Bauchregion, Ellenbogen eng am Körper. Schulterblätter am oberen Punkt zusammendrücken. Kontrolliert absenken.' },
  { id:'e9',  name:'Lat-Zug',                 cat:'Rücken',    eq:'Kabel',         muscles:['Latissimus','Bizeps'],                   riskParts:['Schulter'],              desc:'Setze dich ans Gerät, greife die Stange breiter als schulterbreit. Lehne den Oberkörper leicht zurück und ziehe die Stange zur oberen Brust. Ellenbogen dabei nach unten und hinten führen.' },
  { id:'e10', name:'Sitzrudern (Kabel)',       cat:'Rücken',    eq:'Kabel',         muscles:['Mittlerer Rücken','Bizeps'],             riskParts:['Rücken'],                desc:'Sitze aufrecht am Kabelzug, Füße auf den Stützen. Ziehe den Griff mit gestrecktem Rücken zum Bauch, Ellenbogen eng am Körper. Schulterblätter am Endpunkt zusammenpressen und kontrolliert zurückführen.' },
  { id:'e11', name:'Hyperextension',          cat:'Rücken',    eq:'Körpergewicht', muscles:['Unterer Rücken','Gesäß'],                riskParts:['Rücken'],                desc:'Lege dich bäuchlings auf die Hyperextensions-Bank, Hüfte am Polster. Senke den Oberkörper nach unten und hebe ihn durch Anspannung des unteren Rückens und Gesäßes wieder bis zur waagerechten Position.' },
  // Schultern
  { id:'e12', name:'Schulterdrücken (LH)',    cat:'Schultern', eq:'Langhantel',    muscles:['Schulter','Trizeps'],                    riskParts:['Schulter'],              desc:'Stehe aufrecht oder sitze, Langhantel auf Schulterhöhe. Drücke die Stange senkrecht nach oben, bis die Arme gestreckt sind. Hohlkreuz vermeiden – Körperspannung halten. Kontrolliert absenken.' },
  { id:'e13', name:'Seitheben',               cat:'Schultern', eq:'Kurzhantel',    muscles:['Seitliche Schulter'],                    riskParts:['Schulter'],              desc:'Stehe aufrecht, Kurzhanteln an den Seiten. Hebe die Arme mit leicht gebeugten Ellenbogen seitlich bis Schulterhöhe – nicht höher. Daumen leicht nach unten drehen. Langsam und kontrolliert absenken.' },
  { id:'e14', name:'Vorgebeugtes Seitheben',  cat:'Schultern', eq:'Kurzhantel',    muscles:['Hintere Schulter'],                      riskParts:['Schulter','Rücken'],     desc:'Beuge den Oberkörper nach vorne (fast parallel zum Boden). Hebe die Kurzhanteln seitlich nach oben, bis die Arme waagerecht sind. Trainiert die hintere Schulter und den oberen Rücken.' },
  { id:'e15', name:'Frontheben',              cat:'Schultern', eq:'Kurzhantel',    muscles:['Vordere Schulter'],                      riskParts:['Schulter'],              desc:'Stehe aufrecht, Kurzhanteln vor den Oberschenkeln. Hebe die Arme gestreckt oder leicht gebeugt frontal bis Schulterhöhe. Wechselweise oder gleichzeitig ausführen. Schwung vermeiden.' },
  { id:'e16', name:'Arnold Press',            cat:'Schultern', eq:'Kurzhantel',    muscles:['Schulter','Trizeps'],                    riskParts:['Schulter'],              desc:'Halte die Kurzhanteln vor dem Gesicht, Handflächen zu dir. Drücke nach oben und drehe dabei die Handflächen nach außen, bis die Arme gestreckt sind. Die Rotation aktiviert alle drei Schulterköpfe.' },
  // Beine
  { id:'e17', name:'Kniebeugen',              cat:'Beine',     eq:'Langhantel',    muscles:['Quadrizeps','Gesäß','Hamstrings'],       riskParts:['Knie','Rücken','Hüfte'], desc:'Stelle die Langhantel auf dem oberen Rücken ab, Füße schulterbreit. Beuge die Knie und senke die Hüfte ab, bis die Oberschenkel parallel zum Boden sind. Knie zeigen in Richtung der Zehen, Rücken bleibt gerade.' },
  { id:'e18', name:'Beinpresse',              cat:'Beine',     eq:'Maschine',      muscles:['Quadrizeps','Gesäß'],                    riskParts:['Knie','Rücken'],         desc:'Setze dich in die Beinpresse, Füße hüftbreit auf der Platte. Drücke die Platte weg bis die Beine fast gestreckt sind – nicht einrasten lassen. Kontrolliert zurückführen, Knie nicht einknicken lassen.' },
  { id:'e19', name:'Ausfallschritte',         cat:'Beine',     eq:'Kurzhantel',    muscles:['Quadrizeps','Gesäß','Hamstrings'],       riskParts:['Knie','Hüfte'],          desc:'Trete einen großen Schritt nach vorne. Beuge beide Knie, bis das hintere Knie fast den Boden berührt und das vordere einen 90°-Winkel hat. Wieder aufstehen und die Seiten wechseln.' },
  { id:'e20', name:'Beinbeuger (liegend)',    cat:'Beine',     eq:'Maschine',      muscles:['Hamstrings'],                            riskParts:['Knie'],                  desc:'Lege dich bäuchlings auf die Maschine, Knöchel unter die Rolle klemmen. Beuge die Knie und ziehe die Fersen langsam Richtung Gesäß. Hüfte bleibt am Polster. Kontrolliert in die Ausgangsposition zurück.' },
  { id:'e21', name:'Beinstrecker',            cat:'Beine',     eq:'Maschine',      muscles:['Quadrizeps'],                            riskParts:['Knie'],                  desc:'Setze dich an die Maschine, Knöchel hinter der Rolle. Strecke die Beine kontrolliert nach oben und senke sie langsam wieder ab. Knie nicht überstrecken. Gut geeignet zur Isolierung des Quadrizeps.' },
  { id:'e22', name:'Wadenheben',              cat:'Beine',     eq:'Maschine',      muscles:['Waden'],                                 riskParts:[],                        desc:'Stehe aufrecht, Zehenspitzen auf einer Erhöhung. Hebe die Fersen so hoch wie möglich (maximale Plantarflexion) und senke sie langsam ab, bis die Ferse leicht tiefer als die Zehen ist – für volle Dehnung.' },
  { id:'e23', name:'Rumänisches Kreuzheben',  cat:'Beine',     eq:'Langhantel',    muscles:['Hamstrings','Gesäß'],                    riskParts:['Rücken','Knie'],         desc:'Stehe aufrecht, Stange in den Händen. Schiebe die Hüfte nach hinten und senke die Stange an den Beinen entlang ab, Knie leicht gebeugt. Bis zur Dehnung der Hamstrings gehen, dann Hüfte nach vorne drücken.' },
  { id:'e24', name:'Bulgare Split Squat',     cat:'Beine',     eq:'Kurzhantel',    muscles:['Quadrizeps','Gesäß'],                    riskParts:['Knie','Hüfte'],          desc:'Stelle den hinteren Fuß auf eine Bank hinter dir. Senke die Hüfte senkrecht nach unten, bis das hintere Knie fast den Boden berührt. Das vordere Knie zeigt in Richtung der Zehen. Sehr effektiv für Einbeinige Kraft.' },
  // Bizeps
  { id:'e25', name:'Bizepscurl (LH)',         cat:'Bizeps',    eq:'Langhantel',    muscles:['Bizeps'],                                riskParts:['Ellenbogen'],            desc:'Stehe aufrecht, Langhantel in den Händen mit Unterhandgriff. Beuge die Ellenbogen und führe die Stange zur Schulter. Ellenbogen bleiben am Körper fixiert, kein Schwung aus dem Rücken.' },
  { id:'e26', name:'Hammercurl',              cat:'Bizeps',    eq:'Kurzhantel',    muscles:['Bizeps','Unterarm'],                     riskParts:['Ellenbogen'],            desc:'Wie der Bizepscurl, aber mit neutralem Griff – Daumen zeigt nach oben. Der neutrale Griff belastet den Bizeps und besonders den Brachialis sowie den Unterarm stärker.' },
  { id:'e27', name:'Konzentrationscurl',      cat:'Bizeps',    eq:'Kurzhantel',    muscles:['Bizeps'],                                riskParts:['Ellenbogen'],            desc:'Sitze auf einer Bank, stütze den Ellenbogen am inneren Oberschenkel ab. Beuge den Arm konzentriert bis zur Schulter und strecke ihn kontrolliert zurück. Maximale Isolation des Bizeps.' },
  { id:'e28', name:'Kabel-Curl',              cat:'Bizeps',    eq:'Kabel',         muscles:['Bizeps'],                                riskParts:['Ellenbogen'],            desc:'Stehe vor dem unteren Kabelzug, greife den Griff mit Unterhandgriff. Beuge die Ellenbogen und führe die Hände zur Schulter. Das Kabel sorgt für konstante Spannung durch den gesamten Bewegungsablauf.' },
  // Trizeps
  { id:'e29', name:'Trizepsstrecken (Seil)',  cat:'Trizeps',   eq:'Kabel',         muscles:['Trizeps'],                               riskParts:['Ellenbogen'],            desc:'Stehe vor dem oberen Kabelzug, greife das Seil mit beiden Händen. Drücke die Hände nach unten und leicht auseinander bis die Arme gestreckt sind. Ellenbogen bleiben am Körper fixiert.' },
  { id:'e30', name:'Schädelbrechern',         cat:'Trizeps',   eq:'Langhantel',    muscles:['Trizeps'],                               riskParts:['Ellenbogen','Schulter'], desc:'Lege dich auf eine Bank, Langhantel über den Kopf ausgestreckt. Beuge nur die Ellenbogen und senke die Stange zur Stirn ab – die Oberarme bleiben senkrecht. Strecke die Arme kontrolliert wieder.' },
  { id:'e31', name:'Dips (Trizeps)',          cat:'Trizeps',   eq:'Körpergewicht', muscles:['Trizeps','Brust'],                       riskParts:['Ellenbogen','Schulter'], desc:'Stütze dich an einer Bank oder parallelen Stangen, Oberkörper aufrecht und nah an der Bank. Beuge die Ellenbogen und senke die Hüfte ab. Je aufrechter der Rücken, desto mehr Trizeps-Fokus.' },
  { id:'e32', name:'Overhead Trizeps (KH)',   cat:'Trizeps',   eq:'Kurzhantel',    muscles:['Trizeps'],                               riskParts:['Ellenbogen'],            desc:'Halte eine Kurzhantel mit beiden Händen hinter dem Kopf, Ellenbogen zeigen nach oben. Strecke die Arme nach oben, indem du nur die Ellenbogen streckst. Oberarme bleiben ruhig neben dem Kopf.' },
  // Core
  { id:'e33', name:'Plank',                   cat:'Core',      eq:'Körpergewicht', muscles:['Bauch','Core'],                          riskParts:['Rücken'],                desc:'Stütze dich auf Unterarme und Zehenspitzen ab. Halte den Körper in einer geraden Linie von Kopf bis Ferse. Gesäß und Bauch anspannen, Hüfte weder anheben noch absacken lassen. Atemrhythmus halten.' },
  { id:'e34', name:'Crunch',                  cat:'Core',      eq:'Körpergewicht', muscles:['Bauch'],                                 riskParts:['Rücken','Nacken'],       desc:'Lege dich auf den Rücken, Knie angewinkelt, Hände locker hinter dem Kopf. Hebe die Schulterblätter durch Bauchkraft vom Boden ab – nicht am Nacken ziehen. Den Bauch beim Anheben ausatmen.' },
  { id:'e35', name:'Russian Twist',           cat:'Core',      eq:'Körpergewicht', muscles:['Seitliche Bauchmuskulatur'],             riskParts:['Rücken'],                desc:'Sitze aufrecht mit angehobenen Beinen, Oberschenkel ca. 45°. Drehe den Oberkörper abwechselnd nach links und rechts und berühre dabei den Boden neben der Hüfte. Mit Gewicht für mehr Intensität.' },
  { id:'e36', name:'Beinheben (hängend)',     cat:'Core',      eq:'Körpergewicht', muscles:['Unterer Bauch'],                         riskParts:['Rücken','Schulter'],     desc:'Hänge frei an einer Stange. Hebe die Beine gestreckt oder angewinkelt bis zur Waagerechten. Vermeide Schwung – die Bewegung kommt aus dem Bauch. Kontrolliert absenken ohne zu schwingen.' },
  { id:'e37', name:'Sit-ups',                 cat:'Core',      eq:'Körpergewicht', muscles:['Bauch'],                                 riskParts:['Rücken','Nacken'],       desc:'Lege dich auf den Rücken, Knie angewinkelt, Füße fixiert. Richte den gesamten Oberkörper bis zur aufrechten Position auf – im Gegensatz zum Crunch volle Bewegungsamplitude. Langsam absenken.' },
  // Cardio
  { id:'e38', name:'Laufen',                  cat:'Cardio',    eq:'Keine',         muscles:['Gesamt'],                                riskParts:['Knie','Hüfte','Fuß'],    desc:'Gleichmäßiges Laufen in moderatem Tempo stärkt das Herz-Kreislauf-System. Für mehr Intensität: Intervalle (z.B. 1 Min. schnell, 2 Min. langsam). Auf Lauftechnik und geeignetes Schuhwerk achten.' },
  { id:'e39', name:'Radfahren / Ergometer',   cat:'Cardio',    eq:'Fahrrad',       muscles:['Beine'],                                 riskParts:['Knie'],                  desc:'Gleichmäßiges Radfahren ist gelenkschonend und ideal für Ausdauer- oder Regenerationstraining. Am Ergometer Widerstand und Trittfrequenz einstellen. Sattel auf Hüfthöhe justieren.' },
  { id:'e40', name:'Schwimmen',               cat:'Cardio',    eq:'Keine',         muscles:['Gesamt'],                                riskParts:[],                        desc:'Schwimmen trainiert Ausdauer und Kraft nahezu gelenkfrei. Verschiedene Stile (Kraul, Brust, Rücken) aktivieren unterschiedliche Muskelgruppen. Ideal als Ergänzung oder bei Verletzungen.' },
  { id:'e41', name:'Seilspringen',            cat:'Cardio',    eq:'Seil',          muscles:['Waden','Gesamt'],                        riskParts:['Knie','Fuß'],            desc:'Springe über ein Seil im gleichmäßigen Rhythmus auf den Zehenspitzen. Sehr effektives Ausdauer- und Koordinationstraining mit hohem Kalorienverbrauch. Mit einfachen Sprüngen beginnen, dann Varianten einbauen.' },
  { id:'e42', name:'Rudermaschine',           cat:'Cardio',    eq:'Maschine',      muscles:['Rücken','Beine'],                        riskParts:['Rücken'],                desc:'Der Bewegungsablauf: Beine strecken, dann Körper leicht zurücklehnen, dann Arme ziehen. Zurück in umgekehrter Reihenfolge. Ganzkörper-Ausdauertraining – ca. 60% Beine, 20% Rumpf, 20% Arme.' },
];

const BODY_PARTS = ['Schulter','Ellenbogen','Handgelenk','Rücken','Nacken','Hüfte','Knie','Fuß','Oberschenkel','Wade'];
const CATEGORIES  = [...new Set(EXERCISES.map(e => e.cat))];
const DAYS = ['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sonntag'];

// ============================================================
// DATA LAYER
// ============================================================
const DB_KEY = 'trainingPlanerData';

const DEFAULT_DAY_TYPES = [
  { id: 'ON_FIELD', label: '🏟 On Field Practice', color: '#00c9a7' },
  { id: 'COACHING', label: '📋 Coaching',          color: '#a78bfa' },
];

function getSpecialDay(id) {
  if (!id) return null;
  return (state.data.customDayTypes || []).find(t => t.id === id) || null;
}

function getDefaultData() {
  return { plans: [], weekSchedule: {}, workoutLogs: [], injuries: [],
           customExercises: [], customDayTypes: [...DEFAULT_DAY_TYPES], planFolders: [] };
}

function migrateData(d) {
  if (!d.customDayTypes) d.customDayTypes = [...DEFAULT_DAY_TYPES];
  if (!d.planFolders)    d.planFolders    = [];
  if (d.weekSchedule) {
    const keys = Object.keys(d.weekSchedule);
    if (keys.length > 0 && keys.every(k => /^[0-6]$/.test(k))) {
      const newSched = {};
      const now = new Date();
      const curr = now.getDay() === 0 ? 6 : now.getDay() - 1;
      const mon = new Date(now); mon.setDate(now.getDate() - curr);
      keys.forEach(k => {
        const d2 = new Date(mon); d2.setDate(mon.getDate() + parseInt(k));
        newSched[localDateStr(d2)] = d.weekSchedule[k];
      });
      d.weekSchedule = newSched;
    }
    Object.keys(d.weekSchedule).forEach(k => {
      if (typeof d.weekSchedule[k] === 'string') {
        d.weekSchedule[k] = [d.weekSchedule[k]];
      }
    });
  }
  return d;
}

async function loadUserData(uid) {
  const docRef = db.doc(`users/${uid}`);
  const snap   = await docRef.get();
  if (snap.exists) {
    state.data = migrateData(snap.data());
  } else {
    // Erster Login – prüfe ob lokale Daten vorhanden (Migration)
    try {
      const local = localStorage.getItem(DB_KEY);
      if (local) {
        state.data = migrateData(JSON.parse(local));
        toast('Lokale Daten wurden in die Cloud übertragen ✓', 'success');
      } else {
        state.data = getDefaultData();
      }
    } catch(e) {
      state.data = getDefaultData();
    }
    await docRef.set(state.data);
  }
}

function dbSave(data) {
  if (!state.currentUser) return;
  db.doc(`users/${state.currentUser.uid}`).set(data)
    .catch(e => console.error('Speichern fehlgeschlagen:', e));
}

let _syncUnsubscribe = null;
function setupRealtimeSync(uid) {
  if (_syncUnsubscribe) _syncUnsubscribe();
  _syncUnsubscribe = db.doc(`users/${uid}`).onSnapshot(snap => {
    if (snap.exists && !snap.metadata.hasPendingWrites) {
      state.data = migrateData(snap.data());
      if (!state.activeWorkout) {
        const renders = { dashboard: renderDashboard, plans: renderPlans,
          schedule: renderSchedule, workout: renderWorkout,
          progress: renderProgress, library: renderLibrary, injuries: renderInjuries };
        if (renders[state.view]) renders[state.view]();
      }
    }
  });
}

function allExercises() {
  return [...EXERCISES, ...(state.data.customExercises || [])];
}

function getExercise(id) {
  return allExercises().find(e => e.id === id);
}

function getActiveInjuries() {
  return (state.data.injuries || []).filter(i => i.active);
}

function isExerciseRisky(exercise) {
  const active = getActiveInjuries();
  return active.some(inj => exercise.riskParts && exercise.riskParts.includes(inj.bodyPart));
}

function getInjuryWarnings(exercise) {
  const active = getActiveInjuries();
  return active.filter(inj => exercise.riskParts && exercise.riskParts.includes(inj.bodyPart))
               .map(inj => inj.bodyPart);
}

// ============================================================
// TRACKING TYPES
// ============================================================
const TIMED_EXERCISE_IDS = new Set(['e33']); // Plank

function getTrackingType(exDef) {
  if (!exDef) return 'weight';
  if (exDef.trackingType) return exDef.trackingType; // benutzerdefinierte Übungen
  if (exDef.cat === 'Cardio') return 'cardio';
  if (TIMED_EXERCISE_IDS.has(exDef.id)) return 'timed';
  return 'weight';
}

function detectSetType(sets) {
  if (!sets || !sets.length) return 'weight';
  const s = sets[0];
  if ('distance' in s) return 'cardio';
  if ('duration' in s && !('reps' in s)) return 'timed';
  return 'weight';
}

// ============================================================
// STATE
// ============================================================
let state = {
  view: 'dashboard',
  data: getDefaultData(),
  currentUser: null,
  editingPlan: null,
  activeWorkout: null,
  workoutStartTime: null,
  scheduleDate: new Date().toISOString().slice(0,10),
  collapsedFolders: new Set(),
};

// ============================================================
// UTILS
// ============================================================
function uuid() {
  return 'x' + Math.random().toString(36).slice(2,11);
}

function localDateStr(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function today() {
  return localDateStr(new Date());
}

function todayDayIndex() {
  const d = new Date().getDay();
  return d === 0 ? 6 : d - 1; // 0=Mon ... 6=Sun
}

function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('de-DE', { day:'2-digit', month:'short', year:'numeric' });
}

function weekDateFor(dayIdx) {
  const now = new Date();
  const curr = now.getDay() === 0 ? 6 : now.getDay() - 1;
  const diff = dayIdx - curr;
  const d = new Date(now);
  d.setDate(now.getDate() + diff);
  return d;
}

function getPlan(id) {
  return state.data.plans.find(p => p.id === id);
}

function toast(msg, type='') {
  let el = document.getElementById('toast');
  if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.className = `toast ${type} show`;
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2800);
}

// ============================================================
// NAVIGATION
// ============================================================
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');
}

const MORE_VIEWS = ['progress', 'library', 'injuries'];

function navigate(view) {
  state.view = view;
  // Sidebar nav
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.view === view);
  });
  // Bottom nav
  document.querySelectorAll('.bottom-nav-item[data-view]').forEach(el => {
    el.classList.toggle('active', el.dataset.view === view);
  });
  const moreBtn = document.getElementById('bottom-nav-more');
  if (moreBtn) moreBtn.classList.toggle('active', MORE_VIEWS.includes(view));

  const badge = document.getElementById('injury-badge');
  const active = getActiveInjuries();
  if (badge) badge.style.display = active.length ? 'flex' : 'none';

  const content = document.getElementById('content');
  content.innerHTML = '';
  const views = { dashboard: renderDashboard, plans: renderPlans, schedule: renderSchedule,
                  workout: renderWorkout, progress: renderProgress,
                  library: renderLibrary, injuries: renderInjuries };
  if (views[view]) views[view]();
}

function toggleMoreMenu() {
  const overlay = document.getElementById('more-menu-overlay');
  const menu    = document.getElementById('more-menu');
  if (!overlay || !menu) return;
  const opening = !menu.classList.contains('open');
  overlay.classList.toggle('open', opening);
  menu.classList.toggle('open', opening);
}

// ============================================================
// SVG CHART
// ============================================================
function svgLineChart(data, color='#4f8ef7', width=600, height=220) {
  if (!data || data.length < 2) {
    return `<div class="no-data">Noch zu wenige Einträge für ein Diagramm</div>`;
  }
  const pad = { t:16, r:16, b:42, l:54 };
  const cw = width - pad.l - pad.r;
  const ch = height - pad.t - pad.b;
  const vals = data.map(d => d.y);
  const raw_min = Math.min(...vals);
  const raw_max = Math.max(...vals);
  const range = raw_max - raw_min || 1;
  const minY = raw_min - range * 0.1;
  const maxY = raw_max + range * 0.1;
  const sy = v => ch - ((v - minY) / (maxY - minY)) * ch;
  const sx = i => (i / (data.length - 1)) * cw;

  const pts = data.map((d,i) => `${sx(i).toFixed(1)},${sy(d.y).toFixed(1)}`).join(' ');
  const area = `${sx(0).toFixed(1)},${ch} ${pts} ${sx(data.length-1).toFixed(1)},${ch}`;

  let yLabels = '';
  for (let t = 0; t <= 4; t++) {
    const y = (ch / 4) * t;
    const v = maxY - ((maxY - minY) / 4) * t;
    yLabels += `<line x1="0" y1="${y.toFixed(1)}" x2="${cw}" y2="${y.toFixed(1)}" stroke="#33335a" stroke-dasharray="3,3"/>
      <text x="-8" y="${(y+4).toFixed(1)}" text-anchor="end" fill="#60607a" font-size="11">${v.toFixed(1)}</text>`;
  }

  const step = Math.max(1, Math.ceil(data.length / 6));
  let xLabels = '';
  data.forEach((d, i) => {
    if (i === 0 || i === data.length-1 || i % step === 0) {
      const label = d.label || d.x || '';
      xLabels += `<text x="${sx(i).toFixed(1)}" y="${ch+22}" text-anchor="middle" fill="#60607a" font-size="10">${label}</text>`;
    }
  });

  const dots = data.map((d,i) =>
    `<circle cx="${sx(i).toFixed(1)}" cy="${sy(d.y).toFixed(1)}" r="4" fill="${color}" stroke="#1a1a2e" stroke-width="2"/>`
  ).join('');

  return `<svg width="100%" viewBox="0 0 ${width} ${height}" style="max-width:${width}px">
    <g transform="translate(${pad.l},${pad.t})">
      ${yLabels}
      <polygon points="${area}" fill="${color}" opacity="0.12"/>
      <polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round"/>
      ${dots}
      ${xLabels}
    </g>
  </svg>`;
}

// ============================================================
// DASHBOARD
// ============================================================
function renderDashboard() {
  const el = document.getElementById('content');
  const data = state.data;
  const todayItems   = getDayItems(today());
  const todaySpecials = todayItems.map(id => getSpecialDay(id)).filter(Boolean);
  const todayPlans    = todayItems.map(id => getPlan(id)).filter(Boolean);
  const todaySpecial  = todaySpecials[0] || null;
  const todayPlan     = todayPlans[0] || null;

  const logsThisWeek = (data.workoutLogs||[]).filter(l => {
    const d = new Date(l.date);
    const now = new Date();
    const start = new Date(now); start.setDate(now.getDate() - now.getDay() + 1);
    return d >= start;
  });

  const allLogs = data.workoutLogs || [];
  const totalWeight = allLogs.reduce((acc, log) => {
    return acc + (log.exercises||[]).reduce((a2, ex) => {
      return a2 + (ex.sets||[]).reduce((a3, s) => a3 + (s.completed ? (s.weight||0) * (s.reps||0) : 0), 0);
    }, 0);
  }, 0);

  const streak = calcStreak();
  const activeInj = getActiveInjuries();

  el.innerHTML = `<div class="fade-in">
    <div class="page-header">
      <h1 class="page-title">Dashboard <span>${new Date().toLocaleDateString('de-DE',{weekday:'long',day:'2-digit',month:'long'})}</span></h1>
      ${todayPlans.length > 0 ? `<button class="btn btn-primary" onclick="navigate('workout')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        Training starten
      </button>` : todaySpecials.length > 0 ? todaySpecials.map(s => `<span class="badge" style="font-size:13px;padding:8px 14px;background:${s.color}22;color:${s.color};border:1px solid ${s.color}55;">${escHtml(s.label)}</span>`).join('') : ''}
    </div>

    <!-- Stats -->
    <div class="grid-3 mb-16">
      <div class="stat-card">
        <div class="stat-label">Trainings diese Woche</div>
        <div class="stat-value accent">${logsThisWeek.length}</div>
        <div class="stat-sub">von ${Object.keys(data.weekSchedule||{}).length} geplanten Tagen</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Streak</div>
        <div class="stat-value green">${streak}</div>
        <div class="stat-sub">aufeinanderfolgende Wochen</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Gesamtvolumen (gesamt)</div>
        <div class="stat-value blue">${(totalWeight/1000).toFixed(1)}t</div>
        <div class="stat-sub">${allLogs.length} Einheiten gesamt</div>
      </div>
    </div>

    <div class="grid-2">
      <!-- Heutiges Training -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">Heutiges Training</div>
          <button class="btn btn-ghost btn-sm" onclick="navigate('schedule')">Wochenplan</button>
        </div>
        ${todaySpecials.length > 0 || todayPlans.length > 0 ? `
          <div style="display:flex;flex-direction:column;gap:14px;padding:8px 0;">
            ${todaySpecials.map(s => `
              <div style="text-align:center;padding:12px 10px;border-radius:8px;background:${s.color}11;border:1px solid ${s.color}33;">
                <div style="font-size:22px;font-weight:800;color:${s.color};">${escHtml(s.label)}</div>
              </div>`).join('')}
            ${todayPlans.map(pl => `
              <div>
                <div style="font-size:16px;font-weight:700;margin-bottom:6px;">${escHtml(pl.name)}</div>
                <div style="color:var(--text2);font-size:13px;margin-bottom:8px;">${(pl.exercises||[]).length} Übungen</div>
                ${(pl.exercises||[]).slice(0,3).map(ex => {
                  const exDef = getExercise(ex.exerciseId);
                  if (!exDef) return '';
                  return `<div class="exercise-item" style="padding:6px 0;">
                    <div style="flex:1;">
                      <div class="exercise-item-name">${escHtml(exDef.name)}</div>
                      <div class="exercise-item-meta">${ex.sets}×${ex.reps} · ${ex.weight}kg</div>
                    </div>
                  </div>`;
                }).join('')}
                ${(pl.exercises||[]).length > 3 ? `<div style="color:var(--text3);font-size:12px;">+${(pl.exercises||[]).length-3} weitere</div>` : ''}
              </div>`).join('<hr style="border:none;border-top:1px solid var(--border);margin:4px 0;">')}
          </div>
        ` : `
          <div class="empty-state" style="padding:30px 10px;">
            <p>Kein Training für heute geplant.</p>
            <button class="btn btn-secondary btn-sm" onclick="navigate('schedule')">Wochenplan bearbeiten</button>
          </div>
        `}
      </div>

      <!-- Verletzungen & letzte Einheiten -->
      <div style="display:flex;flex-direction:column;gap:16px;">
        ${activeInj.length ? `
          <div class="card" style="border-color:var(--warn);">
            <div class="card-header">
              <div class="card-title">⚠ Aktive Verletzungen</div>
              <button class="btn btn-ghost btn-sm" onclick="navigate('injuries')">Alle</button>
            </div>
            ${activeInj.slice(0,3).map(inj => `
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                <span class="badge badge-warn">${inj.bodyPart}</span>
                <span style="font-size:13px;color:var(--text2);">${inj.description.slice(0,50)}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <div class="card">
          <div class="card-header">
            <div class="card-title">Letzte Einheiten</div>
          </div>
          ${allLogs.length === 0 ? `<div class="empty-state" style="padding:20px 10px;"><p>Noch kein Training absolviert.</p></div>` :
            allLogs.slice(-5).reverse().map(log => `
              <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border);">
                <div style="flex:1;">
                  <div style="font-weight:600;font-size:13px;">${log.planName}</div>
                  <div style="font-size:12px;color:var(--text2);">${formatDate(log.date)} · ${(log.exercises||[]).length} Übungen</div>
                </div>
                <span class="badge badge-green">✓</span>
              </div>
            `).join('')
          }
        </div>
      </div>
    </div>
  </div>`;
}

function calcStreak() {
  const logs = state.data.workoutLogs || [];
  if (!logs.length) return 0;
  const weeks = new Set(logs.map(l => {
    const d = new Date(l.date);
    const yr = d.getFullYear();
    const wk = Math.ceil((((d - new Date(yr,0,1))/86400000)+new Date(yr,0,1).getDay()+1)/7);
    return `${yr}-${wk}`;
  }));
  return weeks.size;
}

// ============================================================
// TRAININGSPLANE
// ============================================================
function renderPlans() {
  const el = document.getElementById('content');
  const plans   = state.data.plans || [];
  const folders = state.data.planFolders || [];

  const folderSections = folders.map(folder => {
    const folderPlans = plans.filter(p => p.folderId === folder.id);
    const isOpen = !state.collapsedFolders.has(folder.id);
    return `
      <div class="folder-section" id="folder-${folder.id}">
        <div class="folder-header" onclick="toggleFolder('${folder.id}')">
          <span class="folder-chevron ${isOpen ? 'open' : ''}">▶</span>
          <span class="folder-color-dot" style="background:${folder.color};"></span>
          <span class="folder-name">📁 ${escHtml(folder.name)}</span>
          <span class="folder-count">${folderPlans.length} ${folderPlans.length === 1 ? 'Plan' : 'Pläne'}</span>
          <div class="folder-actions" onclick="event.stopPropagation()">
            <button class="btn btn-ghost btn-sm" onclick="openFolderModal('${folder.id}')">✏️</button>
            <button class="btn btn-ghost btn-sm" style="color:var(--danger);" onclick="deletePlanFolder('${folder.id}')">🗑</button>
          </div>
        </div>
        <div class="folder-plans ${isOpen ? '' : 'collapsed'}">
          ${folderPlans.length === 0
            ? `<div style="padding:14px;color:var(--text3);font-size:13px;">Noch keine Pläne in diesem Ordner.</div>`
            : `<div class="grid-auto" style="margin-top:10px;">${folderPlans.map(p => renderPlanCard(p, folders)).join('')}</div>`}
        </div>
      </div>`;
  }).join('');

  const unfoldered = plans.filter(p => !p.folderId || !folders.find(f => f.id === p.folderId));
  const unfolderedSection = unfoldered.length > 0 ? `
    <div class="folder-section">
      <div class="folder-header" onclick="toggleFolder('__none__')">
        <span class="folder-chevron ${!state.collapsedFolders.has('__none__') ? 'open' : ''}">▶</span>
        <span class="folder-color-dot" style="background:var(--text3);"></span>
        <span class="folder-name">📁 Ohne Ordner</span>
        <span class="folder-count">${unfoldered.length} ${unfoldered.length === 1 ? 'Plan' : 'Pläne'}</span>
      </div>
      <div class="folder-plans ${!state.collapsedFolders.has('__none__') ? '' : 'collapsed'}">
        <div class="grid-auto" style="margin-top:10px;">${unfoldered.map(p => renderPlanCard(p, folders)).join('')}</div>
      </div>
    </div>` : '';

  const noPlansAtAll = plans.length === 0;

  el.innerHTML = `<div class="fade-in">
    <div class="page-header">
      <h1 class="page-title">Trainingspläne <span>${plans.length} Pläne</span></h1>
      <div style="display:flex;gap:8px;">
        <button class="btn btn-secondary" onclick="openFolderModal(null)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
          Neuer Ordner
        </button>
        <button class="btn btn-primary" onclick="openPlanEditor(null)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
          Neuer Plan
        </button>
      </div>
    </div>
    ${noPlansAtAll && folders.length === 0 ? `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
          <rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/>
        </svg>
        <p>Noch keine Pläne erstellt.</p>
        <button class="btn btn-primary" onclick="openPlanEditor(null)">Ersten Plan erstellen</button>
      </div>
    ` : `${folderSections}${unfolderedSection}`}
  </div>`;
}

function renderPlanCard(plan, folders) {
  folders = folders || state.data.planFolders || [];
  const cats = [...new Set((plan.exercises||[]).map(e => {
    const ex = getExercise(e.exerciseId);
    return ex ? ex.cat : '';
  }).filter(Boolean))];

  const hasInjury = (plan.exercises||[]).some(e => {
    const ex = getExercise(e.exerciseId);
    return ex && isExerciseRisky(ex);
  });

  const folderOptions = folders.map(f =>
    `<option value="${f.id}" ${plan.folderId === f.id ? 'selected' : ''}>${escHtml(f.name)}</option>`
  ).join('');

  return `<div class="plan-card" onclick="openPlanEditor('${plan.id}')">
    <div class="plan-card-name">${escHtml(plan.name)} ${hasInjury ? '<span class="badge badge-warn" style="font-size:10px;">⚠</span>' : ''}</div>
    <div class="plan-card-meta">
      <span>${(plan.exercises||[]).length} Übungen</span>
      ${plan.description ? `<span>${plan.description.slice(0,40)}${plan.description.length>40?'…':''}</span>` : ''}
    </div>
    <div class="plan-card-tags">
      ${cats.map(c => `<span class="badge badge-blue">${c}</span>`).join('')}
    </div>
    <div class="plan-card-actions" onclick="event.stopPropagation()">
      ${folders.length > 0 ? `
        <select class="form-control" style="font-size:12px;padding:4px 6px;flex:1;"
          onchange="movePlanToFolder('${plan.id}', this.value)">
          <option value="">📁 Ordner…</option>
          <option value="__none__" ${!plan.folderId ? 'selected':''}>Ohne Ordner</option>
          ${folderOptions}
        </select>` : ''}
      <button class="btn btn-secondary btn-sm" onclick="openPlanEditor('${plan.id}')">Bearbeiten</button>
      <button class="btn btn-danger btn-sm" onclick="deletePlan('${plan.id}')">Löschen</button>
    </div>
  </div>`;
}

function getPlanSuggestions(exList) {
  if (exList.length === 0) return [];
  const tips = [];
  const muscles = new Set();
  exList.forEach(ex => {
    const def = getExercise(ex.exerciseId);
    if (def) def.muscles.forEach(m => muscles.add(m));
  });
  const has = m => muscles.has(m);
  const isPush = has('Brust') || has('Schulter') || has('Trizeps');
  const isPull = has('Rücken') || has('Bizeps');
  const isLegs = has('Beine') || has('Gesäß');

  if (has('Brust') && !has('Trizeps'))
    tips.push({ type:'tip', text:'💡 Trizeps-Übungen passen gut dazu — Brust-Training beansprucht ihn bereits stark (Push-Tag).' });
  if (has('Brust') && !has('Schulter') && !has('Trizeps'))
    tips.push({ type:'tip', text:'💡 Schulter-Übungen ergänzen Brust-Training zum klassischen Push-Tag.' });
  if (has('Rücken') && !has('Bizeps'))
    tips.push({ type:'tip', text:'💡 Bizeps-Curls passen gut dazu — Rücken-Züge beanspruchen den Bizeps (Pull-Tag).' });
  if ((has('Schulter') || has('Trizeps')) && !has('Brust'))
    tips.push({ type:'tip', text:'💡 Brust-Übungen ergänzen Schulter/Trizeps zum vollständigen Push-Tag.' });
  if (has('Beine') && !has('Gesäß'))
    tips.push({ type:'tip', text:'💡 Gesäß-Übungen (z.B. Hip Thrusts, Romanian Deadlift) ergänzen Beintraining gut.' });

  if (exList.length > 8)
    tips.push({ type:'warn', text:'⚠ Mehr als 8 Übungen pro Einheit — Qualität vor Quantität, lieber Volumen auf zwei Tage aufteilen.' });

  const bigGroups = ['Brust','Rücken','Beine'].filter(m => muscles.has(m));
  if (isPush && isPull && isLegs)
    tips.push({ type:'rest', text:'🛌 Fullbody-Einheit: Danach mindestens 1–2 Ruhetage einplanen damit sich alle Muskelgruppen erholen.' });
  else if (isPush && isPull)
    tips.push({ type:'rest', text:'🛌 Push + Pull kombiniert ist intensiv — plane einen Ruhetag oder Bein-Tag danach.' });
  else if (bigGroups.length >= 2)
    tips.push({ type:'rest', text:`🛌 ${bigGroups.join(' & ')} brauchen 48–72h Erholung — trainiere sie nicht an zwei aufeinanderfolgenden Tagen.` });
  else if (bigGroups.length === 1)
    tips.push({ type:'rest', text:`🛌 ${bigGroups[0]} braucht 48h Erholung — nicht an zwei Tagen hintereinander trainieren.` });

  if (isPush && !isPull && !isLegs)
    tips.push({ type:'split', text:'📅 Push-Tag. Klassischer Split-Vorschlag: Push → Pull → Beine → Ruhetag.' });
  else if (isPull && !isPush && !isLegs)
    tips.push({ type:'split', text:'📅 Pull-Tag. Klassischer Split-Vorschlag: Pull → Beine → Ruhetag → Push.' });
  else if (isLegs && !isPush && !isPull)
    tips.push({ type:'split', text:'📅 Bein-Tag. Nach intensivem Beintraining empfiehlt sich ein Ruhetag oder ein leichter Oberkörper-Tag.' });

  return tips;
}

function renderPlanSuggestions(exList) {
  const tips = getPlanSuggestions(exList);
  if (tips.length === 0) return '';
  const bgMap = { warn:'rgba(255,171,0,0.12)', rest:'rgba(99,179,237,0.12)', split:'rgba(167,139,250,0.12)', tip:'rgba(79,209,197,0.08)' };
  return `<div style="margin-top:16px;padding:14px 16px;border-radius:10px;background:var(--bg2);border:1px solid var(--border);">
    <div style="font-size:12px;font-weight:600;color:var(--text2);letter-spacing:.5px;margin-bottom:10px;">VORSCHLÄGE</div>
    <div style="display:flex;flex-direction:column;gap:7px;">
      ${tips.map(s => `<div style="padding:8px 12px;border-radius:6px;font-size:13px;line-height:1.5;background:${bgMap[s.type]||bgMap.tip};color:var(--text1);">${s.text}</div>`).join('')}
    </div>
  </div>`;
}

function openPlanEditor(planId) {
  const plan = planId ? getPlan(planId) : {
    id: uuid(), name: '', description: '', exercises: []
  };
  state.editingPlan = JSON.parse(JSON.stringify(plan));
  renderPlanEditorModal();
}

function renderPlanEditorModal() {
  const plan = state.editingPlan;
  const exList = plan.exercises || [];

  const modalContent = `
    <div class="modal-title">${plan.name ? plan.name : 'Neuer Trainingsplan'}</div>
    <div class="form-group">
      <label class="form-label">Plan-Name *</label>
      <input class="form-control" id="plan-name" value="${escHtml(plan.name)}" placeholder="z.B. Push A, Beine, Fullbody…">
    </div>
    <div class="form-group">
      <label class="form-label">Beschreibung</label>
      <textarea class="form-control" id="plan-desc" rows="2" placeholder="Optional…">${escHtml(plan.description||'')}</textarea>
    </div>
    ${(state.data.planFolders||[]).length > 0 ? `
    <div class="form-group">
      <label class="form-label">Ordner</label>
      <select class="form-control" id="plan-folder">
        <option value="">Ohne Ordner</option>
        ${(state.data.planFolders||[]).map(f => `<option value="${f.id}" ${plan.folderId===f.id?'selected':''}>${escHtml(f.name)}</option>`).join('')}
      </select>
    </div>` : ''}
    <hr class="divider">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
      <div class="card-title">Übungen (${exList.length})</div>
      <button class="btn btn-secondary btn-sm" onclick="openAddExerciseModal()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
        Hinzufügen
      </button>
    </div>
    <div id="plan-exercises">
      ${exList.length === 0 ? `<div class="empty-state" style="padding:20px;"><p>Noch keine Übungen hinzugefügt.</p></div>` :
        exList.map((ex, i) => renderPlanExerciseRow(ex, i)).join('')}
    </div>
    ${renderPlanSuggestions(exList)}
    <div class="flex-end mt-16">
      <button class="btn btn-ghost" onclick="closeModal()">Abbrechen</button>
      <button class="btn btn-primary" onclick="savePlan()">Plan speichern</button>
    </div>
  `;
  openModal(modalContent, 'modal-xl');
}

function renderPlanExerciseRow(ex, idx) {
  const exDef = getExercise(ex.exerciseId);
  if (!exDef) return '';
  const warnings = getInjuryWarnings(exDef);
  return `<div class="exercise-item" id="ex-row-${idx}">
    <div style="flex:1;">
      <div class="exercise-item-name">
        ${escHtml(exDef.name)}
        ${warnings.length ? `<span class="badge badge-warn" title="Achtung: Verletzung ${warnings.join(', ')}">⚠ ${warnings.join(', ')}</span>` : ''}
      </div>
      <div style="display:flex;gap:16px;margin-top:8px;align-items:center;flex-wrap:wrap;">
        ${(()=>{ const type = getTrackingType(exDef);
          if (type === 'cardio') return `
            <div><div class="set-label">Intervalle</div><input class="set-input" type="number" min="1" max="20" value="${ex.sets||1}" onchange="updatePlanEx(${idx},'sets',this.value)"></div>
            <div><div class="set-label">Ziel km</div><input class="set-input" type="number" min="0" step="0.1" value="${ex.targetDistance||0}" onchange="updatePlanEx(${idx},'targetDistance',this.value)"></div>
            <div><div class="set-label">Ziel min</div><input class="set-input" type="number" min="0" step="1" value="${ex.targetDuration||0}" onchange="updatePlanEx(${idx},'targetDuration',this.value)"></div>
            <div><div class="set-label">Pause (s)</div><input class="set-input" type="number" min="0" step="15" value="${ex.restTime||60}" onchange="updatePlanEx(${idx},'restTime',this.value)"></div>`;
          if (type === 'timed') return `
            <div><div class="set-label">Sätze</div><input class="set-input" type="number" min="1" max="20" value="${ex.sets||3}" onchange="updatePlanEx(${idx},'sets',this.value)"></div>
            <div><div class="set-label">Ziel (s)</div><input class="set-input" type="number" min="0" step="5" value="${ex.targetDuration||60}" onchange="updatePlanEx(${idx},'targetDuration',this.value)"></div>
            <div><div class="set-label">Pause (s)</div><input class="set-input" type="number" min="0" step="15" value="${ex.restTime||90}" onchange="updatePlanEx(${idx},'restTime',this.value)"></div>`;
          return `
            <div><div class="set-label">Sätze</div><input class="set-input" type="number" min="1" max="20" value="${ex.sets||3}" onchange="updatePlanEx(${idx},'sets',this.value)"></div>
            <div><div class="set-label">Wdh.</div><input class="set-input" type="text" value="${ex.reps||'8-12'}" placeholder="8-12" onchange="updatePlanEx(${idx},'reps',this.value)"></div>
            <div><div class="set-label">Gewicht (kg)</div><input class="set-input" type="number" min="0" step="2.5" value="${ex.weight||0}" onchange="updatePlanEx(${idx},'weight',this.value)"></div>
            <div><div class="set-label">Pause (s)</div><input class="set-input" type="number" min="0" step="15" value="${ex.restTime||90}" onchange="updatePlanEx(${idx},'restTime',this.value)"></div>`;
        })()}
      </div>
      ${ex.notes ? `<div style="font-size:12px;color:var(--text2);margin-top:6px;">📝 ${escHtml(ex.notes)}</div>` : ''}
    </div>
    <div style="display:flex;flex-direction:column;gap:4px;">
      ${idx > 0 ? `<button class="btn btn-ghost btn-icon" onclick="movePlanEx(${idx},-1)" title="Nach oben">▲</button>` : ''}
      ${idx < (state.editingPlan.exercises.length-1) ? `<button class="btn btn-ghost btn-icon" onclick="movePlanEx(${idx},1)" title="Nach unten">▼</button>` : ''}
      <button class="btn btn-ghost btn-icon" onclick="removePlanEx(${idx})" style="color:var(--danger);">✕</button>
    </div>
  </div>`;
}

function openAddExerciseModal() {
  savePlanFieldsToState();
  const cats = CATEGORIES;
  let html = `
    <div class="modal-title">Übung hinzufügen</div>
    <div class="lib-filters">
      <input class="form-control lib-search" id="add-ex-search" placeholder="Suchen…" oninput="filterAddEx()">
      <select class="form-control" id="add-ex-cat" onchange="filterAddEx()" style="width:160px;">
        <option value="">Alle Kategorien</option>
        ${cats.map(c => `<option>${c}</option>`).join('')}
      </select>
    </div>
    <div id="add-ex-list" style="max-height:380px;overflow-y:auto;display:grid;grid-template-columns:1fr 1fr;gap:8px;">
      ${allExercises().map(ex => renderAddExCard(ex)).join('')}
    </div>
  `;
  openModal(html);
}

function renderAddExCard(ex) {
  const risky    = isExerciseRisky(ex);
  const warnings = getInjuryWarnings(ex);
  return `<div class="exercise-card ${risky?'injured-warn':''}">
    <div class="exercise-card-name">${escHtml(ex.name)}</div>
    <div class="exercise-card-muscles">${ex.muscles.join(', ')}</div>
    ${ex.desc ? `<div class="exercise-desc">${escHtml(ex.desc)}</div>` : ''}
    <div class="exercise-card-tags" style="margin-top:8px;">
      <span class="badge badge-gray">${ex.cat}</span>
      <span class="badge badge-gray">${ex.eq}</span>
      ${risky ? `<span class="badge badge-warn">⚠ ${warnings.join(', ')}</span>` : ''}
    </div>
    <button class="btn btn-primary btn-sm" style="width:100%;margin-top:10px;" onclick="addExerciseToPlan('${ex.id}')">+ Hinzufügen</button>
  </div>`;
}

function filterAddEx() {
  const q = (document.getElementById('add-ex-search').value||'').toLowerCase();
  const cat = document.getElementById('add-ex-cat').value;
  const filtered = allExercises().filter(ex =>
    (!q || ex.name.toLowerCase().includes(q) || ex.muscles.join(' ').toLowerCase().includes(q)) &&
    (!cat || ex.cat === cat)
  );
  document.getElementById('add-ex-list').innerHTML = filtered.map(renderAddExCard).join('') ||
    '<div class="no-data" style="grid-column:1/-1;">Keine Übungen gefunden</div>';
}

function addExerciseToPlan(exId) {
  if (!state.editingPlan.exercises) state.editingPlan.exercises = [];
  state.editingPlan.exercises.push({ exerciseId: exId, sets: 3, reps: '8-12', weight: 0, restTime: 90, notes: '' });
  renderPlanEditorModal();
}

function updatePlanEx(idx, field, val) {
  if (!state.editingPlan.exercises[idx]) return;
  state.editingPlan.exercises[idx][field] = field === 'reps' ? val : parseFloat(val) || 0;
}

function removePlanEx(idx) {
  state.editingPlan.exercises.splice(idx, 1);
  renderPlanEditorModal();
}

function movePlanEx(idx, dir) {
  const exs = state.editingPlan.exercises;
  const target = idx + dir;
  if (target < 0 || target >= exs.length) return;
  [exs[idx], exs[target]] = [exs[target], exs[idx]];
  renderPlanEditorModal();
}

function savePlanFieldsToState() {
  const nameEl = document.getElementById('plan-name');
  const descEl = document.getElementById('plan-desc');
  if (nameEl) state.editingPlan.name = nameEl.value.trim();
  if (descEl) state.editingPlan.description = descEl.value.trim();
}

function savePlan() {
  savePlanFieldsToState();
  const plan = state.editingPlan;
  if (!plan.name) { toast('Bitte einen Plan-Namen eingeben.', 'error'); return; }
  const folderEl = document.getElementById('plan-folder');
  if (folderEl) plan.folderId = folderEl.value || null;
  const plans = state.data.plans || [];
  const idx = plans.findIndex(p => p.id === plan.id);
  if (idx >= 0) plans[idx] = plan;
  else plans.push(plan);
  state.data.plans = plans;
  dbSave(state.data);
  closeModal();
  toast(`Plan "${plan.name}" gespeichert!`, 'success');
  renderPlans();
}

function deletePlan(planId) {
  const plan = getPlan(planId);
  if (!plan) return;
  if (!confirm(`Plan "${plan.name}" wirklich löschen?`)) return;
  state.data.plans = (state.data.plans||[]).filter(p => p.id !== planId);
  Object.keys(state.data.weekSchedule||{}).forEach(k => {
    const items = getDayItems(k).filter(i => i !== planId);
    if (items.length > 0) state.data.weekSchedule[k] = items;
    else delete state.data.weekSchedule[k];
  });
  dbSave(state.data);
  toast('Plan gelöscht.', 'success');
  renderPlans();
}

// ============================================================
// ORDNER VERWALTUNG
// ============================================================
const FOLDER_COLORS = ['#ef4444','#f97316','#eab308','#22c55e','#14b8a6','#3b82f6','#8b5cf6','#ec4899'];

function toggleFolder(folderId) {
  if (state.collapsedFolders.has(folderId)) state.collapsedFolders.delete(folderId);
  else state.collapsedFolders.add(folderId);
  renderPlans();
}

function movePlanToFolder(planId, folderId) {
  const plan = getPlan(planId);
  if (!plan) return;
  plan.folderId = (folderId && folderId !== '__none__') ? folderId : null;
  const plans = state.data.plans || [];
  const idx = plans.findIndex(p => p.id === planId);
  if (idx >= 0) plans[idx] = plan;
  dbSave(state.data);
  renderPlans();
}

function openFolderModal(folderId) {
  const folder = folderId ? (state.data.planFolders||[]).find(f => f.id === folderId) : null;
  const color  = folder ? folder.color : FOLDER_COLORS[0];
  openModal(`
    <div class="modal-title">${folder ? 'Ordner bearbeiten' : 'Neuer Ordner'}</div>
    <div class="form-group">
      <label class="form-label">Ordner-Name *</label>
      <input class="form-control" id="folder-name" value="${escHtml(folder ? folder.name : '')}" placeholder="z.B. Push, Pull, Beine…">
    </div>
    <div class="form-group">
      <label class="form-label">Farbe</label>
      <div style="display:flex;gap:8px;flex-wrap:wrap;" id="folder-colors">
        ${FOLDER_COLORS.map(c => `
          <button onclick="selectFolderColor('${c}')" id="fc-${c.replace('#','')}"
            style="width:28px;height:28px;border-radius:50%;background:${c};border:3px solid ${c===color?'white':'transparent'};cursor:pointer;transition:all .15s;"></button>
        `).join('')}
      </div>
      <input type="hidden" id="folder-color" value="${color}">
    </div>
    <div class="flex-end mt-16">
      <button class="btn btn-ghost" onclick="closeModal()">Abbrechen</button>
      <button class="btn btn-primary" onclick="savePlanFolder(${folderId ? `'${folderId}'` : 'null'})">Speichern</button>
    </div>
  `);
}

function selectFolderColor(color) {
  document.getElementById('folder-color').value = color;
  FOLDER_COLORS.forEach(c => {
    const btn = document.getElementById('fc-' + c.replace('#',''));
    if (btn) btn.style.border = `3px solid ${c === color ? 'white' : 'transparent'}`;
  });
}

function savePlanFolder(folderId) {
  const name  = (document.getElementById('folder-name').value || '').trim();
  const color = document.getElementById('folder-color').value;
  if (!name) { toast('Bitte einen Namen eingeben.', 'error'); return; }
  if (!state.data.planFolders) state.data.planFolders = [];
  if (folderId) {
    const idx = state.data.planFolders.findIndex(f => f.id === folderId);
    if (idx >= 0) state.data.planFolders[idx] = { id: folderId, name, color };
  } else {
    state.data.planFolders.push({ id: uuid(), name, color });
  }
  dbSave(state.data);
  closeModal();
  toast('Ordner gespeichert!', 'success');
  renderPlans();
}

function deletePlanFolder(folderId) {
  const folder = (state.data.planFolders||[]).find(f => f.id === folderId);
  if (!folder) return;
  if (!confirm(`Ordner "${folder.name}" löschen?\nDie enthaltenen Pläne werden in "Ohne Ordner" verschoben.`)) return;
  state.data.planFolders = (state.data.planFolders||[]).filter(f => f.id !== folderId);
  (state.data.plans||[]).forEach(p => { if (p.folderId === folderId) p.folderId = null; });
  dbSave(state.data);
  toast('Ordner gelöscht.', 'success');
  renderPlans();
}

// ============================================================
// WOCHENPLAN
// ============================================================
function getDayLabel(value) {
  if (!value) return null;
  const sp = getSpecialDay(value);
  if (sp) return sp.label;
  const plan = getPlan(value);
  return plan ? plan.name : null;
}

function renderSchedule() {
  const el       = document.getElementById('content');
  const schedule = state.data.weekSchedule  || {};
  const plans    = state.data.plans         || [];
  const dayTypes = state.data.customDayTypes || [];
  const monday   = getWeekMonday(state.scheduleDate);
  const todayStr = today();

  const weekDates = DAYS.map((_, i) => dateForWeekDay(monday, i));
  const weekLabel = monday.toLocaleDateString('de-DE', { day:'2-digit', month:'long' }) +
    ' – ' + new Date(weekDates[6] + 'T00:00:00').toLocaleDateString('de-DE', { day:'2-digit', month:'long', year:'numeric' });

  const legendItems = [
    `<span style="display:flex;align-items:center;gap:6px;"><span style="width:12px;height:12px;border-radius:2px;background:var(--accent);display:inline-block;"></span>Heute</span>`,
    `<span style="display:flex;align-items:center;gap:6px;"><span style="width:12px;height:12px;border-radius:2px;background:var(--accent-b);display:inline-block;"></span>Gym Training</span>`,
    ...dayTypes.map(t => `<span style="display:flex;align-items:center;gap:6px;"><span style="width:12px;height:12px;border-radius:2px;background:${t.color};display:inline-block;"></span>${t.label}</span>`),
    `<span style="display:flex;align-items:center;gap:6px;"><span style="width:12px;height:12px;border-radius:2px;background:var(--success);display:inline-block;"></span>Absolviert</span>`,
  ].join('');

  el.innerHTML = `<div class="fade-in">
    <div class="page-header">
      <h1 class="page-title">Wochenplan</h1>
    </div>

    <!-- Kalender Navigation -->
    <div class="card mb-16" style="padding:14px 20px;">
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
        <button class="btn btn-secondary btn-sm" onclick="shiftWeek(-1)">← Vorherige Woche</button>
        <div style="flex:1;text-align:center;font-weight:700;font-size:15px;">${weekLabel}</div>
        <button class="btn btn-secondary btn-sm" onclick="shiftWeek(1)">Nächste Woche →</button>
        <div style="display:flex;gap:8px;align-items:center;">
          <input type="date" class="form-control" id="schedule-date-input" value="${state.scheduleDate}" style="width:160px;padding:6px 10px;" onkeydown="if(event.key==='Enter')jumpToDateInput()">
          <button class="btn btn-secondary btn-sm" onclick="jumpToDateInput()">Gehe zu</button>
          <button class="btn btn-primary btn-sm" onclick="jumpToToday()">Heute</button>
        </div>
      </div>
    </div>

    <!-- Wochengitter -->
    <div class="week-grid mb-16">
      ${weekDates.map((dateStr, i) => renderDayCell(DAYS[i], dateStr, schedule, plans, dayTypes, todayStr)).join('')}
    </div>

    <!-- Legende -->
    <div class="card mb-16">
      <div class="card-title" style="margin-bottom:10px;">Legende</div>
      <div style="display:flex;gap:20px;font-size:13px;color:var(--text2);flex-wrap:wrap;">${legendItems}</div>
    </div>

    <!-- Tagestypen verwalten -->
    <div class="card">
      <div class="card-header">
        <div class="card-title">Tagestypen verwalten</div>
        <button class="btn btn-primary btn-sm" onclick="openAddDayTypeModal()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
          Neuer Typ
        </button>
      </div>
      <div id="day-types-list">${renderDayTypesList(dayTypes)}</div>
    </div>
  </div>`;

  // Swipe-Gesten für Wochennavigation
  initWeekSwipe();
}

function initWeekSwipe() {
  const grid = document.querySelector('.week-grid');
  if (!grid) return;
  let startX = 0, startY = 0;
  grid.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  grid.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 60) {
      shiftWeek(dx < 0 ? 1 : -1);
    }
  }, { passive: true });
}

function getWeekMonday(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d;
}

function dateForWeekDay(monday, dayIdx) {
  const d = new Date(monday);
  d.setDate(monday.getDate() + dayIdx);
  return localDateStr(d);
}

function shiftWeek(weeks) {
  const d = new Date(state.scheduleDate + 'T00:00:00');
  d.setDate(d.getDate() + weeks * 7);
  state.scheduleDate = localDateStr(d);
  renderSchedule();
}

function jumpToDateInput() {
  const val = document.getElementById('schedule-date-input').value;
  if (val) { state.scheduleDate = val; renderSchedule(); }
}

function jumpToDate(dateStr) {
  if (dateStr) { state.scheduleDate = dateStr; renderSchedule(); }
}

function jumpToToday() {
  state.scheduleDate = today();
  renderSchedule();
}

function renderDayCell(dayName, dateStr, schedule, plans, dayTypes, todayStr) {
  const items   = getDayItems(dateStr);
  const d       = new Date(dateStr + 'T00:00:00');
  const isToday = dateStr === todayStr;
  const hasLog  = (state.data.workoutLogs||[]).some(l => l.date === dateStr);

  // Resolve each item to special or plan
  const resolvedItems = items.map(id => {
    const sp = getSpecialDay(id);
    if (sp) return { type:'special', id, label: sp.label, color: sp.color };
    const pl = getPlan(id);
    if (pl) {
      const hasInjury = (pl.exercises||[]).some(e => { const ex = getExercise(e.exerciseId); return ex && isExerciseRisky(ex); });
      return { type:'plan', id, label: pl.name, hasInjury };
    }
    return null;
  }).filter(Boolean);

  // Border: first special color, or success if logged, or plan color
  const firstSpecial = resolvedItems.find(i => i.type === 'special');
  const hasPlans = resolvedItems.some(i => i.type === 'plan');
  let borderStyle = '';
  if (firstSpecial) borderStyle = `style="border-color:${firstSpecial.color};"`;
  else if (hasLog)  borderStyle = `style="border-color:var(--success);"`;
  else if (hasPlans) borderStyle = `style="border-color:var(--accent-b);"`;

  let classes = 'day-cell' + (isToday ? ' today' : '');

  // Tags for each item
  const selectedIds = new Set(items);
  const tagsHtml = resolvedItems.map((item, idx) => {
    if (item.type === 'special') {
      return `<span style="display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:20px;font-size:12px;font-weight:600;background:${item.color}22;color:${item.color};border:1px solid ${item.color}55;">
        ${escHtml(item.label)}
        <button onclick="removeDayItem('${dateStr}','${item.id}',${idx})" style="background:none;border:none;color:inherit;cursor:pointer;padding:0;line-height:1;font-size:14px;opacity:.7;" title="Entfernen">×</button>
      </span>`;
    } else {
      const injWarn = item.hasInjury ? ' ⚠' : '';
      return `<span style="display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:20px;font-size:12px;font-weight:600;background:rgba(79,142,247,0.12);color:var(--accent-b);border:1px solid rgba(79,142,247,0.3);">
        ${escHtml(item.label)}${injWarn}
        <button onclick="removeDayItem('${dateStr}','${item.id}',${idx})" style="background:none;border:none;color:inherit;cursor:pointer;padding:0;line-height:1;font-size:14px;opacity:.7;" title="Entfernen">×</button>
      </span>`;
    }
  }).join('');

  const logTag = hasLog ? `<span style="display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:20px;font-size:12px;font-weight:600;background:rgba(16,185,129,0.1);color:var(--success);border:1px solid rgba(16,185,129,0.3);">✓ Absolviert</span>` : '';

  const contentHtml = (tagsHtml || logTag)
    ? `<div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;">${tagsHtml}${logTag}</div>`
    : `<div class="day-empty">Ruhetag</div>`;

  const addDropdown = (dayTypes.length > 0 || plans.length > 0) ? `
    <select class="form-control" style="font-size:13px;padding:6px 10px;min-width:160px;"
      onchange="if(this.value){addDayItem('${dateStr}',this.value);this.value='';}">
      <option value="">+ Hinzufügen</option>
      ${dayTypes.length ? `<optgroup label="── Tagestypen ──">${dayTypes.map(t=>`<option value="${t.id}">${escHtml(t.label)}</option>`).join('')}</optgroup>` : ''}
      ${plans.length ? `<optgroup label="── Gym Pläne ──">${plans.map(p=>`<option value="${p.id}">${escHtml(p.name)}</option>`).join('')}</optgroup>` : ''}
    </select>` : '';

  return `<div class="${classes}" ${borderStyle}>
    <div class="day-name">${dayName.slice(0,2)}</div>
    <div class="day-date">${d.getDate()}</div>
    <div style="font-size:11px;color:var(--text3);min-width:40px;">${d.toLocaleDateString('de-DE',{month:'short'})}</div>
    <div style="flex:1;">${contentHtml}</div>
    <div class="day-actions">${addDropdown}</div>
  </div>`;
}

function getDayItems(dateStr) {
  const val = (state.data.weekSchedule || {})[dateStr];
  if (!val) return [];
  return Array.isArray(val) ? val : [val];
}

function addDayItem(dateStr, itemId) {
  if (!itemId) return;
  if (!state.data.weekSchedule) state.data.weekSchedule = {};
  const items = getDayItems(dateStr);
  items.push(itemId);
  state.data.weekSchedule[dateStr] = items;
  dbSave(state.data);
  renderSchedule();
}

function removeDayItem(dateStr, itemId, index) {
  if (!state.data.weekSchedule) return;
  const items = getDayItems(dateStr);
  const idx = (index !== undefined) ? index : items.indexOf(itemId);
  if (idx > -1) items.splice(idx, 1);
  if (items.length > 0) state.data.weekSchedule[dateStr] = items;
  else delete state.data.weekSchedule[dateStr];
  dbSave(state.data);
  renderSchedule();
}

// ============================================================
// TAGESTYPEN VERWALTUNG
// ============================================================
function renderDayTypesList(dayTypes) {
  if (!dayTypes.length) return '<div class="empty-state" style="padding:20px;"><p>Noch keine Tagestypen. Füge deinen ersten hinzu!</p></div>';
  return dayTypes.map(t => `
    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border);">
      <span style="width:16px;height:16px;border-radius:4px;background:${t.color};flex-shrink:0;display:inline-block;"></span>
      <span style="flex:1;font-weight:600;font-size:14px;">${escHtml(t.label)}</span>
      <button class="btn btn-ghost btn-sm" onclick="openEditDayTypeModal('${t.id}')">Bearbeiten</button>
      <button class="btn btn-danger btn-sm" onclick="deleteDayType('${t.id}')">Löschen</button>
    </div>
  `).join('');
}

function openAddDayTypeModal() {
  const swatches = ['#00c9a7','#a78bfa','#f59e0b','#ef4444','#4f8ef7','#ec4899','#f97316','#84cc16'];
  openModal(`
    <div class="modal-title">Neuen Tagestyp erstellen</div>
    <div class="form-group">
      <label class="form-label">Name (inkl. Emoji)</label>
      <input class="form-control" id="dt-label" placeholder="z.B. 🏃 Lauftraining">
    </div>
    <div class="form-group">
      <label class="form-label">Farbe</label>
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
        ${swatches.map(col => `<span class="color-swatch" style="width:28px;height:28px;border-radius:50%;background:${col};cursor:pointer;border:3px solid transparent;" onclick="selectDayTypeColor('${col}',this)"></span>`).join('')}
        <input type="color" id="dt-color-picker" value="#00c9a7" oninput="syncColorPicker(this.value)" style="width:36px;height:36px;border:none;background:none;cursor:pointer;padding:0;">
      </div>
      <input type="hidden" id="dt-color" value="#00c9a7">
    </div>
    <div style="margin-top:12px;padding:12px;border-radius:var(--radius-sm);border:1px solid var(--border);background:var(--bg2);">
      <span style="font-size:13px;color:var(--text2);">Vorschau: </span>
      <span id="dt-preview" class="badge" style="background:#00c9a717;color:#00c9a7;border:1px solid #00c9a744;">Neuer Typ</span>
    </div>
    <div class="flex-end mt-16">
      <button class="btn btn-ghost" onclick="closeModal()">Abbrechen</button>
      <button class="btn btn-primary" onclick="saveDayType(null)">Erstellen</button>
    </div>
  `);
  document.getElementById('dt-label').addEventListener('input', updateDayTypePreview);
}

function openEditDayTypeModal(id) {
  const t = getSpecialDay(id);
  if (!t) return;
  const swatches = ['#00c9a7','#a78bfa','#f59e0b','#ef4444','#4f8ef7','#ec4899','#f97316','#84cc16'];
  openModal(`
    <div class="modal-title">Tagestyp bearbeiten</div>
    <div class="form-group">
      <label class="form-label">Name (inkl. Emoji)</label>
      <input class="form-control" id="dt-label" value="${escHtml(t.label)}">
    </div>
    <div class="form-group">
      <label class="form-label">Farbe</label>
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
        ${swatches.map(col => `<span class="color-swatch" style="width:28px;height:28px;border-radius:50%;background:${col};cursor:pointer;border:3px solid ${col===t.color?'#fff':'transparent'};" onclick="selectDayTypeColor('${col}',this)"></span>`).join('')}
        <input type="color" id="dt-color-picker" value="${t.color}" oninput="syncColorPicker(this.value)" style="width:36px;height:36px;border:none;background:none;cursor:pointer;padding:0;">
      </div>
      <input type="hidden" id="dt-color" value="${t.color}">
    </div>
    <div style="margin-top:12px;padding:12px;border-radius:var(--radius-sm);border:1px solid var(--border);background:var(--bg2);">
      <span style="font-size:13px;color:var(--text2);">Vorschau: </span>
      <span id="dt-preview" class="badge" style="background:${t.color}17;color:${t.color};border:1px solid ${t.color}44;">${escHtml(t.label)}</span>
    </div>
    <div class="flex-end mt-16">
      <button class="btn btn-ghost" onclick="closeModal()">Abbrechen</button>
      <button class="btn btn-primary" onclick="saveDayType('${t.id}')">Speichern</button>
    </div>
  `);
  document.getElementById('dt-label').addEventListener('input', updateDayTypePreview);
}

function selectDayTypeColor(color, el) {
  document.querySelectorAll('.color-swatch').forEach(s => s.style.border = '3px solid transparent');
  el.style.border = '3px solid #fff';
  document.getElementById('dt-color').value = color;
  document.getElementById('dt-color-picker').value = color;
  updateDayTypePreview();
}

function syncColorPicker(color) {
  document.getElementById('dt-color').value = color;
  document.querySelectorAll('.color-swatch').forEach(s => s.style.border = '3px solid transparent');
  updateDayTypePreview();
}

function updateDayTypePreview() {
  const label = document.getElementById('dt-label').value || 'Vorschau';
  const color = document.getElementById('dt-color').value || '#00c9a7';
  const prev  = document.getElementById('dt-preview');
  if (!prev) return;
  prev.textContent = label;
  prev.style.background = color + '17';
  prev.style.color = color;
  prev.style.border = `1px solid ${color}44`;
}

function saveDayType(existingId) {
  const label = (document.getElementById('dt-label').value || '').trim();
  if (!label) { toast('Bitte einen Namen eingeben.', 'error'); return; }
  const color = document.getElementById('dt-color').value || '#00c9a7';
  if (!state.data.customDayTypes) state.data.customDayTypes = [];
  if (existingId) {
    const idx = state.data.customDayTypes.findIndex(t => t.id === existingId);
    if (idx >= 0) state.data.customDayTypes[idx] = { id: existingId, label, color };
  } else {
    state.data.customDayTypes.push({ id: 'd' + uuid(), label, color });
  }
  dbSave(state.data);
  closeModal();
  toast('Tagestyp gespeichert!', 'success');
  renderSchedule();
}

function deleteDayType(id) {
  const t = getSpecialDay(id);
  if (!confirm(`Tagestyp "${t ? t.label : ''}" löschen?\nAlle Tage mit diesem Typ werden auf Ruhetag zurückgesetzt.`)) return;
  state.data.customDayTypes = (state.data.customDayTypes || []).filter(x => x.id !== id);
  Object.keys(state.data.weekSchedule || {}).forEach(k => {
    const items = getDayItems(k).filter(i => i !== id);
    if (items.length > 0) state.data.weekSchedule[k] = items;
    else delete state.data.weekSchedule[k];
  });
  dbSave(state.data);
  toast('Tagestyp gelöscht.', 'success');
  renderSchedule();
}

// ============================================================
// TRAINING STARTEN
// ============================================================
function renderWorkout() {
  const el = document.getElementById('content');
  const plans         = state.data.plans || [];
  const todayPlanIds  = getDayItems(today()).filter(id => getPlan(id));

  el.innerHTML = `<div class="fade-in">
    <div class="page-header">
      <h1 class="page-title">Training starten</h1>
    </div>
    ${state.activeWorkout ? renderActiveWorkout() : renderWorkoutPicker(plans, todayPlanIds)}
  </div>`;
}

function renderWorkoutPicker(plans, todayPlanIds) {
  if (plans.length === 0) {
    return `<div class="card"><div class="empty-state"><p>Zuerst Pläne erstellen.</p><button class="btn btn-primary" onclick="navigate('plans')">Pläne erstellen</button></div></div>`;
  }
  // Pre-select: first today's plan if available, otherwise first plan
  const defaultId = todayPlanIds.length > 0 ? todayPlanIds[0] : plans[0].id;
  return `
    <div class="card" style="max-width:500px;">
      <div class="form-group">
        <label class="form-label">Plan auswählen</label>
        <select class="form-control" id="workout-plan-select">
          ${todayPlanIds.length > 0 ? `<optgroup label="── Heute geplant ──">${todayPlanIds.map(id => { const p = getPlan(id); return p ? `<option value="${p.id}" ${p.id===defaultId?'selected':''}>${escHtml(p.name)}</option>` : ''; }).join('')}</optgroup>` : ''}
          <optgroup label="── Alle Pläne ──">${plans.filter(p => !todayPlanIds.includes(p.id)).map(p => `<option value="${p.id}">${escHtml(p.name)}</option>`).join('')}</optgroup>
        </select>
      </div>
      <button class="btn btn-primary" style="width:100%;" onclick="startWorkout()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        Training beginnen
      </button>
    </div>
  `;
}

function startWorkout() {
  const planId = document.getElementById('workout-plan-select').value;
  const plan = getPlan(planId);
  if (!plan) return;

  state.activeWorkout = {
    planId: plan.id,
    planName: plan.name,
    date: today(),
    exercises: (plan.exercises||[]).map(ex => {
      const exDef = getExercise(ex.exerciseId);
      const type  = getTrackingType(exDef);
      const num   = ex.sets || (type === 'cardio' ? 1 : 3);
      let sets;
      if (type === 'cardio') {
        sets = Array.from({length: num}, () => ({ distance: ex.targetDistance||0, duration: ex.targetDuration||0, completed: false }));
      } else if (type === 'timed') {
        sets = Array.from({length: num}, () => ({ duration: ex.targetDuration||60, completed: false }));
      } else {
        const parsedReps = parseInt(ex.reps) || 10;
        sets = Array.from({length: num}, () => ({ reps: parsedReps, weight: ex.weight||0, completed: false }));
      }
      return { exerciseId: ex.exerciseId, sets };
    })
  };
  state.workoutStartTime = Date.now();
  renderWorkout();
}

function renderActiveWorkout() {
  const w = state.activeWorkout;
  const elapsed = Math.floor((Date.now() - state.workoutStartTime) / 60000);

  const rows = w.exercises.map((ex, exIdx) => {
    const exDef = getExercise(ex.exerciseId);
    if (!exDef) return '';
    const type = getTrackingType(exDef);
    const warnings = getInjuryWarnings(exDef);
    const completedSets = ex.sets.filter(s => s.completed).length;
    const unitLabel = type === 'cardio' ? 'Einheiten' : 'Sätze';

    // Header row per type
    const headerRow = type === 'cardio'
      ? `<div class="set-row"><span>Nr.</span><span>km</span><span>min</span><span>km/h</span><span></span></div>`
      : type === 'timed'
      ? `<div class="set-row"><span>Satz</span><span>Sek.</span><span></span><span></span><span></span></div>`
      : `<div class="set-row"><span>Satz</span><span>Wdh.</span><span>kg</span><span>Vol.</span><span></span></div>`;

    const setRowsHtml = ex.sets.map((set, sIdx) => {
      const check = `<div class="set-done ${set.completed?'checked':''}" onclick="toggleSet(${exIdx},${sIdx})">
        ${set.completed?`<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`:''}
      </div>`;
      if (type === 'cardio') {
        const spd = (set.duration||0) > 0 ? ((set.distance||0) / ((set.duration||0) / 60)).toFixed(1) : '–';
        return `<div class="set-row">
          <span class="set-num">${sIdx+1}</span>
          <input class="set-input" type="number" min="0" step="0.1" value="${set.distance||0}" onchange="updateSet(${exIdx},${sIdx},'distance',this.value)">
          <input class="set-input" type="number" min="0" step="0.5" value="${set.duration||0}" onchange="updateSet(${exIdx},${sIdx},'duration',this.value)">
          <span style="font-size:13px;color:var(--text2);">${spd}</span>
          ${check}
        </div>`;
      }
      if (type === 'timed') {
        return `<div class="set-row">
          <span class="set-num">${sIdx+1}</span>
          <input class="set-input" type="number" min="1" step="5" value="${set.duration||60}" onchange="updateSet(${exIdx},${sIdx},'duration',this.value)">
          <span></span><span></span>${check}
        </div>`;
      }
      return `<div class="set-row">
        <span class="set-num">${sIdx+1}</span>
        <input class="set-input" type="number" min="1" value="${set.reps||0}" onchange="updateSet(${exIdx},${sIdx},'reps',this.value)">
        <input class="set-input" type="number" min="0" step="2.5" value="${set.weight||0}" onchange="updateSet(${exIdx},${sIdx},'weight',this.value)">
        <span style="font-size:13px;color:var(--text2);">${((set.reps||0)*(set.weight||0)).toFixed(0)} kg</span>
        ${check}
      </div>`;
    }).join('');

    return `<div class="session-exercise">
      <div class="session-ex-header">
        <div>
          <div class="session-ex-name">${escHtml(exDef.name)}</div>
          ${warnings.length ? `<span class="badge badge-warn">⚠ ${warnings.join(', ')}</span>` : ''}
        </div>
        <span class="badge ${completedSets===ex.sets.length?'badge-green':'badge-gray'}">${completedSets}/${ex.sets.length} ${unitLabel}</span>
      </div>
      ${headerRow}
      ${setRowsHtml}
      <button class="btn btn-ghost btn-sm" style="margin-top:6px;" onclick="addWorkoutSet(${exIdx})">+ ${type==='cardio'?'Einheit':'Satz'} hinzufügen</button>
    </div>`;
  }).join('');

  return `<div class="workout-session">
    <div class="card" style="margin-bottom:20px;">
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <div>
          <div style="font-size:18px;font-weight:700;">${escHtml(w.planName)}</div>
          <div style="font-size:13px;color:var(--text2);">${elapsed} Min. · ${formatDate(w.date)}</div>
        </div>
        <div style="display:flex;gap:10px;">
          <button class="btn btn-success" onclick="finishWorkout()">Training beenden ✓</button>
          <button class="btn btn-ghost" onclick="cancelWorkout()">Abbrechen</button>
        </div>
      </div>
    </div>
    ${rows}
  </div>`;
}

function updateSet(exIdx, sIdx, field, val) {
  if (!state.activeWorkout) return;
  state.activeWorkout.exercises[exIdx].sets[sIdx][field] = parseFloat(val) || 0;
}

function toggleSet(exIdx, sIdx) {
  if (!state.activeWorkout) return;
  const set = state.activeWorkout.exercises[exIdx].sets[sIdx];
  set.completed = !set.completed;
  renderWorkout();
}

function addWorkoutSet(exIdx) {
  if (!state.activeWorkout) return;
  const ex = state.activeWorkout.exercises[exIdx];
  const exDef = getExercise(ex.exerciseId);
  const type  = getTrackingType(exDef);
  const last  = ex.sets[ex.sets.length - 1] || {};
  if (type === 'cardio') {
    ex.sets.push({ distance: last.distance||0, duration: last.duration||0, completed: false });
  } else if (type === 'timed') {
    ex.sets.push({ duration: last.duration||60, completed: false });
  } else {
    ex.sets.push({ reps: last.reps||10, weight: last.weight||0, completed: false });
  }
  renderWorkout();
}

function finishWorkout() {
  const w = state.activeWorkout;
  if (!w) return;
  const log = {
    id: uuid(),
    date: w.date,
    planId: w.planId,
    planName: w.planName,
    duration: Math.floor((Date.now() - state.workoutStartTime) / 60000),
    exercises: w.exercises.map(ex => {
      const exDef = getExercise(ex.exerciseId);
      return { exerciseId: ex.exerciseId, exerciseName: exDef ? exDef.name : '?', sets: ex.sets };
    })
  };
  if (!state.data.workoutLogs) state.data.workoutLogs = [];
  state.data.workoutLogs.push(log);
  dbSave(state.data);
  state.activeWorkout = null;
  state.workoutStartTime = null;
  toast('Training gespeichert! 💪', 'success');
  navigate('dashboard');
}

function cancelWorkout() {
  if (!confirm('Training abbrechen? Fortschritt geht verloren.')) return;
  state.activeWorkout = null;
  state.workoutStartTime = null;
  renderWorkout();
}

// ============================================================
// FORTSCHRITT
// ============================================================
let _progressTab = 'charts';

function renderProgress() {
  const el   = document.getElementById('content');
  const logs = state.data.workoutLogs || [];

  const exercisesWithData = {};
  logs.forEach(log => {
    (log.exercises||[]).forEach(ex => {
      if (!exercisesWithData[ex.exerciseId]) {
        exercisesWithData[ex.exerciseId] = { name: ex.exerciseName, logs: [] };
      }
      const best     = Math.max(...(ex.sets||[]).filter(s=>s.completed).map(s=>s.weight||0), 0);
      const totalVol = (ex.sets||[]).filter(s=>s.completed).reduce((a,s)=>a+(s.reps||0)*(s.weight||0),0);
      exercisesWithData[ex.exerciseId].logs.push({ date: log.date, maxWeight: best, volume: totalVol });
    });
  });

  const exOptions = Object.entries(exercisesWithData)
    .map(([id, d]) => `<option value="${id}">${escHtml(d.name)}</option>`).join('');

  el.innerHTML = `<div class="fade-in">
    <div class="page-header">
      <h1 class="page-title">Fortschritt</h1>
    </div>

    <div class="tabs">
      <div class="tab ${_progressTab==='charts'?'active':''}" onclick="switchProgressTab('charts')">Diagramme & Rekorde</div>
      <div class="tab ${_progressTab==='history'?'active':''}" onclick="switchProgressTab('history')">
        Trainingsverlauf <span class="badge badge-gray" style="margin-left:6px;">${logs.length}</span>
      </div>
    </div>

    <div id="progress-tab-content">
      ${_progressTab === 'charts' ? renderProgressCharts(logs, exercisesWithData, exOptions) : renderHistoryList(logs)}
    </div>
  </div>`;

  window._progressData = exercisesWithData;
  if (_progressTab === 'charts' && exOptions) updateProgressChart();
}

function switchProgressTab(tab) {
  _progressTab = tab;
  renderProgress();
}

function renderProgressCharts(logs, exercisesWithData, exOptions) {
  if (logs.length === 0) return `
    <div class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 20l5-8 4 4 5-7 4 5"/><path d="M3 4v16h18"/></svg>
      <p>Noch kein Training absolviert. Starte dein erstes Training!</p>
      <button class="btn btn-primary" onclick="navigate('workout')">Training starten</button>
    </div>`;

  return `
    <div class="card mb-16">
      <div class="card-header"><div class="card-title">Persönliche Rekorde</div></div>
      <div class="pr-list">
        ${Object.entries(exercisesWithData).slice(0,8).map(([id, d]) => {
          const best    = Math.max(...d.logs.map(l=>l.maxWeight), 0);
          const bestLog = d.logs.find(l=>l.maxWeight===best);
          return `<div class="pr-item">
            <div class="pr-exercise">${escHtml(d.name)}</div>
            <div class="pr-value">${best} kg</div>
            <div class="pr-date">${bestLog ? formatDate(bestLog.date) : ''}</div>
          </div>`;
        }).join('')}
      </div>
    </div>
    <div class="card mb-16">
      <div class="card-header"><div class="card-title">Verlaufsdiagramm</div></div>
      <div class="chart-controls">
        <select class="form-control" id="chart-exercise" onchange="updateProgressChart()" style="max-width:280px;">${exOptions}</select>
        <select class="form-control" id="chart-metric" onchange="updateProgressChart()" style="width:180px;">
          <option value="maxWeight">Max. Gewicht (kg)</option>
          <option value="volume">Volumen (kg·Wdh)</option>
        </select>
      </div>
      <div class="chart-container" id="progress-chart"><div class="no-data">Übung auswählen</div></div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">Trainingsfrequenz (letzte 8 Wochen)</div></div>
      <div class="chart-container">${renderFreqChart(logs)}</div>
    </div>`;
}

function renderHistoryList(logs) {
  if (logs.length === 0) return `
    <div class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
      <p>Noch keine Trainingseinheiten aufgezeichnet.</p>
      <button class="btn btn-primary" onclick="navigate('workout')">Training starten</button>
    </div>`;

  const sorted = [...logs].sort((a,b) => b.date.localeCompare(a.date));

  return `
    <div class="card">
      <div class="card-header">
        <div class="card-title">${logs.length} Einheiten gesamt</div>
        <button class="btn btn-danger btn-sm" onclick="deleteAllWorkoutLogs()">Alle löschen</button>
      </div>
      ${sorted.map(log => renderHistoryEntry(log)).join('')}
    </div>`;
}

function renderHistoryEntry(log) {
  const totalSets      = (log.exercises||[]).reduce((a,ex)=>a+(ex.sets||[]).filter(s=>s.completed).length,0);
  const totalVol       = (log.exercises||[]).reduce((a,ex)=>
    a+(ex.sets||[]).filter(s=>s.completed).reduce((b,s)=>b+(s.reps||0)*(s.weight||0),0),0);
  const exCount        = (log.exercises||[]).length;

  return `<div class="history-entry" id="hentry-${log.id}">
    <div class="history-header" onclick="toggleHistoryEntry('${log.id}')">
      <!-- Zeile 1: Datum + Buttons immer auf einer Linie -->
      <div style="display:flex;align-items:center;justify-content:space-between;width:100%;gap:8px;">
        <div style="min-width:0;">
          <div style="font-size:17px;font-weight:800;">${formatDate(log.date)}</div>
          <div style="font-size:12px;color:var(--text2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escHtml(log.planName)}</div>
        </div>
        <div style="display:flex;gap:8px;align-items:center;flex-shrink:0;">
          <button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();viewWorkoutLog('${log.id}')">Details</button>
          <button class="btn btn-danger btn-sm" onclick="event.stopPropagation();deleteWorkoutLog('${log.id}')">Löschen</button>
          <svg class="history-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;transition:transform 0.2s;flex-shrink:0;"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </div>
      <!-- Zeile 2: Badges immer unter dem Datum -->
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px;">
        <span class="badge badge-gray">${exCount} Übungen</span>
        <span class="badge badge-gray">${totalSets} Sätze</span>
        ${totalVol > 0 ? `<span class="badge badge-blue">${(totalVol/1000).toFixed(1)} t Volumen</span>` : ''}
        ${log.duration ? `<span class="badge badge-gray">⏱ ${log.duration} Min.</span>` : ''}
      </div>
    </div>
    <div class="history-body" id="hbody-${log.id}" style="display:none;">
      ${(log.exercises||[]).map(ex => {
        const completedSets = (ex.sets||[]).filter(s=>s.completed);
        if (!completedSets.length) return '';
        return `<div style="margin-bottom:12px;">
          <div style="font-weight:600;font-size:13px;margin-bottom:6px;">${escHtml(ex.exerciseName)}</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;">
            ${completedSets.map((s,i)=>
              `<span class="badge badge-gray">Satz ${i+1}: ${s.reps} × ${s.weight} kg</span>`
            ).join('')}
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

function toggleHistoryEntry(id) {
  const body    = document.getElementById(`hbody-${id}`);
  const entry   = document.getElementById(`hentry-${id}`);
  const chevron = entry && entry.querySelector('.history-chevron');
  if (!body) return;
  const open = body.style.display === 'none';
  body.style.display    = open ? 'block' : 'none';
  if (chevron) chevron.style.transform = open ? 'rotate(180deg)' : '';
}

function viewWorkoutLog(id) {
  const log = (state.data.workoutLogs||[]).find(l=>l.id===id);
  if (!log) return;
  const totalVol = (log.exercises||[]).reduce((a,ex)=>
    a+(ex.sets||[]).filter(s=>s.completed).reduce((b,s)=>b+(s.reps||0)*(s.weight||0),0),0);

  openModal(`
    <div class="modal-title">${escHtml(log.planName)} — ${formatDate(log.date)}</div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:20px;">
      ${log.duration ? `<span class="badge badge-gray">⏱ ${log.duration} Min.</span>` : ''}
      <span class="badge badge-gray">${(log.exercises||[]).length} Übungen</span>
      ${totalVol>0 ? `<span class="badge badge-blue">${(totalVol/1000).toFixed(2)} t Gesamtvolumen</span>` : ''}
    </div>
    ${(log.exercises||[]).map(ex => {
      const done = (ex.sets||[]).filter(s=>s.completed);
      return `<div class="session-exercise" style="margin-bottom:12px;">
        <div class="session-ex-header">
          <div class="session-ex-name">${escHtml(ex.exerciseName)}</div>
          <span class="badge badge-green">${done.length} Sätze</span>
        </div>
        ${(()=>{
          const st = detectSetType(ex.sets);
          if (st === 'cardio') return `
            <div class="set-row"><span>Nr.</span><span>Distanz</span><span>Zeit</span><span>km/h</span><span></span></div>
            ${done.map((s,i)=>{
              const spd = (s.duration||0)>0?((s.distance||0)/((s.duration||0)/60)).toFixed(1):'–';
              return `<div class="set-row"><span class="set-num">${i+1}</span><span>${s.distance||0} km</span><span>${s.duration||0} min</span><span style="color:var(--text2);">${spd}</span><span></span></div>`;
            }).join('')}`;
          if (st === 'timed') return `
            <div class="set-row"><span>Satz</span><span>Dauer</span><span></span><span></span><span></span></div>
            ${done.map((s,i)=>`<div class="set-row"><span class="set-num">${i+1}</span><span>${s.duration||0} s</span><span></span><span></span><span></span></div>`).join('')}`;
          return `
            <div class="set-row"><span>Satz</span><span>Wdh.</span><span>Gewicht</span><span>Volumen</span><span></span></div>
            ${done.map((s,i)=>`<div class="set-row">
              <span class="set-num">${i+1}</span>
              <span>${s.reps}</span>
              <span>${s.weight} kg</span>
              <span style="color:var(--text2);">${((s.reps||0)*(s.weight||0)).toFixed(0)} kg</span>
              <span></span>
            </div>`).join('')}`;
        })()}
      </div>`;
    }).join('')}
    <div class="flex-end mt-16">
      <button class="btn btn-danger" onclick="closeModal();deleteWorkoutLog('${log.id}')">Einheit löschen</button>
      <button class="btn btn-ghost" onclick="closeModal()">Schließen</button>
    </div>
  `);
}

function deleteWorkoutLog(id) {
  const log = (state.data.workoutLogs||[]).find(l=>l.id===id);
  if (!confirm(`Einheit vom ${log ? formatDate(log.date) : ''} löschen?`)) return;
  state.data.workoutLogs = (state.data.workoutLogs||[]).filter(l=>l.id!==id);
  dbSave(state.data);
  toast('Einheit gelöscht.', 'success');
  renderProgress();
}

function deleteAllWorkoutLogs() {
  if (!confirm(`Wirklich ALLE ${(state.data.workoutLogs||[]).length} Trainingseinheiten löschen? Das kann nicht rückgängig gemacht werden.`)) return;
  state.data.workoutLogs = [];
  dbSave(state.data);
  toast('Verlauf geleert.', 'success');
  renderProgress();
}

function updateProgressChart() {
  const exId = document.getElementById('chart-exercise').value;
  const metric = document.getElementById('chart-metric').value;
  const d = window._progressData;
  if (!d || !d[exId]) return;

  const data = d[exId].logs
    .sort((a,b) => a.date.localeCompare(b.date))
    .map(l => ({
      y: l[metric] || 0,
      label: l.date.slice(5) // MM-DD
    }));

  document.getElementById('progress-chart').innerHTML = svgLineChart(data, '#4f8ef7');
}

function renderFreqChart(logs) {
  const weeks = {};
  logs.forEach(log => {
    const d = new Date(log.date);
    const yr = d.getFullYear();
    const wk = Math.ceil((((d - new Date(yr,0,1))/86400000)+new Date(yr,0,1).getDay()+1)/7);
    const key = `${yr}-W${String(wk).padStart(2,'0')}`;
    weeks[key] = (weeks[key]||0) + 1;
  });
  const sorted = Object.entries(weeks).sort((a,b)=>a[0].localeCompare(b[0])).slice(-8);
  if (sorted.length < 2) return '<div class="no-data">Noch zu wenige Daten</div>';
  const data = sorted.map(([k,v]) => ({ y: v, label: k.slice(5) }));
  return svgLineChart(data, '#00c9a7');
}

// ============================================================
// ÜBUNGSBIBLIOTHEK
// ============================================================
function renderLibrary() {
  const el = document.getElementById('content');
  el.innerHTML = `<div class="fade-in">
    <div class="page-header">
      <h1 class="page-title">Übungsbibliothek <span>${allExercises().length} Übungen</span></h1>
      <button class="btn btn-primary" onclick="openAddCustomExercise()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
        Eigene Übung
      </button>
    </div>
    <div class="lib-filters">
      <input class="form-control lib-search" id="lib-search" placeholder="Übung suchen…" oninput="filterLibrary()">
      <select class="form-control" id="lib-cat" onchange="filterLibrary()" style="width:180px;">
        <option value="">Alle Kategorien</option>
        ${CATEGORIES.map(c=>`<option>${c}</option>`).join('')}
      </select>
      <select class="form-control" id="lib-inj" onchange="filterLibrary()" style="width:200px;">
        <option value="">Alle anzeigen</option>
        <option value="safe">Nur sichere Übungen</option>
        <option value="risky">Nur Risikoübungen</option>
      </select>
    </div>
    <div class="grid-auto" id="lib-grid">
      ${allExercises().map(renderLibExCard).join('')}
    </div>
  </div>`;
}

function renderLibExCard(ex) {
  const risky    = isExerciseRisky(ex);
  const warnings = getInjuryWarnings(ex);
  const isCustom = (state.data.customExercises||[]).some(c=>c.id===ex.id);
  return `<div class="exercise-card ${risky?'injured-warn':''}" data-cat="${ex.cat}" data-risky="${risky}" data-name="${ex.name.toLowerCase()}" onclick="openExerciseDetail('${ex.id}')" style="cursor:pointer;">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;">
      <div class="exercise-card-name">${escHtml(ex.name)}</div>
      ${isCustom ? `<button class="btn btn-ghost btn-icon btn-sm" onclick="event.stopPropagation();deleteCustomExercise('${ex.id}')" style="color:var(--danger);" title="Löschen">✕</button>` : ''}
    </div>
    <div class="exercise-card-muscles">${ex.muscles.join(' · ')}</div>
    ${ex.desc ? `<div class="exercise-desc">${escHtml(ex.desc)}</div>` : ''}
    <div class="exercise-card-tags" style="margin-top:8px;">
      <span class="badge badge-blue">${ex.cat}</span>
      <span class="badge badge-gray">${ex.eq}</span>
      ${risky ? `<span class="badge badge-warn">⚠ ${warnings.join(', ')}</span>` : '<span class="badge badge-green">✓ Sicher</span>'}
    </div>
  </div>`;
}

function openExerciseDetail(exId) {
  const ex = getExercise(exId);
  if (!ex) return;
  const risky    = isExerciseRisky(ex);
  const warnings = getInjuryWarnings(ex);
  openModal(`
    <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:20px;">
      <div style="flex:1;">
        <div class="modal-title" style="margin-bottom:6px;">${escHtml(ex.name)}</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <span class="badge badge-blue">${ex.cat}</span>
          <span class="badge badge-gray">${ex.eq}</span>
          ${risky ? `<span class="badge badge-warn">⚠ ${warnings.join(', ')}</span>` : '<span class="badge badge-green">✓ Keine Risikogelenke</span>'}
        </div>
      </div>
    </div>
    ${ex.desc ? `
      <div class="card" style="margin-bottom:16px;border-left:3px solid var(--accent-b);">
        <div class="card-title" style="margin-bottom:8px;">Ausführung</div>
        <p style="font-size:14px;line-height:1.7;color:var(--text);">${escHtml(ex.desc)}</p>
      </div>
    ` : ''}
    <div class="form-row" style="margin-bottom:16px;">
      <div>
        <div class="card-title" style="margin-bottom:8px;">Muskeln</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">${ex.muscles.map(m=>`<span class="badge badge-gray">${m}</span>`).join('')}</div>
      </div>
      ${ex.riskParts && ex.riskParts.length ? `
        <div>
          <div class="card-title" style="margin-bottom:8px;">Risikogelenke</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">${ex.riskParts.map(p=>`<span class="badge badge-warn">${p}</span>`).join('')}</div>
        </div>
      ` : ''}
    </div>
    <div class="flex-end">
      <button class="btn btn-ghost" onclick="closeModal()">Schließen</button>
    </div>
  `);
}

function filterLibrary() {
  const q = (document.getElementById('lib-search').value||'').toLowerCase();
  const cat = document.getElementById('lib-cat').value;
  const injFilter = document.getElementById('lib-inj').value;
  const filtered = allExercises().filter(ex => {
    const matchQ = !q || ex.name.toLowerCase().includes(q) || ex.muscles.join(' ').toLowerCase().includes(q);
    const matchCat = !cat || ex.cat === cat;
    const risky = isExerciseRisky(ex);
    const matchInj = !injFilter || (injFilter==='safe' && !risky) || (injFilter==='risky' && risky);
    return matchQ && matchCat && matchInj;
  });
  document.getElementById('lib-grid').innerHTML = filtered.map(renderLibExCard).join('') ||
    '<div class="no-data" style="grid-column:1/-1;">Keine Übungen gefunden</div>';
}

function openAddCustomExercise() {
  const modal = `
    <div class="modal-title">Eigene Übung erstellen</div>
    <div class="form-group">
      <label class="form-label">Name *</label>
      <input class="form-control" id="cex-name" placeholder="Übungsname">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Kategorie</label>
        <select class="form-control" id="cex-cat">
          ${CATEGORIES.map(c=>`<option>${c}</option>`).join('')}
          <option>Sonstige</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Equipment</label>
        <input class="form-control" id="cex-eq" placeholder="z.B. Langhantel, Kabel…">
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Muskeln (kommagetrennt)</label>
      <input class="form-control" id="cex-muscles" placeholder="z.B. Bizeps, Unterarm">
    </div>
    <div class="form-group">
      <label class="form-label">Messmethode</label>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:4px;">
        <label class="checkbox-item" style="cursor:pointer;">
          <input type="radio" name="cex-tracking" value="weight" checked>
          <span><strong>Sätze · Wdh. · Gewicht</strong> — Krafttraining, Geräte</span>
        </label>
        <label class="checkbox-item" style="cursor:pointer;">
          <input type="radio" name="cex-tracking" value="cardio">
          <span><strong>Distanz (km) · Zeit (min)</strong> — Laufen, Radfahren, Schwimmen</span>
        </label>
        <label class="checkbox-item" style="cursor:pointer;">
          <input type="radio" name="cex-tracking" value="timed">
          <span><strong>Sätze · Dauer (Sek.)</strong> — Plank, isometrische Übungen</span>
        </label>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Kurzbeschreibung / Ausführung</label>
      <textarea class="form-control" id="cex-desc" rows="3" placeholder="Erkläre kurz wie die Übung ausgeführt wird…"></textarea>
    </div>
    <div class="form-group">
      <label class="form-label">Risikobereich Körperteile</label>
      <div class="checkbox-grid">
        ${BODY_PARTS.map(bp => `
          <label class="checkbox-item">
            <input type="checkbox" value="${bp}" id="cex-bp-${bp}"> ${bp}
          </label>
        `).join('')}
      </div>
    </div>
    <div class="flex-end mt-16">
      <button class="btn btn-ghost" onclick="closeModal()">Abbrechen</button>
      <button class="btn btn-primary" onclick="saveCustomExercise()">Speichern</button>
    </div>
  `;
  openModal(modal);
}

function saveCustomExercise() {
  const name = document.getElementById('cex-name').value.trim();
  if (!name) { toast('Bitte einen Namen eingeben.','error'); return; }
  const riskParts = BODY_PARTS.filter(bp => document.getElementById(`cex-bp-${bp}`).checked);
  const trackingType = (document.querySelector('input[name="cex-tracking"]:checked') || {}).value || 'weight';
  const ex = {
    id: 'c' + uuid(),
    name,
    cat: document.getElementById('cex-cat').value,
    eq: document.getElementById('cex-eq').value.trim() || 'Sonstige',
    muscles: document.getElementById('cex-muscles').value.split(',').map(s=>s.trim()).filter(Boolean),
    desc: document.getElementById('cex-desc').value.trim(),
    trackingType,
    riskParts
  };
  if (!state.data.customExercises) state.data.customExercises = [];
  state.data.customExercises.push(ex);
  dbSave(state.data);
  closeModal();
  toast(`Übung "${name}" gespeichert!`, 'success');
  renderLibrary();
}

function deleteCustomExercise(id) {
  const ex = getExercise(id);
  if (!confirm(`Übung "${ex ? ex.name : ''}" löschen?`)) return;
  state.data.customExercises = (state.data.customExercises||[]).filter(e=>e.id!==id);
  dbSave(state.data);
  toast('Übung gelöscht.','success');
  renderLibrary();
}

// ============================================================
// VERLETZUNGEN
// ============================================================
function renderInjuries() {
  const el = document.getElementById('content');
  const injuries = state.data.injuries || [];
  const active = injuries.filter(i=>i.active);
  const healed = injuries.filter(i=>!i.active);

  el.innerHTML = `<div class="fade-in">
    <div class="page-header">
      <h1 class="page-title">Verletzungen & Einschränkungen ${active.length ? `<span style="color:var(--warn)">${active.length} aktiv</span>` : ''}</h1>
      <button class="btn btn-primary" onclick="openInjuryEditor(null)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
        Verletzung eintragen
      </button>
    </div>
    ${injuries.length === 0 ? `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        <p>Keine Verletzungen eingetragen. Bleib verletzungsfrei! 💪</p>
      </div>
    ` : ''}
    ${active.length ? `
      <h3 style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--warn);margin-bottom:12px;">Aktive Verletzungen</h3>
      ${active.map(inj => renderInjuryCard(inj)).join('')}
    ` : ''}
    ${healed.length ? `
      <h3 style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--text3);margin:20px 0 12px;">Geheilte Verletzungen</h3>
      ${healed.map(inj => renderInjuryCard(inj)).join('')}
    ` : ''}
  </div>`;
}

function renderInjuryCard(inj) {
  const sevClass = inj.severity === 'schwer' ? 'severe' : inj.severity === 'mittel' ? '' : '';
  const sevColor = { leicht: 'badge-green', mittel: 'badge-warn', schwer: 'badge-red' };
  const riskyExercises = allExercises().filter(ex => ex.riskParts && ex.riskParts.includes(inj.bodyPart));

  return `<div class="injury-card ${inj.active?sevClass:'healed'}">
    <div class="injury-header">
      <div>
        <div class="injury-part">${escHtml(inj.bodyPart)} ${inj.active ? '<span class="badge badge-warn">Aktiv</span>' : '<span class="badge badge-green">Geheilt</span>'}</div>
        <div class="injury-desc">${escHtml(inj.description)}</div>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn btn-ghost btn-sm" onclick="openInjuryEditor('${inj.id}')">Bearbeiten</button>
        ${inj.active ? `<button class="btn btn-success btn-sm" onclick="healInjury('${inj.id}')">✓ Geheilt</button>` : ''}
        <button class="btn btn-danger btn-sm" onclick="deleteInjury('${inj.id}')">✕</button>
      </div>
    </div>
    <div class="injury-meta">
      <span class="badge ${sevColor[inj.severity]||'badge-gray'}">${inj.severity}</span>
      <span>Seit: ${formatDate(inj.startDate)}</span>
      ${inj.notes ? `<span>📝 ${escHtml(inj.notes)}</span>` : ''}
    </div>
    ${riskyExercises.length ? `
      <div style="margin-top:12px;">
        <div style="font-size:11px;font-weight:700;color:var(--warn);margin-bottom:6px;text-transform:uppercase;letter-spacing:0.5px;">Betroffene Übungen (${riskyExercises.length})</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          ${riskyExercises.slice(0,10).map(ex=>`<span class="badge badge-warn">${escHtml(ex.name)}</span>`).join('')}
          ${riskyExercises.length>10?`<span class="badge badge-gray">+${riskyExercises.length-10} mehr</span>`:''}
        </div>
      </div>
    ` : ''}
  </div>`;
}

function openInjuryEditor(injId) {
  const inj = injId ? (state.data.injuries||[]).find(i=>i.id===injId) : null;
  const d = inj || { id: uuid(), bodyPart: '', description: '', severity: 'leicht', startDate: today(), active: true, notes: '' };

  const modal = `
    <div class="modal-title">${inj ? 'Verletzung bearbeiten' : 'Verletzung eintragen'}</div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Körperteil / Bereich *</label>
        <select class="form-control" id="inj-part">
          ${BODY_PARTS.map(bp=>`<option value="${bp}" ${d.bodyPart===bp?'selected':''}>${bp}</option>`).join('')}
          <option value="Sonstiges" ${d.bodyPart==='Sonstiges'?'selected':''}>Sonstiges</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Schweregrad</label>
        <select class="form-control" id="inj-sev">
          <option value="leicht" ${d.severity==='leicht'?'selected':''}>Leicht</option>
          <option value="mittel" ${d.severity==='mittel'?'selected':''}>Mittel</option>
          <option value="schwer" ${d.severity==='schwer'?'selected':''}>Schwer</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Beschreibung *</label>
      <input class="form-control" id="inj-desc" value="${escHtml(d.description)}" placeholder="z.B. Zerrung der Rotatorenmanschette…">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Seit wann</label>
        <input class="form-control" id="inj-date" type="date" value="${d.startDate}">
      </div>
      <div class="form-group">
        <label class="form-label">Status</label>
        <select class="form-control" id="inj-active">
          <option value="true" ${d.active?'selected':''}>Aktiv</option>
          <option value="false" ${!d.active?'selected':''}>Geheilt</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Notizen</label>
      <textarea class="form-control" id="inj-notes" rows="2" placeholder="Arztempfehlung, Behandlung…">${escHtml(d.notes||'')}</textarea>
    </div>
    <div class="flex-end mt-16">
      <button class="btn btn-ghost" onclick="closeModal()">Abbrechen</button>
      <button class="btn btn-primary" onclick="saveInjury('${d.id}')">Speichern</button>
    </div>
  `;
  openModal(modal);
}

function saveInjury(injId) {
  const part = document.getElementById('inj-part').value;
  const desc = document.getElementById('inj-desc').value.trim();
  if (!desc) { toast('Bitte eine Beschreibung eingeben.','error'); return; }
  const inj = {
    id: injId,
    bodyPart: part,
    description: desc,
    severity: document.getElementById('inj-sev').value,
    startDate: document.getElementById('inj-date').value,
    active: document.getElementById('inj-active').value === 'true',
    notes: document.getElementById('inj-notes').value.trim()
  };
  if (!state.data.injuries) state.data.injuries = [];
  const idx = state.data.injuries.findIndex(i=>i.id===injId);
  if (idx>=0) state.data.injuries[idx] = inj;
  else state.data.injuries.push(inj);
  dbSave(state.data);
  closeModal();
  toast('Verletzung gespeichert!','success');
  renderInjuries();
  updateInjuryBadge();
}

function healInjury(injId) {
  const inj = (state.data.injuries||[]).find(i=>i.id===injId);
  if (!inj) return;
  inj.active = false;
  dbSave(state.data);
  toast('Verletzung als geheilt markiert! 🎉','success');
  renderInjuries();
  updateInjuryBadge();
}

function deleteInjury(injId) {
  if (!confirm('Verletzung wirklich löschen?')) return;
  state.data.injuries = (state.data.injuries||[]).filter(i=>i.id!==injId);
  dbSave(state.data);
  toast('Verletzung gelöscht.','success');
  renderInjuries();
  updateInjuryBadge();
}

function updateInjuryBadge() {
  const badge = document.getElementById('injury-badge');
  if (!badge) return;
  const active = getActiveInjuries();
  badge.style.display = active.length ? 'flex' : 'none';
}

// ============================================================
// MODAL
// ============================================================
function openModal(content, extraClass='') {
  const overlay = document.getElementById('modal-overlay');
  const modal = document.getElementById('modal');
  document.getElementById('modal-content').innerHTML = content;
  overlay.className = `modal-overlay open`;
  modal.className = `modal ${extraClass}`;
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modal-overlay')) return;
  document.getElementById('modal-overlay').classList.remove('open');
}

// ============================================================
// HELPERS
// ============================================================
function escHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ============================================================
// AUTH
// ============================================================
const AUTH_SECRET = 'TP_static_2024_xK9mQ!';

function normalizeUsername(name) {
  return name.toLowerCase()
    .replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss')
    .replace(/\s+/g,'_')
    .replace(/[^a-z0-9_-]/g,'');
}

function showAuthTab() {} // Nicht mehr verwendet

async function authSubmit() {
  const username = (document.getElementById('auth-username').value || '').trim();
  const errDiv   = document.getElementById('auth-error');
  const btn      = document.getElementById('auth-submit-btn');
  errDiv.textContent = '';
  if (!username) { errDiv.textContent = 'Bitte einen Nutzernamen eingeben.'; return; }
  const normalized = normalizeUsername(username);
  if (!normalized) { errDiv.textContent = 'Bitte einen gültigen Namen eingeben.'; return; }
  const email = `${normalized}@trainingplaner.app`;
  btn.disabled = true;
  try {
    // Versuche Anmeldung mit bestehendem Account
    await auth.signInWithEmailAndPassword(email, AUTH_SECRET);
  } catch(e) {
    const newAccountErrors = ['auth/user-not-found','auth/invalid-credential','auth/wrong-password'];
    if (newAccountErrors.includes(e.code)) {
      // Neuer Nutzer – Account automatisch erstellen
      try {
        const cred = await auth.createUserWithEmailAndPassword(email, AUTH_SECRET);
        await cred.user.updateProfile({ displayName: username });
      } catch(e2) {
        errDiv.textContent = e2.code === 'auth/email-already-in-use'
          ? 'Dieser Name ist bereits vergeben.'
          : 'Fehler beim Erstellen des Kontos. Versuche es erneut.';
        btn.disabled = false;
      }
    } else if (e.code === 'auth/too-many-requests') {
      errDiv.textContent = 'Zu viele Versuche. Bitte warte kurz.';
      btn.disabled = false;
    } else {
      errDiv.textContent = 'Anmeldung fehlgeschlagen. Versuche es erneut.';
      btn.disabled = false;
    }
  }
}

function authLogout() {
  if (_syncUnsubscribe) { _syncUnsubscribe(); _syncUnsubscribe = null; }
  auth.signOut();
}

// ============================================================
// INIT
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      state.currentUser = user;
      document.getElementById('auth-screen').style.display  = 'none';
      document.getElementById('loading-screen').style.display = 'flex';
      document.getElementById('app-layout').style.display   = 'none';
      await loadUserData(user.uid);
      setupRealtimeSync(user.uid);
      document.getElementById('loading-screen').style.display = 'none';
      document.getElementById('app-layout').style.display   = 'flex';
      document.getElementById('sidebar-user-email').textContent =
        user.displayName || user.email.split('@')[0].replace(/_/g, ' ');
      navigate('dashboard');
      updateInjuryBadge();
    } else {
      if (_syncUnsubscribe) { _syncUnsubscribe(); _syncUnsubscribe = null; }
      state.currentUser = null;
      state.data = getDefaultData();
      document.getElementById('loading-screen').style.display = 'none';
      document.getElementById('app-layout').style.display    = 'none';
      document.getElementById('auth-screen').style.display   = 'flex';
    }
  });
});
