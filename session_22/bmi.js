let weight,height,measure,bmi,error

function calculate(){
    weight=document.getElementById('weight').value
    console.log(weight)

    height=document.getElementById('height').value
    console.log(height)
    error='please enter some value'
    height /= 100
    height *=height
    bmi=weight/height
    console.log(bmi)


    bmi=bmi.toFixed(1)

    if(bmi<=18.4){
        measure='your bmi is '+bmi +'which means' + 'you are underweight'
    }
    else if(bmi>=18.4 && bmi<=24.9){
        measure='your bmi is '+bmi +'which means' + 'you are underweight'
    }
    else if(bmi>=25 && bmi<=29.9){
        measure='your bmi is '+bmi +'which means' + 'you are underweight'
    }
    else if(bmi>=30){
        measure='your bmi is '+bmi +'which means' + 'you are underweight'
    }

    if (weight===0){
        document.getElementById('result').innerHTML=error
    }
    else if(height===0){
        document.getElementById('result').innerHTML=error
    }
    else{
        document.getElementById('result').innerHTML=measure
        console.log( measure)
    }
    if(weight<0){
        document.getElementById('result').innerHTML='negative values are not allowed'
    }

   
}
