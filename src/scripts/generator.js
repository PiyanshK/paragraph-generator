const animate = require('animejs');
const text = document.getElementById("text");
const txtgen = require("txtgen");


var sentence = txtgen.sentence();
var paragraph = txtgen.paragraph();
var article = txtgen.article();

animate({
    targets: 'body',
    duration: 5000,
    background: "#001375",
})

document
  .getElementById("generateparagraph")
  .addEventListener("click", function () {
    text.innerHTML = paragraph;
  });

document
  .getElementById("generatesentence")
  .addEventListener("click", function () {
    text.innerHTML = sentence;
  });

document
  .getElementById("generatearticle")
  .addEventListener("click", function () {
    text.innerHTML = article;
  });

var sentence = txtgen.sentence();
var paragraph = txtgen.paragraph();
var article = txtgen.article();