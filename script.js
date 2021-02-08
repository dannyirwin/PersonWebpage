let readMoreButtonArr = document.getElementsByClassName("readMoreButton");

function growLine() {
	const lines = document.querySelectorAll(".line");
	for (let i in lines) {
		let line = lines[i];
		line.style.width = "100%";
	}
}

function addReadMoreEventListeners() {
	for (let i = 0; i < readMoreButtonArr.length; i++) {
				readMoreButtonArr[i].addEventListener("click", () => {
					const projectDetails = readMoreButtonArr[i].parentElement.nextElementSibling;
					if (projectDetails.style.maxHeight) {
						projectDetails.style.maxHeight = null;
						this.firstElementChild.innerHTML = "Read More";
					} else {
						projectDetails.style.maxHeight = projectDetails.scrollHeight + 10 + "px";
						this.firstElementChild.innerHTML = "Read Less";
					}
				});
	}
}

window.addEventListener('load', (event) => {
	addReadMoreEventListeners();
	growLine();
});
