const txtgen = require('txtgen');
const animate = require('animejs');
const textholder = document.getElementById('textholder');

animate({
    targets: 'body',
    duration: 5000,
    background: "#001375",
})

document.getElementById("generateparagraph").addEventListener("click", function() {
  let paragraph = txtgen.paragraph;
  console.log(paragraph);
  textholder.append("<p>" + paragraph + "</p>");
});

document.getElementById("generatesentence").addEventListener("click", function() {
  alert("Hello World!");
});

document.getElementById("generatearticle").addEventListener("click", function() {
  alert("Hello World!");
});