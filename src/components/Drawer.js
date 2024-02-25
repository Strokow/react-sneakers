function Drawer({onClose, items = []}) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">Корзина <img onClick={onClose} width={28} height={28} className="cu-p" src="/img/remove.png" alt="Close" /> </h2> 

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <img
                className="mr-20"
                width={100}
                height={100}
                src={obj.imageUrl}
                alt="Sneakers"
              />
              <div className="mr-20">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price}</b>
              </div>
            </div>
          ))}
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