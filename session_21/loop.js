// for(initialization;condition;increment){
//     // code to be executed
// }

// i)for loop
// for (let i=0;i<5;i++){
//     console.log(i)
// }

// ii) for in loop - its use for object method

// for(variable in object){

// }

// let student={name:'harsh',degree:'any',state:'maharastra'}

// for(let i in student){
//     console.log(i+" = "+student[i])
    
    
// }

// iii)for each loop -its use for array method

// let alpha=['a','b','c']
// for (let i=0;i<alpha.length;i++){
//     console.log(alpha[i])
// }

// iv) while loop 
// while(expression){
    // loop
// }

// let i=1 ,n=100

// while(i<=n){
//     console.log(i)
//     i+=1
// }

// v)do while
// do{
//     // body loop

// }while(condition)

// let i=1
// let n=100

// do{
//     console.log(i)
//     i++
// }
// while(i<=n)

// vi)breakin a loop

// for(let i=0;i<100;i++){
//     console.log(i)
//     if(i==60){
//         break
//     }
// }

// vii)skipping an iteration
let i=10
for (let x=1; x<=i;x++){
    if(x==5){
        continue
    }
    console.log(x)
}
