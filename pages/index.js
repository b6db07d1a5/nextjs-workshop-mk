import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'

import App from '../components/App'

function categoryReducer(state = {}, action) {
    switch(action.type){
        case 'CATEGORY_CLICK':
            return {...state, 
                id: action.categoryId}
        default:
            return state
    }
}

function contentReducer(state = {contentDisplay: 'menus'}, action) {
    switch(action.type){
        case 'MENUS_CLICK':
            return {...state,
                contentDisplay: action.contentDisplay}
        case 'CART_CLICK':
            return {...state, 
                contentDisplay: action.contentDisplay}
        default:
            return state
    }
}

function cartReducer(state = {items: Array()}, action) {
    switch(action.type){
        case 'ADD_MENU':
            let currItems = state.items
            
            let checkItem = currItems.findIndex((item) => item.id == action.menuItem.id)

            if(checkItem === -1){
                let itemToAdd = {
                    ...action.menuItem,
                    qty: 1
                }
                currItems.push(itemToAdd)

                console.log(currItems)

                return {...state, items: currItems}
            }
            else {
                let newItems = currItems.map(item => {
                    if(item.id === action.menuItem.id) {
                       return {...item, qty: item.qty + 1}
                    }
                    return item
                });

                console.log(newItems)
                return {...state, items: newItems}
            }

        case 'DECREASE_MENU':
            let currDecreaseitems = state.items
            let decreaseItems = currDecreaseitems.map(item => {
                if(item.id === action.menuId) {
                    return {...item, qty: item.qty - 1}
                }
                return item
            });
            let newDecreaseItems = decreaseItems.filter((item) => item.qty > 0)
            
            return {...state, items: newDecreaseItems}
        default:
            return state
    }
}

const indexReducer = combineReducers({
    content: contentReducer,
    category: categoryReducer,
    cart: cartReducer
})

const store = createStore(indexReducer)

export default () => {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
}