const songs = [
    ['Backmask' , 0],
    ['Bitches' , 0],
    ["Boomin'" , 0],
    ['Clarissa' , 0],
    ['Cocaine and Toupees' , 0],
    ['Dicks Are for My Friends' , 0],
    ['F' , 0],
    ['Faggot' , 0],
    ['Futures' , 0],
    ['Golden I' , 0],
    ['Harry Truman' , 0],
    ['Holy Shit' , 0],
    ['I Hate Jimmy Page' , 0],
    ["I'm Your Problem Now" , 0],
    ['J' , 0],
    ["Keepin' up with the Kids" , 0],
    ['Kick the Bucket' , 0],
    ['Kill the Rock' , 0],
    ['Last Time I Tried to Rock Your World' , 0],
    ['London Bridge' , 0],
    ['M' , 0],
    ['Masturbates' , 0],
    ['Planet of the Apes' , 0],
    ['Played' , 0],
    ['Ready for Love' , 0],
    ['Royally Fucked' , 0],
    ['Seven-Eleven' , 0],
    ['Step up, Ghettoblaster' , 0],
    ['Whipstickagostop' , 0],
    ['Z' , 0]
]

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

const pairs = [];

for(let i = 0;i < songs.length;i++) {
    for(let j = i+1; j < songs.length;j++) {
        pairs.push([songs[i][0], songs[j][0]]);
    }
}

shuffle(pairs);

let count = 0;

function clickOne() {
    const text = document.getElementById('button1').innerHTML;
    for(let i = 0;i < songs.length; i++) {
        if(text == songs[i][0]) {
            songs[i][1]++;
            break;
        }
    }
    handleInput();
}

function clickTwo() {
    const text = document.getElementById('button2').innerHTML;
    for(let i = 0;i < songs.length; i++) {
        if(text == songs[i][0]) {
            songs[i][1]++;
            break;
        }
    }
    handleInput();
}

function handleInput() {
    if(count == pairs.length) {
        pasteList();
    }
    document.getElementById('button1').innerHTML = pairs[count][0];
    document.getElementById('button2').innerHTML = pairs[count][1];
    count++;
}

function pasteList() {
    let sortable = [];
    for (let i=0;i < songs.length;i++) {
        sortable.push([songs[i][0], songs[i][1]]);
    }
    sortable.sort((a, b) => {
        return b[1] - a[1];
    })
    document.getElementById('button1').remove();
    document.getElementById('button2').remove();
    const list = document.getElementById('list');
    for(let i = 0;i<sortable.length;i++) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${sortable[i][0]}: ${sortable[i][1]}`));
        list.appendChild(li);
    }
}

handleInput();