import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage: storage
}

export default function rootStore(initialState) {
    const tempReducer = rootReducer()
    const persistedReducer = persistReducer(persistConfig, tempReducer)

    const store = createStore(
        persistedReducer,
        initialState,
        applyMiddleware(
            thunk
        )
    )
    let persistor = persistStore(store)
    return { store, persistor }
}