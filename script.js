let perguntas = [
{
    titulo: 'Ano de fundacao',
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
    }
    else{
        console.log("Errada!")
    }
    this.atualizaPontos();
    this.Proximaperg();
    this.mostraquestao(perguntas[this.Atualpos]);
},

atualizaPontos: function(){
    let scoreDiv = document.getElementById('pontos');
    scoreDiv.textContent = `Sua pontuacao: ${this.TotalPontos}`;
}


}

app.start();