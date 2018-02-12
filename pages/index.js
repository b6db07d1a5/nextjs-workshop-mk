import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'

import App from '../components/App'

function categoryReducer(state = {}, action) {
    switch(action.type){
        case 'CLICK_CATEGORY':
            return {...state, id: action.categoryId}
        default:
            return state
    }
}

const indexReducer = combineReducers({
    category: categoryReducer
})

const store = createStore(indexReducer)

const Index = connect(state => ({category: state.category}))(App)

export default () => {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
}