

//check if element has class
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
};

//todo pure js hamb
function hambClick() {
  let hambBtn = document.getElementById('hamb-btn');
  let menu = document.getElementById('mobile-menu');
  let bodyScroll = document.querySelector('body');

  hambBtn.classList.toggle("is-active");

  if (hasClass(hambBtn, 'is-active') === true) {
    menu.style.display = 'flex';
    bodyScroll.style.overflow = 'hidden';
  } else {
    menu.style.display = 'none';
    bodyScroll.style.overflow = 'auto';
  }
};

//toggle language box
function langBoxClick() {
  let x = document.getElementById('lang-box-wrapper');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
};

//toggle pages section4
function togglePage1() {
  const num1 = document.getElementById('1');
  const num2 = document.getElementById('2');
  const page1 = document.getElementById('page1');
  const page2 = document.getElementById('page2');
  num2.classList.remove('active');
  num1.classList.add('active');
  $(page2).hide();
  $(page1).fadeIn();
}

function togglePage2() {
  const num1 = document.getElementById('1');
  const num2 = document.getElementById('2');
  const page1 = document.getElementById('page1');
  const page2 = document.getElementById('page2');
  num1.classList.remove('active');
  num2.classList.add('active');
  $(page1).hide();
  $(page2).fadeIn();
}


window.sr = ScrollReveal({ reset: true });
sr.reveal('.hero-content');
