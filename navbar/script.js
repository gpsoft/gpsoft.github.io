document.querySelector(".jsSubMenuDropTrigger").addEventListener("click",()=>{document.querySelector(".nav-sub-menu-wrap").classList.toggle("sub-menu-open")}),document.querySelector("body").addEventListener("click",a=>{a.target.classList.contains("jsSubMenuDropTrigger")||a.target.closest&&null!=a.target.closest(".jsSubMenuDropTrigger")||document.querySelector(".nav-sub-menu-wrap").classList.remove("sub-menu-open")}),document.querySelector(".jsNavTrigger").addEventListener("click",()=>{document.querySelector(".ham-btn").classList.toggle("ham-cross"),document.querySelector(".nav").classList.toggle("nav-open"),document.querySelector(".nav-sub-menu-item").classList.remove("sub-menu-open")}),document.querySelector(".jsAutoScroll").addEventListener("mouseenter",()=>{smoothScrollTo(document.querySelector("#about"))}),document.querySelector(".jsAutoScroll").addEventListener("click",()=>{smoothScrollTo(document.querySelector("#about"))}),(()=>{let a=()=>{document.querySelector(".jsAutoScroll").hidden=!0,window.removeEventListener("scroll",a)};window.addEventListener("scroll",a)})(),document.querySelectorAll(".jsScrollTo").forEach(a=>{a.addEventListener("click",a=>{a.preventDefault();let b=a.currentTarget.getAttribute("data-scroll-to");smoothScrollTo(null==b?a.currentTarget:document.querySelector(b))})});function smoothScrollTo(a){document.querySelector(".ham-btn").classList.remove("ham-cross"),document.querySelector(".nav").classList.remove("nav-open"),document.querySelector(".nav-sub-menu-item").classList.remove("sub-menu-open");let b=window.scrollY,c=b+a.getBoundingClientRect().y-60,d=a=>b+(c-b)*(a*a*a),e=0,f=()=>{e++;20<e||(scrollTo(0,d(e/20)),requestAnimationFrame(f))};requestAnimationFrame(f)}