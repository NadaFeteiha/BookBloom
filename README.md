# Book Bloom

Book Bloom is a web application designed to help users explore books, get inspirational quotes, and manage a wishlist of their favorite books. The application integrates with various APIs to fetch book data and quotes, providing a seamless and engaging user experience.

## Features

- **Explore Books**: Users can search for books and view details about them.
- **Inspirational Quotes**: The application fetches and displays inspirational quote images.
- **Wishlist Management**: Users can add books to their wishlist and view their saved books.

## Project Structure

```
BookBloom/
│── apis/
│   ├── DB.js                  # Manages the wishlist and displays books
│   ├── nytimesBooks.js        # Fetches best books from the NYTimes API
│   ├── openlibraryBooks.js    # Searches for books using the OpenLibrary API
│   ├── quotes.js              # Fetches quote images from the Unsplash API
│
│── pages/
│   ├── explore.html           # Page for exploring books
│   ├── Kids.html              # Page for kids' books
│
│── resources/
│   ├── Book Bloom.png         # Logo image
│   ├── colors.css             # CSS file for defining color variables
│
│── index.html                 # Main HTML file for the application
│── index.js                   # Main JavaScript file for initializing the application
│── styles.css                 # Main CSS file for styling the application
│── config.js                  # Configuration file for storing API keys
│── .gitignore                 # Git ignore file
```

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd BookBloom
    ```

## Usage

1. Open [`index.html`](index.html) in a web browser to start the application.
2. Use the navigation links to explore different pages.
3. Use the search bar on the "Explore" page to search for books.
4. Click the "Wishlist" button to view and manage your wishlist.

## API Integration

- **Unsplash API**: Used to fetch quote images.
- **NYTimes API**: Used to fetch best books.
- **OpenLibrary API**: Used to search for books.

## Functions

### `apis/DB.js`
- `setBooks(listBooks)`: Displays a list of books and allows users to add them to their wishlist.
- `displayWishlist()`: Displays the books in the user's wishlist.

### `apis/nytimesBooks.js`
- `getBestBooks()`: Fetches and displays the best books from the NYTimes API.

### `apis/openlibraryBooks.js`
- `searchBooks(query, limit)`: Searches for books using the OpenLibrary API.

### `apis/quotes.js`
- `getQuoteImg(orientation, quote, per_page)`: Fetches a quote image from the Unsplash API.

### `index.js`
- `init()`: Initializes the application by setting up event listeners and fetching initial data.
- `showPage(isHome)`: Toggles between the home page and the wishlist page.

## Configuration

The [`config.js`](config.js) file contains the API keys required for the application to interact with external APIs. Make sure to add your API keys to this file before running the application.

