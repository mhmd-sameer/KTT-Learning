document.addEventListener("DOMContentLoaded", function () {

  const ctx = document.getElementById('chart-doughnut');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['DMK', 'AIADMK', 'TVK', 'NTK', 'Others'],
        datasets: [{
        data: [90, 63, 38, 29, 14],
        backgroundColor: [
            '#e11d48',
            '#15803d',
            '#fb923c',
            '#2177a8',
            '#6b21a8'
        ]
        }]
    },

    options: {
      responsive: true,
        maintainAspectRatio: false,
      plugins: {
        legend: false,
        tooltip: {
            enabled: true,

            bodyFont: {
                size: 20   
            },

            titleFont: {
                size: 18   
            },

            padding: 12,   
            boxPadding: 10,

            caretSize: 10   
        }
      },

      cutout: '60%' 
    }

  });

});