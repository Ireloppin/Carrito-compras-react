export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || []

const updateLocalStorage = state =>{
    window.localStorage.setItem('cart', JSON.stringify(state))
}
export const cartReducer = (state, action)=>{
    const {type: actionType, payload:actionPayload}= action
    switch (actionType) {
        case 'ADD_TO_CART':{
            const {id}= actionPayload
            const productInCart = state.findIndex(item => item.id === id)
        if (productInCart >= 0){
            const newCart = structuredClone(state)
            newCart[productInCart].quantity +=1
            updateLocalStorage(newCart)
            return newCart
        } else {
         const newCart= [
            ...state, 
            {
            ...actionPayload,
            quantity:1
            }
            ]
            updateLocalStorage(newCart)
            return newCart
        }
        }

        case 'REMOVE_FROM_CART':{
            const {id} = actionPayload
            const newCart= state.filter(item => item.id !== id)
            updateLocalStorage(newCart)
            return newCart
        }

        case 'CLEAR_CART':{
            updateLocalStorage([])
            return []
           
        }
           
    
        default:
            break;
    }
    return state
}