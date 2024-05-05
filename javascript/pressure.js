const force = document.getElementById('force');
const area = document.getElementById('area');
const btn = document.getElementById("pressure-btn")
const pressureDisplay = document.getElementById('pressreDisplay')

btn.addEventListener('click', ()=>{
    let pressure = Number.parseFloat(force.value)/Number.parseFloat(area.value);
    pressureDisplay.innerHTML = `The pressure is - ${(Number.parseFloat(pressure)).toFixed(3)} Pascals`
    force.value = ''
    area.value = ''
})