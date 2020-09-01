import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// Local Storage Object on Browser Window => default for web
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

/**
 * --- Redux Persist Congiguration Options ---
 * key => initial position where we want to store data in our persistReducer
 
 * storage => the storage method/type specified with Redux persist => storage defaults to localStorage for web
 
 * whitelist => array containing string names of any reducers we want to store & persist
 */
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart'],
};

// rootReducer
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

// Returns & exports persistedReducer
// --> rootReducer modified with persistConfig options
export default persistReducer(persistConfig, rootReducer);
