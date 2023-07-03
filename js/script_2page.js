window.addEventListener('DOMContentLoaded', function() {

  
  const menuName = document.getElementsByClassName('lm-item-title'),
        listMenuName = document.getElementsByClassName('lm-item-list'),
        liOfMenu = document.getElementsByClassName('lm-item-list-li');

    function openMenu() {
      for (let i = 0; i < listMenuName.length; i++) {
        listMenuName[i].classList.remove("lm-display-active");
        listMenuName[i].classList.add("lm-display-no-active");
      }

      let pickMenu = this.nextElementSibling;
      pickMenu.classList.remove("lm-display-no-active");
      pickMenu.classList.add("lm-display-active");
    }

    for (let i = 0; i < menuName.length; i++) {
      menuName[i].addEventListener('click', openMenu);
    }


  function activeLi() {
    console.log(this);
  }

  for (let i = 0; i < liOfMenu.length; i++) {
    liOfMenu[i].addEventListener('click', activeLi);
  }


});