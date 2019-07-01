const defaultColor = randomHex();
logColor(defaultColor);
document.body.style.backgroundColor = defaultColor;

document.getElementById('hexColor').innerHTML = defaultColor;



let runState = true;

cycleColors(runState);

$(playStatusButton).click(function() {
    runState = !runState;
    cycleColors(runState);
    updateCycleState(runState);
});


function logColor(color) {
    console.log("%c"+color, "background-color: "+color+"; color: #fff; text-shadow: 1px 1px 3px #555; font-size: 18px; padding: 5px 10px;");
}


function randomHex() {

    let output = '#';

    for (let i = 0; i < 6; i++) {
        const r = Math.random();
        output += r <= 0.5 ? Math.floor(Math.random() * 10) : String.fromCharCode(Math.floor(Math.random() * (70 - 65 + 1)) + 65);
    }

    return output;
}

function cycleColors(instructions) {
    if (instructions) {
        colorShow = setInterval(function() {
            let nextColor = randomHex();
            logColor(nextColor);
            document.getElementById('hexColor').innerHTML = nextColor;
            $('body').animate({
                'background-color': nextColor
            }, 1000);
        }, 2000);
    } else {
        clearInterval(colorShow)
    }
}

function updateCycleState(status) {
    document.getElementById('playStatusButton').innerHTML = status ? 'Pause' : 'Resume';
    console.log(status ? "Resume" : "Pause");
}
