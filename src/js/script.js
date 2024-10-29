const snake_head = document.querySelector('.snake_head')
const snake_body = document.querySelector('.snake_body')

let snake_head_pos = snake_head.classList[1]
let snake_wheight = 3

document.addEventListener('keydown', (e)=>{
    if(e.keyCode == 39){
        console.log(snake_head_pos)
    }else if(e.keyCode == 37){
        console.log(snake_head_pos)
    }
})


function cima(x, y){}
function baixo(x, y){}
function esquerda(x, y){}
function direita(x,y){}