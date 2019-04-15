import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
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
          <BrowserRouter>
            <div>
              <Link to="/">
                <Header />
              </Link>
              <Route exact path="/" component={Home} />
              <Route exact path="/detail" component={Detail} />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App
