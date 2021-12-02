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
    botaoComeçar.innerText = 'Recomeçar'
    botaoComeçar.classList.remove('esconder')
    alert ("Você terminou o jogo")
    data.datasets[0].data.push(perguntasEmbaralhadas.reduce((acc, valorAtual) => acc + valorAtual.acertou, 0))
    chartGraph.update()

  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  console.log('correct', correct == 'true')
  if (correct == 'true') {
    element.classList.add('correct')
    perguntasEmbaralhadas[perguntaAtual].acertou = 1;
    sessionStorage.acertou = perguntasEmbaralhadas.reduce((acc, valorAtual) => acc + valorAtual.acertou, 0)
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
    acertou: 0,
    respostas: [
      { text: 'Yoru', correct: true },
      { text: 'Phoenix', correct: false },
      { text: 'Reyna', correct: false },
      { text: 'Sage', correct: false }
    ]
  },
  {
    pergunta: 'Quem é o melhor professor da SPTECH?',
    acertou: 0,
    respostas: [
      { text: 'Kaline', correct: true },
      { text: 'Brandão', correct: true },
      { text: 'Eduardo', correct: true },
      { text: 'Alex', correct: true }
    ]
  },
  {
    pergunta: 'Qual o nome da skill que deixa o chão congelado?',
    acertou: 0,
    respostas: [
      { text: 'Sentinela', correct: false },
      { text: 'Orbe de lentidão', correct: true },
      { text: 'Orbe de cura', correct: false },
      { text: 'Ressureição', correct: false }
    ]
  },
  {
    pergunta: 'Qual ult permite o jogador a jogar 2 vezes?',
    acertou: 0,
    respostas: [
      { text: 'Ressureição', correct: true },
      { text: 'Poço de Víbora', correct: false },
      { text: 'Furia do caçador', correct: false },
      { text: 'Renascimento', correct: true }
    ]
  },
  {
    pergunta: 'Qual o nome da bang com maior efeito a distância?',
    acertou: 0,
   respostas: [
    { text: 'Paranoia', correct: true },
    { text: 'Bola Curva', correct: false },
    { text: 'Olhar voraz', correct: false },
    { text: 'Estopim', correct: false }
  ]
},
{
  pergunta: 'Qual a skill principal do agente Phoenix?',
  acertou: 0,
  respostas: [
    { text: 'Mãos Quentes', correct: true },
    { text: 'Labareda', correct: false },
    { text: 'Renascimento', correct: false },
    { text: 'Bola Curva', correct: false }
  ]
},
{
  pergunta: 'Qual mapa possui 3 entrada para os atacantes?',
  acertou: 0,
  respostas: [
    { text: 'Ascent', correct: false },
    { text: 'Bind', correct: false },
    { text: 'Haven', correct: true },
    { text: 'Icebox', correct: false }
  ]
},
{
  pergunta: 'Qual rifle mata o adversário com apenas um hs?',
  acertou: 0,
  respostas: [
    { text: 'Operator', correct: false },
    { text: 'Spectre', correct: false },
    { text: 'Vandal', correct: true },
    { text: 'Frenzy', correct: false }
  ]
},
{
  pergunta: 'Qual rifle tem o spray mais fácil de controlar?',
  acertou: 0,
  respostas: [
    { text: 'Phantom', correct: true },
    { text: 'Vandal', correct: false },
    { text: 'Marshal', correct: false },
    { text: 'Guardian', correct: false }
  ]
},
{
  pergunta: 'Qual o nome da ULT do controlador "Omen"',
  acertou: 0,
  respostas: [
    { text: 'Tormenta de Aço', correct: false },
    { text: 'Onda Trovejante', correct: false },
    { text: 'Salto das sombras', correct: true },
    { text: 'Icebox', correct: false }
  ]
},
]