// syntax of function

// function myfunc(parameter1,parameter2){

// }


function adds(a=50,b){
    
    console.log(a+b)
}
console.log('default')
adds(30,50)

function addss(a,b){
    return a+b
}

// h=addss(45,50)
// console.log(h)


const multi=function(k,l){
    return k*l
}

yu=multi(45,50)
console.log(yu)



const division=(j,k)=>{
    return j/k
}
ui=division(45,50)
console.log(ui)
