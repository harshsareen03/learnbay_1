const modal=document.querySelector('.modal')
const trigger=document.querySelector('.trigger')
const closeButton=document.querySelector('.close-button')
function toggleModal(){
    modal.classList.toggle('.show-modal')
    console.log('p')
}

function windowOnclick(event){
    if(event.target === modal){
        toggleModal()
        console.log('c')
    }
}

trigger.addEventListener('click',toggleModal)

closeButton.addEventListener('click',toggleModal)
window.addEventListener('click',windowOnclick)
// console.log(closeButton)