import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  async function fetchData() {
    setIsLoading(true);
    const cartResponse = await axios.get('https://65d8caaec96fbb24c1bc5059.mockapi.io/Cart');
    const cartItems = cartResponse.data;
    setCartItems(cartItems);

    const itemsResponse = await axios.get('https://65d8caaec96fbb24c1bc5059.mockapi.io/Items');
    const items = itemsResponse.data;
    setIsLoading(false);
    
    const updatedItems = items.map(item => {
      if (cartItems.find(cartItem => cartItem.id === item.id)) {
        return { ...item, isAdded: true };
      }
      return item;
    });

    setItems(updatedItems);
  }

  fetchData();
}, []);
  
  const onAddToCart = (obj) => {
    
    if (cartItems.find((item) => item.id === obj.id)) {
      setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      axios.post('https://65d8caaec96fbb24c1bc5059.mockapi.io/Cart', obj)
        .then(res => {
          setCartItems(prev => [...prev, obj]);
        })
        .catch(error => alert('Не удалось добавить в корзину'));
    }
  };

  const onRemoveItem = (id) => {
  axios.delete(`https://65d8caaec96fbb24c1bc5059.mockapi.io/Cart/${id}`)
    .then(res => {
      setCartItems(prev => prev.filter(item => item.id !== id));
      setItems(prev => prev.map(item => item.id === id ? {...item, isAdded: false} : item));
    })
    .catch(error => {
      console.error('Error removing item:', error);
    });
};


  const onAddToFavorite = (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://65edf45e08706c584d9aee34.mockapi.io/Favorites/${obj.id}`)
          .then(() => {
            setFavorites(prev => prev.filter(item => item.id !== obj.id));
          })
          .catch(error => alert('Не удалось добавить в фавориты'));
      } else {
        axios.post('https://65edf45e08706c584d9aee34.mockapi.io/Favorites', obj)
          .then(res => {
            setFavorites(prev => [...prev, obj]);
          })
          .catch(error => alert('Не удалось добавить в фавориты'));
      }  
    } catch (error) {
      alert('Не удалось добавить в фавориты');
    }
  };
  

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route path="/" element={<Home 
          items={items} 
          cartItems={cartItems}
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
          isLoading={isLoading}
        />} />
        <Route path="/favorites"  element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} 
        />} />
      </Routes>
    </div>
  );
}

export default App;