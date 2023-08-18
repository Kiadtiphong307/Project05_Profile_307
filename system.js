const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Python', 'HTML', 'CSS', 'JavaScript', 'C', 'C++', 'C#'],
    datasets: [{
      label: 'Language code',
      data: [4, 7, 8, 5, 4, 3, 4, ], 
      borderWidth: 1,
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)', 
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)', 
        'rgba(75, 192, 192, 0.5)', 
        'rgba(153, 102, 255, 0.5)', 
        'rgba(255, 15, 64, 0.5)', 
        'rgba(258, 94, 12, 0.5)', 
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)', 
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)', 
        'rgba(75, 192, 192, 1)', 
        'rgba(153, 102, 255, 1)', 
        'rgba(255, 15, 64, 1)', 
        'rgba(258, 94, 132, 1)', 
      ],
    }]
  },

  options: {
    scales: {
      y: {
        beginAtZero: false,
        max: 10,
        min: 0 
      }
    }
  }
});


const ctx_1 = document.getElementById('myChart_1');

new Chart(ctx_1, {
  type: 'radar',
  data: {
    labels: ['Photoshop', 'Canva', 'Lightroom', 'Illustrator', 'VScode', 'Capcut'],
    datasets: [{
      label: 'Skill',
      data: [7, 10, 9, 6, 5, 7],
      backgroundColor: [
        'rgba(255, 25, 232, 0.5)', // Photoshop
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)', // Photoshop
        'rgba(54, 162, 235, 1)', // Canva
        'rgba(255, 206, 86, 1)', // Lightroom
        'rgba(75, 192, 192, 1)', // Illustrator
        'rgba(153, 102, 255, 1)', // VScode
        'rgba(255, 159, 64, 1)', // Capcut
      ],
    }]
  },
  options: {
    scales: {
      r: {
        beginAtZero: false,
        max: 10,
        min: 0 
      }
    }
  }
});
