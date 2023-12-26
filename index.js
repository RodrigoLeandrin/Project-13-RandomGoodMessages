alert ("working!");


function generate(){
    var quotes = {
        "-Jesus Christ" : '"For everyone who exalts himself will be humbled,and everyone who humbles himself will be exalted."',
        "- Jesus Christ" : '"So I say to you, Ask and it will be given to you; search, and you will find; knock, and the door will be opened for you."',

    }




document.querySelector("h1").classList.add('fade');
document.querySelector("h2").classList.add('fade');
var authors = Object.keys(quotes);
console.log(authors);
var author = authors[Math.floor(Math.random()*authors.length)];
var quote = quotes[author];

setTimeout (function(){
document.querySelector("h1").innerText=quote;
document.querySelector("h1").classList.remove('fade');

document.querySelector("h2").innerHTML=author;
document.querySelector("h2").classList.remove('fade');
},500);
}