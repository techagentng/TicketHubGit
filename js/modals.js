//Get modal element(Parent modal)
let ParentModal = document.getElementById('parent-modal');

//Get modal btn
let modalBtn = document.getElementById('currency-nav');

//Get close btn
let closeBtn = document.getElementById('close-btn');

//Listen for a click to open the modal button
modalBtn.addEventListener('click', openModal);

//Listen for a click to close the modal button
closeBtn.addEventListener('click', closeModal)

//Listen for outside click event, this time the 
//modal parent is block, we add a parameter (n)
window.addEventListener('click', outsideClose)
//Function to open modal
function openModal(){
    ParentModal.style.display = 'block';
}

//Function to close modal
function closeModal(){
    ParentModal.style.display = 'none';
}

//Function for outside click on the window object
function outsideClose(n){
    if(n.target == ParentModal){
    ParentModal.style.display = 'none';
    }
    
}