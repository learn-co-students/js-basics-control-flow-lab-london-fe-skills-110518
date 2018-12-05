// Write your code in this file!

//scuberGreetingForFeet function//
function scuberGreetingForFeet (someNumber){
  let greeting
    if (someNumber <= 400) { 
    greeting = 'This one is on me!';
    } else if (someNumber >= 2000 && someNumber<=2500) {
    greeting = 'I will gladly take your thirty bucks.';
    } else if (someNumber >= 2500) {
      greeting = 'No can do.';
    } else {
      greeting = 'Thanks for riding with me!';
    }
    return greeting;
}

//ternaryCheckCity function//
function ternaryCheckCity (someCity){
    let greeting
    if (someCity =='NYC') {
    greeting = 'Ok, sounds good.'; 
  } else {
    greeting = 'No go.';
  }
  return greeting;
}




//switchOnCharmFromTip function//
function switchOnCharmFromTip (tipGenerosity){
  let answer
  if (tipGenerosity =='generous'){
    answer = 'Thank you so much.';
  }
  else if (tipGenerosity == 'not as generous'){
    answer = 'Thank you.'
  }
  else {
    answer = 'Bye.'
  }
  return answer;
}
