// save wishlist

export let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

export function setBooks(listBooks) {
    console.log("%%%%%%%%%%%%%%%%% set books...", listBooks);
    const bookList = document.getElementById("books");
    bookList.replaceChildren();

    listBooks.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("book-card");

        const img = document.createElement("img");
        img.src = book.cover;
        img.alt = book.title;
        img.classList.add("book-cover");
        card.appendChild(img);

        // style to be both title and button in the same line
        const line = document.createElement("div");
        line.style.display = "flex";
        line.style.justifyContent = "space-between";
        card.appendChild(line);

        const title = document.createElement("p");
        title.textContent = book.title;
        line.appendChild(title);

        const btnSave = document.createElement("button");
        btnSave.classList.add("btn-wishlist");

        const icon = document.createElement("i");
        icon.classList.add("fa", "fa-bookmark");
        btnSave.appendChild(icon);
        line.appendChild(btnSave);

        btnSave.addEventListener("click", () => {
            btnSave.disabled = true;
            btnSave.style.color = "green";

            // save to wishlist local storage
            wishlist.push(book);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            // ==========================
            console.log("********** wishlist =======> ", wishlist);
        });

        bookList.appendChild(card);
    });
}


export function displayWishlist() {
    const wishlistBooks = document.getElementById("wish-list");
    wishlistBooks.replaceChildren();

    console.log("********** wishlist =======> ", wishlist);

    wishlist.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("book-card");

        const img = document.createElement("img");
        img.src = book.cover;
        img.alt = book.title;
        img.classList.add("book-cover");
        card.appendChild(img);

        const title = document.createElement("p");
        title.textContent = book.title;
        card.appendChild(title);

        const author = document.createElement("p");
        author.textContent = book.author;
        card.appendChild(author);

        wishlistBooks.appendChild(card);
    }
    );
}