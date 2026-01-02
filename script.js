const questions = [

/* ================= PART 1 : MCQ (1–20) ================= */

{
  type: "mcq",
  q: "Staffing is considered the ________ phase of the management process.",
  options: ["First", "Second", "Third", "Fourth"],
  a: 2
},
{
  type: "mcq",
  q: "The process of attracting a pool of qualified applicants for existing positions is:",
  options: ["Selection", "Recruitment", "Orientation", "Induction"],
  a: 1
},
{
  type: "mcq",
  q: "Which of the following is an example of an 'Active' recruitment mode?",
  options: [
    "Waiting for applicants to call",
    "Word of mouth",
    "Advertisement in journals/TV",
    "Browsing random CVs"
  ],
  a: 2
},
{
  type: "mcq",
  q: "The goal of staffing is to provide the right ________ of nursing personnel.",
  options: [
    "Number only",
    "Mixture (Skills) only",
    "Number and mixture",
    "Budget only"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Traditional staffing systems are primarily based on:",
  options: [
    "Patient acuity",
    "Number of patients and staff",
    "Nurse's skills",
    "Patient's diagnosis"
  ],
  a: 1
},
{
  type: "mcq",
  q: "The process of choosing the best-qualified person for a specific job is:",
  options: ["Recruitment", "Selection", "Staffing", "Development"],
  a: 1
},
{
  type: "mcq",
  q: "Orientation is important because it helps the new employee to:",
  options: [
    "Increase salary immediately",
    "Feel secure and confident",
    "Change the hospital policy",
    "Avoid working night shifts"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Which staffing step involves introduction of new employees to the organization?",
  options: ["Selection", "Induction", "Recruitment", "Placement"],
  a: 1
},
{
  type: "mcq",
  q: "Centralized scheduling means that:",
  options: [
    "Each head nurse makes the schedule",
    "One person plans coverage for the entire facility",
    "Staff nurses choose their own shifts",
    "No schedule is needed"
  ],
  a: 1
},
{
  type: "mcq",
  q: "A major disadvantage of decentralized scheduling is:",
  options: [
    "Nurses feel more in control",
    "It is time-consuming for the head nurse",
    "It ignores unit needs",
    "It is done by a computer"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Self-scheduling is a system where:",
  options: [
    "The supervisor dictates shifts",
    "Staff nurses work together to build their own schedule",
    "Patients decide shifts",
    "Only the head nurse works mornings"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Which of the following is a staffing step?",
  options: [
    "Planning for future needs",
    "Controlling patient outcomes",
    "Budget cutting",
    "Reducing nurse hours"
  ],
  a: 0
},
{
  type: "mcq",
  q: "The interview is a formal ________ intended to evaluate the applicant.",
  options: [
    "Social meeting",
    "Oral examination",
    "Legal trial",
    "Friendly chat"
  ],
  a: 1
},
{
  type: "mcq",
  q: "During an interview, dependability refers to:",
  options: [
    "Nurse's appearance",
    "Ability to be relied on",
    "School grades",
    "Family background"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Advanced staffing systems differ from traditional ones because they consider:",
  options: [
    "Patient's age only",
    "Patient classification (acuity)",
    "Number of beds only",
    "Number of shifts"
  ],
  a: 1
},
{
  type: "mcq",
  q: "One of the considerations applied during staffing is:",
  options: [
    "Personal hobbies",
    "Budget constraints",
    "Hospital color scheme",
    "Nearby restaurants"
  ],
  a: 1
},
{
  type: "mcq",
  q: "The recruitment process ends when:",
  options: [
    "The nurse starts working",
    "An application is submitted",
    "The budget is finished",
    "The nurse is promoted"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Placement of a nurse should be based on:",
  options: [
    "Random choice",
    "Only hospital needs",
    "Matching organizational needs with employee abilities",
    "Nurse's age"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Which type of interview has no fixed format and little planning?",
  options: [
    "Structured",
    "Unstructured",
    "Semi-structured",
    "Board interview"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Scheduling should be made ________ in advance to ensure stability.",
  options: ["One day", "One week", "At least 2–4 weeks", "One year"],
  a: 2
},

/* ================= PART 2 : TRUE / FALSE (21–40) ================= */

{ type: "tf", q: "Staffing helps managers avoid staffing crises.", a: true },
{ type: "tf", q: "Recruitment is the same as selection.", a: false },
{ type: "tf", q: "The goal of staffing is to provide the least number of nurses.", a: false },
{ type: "tf", q: "Word of mouth is considered an active recruitment mode.", a: false },
{ type: "tf", q: "Effective staffing requires matching the right person with the right job.", a: true },
{ type: "tf", q: "Orientation is a waste of time for experienced nurses.", a: false },
{ type: "tf", q: "Decentralized scheduling increases the head nurse’s workload.", a: true },
{ type: "tf", q: "Patient classification systems help determine staffing patterns.", a: true },
{ type: "tf", q: "Structured interviews ask the same questions to all applicants.", a: true },
{ type: "tf", q: "Staffing is a one-time yearly process.", a: false },
{ type: "tf", q: "Internal recruitment means hiring from outside the organization.", a: false },
{ type: "tf", q: "Placement assigns a person to a specific job.", a: true },
{ type: "tf", q: "Effective recruiters need good communication skills.", a: true },
{ type: "tf", q: "Self-scheduling often increases staff satisfaction.", a: true },
{ type: "tf", q: "The nursing budget has no influence on staffing.", a: false },
{ type: "tf", q: "Induction is the first part of orientation.", a: true },
{ type: "tf", q: "A staffing pattern refers to number and mix of personnel.", a: true },
{ type: "tf", q: "Interviews can predict performance 100%.", a: false },
{ type: "tf", q: "Staffing involves promoting personnel development.", a: true },
{ type: "tf", q: "Centralized scheduling is usually more flexible for nurses.", a: false },

/* ================= PART 3 : CRITICAL THINKING (41–50) ================= */

{
  type: "mcq",
  q: "In acuity-based staffing with many critical patients, the nurse-patient ratio should:",
  options: [
    "Stay the same",
    "Decrease patients per nurse",
    "Increase patients per nurse",
    "Use assistants only"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Main advantage of a structured interview is:",
  options: [
    "More fun",
    "Better comparison between candidates",
    "Less preparation",
    "More talking by manager"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Why is internal recruitment better for morale?",
  options: [
    "Cheaper",
    "Shows promotion opportunities",
    "Brings fresh blood",
    "Needs more training"
  ],
  a: 1
},
{ type: "tf", q: "Cost-saving should be prioritized over patient safety in staffing crises.", a: false },
{
  type: "mcq",
  q: "Hospital tour and introduction to mission/vision is called:",
  options: ["Skill training", "Induction/Orientation", "Placement", "Recruitment"],
  a: 1
},
{
  type: "mcq",
  q: "In self-scheduling conflicts, who should resolve it?",
  options: [
    "Nurses negotiate together",
    "Head nurse intervenes",
    "Cancel holiday",
    "Use luck"
  ],
  a: 0
},
{ type: "tf", q: "Interpersonal skills are as important as technical skills in selection.", a: true },
{
  type: "mcq",
  q: "Centralized staffing is usually perceived as:",
  options: [
    "Fair but rigid",
    "Flexible but chaotic",
    "Creative",
    "Individualized"
  ],
  a: 0
},
{
  type: "mcq",
  q: "Why is feedback important after orientation?",
  options: [
    "Punishment",
    "Identify need for further training",
    "Decrease salary",
    "End contract"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Which scheduling principle ensures proper mix of staff?",
  options: [
    "Balance / equitable distribution",
    "Maximum cost",
    "Randomization",
    "Staff preference only"
  ],
  a: 0
}

];

console.log(questions.length); // ✅ 50
let index = 0;
let answers = Array(questions.length).fill(null);
let reviewMode = false;
let shuffledQuestions = [];
/* ========= ELEMENTS ========= */

const qText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const counter = document.getElementById("counter");
const progress = document.getElementById("progressBar");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result");
const resultScore = document.getElementById("resultScore");
const resultPercent = document.getElementById("resultPercent");
/* ========= OPTIONS ========= */
function shuffleOptions(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function createOption(text, isCorrect) {
  const b = document.createElement("button");
  b.innerText = text;
  b.onclick = () => select(isCorrect, b);
  optionsDiv.appendChild(b);
}
function select(isCorrect, btn) {
  if (answers[index] !== null) return;

  answers[index] = isCorrect;

  const q = shuffledQuestions[index];

  [...optionsDiv.children].forEach(b => {
    b.disabled = true;

    // لو MCQ
    if (q.type === "mcq") {
      const correctText = q.options[q.a];

      if (b.innerText === correctText) {
        b.style.background = "#27ae60"; // الصح أخضر
      } else if (b === btn) {
        b.style.background = "#e74c3c"; // الغلط أحمر
      }
    }

    // لو True / False
    if (q.type === "tf") {
      if (
        (b.innerText === "True" && q.a === true) ||
        (b.innerText === "False" && q.a === false)
      ) {
        b.style.background = "#27ae60";
      } else if (b === btn) {
        b.style.background = "#e74c3c";
      }
    }
  });

  nextBtn.style.display = "inline-block";
}
function startQuiz() {
  index = 0;
  answers = Array(questions.length).fill(null);
  reviewMode = false;

  // ✅ اعمل نسخة بدل ما تغيّر الأصل
  shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
document.getElementById("questionsBtn").innerText =
  `Questions (${shuffledQuestions.length})`;
  document.getElementById("result").classList.remove("show");
  document.getElementById("home").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  loadQuestion();
}
function loadQuestion() {
  optionsDiv.innerHTML = "";
  nextBtn.style.display = "none";

  const q = shuffledQuestions[index];
  qText.innerText = q.q;
  counter.innerText = `Question ${index + 1} / ${shuffledQuestions.length}`;
  progress.style.width = ((index + 1) / shuffledQuestions.length) * 100 + "%";

  if (q.type === "tf") {
    createOption("True", q.a === true);
createOption("False", q.a === false);
  } else {
    const options = q.options.map((text, i) => ({
  text,
  correct: i === q.a
}));

shuffleOptions(options).forEach(opt => {
  createOption(opt.text, opt.correct);
});
  }
}

function nextQuestion() {
  if (index < questions.length - 1) {
    index++;
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const score = answers.filter(a => a === true).length;
  const percent = Math.round((score / questions.length) * 100);

  // اخفي الكويز
  document.getElementById("quiz").style.display = "none";

  // النصوص
  resultScore.innerText = `Score: ${score} / ${questions.length}`;
  resultPercent.innerText = `Percentage: ${percent}%`;

  let title = "";
  if (percent >= 85) {
    title = "اول دفعععهه يعمممم";
  } else if (percent >= 70) {
    title = "شد شويه يعممم";
  } else {
    title = "انت اخرك تخش كليه البهاييييمممم";
  }

  document.getElementById("resultTitle").innerText = title;

  // أظهر النتيجة بالأنيميشن
  resultBox.classList.add("show");
}
function restartQuiz() {
  document.getElementById("result").classList.remove("show");
  startQuiz();
}
function toggleQuestions() {
  const list = document.getElementById("questionsList");
  list.classList.toggle("show");
  renderQuestionsList();
}

function renderQuestionsList() {
  const list = document.getElementById("questionsList");
  list.innerHTML = "";

  shuffledQuestions.forEach((q, i) => {
    const b = document.createElement("button");
    b.innerText = i + 1;

    if (answers[i] === null) {
      b.className = "q-unanswered";
    } else if (answers[i] === true) {
      b.className = "q-correct";
    } else {
      b.className = "q-wrong";
    }

    if (i === index) {
      b.style.outline = "3px solid #3498db";
    }

    b.onclick = () => {
      index = i;
      loadQuestion();
      renderQuestionsList();
    };

    list.appendChild(b);
  });
}
/* ========= MENU ========= */

const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  sideMenu.classList.toggle("show");
  overlay.classList.toggle("show");
}

function closeMenu() {
  sideMenu.classList.remove("show");
  overlay.classList.remove("show");
}

/* ========= DARK MODE ========= */

function toggleDark() {
  document.body.classList.toggle("dark");
}