export type PhaseId =
  | "fase-0-pre"
  | "fase-1-prima-visita"
  | "fase-2-rio1"
  | "fase-3-rio2"
  | "fase-4-preparazione"
  | "fase-5-prestazione"
  | "fase-6-post"
  | "fase-7-followup";

export type PhaseState = "locked" | "upcoming" | "today" | "completed";

export type Content = {
  id: string;
  type: "video" | "article" | "infographic";
  title: string;
  excerpt: string;
  readingTime?: number;
};

export type ChecklistItem = {
  id: string;
  label: string;
  completed: boolean;
};

export type Phase = {
  id: PhaseId;
  short: string;
  label: string;
  subtitle: string;
  iconKey: string;
  state: PhaseState;
  date?: string;
  time?: string;
  operator?: string;
  location?: string;
  hero?: string;
  contents: Content[];
  checklist: ChecklistItem[];
  warning?: string;
  kidLabel?: string;
};

export type FamilyMember = {
  id: string;
  name: string;
  age: number;
  relation: string;
  status: string;
  currentPhase?: PhaseId;
  ownsPhone: boolean;
  useKidMode: boolean;
  avatarTone: "teal" | "coral" | "purple" | "green";
};

export const patient = {
  firstName: "Raffaello",
  lastName: "Bianchi",
  centerName: "Tiziano Odontoiatria",
  centerSubtitle: "Centro odontoiatrico conservativo",
  currentPhase: "fase-2-rio1" as PhaseId,
};

