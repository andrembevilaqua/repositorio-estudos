const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let vida = document.querySelector("#vida");
let pontuacao = document.querySelector("#pontuacao");
let velocidade = 20;


let isJumping = false;
let position = 0;
vida.textContent = 3;
pontos = 0;
pontuacao.textContent = pontos;

function handlKeyUp(event){
    if (event.keyCode == 32){
        if (!isJumping){
            jump();
        }
    }
}

function jump(){
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150){
            clearInterval(upInterval);

            //Descendo
            let downInterval = setInterval(() => {
                if (position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            },30);
        }else{
            position += 20;
            dino.style.bottom = position + 'px';   
        }
    }, 30);
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 5000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 5000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
            pontos += 10;
            pontuacao.textContent  = pontos;
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
            //Game Over
            vida.textContent -= 1;
            clearInterval(leftInterval);
            background.removeChild(cactus);
             
            if (vida.textContent ==    0) {
                document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
            }

        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';            
        }
    },20 );

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handlKeyUp);

