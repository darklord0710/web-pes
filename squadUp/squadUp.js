

// loading-container

let loading_gif = document.querySelector(".loading-container");

function loadingFunc() {
  setInterval(function () {
    loading_gif.classList.add("fade-out");
  }, 3500);
}
window.onload = loadingFunc();

let navbar2 = document.getElementsByClassName("nav-item");

for (let i = 0; i < navbar2.length; i++) {
  navbar2[i].onclick = function () {
    loading_gif.classList.remove("fade-out");

    for (let j = 0; j < navbar2.length; j++) {
      if (j == i) {
        navbar2[i].classList.add("changeColor3");
      } else {
        navbar2[j].classList.remove("changeColor3");
      }
    }
  };
}

// navbar
let head_list3 = document.querySelector(".head_list3");
let search_input = document.querySelector(".head_list3-input");
let search_button = document.querySelector(".head_list3-button");
let temp_bg = document.querySelector(".head_list3-temp");

temp_bg.addEventListener("click", function () {
  search_input.classList.add("changeForm-input");
  search_button.classList.add("changeForm-button");

  Object.assign(temp_bg.style, {
    display: "none",
  });
});

head_list3.addEventListener("focusout", function () {
  search_input.classList.remove("changeForm-input");
  search_button.classList.remove("changeForm-button");
  Object.assign(temp_bg.style, {
    display: "block",
  });
});

// mobile navbar
let menu = document.querySelector("#bars-mobile_responsive");
let navbar = document.querySelector("#id-nav-bar_for-mobile");

menu.onclick = function () {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// autoTop-button

let autoTop = document.querySelector(".main-display2");

window.onscroll = function () {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  if (window.scrollY > 700) autoTop.classList.add("activeBox");
  else autoTop.classList.remove("activeBox");
};

let autoTop_button = document.querySelector(".autoTop-button");

autoTop.onclick = () => {
  Object.assign(autoTop_button.style, {
    "transition-property": "all",
    "transition-duration": "0.4s",
    "transition-timing-function": "ease",
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// squadUp container

let player_empty = document.getElementsByClassName("player-img");
for (let i = 0; i < player_empty.length; i++) {
  if (player_empty[i].src.length < 51) {
    Object.assign(player_empty[i].style, {
      display: "none",
    });
  }
}

// reduce

let output_total_strength = document.querySelector(
  ".collective-strength-output"
);

// Player Constructer :
function Player(name, strength, value) {
  this.ten = name;
  this.sucmanh = strength;
  this.giatri = value;
}

var player1 = new Player("Neymar", 800, 2000);
var player2 = new Player("Mbpappe", 1000, 100);
var player3 = new Player("Messi", 1000, 2000);
var player4 = new Player("Johan Cruijff", 900, 0);
var player5 = new Player("Luka Modric", 700, 0);
var player6 = new Player("Rodri", 700, 1500);
var player7 = new Player("Joan Cancelo", 700, 1500);
var player8 = new Player("Saliba", 400, 100);
var player9 = new Player("Rudiger", 800, 0);
var player10 = new Player("Trent Alexander Arnold", 700, 0);
var player11 = new Player("Peter Cech", 400, 300);

let players = [
  player1,
  player2,
  player3,
  player4,
  player5,
  player6,
  player7,
  player8,
  player9,
  player10,
  player11,
];

var total_strength = players.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.sucmanh;
}, 0);

output_total_strength.innerHTML = total_strength;
console.log(total_strength);

// format : 
var format = document.querySelector('.formation-output');
var striker = document.getElementsByClassName('player-strike');
var mid1 = document.getElementsByClassName('player-middle1');
var mid2 = document.getElementsByClassName('player-middle2');
var center = document.getElementsByClassName('player-centerBack');
let count1 = 0 ; let count2 = 0 ; let count3 = 0 ; let count4 = 0 ;

let format_function = function(array,lengths,index)  { 
  for(let i = 0 ; i < lengths ; i++) 
     if(array[i].src.length > 50)
      index++;
    
    return index; 
}

let num1 = format_function(striker,striker.length,count1);
let num2 = format_function(mid1,mid1.length,count2);
let num3 = format_function(mid2,mid2.length,count3);
let num4 = format_function(center,center.length,count1);

if(num1 == 0)
format.innerHTML = `${num4} - ${num3}  - ${num2}`;
else if(num2 == 0)
format.innerHTML = `${num4} - ${num3}  - ${num1}`;
else if (num3 == 0)
format.innerHTML = `${num4} - ${num2}  - ${num1}`;
else if ( num4 == 0)
format.innerHTML = `${num3} - ${num2}  - ${num1}`;
else 
format.innerHTML = `${num4} - ${num3} - ${num2}  - ${num1}`;


