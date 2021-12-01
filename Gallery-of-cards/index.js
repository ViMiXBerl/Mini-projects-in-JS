const slides = document.querySelectorAll(".slide");
//получаем каждый из этих слайдов  в виде массива

console.log(slides);

//нужно обойти циклом по каждому из этих слайдов и добавить к нему определённого слушателя

for (const slide of slides) {
	//добавляем слушателя
	slide.addEventListener("click", () => {
		clearActiveClasses();
		//добавляем класс
		slide.classList.add("active");
	});
}

const clearActiveClasses = () => {
	slides.forEach((slide) => {
		//удаляем класс active
		slide.classList.remove("active");
	});
};
