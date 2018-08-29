import React from 'react'
import ReactDom from 'react-dom'
import App from 'containers/App'
import {AppContainer} from 'react-hot-loader'
const render = Component => {
    ReactDom.render(
        <AppContainer>
           <Component/> 
        </AppContainer>,
        document.getElementById('root')
    )
}

render(App)

if(module.hot){
    module.hot.accept('./containers/App', () => render(App))
}