const program = [
  {
    Name: 'Lectures',
    Description: 'Listen to the speakers from various countries talking about old and new trendings',
    FeaturedImage: 'img/program_01.png',
  },
  {
    Name: 'Forums',
    Description: 'Discuss findings on how art contributes to stabilizes the local economy',
    FeaturedImage: 'img/program_02.png',
  },
  {
    Name: 'Collections',
    Description: 'A source of pride and revenue for hundreds of creative professionals',
    FeaturedImage: 'img/program_03.png',
  },
  {
    Name: 'Exhibitions',
    Description: 'A source of pride and revenue for hundreds of creative professionals',
    FeaturedImage: 'img/program_04.png',

  },
  {
    Name: 'Courses',
    Description: 'Discuss findings on how art contributes to stabilizes the local economy',
    FeaturedImage: 'img/program_05.png',
  },
];

const speakers = [
  {
    Image: './img/speaker_01.png',
    Name: 'Yonchai Benkler',
    Profession:
      'Film director, screenwriter and actor',
    Description:
      'Nominated for an Academy Award for Best Supporting Actor, two Critics Choice Movie Awards, and two British Academy Film Awards',
  },
  {
    Image: './img/speaker_02.png',
    Name: 'Joen Gil-nam',
    Profession: 'Producer, dancer and choreographer',
    Description:
      'Over more than 30 years creating more than 180 works',
  },
  {
    Image: './img/speaker_03.png',
    Name: 'Julia Leda',
    Profession:
      'Short-story writer, essayist, poet, and translator',
    Description:
      'Published a number of works, including multiple books of poetry, novels, books of non-fiction, collections of poetry and short fiction',
  },
  {
    Image: './img/speaker_04.png',
    Name: 'Layla Tretikov',
    Profession: 'Painter, sculptor and printmaker',
    Description:
      'Innovated different ways of creating striking compositions and one of the most visually pleasing painting layouts of the decade',
  },
  {
    Image: './img/speaker_05.png',
    Name: 'Ryan Merjkey',
    Profession:
      'Ceramicist and theatre designer',
    Description:
      'Nominated for the Olivier Award for Most Promising Newcomer and some sources coin her as one of the pioneers of artistic ceramics',
  },
  {
    Image: './img/speaker_06.png',
    Name: 'Noh So-Young',
    Profession: 'Singer-songwriter, musician, and record producer',
    Description:
      'Regarded as one of the most significant songwriters of his generation',
  },
];

const hamburger = document.querySelector('.mobilemenu');
const overlay = document.querySelector('.open');
const cancel = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
});

const dynamain = document.querySelector('.mainprogram');

for (let i = 0; i < program.length; i += 1) {
  const dynadiv = document.createElement('div');
  dynadiv.className = 'dynadiv';
  dynadiv.style.background = '#rgba(255, 255, 255, 0.1);';
  const dynaimg = document.createElement('img');
  dynaimg.src = program[i].FeaturedImage;
  const dynah2 = document.createElement('h2');
  dynah2.textContent = program[i].Name;
  dynah2.style.color = '#rgb(255, 51, 0)';
  const dynap = document.createElement('p');
  dynap.style.border = 'none';
  dynap.style.color = '#fff';
  dynap.textContent = program[i].Description;
  dynadiv.appendChild(dynaimg);
  dynadiv.appendChild(dynah2);
  dynadiv.appendChild(dynap);
  dynamain.appendChild(dynadiv);
}

const dynawholebutton = document.querySelector('.wholeprogrambutton');
dynawholebutton.classList.add('d-flex', 'justify-content-center');
const dynaprogrambutton = document.createElement('a');
dynaprogrambutton.textContent = 'SEE THE WHOLE PROGRAM';
dynaprogrambutton.classList.add('btn', 'btn-dark', 'mt-5');
dynawholebutton.appendChild(dynaprogrambutton);

let mql = window.matchMedia('(max-width: 764px)');

// if (mql){
//   dynaprogrambutton.textContent='Join Container Festival';
//   dynaprogrambutton.style.backgroundColor='rgb(255, 51, 0)'
// } else if (mql1) {
//   dynaprogrambutton.textContent='SEE THE WHOLE PROGRAM';
//   dynaprogrambutton.classList.add('btn', 'btn-dark', 'mt-5');
// }

const dynaspeakers = document.querySelector('.speakers');

for (let i = 0; i < speakers.length; i += 1) {
  const dynadivs1 = document.createElement('div');
  dynadivs1.className = 'dynadivs1';
  dynadivs1.classList.add('mb-2', 'mt-2', 'me-2', 'ms-2');

  const dynadivs2 = document.createElement('div');
  dynadivs2.classList.add('dynadivs2', 'm-2');

  const dynaimgs = document.createElement('img');
  dynaimgs.src = speakers[i].Image;

  const dynah2s = document.createElement('h2');
  dynah2s.textContent = speakers[i].Name;
  dynah2s.classList.add('me-3');

  const dynaps1 = document.createElement('p');
  dynaps1.className = 'dynaps1';
  dynaps1.style.border = 'none';
  dynaps1.textContent = speakers[i].Profession;
  dynaps1.classList.add('me-5');

  const dynaps2 = document.createElement('p');
  dynaps2.className = 'dynaps2';
  dynaps2.style.border = 'none';
  dynaps2.textContent = speakers[i].Description;
  dynaps2.classList.add('me-5');

  dynadivs1.appendChild(dynaimgs);
  dynadivs2.appendChild(dynah2s);
  dynadivs2.appendChild(dynaps1);
  dynadivs2.appendChild(dynaps2);
  dynaspeakers.appendChild(dynadivs1);
  dynaspeakers.appendChild(dynadivs2);
}

const dynaaa = document.createElement('a');
dynaaa.href = 'about.html';
const dynaab = document.createElement('a');
const dynaac = document.createElement('a');
const dynaad = document.createElement('a');
const dynaae = document.createElement('a');
const dynaaf = document.createElement('a');

dynaaa.className = 'dynaaa';
dynaab.className = 'dynaab';
dynaac.className = 'dynaac';
dynaad.className = 'dynaad';
dynaae.className = 'dynaae';
dynaaf.className = 'dynaaf';

dynaaa.textContent = 'About';
dynaab.textContent = 'Program';
dynaac.textContent = 'Join';
dynaad.textContent = 'Sponsor';
dynaae.textContent = 'News';
dynaaf.textContent = 'Campaign';

const menu = [dynaaa, dynaab, dynaac, dynaad, dynaae, dynaaf];

for (let i = 0; i < 6; i += 1) {
  overlay.appendChild(menu[i]);
}
