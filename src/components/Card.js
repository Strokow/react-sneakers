function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img width={20} height={20} src="/img/heartunliked.svg" alt="Unliked" />
            </div>
            <img width={140} height={140} src="img/sneakers1.jpg" alt="Sneakers" />
            <h5>Мужские кроссовки Adidas Stan Smith</h5>
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
    );
}

export default Card;