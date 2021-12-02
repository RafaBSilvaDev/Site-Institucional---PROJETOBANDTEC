const botaoComeçar = document.getElementById('start-btn')
const proximoBotao = document.getElementById('next-btn')
const containerPerguntaDisplay = document.getElementById('question-container')
const elementoPerguntas = document.getElementById('question')
const botoesRespostas = document.getElementById('answer-buttons')

let perguntasEmbaralhadas, perguntaAtual

botaoComeçar.addEventListener('click', começarJogo)
proximoBotao.addEventListener('click', () => {
  perguntaAtual++
  mostrarProximaQuestao()
})

function começarJogo() {
  botaoComeçar.classList.add('esconder')
  perguntasEmbaralhadas = perguntas.sort(() => Math.random() - .5)
  perguntaAtual = 0
  containerPerguntaDisplay.classList.remove('esconder')
  mostrarProximaQuestao()
}

function mostrarProximaQuestao() {
  resetar()
  mostrarPerguntas(perguntasEmbaralhadas[perguntaAtual])
}

function mostrarPerguntas(pergunta) {
  elementoPerguntas.innerText = pergunta.pergunta
  pergunta.respostas.forEach(resposta => {
    const button = document.createElement('button')
    button.innerText = resposta.text
    button.classList.add('btn')
    if (resposta.correct) {
      button.dataset.correct = resposta.correct
    }
    button.addEventListener('click', selecionarResposta)
    botoesRespostas.appendChild(button)
  })
}

function resetar() {
  clearStatusClass(document.body)
  proximoBotao.classList.add('esconder')
  while (botoesRespostas.firstChild) {
    botoesRespostas.removeChild(botoesRespostas.firstChild)
  }
}

function selecionarResposta(botao) {
  const selectedButton = botao.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(botoesRespostas.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (perguntasEmbaralhadas.length > perguntaAtual + 1) {
    proximoBotao.classList.remove('esconder')
  } else {
    botaoComeçar.innerText = 'Restart'
    botaoComeçar.classList.remove('esconder')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const perguntas = [
  {
    pergunta: 'Qual o duelista propício para se esconder e pegar todos por trás ?',
    respostas: [
      { text: 'Yoru', correct: true },
      { text: 'Phoenix', correct: false },
      { text: 'Reyna', correct: false },
      { text: 'Sage', correct: false }
    ]
  },
  {
    pergunta: 'Quem é o melhor professor da SPTECH?',
    respostas: [
      { text: 'Kaline', correct: true },
      { text: 'Brandão', correct: true },
      { text: 'Eduardo', correct: true },
      { text: 'Alex', correct: true }
    ]
  },
  {
    pergunta: 'Qual o nome da skill que deixa o chão congelado?',
    respostas: [
      { text: 'Sentinela', correct: false },
      { text: 'Orbe de lentidão', correct: true },
      { text: 'Orbe de cura', correct: false },
      { text: 'Ressureição', correct: false }
    ]
  },
  {
    pergunta: 'Qual ult permite o jogador a jogar 2 vezes?',
    respostas: [
      { text: 'Ressureição', correct: true },
      { text: 'Poço de Víbora', correct: false },
      { text: 'Furia do caçador', correct: false },
      { text: 'Renascimento', correct: true }
    ]
  }
]