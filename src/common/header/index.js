import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTit,
  SearchInfoSwitch,
  SearchInfoItem
} from './style'
class Header extends Component {
  getListArea() {
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTit>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTit>
          <div>
            {this.props.list.map(item => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>
            })}
          </div>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={this.props.focused} timeout={300} classNames="slide">
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleFocus}
                onBlur={this.props.handleBlur}
              />
            </CSSTransition>
            <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}>
              &#xe624;
            </span>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="wrtting">
            <span className="iconfont">&#xe62d;</span>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
