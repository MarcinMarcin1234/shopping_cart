import { ADD, REMOVE_ONE, REMOVE_ALL, CLEAR_CART } from '../actions/type';

   const add_item = (cart,items) => cart.filter(i => i.id !== items.id || i.maat_schoen !== items.maat_schoen)
   const exists_item = (cart,items) => cart.find(i => i.id === items.id && i.maat_schoen === items.maat_schoen)

   const add = (cart,items) => {
       const result = exists_item(cart,items)
       return result === undefined
       ? [...add_item(cart,items), { ...items, qty: 1 }]
       : [...add_item(cart,items), { ...result, qty: result.qty + 1 }]
   }

   const remove_one = (cart,items) => {
       return items.qty === 1
        ? [...add_item(cart,items)]
        : [...add_item(cart,items), { ...items, qty: items.qty -1 }]
   }

   const remove_all = (cart,items) => {
    return items.qty === 1
     ? [...add_item(cart,items)]
     : [...add_item(cart,items)]
   }


export default function(state = [], action){

    switch(action.type){
        case ADD:
            return add(state, action.payload)
        case REMOVE_ONE:
            return remove_one(state, action.payload)
        case REMOVE_ALL:
            return remove_all(state, action.payload)
        case CLEAR_CART:
            return state = []
        
        default:
            return state; 
    }
}