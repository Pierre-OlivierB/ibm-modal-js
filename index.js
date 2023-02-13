// console.log("test");
// TODO: build btn, onCLick : display popup
// TODO: add close btn, display none popup and display timer passed btwn
// !----------------------------------------
// *Part 1 :btn => display popup
const btnAdd = document.getElementById("modalBtn");
// console.log(btnAdd);

// function displayModal() {
//   console.log("Modal");
// }
// btnAdd.addEventListener("click", displayModal);
// !-------------------------------------------------
// *part 2: btn display timer
const popup = document.getElementById("popup");
const text = document.getElementById("text");
var timer;
var recurrentTimer;
function timerDisplay() {
  timer++;
  console.log(timer);
}
// !---------------------------------------
// *Add from W3School
// Get the modal
const modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
const span = document.getElementById("closeModal");

// When the user clicks on the button, open the modal
function addModal() {
  timer = 0;
  modal.style.display = "block";
  //   *part2
  recurrentTimer = setInterval(timerDisplay, 1000);
  console.log("test");
}

// btnAdd.addEventListener("click", addModal);

// When the user clicks on <span> (x), close the modal
function btnCloseModal() {
  modal.style.display = "none";
  //   *part 2
  console.log(timer);
  clearInterval(recurrentTimer);
  recurrentTimer = null;
  return (text.innerText = `Temps passé : ${timer}s`);
}

span.addEventListener("click", btnCloseModal);

// When the user clicks anywhere outside of the modal, close it
function clickCloseModal() {
  modal.style.display = "none";
  //   *part 2
  clearInterval(recurrentTimer);
  recurrentTimer = null;
  return (text.innerText = `Temps passé : ${timer}s`);
}
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    clickCloseModal();
  }
  //   if (e.target.innerText === "ouverture") {
  //     console.log("target");
  //     addModal();
  //   }
});
btnAdd.addEventListener("click", addModal);
