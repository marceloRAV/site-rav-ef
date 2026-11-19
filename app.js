const state = { aluno: null, ano: null, jogo: null, indice: 0, pontos: 0, respostas: [] };

const anosEl = document.getElementById("anos");
const jogosEl = document.getElementById("jogos");
const areaJogo = document.getElementById("area-jogo");
const listaHab = document.getElementById("lista-habilidades");

const JOGOS = [
  { id: "quiz", nome: "❓ Quiz" },
  { id: "memoria", nome: "🃏 Memória" },
  { id: "classificacao", nome: "📂 Classificação" },
  { id: "simulacao", nome: "💭 Simulação" },
  { id: "trilha", nome: "🗺️ Trilha" },
  { id: "cacaPalavras", nome: "🔍 Caça-palavras" },
  { id: "completarFrases", nome: "✏️ Completar frases" }
];

function confirmarAluno() {
  const nome = document.getElementById("inp-aluno").value.trim();
  if (!nome) return alert("Digite um nome.");
  state.aluno = nome;
  document.getElementById("aluno-nome").textContent = `👤 ${nome}`;
  document.getElementById("aluno-badge").style.display = "block";
  document.getElementById("modal-aluno").style.display = "none";
}

function registrarResposta(hab, correto) {
  if (hab) state.respostas.push({ hab, correto });
}

function salvarJogo(jogo) {
  if (!state.aluno || state.respostas.length === 0) return;
  const acertos = state.respostas.filter(r => r.correto).length;
  const total = state.respostas.length;
  const key = "rav-progresso";
  const dados = JSON.parse(localStorage.getItem(key) || "{}");
  if (!dados[state.aluno]) dados[state.aluno] = { jogos: [], habs: {} };
  dados[state.aluno].jogos.push({
    ano: state.ano, jogo, acertos, total, data: new Date().toISOString()
  });
  state.respostas.forEach(r => {
    if (!dados[state.aluno].habs[r.hab]) dados[state.aluno].habs[r.hab] = { acertos: 0, total: 0 };
    dados[state.aluno].habs[r.hab].total++;
    if (r.correto) dados[state.aluno].habs[r.hab].acertos++;
  });
  localStorage.setItem(key, JSON.stringify(dados));
  state.respostas = [];
}

Object.keys(DATA).forEach(ano => {
  const btn = document.createElement("button");
  btn.textContent = DATA[ano].nome;
  btn.onclick = () => selecionarAno(ano, btn);
  anosEl.appendChild(btn);
});
JOGOS.forEach(j => {
  const btn = document.createElement("button");
  btn.textContent = j.nome;
  btn.onclick = () => selecionarJogo(j.id, btn);
  jogosEl.appendChild(btn);
});

function selecionarAno(ano, btn) {
  state.ano = ano; state.jogo = null;
  document.querySelectorAll("#anos button").forEach(b => b.classList.remove("ativo"));
  btn.classList.add("ativo");
  document.querySelectorAll("#jogos button").forEach(b => b.classList.remove("ativo"));
  mostrarHabilidades();
  areaJogo.innerHTML = '<p class="placeholder">Agora escolha um jogo.</p>';
}

function selecionarJogo(jogo, btn) {
  if (!state.ano) { alert("Escolha um ano primeiro!"); return; }
  state.jogo = jogo; state.indice = 0; state.pontos = 0; state.respostas = [];
  document.querySelectorAll("#jogos button").forEach(b => b.classList.remove("ativo"));
  btn.classList.add("ativo");
  iniciarJogo();
}

