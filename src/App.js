import React from 'react';
import Card from './components/Card'
function App() {
  return (
    <div className="wrapper clear">
      <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
          <h2 className="mb-30">Корзина</h2>

          <div className="items"> {/* Не получилось спустить в самый низ cartTotalBlock */}
          <div className="cartItem d-flex align-center mb-20">
            <img 
            className="mr-20" 
            width={100} 
            height={100} 
            src="/img/sneakers1.jpg" 
            alt="Sneakers"></img>
            <div className="mr-20">
              <p className="mb-5">Мужские кроссовки Adidas Stan Smith</p>
              <b>7999 ₽</b>
            </div>
            <img className="removeBtn mb-5" width={25} height={25} src="/img/remove.png" alt="Remove"></img>
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img 
            className="mr-20" 
            width={100} 
            height={100} 
            src="/img/sneakers3.jpg" 
            alt="Sneakers"></img>
            <div className="mr-20">
              <p className="mb-5">Женские кроссовки Nike</p> {/* Поправить вёрстку */}
              <b>10000 ₽</b>
            </div>
            <img className="removeBtn mb-5" width={25} height={25} src="/img/remove.png" alt="Remove"></img>
          </div>
          
          </div>
          <ul className="cartTotalBlock">
            <li>
              <span>Итого: </span>
              <div></div>
              <b>17999 ₽</b>
            </li>
            <li>
            <span>Налог 5%: </span>
              <div></div>
              <b>3000 ₽</b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ</button>
        </div> 
      </div>
      <header className="d-flex justify-between align-center p-40" >
        <div className="d-flex align-center">
          <img width={430} height={98} src="img/ultrasteplogo.png" alt="Ultra Step" />
          <div>
          
            <p className="description text-uppercase">Магазин фирменных кроссовок</p> {/* Не получилось поместить эту надпись прямо под логотипом */}
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
  <div className="d-flex align-center justify-between mb-40">
  <h1>Все кроссовки</h1>
  <div className="search-block d-flex align-center">
    <img width={14} height={14} src="/img/search.png" alt="Search"></img>
    <input placeholder="Поиск"></input>

  </div>
  </div>
  <div className="d-flex">
  <Card/>
  <div className="card">
    <img width={140} height={140} src="img/sneakers2.jpg" alt="Sneakers" />
    <h5>Мужские кроссовки Nike Jordan</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>5599 ₽</b>
      </div>
      <button className="button">
        <img width={20} height={20} src="img/plusik.png" alt="Plusik" />
      </button>
    </div>
    
  </div>
  <div className="card">
    <img width={140} height={140} src="img/sneakers3.jpg" alt="Sneakers" />
    <h5>Женские кроссовки Nike</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>10000 ₽</b>
      </div>
      <button className="button">
        <img width={20} height={20} src="img/plusik.png" alt="Plusik" />
      </button>
    </div>
    
  </div>
  <div className="card">
    <img width={140} height={140} src="img/sneakers4.jpg" alt="Sneakers" />
    <h5>Мужские кроссовки New Balance 574s</h5>
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
