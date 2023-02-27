// let Bike={model:'tiger',name:'bmw',color:'red'}
// document.getElementById('xyz').innerHTML=Bike.model+' '+Bike.color
// console.log(typeof Bike,Bike)



// what are these keyword

// this keyword which is depends on objects and it can be invoked where we want to invoke it
const employee={
    name:'babula',
    id:1124,
    allinfo:function(){
        return this.name +" id number is "+ this.id
    }
}

console.log(employee.allinfo())