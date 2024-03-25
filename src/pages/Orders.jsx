import AppContext from '../context';
import React, {useState} from 'react';
import axios from 'axios';
import Card from '../components/Card';

function Orders() {
  const {onAddToFavorite, onAddToCart} = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://65edf45e08706c584d9aee34.mockapi.io/Orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);

      } catch (error) {
        alert('Ошибка при запросе заказов')
        console.error(error);

      }
    })()
    
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>
      <div className="d-flex">
        {(isLoading ? [...Array(4)] : orders).map((item, index) => (
          <Card key={index} item={item} key={item.id}
          {...item}
          
          loading={isLoading}
          
           />
        ))}
      </div>
    </div>
  );
}

export default Orders;