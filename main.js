let defaultColor = randomHex();

document.body.style.backgroundColor = defaultColor;

document.getElementById('hexColor').innerHTML = defaultColor;



let runState = true;

cycleColors(runState);

$(playStatusButton).click(function() {
    if (runState === true) {
        runState = false;
        cycleState(runState)
    } else {
        runState = true;
        cycleState(runState);
    } 
    cycleColors(runState);
});



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
        console.log('Resume');
        colorShow = setInterval(function() {

            let nextColor = randomHex();
            console.log(nextColor);
            document.getElementById('hexColor').innerHTML = nextColor;

            $('body').animate({
                'background-color': nextColor
            }, 1000);

        }, 2000);
    } else {
        console.log('Pause');
        clearInterval(colorShow)
    }
}

function cycleState(status) {
    if(status) {
        document.getElementById('playStatusButton').innerHTML = 'Pause';
    } else {
        document.getElementById('playStatusButton').innerHTML = 'Resume';
    }
}
