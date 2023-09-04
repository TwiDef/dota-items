import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import styles from './styles.module.css';

const OrderPage = (props) => {
    const navigate = useNavigate()
    return (
        <ContentWrapper className={styles.order}>
            <h1>Спасибо за покупку, ваш персонаж будет доволен!</h1>
            <Button
                className={styles.returnBtn}
                onClick={() => navigate('/')}>
                На главню
            </Button>
        </ContentWrapper>
    );
}

export default OrderPage;