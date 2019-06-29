let defaultColor = randomHex();

document.body.style.backgroundColor = defaultColor;

document.getElementById('hexColor').innerHTML = defaultColor;



let runState = true;

cycleColors(runState);

$(playStatusButton).click(function() {
    if (runState === true) {
        runState = false;
        cycleState('Pause')
    } else {
        runState = true;
        cycleState('Resume');
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
        console.log('Play');
        colorShow = setInterval(function() {

            let nextColor = randomHex();

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
    if(status === 'Resume') {
        document.getElementById('playStatusButton').innerHTML = status;
    } else if(status === 'Pause') {
        document.getElementById('playStatusButton').innerHTML = status;
    }
}
