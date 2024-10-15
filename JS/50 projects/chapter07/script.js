const containet = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseover', () => containet.classList.add('hover-left'));
left.addEventListener('mouseleave', () => containet.classList.remove('hover-left'));

right.addEventListener('mouseover', () => containet.classList.add('hover-right'));
right.addEventListener('mouseleave', () => containet.classList.remove('hover-right'));
