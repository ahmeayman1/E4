const questions = [

/* ================= PART 1 : MCQ ================= */

{
  type: "mcq",
  q: "Staffing is the _______ phase of the management process.",
  options: ["First", "Second", "Third", "Fourth"],
  a: 2
},
{
  type: "mcq",
  q: "The goal of staffing is to provide the right mixture of personnel to:",
  options: [
    "Increase hospital profit only",
    "Give proper care to patients at the unit",
    "Reduce the number of working hours",
    "Replace the head nurse"
  ],
  a: 1
},
{
  type: "mcq",
  q: "A nurse with a Baccalaureate degree is classified as a:",
  options: ["Technical nurse", "Auxiliary staff", "Professional nurse", "Messenger"],
  a: 2
},
{
  type: "mcq",
  q: "Messenger and transport personnel are classified under:",
  options: ["Professional staff", "Technical staff", "Auxiliary staff", "Medical staff"],
  a: 2
},
{
  type: "mcq",
  q: "The Traditional system determines staffing based on:",
  options: [
    "Patient needs",
    "Number of beds or average census",
    "Nursing tasks duration",
    "Complexity of care"
  ],
  a: 1
},
{
  type: "mcq",
  q: "In the traditional system, the ratio for a general unit is one nurse per:",
  options: ["1-2 beds", "10-12 beds", "4-6 beds", "20 beds"],
  a: 2
},
{
  type: "mcq",
  q: "The Advanced system of staffing is based on:",
  options: [
    "Patient classification and task quantification",
    "Head nurse’s personal feelings",
    "Hospital size only",
    "Number of doctors available"
  ],
  a: 0
},
{
  type: "mcq",
  q: "Which system groups patients according to illness acuity and dependency?",
  options: [
    "Task Quantification System",
    "Traditional System",
    "Patient Classification System",
    "Recruitment System"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Measuring vital signs is considered a:",
  options: [
    "Indirect care activity",
    "Direct care activity",
    "Administrative task",
    "Socialization task"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Telephone calls and conferences are examples of:",
  options: [
    "Direct care activities",
    "Indirect care activities",
    "Patient classification",
    "Selection process"
  ],
  a: 1
},
{
  type: "mcq",
  q: "The first step in the selection/staffing process is:",
  options: [
    "Interview",
    "Background investigation",
    "Completion of application materials",
    "Socialization"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Which recruitment source provides more opportunities to hire from minority groups?",
  options: [
    "Word of mouth",
    "Internal search",
    "Advertisement",
    "Employee referrals"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Recruitment is defined as:",
  options: [
    "Choosing the best applicant",
    "Actively seeking out or attracting applicants",
    "Testing the nurse's skills",
    "Orientation to the hospital culture"
  ],
  a: 1
},
{
  type: "mcq",
  q: "In a structured interview, the interviewer:",
  options: [
    "Asks random questions",
    "Prepares questions in advance to address job requirements",
    "Does not need to plan",
    "Only talks about personal hobbies"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Socialization in staffing means:",
  options: [
    "Going out with colleagues",
    "Orienting new employees to units, policies, and culture",
    "Interviewing the applicant",
    "Searching for a job"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Scheduling is the process of:",
  options: [
    "Hiring new staff",
    "Assigning work hours and days off",
    "Evaluating nurse performance",
    "Increasing the budget"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Centralized scheduling is done by:",
  options: [
    "Each unit's head nurse",
    "The Nursing Administration Office for all units",
    "The patients",
    "The technical nurse"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Decentralized scheduling gives more control to:",
  options: [
    "Director of Nursing",
    "Hospital CEO",
    "Head Nurse of the unit",
    "Recruitment Officer"
  ],
  a: 2
},
{
  type: "mcq",
  q: "According to traditional distribution, the Day shift should have approximately:",
  options: ["20% of staff", "35% of staff", "45% of staff", "10% of staff"],
  a: 2
},
{
  type: "mcq",
  q: "Reference checks should be verified:",
  options: [
    "After the nurse starts working",
    "Before the interview",
    "Never",
    "Only if the nurse fails"
  ],
  a: 1
},

/* ================= PART 2 : TRUE / FALSE ================= */

{ type: "tf", q: "Staffing enables the manager to avoid a staffing crisis.", a: true },
{ type: "tf", q: "Budget constraints should be ignored during staffing.", a: false },
{ type: "tf", q: "Technical nurses graduate from Secondary Technical Nursing Schools.", a: true },
{ type: "tf", q: "The traditional system depends on task quantification.", a: false },
{ type: "tf", q: "Direct care activities are performed in the presence of the patient.", a: true },
{ type: "tf", q: "Class 1 refers to intensive care patients.", a: false },
{ type: "tf", q: "The selection process ends with background investigation.", a: false },
{ type: "tf", q: "Word of mouth is a low-cost recruitment method.", a: true },
{ type: "tf", q: "A recruiter should respond immediately to applicants.", a: true },
{ type: "tf", q: "Unstructured interviews need more planning than structured ones.", a: false },
{ type: "tf", q: "The interview is a verbal interaction for a specific purpose.", a: true },
{ type: "tf", q: "Background investigations may be used early or late.", a: true },
{ type: "tf", q: "Effective scheduling avoids over- and under-staffing.", a: true },
{ type: "tf", q: "In centralized scheduling, the head nurse decides.", a: false },
{ type: "tf", q: "A scheduling principle is giving a day off before and after night duty.", a: true },
{ type: "tf", q: "Staffing is most often the responsibility of the nursing office.", a: true },
{ type: "tf", q: "Recruitment only happens through newspapers.", a: false },
{ type: "tf", q: "Self-care patients are usually Class 3.", a: false },
{ type: "tf", q: "The advanced system is more accurate than the traditional system.", a: true },
{ type: "tf", q: "Staffing involves promoting personnel development.", a: true },

/* ================= PART 3 : CRITICAL THINKING ================= */

{
  type: "mcq",
  q: "A unit has 20 beds with a 1:4 ratio. How many nurses are needed?",
  options: ["4", "5", "10", "20"],
  a: 1
},
{
  type: "mcq",
  q: "A system calculating exact minutes for medication and bathing is:",
  options: [
    "Patient Classification",
    "Task Quantification",
    "Traditional System",
    "Word of Mouth"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Why is word of mouth a risk for nepotism?",
  options: [
    "It is expensive",
    "It attracts journal applicants",
    "It may lead to hiring friends or relatives regardless of quality",
    "It is slow"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Allowing staff to choose their own shifts is an example of:",
  options: [
    "Centralized scheduling",
    "Traditional system",
    "Flexible/Creative scheduling",
    "Background investigation"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Assessing dependability during interview is because:",
  options: [
    "To avoid irresponsible staff",
    "Professional requirement",
    "Job requirement",
    "All of the above"
  ],
  a: 3
},
{
  type: "mcq",
  q: "Which shift needs the least staff in the 45-35-20 rule?",
  options: ["Day", "Evening", "Night", "All equal"],
  a: 2
},
{
  type: "mcq",
  q: "A semi-dependent patient needing partial care is:",
  options: ["Class 1", "Class 2", "Class 3", "Class 4"],
  a: 1
},
{
  type: "mcq",
  q: "A skilled nurse with high absenteeism history should be:",
  options: [
    "Hired immediately",
    "Not hired based on responsibility",
    "Given higher salary",
    "Past ignored"
  ],
  a: 1
},
{
  type: "mcq",
  q: "A disadvantage of decentralized scheduling is:",
  options: [
    "Head nurse knows needs best",
    "May be perceived as unfair favoritism",
    "Done by central office",
    "Reduces head nurse power"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Staffing is the third phase because it follows:",
  options: [
    "Planning and Organizing",
    "Directing and Controlling",
    "Selection and Interview",
    "Training and Development"
  ],
  a: 0
}

];

console.log(questions.length); 
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
