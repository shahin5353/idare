import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import App from './views/App'
import { Provider } from 'react-redux'
import rootStore from './stores/rootStore'
import { PersistGate } from 'redux-persist/integration/react'

(async (window) => {
    const initialState = {}
    const store = rootStore(initialState)
    const rootEl = document.getElementById('root')

    const render = (Component, el) => {
        ReactDOM.render(
            <Provider store={store.store}>
                <PersistGate loading={null} persistor={store.persistor}>
                    <Component dispatch={store.dispatch} />
                </PersistGate>
            </Provider>,
            el
        )
    }
    render(App, rootEl)
})(window)