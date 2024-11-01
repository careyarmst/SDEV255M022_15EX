
//document.getElementById("Link").href = "https://www.w3.org"
//let funny = document.querySelectorAll("textarea")
//console.log(funny)

let funny = document.querySelector("textarea");
funny.cols = "80";
console.log(funny)

let vexing2 = document.getElementById("inspiring-quote");
vexing2.innerHTML ="<strong>Aspire to inspire before we expire.</strong>"

let h2Element = document.getElementsByTagName("h2")[0];

/* Your solution goes here */
h2Element.addEventListener('mouseover', "h2Element");
console.log("Event handled")