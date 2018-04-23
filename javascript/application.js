// Página inicial
//Variáveis
  var aluno = {
    nome:"",
    matricula: "",
    pontos: 0,
    rankingPontos: 0
  };

  var perguntas, op1, op2, op3, op4, resposta;
  var salvarper;
  var salvarop1;
  var salvarop2;
  var salvarop3;
  var salvarop4;
  var salvarresp;
  var contador;
  var aluNome, aluMat;
  var possivel = false;
  var idrespp;
  var cont = 0; //contador das perguntas
  var resp1 = 0;  //Contador de respostas corretas
  var valorEscolhido = 0;
  var p1, para1, para2, para3, para4;
  var fase = 0;
  var imagem1;
  var imagemOculta;
  var multiplicador = 1;
  var fail = document.getElementById("fail");
  var correct = document.getElementById("correct");
  var fail2 = document.getElementById("fail2");
  var tempoPontos = 0.6;
  var ts = 0;

  //Mistura os emojis de um array

  // function mostrarPontos(){
  //     aluno = JSON.parse(localStorage.getItem("aluno"));
  //     $("#pontos").html(aluno.pontos);
  //   }

  function totalPerguntas(){
    $("#qtdPerguntas").html(perguntas.length);
  }


function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

      return array;
}

  function onLoadPergunta(){
      //resgatar do local storage as informações do aluno
      aluno = JSON.parse(localStorage.getItem("aluno"));
      // console.log(aluno);
      //shuffle(perguntas);
      for (i = 0; i < perguntas.length; i++)
        shuffle(perguntas[i].opcoes);
      // console.log(perguntas);
          p1 = $("#pergunta");
          para1 = $("#option1");
          para2 = $("#option2");
          para3 = $("#option3");
          para4 = $("#option4");
          contador = $("#multiplicador");
          possivel = true;

          imagem1 = $("#image");
          imagemOculta = $("#oculta");
          imagem1.html(perguntas[0].media);
          imagemOculta.html(perguntas[0].mediagrd);  

          p1[0].innerHTML = perguntas[0].pergunta;
          para1[0].innerHTML = perguntas[0].opcoes[0];
          para2[0].innerHTML = perguntas[0].opcoes[1];
          para3[0].innerHTML = perguntas[0].opcoes[2];
          para4[0].innerHTML = perguntas[0].opcoes[3];
          onloadfase1();

  }

  function onloadfase1(){
    fase = 1;
  }

