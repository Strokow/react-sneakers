import styles from './Card.module.scss';
console.log(styles);

function Card(props) {
    console.log(props)
    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onFavorite}>
                <img width={20} height={20} src="/img/heartunliked.svg" alt="Unliked" />
            </div>
            <img width={140} height={140} src={props.imageUrl} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price}</b>
                </div>
                    <img onClick={props.onPlus} width={20} height={20} src="img/greyplus.png" alt="Plusik" />
            </div>
        </div>
    );
}

export default Card;