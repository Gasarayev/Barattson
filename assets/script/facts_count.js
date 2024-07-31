const ACCAcounter = document.getElementById("ACCAcounter");
const IELTScounter = document.getElementById("IELTScounter");
const DIPFRcounter = document.getElementById("DIPFRcounter");


let countNumbACCA = 1;
function ACCAcount() {
  ACCAcounter.textContent = countNumbACCA;
  if (countNumbACCA >= 1500) {
    clearInterval(lastNumbACCA)
  }

  countNumbACCA++;
}
let lastNumbACCA = setInterval(ACCAcount, 2);



let countNumbIELTS = 1;

function IELTScount() {
    IELTScounter.textContent = countNumbIELTS;
  if (countNumbIELTS >= 14700) {
    clearInterval(lastNumbIELTS)
  }

  countNumbIELTS = countNumbIELTS +10;
};

let lastNumbIELTS = setInterval(IELTScount, .5)



let countNumbDIPFR = 1;
function DIPFRcount() {
    DIPFRcounter.textContent = countNumbDIPFR;
  if (countNumbDIPFR >= 4193) {
    clearInterval(lastNumbDIPFR)
  }

  countNumbDIPFR = countNumbDIPFR +3;
};

let lastNumbDIPFR = setInterval(DIPFRcount, 2)


