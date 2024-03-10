element = document.getElementById("animate");
const button = document.querySelector('.avengers-assemble');
const age = document.querySelector('.age');
$(document).ready(function () {
  setTimeout(() => {
    const button = document.querySelector('.avengers-assemble');
    const age = document.querySelector('.age');
    if (button)
      button.classList.add('show');
    if (age)
      age.classList.add('show');
  }, 3000);
});

if (element) {
  // reset the transition by...
  element.addEventListener("click", function (e) {
    e.preventDefault;
    if (!e.target.classList.contains('comic-button')) {
      button.classList.remove('show');
      age.classList.remove('show');

      // removing the class
      element.classList.remove("run-animation");

      // triggering reflow
      void element.offsetWidth;

      // and re-adding the class
      element.classList.add("run-animation");
      setTimeout(() => {
        button.classList.add('show');
        age.classList.add('show');
      }, 3000);
    }
  }, false);
}

document.addEventListener("DOMContentLoaded", function () {
  const comicButton = document.querySelector('.comic-button');
  const wrapper = document.querySelector('.wrapper');
  const logo = document.querySelector('.logo');

  if (comicButton) {
    comicButton.addEventListener('click', function () {
      wrapper.style.display = 'none';
      logo.style.display = 'none';
      button.style.display = 'none';
    });
  }

  const coverClick = document.querySelector('.card');
  coverClick.addEventListener('click', function () {
    coverClick.classList.toggle('card-clicked');
  })

});
