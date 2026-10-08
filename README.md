# Tomate un Mate

Tomate un Mate is a React storefront for premium yerba mate products and accessories. It uses React Router to show several pages within one single-page application.

## Features

- Responsive storefront design
- Reusable React components
- Dynamic product cards generated from an array
- Component data passed through props
- Home, products, product details, and cart routes
- Product details selected through a URL parameter
- Shopping cart with an item count, removal controls, and a calculated total
- Cart contents saved in browser `localStorage` across navigation and refreshes
- Accessible and semantic HTML structure
- Component and page-specific CSS

## Routes

- `/` — home page
- `/products` — product catalog
- `/products/:productId` — details for an individual product
- `/cart` — shopping cart

## Components

- `Header`: displays the store name and navigation
- `Hero`: presents the main message and call to action
- `ProductCard`: displays reusable product information
- `CartItem`: displays an item in the cart with a remove button
- `Footer`: displays contact information and links to store pages
- `HomePage`, `ProductsPage`, `ProductDetailsPage`, and `CartPage`: render the four store views

## Product photos

The product photos are illustrative images from Unsplash:

- Mate cup: [Dominik Kłos](https://unsplash.com/photos/a-mate-cup-with-bombilla-ready-to-drink-qlyKBofhti0)
- Yerba mate leaves: [Karol Majewski](https://unsplash.com/photos/dried-leaves-pack-fBpXql9e_g0)
- Bombilla: [Artur Solarz](https://unsplash.com/photos/black-and-white-hair-brush-iEa7mimhjaM)

## Technologies

- React
- React Router
- Vite
- JavaScript
- CSS

## Run the project locally

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## AI assistance

Generative AI was used to suggest portions of the CSS styling and to help find suitable product images and cite their sources correctly. The CSS was reviewed, modified, and tested by the author.

When refreshing a route such as `/cart` returned a 404 error on Vercel, I used AI to help find the cause. It pointed me to Vercel's documentation, where I learned about using `vercel.json` to rewrite routes to `/index.html`. After adding the file, I checked the deployed app again and the routes worked when opened directly or refreshed.
