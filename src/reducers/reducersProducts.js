import json from '../JSON/data.json';
import { GET_PRODUCTS } from '../actions/type';


export const get_products = () => dispatch => {
    dispatch({
        type: GET_PRODUCTS,
        payload: json.products
    })
}

export default function(state = [], action){
    switch(action.type){
        
        case GET_PRODUCTS:
            return action.payload

        default:
            return state;
    }
}
