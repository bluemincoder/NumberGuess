const form = document.querySelector("form");
const submit = document.querySelector("#subt");
const user = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const last = document.querySelector(".lastResult");
const lohi = document.querySelector(".lowOrHi");
const startover = document.querySelector(".resultParas");


let num = parseInt(Math.random() * 100 + 1);

const p = document.createElement('p');

let arr=[], n=1, game=true;

if(game){
      submit.addEventListener('click', (e)=>{
            e.preventDefault();
            const g =parseInt(user.value);
            console.log(g);
            validate(g);
      })
}

function validate(guess){
      if(isNaN(guess) || guess<1 || guess>100){
            alert('Please enter a valid number');
      }
      else{
            arr.push(guess);
            if(n==11){
                  displayg(guess);
                  displaym(`Game Over. Random number was ${num}`);
                  endgame();
            }
            else{
                  displayg(guess);
                  check(guess);
            }
      }
}

function check(guess){
      if(num==guess){
            displaym(`you guessed it right`);
            endgame();
      }
      else if(guess<num){
            displaym(`Number is tooo low`);
      }
      else if(guess>num){
            displaym(`Number is tooo high`);
      }
}

function displayg(guess){
      user.value="";
      guessSlot.innerHTML+=`${guess},`;
      n++;
      last.innerHTML=`${6-n}`;
}

function displaym(message){
      lohi.innerHTML=`<h2>${message}</h2>`
}

function endgame() {
      user.innerHTML="";
      user.setAttribute('disabled',"");
      p.classList.add('button')
      p.innerHTML = `<h2 id="newGame"> Start a New Game</h2>`;
      startover.appendChild(p);
      game=false;
      newgame();
}

function newgame(){
      const ng=document.querySelector('#newGame');
      ng.addEventListener('click', (e)=>{
            num = parseInt(Math.random() * 100 + 1);
            guess=[];
            n=1;
            guessSlot.innerHTML="";
            lohi.innerHTML="";
            last.innerHTML=`${6-n}`;
            user.removeAttribute('disabled');
            startover.removeChild(p);
            game=true;
      })
}

 