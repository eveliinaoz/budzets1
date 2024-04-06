

function summa() {

  // myChart.clearRect(0,0, 500,600);


  let ienakumi = Number(document.getElementById("alga").value) + Number(document.getElementById("citia").value);
  document.getElementById('ienakumi').innerHTML = ienakumi;

  let majoklis = Number(document.getElementById("ire").value) + Number(document.getElementById("komunalie").value) + Number(document.getElementById("pakalpojumi").value);
  document.getElementById('majoklis').innerHTML = majoklis;

  let transports = Number(document.getElementById("lizings").value) + Number(document.getElementById("apdrosinasana").value) + Number(document.getElementById("degviela").value);
  document.getElementById('transports').innerHTML = transports;

  let macibas = Number(document.getElementById("macibuiz").value) + Number(document.getElementById("macibuaiz").value);
  document.getElementById('macibas').innerHTML = macibas;

  let pervajadzibas = Number(document.getElementById("partika").value) + Number(document.getElementById("izklaides").value) + Number(document.getElementById("apgerbs").value) + Number(document.getElementById("medicina").value) + Number(document.getElementById("citib").value);
  document.getElementById('pervajadzibas').innerHTML = pervajadzibas;

  let iekrajumi = Number(document.getElementById("fonds").value);
  document.getElementById('iekrajumi').innerHTML = iekrajumi;








  const yValues = [];

  const paterini = [majoklis, transports, macibas, pervajadzibas, iekrajumi]
  console.log(paterini)
  let terini = majoklis + transports + macibas + pervajadzibas + iekrajumi;
  let atlikums = ienakumi - terini;
  document.getElementById("atlikums").innerHTML = atlikums;
  for (let i = 0; i < paterini.length; i++) {

    if (isNaN(paterini[i])) {
      yValues.push(0);
    }

    else {
      yValues.push(Math.round(paterini[i] / terini * 100));
    }
    console.log(yValues);
  }
  const xValues = ["Mājoklis", "Transports", "Mācības", "Personālās vajadzības", "Iekrājumi"];
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
}

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}


//   function poga() {
//     if (bangladesa.checked){
//         ind.style.display = "none"
//         jap.style.display = "none"
//         bang.style.display = "block";
//     }
//     if (japana.checked){
//         ind.style.display = "none"
//         jap.style.display = "block"
//         bang.style.display = "none";
//     }
//     if (indonezija.checked){
//         ind.style.display = "block"
//         jap.style.display = "none"
//         bang.style.display = "none";
//     }
// }


function poga() {
  if (majoklis > transports, macibas, pervajadzibas, iekrajumi) {
    macibasb.style.display = "none"
    transportsb.style.display = "none"
    majoklisb.style.display = "block";
    personigasvajb.style.display = "none"
    iekrajumib.style.display = "none"
    documentWrite("tu esi cilvēks, kas savam mājoklim neliek robežas, tu iegādājies sākot no jauām tehnoloģijām savā mājā līdz greznām mēbelēm un aksesuāriem, tu vienmēr centies padarīt savu dzīves telpu par savu luksusa oāzi.")
  }
  if (transports > majoklis, macibas, pervajadzibas, iekrajumi) {
    macibasb.style.display = "none"
    transportsb.style.display = "block"
    majoklisb.style.display = "none";
    personigasvajb.style.display = "none"
    iekrajumib.style.display = "none"
    documentWrite("ietekmīgs un bagāts cilvēks, kas iztērē lielu naudas summu, lai nodrošinātu sev izsmalcinātu un greznu transportu. Tavas automašīnas, jahtas vai lidmašīnas ne tikai kalpo kā transportlīdzekļi, bet arī kā statusa simboli, atspoguļojot tavu augsto sociālo stāvokli un bagātību.")
  }
  if (macibas > transports, majoklis, pervajadzibas, iekrajumi) {
    macibasb.style.display = "block"
    transportsb.style.display = "none"
    majoklisb.style.display = "none";
    personigasvajb.style.display = "none"
    iekrajumib.style.display = "none"
    documentWrite("cilvēks, kurš ir vērts pieminēšanas, jo tu tērē daudz naudas, lai iegūtu izglītību. tavi mērķi ir augsti un tu esi gatavs ieguldīt finansiāli, lai sasniegtu savums mēŗķus.")
  }
  if (pervajadzibas > transports, majoklis, macibas, iekrajumi) {
    macibasb.style.display = "none"
    transportsb.style.display = "none"
    majoklisb.style.display = "none"
    personigasvajb.style.display = "block";
    iekrajumib.style.display = "none"
    documentWrite("cilvēks, kurš tērē daudz naudas lai apmierinātu savas personīgās vajadzības ar ekskluzīviem pirkumiem un greznām izklaidēm, nereti nņemot vērā finansiālās sekas vai pat citu cilvēku vajadzības.")
  }
  if (iekrajumi > transports, majoklis, macibas, iekrajumi) {
    macibasb.style.display = "none"
    transportsb.style.display = "none"
    majoklisb.style.display = "none"
    personigasvajb.style.display = "none"
    iekrajumib.style.display = "block";
    documentWrite("cilvēks, kas ir disciplinēts un mērķtiecīgs. Tu saproti finanšu stabilitātes nozīmi un ilgtermiņa finansiālo mērķu svarīgumu, tāpēc tu veic ieguldījumus un centies taupīt pēc iespējas vairāk, lai nodrošinātu savu finansiālo nākotni. Tu prasmīgi plāno un kontrolē savu tēriņu, lai maksimāli palielinātu savus iekrājumus.")
  }
}


function myFunction() {
  // let ienakumi = Number(document.getElementById("alga").value) + Number(document.getElementById("citia").value);
  // document.getElementById('ienakumi').innerHTML = ienakumi;
  var x = document.getElementById("myTable").rows[1].cells;
  x[1].innerHTML = "kkas";
}




function talak() {
  window.location.replace("index2.html");
}
function atpakal() {
  window.location.replace("index.html");
}