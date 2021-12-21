//Codecademy Mixed Messages project

function randomNum (num){
    // Gets number from 0 to num-1
    return Math.floor(Math.random() * num)
}

// object of arrays to keep messages
const collectiveAdvice = {
    programLanguage: ['javascript', 'ruby', 'java', 'kotlin', 'php', 'go', 'c#'],
    level: ['Newbie', 'Intermidiate', 'Senior', 'Master', 'Gran Master'],
    tip: ['improve and improve', 'you should practice more', 'relax and learn']
  }
  
  // array with full message
  let nextStep = []
  
  // Iterate over the object considering the array length
  for(let item in collectiveAdvice) {
    let optionIdx = randomNum(collectiveAdvice[item].length)
  
    // use the object's properties to customize the message being added to collectiveAdvice 
    switch(item) {
      case 'programLanguage':
        nextStep.push(`Your skill path right now is a "${collectiveAdvice[item][optionIdx]}".`)
        break
      case 'level':
        nextStep.push(`Your next target should be: "${collectiveAdvice[item][optionIdx]}".`)
        break
      case 'tip':
        nextStep.push(`You should: "${collectiveAdvice[item][optionIdx]}".`)
        break
      default:
        nextStep.push('There is not enough info.')
    }
  }
  
  function formatWisdom(wisdom) {
    const formatted = nextStep.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(nextStep);