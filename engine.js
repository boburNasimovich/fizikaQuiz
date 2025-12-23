let selected = [];
let index = 0;
let correct = 0;

function startTest(count) {
  document.getElementById("start").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  selected = shuffle([...questions]).slice(0, count);
  index = 0;
  correct = 0;
  showQuestion();
}

function showQuestion() {
  const q = selected[index];
  document.getElementById("counter").innerText =
    `${index + 1} / ${selected.length}`;

  document.getElementById("question").innerText = q.q;

  const box = document.getElementById("options");
  box.innerHTML = "";

  q.o.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => check(opt, q.a);
    box.appendChild(btn);
  });
}

function check(selectedAnswer, correctIndex) {
  if (selectedAnswer === selected[index].o[correctIndex]) {
    correct++;
  }

  index++;
  if (index < selected.length) {
    setTimeout(showQuestion, 200);
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").innerText =
    `To‘g‘ri javoblar: ${correct} / ${selected.length}`;
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
function showQuestion() {
  const q = selected[index];
  document.getElementById("counter").innerText = `${index + 1} / ${selected.length}`;
  document.getElementById("question").innerText = q.q;

  const box = document.getElementById("options");
  box.innerHTML = "";

  q.o.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    // Har bir tugmaga o'z indeksini beramiz
    btn.onclick = () => check(btn, i, q.a); 
    box.appendChild(btn);
  });
}

function check(clickedBtn, selectedIdx, correctIdx) {
  const box = document.getElementById("options");
  const buttons = box.getElementsByTagName("button");
  
  // Foydalanuvchi javob tanlagandan keyin boshqa tugmalarni bosolmasligi uchun
  for (let btn of buttons) {
    btn.disabled = true;
  }

  if (selectedIdx === correctIdx) {
    // TO'G'RI JAVOB
    clickedBtn.style.backgroundColor = "#4CAF50"; // Yashil rang
    clickedBtn.style.color = "white";
    correct++;
  } else {
    // XATO JAVOB
    clickedBtn.style.backgroundColor = "#f44336"; // Qizil rang
    clickedBtn.style.color = "white";
    
    // To'g'ri javobni ham ko'rsatib qo'yamiz (foydalanuvchi o'rganishi uchun)
    buttons[correctIdx].style.backgroundColor = "#4CAF50";
    buttons[correctIdx].style.color = "white";
  }

  index++;
  
  // Javobni ko'rib olishi uchun biroz pauza (masalan, 1 soniya)
  if (index < selected.length) {
    setTimeout(showQuestion, 3000);
  } else {
    setTimeout(showResult, 3000);
  }
}


