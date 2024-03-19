import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data: loadedCartItems } = await axios.get(
        "https://65d8caaec96fbb24c1bc5059.mockapi.io/Cart"
      );

      setCartItems(loadedCartItems);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data: loadedItems } = await axios.get(
        "https://65d8caaec96fbb24c1bc5059.mockapi.io/Items"
      );

      const updatedItems = loadedItems.map((item) =>
        cartItems.some((loadedItem) => item.id === loadedItem.id)
          ? { ...item, isAdded: true }
          : { ...item, isAdded: false }
      );

      setItems(updatedItems);
    };

    fetchData();
  }, [cartItems]);

  const onAddToCart = useCallback(
    (obj) => {
      if (cartItems.find((item) => item.id === obj.id)) {
        setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        axios
          .post("https://65d8caaec96fbb24c1bc5059.mockapi.io/Cart", obj)
          .then((res) => {
            setCartItems((prev) => [...prev, obj]);
          })
          .catch((error) => alert("Не удалось добавить в корзину"));
      }
    },
    [cartItems]
  );

  const handleRemoveItem = useCallback((id) => {
    axios
      .delete(`https://65d8caaec96fbb24c1bc5059.mockapi.io/Cart/${id}`)
      .then((res) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
        setItems((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, isAdded: false } : item
          )
        );
      })
      .catch((error) => {
        console.error("Error removing item:", error);
      });
  }, []);

  const handleAddToFavorite = useCallback(
    (obj) => {
      try {
        if (favorites.find((favObj) => favObj.id === obj.id)) {
          axios
            .delete(
              `https://65edf45e08706c584d9aee34.mockapi.io/Favorites/${obj.id}`
            )
            .then(() => {
              setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
            })
            .catch((error) => alert("Не удалось добавить в фавориты"));
        } else {
          axios
            .post("https://65edf45e08706c584d9aee34.mockapi.io/Favorites", obj)
            .then((res) => {
              setFavorites((prev) => [...prev, obj]);
            })
            .catch((error) => alert("Не удалось добавить в фавориты"));
        }
      } catch (error) {
        alert("Не удалось добавить в фавориты");
      }
    },
    [favorites]
  );

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={handleRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={handleSearchInputChange}
              onAddToFavorite={handleAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              items={favorites}
              onAddToFavorite={handleAddToFavorite}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
