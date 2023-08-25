import React from 'react';
import styles from './styles.module.css';
import waveImage from './wave.svg'
import ContentWrapper from '../ContentWrapper/ContentWrapper';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <ContentWrapper className={styles.content}>
                <h1 className={styles.title}>{`Покупайте шмот для любимой игры у нас.`}</h1>
                <p className={styles.desc}>{`Только у нас самые низкие цены.`}</p>
            </ContentWrapper>
            <img src={waveImage} alt="" className={styles.wave} />
        </div>
    );
}

export default Header; 