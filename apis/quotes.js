// for Quotes API
import { API_KEY_UNSPLASH } from "../config.js";

const API_KEY = API_KEY_UNSPLASH;
const BASE_URL = "https://api.unsplash.com/";

/**
 * @param {string} orientation
 * @param {string} quote
 * @param {number} per_page
 * @description Fetch a quote image from Unsplash API
 */
export async function getQuoteImg(orientation = "landscape", quote = "book quotes", per_page = 10) {
    try {
        console.log("****************** getQuoteImg ******************");
        const response = await fetch(`${BASE_URL}search/photos?query=${quote}&orientation=${orientation}&per_page=${per_page}&page=1&client_id=${API_KEY}`);

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();
        const img = data.results[getRandamNumber()].urls.regular;
        setQuote(img);
        console.log(img);
        return img;
    } catch (error) {
        console.error(error);
    }
}

/**
 * @param {string} imgUrl 
 * @description Set the quote image to the DOM
 */
function setQuote(imgUrl) {
    const img = document.getElementById("quote");
    img.src = imgUrl;
    img.alt = "quote image";
}


/**
 * @param {number} min
 * @param {number} max
 * @description Generate a random number between min and max
 * @returns {number}
 */
function getRandamNumber(min = 0, max = 10) {
    return Math.floor(Math.random() * max);
} 