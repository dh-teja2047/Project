//var computerScore = document.getElementById('computerScore'); 


var cc = document.getElementById('choice'); //computer choice
const rules = document.getElementById('rules'); 
const c = document.getElementById('c'); //computer
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
    
    var resultPanel = document.getElementById('resultPanel');
    resultPanel.style.display = 'flex';

    var cc = document.getElementById('choice');
    cc.classList.add('hidden'); 
    if(c === 0){
        console.log('Tie')
        var rTc = document.getElementById('rockTie'); //rock Tie with computer
        rTc.classList.remove('hidden');
        rTc.style.display = 'flex';
        document.getElementById('computerScore').value = '0';
        document.getElementById('yourScore').value = '0';
    }
    else if(c === 1){
        console.log('Win')
        var rWc = document.getElementById('rockWin'); //rock Win with computer
        rWc.classList.remove('hidden');
        rWc.style.display = 'flex';
        document.getElementById('computerScore').value = '0';
        document.getElementById('yourScore').value = '1';

    }
    else if(c === 2){
        console.log('Lost')
        var rLc = document.getElementById('rockLoss'); //rock Loss with computer
        rLc.classList.remove('hidden');
        rLc.style.display = 'flex';
        document.getElementById('computerScore').value = '1';
        document.getElementById('yourScore').value = '0';

    }  
});

scissor.addEventListener("click", () => {
    var s = 1;
    let c = Math.floor(Math.random()*3);
    console.log(s);
    console.log(c);

    var resultPanel = document.getElementById('resultPanel');
    resultPanel.style.display = 'flex';
    
    var cc = document.getElementById('choice');
    cc.classList.add('hidden'); 
    if(c === 0){
        console.log('Lost')
        var sLc = document.getElementById('scissorLoss') //scissor Loss with computer
        sLc.classList.remove('hidden')
        sLc.style.display = 'flex';
        document.getElementById('computerScore').value = '1';
        document.getElementById('yourScore').value = '0';

    }
    else if(c === 1){
        console.log('Tie')
        var sTc = document.getElementById('scissorTie')
        sTc.classList.remove('hidden');
        sTc.style.display = 'flex';
        document.getElementById('computerScore').value = '0';
        document.getElementById('yourScore').value = '0';
    }
    else if(c === 2){
        console.log('Win')
        var sWc =document.getElementById('scissorWin')
        sWc.classList.remove('hidden');
        sWc.style.display = 'flex';
        document.getElementById('computerScore').value = '0';
        document.getElementById('yourScore').value = '1';
    }
});
paper.addEventListener("click", () => {

    var p = 2;
    let c = Math.floor(Math.random()*3);
    console.log(p);
    console.log(c);

    var resultPanel = document.getElementById('resultPanel');
    resultPanel.style.display = 'flex';
    
    var cc = document.getElementById('choice');
    cc.classList.add('hidden'); 
    if(c === 0){
        console.log('Win')
        var pWc = document.getElementById('paperWin')
        pWc.classList.remove('hidden');
        pWc.style.display = 'flex';
        document.getElementById('computerScore').value = '0';
        document.getElementById('yourScore').value = '1';
    }
    else if(c === 1){
        console.log('Lost')
        var pLc = document.getElementById('paperLost')
        pLc.classList.remove('hidden');
        pLc.style.display = 'flex';
        document.getElementById('computerScore').value = '1';
        document.getElementById('yourScore').value = '0';
    }
    else if(c === 2){
        console.log('Tie')
        var pTc = document.getElementById('paperTie')
        pTc.classList.remove('hidden');
        pTc.style.display = 'flex';
        document.getElementById('computerScore').value = '0';
        document.getElementById('yourScore').value = '0';
    }
});