// Write your code in this file!
let distance;

function scuberGreetingForFeet(distance) {
  let result
  
  if  (distance <= 400){
    result = 'This one is on me!'
  }
  if (distance > 2000){
    result = 'I will gladly take your thirty bucks.'
  }
  if (distance > 2500) {
    result = 'No can do.'
  }
  return result;
}


function ternaryCheckCity (city) {

  let cityresult = city == 'NYC' ? 'Ok, sounds good.':'No go.'
  
  return cityresult;
}

function switchOnCharmFromTip (tipValue) {
  let charm 
  switch (tipValue) {
    case 'generous':
      charm = 'Thank you so much.';
      break;
    case 'not as generous':
      charm = 'Thank you.';
      break;
    case 'thanks for everything':
      charm = 'Bye.'
  }
  return charm;
}

      