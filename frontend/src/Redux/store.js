import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware()

const middleware = [...getDefaultMiddleware(), sagaMiddleware ]

const store = configureStore({
    reducer: rootReducer,
    middleware
})

sagaMiddleware.run(rootSaga)

export default store