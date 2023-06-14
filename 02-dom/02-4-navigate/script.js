
//changing ol elements order
const olElement = document.querySelector('ol');

if (olElement) {
  const lastChild = olElement.lastElementChild;  

  if (lastChild) {
    olElement.prepend(lastChild);
  }
}

//changing sections order;

//deleting last section
const lastSection = document.querySelector('section:last-of-type'); 
lastSection.parentNode.removeChild(lastSection);
