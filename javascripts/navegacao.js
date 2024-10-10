let Bt1 = document.querySelector("#bt1");
let BtMobile = document.querySelector("#bt-mobile");
let Bt2 = document.querySelector("#bt2");
let Bt3 = document.querySelector("#bt3");
let Bt4 = document.querySelector("#bt4");
let cor = document.querySelector("body");

let secao2 = document.querySelector("#secao-2");
let secao21 = document.querySelector("#secao-2-1");
let secao1 = document.querySelector("#secao-1");
let secao3 = document.querySelector("#secao-3");

Bt1.addEventListener("click", function () {
  
  secao1.style.display = "none";
  secao2.style.display = "initial";
  secao21.style.display = "initial";
  cor.style.backgroundColor = "#ffffff";
});

BtMobile.addEventListener("click", function () {
  
  secao1.style.display = "none";
  secao2.style.display = "initial";
  secao21.style.display = "initial";
  cor.style.backgroundColor = "#ffffff";
});


Bt3.addEventListener("click", function () {
  // secao2.style.display = "none";
  secao3.style.display = "initial";
  // cor.style.backgroundColor = "#eac3f6";
});

Bt4.addEventListener("click", function () {
  Bt4.style.display = "none";
});




function alternativa() {
  let bt2 = document.getElementById("bt2");
  bt2.style.display = "flex";
}

function verResposta() {
  let bt3 = document.getElementById("bt3");
  let parabens = document.getElementById("parabens");
  let conteudo1 = document.getElementById("conteudo1-1");
  bt3.style.display = "flex";
  parabens.style.display = "flex";
  conteudo1.style.display = "flex";
}











