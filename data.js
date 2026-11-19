const DATA = {
  "5": {
    nome: "5º Ano",
    habilidades: [
      { codigo: "EF05EF01", descricao: "Experimentar e fruir brincadeiras e jogos populares do Brasil e de matriz indígena e africana." },
      { codigo: "EF05EF06", descricao: "Diferenciar os conceitos de jogo e esporte, identificando manifestações." }
    ],
    quiz: [
      { hab: "EF05EF01", pergunta: "Qual dessas brincadeiras é de matriz africana?", opcoes: ["Escravos de Jó", "Peteca", "Bocha"], correta: 0, explicacao: "Escravos de Jó tem origem africana e é transmitida oralmente." },
      { hab: "EF05EF01", pergunta: "A peteca é uma brincadeira de origem:", opcoes: ["Indígena", "Europeia", "Asiática"], correta: 0, explicacao: "A peteca é um jogo tradicional indígena brasileiro." },
      { hab: "EF05EF01", pergunta: "Por que valorizar jogos de diferentes culturas?", opcoes: ["Para respeitar a diversidade cultural", "Apenas para ganhar competições", "Para excluir quem não conhece"], correta: 0, explicacao: "Reconhecer diferentes origens fortalece o respeito e a inclusão." },
      { hab: "EF05EF01", pergunta: "A amarelinha é uma brincadeira:", opcoes: ["Popular brasileira", "Esporte de rede", "Luta de combate"], correta: 0, explicacao: "É uma brincadeira popular transmitida entre gerações." },
      { hab: "EF05EF06", pergunta: "Qual a principal diferença entre jogo e esporte?", opcoes: ["O esporte tem regras oficiais e competição organizada", "O jogo sempre tem vencedor", "O esporte não tem regras"], correta: 0, explicacao: "O esporte é institucionalizado, com regras e federações." },
      { hab: "EF05EF06", pergunta: "O futebol é um:", opcoes: ["Esporte", "Jogo de rua apenas", "Luta"], correta: 0, explicacao: "O futebol é um esporte de invasão institucionalizado." },
      { hab: "EF05EF06", pergunta: "O pique-pega é um:", opcoes: ["Jogo", "Esporte de rendimento", "Esporte de rede"], correta: 0, explicacao: "É um jogo popular com regras flexíveis." }
    ],
    memoria: [
      { hab: "EF05EF01", titulo: "Brincadeiras e suas origens", pares: [
        { a: "Amarelinha", b: "Popular brasileira" }, { a: "Peteca", b: "Indígena" }, { a: "Escravos de Jó", b: "Africana" }, { a: "Cabra-cega", b: "Popular brasileira" }, { a: "Capoeira", b: "Africana" }, { a: "Bocha", b: "Europeia" }
      ]}
    ],
    classificacao: [
      { hab: "EF05EF06", titulo: "Jogo ou esporte?", categorias: ["Jogo", "Esporte"], itens: [
        { nome: "Pique-pega", categoria: "Jogo" }, { nome: "Futebol", categoria: "Esporte" }, { nome: "Amarelinha", categoria: "Jogo" }, { nome: "Basquete", categoria: "Esporte" }, { nome: "Cabra-cega", categoria: "Jogo" }, { nome: "Vôlei", categoria: "Esporte" }
      ]}
    ],
    simulacao: [
      { hab: "EF05EF01", titulo: "Inclusão nas brincadeiras", cenarios: [
        { situacao: "Um colega novo chegou e não conhece as brincadeiras da turma. O que você faz?", opcoes: [
          { texto: "Ensino com paciência e convido para brincar", correta: true, feedback: "Excelente! Incluir e ensinar fortalece o grupo." },
          { texto: "Deixo ele de lado, pois não sabe jogar", correta: false, feedback: "Excluir não é legal. Todos têm direito de participar." },
          { texto: "Rio dele por não conhecer a brincadeira", correta: false, feedback: "Zombar fere o colega. Valorize a diversidade!" }
        ]}
      ]}
    ],
    trilha: [
      { hab: "EF05EF01", pergunta: "Qual brincadeira é indígena?", opcoes: ["Peteca", "Pique-pega", "Futebol"], correta: 0 },
      { hab: "EF05EF06", pergunta: "Futebol é jogo ou esporte?", opcoes: ["Esporte", "Jogo", "Luta"], correta: 0 },
      { hab: "EF05EF01", pergunta: "A capoeira é de origem:", opcoes: ["Africana", "Europeia", "Asiática"], correta: 0 },
      { hab: "EF05EF01", pergunta: "A amarelinha é:", opcoes: ["Jogo popular", "Esporte olímpico", "Luta"], correta: 0 },
      { hab: "EF05EF01", pergunta: "Valorizar jogos de outras culturas é:", opcoes: ["Respeitar a diversidade", "Perda de tempo", "Coisa do passado"], correta: 0 }
    ],
    cacaPalavras: [
      { hab: "EF05EF01", titulo: "Brincadeiras tradicionais", palavras: ["AMARELINHA", "PETECA", "CAPOEIRA", "BOCHA", "PIQUE"] }
    ],
    completarFrases: [
      { hab: "EF05EF06", titulo: "Complete as frases", frases: [
        { texto: "O vôlei é um esporte de ____.", opcoes: ["rede", "invasão", "combate"], correta: 0, explicacao: "A bola passa por cima da rede." },
        { texto: "A capoeira é uma manifestação de origem ____.", opcoes: ["africana", "europeia", "asiática"], correta: 0, explicacao: "Herança afro-brasileira." },
        { texto: "O pique-pega é um ____.", opcoes: ["jogo", "esporte", "luta"], correta: 0, explicacao: "Jogo popular com regras flexíveis." }
      ]}
    ]
  },
  "6": {
    nome: "6º Ano",
    habilidades: [
      { codigo: "EF67EF03", descricao: "Experimentar e fruir esportes de rede/parede e técnico-combinatórios." },
      { codigo: "EF67EF11", descricao: "Experimentar danças criativas, valorizando a expressão corporal." }
    ],
    quiz: [
      { hab: "EF67EF03", pergunta: "O vôlei é um esporte de:", opcoes: ["Rede", "Invasão", "Combate"], correta: 0, explicacao: "A bola passa por cima da rede, sem contato físico direto." },
      { hab: "EF67EF03", pergunta: "Quantos toques a equipe pode dar antes de devolver a bola no vôlei?", opcoes: ["3", "5", "2"], correta: 0, explicacao: "São permitidos até 3 toques." },
      { hab: "EF67EF03", pergunta: "A ginástica artística é um esporte:", opcoes: ["Técnico-combinatório", "De rede", "De invasão"], correta: 0, explicacao: "Combina elementos técnicos em sequências coreografadas." },
      { hab: "EF67EF11", pergunta: "O hip-hop é uma dança de origem:", opcoes: ["Urbana", "Clássica", "Indígena"], correta: 0, explicacao: "Surgiu em comunidades urbanas nos EUA." },
      { hab: "EF67EF11", pergunta: "O que caracteriza a dança criativa?", opcoes: ["Improvisação e expressão pessoal", "Regras rígidas", "Apenas competição"], correta: 0, explicacao: "Valoriza a criação e a expressão individual." }
    ],
    memoria: [
      { hab: "EF67EF03", titulo: "Esportes e categorias", pares: [
        { a: "Vôlei", b: "Rede" }, { a: "Basquete", b: "Invasão" }, { a: "Ginástica artística", b: "Técnico-combinatório" }, { a: "Tênis de mesa", b: "Rede" }, { a: "Handebol", b: "Invasão" }, { a: "Nado sincronizado", b: "Técnico-combinatório" }
      ]}
    ],
    classificacao: [
      { hab: "EF67EF03", titulo: "Classifique os esportes", categorias: ["Rede/Parede", "Invasão", "Técnico-Combinatório"], itens: [
        { nome: "Vôlei", categoria: "Rede/Parede" }, { nome: "Basquete", categoria: "Invasão" }, { nome: "Ginástica artística", categoria: "Técnico-Combinatório" }, { nome: "Tênis de mesa", categoria: "Rede/Parede" }, { nome: "Handebol", categoria: "Invasão" }, { nome: "Patinação artística", categoria: "Técnico-Combinatório" }
      ]}
    ],
    simulacao: [
      { hab: "EF67EF03", titulo: "Cooperação no esporte", cenarios: [
        { situacao: "No vôlei, um colega sempre erra o saque. O que você faz?", opcoes: [
          { texto: "Ajudo ele a treinar o saque após a aula", correta: true, feedback: "Perfeito! O esporte coletivo valoriza a cooperação." },
          { texto: "Peço para o professor tirá-lo do time", correta: false, feedback: "Excluir não resolve. Todos estão aprendendo." },
          { texto: "Fico irritado e reclamo em voz alta", correta: false, feedback: "A crítica pública desmotiva." }
        ]}
      ]}
    ],
    trilha: [
      { hab: "EF67EF03", pergunta: "Vôlei é esporte de:", opcoes: ["Rede", "Invasão", "Combate"], correta: 0 },
      { hab: "EF67EF03", pergunta: "Toques permitidos no vôlei:", opcoes: ["3", "5", "2"], correta: 0 },
      { hab: "EF67EF03", pergunta: "Ginástica artística é:", opcoes: ["Técnico-combinatório", "Rede", "Invasão"], correta: 0 },
      { hab: "EF67EF11", pergunta: "Hip-hop é dança:", opcoes: ["Urbana", "Clássica", "Indígena"], correta: 0 },
      { hab: "EF67EF11", pergunta: "Dança criativa valoriza:", opcoes: ["Improvisação", "Regras rígidas", "Competição"], correta: 0 }
    ],
    cacaPalavras: [
      { hab: "EF67EF03", titulo: "Esportes e Danças", palavras: ["VOLEI", "BASQUETE", "HIPHOP", "FORRO", "GINASTICA"] }
    ],
    completarFrases: [
      { hab: "EF67EF11", titulo: "Complete as frases", frases: [
        { texto: "O vôlei é jogado em uma quadra dividida por uma ____.", opcoes: ["rede", "trave", "cesta"], correta: 0, explicacao: "A rede divide a quadra." },
        { texto: "O hip-hop é um estilo de dança que surgiu nos ____.", opcoes: ["centros urbanos", "campos", "palcos de ballet"], correta: 0, explicacao: "É uma dança urbana." }
      ]}
    ]
  },
  "8": {
    nome: "8º Ano",
    habilidades: [
      { codigo: "EF89EF01", descricao: "Experimentar diferentes papéis (jogador, árbitro, técnico) nos esportes." },
      { codigo: "EF08EF14", descricao: "Experimentar ginástica de condicionamento físico e de consciência corporal." }
    ],
    quiz: [
      { hab: "EF89EF01", pergunta: "Qual a função principal do árbitro?", opcoes: ["Aplicar as regras do jogo", "Marcar pontos", "Treinar a equipe"], correta: 0, explicacao: "O árbitro garante o cumprimento das regras." },
      { hab: "EF89EF01", pergunta: "O técnico é responsável por:", opcoes: ["Orientar a equipe e planejar estratégias", "Marcar os pontos", "Aplicar cartões"], correta: 0, explicacao: "O técnico orienta e planeja a atuação da equipe." },
      { hab: "EF89EF01", pergunta: "O que é fair play?", opcoes: ["Jogo limpo e respeito às regras", "Jogar para ganhar a qualquer custo", "Substituir jogadores"], correta: 0, explicacao: "Fair play significa ética e respeito no esporte." },
      { hab: "EF08EF14", pergunta: "O alongamento é importante para:", opcoes: ["Prevenir lesões e melhorar a flexibilidade", "Ganhar massa muscular rápido", "Aumentar a frequência cardíaca"], correta: 0, explicacao: "Alongar prepara o corpo e previne lesões." },
      { hab: "EF08EF14", pergunta: "O que é consciência corporal?", opcoes: ["Percepção do próprio corpo e movimentos", "Apenas força física", "Capacidade de correr rápido"], correta: 0, explicacao: "Envolve perceber postura, respiração e movimento." }
    ],
    memoria: [
      { hab: "EF08EF14", titulo: "Exercícios e benefícios", pares: [
        { a: "Alongamento", b: "Flexibilidade" }, { a: "Corrida", b: "Condicionamento cardiovascular" }, { a: "Musculação", b: "Força muscular" }, { a: "Meditação", b: "Consciência corporal" }, { a: "Pilates", b: "Postura e equilíbrio" }, { a: "Yoga", b: "Respiração e relaxamento" }
      ]}
    ],
    classificacao: [
      { hab: "EF89EF01", titulo: "Ação e papel no esporte", categorias: ["Jogador", "Árbitro", "Técnico"], itens: [
        { nome: "Marcar ponto", categoria: "Jogador" }, { nome: "Aplicar cartão", categoria: "Árbitro" }, { nome: "Substituir jogador", categoria: "Técnico" }, { nome: "Dar assistência", categoria: "Jogador" }, { nome: "Cronometrar a partida", categoria: "Árbitro" }, { nome: "Definir tática", categoria: "Técnico" }
      ]}
    ],
    simulacao: [
      { hab: "EF08EF14", titulo: "Autocuidado na prática", cenarios: [
        { situacao: "Você sente dor durante um exercício na aula. O que faz?", opcoes: [
          { texto: "Paro, aviso o professor e faço alongamento leve", correta: true, feedback: "Correto! Respeitar os limites do corpo previne lesões." },
          { texto: "Continuo para não parecer fraco", correta: false, feedback: "Ignorar a dor pode causar lesões graves." }
        ]}
      ]}
    ],
    trilha: [
      { hab: "EF89EF01", pergunta: "Função do árbitro:", opcoes: ["Aplicar regras", "Marcar pontos", "Treinar"], correta: 0 },
      { hab: "EF89EF01", pergunta: "Fair play significa:", opcoes: ["Jogo limpo", "Ganhar sempre", "Substituir"], correta: 0 },
      { hab: "EF08EF14", pergunta: "Alongamento previne:", opcoes: ["Lesões", "Cansaço", "Fome"], correta: 0 },
      { hab: "EF08EF14", pergunta: "Consciência corporal é:", opcoes: ["Perceber o próprio corpo", "Força física", "Velocidade"], correta: 0 },
      { hab: "EF89EF01", pergunta: "O técnico é responsável por:", opcoes: ["Orientar a equipe", "Marcar pontos", "Aplicar cartões"], correta: 0 }
    ],
    cacaPalavras: [
      { hab: "EF89EF01", titulo: "Esporte e Saúde", palavras: ["ALONGAMENTO", "AQUECIMENTO", "ARBITRO", "TECNICO", "FAIRPLAY"] }
    ],
    completarFrases: [
      { hab: "EF89EF01", titulo: "Complete as frases", frases: [
        { texto: "O ____ é responsável por garantir que as regras sejam cumpridas.", opcoes: ["árbitro", "jogador", "torcedor"], correta: 0, explicacao: "O árbitro apita e controla o jogo." },
        { texto: "Antes de iniciar uma atividade física intensa, devemos fazer o ____.", opcoes: ["aquecimento", "repouso", "jantar"], correta: 0, explicacao: "O aquecimento prepara os músculos." }
      ]}
    ]
  },
  "9": {
    nome: "9º Ano",
    habilidades: [
      { codigo: "EF89EF16", descricao: "Experimentar e fruir movimentos das lutas do mundo." },
      { codigo: "EF89EF01", descricao: "Experimentar papéis (jogador, árbitro, técnico) nos esportes de combate e de rede/parede." }
    ],
    quiz: [
      { hab: "EF89EF16", pergunta: "O judô é originário do:", opcoes: ["Japão", "Brasil", "Tailândia"], correta: 0, explicacao: "O judô foi criado no Japão por Jigoro Kano." },
      { hab: "EF89EF16", pergunta: "A capoeira é uma luta:", opcoes: ["Brasileira", "Japonesa", "Tailandesa"], correta: 0, explicacao: "A capoeira é uma manifestação afro-brasileira." },
      { hab: "EF89EF16", pergunta: "O muay thai é da:", opcoes: ["Tailândia", "China", "Coreia"], correta: 0, explicacao: "Também chamada de boxe tailandês." },
      { hab: "EF89EF01", pergunta: "A esgrima é uma luta com:", opcoes: ["Espadas", "Luvas", "Faixas"], correta: 0, explicacao: "Modalidade olímpica de combate com espadas." },
      { hab: "EF89EF01", pergunta: "Em uma luta, o árbitro é responsável por:", opcoes: ["Garantir a segurança e aplicar regras", "Torcer pela equipe", "Treinar atletas"], correta: 0, explicacao: "O árbitro zela pela integridade física dos atletas." }
    ],
    memoria: [
      { hab: "EF89EF16", titulo: "Lutas e países de origem", pares: [
        { a: "Judô", b: "Japão" }, { a: "Capoeira", b: "Brasil" }, { a: "Muay Thai", b: "Tailândia" }, { a: "Boxe", b: "Inglaterra" }, { a: "Taekwondo", b: "Coreia" }, { a: "Karatê", b: "Japão" }
      ]}
    ],
    classificacao: [
      { hab: "EF89EF16", titulo: "Luta e origem", categorias: ["Japão", "Brasil", "Tailândia"], itens: [
        { nome: "Judô", categoria: "Japão" }, { nome: "Capoeira", categoria: "Brasil" }, { nome: "Muay Thai", categoria: "Tailândia" }, { nome: "Karatê", categoria: "Japão" }, { nome: "Jiu-jitsu brasileiro", categoria: "Brasil" }, { nome: "Boxe tailandês", categoria: "Tailândia" }
      ]}
    ],
    simulacao: [
      { hab: "EF89EF01", titulo: "Ética nas lutas", cenarios: [
        { situacao: "Você perdeu uma luta. Como agir?", opcoes: [
          { texto: "Cumprimento o adversário e reconheço o resultado", correta: true, feedback: "Isso é fair play! Respeito é fundamental." },
          { texto: "Saio sem cumprimentar", correta: false, feedback: "Cumprimentar faz parte da etiqueta das lutas." }
        ]}
      ]}
    ],
    trilha: [
      { hab: "EF89EF16", pergunta: "Judô é originário do:", opcoes: ["Japão", "Brasil", "Tailândia"], correta: 0 },
      { hab: "EF89EF16", pergunta: "Capoeira é luta:", opcoes: ["Brasileira", "Japonesa", "Coreana"], correta: 0 },
      { hab: "EF89EF16", pergunta: "Muay thai é da:", opcoes: ["Tailândia", "China", "Japão"], correta: 0 },
      { hab: "EF89EF16", pergunta: "Boxe usa:", opcoes: ["Punhos", "Pernas", "Espadas"], correta: 0 },
      { hab: "EF89EF01", pergunta: "Fair play significa:", opcoes: ["Jogo limpo", "Trapaça", "Doping"], correta: 0 }
    ],
    cacaPalavras: [
      { hab: "EF89EF16", titulo: "Lutas do Mundo", palavras: ["JUDO", "CAPOEIRA", "MUAYTHAI", "BOXE", "KARATE", "TAEKWONDO"] }
    ],
    completarFrases: [
      { hab: "EF89EF16", titulo: "Complete as frases", frases: [
        { texto: "A ____ é uma luta que mistura dança e música, criada no Brasil.", opcoes: ["capoeira", "esgrima", "natação"], correta: 0, explicacao: "A capoeira é afro-brasileira." },
        { texto: "O ____ é uma arte marcial japonesa que significa 'caminho suave'.", opcoes: ["judô", "muay thai", "boxe"], correta: 0, explicacao: "Judô foi criado por Jigoro Kano." }
      ]}
    ]
  }
};
