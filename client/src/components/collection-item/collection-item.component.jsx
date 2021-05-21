import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import { addItem } from '../../redux/cart/cart.actions';

// Styled Components
import * as SC from './collection-item.styles';

const CollectionItem = (props) => {
    const { item } = props;
    const { name, price, imageUrl } = item;

    const dispatch = useDispatch();

    const dispatchAddItem = useCallback(() => {
        dispatch(addItem(item));
    }, [dispatch, item]);

    return (
        <SC.CollectionItem className="collection-item">
            <SC.ItemImage
                className="image"
                imageUrl={imageUrl}
                title={`Image of ${name}`}
            >
                <SC.AddToCartButton onClick={dispatchAddItem} focus="pelorous">
                    Add To Cart
                </SC.AddToCartButton>
            </SC.ItemImage>
            <SC.ItemFooter className="collection-footer">
                <SC.ItemName className="name" title={`${name}`}>
                    {name}
                </SC.ItemName>
                <SC.ItemPrice className="price" title={`Price: £${price}`}>
                    £{price}
                </SC.ItemPrice>
            </SC.ItemFooter>
        </SC.CollectionItem>
    );
};

export default CollectionItem;
