import React from 'react';
import styles from './Card.module.scss';

function Card({title, imageUrl, price, onFavorite, onPlus = () => {}}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const onClickPlusik = () => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded);
    }
    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img width={20} height={20} src={isFavorite ? "/img/heart.png" : "/img/heartunliked.svg"} alt="Unliked" />
            </div>
            <img width={140} height={140} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
                <img className={styles.plusik} onClick={onClickPlusik} width={20} height={20} src={isAdded ? "/img/done.png" : "/img/greyplus.png"} alt="Plusik" />
            </div>
        </div>
    );
}

export default Card;