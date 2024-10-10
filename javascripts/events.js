
//Questões 1

//Alternativa----------------------------

const alternativas = document.querySelectorAll("#alternativa");
const alternativas1 = document.querySelectorAll("#alternativa1");
const alternativas2 = document.querySelectorAll("#alternativa2");
const alternativas3 = document.querySelectorAll("#alternativa3");
const alternativas4 = document.querySelectorAll("#alternativa4");
const alternativas5 = document.querySelectorAll("#alternativa5");
const checkAnswerButton = document.getElementById("bt2");

let answered = false;

const correctAnswerIndex = 0; // Índice baseado em zero, neste caso, a resposta correta é 'Inadequada'
const correctAnswerIndex1 = 2; // Índice baseado em zero, neste caso, a resposta correta é 'Inadequada'
const correctAnswerIndex2 = 1; // Índice baseado em zero, neste caso, a resposta correta é 'Inadequada'
const correctAnswerIndex3 = 2; // Índice baseado em zero, neste caso, a resposta correta é 'Inadequada'
const correctAnswerIndex4 = 0; // Índice baseado em zero, neste caso, a resposta correta é 'Inadequada'
const correctAnswerIndex5 = 1; // Índice baseado em zero, neste caso, a resposta correta é 'Inadequada'

// Função para verificar a resposta
function bt2() {
  if (answered) return;

  answered = true;

  //alternativa----------------
  for (let i = 0; i < alternativas.length; i++) {
    alternativas[i].disabled = true; // Desabilita os botões de alternativas

    if (i === correctAnswerIndex) {
      alternativas[i].classList.add("correct");
      alternativas[i].innerHTML =
        '<img src="./assets/icone_certo.png" class="icone">' +
        alternativas[i].innerHTML;
    } else if (alternativas[i].classList.contains("selected")) {
      alternativas[i].classList.add("incorrect");
      alternativas[i].innerHTML =
        '<img src="./assets/icone_errado.png" class="icone">' +
        alternativas[i].innerHTML;
    }
  }

  //alternativa1---------------
  for (let i = 0; i < alternativas1.length; i++) {
    alternativas1[i].disabled = true; // Desabilita os botões de alternativas

    if (i === correctAnswerIndex1) {
      alternativas1[i].classList.add("correct");
      alternativas1[i].innerHTML =
        '<img src="./assets/icone_certo.png" class="icone">' +
        alternativas1[i].innerHTML;
    } else if (alternativas1[i].classList.contains("selected")) {
      alternativas1[i].classList.add("incorrect");
      alternativas1[i].innerHTML =
        '<img src="./assets/icone_errado.png" class="icone">' +
        alternativas1[i].innerHTML;
    }
  }

   //alternativa2---------------
   for (let i = 0; i < alternativas2.length; i++) {
    alternativas2[i].disabled = true; // Desabilita os botões de alternativas

    if (i === correctAnswerIndex2) {
      alternativas2[i].classList.add("correct");
      alternativas2[i].innerHTML =
        '<img src="./assets/icone_certo.png" class="icone">' +
        alternativas2[i].innerHTML;
    } else if (alternativas2[i].classList.contains("selected")) {
      alternativas2[i].classList.add("incorrect");
      alternativas2[i].innerHTML =
        '<img src="./assets/icone_errado.png" class="icone">' +
        alternativas2[i].innerHTML;
    }
  }

    //alternativa3---------------
    for (let i = 0; i < alternativas3.length; i++) {
      alternativas3[i].disabled = true; // Desabilita os botões de alternativas
  
      if (i === correctAnswerIndex3) {
        alternativas3[i].classList.add("correct");
        alternativas3[i].innerHTML =
          '<img src="./assets/icone_certo.png" class="icone">' +
          alternativas3[i].innerHTML;
      } else if (alternativas3[i].classList.contains("selected")) {
        alternativas3[i].classList.add("incorrect");
        alternativas3[i].innerHTML =
          '<img src="./assets/icone_errado.png" class="icone">' +
          alternativas3[i].innerHTML;
      }
    }

      //alternativa4---------------
      for (let i = 0; i < alternativas4.length; i++) {
        alternativas4[i].disabled = true; // Desabilita os botões de alternativas
    
        if (i === correctAnswerIndex4) {
          alternativas4[i].classList.add("correct");
          alternativas4[i].innerHTML =
            '<img src="./assets/icone_certo.png" class="icone">' +
            alternativas4[i].innerHTML;
        } else if (alternativas4[i].classList.contains("selected")) {
          alternativas4[i].classList.add("incorrect");
          alternativas4[i].innerHTML =
            '<img src="./assets/icone_errado.png" class="icone">' +
            alternativas4[i].innerHTML;
        }
      }

      //alternativa5---------------
      for (let i = 0; i < alternativas5.length; i++) {
        alternativas5[i].disabled = true; // Desabilita os botões de alternativas
    
        if (i === correctAnswerIndex5) {
          alternativas5[i].classList.add("correct");
          alternativas5[i].innerHTML =
            '<img src="./assets/icone_certo.png" class="icone">' +
            alternativas5[i].innerHTML;
        } else if (alternativas5[i].classList.contains("selected")) {
          alternativas5[i].classList.add("incorrect");
          alternativas5[i].innerHTML =
            '<img src="./assets/icone_errado.png" class="icone">' +
            alternativas5[i].innerHTML;
        }
      }

}  


