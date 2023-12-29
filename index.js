alert ("working!");


function generate(){
    var quotes = {
        "-1 Jesus Christ" : '"For everyone who exalts himself will be humbled,and everyone who humbles himself will be exalted."',
        "-2 Jesus Christ" : '"So I say to you, Ask and it will be given to you; search, and you will find; knock, and the door will be opened for you."',
        "- 3 Jesus Christ" : '"As the Father has loved me, so have I loved you."',
        "-4 Jesus Christ" : '"It is not the healthy who need a doctor, but the sick. I have not come to call the righteous, but sinners to repentance."',
       "-5 Jesus Christ" : '"And know that I am with you always; yes, to the end of time."',
     
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