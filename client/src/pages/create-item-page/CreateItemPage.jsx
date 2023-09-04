import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { createItem } from '../../store/item/itemSlice';
import { paths } from '../../paths';
import styles from './styles.module.css';

const CreateItemPage = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { errors } = useSelector(state => state.item);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [rarity, setRarity] = useState("");
    const [itemImage, setItemImage] = useState(null);

    const handleCreateItem = useCallback(() => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("price", price)
        formData.append("description", description)
        formData.append("rarity", rarity)
        formData.append("itemImage", itemImage)

        dispatch(createItem(formData)).then(res => {
            if (!res.error) {
                navigate(`${paths.item}/${res.payload._id}`, { replace: true })
            }
        })
    }, [name, price, description, rarity, itemImage, dispatch, navigate])

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
                    error={errors && errors.name && errors.name.message}
                    onChange={(e) => setName(e.target.value)} />
                <Input
                    name="price"
                    placeholder="Цена предмета"
                    error={errors && errors.price && errors.price.message}
                    onChange={(e) => setPrice(e.target.value)} />
                <Input
                    name="description"
                    placeholder="Описание предмета"
                    error={errors && errors.description && errors.description.message}
                    onChange={(e) => setDescription(e.target.value)} />
                <Input
                    name="rarity"
                    placeholder="Редкость предмета"
                    error={errors && errors.rarity && errors.rarity.message}
                    onChange={(e) => setRarity(e.target.value)} />
                <Input
                    name="itemImage"
                    type="file"
                    placeholder="Редкость предмета"
                    error={errors && errors.itemImage && errors.itemImage.message}
                    onChange={(e) => setItemImage(e.target.files[0])} />

                <Button
                    className={styles.createBtn}
                    onClick={handleCreateItem}>
                    Создать
                </Button>
            </form>
        </ContentWrapper>
    )
}

export default CreateItemPage;