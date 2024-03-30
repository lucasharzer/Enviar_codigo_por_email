# Enviar código de validação por email

# Descrição:

Aplicação para enviar código de validação por email na linguagem JavaScript. Utilizando a biblioteca do NodeJS nodemailer que envia emails de forma fácil, o código de validação é de 4 dígitos gerados aleatóriamente confirmados caso estaja correto.

# Campos para preencher:

Arquivo smtp.js

- host: "smtp.gmail.com"
- port: 587 (padrão)
- user: email que vai enviar a mensagem
- pass: senha do email que vai enviar mensagem

Arquivo index.js

- text: corpo da mensagem
- subject: título da mensagem
- from: nome que aparecerá na mensagem
- to: email que receberá a mensagem

# Comandos: 

Instalar dependências necessárias:
```bash
npm install
```
Executar programa:
```bash
npm start
```
