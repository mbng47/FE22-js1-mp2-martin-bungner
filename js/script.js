

const nameInp = document.querySelector('#name-inp');
const nameBtn = document.querySelector('#name-btn');
const nameh2 = document.querySelector('#name-h2');

nameBtn.addEventListener('click', getName);
function getName(event) {
    event.preventDefault();

    if (nameInp.value != 0) {
        nameh2.innerText = `Bäst av tre vinner. Välj för att börja spela, ${nameInp.value}!`;
        document.querySelector('p').style.visibility = 'hidden';
    }
}

const rsp = ["Sten", "Sax", "Påse"];
let computersChoice = 0;
let playersChoice = 0;
let computersPoints = 0;
let playersPoints = 0;

const btnContainer = document.querySelector('#btn-container');
btnContainer.addEventListener('click', klunsa);
function klunsa(event) {

    if (event.target.tagName == 'BUTTON' && playersPoints < 2 && computersPoints < 2) {

        if (nameInp.value == 0) {
            document.querySelector('p').style.visibility = 'visible';
        }

        else {
            if (event.target.id == 'rock-btn') {
                playersChoice = rsp[0];
            }

            else if (event.target.id == 'scissor-btn') {
                playersChoice = rsp[1];
            }

            else if (event.target.id == 'paper-btn') {
                playersChoice = rsp[2];
            }

            document.querySelector('#player-kluns-h2').innerText = playersChoice;
            document.querySelector('#player-kluns-h2').style.visibility = 'visible';
            document.querySelector('#player-points-h2').style.visibility = 'visible';

            const randomiser = Math.floor(Math.random() * rsp.length);
            computersChoice = rsp[randomiser];
            document.querySelector('#computer-kluns-h2').innerText = computersChoice;
            document.querySelector('#computer-kluns-h2').style.visibility = 'visible';
            document.querySelector('#computer-points-h2').style.visibility = 'visible';

            if (playersChoice == "Sten" && computersChoice == "Sax" || playersChoice == "Sax" && computersChoice == "Påse" || playersChoice == "Påse" && computersChoice == "Sten") {
                playersPoints++;
                document.querySelector('#player-points-h2').innerText = `${playersPoints}/3`;
                document.querySelector('#player-kluns-h2').style.color = 'green';
                document.querySelector('#computer-kluns-h2').style.color = 'red';
                if (playersPoints == 2) {
                    document.querySelector('#winner-h2').innerText = "Du vann!";
                    document.querySelector('#winner-h2').style.visibility = 'visible';
                    document.querySelector('#reset-btn').style.visibility = 'visible';
                }
            }

            else if (computersChoice == "Sten" && playersChoice == "Sax" || computersChoice == "Sax" && playersChoice == "Påse" || computersChoice == "Påse" && playersChoice == "Sten") {
                computersPoints++;
                document.querySelector('#computer-points-h2').innerText = `${computersPoints}/3`;
                document.querySelector('#computer-kluns-h2').style.color = 'green';
                document.querySelector('#player-kluns-h2').style.color = 'red';
                if (computersPoints == 2) {
                    document.querySelector('#winner-h2').innerText = "Du förlorade!";
                    document.querySelector('#winner-h2').style.visibility = 'visible';
                    document.querySelector('#reset-btn').style.visibility = 'visible';
                }
            }

            else/* if (computersChoice == playersChoice) */ {
                document.querySelector('#computer-kluns-h2').style.color = 'red';
                document.querySelector('#player-kluns-h2').style.color = 'red';
            }
        }
    }
}

const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', reset);
function reset() {

    playersPoints = 0;
    document.querySelector('#player-points-h2').innerText = `${playersPoints}/3`;
    document.querySelector('#player-kluns-h2').style.visibility = 'hidden';
    document.querySelector('#player-points-h2').style.visibility = 'hidden';

    computersPoints = 0;
    document.querySelector('#computer-points-h2').innerText = `${computersPoints}/3`;
    document.querySelector('#computer-points-h2').style.visibility = 'hidden';
    document.querySelector('#computer-kluns-h2').style.visibility = 'hidden';

    document.querySelector('#winner-h2').style.visibility = 'hidden';
    document.querySelector('#reset-btn').style.visibility = 'hidden';
}