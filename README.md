# dripstore

# Dependencias:
- Cypress;
- Nodemon;
- Express;
- Cors;
- Dotenv;
- Sequelize;
- PG;
- bcrypt

# Create tables:
- Query for create tables:
-> CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL,
    telefone VARCHAR(15),
    username VARCHAR(50),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);