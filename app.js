let user_score = 0
let machine_score = 0
const user_score_span = document.getElementById('user_score')
const machine_score_span = document.getElementById('machine_score')
const scoreboard_div = document.querySelector('.scoreboard')
const result_div = document.querySelector('.result')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')

function main(){
    rock_div.addEventListener('click', ()=>game('r'))
    paper_div.addEventListener('click', ()=>game('p'))
    scissors_div.addEventListener('click', ()=>game('s'))
}

function machine_choice(){
    const array = ['r', 'p', 's']
    const random = Math.floor(Math.random()*3)
    return array[random]
}

function combination(user, machine){
    const game_set = new Set([user, machine])
    if (game_set.has('r') && game_set.has('p')){
        var action = 'Paper Covers Rock.'
    }
    else if (game_set.has('r') && game_set.has('s')){
        var action = 'Rock Crushes Scissors.'
    }
    else{
        var action = 'Scissors Cuts Paper.'
    }
    return action
}

function win(user, machine){
    const end = ' You Win!'
    const start = combination(user, machine)
    user_score++
    user_score_span.innerHTML = user_score
    result_div.innerHTML = start+end
    result_div.classList.add('green_glow')
    setTimeout(()=>result_div.classList.remove('green_glow'), 400)
}

function lose(user, machine){
    const end = ' You Lose!'
    const start = combination(user, machine)
    machine_score++
    machine_score_span.innerHTML = machine_score
    result_div.innerHTML = start+end
    result_div.classList.add('red_glow')
    setTimeout(()=>result_div.classList.remove('red_glow'), 400)
}

function tie(){
    result_div.innerHTML = "It's a Tie!"
    result_div.classList.add('grey_glow')
    setTimeout(()=>result_div.classList.remove('grey_glow'), 400)
}

function game(user){
    const machine = machine_choice()
    switch(user+machine){
        case 'rs':
        case 'pr':
        case 'sp':
            win(user, machine)
            break
        case 'rp':
        case 'ps':
        case 'sr':
            lose(user, machine)
            break
        case 'rr':
        case 'pp':
        case 'ss':
            tie()
            break
    }
}

// navbar
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
navToggle.addEventListener("click", ()=>links.classList.toggle("show-links"));

main()