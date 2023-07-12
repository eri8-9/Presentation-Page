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
    aboutText.textContent = 'I am an experienced developer specializing in web development. I can assist you in bringing your website or web application to life, regardless of the design concept you envision for your business. From simple landing pages to full-stack web applications, I possess the skills and expertise to meet your needs. If you\'re ready to get started, please don\'t hesitate to contact me. I look forward to collaborating with you.';
    contactHeading.textContent = 'Get in Touch!';
    contactText.textContent = 'Thank you for your interest! Please feel free to provide details about your desired web app or website. Describe the purpose, functionality, and any specific features or design preferences you have in mind. Additionally, if you have a timeline or budget in place, do let me know. The more information you provide, the better I can understand your requirements and provide you with an accurate proposal or estimate.';
  }
});