$(document).ready(function(){
  //Começo da função do timer, que fica no canto
  var $timer = $("#timer");
  var $timer2 = $("#timerBig");
    function update() {
        var myTime = $timer.html();
        var ss = myTime.split(":");
        var dt = new Date();
        dt.setHours(0);
        dt.setMinutes(ss[0]);
        dt.setSeconds(ss[1]);
        
        if(myTime != "00:00"){
          if(possivel)
            var dt2 = new Date(dt.valueOf() - 1000);
          else
            var dt2 = new Date(dt.valueOf());
        } else {
          fail2.play();
          var dt2 = new Date(dt.valueOf());
          if(possivel)
            mostrarCerta(cont);
          possivel = false;
        }       
        var temp = dt2.toTimeString().split(" ");
        ts = temp[0].split(":");

        $timer.html(ts[1]+":"+ts[2]);
        if(myTime == "00:30"){
          $timer.removeClass("hud_itens").addClass("piscando");
        } else if(myTime == "00:10"){
          $timer.removeClass("piscando").addClass("piscandoForte");
        } else if(myTime == "00:00"){
          $timer.removeClass("piscandoForte").addClass("vermelho");
        } else if((myTime == "01:00") || (myTime == "03:00") || (myTime == "04:00")) {
          $timer.removeClass().addClass("hud_itens");
        }
      setTimeout(update, 1000);
    }
    //termino da função do timer

    setTimeout(update, 1000);

    //Função que salva os dados do jogador atual
    $("#Submit").click(function(event) {
      //Gravar no localstorage as informações do formulário
      aluMat = $("#matricula");
      aluNome = $("#nome");
      aluno.nome = aluNome[0].value;
      aluno.matricula = aluMat[0].value;
      //console.log(aluMat);
      localStorage.setItem('aluno', JSON.stringify(aluno));
      //Ir para a primeira pergunta
      location.href = "1 - regras.html";
      //}
    });
    
    //Mostrar e ocultar a imagem maior que está disponivel quando se clica na imagem menor
    $("#image").click(function(){
       $("#oculta").toggle();
    });
    
    $("#oculta").click(function(){
       $("#oculta").toggle();
    });

    //Botão inicial de jogar
    $("#jogar").click(function(){
        location.href = "fases/0 - formulario.html";   
    });

    //Botão inicial de jogar
    $("#fase1").click(function(){
        location.href = "1 - fase.html";   
    });
    //Botões de voltar
      //Botão de voltar de alguma fase, ou seja, de algum arquivo que está dentro da pasta "Fases"
    $("#voltar").click(function(){
      fase = 0;
      location.href = "../index.html";
    });
      //Botão de voltar da pasta raiz, ou seja, da mesma pasta que está o index.html
    $("#voltarr").click(function(){
      fase = 0;
      location.href = "index.html";
    });

    $("#ranking").click(function(){
      location.href = "2 - ranking.html";
    });

    //Função que calcula os pontos
    $(".opcoes").click(function(){
      if(possivel){
        possivel = false;
      //verifica se a resposta é igual a resposta certa
      if($(this)[0].innerHTML == perguntas[cont].resposta){
        //Adiciona a classe para deixar visivel o acert
        $(this).addClass("acertou");
        //Calcula os pontos
        aluno.pontos += perguntas[cont].valor;
        aluno.rankingPontos += perguntas[cont].valor+(ts[2]*tempoPontos);
        
        correct.play();
        //Atualiza pontuação na tela
        document.getElementById("pontos").innerHTML =  Math.ceil(aluno.rankingPontos);
        //Aumenta o multiplicador se possivel
        if(multiplicador<3)
          multiplicador++;

        //Não sei pq não demora 2s para ir para a próxima pergunta
        setTimeout(reforcoPositivo,3000);
      } else {
        //Adiciona a classe que deixa visivel o erro
        $(this).addClass("errou");
        fail.play();
        mostrarCerta(cont);
      }
    }
    });

    function mostrarCerta(cont){
      if(para1[0].innerHTML == perguntas[cont].resposta){
        para1.addClass("acertou");
      } else if(para2[0].innerHTML == perguntas[cont].resposta){
        para2.addClass("acertou");
      } else if(para3[0].innerHTML == perguntas[cont].resposta){
        para3.addClass("acertou");
      } else if(para4[0].innerHTML == perguntas[cont].resposta){
        para4.addClass("acertou");
      }
      //Reseta o multiplicador para 1
      multiplicador = 1;
      //Não sei pq não demora 2s para ir para a próxima pergunta
      setTimeout(reforcoPositivo,3000);
    }

    function reforcoPositivo(){
      //Substitue as perguntas e opções
      cont++;
      $("#option1").removeClass().addClass("opcoes");
      $("#option2").removeClass().addClass("opcoes");
      $("#option3").removeClass().addClass("opcoes");
      $("#option4").removeClass().addClass("opcoes");
      if(cont > (perguntas.length-1)){
        //Chamar a process.php para escrever os dados no arquivo data.json ,function(){location.href = "../2 - ranking.html";}
        $.post("../source-code/process.php", {nome:aluno.nome, matricula:aluno.matricula, pontos:aluno.pontos, ranking:aluno.rankingPontos},function(){location.href = "../2 - ranking.html";});        

      //// console.log(aluno);
      //localStorage.setItem('aluno', JSON.stringify(aluno));


        //location.href = "fim.html";
      } else {
        atualizaOpcoes();
      }
    }




    function atualizaOpcoes(){
      possivel = true;
 

          p1[0].innerHTML = perguntas[cont].pergunta;
          para1[0].innerHTML = perguntas[cont].opcoes[0];
          para2[0].innerHTML = perguntas[cont].opcoes[1];
          para3[0].innerHTML = perguntas[cont].opcoes[2];
          para4[0].innerHTML = perguntas[cont].opcoes[3];
      if (perguntas[cont].media) {
        document.getElementById("img_info").style.display = "block";
      } else {
        document.getElementById("img_info").style.display = "none";
      }
      imagem1.html(perguntas[cont].media);
      imagemOculta.html(perguntas[cont].mediagrd); 
      resetaTempo();
      $timer.removeClass().addClass("hud_itens");
    }

    function resetaTempo(){
      if (perguntas[cont].media == null) {
        $timer.html("01:00"); 
      } else {
        $timer.html("02:00"); 
        tempoPontos = 0.3;
      }   
    }

});