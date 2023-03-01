const modal=document.querySelector('.modal')
const trigger=document.querySelector('.trigger')
const closebutton=document.querySelector('.close-button')



function toggleModal(){
    modal.classList.toggle('show-modal')
    console.log(modal.classList)
    
}

function windowOnclick(e){
    if(e.target===modal){
        toggleModal()
    }


}

trigger.addEventListener('click',toggleModal)
closebutton.addEventListener('click',toggleModal)
window.addEventListener('click',windowOnclick)