
/* Gallery */

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//Date

var d = new Date();
document.getElementById("date").innerHTML = d;

// Load Event

window.addEventListener("load", function(){
alert("Page Loaded!");
}); 

// Scroll Event

window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (Math.ceil(scrolled) === scrollable){
    alert("You\'ve reached the bottom!")
  }

}); 

// Mouse Over The Firts Project

function show (elem) {  
    elem.style.display="block";
}
function hide (elem) { 
    elem.style.display=""; 
}

//Skills Add and Delete

function addSkill(){
  var $parent = document.querySelector('.skills')
  var skill =  document.querySelector('#newSkill').value
  var $li = document.createElement('li')
  var $h3 = document.createElement('h3')
        $h3.textContent = skill.toUpperCase()
  var $delete = document.createElement('span')
        $delete.textContent = 'delete'
        $delete.classList.add('delete')
        $delete.setAttribute('onclick', 'deleteSkill(this)')
        $h3.innerHTML += ' ' + $delete.outerHTML
  var $span = document.createElement('span')
        $span.classList.add('bar')
  var $span2 = document.createElement('span')
        $span2.classList.add(skill.toLowerCase())
  $span.appendChild($span2)
  $li.appendChild($h3)
  $li.appendChild($span)
  $parent.appendChild($li)
  
}


function deleteSkill(target){
  target.closest('li').remove()
}

//Form Validation

function formMessage() {

  let x1 = document.getElementById('name').value;
  let x2 = document.getElementById('lastname').value;
  let x3 = document.getElementById('age').value;
  let x4 = document.getElementById('email').value;
  let x5 = document.getElementById('gender').value;
  let x6 = document.getElementById('homepage').value;
  let x7 = document.getElementById('comment').value;

  alert(" Name: " + x1 +
  "\n Last Name: " + x2 +
  "\n Age: " + x3 +
  "\n Email: " + x4 +
  "\n Gender: " + x5 +
  "\n Website: " + x6 +
  "\n Comment: " + x7
  );
}