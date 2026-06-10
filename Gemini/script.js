// --- ESTADO DA APLICAÇÃO ---
// Array simples de strings com pelo menos 3 itens iniciais
let twiceSongs = ["Fancy", "Feel Special", "What is Love?"];

// --- FUNÇÕES DE INICIALIZAÇÃO ---
function initApp() {
    setupEventListeners();
    renderList();
}

function setupEventListeners() {
    // Login
    document.getElementById('btn-login').addEventListener('click', handleLogin);
    
    // Adicionar itens
    document.getElementById('btn-add-start').addEventListener('click', addSongToStart);
    document.getElementById('btn-add-end').addEventListener('click', addSongToEnd);
}

// --- FUNÇÕES DE LOGIN ---
function handleLogin() {
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    const errorContainer = document.getElementById('login-error');

    if (user === '' || pass === '') {
        showError(errorContainer, 'Os campos de usuário e senha não podem estar vazios.');
        return;
    }

    if (user === 'aluno' && pass === 'fiap2025') {
        clearError(errorContainer);
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('app-screen').style.display = 'block';
    } else {
        showError(errorContainer, 'Credenciais incorretas. Tente novamente.');
    }
}

// --- FUNÇÕES DE UTILIDADE ---
function showError(element, message) {
    element.textContent = message;
}

function clearError(element) {
    element.textContent = '';
}

// --- FUNÇÕES DE CRUD ---
function renderList() {
    const listContainer = document.getElementById('song-list');
    listContainer.innerHTML = ''; // Limpa a lista atual

    for (let i = 0; i < twiceSongs.length; i++) {
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.className = 'song-name';
        span.textContent = twiceSongs[i];

        const divControls = document.createElement('div');
        divControls.className = 'controls';

        const btnEdit = document.createElement('button');
        btnEdit.textContent = 'Editar';
        btnEdit.onclick = function() { editSong(i); };

        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Remover';
        btnDelete.className = 'delete-btn';
        btnDelete.onclick = function() { deleteSong(i); }; // Usa o índice para remoção (posição)

        divControls.appendChild(btnEdit);
        divControls.appendChild(btnDelete);
        
        li.appendChild(span);
        li.appendChild(divControls);

        listContainer.appendChild(li);
    }
}

function addSongToStart() {
    const inputElement = document.getElementById('song-input');
    const errorContainer = document.getElementById('song-error');
    const newSong = inputElement.value.trim();

    if (newSong === '') {
        showError(errorContainer, 'O nome da música não pode ficar vazio.');
        return;
    }

    clearError(errorContainer);
    twiceSongs.unshift(newSong); // Adiciona no início
    inputElement.value = '';
    renderList();
}

function addSongToEnd() {
    const inputElement = document.getElementById('song-input');
    const errorContainer = document.getElementById('song-error');
    const newSong = inputElement.value.trim();

    if (newSong === '') {
        showError(errorContainer, 'O nome da música não pode ficar vazio.');
        return;
    }

    clearError(errorContainer);
    twiceSongs.push(newSong); // Adiciona no fim
    inputElement.value = '';
    renderList();
}

function editSong(index) {
    const errorContainer = document.getElementById('song-error');
    clearError(errorContainer);

    const currentName = twiceSongs[index];
    const newName = prompt('Editar nome da música:', currentName);

    // Validação: se cancelar (null) ou confirmar vazio, mantém a original
    if (newName !== null) {
        const trimmedName = newName.trim();
        if (trimmedName === '') {
            showError(errorContainer, 'O nome da música não pode ficar vazio ao editar. Nenhuma alteração foi feita.');
        } else {
            twiceSongs[index] = trimmedName;
            renderList();
        }
    }
}

function deleteSong(index) {
    const errorContainer = document.getElementById('song-error');
    clearError(errorContainer);

    // Remove 1 elemento a partir da posição (index) específica
    twiceSongs.splice(index, 1);
    renderList();
}

// --- CHAMADA INICIAL ---
// Apenas a chamada necessária para ligar a aplicação, sem código solto.
initApp();