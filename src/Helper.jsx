let getNewTicket = (n) => {
  let arr = new Array(n);
  for(let i = 0; i<n; i++){
    arr[i] = Math.floor(Math.random()*10);
  }
  return arr;
};

let sumOfDigits = (arr) => {
  let sum = arr.reduce((a, b) => a + b, 0); // Sum all digits
  return sum;
};

export { getNewTicket, sumOfDigits };
