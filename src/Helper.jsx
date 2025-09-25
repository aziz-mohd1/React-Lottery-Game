let getNewTicket = (setTicket) => {
  setTicket(Math.floor(Math.random() * 900) + 100);
};

let sumOfDigits = (num) => {
  let digits = num.toString().split(""); // Convert 456 → ["4","5","6"]
  let sum = digits.reduce((acc, digit) => acc + Number(digit), 0); // Sum all digits
  return sum;
};

export {getNewTicket, sumOfDigits};