/* ════════════════════════════════════
   ESTADO GLOBAL
════════════════════════════════════ */
var songs = [
  "CHEER UP",
  "TT",
  "LIKEY",
  "What is Love?",
  "YES or YES",
  "Fancy",
  "Feel Special",
  "MORE & MORE",
  "I CAN'T STOP ME",
  "Alcohol-Free"
];

var editingIndex = null;

var SONG_ICONS = ["🎵", "🎶", "💗", "🌸", "✨", "🎤", "💜", "🌟", "🎀", "🦋"];

/* ════════════════════════════════════
   AUTENTICAÇÃO
════════════════════════════════════ */
function handleLogin() {
  var user      = document.getElementById("input-user").value;
  var pass      = document.getElementById("input-pass").value;
  var errorEl   = document.getElementById("login-error");
  var errorText = document.getElementById("login-error-text");

  if (user.trim() === "" || pass.trim() === "") {
    errorText.textContent = "Por favor, preencha usuário e senha.";
    errorEl.classList.add("visible");
    return;
  }

  if (user === "aluno" && pass === "fiap2025") {
    errorEl.classList.remove("visible");
    showScreen("list-screen");
    document.getElementById("btn-logout").style.display = "block";
    renderList();
  } else {
    errorText.textContent = "Usuário ou senha incorretos. Tente novamente.";
    errorEl.classList.add("visible");
  }
}

function logout() {
  document.getElementById("input-user").value = "";
  document.getElementById("input-pass").value = "";
  document.getElementById("login-error").classList.remove("visible");
  document.getElementById("btn-logout").style.display = "none";
  editingIndex = null;
  showScreen("login-screen");
}

/* ════════════════════════════════════
   NAVEGAÇÃO DE TELAS
════════════════════════════════════ */
function showScreen(screenId) {
  var screens = document.querySelectorAll(".screen");
  for (var i = 0; i < screens.length; i++) {
    screens[i].classList.remove("active");
  }
  document.getElementById(screenId).classList.add("active");
}

/* ════════════════════════════════════
   ADICIONAR MÚSICAS
════════════════════════════════════ */
function getNewSongInput() {
  return document.getElementById("input-new-song");
}

function showAddError(visible) {
  var el = document.getElementById("add-error");
  if (visible) {
    el.classList.add("visible");
  } else {
    el.classList.remove("visible");
  }
}

function addSongEnd() {
  var input = getNewSongInput();
  var val   = input.value.trim();

  if (val === "") {
    showAddError(true);
    input.focus();
    return;
  }

  showAddError(false);
  songs.push(val);
  input.value  = "";
  editingIndex = null;
  renderList();
}

function addSongStart() {
  var input = getNewSongInput();
  var val   = input.value.trim();

  if (val === "") {
    showAddError(true);
    input.focus();
    return;
  }

  showAddError(false);
  songs.unshift(val);
  input.value  = "";
  editingIndex = null;
  renderList();
}

/* ════════════════════════════════════
   EDITAR MÚSICA
════════════════════════════════════ */
function startEdit(index) {
  editingIndex = index;
  renderList();

  var editInput = document.getElementById("edit-input-" + index);
  if (editInput) {
    editInput.focus();
    editInput.select();
  }
}

function confirmEdit(index) {
  var editInput = document.getElementById("edit-input-" + index);
  var errorEl   = document.getElementById("edit-error-" + index);
  var val       = editInput.value.trim();

  if (val === "") {
    if (errorEl) {
      errorEl.classList.add("visible");
    }
    editInput.focus();
    return;
  }

  songs[index] = val;
  editingIndex = null;
  renderList();
}

function cancelEdit() {
  editingIndex = null;
  renderList();
}

/* ════════════════════════════════════
   REMOVER MÚSICA
   (por índice — nunca pelo valor)
════════════════════════════════════ */
function removeSong(index) {
  songs.splice(index, 1);

  if (editingIndex !== null) {
    if (editingIndex === index) {
      editingIndex = null;
    } else if (editingIndex > index) {
      editingIndex = editingIndex - 1;
    }
  }

  renderList();
}

