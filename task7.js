const calculate = (a, b, operator) => {
  if (operator == '+'){
    return a+b;
  }  else if (operator == '-'){
    return a-b;
  } else if (operator == '*'){
    return a*b;
  } else if((operator == '/') && (b!=0)){
    return a/b;
  } else if (b===0){
    return('Error');
  }
}
console.log(calculate(1,0,'+'));