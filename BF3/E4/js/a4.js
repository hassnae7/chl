const campanaButton = document.getElementById('campana');
let count = 0;

/*campanaButton.addEventListener('click', () => {
  count++;
  counterSpan.textContent = count;
});*/

function ringBell() {
  const counterSpan = document.getElementById('counter');
  count++;
  counterSpan.textContent = count;
}
