const tipPerPersonDisplay = document.getElementById("tip-per-person")
const totalTipDisplay = document.getElementById("total-tip")
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
        // console.log(tip);
    })
}


// calulate the final tip

//devide the toltal bill by the number of people
//then find the choosen percentage(tip) of the answer
//thats the tip amount per person
//multiply that by the number of people and thats the total tip


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

    console.log(totalTip);

}


    calculateBtn.addEventListener('click', function() {
  
    calculate(totalBill, numberOfPeople, tip);
});

