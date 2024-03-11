import Card from '../components/Card';
import { useState } from 'react';

function Home({
    items: initialItems,
    searchValue, 
    setSearchValue, 
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart }) {

    return (
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex align-center">
            <img width={14} height={14} src="/img/search.png" alt="Search" />
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск" />
          </div>
        </div>
        <div className="d-flex">
          {initialItems.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
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
    );
}

export default Home;