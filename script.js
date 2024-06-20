document.getElementById('dataForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const info = document.getElementById('textareaInfo').value;

    const data = {
        nome: nome,
        email: email,
        idade: parseInt(idade, 10),
        info: info
    };

    const webhookUrl = 'https://builder.conversionflow.com.br/webhook-test/googlesheets';

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseMessage = document.getElementById('responseMessage');
        if (response.ok) {
            responseMessage.textContent = 'Dados enviados com sucesso!';
        } else {
            responseMessage.textContent = 'Falha ao enviar dados: ' + response.status;
        }
    } catch (error) {
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.textContent = 'Erro ao enviar dados: ' + error;
    }
});
