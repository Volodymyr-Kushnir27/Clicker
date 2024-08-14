const $circle = document.querySelector("#circle");
const $score = document.querySelector("#score");
const $hints = document.querySelector("#hints");

function start() {
  setScore(getScore());
  setImage();
}

function setScore(score) {
  localStorage.setItem("score", score);
  $score.textContent = score;
}

function setImage() {
  if (getScore() >= 50) {
    const circleImg = document.getElementById("circle");
    circleImg.setAttribute("src", "image/arick.jpg");

    const h1Element = document.querySelector(".circle h1");
    h1Element.textContent = "Так це Олексій";

    const pElement = document.querySelector(".circle .hint");
    pElement.textContent = "Війна закінчиться через 2-3 тижня";

    document.querySelector(".circle h2").textContent =
      "Давайте допоможемо Олексію ухильнутись, тапай 100 монет";
  }

  if (getScore() >= 100) {
    const circleImg3 = document.getElementById("circle");
    circleImg3.setAttribute("src", "image/bilet.jpg");

    const bodyBack1 = document.body; 
    bodyBack1.style.backgroundImage = 'url("image/monako(1).jpg")'; 
    bodyBack1.style.backgroundSize = "cover"; 
    bodyBack1.style.backgroundRepeat = "no-repeat";

    const h11Element = document.querySelector(".circle h1");
    h11Element.textContent = "Чудово Олексій вільна людина, вільної країни";
    h11Element.style.marginLeft = "20px";
    h11Element.style.color = "gold";

    const h3Element = document.querySelector(".circle h2");
    h3Element.textContent =
      "Тепер допоможемо Олексію поїхати до Рамзана , тапай 150 монет";
    h3Element.style.color = "gold";
    h3Element.style.webkitTextStroke = "1px black";

    const pElement = document.querySelector(".circle .hint");
    pElement.textContent =
      "Олексій трішки пілот, прикордонник, програміст, психолог і гей . Його коханець в Монако. ";

    const money3 = document.querySelector(".score ");
    money3.style.color = "black";
  }

  if (getScore() >= 150) {
    const circleImg4 = document.getElementById("circle");
    circleImg4.setAttribute("src", "image/monako.jpg");

    const bodyBack1 = document.body; 
    bodyBack1.style.backgroundImage = 'url("image/monako(1).jpg")';
    bodyBack1.style.backgroundSize = "cover"; 
    bodyBack1.style.backgroundRepeat = "no-repeat";

    const h12Element = document.querySelector(".circle h1");
    h12Element.textContent = "Богате життя воно таке";

    h12Element.style.color = "black";

    const h3Element = document.querySelector(".circle h2");
    h3Element.textContent = "Я буду їсти омари і спати з Рамзаном, а ви шо ?! ";
    h3Element.style.color = "gold";

    const money3 = document.querySelector(".score ");
    money3.style.color = "black";
  }

  // if (getScore() === 50) {
  //   let userInputName;
  //   const validNames = [
  //     "Леша",
  //     "Олексій",
  //     "Алексей",
  //     "Підор",
  //     "підар",
  //     "підор",
  //   ];
  //   let isValid = false;

  //   while (!isValid) {
  //     userInputName = prompt("Вгадайте ім`я ухилянта:");
  //     console.log("Вгадайте ім`я ухилянта:", userInputName);

  //     if (validNames.includes(userInputName)) {
  //       isValid = true;
  //       localStorage.setItem("userInputName", userInputName);
  //     } else {
  //       alert("Ви не вгадали ухилянта");
  //     }
  //   }
  // }

  // if (getScore() === 100) {
  //   let userInputName;
  //   const validNames = ["33"];
  //   let isValid = false;

  //   while (!isValid) {
  //     userInputName = prompt("Вгадайте скільки бойових виходів у Олексія :");
  //     console.log(
  //       "Вгадайте скільки бойових виходів у Олексія :",
  //       userInputName
  //     );

  //     if (!isNaN(userInputName)) {
  //       let userInputNumber = parseInt(userInputName);

  //       if (userInputNumber > 33) {
  //         alert("Монако не фронт , трохи менше ");
  //       } else if (userInputNumber < 33) {
  //         alert("Більше поваги до ветерана");
  //       } else if (userInputNumber === 33) {
  //         isValid = true;
  //         localStorage.setItem("userInputName", userInputName);
  //         alert("ТАК !!! Ви добре знаєте нашого героя");
  //       }
  //     } else {
  //       alert("Будь ласка, введіть число");
  //     }
  //   }
  // }

  // if (getScore() === 150) {
  //   let userInputName;
  //   const validNames = [
  //     "Монако",
  //     "монако",
  //   ];
  //   let isValid = false;

  //   while (!isValid) {
  //     userInputName = prompt("Вгадайте куди відправиться наш герой:");
  //     console.log("Вгадайте куди відправиться наш герой:", userInputName);

  //     if (validNames.includes(userInputName)) {
  //       isValid = true;
  //       localStorage.setItem("userInputName", userInputName);
  //     } else {
  //       alert("Ви не вгадали");
  //     }
  //   }
  // }
}

document.querySelector(".lamp").addEventListener("click", function () {
  const hint = document.querySelector(".hint");
  hint.style.display = hint.style.display === "none" ? "block" : "none";
});

function getScore() {
  return Number(localStorage.getItem("score")) ?? 0;
}

function addOne() {
  setScore(getScore() + 1);
  setImage();
}

$circle.addEventListener("click", (event) => {
  const rect = $circle.getBoundingClientRect(); 

  const offfsetX = event.clientX - rect.left - rect.width / 2;
  const offfsetY = event.clientY - rect.top - rect.height / 2;

  const DEG = 80;

  const tiltX = (offfsetY / rect.height) * DEG;
  const tiltY = (offfsetX / rect.width) * -DEG;

  $circle.style.setProperty("--tiltX", `${tiltX}deg`);
  $circle.style.setProperty("--tiltY", `${tiltY}deg`);

  setTimeout(() => {
    $circle.style.setProperty("--tiltX", `0deg`);
    $circle.style.setProperty("--tiltY", `0deg`);
  }, 200);

  const plusOne = document.createElement("div");
  plusOne.classList.add("plus-one");
  plusOne.textContent = "+1";
  plusOne.style.left = `${event.clientX - rect.left}px`;
  plusOne.style.top = `${event.clientY - rect.top}px`;

  $circle.parentElement.appendChild(plusOne);

  addOne();

  setTimeout(() => {
    plusOne.remove();
  }, 3000);
});
start();
