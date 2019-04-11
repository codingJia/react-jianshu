import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WriterWrapper, WriterItem, TitleWrapper, TitleLeft, TitleRight } from '../style'
class Writer extends Component {
  render() {
    const { writerList } = this.props
    return (
      <WriterWrapper>
        <TitleWrapper>
          <TitleLeft>推荐作者</TitleLeft>
          <TitleRight>换一批</TitleRight>
        </TitleWrapper>
        {writerList.map(item => {
          return (
            <WriterItem key={item.get('imgUrl')}>
              <img src={item.get('imgUrl')} alt="" />
              <div className="descWrapper">
                <h3>{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </div>
              <span className="attention">+关注</span>
            </WriterItem>
          )
        })}
      </WriterWrapper>
    )
  }
}
const mapState = state => ({
  writerList: state.getIn(['home', 'writerList'])
})

export default connect(mapState)(Writer)
