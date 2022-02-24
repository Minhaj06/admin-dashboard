// sidebar click & dark event
const body = document.querySelector("body"),
    sidebar = document.querySelector(".sidebar"),
    toggle = document.querySelector(".toggle"),
    searchBtn = document.querySelector(".search_box"),
    nav_link = document.querySelectorAll(".nav_link a"),
    modeSwitch = document.querySelector(".toggle_switch"),
    modeText = document.querySelector(".mode_text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode";
    } else {
        modeText.innerText = "Dark Mode";
    }
});

// menu link active

nav_link.forEach((element) => {
    element.addEventListener("click", function() {
        nav_link.forEach((link) => link.classList.remove("active"));

        this.classList.add("active");
    });
});


// sidebar dropdown menu

let dropdown1 = document.querySelector(".dropdown1");
let dropdown2 = document.querySelector(".dropdown2");
let sub_menu1 = document.querySelector(".sub_menu1");
let sub_menu2 = document.querySelector(".sub_menu2");
let drop_icon1 = document.querySelector(".drop_icon1");
let drop_icon2 = document.querySelector(".drop_icon2");

dropdown1.addEventListener("click", () => {
    sub_menu1.classList.toggle("sub_menu_show");
    drop_icon1.classList.toggle("rotate");

    sub_menu2.classList.remove("sub_menu_show");
    drop_icon2.classList.remove("rotate");
});

dropdown2.addEventListener("click", () => {
    sub_menu2.classList.toggle("sub_menu_show");
    drop_icon2.classList.toggle("rotate");

    sub_menu1.classList.remove("sub_menu_show");
    drop_icon1.classList.remove("rotate");
});