//alternativa--------------
// Adiciona evento de clique aos botões de alternativas
for (let i = 0; i < alternativas.length; i++) {
  alternativas[i].addEventListener("click", function () {
    if (answered) return;

    // Remove a classe 'selected' de todas as alternativas
    for (let j = 0; j < alternativas.length; j++) {
      alternativas[j].classList.remove("selected");
    }

    // Adiciona a classe 'selected' à alternativa clicada
    this.classList.add("selected");
  });
}


//alternativa1--------------
// Adiciona evento de clique aos botões de alternativas
for (let i = 0; i < alternativas1.length; i++) {
  alternativas1[i].addEventListener("click", function () {
    if (answered) return;

    // Remove a classe 'selected' de todas as alternativas
    for (let j = 0; j < alternativas1.length; j++) {
      alternativas1[j].classList.remove("selected");
    }

    // Adiciona a classe 'selected' à alternativa clicada
    this.classList.add("selected");
  });
}

//alternativa2--------------
// Adiciona evento de clique aos botões de alternativas
for (let i = 0; i < alternativas2.length; i++) {
  alternativas2[i].addEventListener("click", function () {
    if (answered) return;

    // Remove a classe 'selected' de todas as alternativas
    for (let j = 0; j < alternativas2.length; j++) {
      alternativas2[j].classList.remove("selected");
    }

    // Adiciona a classe 'selected' à alternativa clicada
    this.classList.add("selected");
  });
}

//alternativa3--------------
// Adiciona evento de clique aos botões de alternativas
for (let i = 0; i < alternativas3.length; i++) {
  alternativas3[i].addEventListener("click", function () {
    if (answered) return;

    // Remove a classe 'selected' de todas as alternativas
    for (let j = 0; j < alternativas3.length; j++) {
      alternativas3[j].classList.remove("selected");
    }

    // Adiciona a classe 'selected' à alternativa clicada
    this.classList.add("selected");
  });
}

//alternativa4--------------
// Adiciona evento de clique aos botões de alternativas
for (let i = 0; i < alternativas4.length; i++) {
  alternativas4[i].addEventListener("click", function () {
    if (answered) return;

    // Remove a classe 'selected' de todas as alternativas
    for (let j = 0; j < alternativas4.length; j++) {
      alternativas4[j].classList.remove("selected");
    }

    // Adiciona a classe 'selected' à alternativa clicada
    this.classList.add("selected");
  });
}

//alternativa5--------------
// Adiciona evento de clique aos botões de alternativas
for (let i = 0; i < alternativas5.length; i++) {
  alternativas5[i].addEventListener("click", function () {
    if (answered) return;

    // Remove a classe 'selected' de todas as alternativas
    for (let j = 0; j < alternativas5.length; j++) {
      alternativas5[j].classList.remove("selected");
    }

    // Adiciona a classe 'selected' à alternativa clicada
    this.classList.add("selected");
  });
}

