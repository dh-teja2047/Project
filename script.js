var cc = document.getElementById('choice'); //computer choice
var rules = document.getElementById('rules');
var c = document.getElementById('c'); //close the popup
var pop = document.getElementById('popup');

rules.addEventListener('click', () => {
    pop.style.display = 'block';
});

c.addEventListener('click', () => {
    pop.style.display = 'none';
});


var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissor = document.getElementById('scissor');

var leftOuterCircle = document.getElementById('leftOuterCircle');
var leftMiddleCircle = document.getElementById('leftMiddleCircle');
var leftInnerCircle = document.getElementById('leftInnerCircle');
var rightOuterCircle = document.getElementById('rightOuterCircle');
var rightMiddleCircle = document.getElementById('rightMiddleCircle');
var rightInnerCircle = document.getElementById('rightInnerCircle');

var picker = document.getElementById('picker');


var yourScore = 0;
var pcScore = 0;

rock.addEventListener("click", () => {
    var r = 0;
    var c = Math.floor(Math.random() * 3);
    console.log(r);
    console.log(c);

    document.getElementById('choice').style.display = 'none';

    picker.style.display = 'flex';

    if (c === 0) {
        console.log('Tie');

        document.getElementById('resultPanel').style.display = 'flex';

        var content = document.getElementById("content");
        content.innerHTML = "TIE UP";

        var content1 = document.getElementById("content1");
        content1.innerHTML = "";

        var newRock1 = document.getElementById("rockImage");

        var newRock2 = document.getElementById("scissorImage");
        newRock2.setAttribute("src", "icon-rock.png");

        var image1 = document.getElementById("image1");
        image1.style.borderColor = 'rgba(0, 116, 182, 1)';

        var image2 = document.getElementById("image2");
        image2.style.borderColor = 'rgba(0, 116, 182, 1)';

        leftOuterCircle.style.display = 'none';
        leftMiddleCircle.style.display = 'none';
        leftInnerCircle.style.display = 'none';
    
        rightOuterCircle.style.display = 'none';
        rightMiddleCircle.style.display = 'none';
        rightInnerCircle.style.display = 'none';
    

    }
    else if (c === 1) {
        console.log('Win')

        document.getElementById('resultPanel').style.display = 'flex';

        var content = document.getElementById("content");
        content.innerHTML = "YOU WIN";

        var content1 = document.getElementById("content1");
        content1.innerHTML = "AGAINST PC";

        var newRock1 = document.getElementById("rockImage");
        newRock1.setAttribute("src", "icon-rock.png");

        var newRock2 = document.getElementById("scissorImage");
        newRock2.setAttribute("src", "icon-scissor.png");

        var image1 = document.getElementById("image1");
        image1.style.borderColor = 'rgba(0, 116, 182, 1)';

        var image2 = document.getElementById("image2");
        image2.style.borderColor = "rgba(189, 0, 255, 1)";
    
        leftOuterCircle.style.display = 'block';
        leftMiddleCircle.style.display = 'block';
        leftInnerCircle.style.display = 'block';

        rightOuterCircle.style.display = 'none';
        rightMiddleCircle.style.display = 'none';
        rightInnerCircle.style.display = 'none';

        yourScore++;
    }
    else if (c === 2) {
        console.log('Lost')

        document.getElementById('resultPanel').style.display = 'flex';

        var content = document.getElementById("content");
        content.innerHTML = "YOU LOST";

        var content1 = document.getElementById("content1");
        content1.innerHTML = "AGAINST PC";

        var newRock1 = document.getElementById("rockImage");
        newRock1.setAttribute("src", "icon-rock.png");

        var newRock2 = document.getElementById("scissorImage");
        newRock2.setAttribute("src", "icon-paper.png");

        var image1 = document.getElementById("image1");
        image1.style.borderColor = 'rgba(0, 116, 182, 1)';

        var image2 = document.getElementById("image2");
        image2.style.borderColor = "rgba(255, 169, 67, 1)";
       
        
        leftOuterCircle.style.display = 'none';
        leftMiddleCircle.style.display = 'none';
        leftInnerCircle.style.display = 'none';

        rightOuterCircle.style.display = 'block';
        rightMiddleCircle.style.display = 'block';
        rightInnerCircle.style.display = 'block';

        pcScore++;
    }

    localStorage.setItem('yourScore', yourScore)
    localStorage.setItem('pcScore', pcScore)

    document.getElementById('computerScore').value = pcScore;
    document.getElementById('yourScore').value = yourScore;
});

