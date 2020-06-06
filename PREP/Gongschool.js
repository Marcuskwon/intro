let rightNumber=50;
let leftNumber=10;
let operator='-';

if (operator === '+') {
  console.log(leftNumber + rightNumber);
} else if (operator === '-') {
  console.log(leftNumber - rightNumber);
} else if (operator ==='*') {
  console.log(leftNumber * rightNumber);
} else if (operator ==='/') {
   if (rightNumber ===0) {
     console.log('Are you fooking stupid');
   } else {
     console.log(leftNumber / rightNumber);
}} else {
  console.log('Incorrect Operator');
}



switch (operator) {
  case '+':
    console.log(leftNumber+rightNumber);
    break;
  case '-':
    console.log(leftNumber-rightNumber);
    break;
  case '*':
    console.log(leftNumber*rightNumber);
    break;
  case '/':
    if (rightNumber ===0) {
      console.log('Are you fooking stupid');
      break;
    }
    console.log(leftNumber/rightNumber);
    break;
  default:
    console.log('Incorrect Operator');
    break;
}

