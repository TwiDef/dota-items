import React from 'react';
import Header from '../../components/Header/Header';
import Items from '../../components/Items/Items';

const HomePage = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Items />
        </React.Fragment>
    );
}

export default HomePage;