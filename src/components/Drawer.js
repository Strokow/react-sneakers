function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="mb-30">Корзина</h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={100}
              height={100}
              src="/img/sneakers1.jpg"
              alt="Sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские кроссовки Adidas Stan Smith</p>
              <b>7999 ₽</b>
            </div>
            <img
              className="removeBtn mb-5"
              width={25}
              height={25}
              src="/img/remove.png"
              alt="Remove"
            />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={100}
              height={100}
              src="/img/sneakers3.jpg"
              alt="Sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">Женские кроссовки Nike</p>
              <b>10000 ₽</b>
            </div>
            <img
              className="removeBtn mb-5"
              width={25}
              height={25}
              src="/img/remove.png"
              alt="Remove"
            />
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
  );
}

export default Drawer;