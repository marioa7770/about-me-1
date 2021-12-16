

function greeting (){


  let userName = prompt('what is your name?');
  alert('Hi, ' + userName + ' Welcome to my site. lets play questionnaire game. I will ask you some question about my self and you try to guess yes or no.');
  alert('this is so that you can get to know me a little better.');
  alert('ready?');
}

function question 1 (){
  let answer = prompt('Do i like coding?');
  if (answer.toLowerCase() === 'yes') {
    alert('Yes I do like coding!');
  }
  else if (answer.toLowerCase() === 'no') {
    alert('You are wrong.');
  }
  console.log(answer);
}


  let answer = prompt('My favorite food mac & cheese?');
  if (answer.toLowerCase() === 'yes') {
    alert('You are correct!');
  }
  else if (answer.toLowerCase() === 'no') {
    alert('Ohh... Better luck next try.');
  }
  console.log(answer);



  let answer = prompt('Am I in to sports?');
  if (answer.toLowerCase() === 'yes') {
    alert('Sorry thats the wrong answer.');
  }
  else if (answer.toLowerCase() === 'no') {
    alert('Thats right!');
  }
  console.log(answer);



  let answer = prompt('Have I always lived here in Washington state?');
  if (answer.toLowerCase() === 'yes') {
    alert('That\'s the wrong answer!');
  }
  else if (answer.toLowerCase() === 'no') {
    alert('Correct! I was born and rased in Vietnam.');
  }
  console.log(answer);



  let answer = prompt('Do I have a dog?');
  if (answer.toLowerCase() === 'yes') {
    alert('yes! She is a chuawa and her name is piggy because she eats like a pig.');
  }
  else if (answer.toLowerCase() === 'no') {
    alert('Ahhhh... Too bad, thats the wrong answer!');
  }
  console.log(answer);


  alert('lets try a different game. this time you get 4 attempts.');
  let age = 33;
  let answer = prompt('How old do you think I am?');
  age == answer;
  let attempts = 4;
  while (attempts < 0) {
    if (answer == age) {
      alert('Yes! You are correct!');
      break;
    }
    else if (answer < age){
      attempts--;
      alert('your guess is too high. Try again.');
    }
    else if (answer > age){
      attempts--;
      alert('Your guess is too low. Try again.');

    }
  }
  if (attempts == 0)
    alert('Sorry your out of attempts. The answer is 33');

