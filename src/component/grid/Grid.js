import { useState } from "react";
import Card from '../card/Card';
import './grid.css';


function Grid({numberOfCards}){
  const [board] = useState(Array(numberOfCards).fill(""))
    return (
        <div className="grid">
            {board.map((el , idx) => <Card key={idx}/>)}
        </div>
    )
}
export default Grid;