export const phases: Phase[] = [
  {
    id: "fase-0-pre",
    short: "Pre-visita",
    label: "Pre-prima visita",
    subtitle: "Preparati alla visita gratuita",
    iconKey: "welcome",
    state: "completed",
    date: "15 mag 2026",
    hero: "Prima di entrare in studio, il dottore ti spiega in due minuti come ci prendiamo cura di te.",
    contents: [
      {
        id: "c01",
        type: "video",
        title: "Il dottore ti spiega cosa succederà",
        excerpt: "Il Dott. Tiziano in 90 secondi: cosa aspettarti dalla prima visita.",
        readingTime: 2,
      },
      {
        id: "c02",
        type: "article",
        title: "Perché facciamo un full endorale",
        excerpt: "Una radiografia per ogni singolo dente, invece della panoramica. Vediamo problemi che gli altri non vedono.",
        readingTime: 3,
      },
      {
        id: "c03",
        type: "article",
        title: "Cos'è il campo pulito",
        excerpt: "Perché prima di otturare, ricostruire o trattare qualsiasi dente, la bocca deve essere in condizioni ottimali.",
        readingTime: 4,
      },
    ],
    checklist: [
      { id: "ck01", label: "Porta le radiografie precedenti, se ne hai", completed: true },
      { id: "ck02", label: "Segnala eventuali allergie note", completed: true },
      { id: "ck03", label: "Hai dubbi? Scrivili adesso — il dottore ha tempo per rispondere a tutto", completed: true },
    ],
  },
  {
    id: "fase-1-prima-visita",
    label: "Prima visita + diagnosi",
    short: "Prima visita",
    subtitle: "Diagnosi e piano terapeutico",
    iconKey: "mirror",
    state: "completed",
    date: "20 mag 2026",
    time: "09:30",
    operator: "Dott. L. Tiziano",
    location: "Studio 1",
    hero: "Diagnosi fatta. Il Dott. Tiziano ha visto i tuoi denti uno per uno — adesso sai esattamente cosa c'è, in che ordine lo affrontiamo e perché.",
    contents: [
      {
        id: "c11",
        type: "infographic",
        title: "Il tuo full endorale",
        excerpt: "Cosa ha rivelato l'indagine radiografica dente per dente.",
        readingTime: 3,
      },
      {
        id: "c12",
        type: "article",
        title: "Come leggiamo il tuo piano terapeutico",
        excerpt: "Le priorità del piano spiegate una per una, dal numero 1 al numero 6.",
        readingTime: 5,
      },
    ],
    checklist: [
      { id: "ck11", label: "Visita completata", completed: true },
      { id: "ck12", label: "Diagnosi ricevuta", completed: true },
      { id: "ck13", label: "Piano terapeutico confermato", completed: true },
    ],
  },
  {
    id: "fase-2-rio1",
    short: "RIO 1",
    label: "RIO 1 — Campo pulito",
    subtitle: "Pulizia profonda · primo livello",
    iconKey: "curette",
    state: "today",
    date: "27 mag 2026",
    time: "10:30",
    operator: "Dott.ssa S. Ferrari · Igienista",
    location: "Studio 3",
    hero: "Oggi inizia il tuo campo pulito. Non è la pulizia normale: è la base su cui costruiremo ogni cura successiva.",
    contents: [
      {
        id: "c21",
        type: "video",
        title: "Cos'è RIO 1, in un minuto",
        excerpt: "Il Dott. Tiziano spiega perché RIO 1 viene prima di tutto il resto.",
        readingTime: 1,
      },
      {
        id: "c22",
        type: "article",
        title: "La levigatura radicolare",
        excerpt: "Non è la pulizia che fai una volta l'anno. È la preparazione del terreno per ogni trattamento di qualità.",
        readingTime: 4,
      },
      {
        id: "c23",
        type: "article",
        title: "Cosa sentirai durante e dopo",
        excerpt: "Sensibilità nelle 24-48h è normale. Ecco cosa fare e quando preoccuparsi.",
        readingTime: 3,
      },
    ],
    checklist: [
      { id: "ck21", label: "Mangia normalmente prima della seduta", completed: false },
      { id: "ck22", label: "Porta la tessera sanitaria", completed: true },
      { id: "ck23", label: "Segnala se prendi anticoagulanti", completed: false },
    ],
  },
  {
    id: "fase-3-rio2",
    short: "RIO 2",
    label: "RIO 2 — Campo pulito",
    subtitle: "Pulizia profonda · secondo livello",
    iconKey: "curette-deep",
    state: "upcoming",
    date: "10 giu 2026",
    time: "10:30",
    operator: "Dott.ssa S. Ferrari · Igienista",
    location: "Studio 3",
    hero: "Il secondo livello completa il campo pulito. Insieme a RIO 1 forma la base su cui costruiamo tutto il resto.",
    contents: [
      {
        id: "c31",
        type: "article",
        title: "Perché RIO 2 dopo RIO 1",
        excerpt: "Il secondo livello raggiunge le zone dove RIO 1 ha mappato il problema. Non è una ripetizione.",
        readingTime: 3,
      },
    ],
    checklist: [
      { id: "ck31", label: "Aggiungi al calendario", completed: false },
      { id: "ck32", label: "Conferma 24h prima", completed: false },
    ],
  },
  {
    id: "fase-4-preparazione",
    short: "Preparazione",
    label: "Preparazione alla prestazione",
    subtitle: "Otturazione composito · Dente 16",
    iconKey: "tooth-check",
    state: "locked",
    hero: "Una volta completato il campo pulito, partiamo con la prima prestazione del tuo piano: otturazione su dente 16.",
    contents: [
      {
        id: "c41",
        type: "video",
        title: "Come si esegue la tua otturazione",
        excerpt: "Anestesia locale, rimozione tessuto danneggiato, composito, lucidatura. 4 step, 45-60 minuti.",
        readingTime: 2,
      },
      {
        id: "c42",
        type: "article",
        title: "Sentirai dolore? La risposta onesta",
        excerpt: "Cosa è normale sentire, cosa non lo è, e come gestire la sensibilità post-prestazione.",
        readingTime: 4,
      },
    ],
    checklist: [
      { id: "ck41", label: "Dormi bene la sera prima", completed: false },
      { id: "ck42", label: "Fai colazione normale", completed: false },
      { id: "ck43", label: "Evita caffeina eccessiva", completed: false },
    ],
  },
  {
    id: "fase-5-prestazione",
    short: "Prestazione",
    label: "Giorno della prestazione",
    subtitle: "Otturazione composito · Dente 16",
    iconKey: "chair",
    state: "locked",
    hero: "È il giorno. Il campo pulito che abbiamo preparato con RIO 1 e RIO 2 fa sì che il lavoro di oggi abbia i risultati migliori possibili.",
    contents: [
      {
        id: "c51",
        type: "article",
        title: "Cosa succederà oggi",
        excerpt: "1. Anestesia locale · 2. Rimozione tessuto danneggiato · 3. Otturazione composito · 4. Lucidatura. Durata: 45-60 min.",
        readingTime: 2,
      },
    ],
    checklist: [
      { id: "ck51", label: "Campo pulito: ok (RIO completato)", completed: false },
      { id: "ck52", label: "Anamnesi aggiornata", completed: false },
      { id: "ck53", label: "Non mangiare nelle 2 ore precedenti", completed: false },
    ],
  },
  {
    id: "fase-6-post",
    short: "Post-op",
    label: "Post-operatorio",
    subtitle: "Cura della zona trattata",
    iconKey: "bandage",
    state: "locked",
    hero: "Fatto. Nelle prossime 24 ore il dente si assesta — è normale. Ecco esattamente cosa fare e cosa no.",
    contents: [
      {
        id: "c61",
        type: "article",
        title: "Cosa fare nelle prossime 24 ore",
        excerpt: "Non mangiare per 2h · Evita cibi caldi/freddi · Spazzola delicatamente · Se prescritto, prendi il farmaco indicato.",
        readingTime: 2,
      },
      {
        id: "c62",
        type: "article",
        title: "Cosa è normale, cosa non lo è",
        excerpt: "Sensibilità al tatto: normale. Dolore acuto, gonfiore crescente, febbre: contattaci subito.",
        readingTime: 3,
      },
    ],
    checklist: [],
    warning: "Per emergenze post-prestazione chiama il numero del centro: 02 1234 5678",
  },
  {
    id: "fase-7-followup",
    short: "Follow-up",
    label: "Follow-up & guarigione",
    subtitle: "Mantenimento e piano igiene",
    iconKey: "calendar-tooth",
    state: "locked",
    hero: "La cura non finisce qui. Il tuo piano di mantenimento è già scritto: igiene ogni 6 mesi, controllo radiografico ogni 2 anni.",
    contents: [
      {
        id: "c71",
        type: "article",
        title: "Il tuo piano igiene annuale",
        excerpt: "Ablazione tartaro ogni 6 mesi. Levigatura radicolare 1 volta l'anno. Controllo radiografico ogni 2 anni.",
        readingTime: 3,
      },
      {
        id: "c72",
        type: "article",
        title: "Allerta carie secca",
        excerpt: "L'igienista monitora le zone a rischio. Se rileva segnali precoci, ricevi una notifica prima che diventi una carie.",
        readingTime: 2,
      },
    ],
    checklist: [],
  },
];

