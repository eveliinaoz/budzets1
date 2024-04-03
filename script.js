



function summa() {
  let alga = document.getElementById("alga").value;
  let citia = document.getElementById("citia").value;

  let lizings = document.getElementById("lizings").value;
  let apdrosinasana = document.getElementById("apdrosinasana").value;
  let degviela = document.getElementById("degviela").value;

  let partika = document.getElementById("partika").value;
  let izklaides = document.getElementById("izklaides").value;
  let apgerbs = document.getElementById("apgerbs").value;
  let medicina = document.getElementById("medicina").value;
  let citib = document.getElementById("citib").value;

  let ire = document.getElementById("ire").value;
  let komunalie = document.getElementById("komunalie").value;
  let pakalpojumi = document.getElementById("pakalpojumi").value;

  let macibuiz = document.getElementById("macibuiz").value;
  let macibuaiz= document.getElementById("izklaides").value;

  let fonds= document.getElementById("fonds").value;


  let terini= (alga+citia)-(lizings+apdrosinasana+degviela+partika+izklaides+apgerbs+medicina+citib+ire+komunalie+pakalpojumi+macibuiz+macibuaiz+fonds);
  console.log(terini);

  window.location.replace("e2.html");

}

const xValues = ["Mājoklis", "Transports", "Mācības", "Personālās vajadzības", "Iekrājumi"];
const yValues = [55, 49, 44, 24, 15];
const barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  
})


function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


function diagramma(){
  let ienakumi =document.getElementById("ienakumi").value;
  ienakumi.innerHTML= alga+citia;
}
