-----------PROMPT INICIAL: USADA PARA AS 3 IAs

Criar uma aplicação web das músicas do grupo de k-pop TWICE que simula um sistema simples de cadastro de itens. A aplicação deve ter uma tela de login, e após autenticação, exibir a lista com as operações de CRUD. 

A aplicação deve ter uma tela de login com o formulário de login visível e a lista oculta. As credenciais corretas são:
Usuário: aluno
Senha: fiap2025
Se as credenciais estiverem corretas, a tela de login deve redirecionar para a página da lista. Se estiverem erradas, uma mensagem de erro deve aparecer na tela — não apenas no console.
Após o login, o usuário pode:
Adicionar um item ao final da lista
Adicionar um item ao início da lista
Ver todos os itens exibidos dinamicamente na tela
Editar qualquer item individualmente
Remover qualquer item individualmente
Toda vez que a lista muda, a tela deve ser atualizada automaticamente para refletir o estado atual dos dados. A lista deve conter pelo menos 3 itens iniciais, que serão exibidos ao carregar a primeira vez a página.
Validações obrigatórias
Os campos de login não podem ser enviados vazios
Nenhum item pode ser salvo com o campo vazio — a mensagem de erro deve aparecer na tela
Ao editar um item, se o usuário cancelar ou confirmar com o campo vazio, o item original deve permanecer sem alteração
A remoção de um item deve considerar sua posição na lista, não o seu valor — para evitar que itens com o mesmo texto sejam removidos ao mesmo tempo

Requisitos obrigatórios
A aplicação deve ser desenvolvida com HTML, CSS e JavaScript puro — sem frameworks ou bibliotecas externas
Os dados devem ser armazenados em um array de strings — sem uso de objetos dentro do array
A lógica deve ser organizada em funções nomeadas — sem código solto fora de funções, exceto a declaração de variáveis e a chamada inicial de renderização

-----
(REFINAMENTO DO PROMPT)
Separar o codigo html, javascript e css 
Adicionar foto do grupo TWICE abaixo do Login



-----------Consultada as seguintes IAs e observado: 

ChatGPT: 
- Arquitetura do Código: Inicialmente, todo o HTML, CSS e JS foram centralizados no index.html. Após a solicitação, o código foi devidamente refatorado e dividido em arquivos separados.
- Interface e UI/UX: * O CSS sugerido ficou excelente.
Por outro lado, a legibilidade do código gerado precisa de ajustes urgentes (melhorar a cor/tipo da fonte, o fundo e a indentação).
Há um desalinhamento visível no botão "Entrar" da página inicial.
- Experiência do Usuário (UX): As notificações são pouco amigáveis, a imagem gerada está quebrando e o uso de alert para a edição de registros prejudica a fluidez da navegação.


Claude
Pontos Positivos:
-Interface e UX: O design está muito bonito e caprichado, além de apresentar uma funcionalidade excelente e bem mais fluida — a edição direto na linha de registro eliminou o uso de alert, melhorando a experiência.
- Arquitetura do Código: Inicialmente, todo o HTML, CSS e JS foram centralizados no index.html. Após a solicitação, o código foi devidamente refatorado e dividido em arquivos separados.
Pontos de Atenção (Contras):
- Estética: O visual geral ainda parece um tanto artificial e a imagem gerada, embora não esteja quebrada, não corresponde à foto do grupo.
- Problema Técnico: Ao copiar e colar o código diretamente, o JS das credenciais não funcionou; o problema só foi resolvido baixando o arquivo .zip diretamente da plataforma.

Google Gemini 
Pontos Positivos:
- Organização do Código: A divisão em arquivos estruturados (HTML, CSS e JS) foi realizada com sucesso após o pedido. Além disso, a apresentação com fundo escuro e cores vibrantes trouxe excelente contraste e legibilidade.
-Suporte e Orientação: O Gemini incluiu instruções claras de como utilizar e baixar o código gerado.
-Evolução do Front-End: botões padronizados, visual limpo, tons pastéis harmoniosos e um efeito de "foco" bem sutil. As notificações são amigáveis.

Pontos de Atenção (Contras):
-Funcionalidade e UI: A imagem gerada apresentou falha (quebrada) e o sistema ainda utiliza a janela de alert para a edição de registros, o que quebra a fluidez da experiência do usuário.


--------------- JUSTIFICATIVA DA IA ESCOLHIDA COMO BASE: 

Excelência em UI/UX (Design e Experiência do Usuário): O Gemini entregou uma interface superior, caracterizada por botões padronizados, paleta de cores em tons pastéis harmoniosa e um efeito de "foco" delicado. Além disso, resolveu um problema crítico da versão anterior ao implementar notificações amigáveis (em comparação com o GPT), tornando a experiência do usuário muito mais fluida e profissional.

Legibilidade e Organização do Código: A ferramenta se destacou na apresentação do código, utilizando um fundo escuro com sintaxe em cores vibrantes. Esse alto contraste facilitou significativamente a leitura, a revisão e a compreensão da estrutura antes mesmo da exportação.

Didática e Suporte Pós-Geração: Além de atender prontamente à solicitação de refatoração (dividindo o código único em arquivos separados de HTML, CSS e JS), o Gemini incluiu orientações claras e didáticas de como implementar e baixar os arquivos, otimizando o tempo de desenvolvimento.