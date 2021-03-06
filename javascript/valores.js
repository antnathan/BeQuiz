var tempo = [false,true,false,true,true,true];
var botoesResposta = [false,false,false,true,true,true];


//---------Fase-1------------

//Perguntas da primeira fase:
var perguntas1 = ["1 - O que é Behaviorismo?",
				"2 - Para os behavioristas, qual é o objeto de estudo da Psicologia?",
				"3 - Quais desses três autores são mais importantes influenciadores da teoria behaviorista?",
				"4 - Quem delineou a escola behaviorista de pensamento em 1913 com o texto “A psicologia como o behaviorista a vê”",
				"5 - Respectivamente, os comportamentos respondente e operante foram estudados por:",
				"6 - O comportamento respondente é:",
				"7 - O comportamento operante é:",
				"8 - Interações, estímulo-resposta (ambiente-sujeito) incondicionadas, nas quais certos eventos ambientais confiavelmente eliciam certas respostas do organismo que independem de aprendizagem são:",
				"9 - Para Skinner, a aprendizagem é resultante de:",
				"10 - O que é um reforço?",
				"11 - Estímulo que aumenta a frequência de um comportamento pelo acréscimo de alguma coisa como consequência desse comportamento:",
				"12 - Estímulo que aumenta a frequência de um comportamento pela ausência ou retirada de alguma coisa como consequência deste comportamento:",
				"13 - O que é punição?",
				"14 - Explique quem fez o experimento ilustrado na imagem a seguir e em que resultou:",
				"15 - Explique quem fez o experimento ilustrado na imagem a seguir e em que resultou:",
				"16 - Na situação retratatada na Tirinha, a menina está aplicando qual conceito do Behaviorismo.",
				"17 - Na situação retratatada na Tirinha, o olhar do Snoopy exemplifica qual qual conceito do Behaviorismo?"];

var media = [" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			"<img src='http://www.miluzinha.com/wp-content/uploads/2015/04/Pavlov3.gif' width='300px' height='auto'/> ",
			"<img src='http://4.bp.blogspot.com/_fgGTo5cZasU/Rp_RyHMqmcI/AAAAAAAAAE8/rVVE_eSFtvo/s400/caixa.jpg' width='300px' height='auto'/> ",
			"<img src='http://3.bp.blogspot.com/-4kLOL3d78wU/Upk7y6pH4WI/AAAAAAAAACM/YNL901lWmEE/s1600/SOCIO+3.jpg' width='300px' height='auto'/>",
			"<img src='http://3.bp.blogspot.com/-t28VSg3SiRA/T6MGXr2vP7I/AAAAAAAACcg/2H79mHzLGh4/s1600/refor%C3%A7o+positivo+%282%29.jpg' width='300px' height='auto'/>"];			


var mediaMaior = [" ",
				" ",
				" ",
				" ",
				" ",
				" ",
				" ",
				" ",
				" ",
				" ",
				" ",
				" ",
				" ",
				"<img src='http://www.miluzinha.com/wp-content/uploads/2015/04/Pavlov3.gif' width='auto' height='100%'/> ",
                "<img src='http://4.bp.blogspot.com/_fgGTo5cZasU/Rp_RyHMqmcI/AAAAAAAAAE8/rVVE_eSFtvo/s400/caixa.jpg' width='auto' height='100%'/>",
                "<img src='http://3.bp.blogspot.com/-4kLOL3d78wU/Upk7y6pH4WI/AAAAAAAAACM/YNL901lWmEE/s1600/SOCIO+3.jpg' width='auto' height='100%'/>",
                "<img src='http://3.bp.blogspot.com/-t28VSg3SiRA/T6MGXr2vP7I/AAAAAAAACcg/2H79mHzLGh4/s1600/refor%C3%A7o+positivo+%282%29.jpg' width='auto' height='100%'/>"];			

//Opção 1 das perguntas:
var op1 = ["Estudo do pensamento e do comportamento humano.",
			"O comportamento",
			"Pavlov, BF Skinner, John B. Watson, E. Thorndike",
			"BF Skinner",
			"Watson e Skinner.",
			"É todo aquele comportamento que é involuntário, que acontece mediante as contingências.",
			"É todo aquele comportamento que é involuntário, que acontece mediante as contingências.",
			"Extinção",
			"A ausência de estímulos durante a ação do sujeito para dar-lhe completa liberdade de ação.",
			"Qualquer estímulo que diminui a frequência de uma resposta errada pela apresentação da resposta correta",
			"Reforço positivo",
			"Reforço positivo",
			"A retirada de um estímulo agradável",
			"Ivan Petrovich Pavlov, o experimento consistiu em entender que algumas respostas são aprendidas através de situações agradáveis ou aversivas simultâneas ou imediatamente posteriores. Resultou no desenvolvimento de estudo da psicologia comportamental.",
			"Ivan Petrovich Pavlov, um rato privado de alimento era colocado em uma caixa, que ao ser colocado nela, produzia vários comportamentos. Ao fazer o comportamento desejado, conseguia alimento ou água. Quando não, recebia choques. Resultou no conceito de condicionamento operante.",
			"Reforço positivo",
			"Reforço positivo"];

