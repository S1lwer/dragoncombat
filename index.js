
let app = document.querySelector('.app')

const hamster = document.querySelector('.display_tap')

const currentWallet = document.querySelector('#wallet_coin')

const currentEnergy = document.querySelector('#energy')

const lvlProgress = document.querySelector('.level_progress')

const lvl = document.querySelector('#level')

const data = {
    coin:0,
    energy:1000,
profit:2,
level:1,
level_progress:0,
earn_per_tap:1
}

function handleGreeting(){
    let div = document.createElement('div')
    let img = document.createElement('img')
    img.src = '../assets/hamster-poster.png'
div.classList.add('greating')
    div.appendChild(img);


document.body.appendChild(div)






setTimeout(function(){
div.remove()
app.style.display = 'flex'

},6000)
}

function handeleTap(e){
if(data.energy > 0){
    data.coin = data.coin + data.earn_per_tap;
    data.energy = data.energy - 1;
    currentWallet.innerHTML = data.coin;
    currentEnergy.innerHTML = data.energy;
    hamster.classList.add('tap_mod');
let timer = setTimeout(()=>{
    clearTimeout(timer);
hamster.classList.remove('tap_mod');
},100)

}

const money = document.createElement('img')
money.src = '../assets/hamster-coin.png'
money.classList.add('money')

app.appendChild(money)

money.style.left = e.clientX + 'px'
money.style.top = e.clientY - 50 + 'px'



setTimeout(()=>{
    money.remove();
  },1000)

updateLevel();

}
function updateLevel(){
    if(data.level_progress >= 100){
        data.level = data.level + 1;
        data.earn_per_tap = data.earn_per_tap + 1;
        data.profit = data.profit * 2;
        data.level_progress = 0;

lvlProgress.style.width = data.level_progress + '%'
lvl.innerHTML = data.level
    }
    data.level_progress = data.level_progress + 1
    lvlProgress.style.width = data.level_progress + '%'
}
function earnPerSecond(){
   let profitInterval = setInterval(function(){
data.coin = data.coin + data.profit;
currentWallet.innerHTML = data.coin;
   },2000)



}

function energyPerSecond(){
    let energyInterval = setInterval(function(){
        if(data.energy < 1000){data.energy = data.energy + 2;
            currentEnergy.innerHTML = data.energy;}

   },2000)
}














hamster.addEventListener('click',handeleTap)
energyPerSecond()
earnPerSecond()
handleGreeting();