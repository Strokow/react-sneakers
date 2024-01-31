function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40" >
        <div className="d-flex align-center">
          <img width={430} height={98} src="img/ultrasteplogo.png" alt="Ultra Step" />
          <div>
          
            <p className="description text-uppercase">Магазин фирменных кроссовок</p> {/* Не получилось поместить эту надпись прямо под логотипом */}
          </div>
        </div>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img width={30} height={30} src="img/korblogo2.png" alt="Korb Logo" /> 
            <span>1299 ₽</span>
          </li>
          <li>
            <img width={30} height={30} src="img/usericon.png" alt="User icon"  />
          </li>
        </ul>
      </header>
    );
}

export default Header;