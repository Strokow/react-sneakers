import { useState } from 'react';
import Card from '../components/Card';

function Favorites({items, onAddToFavorite}) {

    return (
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Мои закладки</h1>
        </div>
        <div className="d-flex">
          {items.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              // title={item.title} 
              // price={item.price} 
              // imageUrl={item.imageUrl}
              favorited={true}
              onFavorite={onAddToFavorite}
              {... item}
              // onFavorite={() => onAddToFavorite(item)}
              // onPlus={() => onAddToCart(item)}
            />
          ))}
        </div>
      </div>
    );
}

export default Favorites;