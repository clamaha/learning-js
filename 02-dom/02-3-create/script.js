
//adding a section and changing bg color
const learners = ['Person 1', 'Person 2','Person 3','Person 4','Person 5','Person 6','Person 7','Person 8','Person 9','Person 10'];

function RandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const article = document.querySelector('article');

learners.forEach((learner) => {

  const section = document.createElement('section');

  const backgroundColor = RandomColor();

  section.style.backgroundColor = backgroundColor;

  const paragraph = document.createElement('p');
  paragraph.textContent = learner;

  section.appendChild(paragraph);

  article.appendChild(section);

//shuffle the order of elements
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(learners);
});

//dark text/light bg - light bg/dark text
function isTooDark(hexcolor){
    let r = parseInt(hexcolor.substring(1,3),16);
    let g = parseInt(hexcolor.substring(3,5),16);
    let b = parseInt(hexcolor.substring(5,7),16);
    let lum = ((r*299)+(g*587)+(b*114))/1000;

    return lum < 125;
}


 