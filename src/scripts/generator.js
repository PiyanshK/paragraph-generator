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
let contact = document.getElementById("contact");
let socialtitleone = document.getElementById("social-title-one");
let socialtitletwo = document.getElementById("social-title-two");
let socialtitlethree = document.getElementById("social-title-three");

contact.onmousemove = function () {
  animate({
    targets: contact,
    background: "#171414",
    duration: 3000,
  });
  animate({
    opacity: "1",
    duration: 250,
    easing: "easeInOutQuad",
    targets: socialtitleone,
    color: "#fff",
    begin: function () {
      document.getElementById("social-title-one").style.display = "block";
    },
  });
  animate({
    opacity: "1",
    duration: 250,
    easing: "easeInOutQuad",
    targets: socialtitletwo,
    color: "#fff",
    begin: function () {
      document.getElementById("social-title-two").style.display = "block";
    },
  });
  animate({
    opacity: "1",
    duration: 250,
    easing: "easeInOutQuad",
    targets: socialtitlethree,
    color: "#fff",
    begin: function () {
      document.getElementById("social-title-three").style.display = "block";
    },
  });
};
