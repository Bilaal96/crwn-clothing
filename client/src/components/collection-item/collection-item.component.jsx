import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import { addItem } from '../../redux/cart/cart.actions';

// Components
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = (props) => {
    const { item } = props;
    const { name, price, imageUrl } = item;

    const dispatch = useDispatch();

    const dispatchAddItem = useCallback(() => {
        dispatch(addItem(item));
    }, [dispatch, item]);

    return (
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton onClick={dispatchAddItem} $styleType="inverted">
                Add To Cart
            </CustomButton>
        </div>
    );
};

export default CollectionItem;
