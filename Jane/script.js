
function rolarPara(idDestino) {
  const destino = document.getElementById(idDestino);
  if (destino) {
    destino.scrollIntoView({ behavior: "smooth" });
  }
}


const links = document.querySelectorAll(".link-colorido");

links.forEach(link => {
    link.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "#ff2b7a";
        this.style.color = "black";
    });

    link.addEventListener("mouseleave", function() {
        this.style.backgroundColor = "";
        this.style.color = "";
    });
});


const imagensModelo = [
    'img/ChatGPT Image 29 de jul. de 2026, 20_31_23.png',
    'img/modelo-banner.png'
];

const imgModeloElemento = document.getElementById("imagem-modelo");
let indiceModelo = 0;

function mudarFotoModelo() {
    indiceModelo = indiceModelo + 1;
    if (indiceModelo >= imagensModelo.length){
        indiceModelo = 0;
    }
    if (imgModeloElemento) {
        imgModeloElemento.src = imagensModelo[indiceModelo];
    }
}

setInterval(mudarFotoModelo, 3000);


const imagensProdutos = [
    'img/mascara_capilar_card.png',
    'img/oleo_finalizador_card.png',
    'img/condicionador_hidratacao_card.png',
    'img/shampoo_reconstrucao_card.png'
];

const imgProdutoElemento = document.getElementById("produto");
let indiceProduto = 0;

function mudarFotoProduto() {
    indiceProduto = indiceProduto + 1;
    if (indiceProduto >= imagensProdutos.length){
        indiceProduto = 0;
    }
    if (imgProdutoElemento) {
        imgProdutoElemento.src = imagensProdutos[indiceProduto];
    }
}

setInterval(mudarFotoProduto, 3000);






