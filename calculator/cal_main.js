

const displayCurrentValue = document.getElementById("current_value")
const displayFinalValue = document.getElementById("final_value")

const numbersBtn = document.querySelectorAll(".number")
const operatorBtn = document.querySelectorAll(".operator")

const display= new Display(displayCurrentValue, displayFinalValue)

numbersBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        display.addNumbers(btn.innerHTML)
    })
})