function mostrarHabilidades() {
  listaHab.innerHTML = "";
  DATA[state.ano].habilidades.forEach(h => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${h.codigo}</strong> — ${h.descricao}`;
    listaHab.appendChild(li);
  });
}

function iniciarJogo() {
  const conteudo = DATA[state.ano][state.jogo];
  if (!conteudo || conteudo.length === 0) {
    areaJogo.innerHTML = '<p class="placeholder">Conteúdo em breve.</p>'; return;
  }
  const fn = { quiz: renderQuiz, memoria: renderMemoria, classificacao: renderClassificacao,
               simulacao: renderSimulacao, trilha: renderTrilha,
               cacaPalavras: renderCacaPalavras, completarFrases: renderCompletar }[state.jogo];
  fn(conteudo);
}

function renderQuiz(quiz) {
  const q = quiz[state.indice];
  if (!q) {
    areaJogo.innerHTML = `<div class="fim-jogo"><h2>🎉 Jogo concluído!</h2><p class="pontuacao">${state.pontos}/${quiz.length} • ${Math.round(state.pontos/quiz.length*100)}%</p><button class="btn-principal" onclick="iniciarJogo()" style="margin-top:16px">Jogar novamente</button><a href="professor.html" class="btn-principal" style="margin-left:10px;text-decoration:none;display:inline-block">Ver painel</a></div>`;
    salvarJogo("quiz"); return;
  }
  areaJogo.innerHTML = `
    <p class="progresso">Questão ${state.indice + 1}/${quiz.length} • ${q.hab}</p>
    <p class="quiz-pergunta">${q.pergunta}</p>
    <div class="quiz-opcoes" id="opcoes"></div>
    <div id="feed"></div>
    <div class="acoes"><span class="progresso">Acertos: ${state.pontos}</span><button class="btn-principal" id="prox" disabled>Próxima</button></div>`;
  const opcoesEl = document.getElementById("opcoes");
  q.opcoes.forEach((op, i) => {
    const b = document.createElement("button");
    b.textContent = op;
    b.onclick = () => {
      document.querySelectorAll("#opcoes button").forEach(x => x.disabled = true);
      const fb = document.getElementById("feed");
      const correto = i === q.correta;
      registrarResposta(q.hab, correto);
      if (correto) { b.classList.add("correta"); state.pontos++; fb.innerHTML = `<div class="feedback ok">✅ ${q.explicacao}</div>`; }
      else { b.classList.add("errada"); opcoesEl.children[q.correta].classList.add("correta"); fb.innerHTML = `<div class="feedback erro">❌ ${q.explicacao}</div>`; }
      document.getElementById("prox").disabled = false;
      document.querySelector(".acoes .progresso").textContent = `Acertos: ${state.pontos}`;
    };
    opcoesEl.appendChild(b);
  });
  document.getElementById("prox").onclick = () => { state.indice++; renderQuiz(quiz); };
}

function renderMemoria(lista) {
  const bloco = lista[0];
  const cartas = [];
  bloco.pares.forEach((p, i) => { cartas.push({ id: i, texto: p.a }); cartas.push({ id: i, texto: p.b }); });
  cartas.sort(() => Math.random() - 0.5);
  areaJogo.innerHTML = `<p class="progresso">${bloco.hab} • ${bloco.titulo}</p><div class="memoria-grid" id="grid-mem"></div><div id="feed-mem"></div>`;
  const grid = document.getElementById("grid-mem");
  let primeira = null, bloqueado = false, encontrados = 0;
  cartas.forEach(c => {
    const card = document.createElement("div");
    card.className = "card-memoria"; card.textContent = "?";
    card.dataset.id = c.id; card.dataset.texto = c.texto;
    card.onclick = () => {
      if (bloqueado || card.classList.contains("revelada") || card.classList.contains("encontrada")) return;
      card.textContent = c.texto; card.classList.add("revelada");
      if (!primeira) { primeira = card; return; }
      const match = primeira.dataset.id === card.dataset.id;
      registrarResposta(bloco.hab, match);
      if (match) {
        primeira.classList.add("encontrada"); card.classList.add("encontrada");
        primeira.classList.remove("revelada"); card.classList.remove("revelada");
        primeira = null; encontrados++;
        document.getElementById("feed-mem").innerHTML = `<div class="feedback ok">✅ Par! (${encontrados}/${bloco.pares.length})</div>`;
        if (encontrados === bloco.pares.length) {
          document.getElementById("feed-mem").innerHTML = '<div class="feedback ok">🎉 Todos os pares!</div>';
          salvarJogo("memoria");
        }
      } else {
        bloqueado = true; const seg = card;
        setTimeout(() => {
          primeira.textContent = "?"; seg.textContent = "?";
          primeira.classList.remove("revelada"); seg.classList.remove("revelada");
          primeira = null; bloqueado = false;
        }, 900);
      }
    };
    grid.appendChild(card);
  });
}

function renderClassificacao(lista) {
  const bloco = lista[0];
  areaJogo.innerHTML = `<p class="progresso">${bloco.hab} • ${bloco.titulo}</p><div class="classif-itens" id="itens"></div><div class="classif-categorias" id="cats"></div><div id="feed-cls" style="margin-top:16px"></div>`;
  let selecionado = null, acertos = 0;
  const itensEl = document.getElementById("itens");
  bloco.itens.forEach(it => {
    const el = document.createElement("div");
    el.className = "classif-item"; el.textContent = it.nome;
    el.onclick = () => {
      if (el.classList.contains("feito")) return;
      document.querySelectorAll(".classif-item").forEach(x => x.classList.remove("selecionado"));
      el.classList.add("selecionado"); selecionado = { el, item: it };
    };
    itensEl.appendChild(el);
  });
  const catsEl = document.getElementById("cats");
  bloco.categorias.forEach(cat => {
    const el = document.createElement("div");
    el.className = "classif-cat"; el.textContent = cat;
    el.onclick = () => {
      const fb = document.getElementById("feed-cls");
      if (!selecionado) { fb.innerHTML = '<div class="feedback">Escolha um item primeiro.</div>'; return; }
      const ok = selecionado.item.categoria === cat;
      registrarResposta(bloco.hab, ok);
      if (ok) {
        selecionado.el.classList.add("feito"); selecionado.el.classList.remove("selecionado");
        acertos++;
        fb.innerHTML = `<div class="feedback ok">✅ ${selecionado.item.nome} → ${cat}</div>`;
        selecionado = null;
        if (acertos === bloco.itens.length) { fb.innerHTML = '<div class="feedback ok">🎉 Todos classificados!</div>'; salvarJogo("classificacao"); }
      } else {
        fb.innerHTML = `<div class="feedback erro">❌ ${selecionado.item.nome} não é ${cat}.</div>`;
      }
    };
    catsEl.appendChild(el);
  });
}

function renderSimulacao(lista) {
  const bloco = lista[0]; const c = bloco.cenarios[0];
  areaJogo.innerHTML = `<p class="progresso">${bloco.hab} • ${bloco.titulo}</p><div class="sim-situacao">${c.situacao}</div><div class="sim-opcoes" id="sim-ops"></div><div id="feed-sim" style="margin-top:16px"></div>`;
  const ops = document.getElementById("sim-ops");
  c.opcoes.forEach(op => {
    const b = document.createElement("button");
    b.textContent = op.texto;
    b.onclick = () => {
      document.querySelectorAll("#sim-ops button").forEach(x => x.disabled = true);
      registrarResposta(bloco.hab, op.correta);
      const fb = document.getElementById("feed-sim");
      if (op.correta) { b.classList.add("correta"); fb.innerHTML = `<div class="feedback ok">✅ ${op.feedback}</div>`; }
      else {
        b.classList.add("errada");
        document.querySelectorAll("#sim-ops button").forEach((x, i) => { if (c.opcoes[i].correta) x.classList.add("correta"); });
        fb.innerHTML = `<div class="feedback erro">❌ ${op.feedback}</div>`;
      }
      salvarJogo("simulacao");
    };
    ops.appendChild(b);
  });
}

function renderTrilha(lista) {
  areaJogo.innerHTML = `<p class="progresso">Trilha — avance respondendo!</p><div class="trilha-board" id="board"></div><div id="trilha-area"></div>`;
  const board = document.getElementById("board");
  lista.forEach((_, i) => {
    const casa = document.createElement("div");
    casa.className = "casa"; casa.textContent = i + 1; casa.id = `casa-${i}`;
    board.appendChild(casa);
  });
  document.getElementById("casa-0").classList.add("atual");
  renderPerguntaTrilha(lista, 0);
}

function renderPerguntaTrilha(lista, idx) {
  const area = document.getElementById("trilha-area");
  const q = lista[idx];
  if (!q) { area.innerHTML = '<div class="fim-jogo"><h2>🏁 Trilha concluída!</h2></div>'; salvarJogo("trilha"); return; }
  area.innerHTML = `<p class="quiz-pergunta">Casa ${idx + 1}: ${q.pergunta}</p><div class="quiz-opcoes" id="trilha-ops"></div><div id="feed-trilha"></div>`;
  const ops = document.getElementById("trilha-ops");
  q.opcoes.forEach((op, i) => {
    const b = document.createElement("button");
    b.textContent = op;
    b.onclick = () => {
      document.querySelectorAll("#trilha-ops button").forEach(x => x.disabled = true);
      const fb = document.getElementById("feed-trilha");
      const ok = i === q.correta;
      registrarResposta(q.hab, ok);
      if (ok) {
        b.classList.add("correta");
        fb.innerHTML = '<div class="feedback ok">✅ Correto! Avançando...</div>';
        document.getElementById(`casa-${idx}`).classList.remove("atual");
        document.getElementById(`casa-${idx}`).classList.add("concluida");
        setTimeout(() => {
          if (idx + 1 < lista.length) {
            document.getElementById(`casa-${idx + 1}`).classList.add("atual");
            renderPerguntaTrilha(lista, idx + 1);
          } else {
            document.getElementById("trilha-area").innerHTML = '<div class="fim-jogo"><h2>🏁 Trilha concluída!</h2></div>';
            salvarJogo("trilha");
          }
        }, 1200);
      } else {
        b.classList.add("errada");
        ops.children[q.correta].classList.add("correta");
        fb.innerHTML = '<div class="feedback erro">❌ Errado. Tente novamente!</div>';
        setTimeout(() => renderPerguntaTrilha(lista, idx), 2000);
      }
    };
    ops.appendChild(b);
  });
}

function gerarGrid(palavras, tam = 10) {
  const grid = Array.from({ length: tam }, () => Array(tam).fill(""));
  const colocadas = [];
  [...palavras].sort((a, b) => b.length - a.length).forEach(palavra => {
    let ok = false, tentativas = 0;
    while (!ok && tentativas < 300) {
      tentativas++;
      const dir = Math.random() > 0.5 ? "H" : "V";
      const maxR = dir === "H" ? tam : tam - palavra.length;
      const maxC = dir === "H" ? tam - palavra.length : tam;
      const r = Math.floor(Math.random() * maxR);
      const c = Math.floor(Math.random() * maxC);
      let cabe = true;
      for (let i = 0; i < palavra.length; i++) {
        const rr = dir === "H" ? r : r + i;
        const cc = dir === "H" ? c + i : c;
        if (grid[rr][cc] && grid[rr][cc] !== palavra[i]) { cabe = false; break; }
      }
      if (cabe) {
        const cells = [];
        for (let i = 0; i < palavra.length; i++) {
          const rr = dir === "H" ? r : r + i;
          const cc = dir === "H" ? c + i : c;
          grid[rr][cc] = palavra[i];
          cells.push({ r: rr, c: cc });
        }
        colocadas.push({ palavra, cells });
        ok = true;
      }
    }
  });
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let r = 0; r < tam; r++) for (let c = 0; c < tam; c++)
    if (!grid[r][c]) grid[r][c] = letras[Math.floor(Math.random() * 26)];
  return { grid, colocadas };
}

function renderCacaPalavras(lista) {
  const bloco = lista[0];
  const { grid } = gerarGrid(bloco.palavras);
  const tam = grid.length;
  const encontradas = new Set();
  let selInicio = null;
  areaJogo.innerHTML = `<p class="progresso">${bloco.hab} • ${bloco.titulo}</p><p style="color:#546e7a;margin-bottom:12px">Clique na primeira e na última letra da palavra.</p><div class="cp-palavras" id="cp-palavras"></div><div class="cp-grid" id="cp-grid" style="grid-template-columns: repeat(${tam}, 1fr)"></div><div id="feed-cp" style="margin-top:12px"></div>`;
  const palavrasEl = document.getElementById("cp-palavras");
  function atualizarLista() { palavrasEl.innerHTML = bloco.palavras.map(p => `<span class="cp-tag ${encontradas.has(p) ? "ok" : ""}">${p}</span>`).join(""); }
  atualizarLista();
  const gridEl = document.getElementById("cp-grid");
  for (let r = 0; r < tam; r++) for (let c = 0; c < tam; c++) {
    const cell = document.createElement("div");
    cell.className = "cp-cell"; cell.textContent = grid[r][c];
    cell.dataset.r = r; cell.dataset.c = c;
    cell.onclick = () => clicarCelula(cell, r, c);
    gridEl.appendChild(cell);
  }
  function clicarCelula(cell, r, c) {
    const fb = document.getElementById("feed-cp");
    if (!selInicio) { selInicio = { r, c, el: cell }; cell.classList.add("sel"); return; }
    const dr = Math.sign(r - selInicio.r), dc = Math.sign(c - selInicio.c);
    if (dr !== 0 && dc !== 0 && Math.abs(r - selInicio.r) !== Math.abs(c - selInicio.c)) { selInicio.el.classList.remove("sel"); selInicio = null; return; }
    const cells = [];
    let cr = selInicio.r, cc = selInicio.c;
    while (true) {
      cells.push({ r: cr, c: cc });
      if (cr === r && cc === c) break;
      cr += dr; cc += dc;
    }
    const palavra = cells.map(x => grid[x.r][x.c]).join("");
    const invertida = palavra.split("").reverse().join("");
    const achou = bloco.palavras.find(p => (p === palavra || p === invertida) && !encontradas.has(p));
    if (achou) {
      cells.forEach(x => { gridEl.children[x.r * tam + x.c].classList.add("achada"); });
      encontradas.add(achou); atualizarLista();
      registrarResposta(bloco.hab, true);
      fb.innerHTML = `<div class="feedback ok">✅ Encontrou: ${achou}!</div>`;
      selInicio.el.classList.remove("sel"); selInicio = null;
      if (encontradas.size === bloco.palavras.length) { fb.innerHTML = '<div class="feedback ok">🎉 Todas encontradas!</div>'; salvarJogo("cacaPalavras"); }
    } else {
      fb.innerHTML = '<div class="feedback erro">❌ Não é uma palavra da lista.</div>';
      selInicio.el.classList.remove("sel"); selInicio = null;
    }
  }
}

function renderCompletar(lista) {
  const bloco = lista[0];
  let idx = 0;
  function render() {
    const f = bloco.frases[idx];
    if (!f) { areaJogo.innerHTML = '<div class="fim-jogo"><h2>✏️ Frases concluídas!</h2></div>'; salvarJogo("completarFrases"); return; }
    areaJogo.innerHTML = `<p class="progresso">${bloco.hab} • ${bloco.titulo} (${idx + 1}/${bloco.frases.length})</p><p class="completar-frase">${f.texto.replace("____", "<span class='blank'>____</span>")}</p><div class="completar-ops" id="cmp-ops"></div><div id="feed-cmp" style="margin-top:12px"></div>`;
    const ops = document.getElementById("cmp-ops");
    f.opcoes.forEach((op, i) => {
      const b = document.createElement("button");
      b.textContent = op;
      b.onclick = () => {
        document.querySelectorAll("#cmp-ops button").forEach(x => x.disabled = true);
        const ok = i === f.correta;
        registrarResposta(bloco.hab, ok);
        if (ok) {
          b.classList.add("correta"); document.querySelector(".blank").textContent = op;
          document.getElementById("feed-cmp").innerHTML = `<div class="feedback ok">✅ ${f.explicacao}</div>`;
        } else {
          b.classList.add("errada"); ops.children[f.correta].classList.add("correta");
          document.querySelector(".blank").textContent = f.opcoes[f.correta];
          document.getElementById("feed-cmp").innerHTML = `<div class="feedback erro">❌ ${f.explicacao}</div>`;
        }
        setTimeout(() => { idx++; render(); }, 1500);
      };
      ops.appendChild(b);
    });
  }
  render();
              }
