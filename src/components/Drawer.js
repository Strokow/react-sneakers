import React from 'react'; 
import Info from './Info';
import AppContext from '../context';

function Drawer({onClose, onRemove, items = []}) {
  const {setCartItems} = React.useContext(AppContext);
  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
  const onClickOrder = () => {
    setIsOrderCompleted(true);
    setCartItems([]);
  }
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
                <button onClick={onClickOrder} className="greenButton">Оформить заказ</button>
              </div>
            </>
          ) : (
            <Info title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"} 
            description={isOrderCompleted ? "Ваш заказ #18 скоро будет передан курьерской доставке " : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"} 
            image={isOrderCompleted ? "/img/list.png" : "/img/box.png"} 
            />
            
          )
        }
      </div>
    </div>
  );
}

export default Drawer;