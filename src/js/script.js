const snake_head = document.querySelector('.snake_head')
const snake_body = document.querySelector('.snake_body')

let snake_head_pos
let snake_wheight = 3

document.addEventListener('keydown', (e)=>{
    snake_head_pos = snake_head.classList[1]
    if(e.keyCode == 39){
        direita(snake_head_pos, a)
    }else if(e.keyCode == 37){
        esquerda(snake_head_pos, a)
    }
})


function cima(x, y){}
function baixo(x, y){}
function esquerda(x, y){
    document.querySelector('.'+x)
    snake_head.classList.remove[1]
}
function direita(x,y){}