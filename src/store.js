import { combineReducers } from 'redux';
import cartReducers from './reducers/reducersCart';
import productsReducers from './reducers/reducersProducts';
import maatReducers from './reducers/reducersMaat';

export default combineReducers({
    cart: cartReducers,
    products: productsReducers,
    selected: maatReducers,
})