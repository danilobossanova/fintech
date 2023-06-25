// Simulando dados de despesas por categoria (pode ser substituído pelos dados reais)

//Despesas por Categoria
const expenseData = {
    labels: ['Alimentação', 'Transporte', 'Lazer', 'Saúde', 'Educação'],
    datasets: [{
      label: 'Despesas por Categoria',
      data: [200, 150, 100, 80, 50], // Valores das despesas por categoria (substitua pelos dados reais)
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'], // Cores de fundo para cada categoria
    }]
  };

  // Criando o gráfico
  const ctx = document.getElementById('expensesChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: expenseData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
      },
    },
  });

  /** *****/
  var data = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
    datasets: [
      {
        label: "Receitas",
        data: [1,1200, 1500, 800, 1100, 2000, 1700],
        backgroundColor: "#00B25A",
        borderColor: "#00B25A",
        borderWidth: 1,
        fill: false
      },
      {
        label: "Despesas",
        data: [1,1000, 1400, 900, 1300, 1800, 1500],
        backgroundColor: "#F44336",
        borderColor: "#F44336",
        borderWidth: 1,
        fill: false
      }
    ]
  };

  // Calcular a média de receita
var receitaMedia = data.datasets[0].data.reduce((a, b) => a + b, 0) / data.datasets[0].data.length;

// Calcular a média de despesas
var despesasMedia = data.datasets[1].data.reduce((a, b) => a + b, 0) / data.datasets[1].data.length;

// Calcular a diferença entre receita e despesas
var diferenca = data.datasets[0].data.map((value, index) => value - data.datasets[1].data[index]);

// Adicionar as linhas de média e diferença ao objeto data
data.datasets.push({
  label: "Média de Receita",
  data: Array(data.labels.length).fill(receitaMedia),
  borderColor: "#2196F3",
  borderWidth: 1,
  fill: false
});

data.datasets.push({
  label: "Média de Despesas",
  data: Array(data.labels.length).fill(despesasMedia),
  borderColor: "#9C27B0",
  borderWidth: 1,
  fill: false
});

data.datasets.push({
  label: "Diferença",
  data: diferenca,
  borderColor: "#FF9800",
  borderWidth: 1,
  fill: false
});

// Configurações do gráfico
var options = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

  // Criação do gráfico
  var ctdespesa = document.getElementById("grafico-despesasXreceita").getContext("2d");
  var myChart = new Chart(ctdespesa, {
    type: "line",
    data: data,
    options: options
  });