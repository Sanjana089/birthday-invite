element = document.getElementById("animate");
const button = document.querySelector('.avengers-assemble');
const age = document.querySelector('.age');
$(document).ready(function () {
  setTimeout(() => {
    const button = document.querySelector('.avengers-assemble');
    const age = document.querySelector('.age');
    button.classList.add('show');
    age.classList.add('show');
  }, 3000);
});

if (element) {
  // reset the transition by...
  element.addEventListener("click", function (e) {
    e.preventDefault;

    button.classList.remove('show');
    age.classList.remove('show');
    // console.log('element', element.classList);

    // removing the class
    element.classList.remove("run-animation");

    // triggering reflow
    void element.offsetWidth;

    // and re-adding the class
    element.classList.add("run-animation");
    setTimeout(() => {
      button.classList.toggle('show');
      age.classList.toggle('show');
    }, 3000);
  }, false);
}

document.addEventListener("DOMContentLoaded", function () {
  const comicButton = document.querySelector('.comic-button');
  const frame2 = document.querySelector('.frame2');
  const wrapper = document.querySelector('.wrapper');
  const logo = document.querySelector('.logo');

  comicButton.addEventListener('click', function () {
    frame2.classList.toggle('open');
    wrapper.style.display = 'none';
    logo.style.display = 'none';
    button.style.display = 'none';
  });

});
