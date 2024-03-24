import React from 'react'; 
import { Link } from 'react-router-dom';
import {useCart} from '../hooks/useCart';

function Header(props) {
   
    const {totalPrice} = useCart();
    
    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="d-flex align-center">
                    <img width={430} height={98} src="img/ultrasteplogo.png" alt="Ultra Step" />
                    <p className="description text-uppercase">Магазин фирменных кроссовок</p>
                </div>
            </Link>
            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p">
                    <img width={30} height={30} src="img/korblogo2.png" alt="Korb Logo" />
                    <span>{totalPrice}₽</span>
                </li>
                <li className="mr-20 cu-p">
                    <Link to="/favorites"><img width={30} height={30} src="img/heartunliked.svg" alt="Favorite icon" /></Link>
                </li>
                <li>
                    <img width={30} height={30} src="img/usericon.png" alt="User icon" />
                </li>
            </ul>
        </header>
    );
}

export default Header;