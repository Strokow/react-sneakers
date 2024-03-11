import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

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
      {/* <Route path="/favorite"></Route> */}
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex align-center">
            <img width={14} height={14} src="/img/search.png" alt="Search" />
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск" />
          </div>
        </div>
        <div className="d-flex">
          {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
            <Card
              key={index}
              title={item.title} 
              price={item.price} 
              imageUrl={item.imageUrl}
              onFavorite={() => onAddToFavorite(item)}
              onPlus={() => onAddToCart(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;