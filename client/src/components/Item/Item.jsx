import React from 'react';

const Item = ({ item }) => {
    return (
        <div>
            <span>{item.name}</span>
        </div>
    );
}

export default Item;