import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import styles from './styles.module.css';

const RarityLevel = ({ rarity }) => {
    return (
        <div className={styles.rarityWrapper}>
            <AiFillStar className={styles.rarityIcon} />
            <span className={styles.rarityLevel}>{rarity}</span>
        </div>
    );
}

export default RarityLevel;