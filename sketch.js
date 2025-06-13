let questoes = [
  {
    pergunta: "quanto tempo demora para laranjeira dar frutos?",
    opcoes: ["4 anos", "2 anos", "5 anos", "3 anos"],
    correta: 0
  },
  {
    pergunta: "qual e a epoca correta de colheita milho?",
    opcoes: ["entre julho e outubro", "entre janeiro e dezembro", "entre fevereiro e dezembro", "entre maio e junho"],
    correta: 2
  },
  {
    pergunta: "quanto tempo demora para uma galinha botar ovo",
    opcoes: ["2 meses", "1 mes", "4 meses", "6 meses"],
    correta: 3
  },
  {
    pergunta: "qual e a epoca correta de colher trigo?",
    opcoes: ["entre julho e outubro", "entre fevereiro e dezembro", "entre maio e agosto", "entre outubro e dezembro"],
    correta: 3
  },
  {
    pergunta: "quantos litros de leite uma vaca produz por dia?",
    opcoes: ["5 litros", "30 litros", "20 litros", "10 litros"],
    correta: 1
  },
  {
    pergunta: "com quantos meses a vaca pode dar leite?",
    opcoes: ["10 meses", "12 meses", "7 meses", "5 meses"],
    correta: 0
  },
  {
    pergunta: "quanto tempo demora para a galinha chocar o ovo?",
    opcoes: ["10 dias", "15 dias", "20 dias", "30 dias"],
    correta: 2
  },
  {
    pergunta: "quantos ovos galinha bota por dia?",
    opcoes: ["1 ovo", "2 ovos", "3 ovos", "4 ovos"],
    correta: 0
  },
  {
    pergunta: "qual e a Expectativa de Vida de um porco",
    opcoes: [
      "20 anos",
      "30 anos",
      "10 anos",
      "5 anos"
    ],
    correta: 2
  },
  {
    pergunta: "com quanto tempo um porco pode começar a parir ?",
    opcoes: ["12 meses", "17 meses", "10 meses", "7 meses"],
    correta: 0
  }
];

let questaoAtual = 0;
let pontuacao = 0;
let resultado = "";
let quizFinalizado = false;

function setup() {
  createCanvas(700, 500);
  textSize(20);
}

function draw() {
  background(230);
  fill(0);

  if (quizFinalizado) {
    text("🎉 Quiz Finalizado!", 50, 50);
    text("Pontuação: " + pontuacao + " de " + questoes.length, 50, 100);
    text("Obrigado por participar!", 50, 150);
   
    textSize(16);
    fill(50);
    text("Fontes utilizadas como apoio:", 50, 220);
    text("- ChatGPT (Inteligência Artificial)", 50, 250);
    text("- Enciclopédia Humanidades (enciclopediahumanidades.org)", 50, 310);
    return;
  }

  let q = questoes[questaoAtual];
  text("Pergunta " + (questaoAtual + 1) + ": " + q.pergunta, 50, 50);

  for (let i = 0; i < q.opcoes.length; i++) {
    fill(200);
    rect(50, 100 + i * 60, 600, 50, 10);
    fill(0);
    text(q.opcoes[i], 60, 130 + i * 60);
  }

  fill(0);
  text(resultado, 50, 450);
}

function mousePressed() {
  if (quizFinalizado) return;

  let q = questoes[questaoAtual];
  for (let i = 0; i < q.opcoes.length; i++) {
    let x = 50;
    let y = 100 + i * 60;
    let w = 600;
    let h = 50;
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
      if (i === q.correta) {
        pontuacao++;
        resultado = "✅ Correto!";
      } else {
        resultado = "❌ Errado. Resposta correta: " + q.opcoes[q.correta];
      }

      setTimeout(() => {
        resultado = "";
        questaoAtual++;
        if (questaoAtual >= questoes.length) {
          quizFinalizado = true;
        }
      }, 1000);
    }
  }
}