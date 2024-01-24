import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr =[
{name: 'Мужские кроссовки Adidas Stan Smith', price: '7999 ₽'},
/*{name: 'Мужские кроссовки Nike Jordan', price: '5599 ₽'},
{name: 'Женские кроссовки Nike', price: '10000 ₽ ₽'},
{name: 'Мужские кроссовки New Balance 574s', price: '7999 ₽'},*/
]

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
    <Card 
    title="Мужские кроссовки Adidas Stan Smith" 
    price={'7999 ₽'} 
    imageUrl="/img/sneakers1.jpg"
    />
    <Card 
    title="Мужские кроссовки Nike Jordan" 
    price={'5599 ₽'} 
    imageUrl="/img/sneakers2.jpg"
    />
    <Card 
    title="Женские кроссовки Nike Pink" 
    price={'9999 ₽'} 
    imageUrl="/img/sneakers3.jpg"
    />
    <Card 
    title="Мужские кроссовки New Balance 574s" 
    price={'7999 ₽'} 
    imageUrl="/img/sneakers4.jpg"
    />
   
  </div>
</div>
    </div>
  );
}

export default App;
