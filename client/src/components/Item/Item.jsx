import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../paths';
import RarityLevel from './RarityLevel/RarityLevel';
import styles from './styles.module.css';

const Item = ({ name = "", price = 0, description = "", itemImage = "", rarity = 0, _id = "" }) => {
    return (
        <Link to={`${paths.item}/${_id}`} className={styles.item}>

            <RarityLevel rarity={rarity} />
            {itemImage && <img className={styles.image} src={itemImage} alt="" />}
            <div className={styles.info}>
                <h2 className={styles.title}>{name}</h2>
                <span className={styles.price}>{price}</span>
            </div>
        </Link>
    );
}

export default Item;