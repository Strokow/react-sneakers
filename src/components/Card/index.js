import React from 'react';
import ContentLoader from "react-content-loader";
import styles from './Card.module.scss';
import AppContext from '../../context';

function Card({id, title, imageUrl, price, onFavorite, onPlus, favorited = false, added = false, loading = false}) {
    const {isItemAdded } = React.useContext(AppContext);
    
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    React.useEffect(() => {
        
    }, [added]);

    const onClickPlusik = () => {
        onPlus({title, imageUrl, price});
        
    }
    const onClickFavorite = () => {
        onFavorite({id, title, imageUrl, price});
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            {
                loading ?  <ContentLoader 
                speed={2}
                width={155}
                height={270}
                viewBox="0 0 150 270"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                
              >
                <rect x="0" y="32" rx="10" ry="10" width="150" height="155" /> 
                <rect x="0" y="199" rx="5" ry="5" width="150" height="15" /> 
                <rect x="235" y="318" rx="0" ry="0" width="0" height="1" /> 
                <rect x="0" y="222" rx="5" ry="5" width="100" height="15" /> 
                <rect x="0" y="241" rx="5" ry="5" width="99" height="25" /> 
                <rect x="118" y="239" rx="5" ry="5" width="28" height="25" />
              </ContentLoader> : <>
              {onFavorite && <div className={styles.favorite} onClick={onClickFavorite}>
                <img width={20} height={20} src={isFavorite ? "/img/heart.png" : "/img/heartunliked.svg"} alt="Unliked" />
            </div>}
            <img width={140} height={140} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
                {onPlus && <img className={styles.plusik} onClick={onClickPlusik} width={20} height={20} src={isItemAdded(id) ? "/img/done.png" : "/img/greyplus.png"} alt="Plusik" />}
            </div>
              </>
            }
           
            
        </div>
    );
}

export default Card;