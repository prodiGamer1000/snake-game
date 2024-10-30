const snake_head = document.querySelector('.snake_head')
const snake_body = document.querySelector('.snake_body')

let snake_head_pos
let snake_wheight = 3

document.addEventListener('keydown', (e)=>{
    snake_head_pos = snake_head.classList[1]
    if(e.keyCode == 39){
        direita(snake_head_pos, "a")
    }else if(e.keyCode == 37){
        esquerda(snake_head_pos, "a")
    }
})


function traduzirNumero(n){
    if(n == "um"){
        return n = 1
    }else if(n == "dois"){
        return n = 2
    }else if(n == "tres"){
        return n = 3
    }else if(n == "quatro"){
        return n = 4
    }else if(n == "cinco"){
        return n = 5
    }else if(n == "seis"){
        return n = 6
    }else if(n == "sete"){
        return n = 7
    }else if(n == "oito"){
        return n = 8
    }else if(n == "nove"){
        return n = 9
    }else if(n == "dez"){
        return n = 10
    }else if(n == "onze"){
        return n = 11
    }else if(n == "doze"){
        return n = 12
    }else if(n == "treze"){
        return n = 13
    }else if(n == "catorze"){
        return n = 14
    }else if(n == "quinze"){
        return n = 15
    }else if(n == "dezesseis"){
        return n = 16
    }else if(n == "dezessete"){
        return n = 17
    }
}
function destraduzirNumero(n){
    if(n == 1){
        return n = 'um'
    }else if(n == 2){
        return n = "dois"
    }else if(n == 3){
        return n = "tres"
    }else if(n == 4){
        return n = "quatro"
    }else if(n == 5){
        return n = "cinco"
    }else if(n == 6){
        return n = "seis"
    }else if(n == 7){
        return n = "sete"
    }else if(n == 8){
        return n = "oito"
    }else if(n == 9){
        return n = "nove"
    }else if(n == 10){
        return n = "dez"
    }else if(n == 11){
        return n = "onze"
    }else if(n == 12){
        return n = "doze"
    }else if(n == 13){
        return n = "treze"
    }else if(n == 14){
        return n = "catorze"
    }else if(n == 15){
        return n = "quinze"
    }else if(n == 16){
        return n = "dezesseis"
    }else if(n == 17){
        return n = "dezessete"
    }
}


function cima(x, y){}
function baixo(x, y){}
function esquerda(x, y){
    snake_head.classList.remove('.snake_head')
    number = traduzirNumero(x)
    number--
    snake_head_pos = destraduzirNumero(number)
    document.querySelector('.'+snake_head_pos).classList.add('.snake_head')
    
}
function direita(x,y){}