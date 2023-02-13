// console.log("test");
// TODO: build btn, onCLick : display popup
// TODO: add close btn, display none popup and display timer passed btwn
// !----------------------------------------
// *Part 1 :btn => display popup
const btnAdd = document.getElementById("modal");
// console.log(btnAdd);

function displayModal() {
  console.log("Modal");
}
btnAdd.addEventListener("click", displayModal);
// !---------------------------------------
// *Add from W3School
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
var span = document.getElementById("closeModal");

// When the user clicks on the button, open the modal
btnAdd.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
