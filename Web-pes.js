let navbar2 = document.getElementsByClassName('nav-item');

for (let i = 0; i < navbar2.length; i++) {
    navbar2[i].onclick = function() {
        loading_gif.classList.remove('fade-out');
       
        for (let j = 0; j < navbar2.length; j++) {
            if (j == i) {
                navbar2[i].classList.add('changeColor3');
                
            } else {
                navbar2[j].classList.remove('changeColor3');
            }
        }
    }
}

let head_list3 = document.querySelector('.head_list3');
let search_input = document.querySelector('.head_list3-input');
let search_button = document.querySelector('.head_list3-button');
let changeIcon = document.querySelector('#head_list3-changeIcon');
let temp_bg = document.querySelector('.head_list3-temp');


temp_bg.addEventListener('click' , function() { 
    search_input.classList.add('changeForm-input');
    search_button.classList.add('changeForm-button');
    changeIcon.classList.add('fa-xmark');
    
Object.assign(temp_bg.style , { 
    display : 'none',
})
})

head_list3.addEventListener('focusout' , function() { 
    search_input.classList.remove('changeForm-input');
    search_button.classList.remove('changeForm-button');
    changeIcon.classList.remove('fa-xmark');

    Object.assign(temp_bg.style , { 
        display : 'block',
    })
     })

search_button.addEventListener('click' , function() { 
        search_input.classList.remove('changeForm-input');
        search_button.classList.remove('changeForm-button');
        changeIcon.classList.remove('fa-xmark');
    
        Object.assign(temp_bg.style , { 
            display : 'block',
        })
         })

let menu = document.querySelector("#bars-mobile_responsive");
let navbar = document.querySelector("#id-nav-bar_for-mobile");

menu.onclick = function() {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let addBlank = document.getElementsByTagName('a');
for (let i = 0; i < addBlank.length; i++)
    addBlank[i].setAttribute('target', '_blank');

let show_image = document.getElementById('id_of-img1');

let array_of_images = [
    "./file_anh_html/main_page_1.jpg",
    "./file_anh_html/main_page_6.png",
    "./file_anh_html/main_page_2.jpg",
    "./file_anh_html/main_page_4.jpg",
    "./file_anh_html/main_page_3.png",
   
];


let lengthOfbg = array_of_images.length;
var index = 0;
setInterval( function() {
   slick_dot[index].classList.remove('changeColor');
   index += 1 ; 
   slick_dot[index].classList.add('changeColor');

   if(index == lengthOfbg - 1 ) { 
      slick_dot[index].classList.remove('changeColor');
      index = 0; 
      slick_dot[index].classList.add('changeColor');

    }

   show_image.src = array_of_images[index];

} , 3000);



//                                          Phần đăng nhập , đăng kí

// Đăng kí
var sign_up = document.querySelector('.sign-up');
var overlay1 = document.querySelector('.overlay');

sign_up.onclick = function() {
    Object.assign(overlay1.style, {
        display: 'block',
    })
}

var backoutSign1 = document.querySelector(
    ".model-input_button__back"
);

backoutSign1.onclick = function() {
    Object.assign(overlay1.style, {
        display: 'none',
    })
}




// Đăng nhập :

var sign_in = document.querySelector('.sign-in');
var overlay2 = document.querySelector(".overlay_for_sign-in");



sign_in.onclick = () => {
    overlay2.classList.add("activeSignBox");
};

var backoutSign2 = document.getElementsByClassName(
    "model-input_button__back"
)[1];

backoutSign2.onclick = () => {
    overlay2.classList.remove("activeSignBox");
}

// slick-dot

let slick_dot = document.getElementsByClassName('dot-items_button');

for (let i = 0; i < array_of_images.length; i++) {
    slick_dot[i].onclick = function() {
        for (let j = 0; j < array_of_images.length; j++) {
            if (j == i) {
                index = i;
                slick_dot[i].classList.add('changeColor');
                show_image.src = array_of_images[i];
                
            } else {
                slick_dot[j].classList.remove('changeColor');
            }
        }
    }
}

// loading-container


let loading_gif = document.querySelector('.loading-container');


function loadingFunc() {
    setInterval(function() {
        loading_gif.classList.add('fade-out')
    }, 3500);
}
window.onload = loadingFunc();

// autoTop-button

let autoTop = document.querySelector('.main-display2');

window.onscroll = function() {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    if (window.scrollY > 700)
        autoTop.classList.add('activeBox');
    else
        autoTop.classList.remove('activeBox');
}

let autoTop_button = document.querySelector('.autoTop-button');

autoTop.onclick = () => {
    Object.assign(autoTop_button.style , { 
        'transition-property' : 'all' , 
        'transition-duration' : '0.4s',
         'transition-timing-function' : 'ease',
    });
   
    window.scrollTo({
        top : 0 , 
        behavior : "smooth",
        
    });
}

//                                      highlight period container

let expand_video = document.getElementsByClassName('expand-allvideos');
let videos = document.getElementsByClassName('main-display');
let icon = document.getElementsByClassName('iconDown');
for (let i = 0; i < expand_video.length; i++)
    expand_video[i].onclick = () => {

        videos[i].classList.toggle('activeBox');
        icon[i].classList.toggle('fa-chevron-down');

    }