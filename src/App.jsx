import { useState } from 'react'
import './App.css'
import Block from './components/Block'

function App() {
  const [block, setBlock] = useState(Array(9).fill(null)); //defalt array is null
  const [currentTurn, setCurrentTurn] = useState('X'); // default is x

  const checkWinner = (block) => {
    const winConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i]; // array destructuring
      if (block[a] && block[a] === block[b] && block[a] === block[c]) return true
    }
    return false;
  }

  const handleOnClick = (index) => {
    const newBlock = [...block];
    if(newBlock[index]) return ;
    newBlock[index] = currentTurn;
    setBlock(newBlock);

    setCurrentTurn(currentTurn === 'X' ? 'O' : 'X');
    if(checkWinner(newBlock)) { 
      alert(`${currentTurn} wins!`);
      setBlock(Array(9).fill(null));
      return;
    }
    if(newBlock.every(block => block !== null)) { //after draw the board gets cleared
      alert('Draw!');
      setBlock(Array(9).fill(null));
      return;
    }

  }
  return (
    <>
    <div className="board">
      <div className="row">
        <Block onClick={()=>handleOnClick(0)} value={block[0]}/>
        <Block onClick={()=>handleOnClick(1)} value={block[1]}/>
        <Block onClick={()=>handleOnClick(2)} value={block[2]}/>
      </div>
      <div className="row">
        <Block onClick={()=>handleOnClick(3)} value={block[3]}/>
        <Block onClick={()=>handleOnClick(4)} value={block[4]}/>
        <Block onClick={()=>handleOnClick(5)} value={block[5]}/>
      </div>
      <div className="row">
        <Block onClick={()=>handleOnClick(6)} value={block[6]}/>
        <Block onClick={()=>handleOnClick(7)} value={block[7]}/>
        <Block onClick={()=>handleOnClick(8)} value={block[8]}/>
      </div>
    </div>
    </>
  )
}

export default App
