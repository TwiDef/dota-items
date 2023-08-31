import React from "react";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from './styles.module.css';

const CreateItemPage = (props) => {
    const navigate = useNavigate();

    return (
        <ContentWrapper className={styles.createItem}>
            <Button
                className={styles.backwardBtn}
                onClick={() => navigate(-1)}>
                Назад
            </Button>
            <form className={styles.form}>
                <h1 className={styles.title}>Создать предмет</h1>
                <Input
                    name="name"
                    placeholder="Название предмета"
                    onChange={() => null} />
                <Input
                    name="price"
                    placeholder="Цена предмета"
                    onChange={() => null} />
                <Input
                    name="description"
                    placeholder="Описание предмета"
                    onChange={() => null} />
                <Input
                    name="rarity"
                    placeholder="Редкость предмета"
                    onChange={() => null} />
                <Input
                    name="itemImage"
                    type="file"
                    placeholder="Редкость предмета"
                    onChange={() => null} />

                <Button
                    className={styles.createBtn}
                    onClick={() => null}>
                    Создать
                </Button>
            </form>
        </ContentWrapper>
    )
}

export default CreateItemPage;