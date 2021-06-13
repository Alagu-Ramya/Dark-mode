const toggleSwitch = document.querySelector('.input-check');

const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

function imageMode(color){

    image1.src=`/public/img/undraw_Dev_focus_re_6iwt_${color}.svg`;
    image2.src=`/public/img/undraw_proud_coder_${color}.svg`;
    image3.src=`/public/img/undraw_feeling_proud_${color}.svg`;

}
//Dark Mode Style

function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 /50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent= 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}

//Ligh mode style

function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 /50%)';
    textBox.style.backgroundColor = 'rgb(0 0  0 / 50%)';
    toggleIcon.children[0].textContent= 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}



// Switch Theme Dynamically

function switchTheme(event) {
    //console.log(event.target.checked);
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// Event Listener

toggleSwitch.addEventListener('change', switchTheme);

//Check Local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme){

    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}