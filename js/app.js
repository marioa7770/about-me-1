

function greeting() {
  let userName = prompt("what is your name?");
  alert("Hi, " + userName + " Welcom to my site. lets play questionnaire game. I'll ask some question about my self and you try to guess the answer.");
  alert("this is so that you can get to know me alittle better.");
  alert("ready?")
}

function questionOne() {
  let answer = prompt("Do i like coding?");
  if (answer.toLowerCase() === "yes") {
    alert("Yes I do like coding!");
  }
  else if (answer.toLowerCase() === "no") {
    alert("You are wrong.");
  }
  console.log(answer);
}

function questionTwo() {
  let answer = prompt("I my favorit food mac & cheese?");
  if (answer.toLowerCase() === "yes") {
    alert("You are correct!");
  }
  else if (answer.toLowerCase() === "no") {
    alert("Ohh... Better luck next try.");
  }
  console.log(answer);
}

function questionThree() {
  let answer = prompt("Am I in to sports?");
  if (answer.toLowerCase() === "yes") {
    alert("Sorry thats the wrong answer.");
  }
  else if (answer.toLowerCase() === "no") {
    alert("Thats right!");
  }
  console.log(answer);
}

function questionFour() {
  let answer = prompt("Have I always lived hwew in Washington state?");
  if (answer.toLowerCase() === "yes") {
    alert("That's the wrong answer!");
  }
  else if (answer.toLowerCase() === "no") {
   alert("Correct! I was born and rased in Vietnam.");
  }
  console.log(answer);
}

function questionFive() {
  let answer = prompt("Do I have a dog?");
  if (answer.toLowerCase() === "yes") {
    alert("yes! She is a chuawa and her name is piggy because she eats like a pig.");
  }
  else if (answer.toLowerCase() === "no") {
    alert("Ahhhh... Too bad, thats the wrong answer!");
  }
  console.log(answer);
}

function goodBye(){
  alert("I hope you had fun. Fere to look around, bye. ")
}