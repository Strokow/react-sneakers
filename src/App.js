import React from 'react';

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40" >
        <div className="d-flex align-center">
          <img width={75} height={75} src="img/shoelogo.png" alt="Shoe Logo" />
          <div>
            <h3 className="text-uppercase text-indent">React Sneakers </h3>
            <p className="description text-indent">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={30} height={30} src="img/korblogo2.png" alt="Korb Logo" /> 
            <span>1299 ₽</span>
          </li>
          <li>
            <img width={30} height={30} src="img/usericon.png" alt="User icon"  />
          </li>
        </ul>
      </header>
      <div className="content p-40">
  <h1 className="mb-40">Все кроссовки</h1>
  <div className="d-flex">
  <div className="card">
    <img width={140} height={140} src="img/sneakers1.jpg" alt="Sneakers" />
    <h5>Мужские кроссовки Adidas Stan Smith</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>7999 ₽</b>
      </div>
      <button className="button">
        <img width={20} height={20} src="img/plusik.png" alt="Plusik" />
      </button>
    </div>
    
  </div>
  <div className="card">
    <img width={140} height={140} src="img/sneakers2.jpg" alt="Sneakers" />
    <h5>Мужские кроссовки Adidas Stan Smith</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>7999 ₽</b>
      </div>
      <button className="button">
        <img width={20} height={20} src="img/plusik.png" alt="Plusik" />
      </button>
    </div>
    
  </div>
  <div className="card">
    <img width={140} height={140} src="img/sneakers3.jpg" alt="Sneakers" />
    <h5>Мужские кроссовки Adidas Stan Smith</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>7999 ₽</b>
      </div>
      <button className="button">
        <img width={20} height={20} src="img/plusik.png" alt="Plusik" />
      </button>
    </div>
    
  </div>
  <div className="card">
    <img width={140} height={140} src="img/sneakers4.jpg" alt="Sneakers" />
    <h5>Мужские кроссовки Adidas Stan Smith</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>7999 ₽</b>
      </div>
      <button className="button">
        <img width={20} height={20} src="img/plusik.png" alt="Plusik" />
      </button>
    </div>
    
  </div>
  </div>
</div>
    </div>
  );
}

export default App;
