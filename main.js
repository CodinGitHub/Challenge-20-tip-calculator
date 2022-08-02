let bill = document.querySelector('.inputs-section__bill-input');
let people = document.querySelector('.inputs-section__people-input');

let billNumber = parseFloat(bill.value)
let peopleNumber = parseInt(people.value)

let tipResult = document.querySelector('.result-amount__value');
let totalResult = document.querySelector('.result-total__value');

let tipValue = 0;

let botons = document.querySelectorAll('.btns__button');
botons.forEach((element)=>{
    
    element.addEventListener('click', ()=>{

        botons.forEach(element => {
            element.classList.remove('btns__button--selected');
        })

        element.classList.add('btns__button--selected');
        tipValue = parseInt(element.innerText.slice(0, -1));

        updateActive()
        calculateTip()
    })
})

let activeTip;
let activeTipNumber;
function updateActive(){
    activeTip = document.querySelector('.btns__button--selected')
    activeTipNumber = parseInt(activeTip.innerText.slice(0, -1))
}

function calculateTip(){
    let tipAmount = billNumber * activeTipNumber / 100;
    let tipAmountPerPerson = tipAmount / peopleNumber;
    tipResult.innerHTML = `$${tipAmountPerPerson.toFixed(2)}`;
    
    let totalPerPerson = (billNumber + tipAmount) / peopleNumber;
    totalResult.innerHTML = `$${totalPerPerson.toFixed(2)}`;
}

//Actualizando Bill
bill.addEventListener('change', ()=>{
    billNumber = parseFloat(bill.value)
    calculateTip()
});

//Acutalizando personas
people.addEventListener('change', ()=>{
    peopleNumber = parseInt(people.value)
    calculateTip()
})

//Reset 
let resetBtn = document.querySelector('.result-reset');
resetBtn.addEventListener('click', ()=>{
    billNumber = 0;
    peopleNumber = 0;
    calculateTip()
});