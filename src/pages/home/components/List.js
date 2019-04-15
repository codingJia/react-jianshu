import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { ListItem, ItemInfo, AddMore } from '../style'
import * as actionCreators from '../store/actionCreators'
import { Link } from 'react-router-dom'
class List extends PureComponent {
  render() {
    const { list, page, getWirterList } = this.props
    return (
      <div>
        {list.map((item, index) => {
          return (
            <Link to="/detail" key={index}>
              <ListItem>
                <ItemInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ItemInfo>
                <img src={item.get('imgUrl')} alt="" className="pic" />
              </ListItem>
            </Link>
          )
        })}
        <AddMore onClick={() => getWirterList(page)}>加载更多</AddMore>
      </div>
    )
  }
}
const mapState = state => ({
  list: state.getIn(['home', 'articleList']), //get('home').get('articleList')这两种方法都可以
  page: state.getIn(['home', 'articlePage'])
})
const mapDispath = dispatch => ({
  getWirterList(page) {
    dispatch(actionCreators.getWirterList(page))
  }
})
export default connect(
  mapState,
  mapDispath
)(List)
