// const btn = document.getElementsByTagName("button")[0];
// btn.addEventListener("click", () => {
//   console.log(window.innerHeight);
//   console.log(document.documentElement.offsetHeight);
// });
const box = document.getElementById("box");
console.log(box);

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + document.documentElement.scrollTop ===
    document.documentElement.offsetHeight
  ) {
    box.innerHTML += `   <div class = "box">
      1
  </div>
  <div class = "box">
      2
  </div>
  <div class = "box">
      3
  </div>
  <div class = "box">
      4
  </div>`;
  }
});
