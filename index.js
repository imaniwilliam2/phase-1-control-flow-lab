function scuberGreetingForFeet(feet){
  if (feet >= 2500){
    return "No can do."
  }
  else if (feet <= 400){
   return "This one is on me!"
  }
  else if (feet > 400 && feet <=2000) {
    return "That will be twenty bucks."
  }
  else if (feet > 2000){
    return "I will gladly take your thirty bucks."
  }
  }

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : (city === "Pittsburgh" ? "No go." : "On my way!");
}



function switchOnCharmFromTip(tip){ 
  switch(tip){
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you."
    default:
      return "Bye."
  }

 
}