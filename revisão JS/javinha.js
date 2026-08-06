//aula300
function mensagem() {
    let nome = prompt("Digite seu nome completo");
    if (nome) {
        alert("Parabéns, " + nome + ", você ganhou seu iphone, digite seu cpf!");
        let cpf = prompt("Digite seu CPF");
        if (cpf) {
            alert("Parabéns, " + nome + ", você ganhou seu iphone, digite seu endereço!");
        }
    }
}

//aula301
function trocarTexto() {

    document.getElementById("titulo").innerHTML = 
    "Javascript é muito bom!";
}

//exercicio
function trocarCor() {
    if (document.body.style.backgroundColor === "black") {

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
            } else {
                document.body.style.backgroundColor = "black";
                document.body.style.color = "white";
            }    
}

//aula302    
function trocarImagem(){
    document.getElementById("foto").src="https://veganbusiness.com.br/wp-content/uploads/2020/05/melhores-alimentos-veganos-scaled.jpg";
}

//exercio2
function trocarLista() {
    document.getElementById("lista").innerHTML =
    "<li>Maçã</li><li>Banana</li><li>Laranja</li><li>Uva</li>";
}

//final
function iniciarCadastro() {
    let campoNome = prompt("Digite seu nome completo");
    let campoIdade = prompt("Digite sua idade");
    let campoCor = prompt("Digite sua cor favorita em inglês");

    document.getElementById("nome").innerHTML = "Nome: " + campoNome;
    document.getElementById("idade").innerHTML = "Idade: " + campoIdade;
    document.getElementById("corEscolhida").innerHTML = "Cor Escolhida: " + campoCor;

    document.body.style.backgroundColor = campoCor;
    if (campoCor.toLowerCase() === "black") {
        document.body.style.color = "white";
    } else {
        document.body.style.color = "black";
    }

}

//aulahover
const botao = document.getElementById("meuBotao");

botao.addEventListener("mouseenter",function(){
    botao.style.backgroundColor = "red";
    botao.style.color = "black";

});
botao.addEventListener("mouseleave",function(){
    botao.style.backgroundColor = "";
    botao.style.color = "";

});

//carrossel
const imagens = [
    "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/praias-brasil-sancho.jpg",
    "https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2022/12/destinos-de-praia-brasil-barra-grande-pi.jpg",
    "https://cdn.sanity.io/images/nxpteyfv/goguides/3f743c5f97c7d4802855863563adfd6a28a0d57f-1600x1066.jpg",
];

const imgElemento = document.getElementById("imagemCarrossel");
let indiceAtual = 0;

function mudarFoto() {
    indiceAtual = indiceAtual + 1;
    if (indiceAtual >= imagens.length){
        indiceAtual = 0;
    }

    imgElemento.src = imagens[indiceAtual];
}

setInterval(mudarFoto,3000);
