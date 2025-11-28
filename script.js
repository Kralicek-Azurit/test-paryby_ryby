// Malý helper: odstraní diakritiku a sjednotí text na porovnávání
const normalize = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim();

// Výchozí data (načtou se jen pokud v LocalStorage nic není)
const DEFAULT_ANIMALS = [
  {
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1200&auto=format&fit=crop",
    answers: ["pes", "pejsek", "dog", "canis", "psík"],
  },
  {
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop",
    answers: ["kočka", "kocka", "cat", "micka", "felis"],
  },
  {
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756154?q=80&w=1200&auto=format&fit=crop",
    answers: ["papoušek", "papousek", "parrot", "pták", "ptak"],
  },
];

// Stav aplikace
let animals = [];
let currentIndex = 0;
let attempts = 0;

// DOM prvky
const img = document.getElementById("animalImage");
const skeleton = document.getElementById("imageSkeleton");
const guessForm = document.getElementById("guessForm");
const guessInput = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");
const attemptsInfo = document.getElementById("attemptsInfo");
const answersInfo = document.getElementById("answersInfo");
const nextBtn = document.getElementById("nextBtn");

const addForm = document.getElementById("addForm");
const imageUrlInput = document.getElementById("imageUrl");
const answersInput = document.getElementById("answers");
const addFeedback = document.getElementById("addFeedback");
const clearBtn = document.getElementById("clearBtn");

const animalList = document.getElementById("animalList");

// Načtení dat z LocalStorage nebo použití defaultu
function loadAnimals() {
  const raw = localStorage.getItem("animals");
  if (raw) {
    try {
      animals = JSON.parse(raw);
    } catch {
      animals = DEFAULT_ANIMALS;
    }
  } else {
    animals = DEFAULT_ANIMALS;
  }
}

// Uložení
function saveAnimals() {
  localStorage.setItem("animals", JSON.stringify(animals));
}

// Zobrazení aktuálního zvířete
function showCurrent() {
  attempts = 0;
  feedback.textContent = "";
  feedback.className = "feedback";

  const item = animals[currentIndex];
  answersInfo.textContent = `Uznávané odpovědi: ${item.answers.length}`;
  attemptsInfo.textContent = `Pokusy: ${attempts}`;

  img.style.display = "none";
  skeleton.style.display = "block";
  img.src = item.image;
  img.alt = "Zvíře k uhodnutí";

  // Po načtení obrázku skryj skeleton
  img.onload = () => {
    skeleton.style.display = "none";
    img.style.display = "block";
  };
  img.onerror = () => {
    skeleton.style.display = "none";
    img.style.display = "block";
    img.src =
      "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'>
        <rect width='100%' height='100%' fill='#0b1225'/>
        <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9ca3af' font-size='24'>
          Obrázek nelze načíst
        </text>
      </svg>`);
  };
}

function nextAnimal() {
  currentIndex = (currentIndex + 1) % animals.length;
  guessInput.value = "";
  showCurrent();
}

// Ověření odpovědi
function checkAnswer(input) {
  const normInput = normalize(input);
  const accepted = animals[currentIndex].answers.map(normalize);
  return accepted.includes(normInput);
}

// Přidání zvířete
function addAnimal(imageUrl, answersRaw) {
  const list = answersRaw
    .split(",")
    .map((a) => a.trim())
    .filter((a) => a.length > 0);

  if (!imageUrl || list.length === 0) {
    return { ok: false, msg: "Zadej URL obrázku a alespoň jednu odpověď." };
  }

  animals.push({ image: imageUrl, answers: list });
  saveAnimals();
  renderList();
  return { ok: true, msg: "Zvíře bylo úspěšně přidáno." };
}

// Vykreslení seznamu
function renderList() {
  animalList.innerHTML = "";
  animals.forEach((a, i) => {
    const li = document.createElement("li");

    const thumb = document.createElement("img");
    thumb.src = a.image;
    thumb.alt = `Náhled zvířete ${i + 1}`;

    const right = document.createElement("div");

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = `Zvíře #${i + 1}`;

    const chips = document.createElement("div");
    chips.className = "chips";
    a.answers.forEach((ans) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = ans;
      chips.appendChild(chip);
    });

    right.appendChild(title);
    right.appendChild(chips);

    li.appendChild(thumb);
    li.appendChild(right);
    animalList.appendChild(li);
  });
}

// Handlery
guessForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = guessInput.value.trim();
  if (!val) return;

  attempts++;
  attemptsInfo.textContent = `Pokusy: ${attempts}`;

  if (checkAnswer(val)) {
    feedback.textContent = "Správně! 🎉";
    feedback.className = "feedback success";
  } else {
    feedback.textContent = "Zkus to znovu.";
    feedback.className = "feedback error";
  }
});

nextBtn.addEventListener("click", () => {
  nextAnimal();
});

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const imageUrl = imageUrlInput.value.trim();
  const answersRaw = answersInput.value.trim();

  const result = addAnimal(imageUrl, answersRaw);
  addFeedback.textContent = result.msg;
  addFeedback.className = "feedback " + (result.ok ? "success" : "error");

  if (result.ok) {
    imageUrlInput.value = "";
    answersInput.value = "";
    // hned přepneme na nově přidané zvíře
    currentIndex = animals.length - 1;
    showCurrent();
  }
});

clearBtn.addEventListener("click", () => {
  const ok = confirm("Opravdu chceš vymazat všechna uložená zvířata?");
  if (!ok) return;
  localStorage.removeItem("animals");
  animals = DEFAULT_ANIMALS.slice();
  saveAnimals();
  renderList();
  currentIndex = 0;
  showCurrent();
  addFeedback.textContent = "Seznam byl obnoven na výchozí.";
  addFeedback.className = "feedback";
});

// Inicializace
loadAnimals();
renderList();
showCurrent();
