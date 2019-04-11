import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import axios from 'axios'
import { connect } from 'react-redux'
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount() {
    axios
      .get('/api/home.json')
      .then(res => {
        if (res.status === 200) {
          const result = res.data.data
          const action = {
            type: 'get_Home_Data',
            topicList: result.topicList,
            articleList: result.articleList,
            recommendList: result.recommendList,
            writerList: result.writerList
          }
          this.props.getHomeData(action)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
const mapDispatch = dispatch => ({
  getHomeData(action) {
    dispatch(action)
  }
})

export default connect(
  null,
  mapDispatch
)(Home)
