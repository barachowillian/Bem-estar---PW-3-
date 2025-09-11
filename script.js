// Dicionário de humores com frases e imagens
const dadosHumor = {
    feliz: {
      frases: [
        "Sorria, você está iluminando o mundo!",
        "A alegria é contagiante, espalhe-a!",
        "A vida é mais bonita quando você sorri.",
        "A felicidade está nas pequenas coisas."
      ],
      imagens: [
        "img/alegria1.jpg",
        "img/alegria2.jpg",
        "img/alegria3.jpg",
        "img/alegria4.jpg"
      ]
    },
    triste: {
      frases: [
        "Tudo passa, dias difíceis também.",
        "Você é mais forte do que imagina.",
        "Permita-se sentir, mas não desista.",
        "O amanhã pode trazer coisas boas."
      ],
      imagens: [
        "img/triste1.jpg",
        "img/trsite2.jpg",
        "img/triste2.jpg",
        "img/triste4.jpg"
      ]
    },
    ansioso: {
      frases: [
        "Respire fundo, um passo de cada vez.",
        "Você consegue lidar com isso!",
        "A calma vem quando você desacelera.",
        "Confie no processo, tudo se ajeita."
      ],
      imagens: [
        "img/ansioso1.jpg",
        "img/ansioso2.jpg",
        "img/ansioso3.jpg",
        "img/ansioso4.jpg"
      ]
    },
    calmo: {
      frases: [
        "Sua paz interior é seu maior tesouro.",
        "A serenidade transforma qualquer ambiente.",
        "Continue nesse estado de equilíbrio.",
        "A calma é uma forma de força."
      ],
      imagens: [
        "img/calma1.jpg",
        "img/calma2.jpg",
        "img/calma3.jpg",
        "img/calma4.jpg"
      ]
    },
    motivado: {
      frases: [
        "Agora é a hora de agir, não espere mais!",
        "Sua determinação é a chave do sucesso.",
        "Mantenha o foco e siga em frente!",
        "Você é capaz de realizar coisas incríveis."
      ],
      imagens: [
        "img/motivado1.jpg",
        "img/motivado2.jpg",
        "img/motivado3.jpg",
        "img/motivado4.jpg"
      ]
    },
    cansado: {
      frases: [
        "Descanse, você merece uma pausa.",
        "Dormir bem é essencial para se cuidar.",
        "Um momento de descanso renova sua energia.",
        "Se permita relaxar, tudo bem desacelerar."
      ],
      imagens: [
        "img/cansado1.jpg",
        "img/descanso1.jpg",
        "img/descanso2.jpg",
        "img/descanso3.jpg"
      ]
    },
    irritado: {
      frases: [
        "Respire fundo antes de agir.",
        "Um momento de calma muda tudo.",
        "Transforme a energia em algo positivo.",
        "Você tem controle sobre suas atitudes."
      ],
      imagens: [
        "img/irritado1.jpg",
        "img/irritado2.jpg",
        "img/irritado3.jpg",
        "img/irritado4.jp"
      ]
    },
    apaixonado: {
      frases: [
        "O amor é o combustível da alma.",
        "Permita-se sentir intensamente!",
        "Espalhe amor e receba em dobro.",
        "Amar é a forma mais pura de viver."
      ],
      imagens: [
        "img/love1.jpg",
        "img/love2.jpg",
        "img/love3.jpg",
        "img/love4.jp"
      ]
    }
  };
  
  // Elementos do DOM
  const form = document.getElementById("humorForm");
  const humorInput = document.getElementById("humor");
  const humorRegistrado = document.getElementById("humorRegistrado");
  const motivacaoBtn = document.getElementById("motivacaoBtn");
  const mensagemMotivacional = document.getElementById("mensagemMotivacional");
  const imagemMotivacional = document.getElementById("imagemMotivacional");
  
  // Recuperar humor salvo
  window.onload = () => {
    const humorSalvo = localStorage.getItem("humor");
    if (humorSalvo) {
      humorRegistrado.textContent = `Último humor registrado: ${humorSalvo}`;
    }
  };
  
  // Registrar humor
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const humor = humorInput.value.toLowerCase().trim();
    if (humor) {
      humorRegistrado.textContent = `Você registrou: ${humor}`;
      localStorage.setItem("humor", humor);
      humorInput.value = "";
    }
  });
  
  // Mostrar motivação
  motivacaoBtn.addEventListener("click", () => {
    const humorAtual = localStorage.getItem("humor");
    
    if (humorAtual && dadosHumor[humorAtual]) {
      const frases = dadosHumor[humorAtual].frases;
      const imagens = dadosHumor[humorAtual].imagens;
  
      const frase = frases[Math.floor(Math.random() * frases.length)];
      const imagem = imagens[Math.floor(Math.random() * imagens.length)];
  
      mensagemMotivacional.textContent = frase;
      imagemMotivacional.innerHTML = `<img src="${imagem}" alt="${humorAtual}">`;
    } else {
      mensagemMotivacional.textContent = "Humor não cadastrado. Mas lembre-se: você é importante!";
      imagemMotivacional.innerHTML = "";
    }
  });
  