import scissors from '../images/icon-scissors.svg';
import rock from '../images/icon-rock.svg';
import paper from '../images/icon-paper.svg';
import { useEffect, useState , useMemo} from 'react';
import Endmenu from './Endmenu.jsx';

function Computer(props) {
 
  const choices = ['rock', 'scissors', 'paper'];

  // Function to get the image source for the computer's choice

  const computerChoice = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }, [props.input, choices]);

  useEffect(() => {
    // Generate a random index to select the computer's choice
   
    console.log(computerChoice)
    // Determine the game result
    if (   
      (computerChoice === 'rock' && props.input === 'scissors') ||
      (computerChoice === 'paper' && props.input === 'rock') ||
      (computerChoice === 'scissors' && props.input === 'paper')) {
      props.setResult('Computer Won')  
      props.setScore(count => count =- 1);
    } else if (
      (computerChoice === 'scissors' && props.input === 'rock') ||
      (computerChoice === 'rock' && props.input === 'paper') ||
      (computerChoice === 'paper' && props.input === 'scissors')
    ) {
      props.setResult('User won');
      props.setScore(count => count =+ 1);
    } else {
      props.setResult('Draw');
      props.setScore(count => count = 0)
    }
  }, [props.input,computerChoice]);

  const getChoiceImage = (choice) => {
    if (choice === 'rock') {
      return rock;
    } else if (choice === 'paper') {
      return paper;
    } else {
      return scissors;
    }
  };

  return (
    <div>
      <img src={getChoiceImage(props.input)} alt="User's Choice" />
      <img src={getChoiceImage(computerChoice)} alt="Computer's Choice" />
      <p>{props.result}</p>
  

    </div>


  );
}

export default Computer;