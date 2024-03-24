import React from 'react'; 
// import axios from 'axios';
import Info from './Info';
import {useCart} from '../hooks/useCart';


// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({onClose, onRemove, items = []}) {
  const {cartItems, setCartItems, totalPrice} = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  
  

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
     
      // Закомментировано: отправка заказа в API
      // const {data} = await axios.put('https://65d8caaec96fbb24c1bc5059.mockapi.io/Orders/' + orderId, {items: cartItems, orderId: orderId});
      // setOrderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);
      
      // Закомментировано: удаление элементов корзины из API
      // for (let i = 0; i < cartItems.length; i++) {
      //   const item = cartItems[i];
      //   await axios.delete('https://65d8caaec96fbb24c1bc5059.mockapi.io/Cart/' + item.id);
      //   await delay(1000);
      // }
    } catch (error) {
      console.error(error.response.data);
      alert('Ошибка при создании заказа :(');
    }
    setIsLoading(false);
  };
  
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
                    <b>{totalPrice}₽</b>
                  </li>
                  <li>
                    <span>Налог 5%: </span>
                    <div></div>
                    <b>{totalPrice / 100 * 5} ₽</b>
                  </li>
                </ul>
                <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ</button>
              </div>
            </>
          ) : (
            <Info title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"} 
            description={isOrderCompleted ? "Ваш заказ #" + orderId + " скоро будет передан курьерской доставке " : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"} 
            image={isOrderCompleted ? "/img/list.png" : "/img/box.png"} 
            />
          )
        }
      </div>
    </div>
  );
}

export default Drawer;