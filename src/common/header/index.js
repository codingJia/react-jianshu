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
    const {
      focused,
      mouseIn,
      list,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(<SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>)
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTit>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>
              <span className="iconfont spin">&#xe851;</span>换一批
            </SearchInfoSwitch>
          </SearchInfoTit>
          <div>{pageList}</div>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleFocus, handleBlur, list } = this.props
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
            <CSSTransition in={focused} timeout={300} classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => {
                  handleFocus(list)
                }}
                onBlur={handleBlur}
              />
            </CSSTransition>
            <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
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
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.changMouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.changMouseLeave())
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
