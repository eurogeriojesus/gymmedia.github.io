// Função para calcular as médias das respostas
function calculateAverages(answers) {
  const pillars = {
    atendimento: ["cordialidade_atencao", "atendimento_personalizado", "sentimento_acolhimento"],
    ambiente: ["limpeza_organizacao", "estado_equipamentos", "ambiente_agradavel"],
    personalizacao: ["treinos_adaptados", "acompanhamento_individualizado", "opcoes_treinos"],
    resultados: ["alcance_objetivos", "suporte_alcance_objetivos", "avaliacoes_ajustes"],
    comunidade: ["eventos_desafios", "senso_comunidade", "grupos_apoio"]
  };

  let averages = {};
  for (let pillar in pillars) {
    let sum = 0;
    let count = 0;
    for (let question of pillars[pillar]) {
      if (answers[question]) {
        sum += parseInt(answers[question]);
        count++;
      }
    }
    averages[pillar] = count > 0 ? sum / count : 0;
  }

  let totalSum = 0;
  let totalCount = 0;
  for (let pillar in averages) {
    totalSum += averages[pillar];
    totalCount++;
  }
  const overallAverage = totalCount > 0 ? totalSum / totalCount : 0;

  return {
    averages: averages,
    overallAverage: overallAverage
  };
}

// Função para enviar e-mail para o Brevo (substitua pela sua implementação)
function sendEmailToBrevo(results) {
  const apiKey = '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'; // Substitua pela sua chave de API
  const apiUrl = 'https://api.brevo.com/v3/smtp/email';
  const email = results.email; // Supondo que você tenha um campo de e-mail no formulário

  const data = {
    sender: {
      name: 'Sua Academia',
      email: 'contatogymmedia@gmail.com' // Substitua pelo seu e-mail
    },
    to: [{
      email: email
    }],
    subject: 'Diagnóstico de CX da sua Academia',
    htmlContent: `
      <h2>Resultado do Diagnóstico de CX</h2>
      <p>Média geral: ${results.overallAverage}</p>
      <p>Atendimento: ${results.averages.atendimento}</p>
      <p>Ambiente: ${results.averages.ambiente}</p>
      <p>Personalização: ${results.averages.personalizacao}</p>
      <p>Resultados: ${results.averages.resultados}</p>
      <p>Comunidade: ${results.averages.comunidade}</p>
      </body>
    `
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro ao enviar e-mail: ${response.status} ${response.statusText}`);
      }
      console.log('E-mail enviado com sucesso:', response);
    })
    .catch(error => {
      console.error('Erro ao enviar e-mail:', error);
    });
}

// Receber dados do Typeform via webhook
// (Este código deve ser executado no seu servidor web)
const express = require('express');
const app = express();
const port = 3000; // Ou a porta que você configurou

app.use(express.json());

app.post('/webhook', (req, res) => {
  const answers = req.body; // Obtenha as respostas do corpo da requisição
  const results = calculateAverages(answers);
  sendEmailToBrevo(results);
  res.sendStatus(200); // Envie uma resposta de sucesso para o Typeform
});

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});
