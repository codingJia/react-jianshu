import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListItem, ItemInfo } from '../style'

class List extends Component {
  render() {
    const { list } = this.props
    return (
      <div>
        {list.map(item => {
          return (
            <ListItem key={item.get('id')}>
              <ItemInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ItemInfo>
              <img src={item.get('imgUrl')} alt="" className="pic" />
            </ListItem>
          )
        })}
      </div>
    )
  }
}
const mapState = state => ({
  list: state.getIn(['home', 'articleList']) //get('home').get('articleList')这两种方法都可以
})

export default connect(
  mapState,
  null
)(List)
