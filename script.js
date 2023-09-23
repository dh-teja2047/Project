/*function pop(){
    document.getElementById("popup").style.display = "block";
}

function close(){
    document.getElementById("popup").style.display = "none";
}


*/
// script.js
const rules = document.getElementById('rules');
const c = document.getElementById('c');
const pop = document.getElementById('popup');

rules.addEventListener('click', () => {
    pop.style.display = 'block';
});

c.addEventListener('click', () => {
    pop.style.display = 'none';
});


var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissor = document.getElementById('scissor');

rock.addEventListener("click", () => {
    var r = 0;
    var c = Math.floor(Math.random()*3);
    console.log(r);
    console.log(c);
    if(c === 0){
        console.log('Tie')
    }
    else if(c === 1){
        console.log('Win')
    }
    else if(c === 2){
        console.log('Lost')
    }

    
});

scissor.addEventListener("click", () => {
    var s = 1;
    let c = Math.floor(Math.random()*3);
    console.log(s);
    console.log(c);
    if(c === 0){
        console.log('Lost')
    }
    else if(c === 1){
        console.log('Tie')
    }
    else if(c === 2){
        console.log('Win')
    }
});
paper.addEventListener("click", () => {
    var p = 2;
    let c = Math.floor(Math.random()*3);
    console.log(p);
    console.log(c);
    if(c === 0){
        console.log('Win')
    }
    else if(c === 1){
        console.log('Lost')
    }
    else if(c === 2){
        console.log('Tie')
    }
});

