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
