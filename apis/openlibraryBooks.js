// archive API

async function searchBooks(query, limit = 10) {
    console.log("************** Fetching books...", query);
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=${limit}`
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data.docs.map(book => ({
            title: book.title,
            author: book.author_name ? book.author_name.join(", ") : "Unknown Author",
            cover: book.cover_i
                ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                : "https://via.placeholder.com/150"
        }));
    } catch (error) {
        throw new Error(`Error => ${error}`);
    }
}


const button = document.getElementById("search-btn");

button.addEventListener("click", async () => {
    console.log("Button clicked");
    const searchInput = document.getElementById("search-input");
    const query = searchInput.value.trim();

    if (!query) return;

    const books = await searchBooks(query);
    setBooks(books);
});


function setBooks(listBooks) {
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

        const title = document.createElement("p");
        title.textContent = book.title;
        card.appendChild(title);


        const btnSave = document.createElement("button");
        btnSave.classList.add("btn-wishlist");
        btnSave.innerHTML = '<img src="../resources/save.svg" alt="Save">';
        card.appendChild(btnSave);

        bookList.appendChild(card);
    });
}


