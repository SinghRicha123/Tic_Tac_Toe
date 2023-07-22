import { useState } from "react";
import Card from '../card/Card';
import './grid.css';
import isWinner from "../../helpers/CheckWinner";


function Grid({numberOfCards}){
  const [board , setBoard] = useState(Array(numberOfCards).fill(""))
  const [turn , setTurn] = useState(false) ;
  const [winner , setWinner] = useState(null);
  
  function play(index){
  
    if(turn === true){
      board[index] = 'o'
    }else{
      board[index] = 'x'
    }
    const win = isWinner(board , turn ? 'o' : 'x');
    if(win){
        setWinner(win);
    }
    setBoard([...board]);
    setTurn(!turn);
  }
  function reset(){
    setTurn(true);
    setBoard(Array(numberOfCards).fill(""));
    setWinner(null)
  }
  return (
        <div className="grid-wrapper">
            {
                winner && (
                    <>
                    <h1 className="turn-heighlight">Winner is : {winner}</h1>
                    <button className="reset" onClick={reset}>Reset button</button>
                    </>
                )
            }
            <h1 className="turn-heighlight">Current Turn : {turn ? 'o' : 'x'}</h1>
            <div className="grid">
            {board.map((el , idx) => <Card key={idx} onPlay={play} player={el} index={idx}/>)}
        </div>

        </div>
    )
}
export default Grid;