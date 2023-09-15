const tipPerPersonDisplay = document.getElementById("tip-per-person")
const totalTipDisplay = document.getElementById("total-tip")
let peopleError = document.getElementById("people-error")
let billError = document.getElementById("bill-error")


const resetBtn = document.getElementById("reset")
resetBtn.addEventListener('click', ()=>{
    location.reload()
})
//Get the total bill
let bill = document.getElementById("bill")
let totalBill

bill.addEventListener('input', (e)=>{
    totalBill = bill.value
    // console.log(totalBill);
})



//Get the number of people
let peopleCount = document.getElementById("people-cont")
let numberOfPeople

peopleCount.addEventListener('input', (e) => {
    numberOfPeople = peopleCount.value
    // console.log(numberOfPeople);
})


// get the tip percentage and store it in a varriable tip
let tipPercerntage = document.getElementById("button")
let tip

let button = document.getElementsByClassName("button")
for (let i = 0; i < button.length; i++){
    button[i].addEventListener('click', ()=>{
        tip = button[i].value
        button[i].classList.add("button-clicked")
        // console.log(tip);
    })
}



const calculateBtn = document.getElementById("submit")

function calculate(bill, people, tip){
    amountPerPerson = parseFloat(bill) / parseFloat(people)

    // console.log(amountPerPerson);


    var tipPerPerson = (parseFloat(tip) / 100) * parseFloat(amountPerPerson)
    var float = tipPerPerson.toFixed(2);
    tipPerPersonDisplay.innerText = float
    console.log(tipPerPerson);

    totalTip = tipPerPerson * parseFloat(numberOfPeople)
    var fixed = totalTip.toFixed(2);
    totalTipDisplay.innerText = fixed

    // console.log(totalTip);

}


calculateBtn.addEventListener('click', function() {
    // Clear any previous error messages
    billError.innerText = "";
    peopleError.innerText = "";

    
    const parsedBill = parseFloat(totalBill);
    const parsedPeople = parseFloat(numberOfPeople);

    // Check for valid input values
    if (isNaN(parsedBill) || parsedBill <= 0) {
        billError.innerText = "Bill Cant be empty!";
    } else if (isNaN(parsedPeople) || parsedPeople <= 0) {
        peopleError.innerText = "Number of people must be a Valid number";
    } else if (tip === undefined) {
        billError.innerText = "Please select a tip percentage";
    } else {
        calculate(parsedBill, parsedPeople, tip);
    }
});




