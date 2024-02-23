import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://65d8caaec96fbb24c1bc5059.mockapi.io/Items')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img width={14} height={14} src="/img/search.png" alt="Search"></img>
            <input placeholder="Поиск"></input>
          </div>
        </div>
        <div className="d-flex">
          {items.map((obj) => (
            <Card 
              title={obj.title} 
              price={obj.price} 
              imageUrl={obj.imageUrl}
              onFavorite={() => console.log('Добавили в закладки')}
              onPlus={() => console.log('Нажали плюс')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;