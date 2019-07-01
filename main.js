let defaultColor = randomHex();
logColor(defaultColor);
document.body.style.backgroundColor = defaultColor;

document.getElementById('hexColor').innerHTML = defaultColor;



let runState = true;

cycleColors(runState);

$(playStatusButton).click(function() {
    runState = !runState;
    cycleColors(runState);
    cycleState(runState);
});


function logColor(color) {
    console.log("%c"+color, "background-color: "+color+"; color: #fff; text-shadow: 1px 1px 3px #555; font-size: 18px; padding: 5px 10px;");
}


function randomHex() {

    let output = '#';
    let hexValues = ['A','B','C','D','E','F'];

    for (let i = 0; i < 6; i++) {
        let r = Math.random();

        if (r <= 0.5) {
            output += Math.floor(Math.random() * Math.floor(10));
        } else {
            let l = Math.floor(Math.random() * Math.floor(6));
            output += hexValues[l];
        }
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

function cycleState(status) {
    document.getElementById('playStatusButton').innerHTML = status ? 'Pause' : 'Resume';
    console.log(status ? "Resume" : "Pause");
}
