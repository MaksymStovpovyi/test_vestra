let topNavBtn = document.getElementsByClassName('top-menu');

function activeBtn() {
  for (let i = 0; i < topNavBtn.length; i++) {
    topNavBtn[i].classList.remove("active-menu");
  }
  this.classList.add("active-menu");
}

for(let i = 0; i < topNavBtn.length; i++) {
  topNavBtn[i].addEventListener('click', activeBtn);
}