export const family: FamilyMember[] = [
  {
    id: "raffaello",
    name: "Tu",
    age: 42,
    relation: "Account titolare",
    status: "RIO 1 · oggi alle 10:30",
    currentPhase: "fase-2-rio1",
    ownsPhone: true,
    useKidMode: false,
    avatarTone: "teal",
  },
  {
    id: "lorenzo",
    name: "Lorenzo",
    age: 9,
    relation: "Figlio",
    status: "Prima visita · ven 30 mag",
    currentPhase: "fase-1-prima-visita",
    ownsPhone: true,
    useKidMode: true,
    avatarTone: "coral",
  },
  {
    id: "giulia",
    name: "Giulia",
    age: 12,
    relation: "Figlia",
    status: "Nessun percorso attivo",
    ownsPhone: false,
    useKidMode: false,
    avatarTone: "purple",
  },
  {
    id: "marco",
    name: "Marco",
    age: 15,
    relation: "Figlio",
    status: "Pre-prima visita · in attesa",
    currentPhase: "fase-0-pre",
    ownsPhone: true,
    useKidMode: false,
    avatarTone: "green",
  },
];

export type AgendaEvent = {
  id: string;
  month: number;
  year: number;
  monthLabel: string;
  title: string;
  detail: string;
  status: "done" | "today" | "planned" | "future";
};

export const agenda: AgendaEvent[] = [
  { id: "a1", month: 5, year: 2026, monthLabel: "Mag 2026", title: "RIO 1", detail: "Igiene profonda — primo livello", status: "today" },
  { id: "a2", month: 6, year: 2026, monthLabel: "Giu 2026", title: "RIO 2", detail: "Igiene profonda — secondo livello", status: "planned" },
  { id: "a3", month: 7, year: 2026, monthLabel: "Lug 2026", title: "Otturazione dente 16", detail: "Prima prestazione del piano terapeutico", status: "planned" },
  { id: "a4", month: 10, year: 2026, monthLabel: "Ott 2026", title: "Ablazione tartaro", detail: "Prima manutenzione semestrale", status: "future" },
  { id: "a5", month: 3, year: 2027, monthLabel: "Mar 2027", title: "Levigatura radicolare", detail: "Manutenzione parodontale annuale", status: "future" },
  { id: "a6", month: 4, year: 2027, monthLabel: "Apr 2027", title: "Ablazione tartaro", detail: "Seconda manutenzione semestrale", status: "future" },
  { id: "a7", month: 5, year: 2028, monthLabel: "Mag 2028", title: "Full endorale di controllo", detail: "Indagine radiografica dente per dente", status: "future" },
];

