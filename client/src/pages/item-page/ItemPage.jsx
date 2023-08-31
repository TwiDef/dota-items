import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getItem } from '../../store/item/itemSlice';
import Spinner from '../../components/Spinner/Spinner';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import Button from '../../components/Button/Button';
import styles from './styles.module.css';

const ItemPage = (props) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()
    const { item, isLoading } = useSelector(state => state.item)

    useEffect(() => {
        dispatch(getItem(id))
    }, [dispatch, id])

    if (isLoading) return <Spinner />

    return item && (
        <div>
            <ContentWrapper className={styles.item}>
                <div className={styles.descContent}>
                    <Button
                        className={styles.backwardBtn}
                        onClick={() => navigate(-1)}
                    >Назад</Button>
                    <h1 className={styles.title}>{item.name}</h1>
                    <div className={styles.price}>{item.price} ₽</div>
                    <Button
                        className={styles.orderBtn}
                        containerClassName={styles.buyBtnContainer}
                        onClick={() => navigate('/order')}>
                        Офорить заказ
                    </Button>
                    <p className={styles.desc}>{item.description}</p>
                </div>
                <div className={styles.imageContainer}>
                    <img
                        className={styles.image}
                        src={item.itemImage}
                        alt="" />
                </div>
            </ContentWrapper>
        </div>
    );
}

export default ItemPage;

