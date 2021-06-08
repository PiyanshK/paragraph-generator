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

  const animate = require("animejs");

  animate({
      targets: "body",
      duration: 10000,
      background: "#e80202",
    })
  
  
  for (var i = 0; 1 <= 100; i++){ 
      const blocks = document.createElement('div');
      blocks.classList.add('block');
      container.appendChild(blocks);
  }