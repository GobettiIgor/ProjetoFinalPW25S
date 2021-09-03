INSERT INTO categoria(nome)	VALUES ('Instrumentos de sopro');
INSERT INTO categoria(nome)	VALUES ('Instrumentos de cordas');
INSERT INTO categoria(nome)	VALUES ('Instrumentos de percussão');
INSERT INTO categoria(nome)	VALUES ('Acessórios');

INSERT INTO marca(descricao) VALUES ('Odery');
INSERT INTO marca(descricao) VALUES ('Alto Michael');
INSERT INTO marca(descricao) VALUES ('Ibanez');
INSERT INTO marca(descricao) VALUES ('Takamine');
INSERT INTO marca(descricao) VALUES ('Smart');
INSERT INTO marca(descricao) VALUES ('Tama');
INSERT INTO marca(descricao) VALUES ('Dick Picks');
INSERT INTO marca(descricao) VALUES ('Tobias');
INSERT INTO marca(descricao) VALUES ('Pearl');

INSERT INTO produto(cd_item, descricao, nome, preco, preco_ant, caminho_img, categoria_prod_id, marca_prod_id)	VALUES (123450, 'A guitarra Original GRX 70 QA possui braço parafusado em maple, 24 trastes e é fabricada com um alto padrão de qualidade Ibanez.', 'Guitarra Ibanez GRX70QA', 2440, 3650, '/images/guitarra1.jpg', 2, 3);
INSERT INTO produto(cd_item, descricao, nome, preco, preco_ant, caminho_img, categoria_prod_id, marca_prod_id)	VALUES (123451, 'Saxofone Alto Michael Dourado Wasm48 Em Eb Com Case. O Saxofone Alto Michael Dual Gold WASM48 é um instrumento de sopro de qualidade profissional.', 'Saxofone Alto Michael', 3700, 4390, '/images/saxofone.jpg', 1, 2);
INSERT INTO produto(cd_item, descricao, nome, preco, preco_ant, caminho_img, categoria_prod_id, marca_prod_id)	VALUES (123452, 'Violão Takamine P 5 JC N & CT-4 DX Japan Aço c/ Case - Tampo: Solid Spruce Corpo: Rosewood Escala: Rosewood Tarraxa: Dourada Pré: CT-4 DX.', 'Violão Takamine P5 JC', 4950, 6790, '/images/violao1.jpg', 2, 4);
INSERT INTO produto(cd_item, descricao, nome, preco, preco_ant, caminho_img, categoria_prod_id, marca_prod_id)	VALUES (123453, 'O Capotraste Smart JX32 é composto por: Braçadeira de gatilho Formato curvo, moldado em metal Indicado para cordas de nylon e aço Material Aluminio.', 'Capotraste Smart JX32', 79.90, 40, '/images/capotraste.jpg', 4, 5);
INSERT INTO produto(cd_item, descricao, nome, preco, preco_ant, caminho_img, categoria_prod_id, marca_prod_id)	VALUES (123454, 'Bateria Tama Superstar Classic Maple Tangerine 22",8",10",12",14",16" Caixa 14x6,5" (Shell Pack) // Superstar Classic //Maple Shell', 'Bateria Tama Superstar', 12300, 15490, '/images/bateriatama1.jpg', 3, 6);
INSERT INTO produto(cd_item, descricao, nome, preco, preco_ant, caminho_img, categoria_prod_id, marca_prod_id)	VALUES (123455, 'Marca: DICK PICKS / Unidades por kit: 10 / Unidade de venda: Pack / Material da palheta: PVC Personalização: Frente e Verso / Espessura: 0.71 mm', 'Jg c/50 Palhetas', 25, 35, '/images/palhetas1.jpg', 4, 7);
INSERT INTO produto(cd_item, descricao, nome, preco, preco_ant, caminho_img, categoria_prod_id, marca_prod_id)    VALUES (123456, 'Bateria Odery inRock IR.200 Plus Dark Tiger. A linha possui 3 configurações e 4 novos acabamentos, todas compostas com kit de ferragens.', 'Bateria Odery inRock', 5890, 6990, '/images/bateria.jpg', 3, 1);
INSERT INTO produto(cd_item, descricao, nome, preco, preco_ant, caminho_img, categoria_prod_id, marca_prod_id)    VALUES (123457, 'Baixo Tobias Grouler com captador e pré originais de fábrica, regulado, cordas coladas, leve, ano de fabricação 1994, fabricado nos E.U.A.', 'Baixo Tobias Grouler', 5900, 7250, '/images/baixo1.jpg', 2, 8);
INSERT INTO produto(cd_item, descricao, nome, preco, preco_ant, caminho_img, categoria_prod_id, marca_prod_id)    VALUES (123458, '3 pés ultra robustos / Assento tipo selim extra large / Encosto regulável e super confortável / Pernas largas e grandes / Ajuste de altura em espiral com memória.', 'Banco de Bateria Pearl', 300, 450, '/images/banco.jpg', 4, 9);


INSERT INTO permissao (nome) values('ROLE_CUSTOMER');

-- Senha = 123
INSERT INTO cliente(name, username, password) VALUES ('Teste', 'teste', '$2a$10$.PVIfB07x.SfMYTcToxL0.yxcLWU0GbS2NUO1W1QAvqMm/TsFhVem');

INSERT INTO cliente_permissions(user_id, permissions_id) VALUES (1, 1);