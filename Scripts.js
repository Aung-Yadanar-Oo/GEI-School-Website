// Example: Scroll-to-top button
const scrollButton = document.createElement('button');
scrollButton.textContent = '↑';
scrollButton.style.position = 'fixed';
scrollButton.style.bottom = '10px';
scrollButton.style.right = '10px';
scrollButton.style.display = 'none';
scrollButton.style.padding = '10px';
scrollButton.style.backgroundColor = '#004080';
scrollButton.style.color = 'white';
document.body.appendChild(scrollButton);

window.addEventListener('scroll', () => {
  scrollButton.style.display = window.scrollY > 200 ? 'block' : 'none';
});

scrollButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
