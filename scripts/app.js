const navBtn=document.querySelector(".NavBtn")
const navMenu=document.querySelector(".mobileNavMenu")
let navOpen=false

navBtn.addEventListener("click",function(){
    if(navOpen){
        navBtn.classList.remove("navBtnopen")
        navMenu.classList.remove("mobileNavMenuOpen")
        navOpen=false
    }else{
        navBtn.classList.add("navBtnopen")
        navMenu.classList.add("mobileNavMenuOpen")
        navOpen=true
    }

})