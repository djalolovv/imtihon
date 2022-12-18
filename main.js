let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

function price() {
  let pr_btn = document.getElementById("price");
  if (pr_btn.innerText == "£5.99 per month") {
    pr_btn.innerHTML = '<span id="span__btnga" class="button__span"> £70.8</span> per year';
  }
  else if(pr_btn.innerText == "£70.8 per year"){
    pr_btn.innerHTML = '<span id="span__btnga" class="button__span"> £5.99</span> per month';
  }
}
function price_2() {
  let pr_btn2 = document.getElementById("price2");
  if (pr_btn2.innerText == "£12.99 per month") {
    pr_btn2.innerHTML = '<span id="span__btnga" class="button__span">£155.88</span> per year';
  }
  else if(pr_btn2.innerText == "£155.88 per year"){
    pr_btn2.innerHTML = '<span id="span__btnga" class="button__span"> £12.99 </span> per month';
  }
}
function price_3() {
  let pr_btn3 = document.getElementById("price3");
  if (pr_btn3.innerText == "£20.99 per month") {
    pr_btn3.innerHTML = '<span id="span__btnga" class="button__span">£251.88</span> per year';
  }
  else if(pr_btn3.innerText == "£251.88 per year"){
    pr_btn3.innerHTML = '<span id="span__btnga" class="button__span"> £20.99 </span> per month';
  }
}
function submitga(e){
  let form = document.getElementById('cantact__form')
  event.preventDefault()
  form.innerHTML = '<p class="text-success">Your email has been successfully registered!</p>'
}