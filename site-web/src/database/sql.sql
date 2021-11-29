CREATE DATABASE fpstips;

USE fpstips;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

select * from usuario;

CREATE TABLE quiz (
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
qtdAcertos INT,
fk_usuario INT,
FOREIGN KEY (fk_usuario) references usuario(id)
);

select * from quiz;