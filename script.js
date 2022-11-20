const counter = document.querySelector(".counter");
const nums = document.querySelectorAll(".nums span");
const finalMessage = document.querySelector(".final");
const replay = document.getElementById("replay");

runAnimation();

function runAnimation() {
  nums.forEach((num, idx) => {
    console.log(num, idx);
  });
}
