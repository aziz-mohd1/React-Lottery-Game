import { useState } from "react";
import { getNewTicket, sumOfDigits } from './Helper';
import Ticket from "./Ticket";
import TicketNum from "./TicketNum";

function LotteryGame({n=3, winningSum=15}) {
  let [ticket, setTicket] = useState(getNewTicket(n));
  let isWinning = sumOfDigits(ticket) === winningSum;
  console.log(sumOfDigits(ticket));
  
  let buyTicket = () => {
    setTicket(getNewTicket(n));
  };

  return (
    <>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket}/>
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h2>{isWinning && "Congratulations, you Won!"}</h2>
    </>
  );
//   ***imp: setTicket is a React hook function and cannot be called outside the component unless you pass it as an argument.
}

export default LotteryGame;
