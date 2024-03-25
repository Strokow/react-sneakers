
import React from 'react';
import axios from 'axios';
import Card from '../components/Card';

function Orders() {
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://65edf45e08706c584d9aee34.mockapi.io/Orders');
      setOrders(data);
    };
    fetchData();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>
      <div className="d-flex">
        {[].map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;