// document.getElementById('heading').addEventListener('click',function(f){
//     let variable

//     console.log('you clicked on heading')

//     variable=f.target

//     variable=f.target.className
//     variable=Array.from(f.target.classList)
//     console.log(variable)

    
// })



// There are two kinds of selectors

// 1)single element selector

let element=document.getElementById('containerone')
// element=element.className
element.style.color='red'
// element.innerHTML='my name is harsh sareen'
// element.innerHTML='<b> hello this is harsh sareen </b>'
// console.log(element.innerHTML)
// console.log(element)

let sel=document.querySelector('#myfirst')

// sel=document.querySelector('.myfclass')
sel=document.querySelector('div')
console.log(sel)
sel.style.background='red'
// sels.style.background='red'
// sels.style.color='white'
// console.log(sels)

// 2)multi element selector

let elems=document.getElementsByClassName('hello')
// elems.style.color='black'
console.log(elems)

for(let index=0;index<elems.length;index++){
    const element=elems[index]
    console.log(element)
    element.style.color='red'
}