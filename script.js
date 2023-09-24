window.addEventListener('resize', function() {
  let screenWidth = window.innerWidth;
  let aboutHeading = document.getElementById('about-heading');
  let aboutText = document.getElementById('about-text');
  let contactHeading = document.getElementById('contact-heading');
  let contactText = document.getElementById('contact-text');

  if (screenWidth <= 750) {
    aboutHeading.textContent = 'About';
    aboutText.textContent = 'I am a developer specializing in web development. Contact me to bring your ideas to life!';
    contactHeading.textContent = 'Contact';
    contactText.textContent = 'Please provide details about your project. Let\'s discuss how I can help you!';
  } else {
    aboutHeading.textContent = 'About me';
    aboutText.textContent = 'I\'m an experienced web developer skilled in turning your design concepts into reality.\n' +
      'Whether you need a basic landing page or a full-stack web application, I have the expertise to meet your requirements.\n' +
      'Let\'s get started - contact me, and let\'s collaborate!';
    contactHeading.textContent = 'Get in Touch!';
    contactText.textContent = 'Thank you for your interest! Please share details about your web app or website, including its purpose, functionality, design preferences,\n' +
      'and any specific features you have in mind. If you have a timeline or budget, please mention them. The more details you provide,\n' +
      'the better I can offer an accurate proposal.';
  }
});

// Change color of the h1 text letter by letter when the mouse hovers over it
let h1 = document.querySelector('h1');
let h1Text = h1.textContent;
let h1TextArray = h1Text.split('');
h1.textContent = '';

for (let i = 0; i < h1TextArray.length; i++) {
  h1.innerHTML += '<span>' + h1TextArray[i] + '</span>';
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  let span = h1.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;

  if (char === h1TextArray.length) {
    complete();
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