export type ChatMessage = {
  role: "aria" | "user";
  text: string;
};

export const sofiaFaqs: { question: string; answer: string }[] = [
  {
    question: "Perché serve RIO 1?",
    answer:
      "Immagina di otturare un dente su una gengiva infiammata: stai costruendo su fondamenta mosse. Il lavoro che fai non dura. Noi partiamo sempre da un terreno pulito — RIO 1 e RIO 2 servono esattamente a questo. Non tutti lo fanno. Noi sì, senza eccezioni.",
  },
  {
    question: "Sentirò dolore durante RIO 1?",
    answer:
      "Durante la seduta sentirai delle vibrazioni e un po' di pressione, ma non dolore acuto. Dopo, è normale avvertire sensibilità per 24-48 ore, soprattutto al freddo. Se la sensibilità persiste oltre i 3 giorni, contatta il centro.",
  },
  {
    question: "Cosa posso mangiare dopo RIO 1?",
    answer:
      "Nelle prime 2 ore evita cibi e bevande. Dopo, prediligi alimenti morbidi e a temperatura ambiente per le prime 24h. Evita per qualche giorno cibi molto caldi o molto freddi, e bevande gassate.",
  },
  {
    question: "Perché il full endorale e non la panoramica?",
    answer:
      "L'ortopantomografia mostra la bocca in modo compresso. Il full endorale è una radiografia per ogni singolo dente: vediamo dettagli che la panoramica nasconde. Costa qualcosa in più, ma evita cure che potrebbero essere evitate se viste in tempo.",
  },
  {
    question: "Quanto durerà tutto il percorso?",
    answer:
      "Dipende dal piano terapeutico. La fase di campo pulito (RIO 1 + RIO 2) dura tipicamente 4-6 settimane. Le prestazioni successive sono pianificate in base alle priorità del piano. Il tuo follow-up annuale, poi, è permanente.",
  },
  {
    question: "Posso spostare un appuntamento?",
    answer:
      "Sì. Dal Piano Igiene Annuale puoi spostare un appuntamento alla prima disponibilità del centro. Se vuoi mantenere la stessa igienista o lo stesso medico, contatta il centro direttamente al 02 1234 5678.",
  },
];

export const kidPatient = {
  firstName: "Lorenzo",
  age: 9,
  centerName: "Tiziano Odontoiatria",
  level: 1,
  totalLevels: 8,
};

export const kidPhases = [
  {
    id: "kid-prima-visita",
    levelNumber: 1,
    title: "La prima visita dalla Dottoressa Stella",
    when: "Venerdì 30 maggio · ore 16:30",
    state: "today" as const,
    intro:
      "La Dottoressa Stella guarderà i tuoi denti con uno specchietto magico e ti spiegherà come tenerli forti e bianchi!",
    tips: [
      "Porta solo il tuo sorriso",
      "Prima di cominciare, la Dottoressa Stella ti fa vedere tutto — niente sorprese!",
      "Puoi fare tutte le domande che vuoi",
    ],
    fear:
      "Hai paura? È normalissimo. Anche Marco (9 anni, è venuto qui due settimane fa) aveva un po' di paura prima della prima visita. Poi mi ha detto che era stato divertente.",
  },
  {
    id: "kid-grande-pulizia",
    levelNumber: 2,
    title: "La grande pulizia magica",
    when: "Da pianificare",
    state: "upcoming" as const,
    intro:
      "Useremo un piccolo strumento che vibra e pulisce i tuoi denti meglio dello spazzolino. Sentirai un po' di solletico!",
    tips: [
      "Uno strumento che vibra come uno spazzolino super-potente",
      "Solo acqua, un pennello speciale e una pasta dolce",
      "Dura solo 30 minuti",
    ],
    fear: "Promesso: nessun pizzicotto, nessun dolore. Solo denti che brillano alla fine!",
  },
];