//Opção 2 das perguntas:
var op2 = ["Estudo de como os seres humanos interagem com o meio.",
			"Os estímulos",
			"Pavlov, BF Skinner, Max Wertheimer, John B. Watson",
			"Ivan Pavlov",			
			"Skinner e Watson.",
			"É um comportamento voluntário e que opera nas contingências.",
			"É um comportamento voluntário e que opera nas contingências.",
			"Punição",
			"A apresentação de estímulos anteriores a uma ação do sujeito.",
			"A repetição de um comportamento que leva a uma melhor aprendizagem",
			"Punição",
			"Punição",
			"Uma consequência desagradável que leva o indivíduo a dar a resposta correta",
			"Ivan Petrovich Pavlov, o experimento consistiu em entender sobre os reflexos incondicionados. Resultou no desenvolvimento experimentos em laboratórios com animais.",
			"Ivan Petrovich Pavlov, um rato privado de alimento era colocado em uma caixa, que ao ser colocado nela, produzia vários comportamentos. Ao fazer o comportamento desejado, conseguia alimento ou água. Quando não, recebia choques. Resultou no conceito de condicionamento respondente.",
			"Reforço negativo",
			"Reforço negativo"];

//Opção 3 das perguntas:
var op3 = ["Estudo das interações entre o indivíduo e o ambiente, entre as ações do indivíduo (respostas) e o ambiente (estimulações).",
			"As respostas que os animais ou os sujeitos apresentam",
			"Max Wertheimer, Kurt Koffka, Wolfgang Kohler, BF Skinner",
			"John B. Watson",
			"Thorndike e Skinner.",
			"É todo aquele comportamento que é involuntário, que opera nas contingências.",
			"É todo aquele comportamento que é involuntário, que opera nas contingências.",
			"Comportamento operante",
			"A ação do sujeito sobre o meio e o efeito dela resultante.",
			"Qualquer estímulo que aumenta a frequência de uma resposta",
			"Extinção",
			"Extinção",
			"Qualquer estímulo que diminui a frequência de um comportamento",
			"Frederic Skinner, o experimento consistiu em entender que algumas respostas são aprendidas através de situações agradáveis ou aversivas simultâneas ou imediatamente posteriores. Resultou no desenvolvimento de estudo da psicologia comportamental.",
			"Frederic Skinner, um rato privado de alimento era colocado em uma caixa, que ao ser colocado nela, produzia vários comportamentos. Ao fazer o comportamento desejado, conseguia alimento ou água. Quando não, recebia choques. Resultou no conceito de condicionamento operante.",
			"Punição",
			"Punição"];
//Opção 4 das perguntas:
var op4 = ["Estudo do comportamento dos animais e relacionamento desse comportamento com os homens.",
			"A mente humana",
			"BF Skinner, John B. Watson, Max Wertheimer, Kurt Koffka",
			"Edward Thorndike",
			"Skinner e Thorndike.",
			"É um comportamento voluntário e que acontece mediante as contingências.",
			"É um comportamento voluntário e que acontece mediante as contingências.",
			"Comportamentos reflexos ou respondentes",
			"Um ação espontânea do sujeito sobre o meio.",
			"Algo que o indivíduo acha agradável, também conhecida como recompensa",
			"Reforço Negativo",
			"Reforço Negativo",
			"Qualquer estímulo que aumenta a frequência de um comportamento desejado através de uma experiência dolorosa ou desagradável",
			"Frederic Skinner, o experimento consistiu em entender sobre os reflexos incondicionados. Resultou no desenvolvimento experimentos em laboratorios com animais.",
			"Frederic Skinner, um rato privado de alimento era colocado em uma caixa, que ao ser colocado nela, produzia vários comportamentos. Ao fazer o comportamento desejado, conseguia alimento ou água. Quando não, recebia choques. Resultou no conceito de condicionamento respondente.",
			"Extinção",
			"Extinção"];

//Respostas corretas:
var resposta1 = ["Estudo das interações entre o indivíduo e o ambiente, entre as ações do indivíduo (respostas) e o ambiente (estimulações).",
				"O comportamento",
				"Pavlov, BF Skinner, John B. Watson, E. Thorndike",
				"John B. Watson",
				"Watson e Skinner.",
				"É todo aquele comportamento que é involuntário, que acontece mediante as contingências.",
				"É um comportamento voluntário e que opera nas contingências.",
				"Comportamentos reflexos ou respondentes",
				"A apresentação de estímulos anteriores a uma ação do sujeito.",
				"Qualquer estímulo que aumenta a frequência de uma resposta",
				"Reforço positivo",
				"Reforço Negativo",
				"Qualquer estímulo que diminui a frequência de um comportamento",
				"Ivan Petrovich Pavlov, o experimento consistiu em entender que algumas respostas são aprendidas através de situações agradáveis ou aversivas simultâneas ou imediatamente posteriores. Resultou no desenvolvimento de estudo da psicologia comportamental.",
				"Frederic Skinner, um rato privado de alimento era colocado em uma caixa, que ao ser colocado nela, produzia vários comportamentos. Ao fazer o comportamento desejado, conseguia alimento ou água. Quando não, recebia choques. Resultou no conceito de condicionamento operante.",
				"Reforço negativo",
				"Reforço positivo"];

//------Fim-da-fase-1---------

