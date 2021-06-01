import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducers/index'
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension"

const store = createStore(
rootReducer,composeWithDevTools(applyMiddleware(thunk))
)
export default store; 



//la store en donde van todos los estados de mi app 
