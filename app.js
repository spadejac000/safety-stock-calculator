const result = () => {
  let inputs = document.querySelectorAll('.input')
  let mdu = document.getElementById('mdu').value;
  let mlt = document.getElementById('mlt').value;
  let adu = document.getElementById('adu').value;
  let alt = document.getElementById('alt').value;
  let output = (parseInt(mdu) * parseInt(mlt)) - (parseInt(adu) * parseInt(alt))
  if(isNaN(output)) {
    document.getElementById('answer').innerHTML = "Please provide valid inputs"
  } else {
    document.getElementById('answer').innerHTML = `Safety Stock = ${output}`;
  }
}