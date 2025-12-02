INSERT INTO instituicao (nome) VALUES
('ETEC'),
('USP'),
('FCA'),
('CUI'),
('IST'),
('UES'),
('FEC'),
('SENAC'),
('CES'),
('URO');

INSERT INTO turma (nome, periodo, instituicao_id) VALUES
('DS 1', 'Tarde', 1),
('ADS 3', 'Tarde', 1),
('SI 1', 'Noite', 1),
('Redes 2', 'Tarde', 1),
('BD 1', 'Tarde', 1),
('Jogos 1', 'Tarde', 1),
('DevOps 1', 'Tarde', 1),
('DS 2', 'Manha', 2),
('ADS 1', 'Manha', 2),
('Ciberseg 1', 'Manha', 2),
('SI 2', 'Tarde', 3),
('Redes 1', 'Tarde', 3),
('ADS 2', 'Manha', 4),
('BD 2', 'Noite', 4),
('Jogos 2', 'Tarde', 5),
('DS 3', 'Tarde', 5),
('DevOps 2', 'Tarde', 6),
('Ciberseg 2', 'Tarde', 6);


-- 123
INSERT INTO user (id, nome, email, senha, github, role, turma_id) VALUES
(1, 'João Silva', 'joao.silva@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'joao', 'USER', 1),
(2, 'Maria Santos', 'maria.santos@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'maria', 'USER', 1),
(3, 'Pedro Oliveira', 'pedro.oliveira@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'pedro', 'USER', 2),
(4, 'Ana Costa', 'ana.costa@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'ana', 'USER', 2),
(5, 'Lucas Pereira', 'lucas.pereira@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'lucaspereira', 'USER', 3),
(6, 'Carla Lima', 'carla.lima@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'carlalima', 'USER', 3),
(7, 'Fernando Almeida', 'fernando.almeida@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'fernandoalmeida', 'USER', 4),
(8, 'Juliana Rodrigues', 'juliana.rodrigues@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'julianarodrigues', 'USER', 4),
(9, 'Ricardo Ferreira', 'ricardo.ferreira@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'ricardoferreira', 'USER', 5),
(10, 'Patrícia Gomes', 'patricia.gomes@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'patriciagomes', 'USER', 5),
(11, 'Roberto Carvalho', 'roberto.carvalho@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'robertocarvalho', 'USER', 6),
(12, 'Sofia Martins', 'sofia.martins@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'sofiamartins', 'USER', 6),
(13, 'Gustavo Santos', 'gustavo.santos@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'gustavosantos', 'USER', 7),
(14, 'Isabela Sousa', 'isabela.sousa@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'isabelasousa', 'USER', 7),
(15, 'Marcos Teixeira', 'marcos.teixeira@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'marcosteixeira', 'USER', 8),
(16, 'Luana Ribeiro', 'luana.ribeiro@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'luamaribeiro', 'USER', 8),
(17, 'Thiago Cardoso', 'thiago.cardoso@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'thiagocardoso', 'USER', 9),
(18, 'Amanda Barbosa', 'amanda.barbosa@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'amandabarbosa', 'USER', 9),
(19, 'Felipe Castro', 'felipe.castro@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'felipecastro', 'USER', 10),
(20, 'Letícia Dias', 'leticia.dias@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'leticadias', 'USER', 10),
(21, 'Admin Principal', 'admin@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'admin', 'ADMIN', NULL),
(22, 'Professor Silva', 'professor.silva@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'professorsilva', 'ADMIN', NULL),
(23, 'Bruno Azevedo', 'bruno.azevedo@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'brunoazevedo', 'USER', 1),
(24, 'Camila Moreira', 'camila.moreira@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'camilamoreira', 'USER', 1),
(25, 'Eduardo Farias', 'eduardo.farias@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'eduardofarias', 'USER', 1),
(26, 'Beatriz Nogueira', 'beatriz.nogueira@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'beatriznogueira', 'USER', 1),
(27, 'Henrique Rezende', 'henrique.rezende@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'henriquerezende', 'USER', 1),
(28, 'Larissa Cunha', 'larissa.cunha@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'larissacunha', 'USER', 1),
(29, 'Adriano Lopes', 'adriano.lopes@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'adrianolopes', 'USER', 1),
(30, 'Vanessa Pacheco', 'vanessa.pacheco@email.com', '$2a$10$ItYzUTm/KJ9tm1tQKGDVleEiaPBBEy8fumipX4FBksTYMgNhie7bO', 'vanessapacheco', 'USER', 1);

INSERT INTO atributo (moedas, rubys, esmeraldas, diamantes, xp, user_id) VALUES
(150, 5, 3, 2, 450, 1),
(200, 8, 5, 3, 520, 2),
(100, 2, 1, 1, 380, 3),
(175, 6, 4, 2, 490, 4),
(225, 9, 6, 4, 600, 5),
(125, 3, 2, 1, 420, 6),
(180, 7, 4, 3, 510, 7),
(160, 5, 3, 2, 470, 8),
(250, 12, 8, 5, 680, 9),
(140, 4, 3, 2, 430, 10),
(195, 8, 5, 3, 550, 11),
(135, 4, 2, 2, 400, 12),
(220, 10, 7, 4, 620, 13),
(170, 6, 4, 3, 480, 14),
(190, 7, 5, 3, 530, 15),
(155, 5, 3, 2, 460, 16),
(240, 11, 8, 5, 650, 17),
(165, 6, 4, 2, 500, 18),
(210, 9, 6, 4, 580, 19),
(145, 4, 3, 1, 440, 20),
(170, 6, 4, 3, 480, 21),
(190, 7, 5, 3, 530, 22),
(155, 5, 3, 2, 460, 23),
(240, 11, 8, 5, 650, 24),
(165, 6, 4, 2, 500, 25),
(210, 9, 6, 4, 580, 26),
(145, 4, 3, 1, 440, 27),
(210, 9, 6, 4, 580, 28),
(145, 4, 3, 1, 440, 29),
(210, 9, 6, 4, 580, 30);

INSERT INTO missoes (nome, descricao, moedas_recompensa, xp_recompensa, diamantes_recompensa, rubys_recompensa, esmeraldas_recompensa, turma_id) VALUES
('Missão de Matemática Básica', 'Resolver exercícios de adição e subtração', 50, 100, 1, 0, 0, 1),
('Projeto de Ciências', 'Criar um experimento simples sobre gravidade', 75, 150, 2, 1, 0, 1),
('Leitura de História', 'Ler e resumir um capítulo sobre Revolução Industrial', 60, 120, 1, 0, 1, 2),
('Atividade de Geografia', 'Mapear os continentes e principais países', 55, 110, 1, 1, 0, 2),
('Exercícios de Língua Portuguesa', 'Completar frases com verbos corretos', 45, 90, 0, 0, 1, 3),
('Projeto de Arte', 'Criar uma pintura digital usando ferramentas online', 80, 160, 2, 1, 1, 3),
('Missão de Inglês', 'Aprender 20 novas palavras em inglês', 65, 130, 1, 1, 0, 4),
('Atividade Física', 'Participar de uma aula de educação física virtual', 40, 80, 0, 0, 0, 4),
('Projeto de Programação', 'Criar um jogo simples em Scratch', 100, 200, 3, 2, 1, 5),
('Missão de Música', 'Aprender a tocar uma música simples no teclado', 70, 140, 2, 0, 1, 5),
('Atividade de Meio Ambiente', 'Criar um cartaz sobre reciclagem', 55, 110, 1, 1, 0, 6),
('Projeto de Literatura', 'Escrever uma história curta', 85, 170, 2, 1, 1, 6),
('Missão de Saúde', 'Criar um plano alimentar saudável', 60, 120, 1, 0, 1, 7),
('Atividade de Tecnologia', 'Aprender sobre segurança na internet', 50, 100, 1, 1, 0, 7),
('Projeto de Empreendedorismo', 'Criar um pequeno negócio virtual', 120, 240, 4, 3, 2, 8),
('Missão de Cidadania', 'Pesquisar sobre direitos humanos', 75, 150, 2, 1, 1, 8),
('Atividade de Esporte', 'Praticar exercícios em casa por uma semana', 45, 90, 0, 0, 0, 9),
('Projeto de Fotografia', 'Tirar fotos da natureza e editar', 90, 180, 3, 1, 1, 9),
('Missão de Natureza', 'Observar e registrar plantas locais', 55, 110, 1, 1, 0, 10),
('Projeto Final', 'Criar um portfólio com todos os trabalhos do semestre', 150, 300, 5, 3, 2, 10);

INSERT INTO nivel_definicao (nome, pontos_necessarios) VALUES
('Iniciante', 0),
('Aprendiz', 500),
('Intermediário', 1000),
('Avançado', 2000),
('Especialista', 3500),
('Mestre', 5000),
('Lenda', 7500),
('Herói', 10000),
('Mítico', 15000),
('Lendário', 25000);

INSERT INTO item (nome, descricao) VALUES
('Poção de Energia', 'Restaura energia para completar missões'),
('Escudo Mágico', 'Protege contra falhas em desafios'),
('Livro de Conhecimento', 'Aumenta XP ganho temporariamente'),
('Cristal de Foco', 'Melhora concentração em estudos'),
('Mochila Expandida', 'Aumenta limite de itens no inventário'),
('Anel da Sorte', 'Aumenta chances de sucesso em missões'),
('Varinha de Criatividade', 'Ajuda na criação de projetos artísticos'),
('Botas Velozes', 'Reduz tempo de conclusão de tarefas'),
('Capa da Invisibilidade', 'Permite acesso a missões especiais'),
('Coroa do Saber', 'Dá acesso a conteúdos premium');

UPDATE missoes SET conteudo = 'Para completar esta missão de Matemática Básica, você precisa resolver os seguintes exercícios de adição e subtração. Use papel e caneta para resolver cada problema passo a passo, mostrando todo o seu raciocínio matemático.

Exercícios:
1. 15 + 27 = ?
2. 48 - 19 = ?
3. 33 + 12 - 8 = ?
4. 56 - 23 + 11 = ?

Dicas importantes:
- Sempre verifique suas contas
- Mostre o transporte quando necessário
- Organize seus cálculos de forma clara' WHERE id = 1;

UPDATE missoes SET conteudo = 'Esta missão de Ciências requer que você crie um experimento simples sobre gravidade. Você pode usar materiais comuns do dia a dia como uma bola, livros ou objetos pesados.

Objetivos do experimento:
1. Demonstrar como a gravidade funciona
2. Medir a aceleração dos objetos
3. Comparar comportamentos de objetos diferentes

Materiais necessários:
- Objetos de diferentes pesos (bola de tênis, maçã, livro)
- Régua ou fita métrica
- Cronômetro ou relógio
- Papel para anotações

Passos sugeridos:
1. Planeje seu experimento
2. Execute as medições
3. Registre os resultados
4. Tire conclusões' WHERE id = 2;

-- Inserir Questionários
INSERT INTO questionario (titulo, missao_id) VALUES
('Avaliação de Matemática Básica', 1),
('Questionário de Ciências', 2);

-- Inserir Questões
INSERT INTO questoes (pergunta, opcaoa, opcaob, opcaoc, opcaod, resposta_correta, questionario_id) VALUES
('Qual é o resultado de 15 + 27?', '42', '41', '43', '40', 'A', 1),
('Quanto é 48 - 19?', '29', '28', '30', '27', 'A', 1),
('Qual dos seguintes objetos é mais afetado pela gravidade?', 'Uma pena', 'Uma bola de ferro', 'Uma folha de papel', 'Uma bolha de sabão', 'B', 2),
('O que acontece com a velocidade de um objeto em queda livre?', 'Diminui gradualmente', 'Aumenta constantemente', 'Permanece constante', 'Para imediatamente', 'B', 2),
('Qual é a força responsável por manter os planetas em órbita?', 'Força centrípeta', 'Força gravitacional', 'Força magnética', 'Força elétrica', 'B', 2);

-- Inserir algumas submissões de missões
INSERT INTO missoes_submissoes (aluno_id, missao_id, status, data_envio, data_avaliacao, observacao, arquivo_url) VALUES
(1, 1, 'APROVADA', '2024-08-15 10:30:00', '2024-08-16 14:20:00', 'Excelente trabalho!', 'https://example.com/submissions/1.pdf'),
(2, 2, 'APROVADA', '2024-08-16 09:15:00', '2024-08-17 11:45:00', 'Projeto muito criativo', 'https://example.com/submissions/2.pdf'),
(3, 3, 'PENDENTE', '2024-08-17 16:20:00', NULL, NULL, 'https://example.com/submissions/3.pdf'),
(4, 4, 'APROVADA', '2024-08-18 13:10:00', '2024-08-19 10:30:00', 'Mapa muito detalhado', 'https://example.com/submissions/4.pdf'),
(5, 5, 'REPROVADA', '2024-08-19 11:45:00', '2024-08-20 15:20:00', 'Precisa corrigir os verbos', 'https://example.com/submissions/5.pdf'),
(6, 6, 'APROVADA', '2024-08-20 14:30:00', '2024-08-21 09:15:00', 'Arte digital impressionante', 'https://example.com/submissions/6.pdf'),
(7, 7, 'PENDENTE', '2024-08-21 10:20:00', NULL, NULL, 'https://example.com/submissions/7.pdf'),
(8, 8, 'APROVADA', '2024-08-22 15:45:00', '2024-08-23 11:30:00', 'Participação excelente', 'https://example.com/submissions/8.pdf'),
(9, 9, 'APROVADA', '2024-08-23 12:10:00', '2024-08-24 14:20:00', 'Jogo muito divertido', 'https://example.com/submissions/9.pdf'),
(10, 10, 'PENDENTE', '2024-08-24 16:30:00', NULL, NULL, 'https://example.com/submissions/10.pdf');
