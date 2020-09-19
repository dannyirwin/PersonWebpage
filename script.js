let readMoreButtonArr = document.getElementsByClassName("readMoreButton");

function growLine() {
    const lines = document.querySelectorAll(".line");
    for (let i in lines) {

        const line = lines[i];
        line.style.width = "100%";
    }
}

for (let i = 0; i < readMoreButtonArr.length; i++) { // put in onload or ready function
    readMoreButtonArr[i].addEventListener("click", () => {
        const content = this.parentElement.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            this.firstElementChild.innerHTML = "Read More";
        } else {
            content.style.maxHeight = content.scrollHeight + 10 + "px";
            this.firstElementChild.innerHTML = "Read Less";
        }
	});
}

growLine();
