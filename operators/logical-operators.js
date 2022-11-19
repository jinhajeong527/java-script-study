// Logical AND(&&)
console.log(true && true);
// Logical OR(||)

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
let eligibleForLoanOR = highIncome || goodCreditScore;

console.log(eligibleForLoan);
console.log('Eligible', eligibleForLoanOR);

// NOT(!) OPERATOR
let applicationRefused = !eligibleForLoan; // it gives us the opposite
console.log('Application Refuesed', applicationRefused);

// Non Boolean Value
