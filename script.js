/*function scrollFunction() {
    let name = document.getElementById("name");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        name.classList.remove("scroll-top");
        name.classlist.add("scroll-not-top");
    } else {
        name.classList.remove("scroll-not-top");
        name.classList.add("scroll-top");
    }
}*/

function growLine() {
    let lines = document.querySelectorAll(".line");
    for (let i in lines) {

        let line = lines[i];
        line.style.width = "100%";
    }
}

/*
window.onscroll = function () {
    scrollFunction();
};
*/

let readMoreButtonArr = document.getElementsByClassName("readMoreButton");

for (let i = 0; i < readMoreButtonArr.length; i++) {
    readMoreButtonArr[i].addEventListener("click", function () {
        var content = this.parentElement.nextElementSibling;
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
