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

   function clickOutside(e){
       if (e.target==modal){
        modal.style.display='none';
       }
   }

// BUY PROPERTIES

var buymodal =document.getElementById("buysimpleModal");
//Get open modal button

var buymodalBtn =document.getElementById("buymodalBtn");
// Get close button

var buycloseBtn= document.getElementsByClassName('buycloseBtn')[0];
//Listen for open click 

buymodalBtn.addEventListener('click',buyopenModal);

//listen for closed click

buycloseBtn.addEventListener('click',buycloseModal);

//listen for outside click
window.addEventListener('click',buyclickOutside);

// function to open modal

function buyopenModal(){
 buymodal.style.display='block';
}

//function to close modal
function buycloseModal(){
    buymodal.style.display='none';
   }


 function buyclickOutside(e){
    if (e.target==buymodal){
     buymodal.style.display='none';
    }
 }

 
var budgetmodal =document.getElementById("budgetsimpleModal");
//Get open modal button

var budgetmodalBtn =document.getElementById("budgetmodalBtn");
// Get close button

var budgetcloseBtn= document.getElementsByClassName('budgetcloseBtn')[0];
//Listen for open click 

budgetmodalBtn.addEventListener('click',budgetopenModal);

//listen for closed click

budgetcloseBtn.addEventListener('click',budgetcloseModal);

//listen for outside click
window.addEventListener('click',budgetclickOutside);

// function to open modal

function budgetopenModal(){
 budgetmodal.style.display='block';
}

//function to close modal
function budgetcloseModal(){
    budgetmodal.style.display='none';
   }


 function budgetclickOutside(e){
    if (e.target==budgetmodal){
     budgetmodal.style.display='none';
    }
 }















