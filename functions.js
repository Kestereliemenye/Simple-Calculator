//value to be displayed
let displayValue = '';

//function to append number to the display
function appendNumber(number){
    displayValue += number
    updateDisplay();
}
// function to append operator to the displayed
function addOperator(operator){
    displayValue += operator
    updateDisplay();
}
// set addEventListeners to the values
// document.querySelectorAll(".numbers").forEach((value, key) => {
//     value.addEventListener("click", function (){
//         appendNumber(2, key)
//         console.log(key)
//     })

// })
// const html = document.querySelectorAll(".number")

// console.log(html);

// for ( let i = 0; i <= html.length; i++ ) {
//     html[i].addEventListener("click", function (){
//         appendNumber(i)
//         console.log(i);
//     } )
// }

document.getElementById('one').addEventListener("click", function (){
    appendNumber(1)
})
document.getElementById('two').addEventListener("click", function (){
    appendNumber(2)

})
document.getElementById('three').addEventListener("click", function (){
    appendNumber(3)

})
document.getElementById('four').addEventListener("click", function (){
    appendNumber(4)

})
document.getElementById("five").addEventListener("click", function(){
    appendNumber(5)
})
document.getElementById("six").addEventListener("click", function(){
    appendNumber(6)
})
document.getElementById("seven").addEventListener("click", function(){
    appendNumber(7)
})
document.getElementById("eight").addEventListener("click", function(){
    appendNumber(8)
})
document.getElementById("nine").addEventListener("click", function(){
    appendNumber(9)
})
document.getElementById("zero").addEventListener("click", function(){
    appendNumber(0)
})
document.getElementById("cal").addEventListener("click", function(){
    calcuate()
})
// document.getElementById("doule-zero").addEventListener("click", function(){
    //     let doubleZ = "00"
//     appendNumber(Number(doubleZ)
//     )
// })
document.getElementById("minus").addEventListener("click", function(){
    addOperator("-")
})
document.getElementById("multiplication").addEventListener("click", function(){
    addOperator("*")
})
document.getElementById("division").addEventListener("click", function(){
    addOperator("/")
})
document.getElementById("clear").addEventListener("click", function(){
    clear()
})

document.getElementById("plus").addEventListener("click", function() {
    addOperator("+")
})
//

//calculated the values
function calcuate(){
    const result = evaluate(displayValue)
    if(result !== null) {
        displayValue = result.toString();
    } else{
        displayValue = "Error"
    }
    updateDisplay()
}

// use strict mode for the calulations to ensure 0 errors
function evaluate(expression){
    try {
        return Function('"use strict";return (' + expression + ')')();
      } catch (error) {
        return null;
        // strict mode allows me to place JS code in a strict operating context
}
}
// update for the display 
function updateDisplay(){
    document.getElementById("display").value = displayValue;
}
function clear(){
    displayValue = '';
    updateDisplay()
}