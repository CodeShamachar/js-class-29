let rangeSlider = document.getElementById('rangeID');
let valueOutput = document.getElementById('value');

rangeSlider.oninput = function(){
  valueOutput.innerText = rangeSlider.value;
}