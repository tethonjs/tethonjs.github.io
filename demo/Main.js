window.scrollTo(0,0);
if(navigator.userAgent.search("MSIE") != -1 && navigator.userAgent.search("IE") != -1){
    while(true){
        alert("Update your browser, please");
    }
}
var panel = false,
    objects = [],
    canClick = true;
document.querySelector("html").setAttribute("style", "scroll-behavior: smooth;");
document.getElementById("container").style.animation = "fade .5s";
setTimeout(function () {
    document.getElementById("container").style.opacity = "1";
},400);
document.getElementById("panel").onclick = function (event) {
    this.childNodes[5].style.display = "block";
    this.childNodes[3].style.display = "block";
    if(event.srcElement.parentElement.id == "container" && canClick){
        canClick = false;
        setTimeout(function () {
            canClick = true;
        },700);
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
    document.querySelectorAll(".progress1")[0].style.width = (window.scrollY / (document.body.clientHeight - window.innerHeight )) * 100 + "%";
    document.querySelectorAll(".progress2")[0].style.width = (window.scrollY / (document.body.clientHeight - window.innerHeight )) * 80 + "%";
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
function addWave(event, target, scale = 10, start = 10, color = "#444"){
    var x  = document.createElement("div"),
        s  = 1,
        a  = "o"+objects.length,
        a2 = "t"+objects.length;
    let v = objects.length;
    x.setAttribute("id", "wave");
    x.setAttribute("class", a + " w");
    x.setAttribute("style", "top: " + (((event.clientY-(scale/2))-target.getBoundingClientRect().top)) + "px;left:" + ((event.clientX-(scale/2))-target.getBoundingClientRect().left) + "px;width:" + scale + "px;height:" + scale + "px;opacity:1;background:" + color);
    target.appendChild(x);
    eval("var " + a + "=setInterval(function(){s+=0.2;x.style.transform='scale('+s+')';}," + start + ");");
    objects.push(a);
    setTimeout(function(){
        document.getElementsByClassName(a)[0].style.opacity = 0;
        setTimeout(function(){
            document.getElementsByClassName(a)[0].parentElement.removeChild(document.getElementsByClassName(a)[0]);
            objects.remove(a);
        }, 400);
        clearInterval(a);
    },1000);
}
function cancelWave(event){
    if(event.path[0].id.search("wave") != -1) event.target.style.opacity = 0;
}
Array.prototype.remove=function(element){this.splice(this.indexOf(element),1)}