const agim = document.querySelector('.agim');
const egim = document.querySelector('.egim');
const bgim = document.querySelector('.bgim');

const acoustic = document.querySelector('.acoustic');
const electric = document.querySelector('.electric');
const bass = document.querySelector('.bass');

agim.addEventListener('click', () => {
    acoustic.style.opacity = '1';
    electric.style.opacity = '0';
    bass.style.opacity = '0';
});

egim.addEventListener('click', () => {
    acoustic.style.opacity = '0';
    electric.style.opacity = '1';
    bass.style.opacity = '0';
});

bgim.addEventListener('click', () => {
    acoustic.style.opacity = '0';
    electric.style.opacity = '0';
    bass.style.opacity = '1';
});
