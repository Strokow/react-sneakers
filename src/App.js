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
        <h1>Все кроссовки</h1>
      </div>
    </div>
  );
}

export default App;
