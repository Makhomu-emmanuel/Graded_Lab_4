let pics = document.querySelectorAll("#pics img");
let favorites = document.getElementById("favorites");
let actions = document.getElementById("actions");
let picsDiv = document.getElementById("pics");

let counter = document.getElementById("counter");
let message = document.getElementById("message");

let count = 0;
let total = pics.length;


counter.textContent = "Remaining images: " + total;

for (let i = 0; i < pics.length; i++) {
    pics[i].dataset.index = i;
    pics[i].title = pics[i].alt;

    pics[i].onclick = function() {
        if (this.parentElement.id === "favorites") return;

        count++;
        favorites.appendChild(this);
        this.style.border = "3px solid green";

        let li = document.createElement("li");
        li.textContent = "Moved " + this.alt + " to favorites";
        actions.appendChild(li);

        counter.textContent = "Remaining images: " + (total - count);
        message.textContent = this.alt + " selected as favorite number " + count;

        if (count === total) {
            message.textContent = "All images have been selected!";
        }
    }
}

favorites.onclick = function(e) {
    if (e.target.tagName === "IMG") {
        let img = e.target;
        let index = img.dataset.index;
        let images = picsDiv.querySelectorAll("img");
        let inserted = false;

        for (let i = 0; i < images.length; i++) {
            if (images[i].dataset.index > index) {
                picsDiv.insertBefore(img, images[i]);
                inserted = true;
                break;
            }
        }

        if (!inserted) picsDiv.appendChild(img);

        img.style.border = "none";
        count--;

        let li = document.createElement("li");
        li.textContent = img.alt + " returned to main list";
        actions.appendChild(li);

        counter.textContent = "Remaining images: " + (total - count);
        message.textContent = img.alt + " is now available again";
    }
}