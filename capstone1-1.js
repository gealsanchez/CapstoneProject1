const hamburger = document.querySelector('.mobilemenu');
const overlay = document.querySelector('.open');
const cancel = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    overlay.style.display = 'flex';
});

cancel.addEventListener('click', () => {
    overlay.style.display = 'none';
});

const dynaaa = document.createElement('a');
dynaaa.href = 'index.html';
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

dynaaa.textContent = 'Home';
dynaab.textContent = 'Program';
dynaac.textContent = 'Join';
dynaad.textContent = 'Sponsor';
dynaae.textContent = 'News';
dynaaf.textContent = 'Campaign';

menu = [dynaaa, dynaab, dynaac, dynaad, dynaae, dynaaf]

for (let i = 0; i < 6; i += 1) {
    overlay.appendChild(menu[i]);
}


