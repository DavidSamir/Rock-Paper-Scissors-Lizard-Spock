const p = document.querySelector('.p');
const h = document.querySelector('.h');

var i = document.querySelector('#reset');
var c = document.querySelector('#computer');
var y = document.querySelector('#you');


//  the Popup
let endMatch = document.querySelector('.endMatch');


c.innerHTML = localStorage.getItem('ComputerScore') || 0;
y.innerHTML = localStorage.getItem('YourScore') || 0;


// check if this is the user first time 
FirstTime = localStorage.getItem('FirstTime');
console.log(FirstTime)
if (FirstTime == true || FirstTime == 'true') {
    document.querySelector('html').classList.remove("FirstTime");
}


//  Function to Return string for the match status
const status = (a, b) => {
    if (a == 'scissor' && b == 'paper' || a == 'paper' && b == 'scissor') {
        return "Scissors cuts Paper";
    }
    if (a == 'paper' && b == 'rock' || a == 'rock' && b == 'paper') {
        return "Paper covers Rock";
    }
    if (a == 'rock' && b == 'lizard' || a == 'lizard' && b == 'rock') {
        return "Rock crushes Lizard";
    }
    if (a == 'lizard' && b == 'spock' || a == 'spock' && b == 'lizard') {
        return "Lizard poisons Spock";
    }
    if (a == 'spock' && b == 'scissor' || a == 'scissor' && b == 'spock') {
        return "Spock smashes Scissors";
    }
    if (a == 'scissor' && b == 'lizard' || a == 'lizard' && b == 'scissor') {
        return "Scissors decapitates Lizard";
    }
    if (a == 'lizard' && b == 'paper' || a == 'paper' && b == 'lizard') {
        return "Lizard eats Paper";
    }
    if (a == 'paper' && b == 'spock' || a == 'spock' && b == 'paper') {
        return "Paper disproves Spock";
    }
    if (a == 'spock' && b == 'rock' || a == 'rock' && b == 'spock') {
        return "Spock vaporizes Rock";
    }
    if (a == 'rock' && b == 'scissor' || a == 'scissor' && b == 'rock') {
        return "Rock crushes Scissors";
    }
    if (a == b) {
        return "You and the Computer choose the same thing";
    }
}

//  Function to Return random option 
const pc = () => {
    let RandomVal = Math.floor(Math.random() * 5 + 1);
    if (RandomVal == 1) {
        return "rock"
    } else if (RandomVal == 2) {
        return "paper"
    } else if (RandomVal == 3) {
        return "scissor"
    } else if (RandomVal == 4) {
        return "lizard"
    } else {
        return "spock"
    }
}
const showCard = (text, status) => {
    const won = "You Won!"
    const lost = "You Lose!"
    const tie = "It's a Draw!"

    if (status == 'won') {
        document.querySelector('.card-content > h4').innerHTML = won;
        document.querySelector('.card-content > p').innerHTML = text;
        endMatch.classList.add('show', 'won')
    }
    if (status == 'lost') {
        document.querySelector('.card-content > h4').innerHTML = lost;
        document.querySelector('.card-content > p').innerHTML = text;
        endMatch.classList.add('show', 'lost')
    }

    if (status == 'tie') {
        document.querySelector('.card-content > h4').innerHTML = tie;
        document.querySelector('.card-content > p').innerHTML = text;
        endMatch.classList.add('show', 'tie')
    }
}

document.addEventListener('click', (event) => {
    document.querySelector('html').classList.remove("FirstTime");
    localStorage.setItem('FirstTime', true)

    if (event.target.classList.contains('btn')) {
        const humain = (event.path[0].id);
        p.id = pc();
        h.id = humain;
        // check If it's a tie

        if (p.id == humain) {
            showCard(status(p.id, h.id), "tie")
        } else {
            // list all the win cases for the PC
            if (
                p.id == 'rock' && h.id == "scissor" ||
                p.id == 'scissor' && h.id == "paper" ||
                p.id == 'paper' && h.id == "rock" ||
                // the extar options [lizard - spock]
                p.id == 'rock' && h.id == "lizard" ||
                p.id == 'paper' && h.id == "spock" ||
                p.id == 'scissor' && h.id == "lizard" ||
                p.id == 'spock' && h.id == "rock" ||
                p.id == 'spock' && h.id == "scissor" ||
                p.id == 'lizard' && h.id == "spock" ||
                p.id == 'lizard' && h.id == "paper"
            ) {
                c.innerHTML++;
                showCard(status(p.id, h.id), "lost")
                localStorage.setItem('ComputerScore', c.innerHTML)
                    // If not than Player Wins
            } else {
                showCard(status(p.id, h.id), "won")
                y.innerHTML++;
                localStorage.setItem('YourScore', y.innerHTML)
            }
        }

        // add class for the winning team
        if (Number(y.innerHTML) > Number(c.innerHTML)) {
            y.classList.add("win");
            c.classList.remove("win");
        } else {
            c.classList.add("win");
            y.classList.remove("win");
        }

    }
})


i.addEventListener('click', () => {
    //set the score to Zero in HTML
    c.innerHTML = '0';
    y.innerHTML = '0';
    //set the score to Zero in localStorage
    localStorage.setItem('ComputerScore', '0');
    localStorage.setItem('YourScore', '0');
    // remove the image
    p.id = null;
    h.id = null;
    //remove the won Class
    c.classList.remove("win");
    y.classList.remove("win");
})



// show the ruls 
let rules = document.querySelector('#rules');
let showRules = document.querySelector('#showRules');
showRules.addEventListener('click', () => {
    rules.classList.add('full')
})
rules.addEventListener('click', () => {
    rules.classList.remove('full')
})




// let showRules = document.querySelector('#showRules');
endMatch.addEventListener('click', () => {
    endMatch.classList.remove('show', 'lost', 'won', 'tie')
})