document.addEventListener("DOMContentLoaded", function () {

  const ctx = document.getElementById('chart-horizontal-bar');

  new Chart(ctx, {
    type: 'bar', // ✅ correct type

    data: {
      labels: ['DMK', 'AIADMK', 'NDA', 'Others'],
      datasets: [{
        label: 'Seats',
        data: [95, 68, 42, 29],

        backgroundColor: [
          '#e11d48',
          '#15803d',
          '#fb923c',
          '#6b21a8'
        ],

        borderRadius: 8 // 🔥 nice UI
      }]
    },

    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: false
        },
        tooltip: {
            enabled: true,

            bodyFont: {
                size: 20   // 🔥 increase text size
            },

            titleFont: {
                size: 18   // 🔥 title size
            },

            padding: 12,   // 🔥 space inside tooltip
            boxPadding: 10, // spacing between color box & text

            caretSize: 10   // size of the pointer arrow
        }
      },

      scales: {
        x: {
          beginAtZero: true
        }
      },
      
    }

  });

});