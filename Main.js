window.scrollTo(0,0);
if(window.navigator.userAgent.search("MSIE") != -1){
    alert("Update your browser, please");
    window.close();
}
var panel = false;
setTimeout(function () {
    window.scrollTo(0,0);
    if(window.navigator.languages.join().search("en") != -1){
        document.title = "Tethon.js | Documentation";
        document.querySelector("#start h1").innerHTML = "Getting started";
        document.querySelector("#compatibility h1").innerHTML = "Available browsers";
        document.querySelector("#api h1").innerHTML = "API documentation";
        document.querySelector("#examples h1").innerHTML = "Live examples";
        document.querySelector("#authors h1").innerHTML = "Developers";
        document.querySelector("#download h1").innerHTML = "Download it";
        document.querySelectorAll("h3")[0].innerHTML = "Fast download";
        document.querySelectorAll("h3")[1].innerHTML = "Engine structure";
        document.querySelectorAll(".secondary p")[0].innerHTML = "For quick installation, <button onclick=" + 'scrollToElement("download")' + ">download</button> the sources and connect all the necessary modules, or you can just download all the contents of the library.";
        document.querySelectorAll(".secondary p")[1].innerHTML = "Select one of the menu items, click on it to display the documentation.";
        document.querySelectorAll("#panel ul li")[0].innerHTML = "Getting started";
        document.querySelectorAll("#panel ul li")[1].innerHTML = "Compatibility";
        document.querySelectorAll("#panel ul li")[2].innerHTML = "API documentation";
        document.querySelectorAll("#panel ul li")[3].innerHTML = "Live examples";
        document.querySelectorAll("#panel ul li")[4].innerHTML = "Developers";
        document.querySelectorAll("#panel ul li")[5].innerHTML = "Download library";
        document.querySelectorAll(".subheading")[0].innerHTML = "Tethon – library for 2D games development. It based on Canvas + DOM Sprites technologies. For 100% use you should learn documentation in detail.";
        document.querySelectorAll(".subheading")[1].innerHTML = "Here you can see how the current version of the library works with different browsers. Choose the browser to redirect for more information.";
        document.querySelectorAll(".table-heading")[0].innerHTML = "Browser";
        document.querySelectorAll(".table-heading")[1].innerHTML = "Available";
        document.querySelectorAll(".y").forEach(function (element) {
            element.innerHTML = "yes";
        });
        document.querySelectorAll(".n").forEach(function (element) {
            element.innerHTML = "no";
        });
        document.querySelectorAll(".subheading")[3].innerHTML = "At first we need to understand what the API is. API – a set of ready-maded classes, functions, constants provided by the application for use in external software products.<br> This library, oddly enough, also has a set of functions.";
        document.querySelectorAll(".subheading")[4].innerHTML = "Games, based on this library.";
        document.querySelectorAll(".subheading")[5].innerHTML = "You can test your code with special developed <button onclick=\"window.open('https://tethonjs.com/test', '_blank')\">utility</button>.";
        document.querySelectorAll(".subheading")[6].innerHTML = 'The only developer of this library is Tigran Kashapov. He lives in Russia and yet... until we know nothing more about him ¯&#x5c;_(ツ)_/¯. But you can <button onclick="window.open(\'https://t.me/xceptio0n\', \'_blank\')">contact</button> with him...';
        document.querySelectorAll(".secondary p")[5].innerHTML = 'Place &lt;script&gt; before closing the &lt;/body&gt; to connect the library. Do not worry, this does not affect the operation of your site. No conflicts with plugins like jQuery, etc.';
        document.querySelectorAll(".secondary p")[7].innerHTML = 'Add &lt;link&gt; before closing the &lt;/head&gt; tag to connect the styles. They can conflict with other CSS files.';
        document.querySelector(".hidden").innerHTML = "* You can't choose the file from the file tree when you using small device.";
    } else {
        document.title = "Tethon.js | Документация";
    }
    setTimeout(function () {
        document.querySelector("html").setAttribute("style", "scroll-behavior: smooth;");
        document.getElementById("container").style.opacity = "1";
    },400);
},500);
document.getElementById("panel").onclick = function (event) {
    this.childNodes[5].style.display = "block";
    this.childNodes[3].style.display = "block";
    if(event.srcElement.parentElement.id == "container"){
        setTimeout(function () {
            if (window.innerWidth < 1300) {
                if (!panel) {
                    panel = true;
                    event.target.childNodes[5].style.transitionDelay = ".2s";
                    event.target.childNodes[3].style.transitionDelay = ".2s";
                    event.target.childNodes[3].style.transition = ".2s";
                    event.target.style.width = "270px";
                    event.target.childNodes[3].style.opacity = "1";
                    event.target.childNodes[5].style.opacity = "1";
                    event.target.childNodes[5].style.left = "0px";
                    if(window.innerWidth > 670)
                        document.querySelector(".wrapper").style.width = "calc(100% - 270px)";
                    else
                        document.querySelector(".wrapper").style.left = "207px";
                } else {
                    panel = false;
                    document.querySelector("#panel").style.transition = ".14s";
                    event.target.childNodes[5].style.transitionDelay = "0s";
                    event.target.childNodes[3].style.transitionDelay = "0s";
                    event.target.childNodes[3].style.transition = ".15s";
                    event.target.style.width = "70px";
                    event.target.childNodes[3].style.opacity = "0";
                    event.target.childNodes[5].style.opacity = "0";
                    event.target.childNodes[5].style.left = "-150px";
                    if(window.innerWidth > 670)
                        document.querySelector(".wrapper").style.width = "calc(100% - 70px)";
                    else
                        document.querySelector(".wrapper").style.left = "0px";
                    setTimeout(function () {
                        event.target.childNodes[5].style.display = "none";
                        event.target.childNodes[3].style.display = "none";
                        document.querySelector("#panel").style.transition = ".44s";
                    }, 540);
                }
            }
        }, 50);
    }
};
window.onscroll = function () {
    const need = 65;
    if(window.scrollY > (window.scrollY + document.getElementById("start").getBoundingClientRect().top - need) && window.scrollY < (window.scrollY + document.getElementById("compatibility").getBoundingClientRect().top - need)){
        document.getElementsByClassName("active")[0].setAttribute("class", "panel-menu");
        document.getElementsByClassName("panel-menu")[0].setAttribute("class", "active");
    } else if(window.scrollY > (window.scrollY + document.getElementById("compatibility").getBoundingClientRect().top - need) && window.scrollY < (window.scrollY + document.getElementById("api").getBoundingClientRect().top - need)){
        document.getElementsByClassName("active")[0].setAttribute("class", "panel-menu");
        document.getElementsByClassName("panel-menu")[1].setAttribute("class", "active");
    } else if(window.scrollY > (window.scrollY + document.getElementById("api").getBoundingClientRect().top - need) && window.scrollY < (window.scrollY + document.getElementById("examples").getBoundingClientRect().top - need)){
        document.getElementsByClassName("active")[0].setAttribute("class", "panel-menu");
        document.getElementsByClassName("panel-menu")[2].setAttribute("class", "active");
    } else if(window.scrollY > (window.scrollY + document.getElementById("examples").getBoundingClientRect().top - need) && window.scrollY < (window.scrollY + document.getElementById("authors").getBoundingClientRect().top - need)){
        document.getElementsByClassName("active")[0].setAttribute("class", "panel-menu");
        document.getElementsByClassName("panel-menu")[3].setAttribute("class", "active");
    } else if(window.scrollY > (window.scrollY + document.getElementById("authors").getBoundingClientRect().top - need) && window.scrollY < (window.scrollY + document.getElementById("download").getBoundingClientRect().top - need)){
        document.getElementsByClassName("active")[0].setAttribute("class", "panel-menu");
        document.getElementsByClassName("panel-menu")[4].setAttribute("class", "active");
    } else if(window.scrollY > (window.scrollY + document.getElementById("authors").getBoundingClientRect().top - need + document.getElementById("authors").getBoundingClientRect().height)){
        document.getElementsByClassName("active")[0].setAttribute("class", "panel-menu");
        document.getElementsByClassName("panel-menu")[5].setAttribute("class", "active");
    }
};
function scrollToElement(id) {
    let elementY = window.scrollY + document.getElementById(id).getBoundingClientRect().top - 10;
    window.scrollTo(0, elementY);
}
window.oncontextmenu = function (event) {
    if(window.location.protocol.toString() == "https:") event.preventDefault();
};
document.getElementById("ico").oncontextmenu = function (event) {
    if(window.location.protocol.toString() == "https:") event.preventDefault();
};