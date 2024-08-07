const $circle = document.querySelector("#circle");
const $score = document.querySelector("#score");

function start() {
    setScore(getScore())
    setImage()
  }
  
  function setScore(score) {
    localStorage.setItem('score', score)
    $score.textContent = score
  }
  
  function setImage() {
    if (getScore() >= 50) {
      const circleImg = document.getElementById('circle');
        circleImg.setAttribute('src', 'image/geniaF.png');
        circleImg.style.marginLeft = '50px'; 

      const h1Element = document.querySelector('.circle h1');
        h1Element.textContent = 'Так це Євгеній';
        h1Element.style.marginLeft = '100px'; 
  
      document.querySelector('.circle h3').textContent = 'Давайте допоможемо Євгену ухильнутись, тапай 100 монет';
    }

    if (getScore() >= 100) {
        const circleImg3 = document.getElementById('circle');
            circleImg3.setAttribute('src', 'image/rezerv.png');
            circleImg3.style.marginLeft = '20px';
            
             
  
        const bodyBack1 = document.body; // Отримуємо елемент body
            bodyBack1.style.backgroundImage = 'url("image/usa.jpg")'; // Зміна фону на зображення
            bodyBack1.style.backgroundSize = 'cover'; // Додаємо налаштування для зображення
            bodyBack1.style.backgroundRepeat = 'no-repeat';
  
  
        const h11Element = document.querySelector('.circle h1');
            h11Element.textContent = 'Чудово Євген вільна людина, вільної країни';
            h11Element.style.marginLeft = '20px'; 
            h11Element.style.color = 'black' ;
    
        const h3Element = document.querySelector('.circle h3');
             h3Element.textContent = 'Тепер допоможемо Євгену поїхати до Ахмета, тапай 200 монет';
             h3Element.style.marginLeft = '50px';
             h3Element.style.color = 'black' ;

        const money3 = document.querySelector('.score ');
            money3.style.color = 'black';
      }
    
      if (getScore() >= 200) {
        const circleImg4 = document.getElementById('circle');
            circleImg4.setAttribute('src', 'image/vital.png');
            circleImg4.style.marginLeft = '150px';
            
             
  
        const bodyBack1 = document.body; // Отримуємо елемент body
            bodyBack1.style.backgroundImage = 'url("image/usa.jpg")'; // Зміна фону на зображення
            bodyBack1.style.backgroundSize = 'cover'; // Додаємо налаштування для зображення
            bodyBack1.style.backgroundRepeat = 'no-repeat';
  
  
        const h12Element = document.querySelector('.circle h1');
            h12Element.textContent = 'Богате життя воно таке';
            h12Element.style.marginLeft = '150px'; 
            h12Element.style.color = 'black' ;
    
        const h3Element = document.querySelector('.circle h3');
             h3Element.textContent = 'Євген на Алясці з корішом, заробляй монети, Жені на сигарети';
             h3Element.style.marginLeft = '100px';
             h3Element.style.color = 'black' ;

        const money3 = document.querySelector('.score ');
            money3.style.color = 'black';
      }

  
    // if (getScore() === 50) {
    //     let userInputName;
    //     const validNames = ['Женя', 'Євген', 'Евген'];
    //     let isValid = false;
    
    //     while (!isValid) {
    //       userInputName = prompt('Вгадайте ім`я ухилянта:');
    //       console.log('Вгадайте ім`я ухилянта:', userInputName);
    
    //       if (validNames.includes(userInputName)) {
    //         isValid = true;
    //         localStorage.setItem('userInputName', userInputName);
    //       } else {
    //         alert('Ви не вгадали ухилянта');
    //       }
    //     }
    //   }

    //   if (getScore() === 200) {
    //     let userInputName;
    //     const validNames = ['13'];
    //     let isValid = false;
    
    //     while (!isValid) {
    //       userInputName = prompt('Вгадайте розмір пісюна Євгена :');
    //       console.log('Вгадайте розмір пісюна Євгена :', userInputName);
    
    //       if (!isNaN(userInputName)) {
    //         let userInputNumber = parseInt(userInputName);
    
    //         if (userInputNumber > 13) {
    //           alert('Піська менша');
    //         } else if (userInputNumber < 13) {
    //           alert('Піська більша');
    //         } else if (userInputNumber === 13) {
    //           isValid = true;
    //           localStorage.setItem('userInputName', userInputName);
    //           alert('ТАК !!! Ви вгадали розмір Євгена');
    //         }
    //       } else {
    //         alert('Будь ласка, введіть число в сантиметрах');
    //       }
    //     }
    //   }


  }
  
  
  function getScore() {
    return Number(localStorage.getItem('score')) ?? 0
  }
  
  function addOne() {
    setScore(getScore() + 1)
    setImage()
  }

$circle.addEventListener("click", (event) => {
  const rect = $circle.getBoundingClientRect(); // метод що витягує координати

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
  }, 400);

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
start()