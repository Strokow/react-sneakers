import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    title: 'Мужские кроссовки Adidas Stan Smith',
    price: '7999 ₽',
    imageUrl: '/img/sneakers1.jpg',
  },
  {
    title: 'Мужские кроссовки Nike Jordan',
    price: '5599 ₽',
    imageUrl: '/img/sneakers2.jpg',
  },
  {
    title: 'Женские кроссовки Nike Pink',
    price: '10000 ₽',
    imageUrl: '/img/sneakers3.jpg',
  },
  {
    title: 'Мужские кроссовки New Balance 574s',
    price: '7999 ₽',
    imageUrl: '/img/sneakers4.jpg',
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img width={14} height={14} src="/img/search.png" alt="Search"></img>
            <input placeholder="Поиск"></input>
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;