import * as Quote from "./apis/quotes.js";
import * as NYTimesBooks from "./apis/nytimesBooks.js";

// Start function
function init() {

    // Get the quote img
    Quote.getQuoteImg();

    // Get Best Books from NYTimes
    NYTimesBooks.getBestBooks();
}

init();


