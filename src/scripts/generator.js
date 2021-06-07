const textholder = document.getElementById('generatedtext');
const btnscentence = document.getElementById('generatesentence');
const btnparagraph = document.getElementById('generateparagraph');
const btnarticle = document.getElementById('genereatearticle');
const textgen = require('textgen');

function clearContents(element) {
    element.value = '';
  }

document.getElementById('generatesentence').addEventListener("click", function(){
    clearContents(textholder);
    //let scentence = textgen.scentence;
    console.log("scentence");
})