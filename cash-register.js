//TODO 5 > Cash Register
//Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
 //initialize dict
 const currencyUnit = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
 };
function checkCashRegister(price, cash, cid) {
  //initialize
  let status = "";
  let change = [];
  
  let changeDue = Math.round((cash - price) * 100);  //total change due
  let changeDueCheck = changeDue; //copy of changeDue, to check the end condition

  //filter cid with zero value and reverse them (sort from highest to lowest)
  let filteredCid = cid.filter(unit => unit[1] !== 0).reverse();
  let cidSum = 0;

  //process
  filteredCid.forEach(element => {
    //initialize
    let unit = element[0];  //this iteration currency unit name
    let unitVal = element[1]*100; //this iteration currency unit value
    cidSum += unitVal;  //calculate the total of cid
    let amount = 0; //to calculate the change due in the while loop

    while(changeDue >= currencyUnit[unit] && unitVal > 0){
      amount += currencyUnit[unit];
      changeDue -= currencyUnit[unit];
      unitVal -= currencyUnit[unit];
    }

    if(amount !== 0){
      change.push([unit, amount/100])
    }
    //if we do not payback any change due in this iteration of filtered cash in drawer then don't push anything
  });

  //condition check
  if (changeDue > 0){
    status = 'INSUFFICIENT_FUNDS';
    change = [];
  } else if (changeDue == 0 && changeDueCheck == cidSum){
    status = 'CLOSED';
    change = cid;
  }else {
    status = 'OPEN';
  }

  return {'status': status, 'change': change};
};

//test case 1
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//should return {status: "OPEN", change: [["QUARTER", 0.5]]}

//test case 2
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}