// data 
const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}

const phrase = ['很簡單', '很容易', '很快', '很正常']

// 8. function generate words
function taskPhrase(option_job) {
  return task[option_job][Math.floor(Math.random() * task[option_job].length)] + phrase[Math.floor(Math.random() * phrase.length)]
}

// 7. define words output function
function generateWords(option_job) {
  let answer = ''
  // define user choice & generate words
  if (!option_job) {
    answer = '請不要空白'
  }
  if (option_job === 'engineer') {
    answer = '工程師' + taskPhrase(option_job)
  }
  if (option_job === 'designer') {
    answer = '設計師' + taskPhrase(option_job)
  }
  if (option_job === 'entrepreneur') {
    answer = '創業家' + taskPhrase(option_job)
  }
  return answer
}

//export function
module.exports = generateWords