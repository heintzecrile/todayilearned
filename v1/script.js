const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM Elements
const factFormEl = document.querySelector(".fact-form");
const btnEl = document.querySelector(".btn-open");
const factsList = document.querySelector(".facts-list");

//Create DOM elements: Render facts in list
factsList.innerHTML = "";

//Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://ozwznokcddftnezigzau.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96d3pub2tjZGRmdG5lemlnemF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3ODg2ODMsImV4cCI6MTk5NDM2NDY4M30.og08ecgtaC09sA-UQ1QyAhzUhx_7_Tf5FwYWDxnVuBI",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96d3pub2tjZGRmdG5lemlnemF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3ODg2ODMsImV4cCI6MTk5NDM2NDY4M30.og08ecgtaC09sA-UQ1QyAhzUhx_7_Tf5FwYWDxnVuBI",
      },
    }
  );
  const data = await res.json();

  // const filteredData = data.filter((fact) => fact.category === "society");
  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArray = dataArray.map(
    (fact) => `<li class="fact">
    <p>
    ${fact.text}
    <a
      class="source"
      href="${fact.source}"
      target="_blank"
      >(Source)</a>
  </p>
  <span class="tag" style="background-color: ${
    CATEGORIES.find((cat) => cat.name === fact.category).color
  }"
    >${fact.category}</span>
    </li>`
  );
  const html = htmlArray.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

//Toggle form visibility
btnEl.addEventListener("click", () => {
  if (factFormEl.classList.contains("hidden")) {
    factFormEl.classList.remove("hidden");
    btnEl.textContent = "Close";
  } else {
    factFormEl.classList.add("hidden");
    btnEl.textContent = "Share a fact";
  }
});

console.log([7, 8, 9, 13].filter((el) => el > 10));
console.log([7, 8, 9, 13].find((el) => el > 10));

// let votesInteresting = 23;
// let votesMindblowing = 5;
// const text = "Lisbon is the capital of Portugal";

// function calcFactAge(year) {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - year;
//   return age;
// }

// // const age1 = calcFactAge(2015);
// // console.log(calcFactAge(2018));

// // falsy values: 0 , '', null, undefined

// const fact = ["Lisbon is the capital of Portugal", 2015, true];
// console.log(fact);

// const [text, createdIn] = fact;

// const newFact = [...fact, "society"];
// fact.push("society");
// console.log(fact);

// const factObj = {
//   text: "Lisbon",
//   age: 25,
// };

// console.log(factObj.text);

// // [2, 4, 6, 8].forEach(function (el) {
// //   console.log(el);
// // });

// // const times10 = [2, 4, 6, 8].map(function (el) {
// //   return el * 10;
// // });

// const times100 = [2, 3, 6, 7].map((el) => el * 100);

// const allCategories = CATEGORIES.map((el) => el.name);
// console.log(allCategories);
