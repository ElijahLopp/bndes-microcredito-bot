// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const stages = require('./stages/index');
const venomOptions = require('../venom_options.js');
const microcreditQuestions = require('./questions/microcredit');

venom
  .create(venomOptions)
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    const activateKeyOne = "BNDES";
    const activateKeyTwo = "Gostaria de tirar duvidas sobre microcredito!";
    const userMessageIsValidQuestion = Object.keys(microcreditQuestions.questions).includes(message.body);

    if (String(message.body).toUpperCase() === activateKeyOne || String(message.body) === activateKeyTwo || userMessageIsValidQuestion) {
      let stageResponse = 0; // This is a default stage (0)

      const userMessageIsNumber = Number.isInteger(Number(message.body));

      if (userMessageIsNumber) {
        if (userMessageIsValidQuestion) {
          stageResponse = message.body;
        }
      }

      let arrayOfResponses = stages.steps[stageResponse].obj.execute();
      for (response of arrayOfResponses) {
        client.sendText(message.from, response)
        .then((result) => {
          console.log('Result: ', result);
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
      }
    }
  });
}