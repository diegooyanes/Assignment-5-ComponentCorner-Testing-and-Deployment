import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

function App() {
  const products = [
    {
      id: 1,
      name: "Imperial Leather Mate",
      price: 64.99,
      image: "/products/mate.jpg",
      description:
        "A handcrafted calabash mate wrapped in premium leather for a timeless ritual.",
    },
    {
      id: 2,
      name: "Organic Yerba Mate",
      price: 16.5,
      image: "/products/yerba.jpg",
      description:
        "Smooth organic yerba with balanced flavor and a naturally energizing finish.",
    },
    {
      id: 3,
      name: "Stainless Steel Bombilla",
      price: 22.99,
      image: "/products/bombilla.jpg",
      description:
        "A durable stainless steel bombilla with a removable filter for easy cleaning.",
    },
  ];

  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("tomate-un-mate-cart");
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];
      return Array.isArray(parsedCart) ? parsedCart : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("tomate-un-mate-cart", JSON.stringify(cartItems));
    } catch (error) {
      console.warn("Could not save cart to localStorage:", error);
    }
  }, [cartItems]);

  function addToCart(product) {
    setCartItems((currentItems) => [
      ...currentItems,
      { ...product, cartId: crypto.randomUUID() },
    ]);
  }

  function removeFromCart(cartId) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.cartId !== cartId)
    );
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Header storeName="Tomate un Mate" cartCount={cartItems.length} />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/products"
              element={
                <ProductsPage products={products} addToCart={addToCart} />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetailsPage products={products} addToCart={addToCart} />
              }
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                />
              }
            />
          </Routes>
        </main>

        <Footer
          storeName="Tomate un Mate"
          email="hello@tomateunmate.com"
          year={2026}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
