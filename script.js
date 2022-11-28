let perguntas = [
{
    titulo: 'Ano de fundação',
    alternativas: ['1914', '1904', '1901', '1912'],
    correta: 0
},
{
    titulo: 'Maior artilheiro',
    alternativas: ['Servilio', 'Cesar Maluco', 'Heitor', 'Ademir da Guia'],
    correta: 2
},
{
    titulo: 'Jogador que mais atuou pelo clube',
    alternativas: ['Dudu', 'Waldemar Fiume', 'Leao', 'Ademir da Guia'],
    correta: 3
},
{
    titulo: 'Compositor do hino',
    alternativas: ['Antônio Sergi', 'Lauro D’Avila', 'Henrique Paganetto Roma', 'Cláudio Ribeiro'],
    correta: 0
},
{
    titulo: 'Apelido do estádio',
    alternativas: ['Maracanã', 'Pacaembu', 'Allianz Arena', 'Arena Palestra Itália'],
    correta: 3
},
{
    titulo: 'Primeiro nome do clube',
    alternativas: ['Palestra', 'Palmeiras', 'Società Sportiva Palestra Italia', 'União Palmeiras'],
    correta: 2
},
{
    titulo: 'Datas em que foi campeão da libertadores',
    alternativas: ['1999, 2021 e 2022', '2000, 2001 e 2022', '2020, 2021, 2022', '2002, 2004, 2020 e 2022'],
    correta: 0
},
{
    titulo: 'Técnico que mais ganhou títulos pelo clube',
    alternativas: ['Adriano Chuva', 'Oswaldo Brandão', 'Abel Braga', 'Vanderlei Luxemburgo'],
    correta: 3
},
{
    titulo: 'Capitão no título da libertadores 2021',
    alternativas: ['Gustavo Gómez', 'Gustavo Scarpa', 'Dudu', 'Murilo'],
    correta: 0
},
{
    titulo: 'Gol da vitória na final da libertadores de 2021',
    alternativas: ['Andreas Pereira', 'Rony', 'Deyverson', 'Raphael Veiga'],
    correta: 2
}
]

let app = {
start: function(){
    this.Atualpos = 0;
    this.TotalPontos = 0;
    let alts = document.querySelectorAll('.alternativa') // O ponto é usado, pois, está referênciando uma classe.
    alts.forEach((element, index)=>{
        element.addEventListener('click',()=>{
            this.checaResposta(index);
        })
    })
    this.atualizaPontos();
    app.mostraquestao(perguntas[this.Atualpos]);
},

mostraquestao: function(q){
    this.qatual = q;
    // mostrando o título
    let titleDiv = document.getElementById('titulo');
    titleDiv.textContent = q.titulo;
    // mostrando as alternativas
    let alts = document.querySelectorAll('.alternativa') // O ponto é usado, pois, está referênciando uma classe.
    alts.forEach(function(element, index){
        element.textContent = q.alternativas[index];
    })
},

Proximaperg: function(){
    this.Atualpos++;
    if(this.Atualpos == perguntas.length){
        this.Atualpos = 0;
    }
},

checaResposta: function(user){
    if(this.qatual.correta == user){
        console.log("Correta!")
        this.TotalPontos++;
        // this.mostraresposta();
    }
    else{
        console.log("Errada!")
         this.mostraresposta()
    }
    this.atualizaPontos();
    this.Proximaperg();
    this.mostraquestao(perguntas[this.Atualpos]);
},

atualizaPontos: function(){
    let scoreDiv = document.getElementById('pontos');
    scoreDiv.textContent = `Sua pontuação: ${this.TotalPontos}`;
},

mostraresposta: function(correto){
    let resultDiv = document.getElementById('result');
    let result = ''
    // formatar como mensagem será exibida
    if(correto == true){
        result = 'Resposta Correta';
    }
    else{
        // obtendo questão atual
        let pergunta = perguntas[this.Atualpos];
        // obtenha o indice da resposta correta da questão atual
        let cindice = pergunta.correta;
        // obtenha o texto da resposta correta da questão atual
        let ctexto = pergunta.alternativas[cindice];
        result = `Incorreto! Resposta Correta: ${ctexto}`;
    }
    resultDiv.textContent = result;

}
}

app.start();