const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClass();
    panel.classList.add('active');
  });
});

function removeActiveClass() {
  const panelActives = document.querySelectorAll('.panel.active');
  panelActives.forEach((panel) => {
    panel.classList.remove('active');
  });
}
