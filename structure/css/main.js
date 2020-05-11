//Get modal element 
var modal =document.getElementById("simpleModal");
//Get open modal button

var modalBtn =document.getElementById("modalBtn");
// Get close button

var mycloseBtn= document.getElementsByClassName('mycloseBtn')[0];
//Listen for open click 

modalBtn.addEventListener('click',openModal);

//listen for closed click

mycloseBtn.addEventListener('click',closeModal);

//listen for outside click
window.addEventListener('click',clickOutside);

// function to open modal

function openModal(){
 modal.style.display='block';
}

//function to close modal
function closeModal(){
    modal.style.display='none';
   }

   //function to close modal outside click

   function clickOutside(){
       if (e.target==modal){
        modal.style.display='none';
       }
   }








