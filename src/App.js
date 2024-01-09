import React from 'react';

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center" >
        <div className="d-flex align-center">
          <img width={80} height={80} src="/shoelogo.png" alt="Shoe Logo" />
          <div>
            <h3> React Sneakers </h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={30} height={30} src="/korblogo2.png" alt="Korb Logo" /> 
            <span>1299 ₽</span>
          </li>
          <li>
            <img width={30} height={30} src="usericon.png" alt="User icon"  />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
      </div>
    </div>
  );
}

export default App;
