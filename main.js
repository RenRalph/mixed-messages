//Codecademy Mixed Messages project

function randomNum (num){
    // Gets number from 0 to num-1
    return Math.floor(Math.random() * num)
}

// object of arrays to keep messages
const horoscope = {
    sign: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    luckyItem: ['A key', 'The number 7', 'Dice', 'A ladybird', 'Gemstones', 'An eye pendant', 'A pyramid', 'A horseshoe', 'A rabbits foot', 'A four-leaf clover', 'A cricket', 'A dreamcatcher'],
    advice: ["Don’t forget to look after your own well-being in your quest for success", "When you’re having a tough time just remember how strong you really are", "Remember that people care about you more than you think",
            "Never stop being yourself no matter what people say", "You’ve got a generous soul but be careful about those with bad intentions", "Don’t be so hard on yourself. You’ve got this", 
            "Your advice helps people more than you realize – keep spreading it", "Drop your guard from time to time and show people your true self", "Don’t worry so much about people judging you",
            "Don’t listen to the haters – it comes from a place of envy", "Think for yourself but don’t overthink things", "Don’t allow doubters and naysayers to stop you from going after what you really want"]
  }
  
  // array with full message
  let prediction = []
  
  // Iterate over the object considering the array length
  for(let item in horoscope) {
    let id = randomNum(horoscope[item].length)
  
    // use the object's properties to customize the message being added to collectiveAdvice 
    switch(item) {
      case 'sign':
        prediction.push(`If your sign is: "${horoscope[item][id]}".`)
        break
      case 'luckyItem':
        prediction.push(`Your lucky item should be: "${horoscope[item][id]}".`)
        break
      case 'advice':
        prediction.push(`Your advice: "${horoscope[item][id]}".`)
        break
      default:
        prediction.push('There is not enough info.')
    }
  }
  
  function formatWisdom(wisdom) {
    const formatted = prediction.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(prediction);