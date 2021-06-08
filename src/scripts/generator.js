// Text Gen

const text = document.getElementById("text");
const txtgen = require("txtgen");
const container = document.querySelector("container");

document
  .getElementById("generateparagraph")
  .addEventListener("click", function () {
    var paragraph = txtgen.paragraph();
    text.innerHTML = paragraph;
  });

document
  .getElementById("generatesentence")
  .addEventListener("click", function () {
    var sentence = txtgen.sentence();
    text.innerHTML = sentence;
  });

document
  .getElementById("generatearticle")
  .addEventListener("click", function () {
    var article = txtgen.article();
    text.innerHTML = article;
  });

// Animations

const animate = require("animejs");

animate({
  target: "body",
  
})