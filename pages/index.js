import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'

import App from '../components/App'

function categoryReducer(state = {}, action) {
    switch(action.type){
        case 'CATEGORY_CLICK':
            return {...state, 
                id: action.categoryId,
                contentDisplay: action.contentDisplay}
        case 'CART_CLICK':
            return {...state, 
                contentDisplay: action.contentDisplay}
        default:
            return state
    }
}

function menuReducer(state = {items: Array()}, action) {
    switch(action.type){
        case 'ADD_MENU':
            console.log(state)
            let add = state.items
            add.push(action.menuItem)
            return {...state, items: add}
        case 'REMOVE_MENU':
            return state
        default:
            return state
    }
}

const indexReducer = combineReducers({
    category: categoryReducer,
    menu: menuReducer
})

const store = createStore(indexReducer)

export default () => {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
}