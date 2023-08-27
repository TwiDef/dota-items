import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../store/items/itemsSlice';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { paths } from '../../paths';
import Item from '../Item/Item';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import styles from './styles.module.css';
import Button from '../Button/Button';
import { useSortItems } from '../../hooks/useSortItems';

const Items = (props) => {
    const dispatch = useDispatch()
    const { items, isLoading } = useSelector(state => state.items)
    const { isDescSort, setIsDescSort, sortedItems } = useSortItems(items || [])

    useEffect(() => {
        dispatch(getItems())
    }, [dispatch])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <div className={styles.sort}>
                <ContentWrapper className={styles.itemsHeader}>
                    <Button
                        className={styles.sortBtn}
                        onClick={() => setIsDescSort(!isDescSort)}
                    >
                        Сортировать по цене {`${isDescSort ? "+" : "-"}`}
                    </Button>
                    <Link
                        to={paths.createItem}
                        className={styles.createItemBtn}>
                        Добавить предмет
                    </Link>
                </ContentWrapper>
            </div>
            <div>
                <ContentWrapper className={styles.itemsGrid}>
                    {sortedItems && sortedItems.map(item => <Item key={item._id} {...item} />)}
                </ContentWrapper>

            </div>
        </>
    );
}

export default Items;