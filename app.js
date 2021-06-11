const user_score = 0
const machine_score = 0
const user_score_span = document.getElementById('user_score')
const machine_score_span = document.getElementById('machine_score')
const scoreboard_div = document.querySelector('.scoreboard')
const result_div = document.querySelector('.result')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')

function main(){
    rock_div.addEventListener('click', function() {
        game('r')
    })

    paper_div.addEventListener('click', function() {
        game('p')
    })

    scissors_div.addEventListener('click', function() {
        game('s')
    })
}

function machine_choice(){
    const array = ['r', 'p', 's']
    const random = Math.floor(Math.random()*3)
    return array[random]
}

function game(user){
    const machine = machine_choice()
    switch(user+machine){
        case 'rs':
        case 'pr':
        case 'sp':
            console.log('user wins')
            break
        case 'rp':
        case 'ps':
        case 'sr':
            console.log('machine wins')
            break
        case 'rr':
        case 'pp':
        case 'ss':
            console.log('Tie')
            break
    }
}

main()