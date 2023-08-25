import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../store/items/itemsSlice';
import Spinner from '../Spinner/Spinner';
import Item from '../Item/Item';
import ContentWrapper from '../ContentWrapper/ContentWrapper';

const Items = (props) => {
    const dispatch = useDispatch()
    const { items, isLoading } = useSelector(state => state.items)

    useEffect(() => {
        dispatch(getItems())
    }, [dispatch])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div>
            <ContentWrapper>
                {items && items.map(item => <Item key={item._id} {...item} />)}
            </ContentWrapper>

        </div>
    );
}

export default Items;