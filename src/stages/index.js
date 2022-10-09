var flowStages = {
  0: {
    description: "Apresentando opcoes sobre o BNDES",
    obj: require('./0'),
  },
  1: {
    description: "Quem pode solicitar",
    obj: require('./1'),
  },
  2: {
    description: "O que pode ser financiado",
    obj: require('./2'),
  },
  3: {
    description: "Como solicitar",
    obj:  require('./3'),
  },
}

exports.steps = flowStages;