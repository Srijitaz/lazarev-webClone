function navAnimate(){
    var nav = document.querySelector("nav");

nav.addEventListener("mouseenter", function(){
    let t = gsap.timeline()
    t.to(".nav-btm",{
        height: "21vh"
    })
    t.to(".nav-part1 h5",{
        display:"block"
    })
    t.to(".nav-part1 h5 span",{
        y:0,
        // duration: 0.3,
        stagger:{
            amouunt: 0.6
        }
    })
})
nav.addEventListener("mouseleave", function(){
    let t = gsap.timeline()
    t.to(".nav-part1 h5 span",{
        y:25,
        // duration: 0.3,
        stagger:{
            amouunt: 0.2
        }
    })
    t.to(".nav-part1 h5",{
        display:"none",
        duration:0.1
    })
    t.to(".nav-btm",{
        height: 0,
        duration:0.1
    })
})
}

navAnimate();