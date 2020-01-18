import { SELECT_PRODUCT, ADD_MAAT } from '../actions/type';

export const select_product = item => {
    return{
        type: SELECT_PRODUCT,
        payload: item
    }
}

export default function(state = null, action) {
    switch(action.type){
        case SELECT_PRODUCT:
            return action.payload
            
        case ADD_MAAT:
            return{
                ...state,
                maat_schoen: action.payload
            }
        default:
            return state;
    }
}