checkAnswerButton.addEventListener("click", bt2)




//Questões 2



function verificarTexto(){
        let texto1 = document.getElementById('descricao-1').value;
        let resultado1 = "Seu texto: " + texto1;

        let texto2 = document.getElementById('descricao-2').value;
        let resultado2 = "Seu texto: " + texto2;

        let texto3 = document.getElementById('descricao-3').value;
        let resultado3 = "Seu texto: " + texto3;

        let texto4 = document.getElementById('descricao-4').value;
        let resultado4 = "Seu texto: " + texto4;

        let texto5 = document.getElementById('descricao-5').value;
        let resultado5 = "Seu texto: " + texto5;

        let texto6 = document.getElementById('descricao-6').value;
        let resultado6 = "Seu texto: " + texto6;

       
        
  

document.getElementById('resultado-1').textContent = resultado1
document.getElementById('resultado-2').textContent = resultado2
document.getElementById('resultado-3').textContent = resultado3
document.getElementById('resultado-4').textContent = resultado4
document.getElementById('resultado-5').textContent = resultado5
document.getElementById('resultado-6').textContent = resultado6


document.getElementById('campoTexto-1').style.display= 'none'
document.getElementById('campoTexto-2').style.display= 'none'
document.getElementById('campoTexto-3').style.display= 'none'
document.getElementById('campoTexto-4').style.display= 'none'
document.getElementById('campoTexto-5').style.display= 'none'
document.getElementById('campoTexto-6').style.display= 'none'
document.getElementById('resultado-1').style.display='flex'
document.getElementById('resultado-2').style.display='flex'
document.getElementById('resultado-3').style.display='flex'
document.getElementById('resultado-4').style.display='flex'
document.getElementById('resultado-5').style.display='flex'
document.getElementById('resultado-6').style.display='flex'
document.getElementById('descrições-possiveis-1').style.display='flex'
document.getElementById('descrições-possiveis-2').style.display='flex'
document.getElementById('descrições-possiveis-3').style.display='flex'
document.getElementById('descrições-possiveis-4').style.display='flex'
document.getElementById('descrições-possiveis-5').style.display='flex'
document.getElementById('descrições-possiveis-6').style.display='flex'

document.getElementById('secao-4').style.display= 'flex'



}


// ---------secao 4-----------

const checkbox = document.getElementById('item1');
const checkbox2 = document.getElementById('item2');
const checkbox3 = document.getElementById('item3');
const checkbox4 = document.getElementById('item4');
const checkbox5 = document.getElementById('item5');
const checkbox6 = document.getElementById('item6');
const checkbox7 = document.getElementById('item7');

const checkboxLabel = document.querySelector('#checkbox-label');
const checkboxLabel2 = document.querySelector('#checkbox-label2');
const checkboxLabel3 = document.querySelector('#checkbox-label3');
const checkboxLabel4 = document.querySelector('#checkbox-label4');
const checkboxLabel5 = document.querySelector('#checkbox-label5');
const checkboxLabel6 = document.querySelector('#checkbox-label6');
const checkboxLabel7 = document.querySelector('#checkbox-label7');


checkbox.addEventListener('change', function() {
  checkboxLabel.classList.toggle('checked', this.checked);
});

checkbox2.addEventListener('change', function() {
  checkboxLabel2.classList.toggle('checked', this.checked);
});

checkbox3.addEventListener('change', function() {
  checkboxLabel3.classList.toggle('checked', this.checked);
});

checkbox4.addEventListener('change', function() {
  checkboxLabel4.classList.toggle('checked', this.checked);
});

checkbox5.addEventListener('change', function() {
  checkboxLabel5.classList.toggle('checked', this.checked);
});

checkbox6.addEventListener('change', function() {
  checkboxLabel6.classList.toggle('checked', this.checked);
});

checkbox7.addEventListener('change', function() {
  checkboxLabel7.classList.toggle('checked', this.checked);
});







      






        
    

        