/* ════════════════════════════════════
   RENDERIZAR LISTA
════════════════════════════════════ */
function renderList() {
  var listEl  = document.getElementById("song-list");
  var countEl = document.getElementById("song-count");
  var emptyEl = document.getElementById("empty-state");

  listEl.innerHTML = "";

  if (songs.length === 0) {
    countEl.innerHTML     = "Nenhuma música cadastrada";
    emptyEl.style.display = "block";
    return;
  }

  emptyEl.style.display = "none";
  countEl.innerHTML =
    "<strong>" + songs.length + "</strong> música" +
    (songs.length !== 1 ? "s" : "") + " na lista";

  for (var i = 0; i < songs.length; i++) {
    var item = document.createElement("div");
    var icon = SONG_ICONS[i % SONG_ICONS.length];

    if (editingIndex === i) {
      item.className = "song-item editing";
      item.innerHTML =
        '<div class="edit-row">' +
          '<span class="song-index">' + (i + 1) + '</span>' +
          '<span class="song-icon" aria-hidden="true">' + icon + '</span>' +
          '<input class="edit-input" id="edit-input-' + i + '" type="text"' +
            ' value="' + escapeHtml(songs[i]) + '" />' +
          '<div class="song-actions">' +
            '<button class="btn-confirm" onclick="confirmEdit(' + i + ')">✓ Salvar</button>' +
            '<button class="btn-cancel"  onclick="cancelEdit()">✕ Cancelar</button>' +
          '</div>' +
        '</div>' +
        '<div class="edit-error" id="edit-error-' + i + '">' +
          'O nome não pode ficar vazio — o item original será mantido.' +
        '</div>';
    } else {
      item.className = "song-item";
      item.innerHTML =
        '<span class="song-index">' + (i + 1) + '</span>' +
        '<span class="song-icon" aria-hidden="true">' + icon + '</span>' +
        '<span class="song-name">' + escapeHtml(songs[i]) + '</span>' +
        '<div class="song-actions">' +
          '<button class="btn-edit"   onclick="startEdit(' + i + ')">✎ Editar</button>' +
          '<button class="btn-delete" onclick="removeSong(' + i + ')">🗑 Remover</button>' +
        '</div>';
    }

    listEl.appendChild(item);
  }

  /* Atalhos de teclado no campo de edição */
  if (editingIndex !== null) {
    var editEl = document.getElementById("edit-input-" + editingIndex);
    if (editEl) {
      (function (idx) {
        editEl.addEventListener("keydown", function (e) {
          if (e.key === "Enter")  { confirmEdit(idx); }
          if (e.key === "Escape") { cancelEdit(); }
        });
      })(editingIndex);
    }
  }
}

/* ════════════════════════════════════
   HELPERS
════════════════════════════════════ */
function escapeHtml(str) {
  return str
    .replace(/&/g,  "&amp;")
    .replace(/</g,  "&lt;")
    .replace(/>/g,  "&gt;")
    .replace(/"/g,  "&quot;")
    .replace(/'/g,  "&#39;");
}

/* ════════════════════════════════════
   ATALHOS DE TECLADO — LOGIN
════════════════════════════════════ */
function initLoginKeys() {
  var fields = [
    document.getElementById("input-user"),
    document.getElementById("input-pass")
  ];
  for (var i = 0; i < fields.length; i++) {
    fields[i].addEventListener("keydown", function (e) {
      if (e.key === "Enter") { handleLogin(); }
    });
  }
}

/* ════════════════════════════════════
   ATALHO DE TECLADO — NOVA MÚSICA
════════════════════════════════════ */
function initNewSongKey() {
  document.getElementById("input-new-song").addEventListener("keydown", function (e) {
    if (e.key === "Enter") { addSongEnd(); }
  });
}

/* ════════════════════════════════════
   LIMPAR ERROS AO DIGITAR
════════════════════════════════════ */
function initInputListeners() {
  document.getElementById("input-user").addEventListener("input", function () {
    document.getElementById("login-error").classList.remove("visible");
  });
  document.getElementById("input-pass").addEventListener("input", function () {
    document.getElementById("login-error").classList.remove("visible");
  });
  document.getElementById("input-new-song").addEventListener("input", function () {
    showAddError(false);
  });
}

/* ════════════════════════════════════
   INICIALIZAÇÃO
════════════════════════════════════ */
initLoginKeys();
initNewSongKey();
initInputListeners();
