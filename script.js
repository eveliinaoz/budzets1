// const xValues = ["Mājoklis", "Transports", "Mācības", "Personālās vajadzības", "Iekrājumi"];
// const yValues = [55, 49, 44, 24, 15];
// const barColors = [
//   "#b91d47",
//   "#00aba9",
//   "#2b5797",
//   "#e8c3b9",
//   "#1e7145"
// ];

// new Chart("myChart", {
//   type: "pie",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
  
// })
var data = {
  labels: ['Label 1', 'Label 2', 'Label 3'],
  datasets: [{
    data: [30, 20, 50], // Values for each slice
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] // Colors for each slice
  }]
};
// Get the context of the canvas element we want to select
var ctx = document.getElementById('myPieChart').getContext('2d');  
// Create the pie chart 
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: data
});


var canvas = document.getElementById('myPieChart');
// Update canvas dimensions
canvas.width = "100px";
canvas.height = "100px";
// Resize the chart
myPieChart.resize();