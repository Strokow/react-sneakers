import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://65d8caaec96fbb24c1bc5059.mockapi.io/Items')
      .then(res => {
        setItems(res.data);
      });
    axios.get('https://65d8caaec96fbb24c1bc5059.mockapi.io/Cart')
      .then(res => {
        setCartItems(res.data);
      });
  }, []);
  
  const onAddToCart = (obj) => {
    axios.post('https://65d8caaec96fbb24c1bc5059.mockapi.io/Cart', obj)
      .then(res => {
        setCartItems(prev => [...prev, obj]);
      });
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://65d8caaec96fbb24c1bc5059.mockapi.io/Cart/${id}`)
      .then(res => {
        setCartItems(prev => prev.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error('Error removing item:', error);
      });
  };

  const onAddToFavorite = (obj) => {
    axios.post('https://65edf45e08706c584d9aee34.mockapi.io/Favorites', obj)
      .then(res => {
        setFavorites(prev => [...prev, obj]);
      });
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
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />} />
      </Routes>
    </div>
  );
}

export default App;