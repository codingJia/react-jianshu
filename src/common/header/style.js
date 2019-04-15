import styled from 'styled-components'
import LogoPic from '../../statics/nav-logo.png'
export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${LogoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    text-align: center;
    line-height: 30px;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  background: #eee;
  font-size: 14px;
  border: none;
  outline: none;
  color: #666;
  border-radius: 19px;
  &.slide-enter {
    width: 160px;
    transition: all 0.3s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    width: 240px;
    transition: all 0.3s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: #fff;
`
export const SearchInfoTit = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    font-size: 12px;
    margin-right: 2px;
  }
`
export const SearchInfoItem = styled.a`
  font-size: 12px;
  padding: 0 5px;
  line-height: 20px;
  border: 1px solid #ddd;
  color: #787878;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
`
export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`
export const Button = styled.button`
  float: right;
  line-height: 38px;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 19px;
  margin-top: 9px;
  outline: none;
  font-size: 14px;
  border: 1px solid rgba(236, 97, 73, 0.7);
  &.reg {
    color: #ea6f5a;
  }
  &.wrtting {
    color: #fff;
    background-color: #ea6f5a;
  }
`
