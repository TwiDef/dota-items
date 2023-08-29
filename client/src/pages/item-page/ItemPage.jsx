import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';


const ItemPage = (props) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch

    return (
        <div>

        </div>
    );
}

export default ItemPage;

