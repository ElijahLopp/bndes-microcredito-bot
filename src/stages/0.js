const microcreditQuestions = require('../questions/microcredit');
const _ = require('lodash')

const execute = () => {
  let bndesInformations = "         💰 *MICROCRÉDITO BNDES* 💰         \n\n"

  bndesInformations += "_Tem informações novas chegando... por hora segue o que separamos pra você_ 😜 \n\n"

  Object.keys(microcreditQuestions.questions).forEach((value) => {
    bndesInformations += `- *${value}.* ${microcreditQuestions.questions[value].description} \n\n`
  })

  bndesInformations += "_Observação: para saciar sua dúvida basta digitar a numeração indicada acima!_ ☝️😉"

  return [bndesInformations]
}

exports.execute = execute;