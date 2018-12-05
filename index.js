// Write your code in this file!


function scuberGreetingForFeet(someValue){
  if (someValue <= 400) {
    return 'This one is on me!';
  } else if (someValue >=2000 && someValue <2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (someValue >= 2500) {
    return 'No can do.';
  }
 }
 

function ternaryCheckCity(destinationCity){
  if (destinationCity ==="NYC"){
    return 'Ok, sounds good.'
  } else if (destinationCity!=="NYC"){
    return 'No go.'
  }
}
function switchOnCharmFromTip (tipAmount) {
  switch(tipAmount){
    case "generous":
      return "Thank you so much."
    case 'not as generous':
      return "Thank you."
   break;
   default :
      return "Bye."
   }
}