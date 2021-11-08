// Enviar o código e confirmação dele

const nodemailer = require('nodemailer');

const STMP_CONFIG = require('./config/smtp');
const gerarCodigo = require('./codigo');

const prompt =  require('prompt-sync')();

const transporter = nodemailer.createTransport({
    host: STMP_CONFIG.host,
    port: STMP_CONFIG.port,
    secure: false,
    auth: {
        user: STMP_CONFIG.user,
        pass: STMP_CONFIG.pass
    },
    tls: {
        rejectUnauthorized: false
    }
});

async function run() {

    // Envio do código
    const valor_enviado = gerarCodigo()

    const mailSent = await transporter.sendMail({
        text: `Seu código de validação: ${valor_enviado}`,
        subject: 'Seu código para confirmar cadastro',
        from: 'Cadastro CTN',
        to: '',
    });
    console.log('Status da mensagem: ');
    console.log(mailSent);


    // Confirmação
    const valor_recebido = prompt('Insira o código de validação: ');
    if (valor_recebido == valor_enviado) {
        console.log('Parabéns ✅');
    }else {
        console.log('Errado ❎');
    }

}

run();

