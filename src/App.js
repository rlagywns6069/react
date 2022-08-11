import './App.css';
import Box from './component/Box';
import { useState } from 'react';

const choice = {
  rock:  {
    name : "ROCK",
    img : "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg",
  },
  scissors : {
    name : "SCISSORS",
    img : "https://i.pinimg.com/originals/de/d7/34/ded734058afb08d065830124d3d97a54.png",
  },
  paper : {
    name : "PAPER",
    img : "https://previews.123rf.com/images/shambulin/shambulin1307/shambulin130700001/21126532-blank-paper-cartoon-character-with-arms.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [Result, setResult] = useState("WIN");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
    console.log(Result);
  };

const randomChoice = () => {
  let itemArray = Object.keys(choice);
  console.log(itemArray);
  let randomItem = Math.floor(Math.random() * itemArray.length);
  console.log(randomChoice);
  let final = itemArray[randomItem];
  return choice[final];
};
const judgement = (user, computer) => {
  console.log(user, computer);
  if (user.name == computer.name) {
    console.log(user.name);
    return "tie";
  } else if (user.name == "ROCK")
    return computer.name == "SCISSORS" ? "win" : "lose";
  else if (user.name == "SCISSORS")
  return computer.name == "PAPER" ? "win" : "lose";
  else if (user.name == "PAPER")
    return computer.name == "ROCK" ? "win" : "lose";
};

  return (
    <div>
      <div className='main'>
        <Box title="YOU" item={userSelect} result ={Result}/>
        <Box title="COMPUTER" item={computerSelect} result = {Result}/>
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
