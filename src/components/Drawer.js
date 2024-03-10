import React from 'react'; // Import React

function Drawer({onClose, onRemove, items = []}) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">Корзина <img onClick={onClose} width={28} height={28} className="cu-p" src="/img/remove.png" alt="Close" /> </h2> 
        {
          items.length > 0 ? (
            <>
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
                    <img onClick={() => onRemove(obj.id)} className="removeBtn" width={20}
                      height={20} src="/img/remove.png" alt="Remove"/>
                  </div>
                ))}
              </div>
              <div>
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
            </>
          ) : (
            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
              <img className="mb-20" width={80} height={80} src="/img/box.png" alt="Empty cart"></img>
              <h2>Корзина пустая</h2>
              <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
              <button className="greenButton">
                <img></img>
                Вернуться назад
              </button>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Drawer;