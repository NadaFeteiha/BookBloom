// get best books from NYTimes
import { API_KEY_NYTIMES } from "../config.js";

const API_KEY = API_KEY_NYTIMES;
const BASE_URL = "https://api.nytimes.com/svc/books/v3/";

// Get the best books from NYTimes
/**
 * @description Get the best books from NYTimes
 * @returns {Array} books - An array of books
 */
export async function getBestBooks() {
    const response = await fetch(`${BASE_URL}lists/current/hardcover-fiction.json?api-key=${API_KEY}`);
    const data = await response.json();
    const books = data.results.books;
    console.log(`****************** getBestBooks ******************`);
    console.log(books);

    displayBestBooks(books);
    return books;
}

// display the best books from NYTimes
/**
 * @param {Array} books
 * @description Display the best books from NYTimes
 */
function displayBestBooks(books) {
    const bestBooks = document.getElementById("best-books");

    const header = document.createElement("h2");
    header.textContent = "Best Books from NYTimes";
    bestBooks.appendChild(header);

    const bookList = document.createElement("div");
    bookList.classList.add("best-sellers");
    bestBooks.appendChild(bookList);
    
    books.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("book");

        const img = document.createElement("img");
        img.src = book.book_image;
        card.appendChild(img);

        const title = document.createElement("h6");
        title.textContent = book.title;
        card.appendChild(title);

        const author = document.createElement("p");
        author.textContent = book.author;
        card.appendChild(author);

        bookList.appendChild(card);
    });

}