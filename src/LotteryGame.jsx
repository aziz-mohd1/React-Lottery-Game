import { useState } from "react";
import { getNewTicket, sumOfDigits } from './Helper';

function LotteryGame() {
  let [ticket, setTicket] = useState(null);

  return (
    <>
      <h1 >Lottery Game <span style={{color: "gold"}}>{(ticket && sumOfDigits(ticket)) === 15 ? " : Congrulations You Won!" : " : Try"}</span> </h1>
      <h2>Lottery Ticket: {ticket}</h2>
      <button onClick={() => getNewTicket(setTicket)}>Get New Ticket</button>
    </>
  );
//   ***imp: setTicket is a React hook function and cannot be called outside the component unless you pass it as an argument.
}

export default LotteryGame;
