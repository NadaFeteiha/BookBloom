// archive API
import { setBooks } from "./DB.js";

async function searchBooks(query, limit = 40) {
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

