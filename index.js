alert ("working!");


function generate(){
    var quotes = {
        "-Jesus Christ" : '"For everyone who exalts himself will be humbled,and everyone who humbles himself will be exalted."',
        "- Jesus Christ" : '"So I say to you, Ask and it will be given to you; search, and you will find; knock, and the door will be opened for you."',

    }


var authors = Object.keys(quotes);
console.log(authors);
var author = authors[Math.floor(Math.random()*authors.length)];
var quote = quotes[author];

document.querySelector("h1").innerHTML=quote;

document.querySelector("h2").innerHTML=author;
}