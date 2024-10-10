const usuarios = [
    { id: 1, nome: "Alice", email: "alice@example.com", idade: 28 },
    { id: 2, nome: "Bruno", email: "bruno@example.com", idade: 32 },
    { id: 3, nome: "Carla", email: "carla@example.com", idade: 25 },
    { id: 4, nome: "Daniel", email: "daniel@example.com", idade: 30 },
    { id: 5, nome: "Eva", email: "eva@example.com", idade: 22 },
    { id: 6, nome: "Fernando", email: "fernando@example.com", idade: 35 },
    { id: 7, nome: "Gisela", email: "gisela@example.com", idade: 27 },
    { id: 8, nome: "Hugo", email: "hugo@example.com", idade: 29 },
    { id: 9, nome: "Isabel", email: "isabel@example.com", idade: 31 },
    { id: 10, nome: "Júlio", email: "julio@example.com", idade: 26 }
];

export const home = (req, res) => {
    res.send('Hello World!');
}

export const getUsuarios = (req, res) => {
    res.json(usuarios);
};

export const getUsuarioById = (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).send('Usuário não encontrado');
    }
};

// Função para criar um novo usuário
export const createUsuario = (req, res) => {
    const { nome, email, idade } = req.body;
    const novoUsuario = {
        id: usuarios.length + 1, // Gerar um novo ID
        nome,
        email,
        idade
    };
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
};

// Função para atualizar um usuário existente
export const updateUsuario = (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (usuario) {
        const { nome, email, idade } = req.body;
        usuario.nome = nome || usuario.nome;
        usuario.email = email || usuario.email;
        usuario.idade = idade || usuario.idade;
        res.json(usuario);
    } else {
        res.status(404).send('Usuário não encontrado');
    }
};

// Função para deletar um usuário
export const deleteUsuario = (req, res) => {
    const index = usuarios.findIndex(u => u.id === parseInt(req.params.id));
    if (index !== -1) {
        usuarios.splice(index, 1);
        res.status(204).send(); // No content
    } else {
        res.status(404).send('Usuário não encontrado');
    }
};

// Função para resetar o array de usuários
export const resetUsuarios = (req, res) => {
    // Array inicial
    const usuariosIniciais = [
        { id: 1, nome: "Alice", email: "alice@example.com", idade: 28 },
        { id: 2, nome: "Bruno", email: "bruno@example.com", idade: 32 },
        { id: 3, nome: "Carla", email: "carla@example.com", idade: 25 },
        { id: 4, nome: "Daniel", email: "daniel@example.com", idade: 30 },
        { id: 5, nome: "Eva", email: "eva@example.com", idade: 22 },
        { id: 6, nome: "Fernando", email: "fernando@example.com", idade: 35 },
        { id: 7, nome: "Gisela", email: "gisela@example.com", idade: 27 },
        { id: 8, nome: "Hugo", email: "hugo@example.com", idade: 29 },
        { id: 9, nome: "Isabel", email: "isabel@example.com", idade: 31 },
        { id: 10, nome: "Júlio", email: "julio@example.com", idade: 26 }
    ];
    usuarios.length = 0; // Limpa o array atual
    usuarios.push(...usuariosIniciais); // Restaura os usuários iniciais
    res.json(usuarios);
};
