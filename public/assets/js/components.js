// ===================
// accordion
// ===================
const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

// ===================
// modal
// ===================
const modal = document.getElementById("modal");
const btn = document.getElementById("modal-btn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
} 

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
// ===================
// dropdown
// ===================
function show_list() {
  const items = document.getElementById("dropdown-items");

  if (items.style.display == "block") {
      items.style.display = "none";
  } else {
      items.style.display = "block";
  }
}
window.onclick = function (event) {
  if (!event.target.matches('.dropdown_button')) {
      document.getElementById('dropdown-items')
          .style.display = "none";
  }
}  
