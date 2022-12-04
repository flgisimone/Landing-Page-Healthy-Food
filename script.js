//MENU RESPONSIVE
const ulMenu = document.querySelector(".ulMenu");
const openMenuBtn = document.querySelector(".openMenuBtn");
const closeMenuBtn = document.querySelector(".closeMenuBtn");

openMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    ulMenu.style="display:flex";
    closeMenuBtn.style="display:block";
    openMenuBtn.style="display:none";
})

closeMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    ulMenu.style="display:none";
    closeMenuBtn.style="display:none";
    openMenuBtn.style="display:block";
})

// --------------------- COUNTDOWN --------------------- //

const containerCountdown = document.querySelector(".containerCountdown")
const offerExpired = document.querySelector(".offerExpired")

//dichiarazione delle constanti relativi ai giorni, ore, minuti e secondi del countdown
const ggEl = document.querySelector("#days")
const hhEl = document.querySelector("#hours")
const mmEl = document.querySelector("#minutes")
const ssEl = document.querySelector("#seconds")


//dichiarazione della data di fine countdown
const endDate = new Date("December 04 2023")
const endDateinMs = endDate.getTime();

//dichiarazione dei secondi, minuti, ore e giorni con formula di calcolo in millisecondi
const secondInMs = 1000;
const minuteInMs = 60 * secondInMs;
const hourInMs = 60 * minuteInMs
const dayInMs = 24 * hourInMs

//creiamo una constante a cui assegnamo il metodo seInterval 
//che viene invocato in un determinato intervallo di tempo (in questo caso ogni 1000ms cioè 1s)
const counterTimer = setInterval(timer, 1000); 

//all'internod della funzione timer inseriamo le operazioni di calcolo per il countdown
function timer(){

    //dichiarazione della data attuale
    const nowInMs = new Date().getTime();

    //dichiarazione della differenza tra la data di fine countdown e della data attuale
    const diff = endDateinMs - nowInMs;

    if(diff > 0){
        //inserimento nell'HTML ogni elemento calcolato per il countdown
        ggEl.innerHTML = Math.floor(diff / dayInMs);
        hhEl.innerHTML = Math.floor((diff % dayInMs) / hourInMs);
        mmEl.innerHTML = Math.floor((diff % hourInMs) / minuteInMs);
        ssEl.innerHTML = Math.floor((diff % minuteInMs) / secondInMs);
    } else{
        clearInterval(timer); //metodo che ferma il timer
        offerExpired.style = "display:block"
    }
    
}

// --------------------- CAROSELLO --------------------- //

const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style = "display:none";
  }
  slides[slideIndex - 1].style = "display:flex";
}

btnLeft.addEventListener("click", (e) => {
    e.preventDefault()
    plusSlides(-1);
});

btnRight.addEventListener("click", (e) => {
    e.preventDefault()
    plusSlides(1);
});
