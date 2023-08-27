import React from 'react';
import styles from './styles.module.css';

const Button = ({
    containerClassName = "",
    className = "",
    onClick = () => null,
    children = "",
    isBackButton = false
}) => {
    return (
        <div className={containerClassName}>
            <span
                onClick={onClick}
                className={`${isBackButton ? styles.backButton : styles.button} ${className}`}>
                {children}
            </span>
        </div>
    );
}

export default Button;