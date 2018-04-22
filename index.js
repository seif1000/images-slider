let right = document.querySelector(".fa-chevron-right");
   let left = document.querySelector(".fa-chevron-left");
    let sliderImages =  document.querySelectorAll(".show");
    let bubbles  = document.querySelectorAll(".bubble");
    let current = 0;
   
    function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
    bubbles[i].style.opacity = "0.5";
  }
}



function firstSlid() {
  reset();
  sliderImages[0].style.display = "block";
  
 
  bubbles[0].style.opacity = "1";

}


function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  sliderImages[current - 1].classList.add("blur");
  sliderImages[current - 1].classList.add("blur");
 
  bubbles[current - 1].style.opacity = "1";
  current--;
}


function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  sliderImages[current + 1].classList.add("blur");
 
  bubbles[current + 1].style.opacity = "1";
  current++;
}


right.addEventListener("click", function() {
    
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();

});

left.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

firstSlid();
  
setInterval(()=>{
    if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
},4000)
  