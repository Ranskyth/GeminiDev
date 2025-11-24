CREATE TABLE `NivelDefinicao` (
  `id` int PRIMARY KEY,
  `nome` varchar(255),
  `pontos_necessarios` int
);

CREATE TABLE `Instituicao` (
  `id` int PRIMARY KEY,
  `nome` varchar(255)
);

CREATE TABLE `Turmas` (
  `id` int PRIMARY KEY,
  `nome` varchar(255),
  `periodo` varchar(100),
  `instituicao_id` int
);

CREATE TABLE `Aluno` (
  `id` int PRIMARY KEY,
  `nome` varchar(255),
  `email` varchar(255),
  `senha_hash` varchar(255),
  `user_github` varchar(255),
  `turma_id` int
);

CREATE TABLE `Missoes` (
  `id` int PRIMARY KEY,
  `nome` varchar(255),
  `descricao` text,
  `moedas_recompensa` int,
  `xp_recompensa` int,
  `diamantes_recompensa` int,
  `rubys_recompensa` int,
  `esmeraldas_recompensa` int,
  `turma_id` int
);

CREATE TABLE `Inventario` (
  `id` int PRIMARY KEY,
  `aluno_id` int NOT NULL
);

CREATE TABLE `Itens` (
  `id` int PRIMARY KEY,
  `nome` varchar(255),
  `descricao` text
);

CREATE TABLE `InventarioItem` (
  `id` int PRIMARY KEY,
  `item_id` int,
  `inventario_id` int,
  `quantidade` int
);

CREATE TABLE `Atributos` (
  `id` int PRIMARY KEY,
  `moedas` int,
  `esmeraldas` int,
  `rubis` int,
  `diamantes` int,
  `xp` int,
  `aluno_id` int NOT NULL
);

CREATE TABLE `LojaItens` (
  `id` int PRIMARY KEY,
  `item_id` int,
  `preco` int,
  `tipo_moeda` varchar(50)
);

CREATE TABLE `MissoesSubmissoes` (
  `id` int PRIMARY KEY,
  `aluno_id` int,
  `missao_id` int,
  `status` varchar(50),
  `data_envio` datetime,
  `data_avaliacao` datetime,
  `observacao` text,
  `arquivo_url` varchar(255)
);

ALTER TABLE `Turmas` ADD FOREIGN KEY (`instituicao_id`) REFERENCES `Instituicao` (`id`);

ALTER TABLE `Aluno` ADD FOREIGN KEY (`turma_id`) REFERENCES `Turmas` (`id`);

ALTER TABLE `Missoes` ADD FOREIGN KEY (`turma_id`) REFERENCES `Turmas` (`id`);

ALTER TABLE `Inventario` ADD FOREIGN KEY (`aluno_id`) REFERENCES `Aluno` (`id`);

ALTER TABLE `InventarioItem` ADD FOREIGN KEY (`item_id`) REFERENCES `Itens` (`id`);

ALTER TABLE `InventarioItem` ADD FOREIGN KEY (`inventario_id`) REFERENCES `Inventario` (`id`);

ALTER TABLE `Atributos` ADD FOREIGN KEY (`aluno_id`) REFERENCES `Aluno` (`id`);

ALTER TABLE `LojaItens` ADD FOREIGN KEY (`item_id`) REFERENCES `Itens` (`id`);

ALTER TABLE `MissoesSubmissoes` ADD FOREIGN KEY (`aluno_id`) REFERENCES `Aluno` (`id`);

ALTER TABLE `MissoesSubmissoes` ADD FOREIGN KEY (`missao_id`) REFERENCES `Missoes` (`id`);
