// ===================
// accordion
// ===================
const accordion = document.querySelectorAll('.faq .container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}