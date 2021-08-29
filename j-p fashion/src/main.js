// header
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.querySelector('.header').style.height = "112px"
        document.querySelector('.header').style.background ="#e7e7e7"
    }
    else{
        document.querySelector('.header').style.height = "136px"
        document.querySelector('.header').style.background = "transparent"
    }
}
// accordion
var button = document.querySelector('.button-submenu')
button.addEventListener("click",function(){
    document.querySelector('.n-sub').classList.toggle("open")
})
