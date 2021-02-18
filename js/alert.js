const modal = document.getElementById("my_modal");
 const btn = document.getElementById("btn_modal_window");
 const span = document.getElementsByClassName("close_modal_window")[0];

 btn.onclick = function () {
   modal.classList.add('modal_active');
 }

 span.onclick = function () {
   modal.classList.remove('modal_active');
 }

 window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.remove('modal_active');
    }
}



