//selectors
const output = document.querySelector("#output");
const findOutBtn = document.querySelector("#find-out");


// event listeners

// this stops the button from defaulting to submit a form
findOutBtn.addEventListener('click',function (e) {
  e.preventDefault();
});
findOutBtn.addEventListener('click',getMilk);


// functions


function getMilk () {
  
   let milkUnit;
   const cash = document.querySelector("#money").value;
   const priceOfMilk = (2.30 * 1.065);
   const amountOfMilk = Math.floor((cash / priceOfMilk));
   

    Math.floor(amountOfMilk) === 1 ? milkUnit = "gallon" :milkUnit = "gallons";
    

   if(cash < priceOfMilk) {
     output.style.color = "Red";
      output.innerHTML = `You don't have enought money the price of milk is ${priceOfMilk.toFixed(2)}`;
      
   }
    else {

   output.innerHTML = `you can buy ${Math.floor(amountOfMilk)} ${milkUnit} of milk your change is ${calcChange(cash,priceOfMilk)}`;
    
  }
}

function calcChange(money,costOfMilk) {
  return (money % costOfMilk).toFixed(2);
}




