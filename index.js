import * as Quote from "./apis/quotes.js";
import * as NYTimesBooks from "./apis/nytimesBooks.js";
import { displayWishlist } from "./apis/DB.js";

// Start function
function init() {

    showPage();
    // Get the quote img
    Quote.getQuoteImg();

    // Get Best Books from NYTimes
    NYTimesBooks.getBestBooks();

    // show the wishlist
    const wishListBtn = document.getElementById("wishList");
    wishListBtn.addEventListener("click", function () {
        showPage(false);
        displayWishlist();
    });
}

init();


function showPage(ishome = true) {
    const home = document.getElementById("home");
    const wishlist = document.getElementById("wishList-books");
    if (ishome) {
        home.style.display = "block";
        wishlist.style.display = "none";
    } else {
        home.style.display = "none";
        wishlist.style.display = "block";
    }
}