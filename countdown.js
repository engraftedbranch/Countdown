const countSpace = document.getElementById('countdown');
const launchButton = document.getElementById('launchButton');

launchButton.addEventListener('click', launchCountdown);

function launchCountdown() {
    const countInput = document.getElementById('numberInput').value;
    
    for (let i = countInput; i >=0; i--) {
        setTimeout(function() {
            countSpace.innerText = i;
        }, (countInput - i)*1000)
    }
}