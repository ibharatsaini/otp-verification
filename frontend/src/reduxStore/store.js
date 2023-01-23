import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import { contactReducer } from './reducers/contacts.reducer'
import { messageReducer } from './reducers/message.reducer'


const reducers = combineReducers({
    contact: contactReducer,
    message: messageReducer
})


const store = createStore(reducers,applyMiddleware(thunk))


export default store