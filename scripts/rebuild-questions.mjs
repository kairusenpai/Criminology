/**
 * Rebuilds questions.js for the 6 core PRC Criminology board exam subjects.
 * Run: node scripts/rebuild-questions.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const inputPath = path.join(root, 'questions.js');
const outputPath = path.join(root, 'questions.js');

// Load existing bank (parse object literal only)
const source = fs.readFileSync(inputPath, 'utf8');
const marker = 'const criminologySubjects = ';
const start = source.indexOf(marker);
if (start === -1) throw new Error('criminologySubjects not found in questions.js');
const objectStart = start + marker.length;
const footerIdx = source.indexOf('\nfunction getQuestionsBySubject', objectStart);
const objectSource = source.slice(objectStart, footerIdx).trim();
const old = new Function(`return ${objectSource}`)();
const isLegacy = Boolean(old?.criminalLaw);
const isCurrent = Boolean(old?.criminalJurisprudence);
if (!isLegacy && !isCurrent) {
  throw new Error('Failed to parse existing questions.js');
}

const PREFIX = {
  criminalJurisprudence: 'cjur',
  lawEnforcementAdmin: 'lea',
  crimeDetectionInvestigation: 'cdi',
  criminalisticsForensic: 'crfs',
  correctionalAdministration: 'corr',
  criminology: 'crim',
};

const TOPICS = {
  criminalJurisprudence: [
    'Criminal Law (Book 1 & 2)',
    'Criminal Procedure',
    'Evidence',
    'Human Rights Education',
  ],
  lawEnforcementAdmin: [
    'Police Organization and Administration',
    'Industrial Security Concepts',
    'Comparative Models in Policing',
  ],
  crimeDetectionInvestigation: [
    'Fundamentals of Criminal Investigation',
    'Specialized Crime Investigation',
    'Traffic Management',
  ],
  criminalisticsForensic: [
    'Personal Identification (Dactyloscopy)',
    'Forensic Photography',
    'Questioned Documents',
    'Polygraphy',
    'Forensic Chemistry and Toxicology',
  ],
  correctionalAdministration: [
    'Institutional and Non-Institutional Corrections',
    'Therapeutic Modalities',
  ],
  criminology: [
    'Theories of Crime Causation',
    'Juvenile Delinquency (RA 9344)',
    'Ethics and Human Relations',
  ],
};

const SUBJECT_META = {
  criminalJurisprudence: {
    name: 'Criminal Jurisprudence and Procedure',
    boardWeight: 20,
    description:
      'Philippine criminal law (RPC Books 1 & 2), criminal procedure, rules of evidence, and human rights in the justice system.',
  },
  lawEnforcementAdmin: {
    name: 'Law Enforcement Administration',
    boardWeight: 15,
    description:
      'PNP organization and administration, industrial security, VIP protection, risk management, and comparative policing models.',
  },
  crimeDetectionInvestigation: {
    name: 'Crime Detection and Investigation',
    boardWeight: 20,
    description:
      'Investigation fundamentals, specialized cases (homicide, cybercrime, terrorism), legal medicine, and traffic accident investigation.',
  },
  criminalisticsForensic: {
    name: 'Criminalistics / Forensic Science',
    boardWeight: 15,
    description:
      'Dactyloscopy, forensic photography, questioned documents, polygraphy, and forensic chemistry/toxicology.',
  },
  correctionalAdministration: {
    name: 'Correctional Administration',
    boardWeight: 10,
    description:
      'BuCor, BJMP, parole, probation, and therapeutic rehabilitation programs in correctional settings.',
  },
  criminology: {
    name: 'Criminology',
    boardWeight: 20,
    description:
      'Theories of crime causation, juvenile justice (RA 9344), and professional ethics for registered criminologists.',
  },
};

function normalizeQuestion(q, subjectKey, index, topic) {
  let options = Array.isArray(q.options) ? [...q.options] : [];
  let correct = q.correct;

  // Pad short option lists
  while (options.length < 4) {
    options.push(`Option ${options.length + 1} (review item)`);
  }
  if (correct >= options.length) {
    correct = 0;
  }

  const prefix = PREFIX[subjectKey];
  return {
    id: `${prefix}_${index + 1}`,
    topic,
    question: q.question,
    options,
    correct,
    explanation: q.explanation,
    isSituational: Boolean(q.isSituational),
  };
}

function assignTopic(subjectKey, question, index) {
  const topics = TOPICS[subjectKey];
  const text = `${question.question} ${question.explanation}`.toLowerCase();

  const rules = {
    criminalJurisprudence: [
      [/human rights|due process|miranda|constitutional|udhr|iccpr|cat\b|torture|anti-torture|ra 9745/i, 3],
      [/hearsay|admissib|witness|burden of proof|exclusionary|documentary|object evidence|parol|best evidence|res gestae/i, 2],
      [/arraign|bail|warrant|preliminary investigation|information|search warrant|custodial investigation|rules of court|jurisdiction|appeal|motion|trial|plea/i, 1],
      [/article \d|rpc|revised penal|felony|penalty|murder|homicide|theft|robbery|circumstance|imprisonment|reclusion|prision|mitigat|aggravat|justifying|exempting/i, 0],
    ],
    lawEnforcementAdmin: [
      [/industrial|vip|physical security|access control|perimeter|risk management|asset protection/i, 1],
      [/comparative|scotland|japan|fbi|interpol|community policing|peelian|foreign|international model/i, 2],
    ],
    crimeDetectionInvestigation: [
      [/traffic|accident|vehicular|collision|drunk driving|lto|mvdir|road/i, 2],
      [/cyber|terror|homicide|legal medicine|autopsy|ballistics|special/i, 1],
    ],
    criminalisticsForensic: [
      [/fingerprint|dactyl|minutiae|henry classification|afis/i, 0],
      [/photograph|camera|lighting|scale|crime scene document/i, 1],
      [/handwriting|forgery|ink|paper|document exam/i, 2],
      [/polygraph|lie detect|physiological/i, 3],
      [/toxicology|drug|explosive|poison|chemistry|chromatograph|spectrom/i, 4],
    ],
    correctionalAdministration: [
      [/probation|parole|community|non-institutional|aftercare|reintegration/i, 1],
      [/therapy|counsel|behavior modification|rehabilit|modalit|treatment program/i, 1],
    ],
    criminology: [
      [/juvenile|cicl|9344|children in conflict|diversion|youth/i, 1],
      [/ethic|professional|conduct|code of|human relation|integrity|criminologist/i, 2],
      [/theory|strain|differential association|labeling|anomie|biological|psychological|sociological|positivist/i, 0],
    ],
  };

  const subjectRules = rules[subjectKey] || [];
  for (const [regex, topicIdx] of subjectRules) {
    if (regex.test(text)) return topics[topicIdx];
  }
  return topics[index % topics.length];
}

function takeQuestions(arr, count) {
  return arr.slice(0, count);
}

function interleave(a, b, total) {
  const out = [];
  let i = 0;
  let j = 0;
  while (out.length < total && (i < a.length || j < b.length)) {
    if (i < a.length) out.push(a[i++]);
    if (out.length >= total) break;
    if (j < b.length) out.push(b[j++]);
  }
  return out;
}

// Build pools from legacy (8 subjects) or re-tag current (6 subjects)
const pools = isLegacy
  ? {
      criminalJurisprudence: [...old.criminalLaw.questions],
      lawEnforcementAdmin: [
        ...old.lawEnforcement.questions,
        ...old.securityManagement.questions.filter((_, i) => i % 2 === 0),
      ],
      crimeDetectionInvestigation: [...old.crimeDetection.questions],
      criminalisticsForensic: interleave(
        old.criminalistics.questions,
        old.forensicScience.questions,
        100
      ),
      correctionalAdministration: [...old.correctionalAdministration.questions],
      criminology: [
        ...old.criminalSociology.questions,
        ...old.securityManagement.questions.filter((_, i) => i % 2 === 1),
      ],
    }
  : {
      criminalJurisprudence: [...old.criminalJurisprudence.questions],
      lawEnforcementAdmin: [...old.lawEnforcementAdmin.questions],
      crimeDetectionInvestigation: [...old.crimeDetectionInvestigation.questions],
      criminalisticsForensic: [...old.criminalisticsForensic.questions],
      correctionalAdministration: [...old.correctionalAdministration.questions],
      criminology: [...old.criminology.questions],
    };

// Cap each subject at 100 questions
const TARGET = 100;

const criminologySubjects = {};
let totalQuestions = 0;

for (const [key, meta] of Object.entries(SUBJECT_META)) {
  const raw = takeQuestions(pools[key], TARGET);
  const questions = raw.map((q, i) =>
    normalizeQuestion(q, key, i, assignTopic(key, q, i))
  );
  totalQuestions += questions.length;
  criminologySubjects[key] = {
    ...meta,
    topics: TOPICS[key],
    questions,
  };
}

function jsString(value) {
  return JSON.stringify(String(value));
}

function formatQuestion(q, indent) {
  const pad = ' '.repeat(indent);
  const inner = ' '.repeat(indent + 4);
  const opts = q.options.map((o) => `${inner}${jsString(o)}`).join(',\n');
  return `${pad}{
${pad}    id: ${jsString(q.id)},
${pad}    topic: ${jsString(q.topic)},
${pad}    question: ${jsString(q.question)},
${pad}    options: [
${opts}
${pad}    ],
${pad}    correct: ${q.correct},
${pad}    explanation: ${jsString(q.explanation)},
${pad}    isSituational: ${q.isSituational}
${pad}}`;
}

let file = `// Criminology Question Database - Philippine Board Exam Practice
// 6 Core PRC Licensure Examination Subjects (${totalQuestions} questions)
// Weights: CJ 20% | LE 15% | CDI 20% | Crim/Forensic 15% | Corrections 10% | Criminology 20%

const criminologySubjects = {
`;

for (const [key, subject] of Object.entries(criminologySubjects)) {
  file += `    ${key}: {
        name: ${jsString(subject.name)},
        boardWeight: ${subject.boardWeight},
        description: ${jsString(subject.description)},
        topics: [
${subject.topics.map((t) => `            ${jsString(t)}`).join(',\n')}
        ],
        questions: [
${subject.questions.map((q) => formatQuestion(q, 12)).join(',\n')}
        ]
    },
`;
}

file += `};

function getQuestionsBySubject(subjectKey) {
    return criminologySubjects[subjectKey]?.questions || [];
}

function getAllSubjects() {
    return Object.keys(criminologySubjects).map(key => ({
        key: key,
        ...criminologySubjects[key]
    }));
}

function getSubjectInfo(subjectKey) {
    return criminologySubjects[subjectKey];
}

function getTotalQuestionCount() {
    return Object.values(criminologySubjects).reduce((sum, s) => sum + s.questions.length, 0);
}
`;

fs.writeFileSync(outputPath, file, 'utf8');
console.log(`Rebuilt ${outputPath}`);
console.log(`Subjects: 6 | Total questions: ${totalQuestions}`);
for (const [key, s] of Object.entries(criminologySubjects)) {
  const sit = s.questions.filter((q) => q.isSituational).length;
  console.log(`  ${key}: ${s.questions.length} (${sit} situational)`);
}
