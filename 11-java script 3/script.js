function pythagorovavěta() {

 

    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value)

    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)

 

    const additionResult = (inputFirstNumber * inputFirstNumber + inputSecondNumber * inputSecondNumber)

       

    let C =Math.sqrt(a*a + b*b)

    document.getElementById("c").value = c.toFixed(1)
}

function checkResult() {
   
    const inputNumber = document.getElementById("number").value;
    if(inputNumber > 10 && inputNumber <= 20) {
        console.log("VETŠÍ NEŽ 10") // kód: x
    } else if(inputNumber > 0 && inputNumber <= 10 ) {
        console.log("VĚTŠÍ NEŽ 0")// kód: y
    } else if(inputNumber > 20 ) {
        console.log("VĚTŠÍ NEŽ 20")// kód: z
    } else if(inputNumber < 0 ){
        console.log("MENŠÍ NEŽ 0")// kód: ž
    }
}

function checkResult() {

    const inputAge = parseInt(document.getElementById("age").value)

    if(inputAge < 18) {
        document.getElementById("outputAge").value = "mladej"
    
    } else if(inputAge >= 18 && inputAge < 200){
        document.getElementById("outputAge").value = "Dospělej"

         }else if(inputAge > 18 < 0){

    } else if(inputAge <= 2005){
        document.getElementById("outputAge").value = "Rok"
    }else if(inputAge > 2005) {
        document.getElementById("outputAge").value = "moc mladej"
    }

    
    
}


    
    




