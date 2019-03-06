import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Header from './common/header'
import { GlobalStyle } from './style'
import { IconGlobalStyle } from './statics/iconfont/iconfont'
import store from './store'
class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <IconGlobalStyle />
        <Provider store={store}>
          <Header />
        </Provider>
      </div>
    )
  }
}

export default App