scissor.addEventListener("click", () => {
    var s = 1;
    let c = Math.floor(Math.random() * 3);
    console.log(s);
    console.log(c);

    document.getElementById('choice').style.display = 'none';

    picker.style.display = 'flex';

    if (c === 0) {
        console.log('Lost')

        document.getElementById('resultPanel').style.display = 'flex';

        var content = document.getElementById("content");
        content.innerHTML = "YOU LOST";

        var content1 = document.getElementById("content1");
        content1.innerHTML = "AGAINST PC";

        var newRock1 = document.getElementById("rockImage");
        newRock1.setAttribute("src", "icon-scissor.png");

        var newRock2 = document.getElementById("scissorImage");
        newRock2.setAttribute("src", "icon-rock.png");

        var image1 = document.getElementById("image1");
        image1.style.borderColor = "rgba(189, 0, 255, 1)";

        var image2 = document.getElementById("image2");
        image2.style.borderColor = "rgba(0, 116, 182, 1)";

        leftOuterCircle.style.display = 'none';
        leftMiddleCircle.style.display = 'none';
        leftInnerCircle.style.display = 'none';

        rightOuterCircle.style.display = 'block';
        rightMiddleCircle.style.display = 'block';
        rightInnerCircle.style.display = 'block';

        pcScore++;

    }
    else if (c === 1) {
        console.log('Tie')

        document.getElementById('resultPanel').style.display = 'flex';

        var content = document.getElementById("content");
        content.innerHTML = "TIE UP";

        var newRock1 = document.getElementById("rockImage");
        newRock1.setAttribute("src", "icon-scissor.png");

        var newRock2 = document.getElementById("scissorImage");
        newRock2.setAttribute("src", "icon-scissor.png");

        var image1 = document.getElementById("image1");
        image1.style.borderColor = "rgba(189, 0, 255, 1)";

        var image2 = document.getElementById("image2");
        image2.style.borderColor = "rgba(189, 0, 255, 1)";

        leftOuterCircle.style.display = 'none';
        leftMiddleCircle.style.display = 'none';
        leftInnerCircle.style.display = 'none';
    
        rightOuterCircle.style.display = 'none';
        rightMiddleCircle.style.display = 'none';
        rightInnerCircle.style.display = 'none';
    }
    else if (c === 2) {
        console.log('Win')

        document.getElementById('resultPanel').style.display = 'flex';

        var content = document.getElementById("content");
        content.innerHTML = "YOU WIN";

        var content1 = document.getElementById("content1");
        content1.innerHTML = "AGAINST PC";

        var newRock1 = document.getElementById("rockImage");
        newRock1.setAttribute("src", "icon-scissor.png");

        var newRock2 = document.getElementById("scissorImage");
        newRock2.setAttribute("src", "icon-paper.png");

        var image1 = document.getElementById("image1");
        image1.style.borderColor = "rgba(189, 0, 255, 1)";

        var image2 = document.getElementById("image2");
        image2.style.borderColor = "rgba(255, 169, 67, 1)";

        leftOuterCircle.style.display = 'block';
        leftMiddleCircle.style.display = 'block';
        leftInnerCircle.style.display = 'block';

        rightOuterCircle.style.display = 'none';
        rightMiddleCircle.style.display = 'none';
        rightInnerCircle.style.display = 'none';

        yourScore++;
    }

    localStorage.setItem('yourScore', yourScore)
    localStorage.setItem('pcScore', pcScore)

    document.getElementById('computerScore').value = pcScore;
    document.getElementById('yourScore').value = yourScore;
});
paper.addEventListener("click", () => {

    var p = 2;
    let c = Math.floor(Math.random() * 3);
    console.log(p);
    console.log(c);

    document.getElementById('choice').style.display = 'none';

    picker.style.display = 'flex';

    if (c === 0) {
        console.log('Win')

        document.getElementById('resultPanel').style.display = 'flex';

        var content = document.getElementById("content");
        content.innerHTML = "YOU WIN";

        var content1 = document.getElementById("content1");
        content1.innerHTML = "AGAINST PC";

        var newRock1 = document.getElementById("rockImage");
        newRock1.setAttribute("src", "icon-paper.png");

        var newRock2 = document.getElementById("scissorImage");
        newRock2.setAttribute("src", "icon-rock.png");

        var image1 = document.getElementById("image1");
        image1.style.borderColor = "rgba(255, 169, 67, 1)";

        var image2 = document.getElementById("image2");
        image2.style.borderColor = "rgba(0, 116, 182, 1)";

        leftOuterCircle.style.display = 'block';
        leftMiddleCircle.style.display = 'block';
        leftInnerCircle.style.display = 'block';

        rightOuterCircle.style.display = 'none';
        rightMiddleCircle.style.display = 'none';
        rightInnerCircle.style.display = 'none';
        yourScore++;
    }
    else if (c === 1) {
        console.log('Lost');

        document.getElementById('resultPanel').style.display = 'flex';

        var content = document.getElementById("content");
        content.innerHTML = "YOU LOST";

        var content1 = document.getElementById("content1");
        content1.innerHTML = "AGAINST PC";

        var newRock1 = document.getElementById("rockImage");
        newRock1.setAttribute("src", "icon-paper.png");

        var newRock2 = document.getElementById("scissorImage");
        newRock2.setAttribute("src", "icon-scissor.png");

        var image1 = document.getElementById("image1");
        image1.style.borderColor = "rgba(255, 169, 67, 1)";

        var image2 = document.getElementById("image2");
        image2.style.borderColor = "rgba(189, 0, 255, 1)";

        leftOuterCircle.style.display = 'none';
        leftMiddleCircle.style.display = 'none';
        leftInnerCircle.style.display = 'none';

        rightOuterCircle.style.display = 'block';
        rightMiddleCircle.style.display = 'block';
        rightInnerCircle.style.display = 'block';

        pcScore++;
    }
    else if (c === 2) {
        console.log('Tie')

        document.getElementById('resultPanel').style.display = 'flex';

        var content = document.getElementById("content");
        content.innerHTML = "TIE UP";

        var newRock1 = document.getElementById("rockImage");
        newRock1.setAttribute("src", "icon-paper.png");

        var newRock2 = document.getElementById("scissorImage");
        newRock2.setAttribute("src", "icon-paper.png");

        var image1 = document.getElementById("image1");
        image1.style.borderColor = "rgba(255, 169, 67, 1)";

        var image2 = document.getElementById("image2");
        image2.style.borderColor = "rgba(255, 169, 67, 1)";

        leftOuterCircle.style.display = 'none';
        leftMiddleCircle.style.display = 'none';
        leftInnerCircle.style.display = 'none';
    
        rightOuterCircle.style.display = 'none';
        rightMiddleCircle.style.display = 'none';
        rightInnerCircle.style.display = 'none';

    }

    localStorage.setItem('yourScore', yourScore)
    localStorage.setItem('pcScore', pcScore)

    document.getElementById('computerScore').value = pcScore;
    document.getElementById('yourScore').value = yourScore;
});


function replay() {
    cc.style.display = 'flex';
    resultPanel.style.display = 'none';
    picker.style.display = 'none';
}