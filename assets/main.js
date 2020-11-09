const p = document.querySelector('.p');
const h = document.querySelector('.h');

var i = document.querySelector('#reset');
var c = document.querySelector('#computer');
var y = document.querySelector('#you');


c.innerHTML = localStorage.getItem('ComputerScore');
y.innerHTML = localStorage.getItem('YourScore');


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


document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
        const humain = (event.path[0].id);
        p.id = pc();
        // p.innerHTML = p.id;
        // h.innerHTML = humain;
        h.id = humain;
        // check If it's a tie
        if (p.id == humain) {
            // console.log("this is a tie")
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
                // console.log("PC WIN ");
                c.innerHTML++;
                localStorage.setItem('ComputerScore', c.innerHTML)
                    // If not than Player Wins
            } else {
                // console.log("hunmai WIN");
                y.innerHTML++;
                localStorage.setItem('YourScore', y.innerHTML)
            }
        }
    }
})


i.addEventListener('click', () => {
    c.innerHTML = '0';
    y.innerHTML = '0';
    localStorage.setItem('ComputerScore', '0');
    localStorage.setItem('YourScore', '0');
    p.id = null;
    h.id = null;
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