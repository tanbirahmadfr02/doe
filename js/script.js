// ===portfolio part start ===
new VenoBox({
    selector: '.venobox'
  });
// ===portfolio part end ===

 // =========sticky menu part ========
 var main_menu = document.getElementById("main_menu");
 window.addEventListener("scroll",function(){
 main_menu.classList.toggle("sticky",window.scrollY > 100);
 })
 // =========sticky menu part ========