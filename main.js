let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let images = document.querySelectorAll('.img-slider');

let sliderIndex = 0;

 showDivs = (index) => {
	if (index > images.length - 1) {
		sliderIndex = 0;
	}
	if (index < 0) {
		sliderIndex = images.length - 1;
	}
	for (let i = 0; i < images.length; i++) {
		images[i].classList.remove('show');
	}
	images[sliderIndex].classList.toggle('show');
}

prev.addEventListener('click', () => {
	showDivs(--sliderIndex);
})
next.addEventListener('click', () => {
	showDivs(++sliderIndex)
})