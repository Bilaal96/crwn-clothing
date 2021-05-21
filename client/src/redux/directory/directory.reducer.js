// Directory Images
import hats from '../../assets/images/directory/hats.png';
import jackets from '../../assets/images/directory/jackets.png';
import footwear from '../../assets/images/directory/footwear.png';
import womens from '../../assets/images/directory/womens.png';
import mens from '../../assets/images/directory/mens.png';

// Load Image from imageUrls
/* const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats',
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets',
        },
        {
            title: 'footwear',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/footwear',
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens',
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens',
        },
    ],
}; */

// Load Image from LOCAL folder: /src/assets/images/directory
const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            // imageUrl: `${LOCAL_IMAGE_PATH}/hats.png`,
            imageUrl: hats,
            id: 1,
            linkUrl: 'shop/hats',
        },
        {
            title: 'jackets',
            imageUrl: jackets,
            id: 2,
            linkUrl: 'shop/jackets',
        },
        {
            title: 'footwear',
            imageUrl: footwear,
            id: 3,
            linkUrl: 'shop/footwear',
        },
        {
            title: 'womens',
            imageUrl: womens,
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens',
        },
        {
            title: 'mens',
            imageUrl: mens,
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens',
        },
    ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
