const faqs = document.querySelectorAll("[data-faq]");
const images = document.querySelectorAll("[data-image]");
const imageBtns = document.querySelectorAll("[data-image-button]");
const showMoreBtn = document.querySelector("#show-more");
const boxes = document.querySelectorAll(".box");
const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");
const search = document.querySelector(".search");
const searchBtn =document.querySelector("#search-btn");

// Navbar responsivness
menuBtn.addEventListener("click", () => {
	if (navbar.classList.contains("active")) {
		navbar.classList.remove("active");
		// barsBtn.classList.add("fa-solid fa-xmark")
		menuBtn.classList = "fa fa-bars";
	} else {
		navbar.classList.add("active");
		// barsBtn.classList.remove("fa-solid fa-xmark")
		menuBtn.classList = "fa-solid fa-xmark";
	}
});

// Search Btn
searchBtn.addEventListener("click", ()=> {
	console.log('hi');
	search.classList.toggle('active');
})


// Frequent questions and aswers accardion
faqs.length != 0 &&
	faqs.forEach((faq) => {
		faq.addEventListener("click", () => {
			faq.classList.toggle("active");
		});
	});

// About image slider
function addActiveToImage(index) {
	images.forEach((image) => {
		image.classList.remove("active");
	});
	images[index].classList.add("active");
}

imageBtns.length != 0 &&
	imageBtns.forEach((btn, index) => {
		btn.addEventListener("click", () => {
			addActiveToImage(index);
		});
	});
images.length != 0 && addActiveToImage(0);

// Menu show-more button JS
let currentItem = 1;
showMoreBtn.addEventListener("click", (e) => {
	document.querySelectorAll(".box-hidden").forEach((box, index) => {
		index <= 1 && box.classList.remove("box-hidden");
		if(document.querySelectorAll(".box-hidden").length <= 0) 
			showMoreBtn.style.display = "none"
	});
});
