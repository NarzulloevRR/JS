<<<<<<< HEAD
let modal = document.getElementById("my_modal");
 let btn = document.getElementById("btn_modal_window");
 let span = document.getElementsByClassName("close_modal_window")[0];

 btn.onclick = function () {
    modal.style.display = "block";
 }

 span.onclick = function () {
    modal.style.display = "none";
=======
const modal = document.getElementById("my_modal");
 const btn = document.getElementById("btn_modal_window");
 const span = document.getElementsByClassName("close_modal_window")[0];

 btn.onclick = function () {
   modal.classList.add('modal_active');
 }

 span.onclick = function () {
   modal.classList.remove('modal_active');
>>>>>>> 7686529 (fixed)
 }

 window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
<<<<<<< HEAD
}
=======
}



>>>>>>> 7686529 (fixed)
