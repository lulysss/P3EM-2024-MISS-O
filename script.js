const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A definição de big data são dados que contêm maior variedade, chegando em volumes crescentes e com mais velocidade. Isso também é conhecido como os três Vs. ",
        alternativas: [
            {
                texto: "Interessante! Não o conhecia",
                afirmacao: "afirmação"
            },
            {
                texto: "Curioso! já tinha ouvido falar",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você trabalharia com big data? Tudo que está disponível de forma online, de modo não sigiloso, por maior que seja a quantidade de informações, está ao alcance do Big Data, podendo ser agrupado conforme o interesse.",
        alternativas: [
            {
                texto: "Sim! combina com a minha área",
                afirmacao: "afirmação"
            },
            {
                texto: "Não tenho tanto interesse",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você ficou interessado em estudar mais sobre? entender o que é e como ele está revolucionando várias indústrias. Classificação: 4,5 de 528 avaliações 1,5 horas no total 5 aulas todos os níveis. Preço atual: US$19,99. Big Data, entender o que é e como ele está revolucionando várias indústrias.",
        alternativas: [
            {
                texto: "Sim! pesquisarei mais sobre",
                afirmacao: "afirmação"
            },
            {
                texto: "Não é muito do meu interesse...",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Espero te ver em breve! para mais informações e conhecimentos relacionados aos assuntos da área, visite frequentemente o nosso site! Obrigada pela atenção!",
        alternativas: [
            {
                texto: "Tenho intenções de voltar em breve!",
                afirmacao: "afirmação"
            },
            {
                texto: "Talvez algum dia...",
                afirmacao: "afirmação"
            }
        ]
    },
    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
