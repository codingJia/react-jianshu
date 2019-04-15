import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const homeData = data => ({
  type: actionTypes.GET_HOME_DATA,
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList,
  writerList: data.writerList
})
const writerList = (list, nextPage) => ({
  type: actionTypes.GET_WRITER_LIST,
  list: fromJS(list),
  nextPage
})

export const getHomeData = () => {
  return dispatch => {
    axios
      .get('/api/home.json')
      .then(res => {
        if (res.status === 200) {
          dispatch(homeData(res.data.data))
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
export const getWirterList = page => {
  return dispatch => {
    axios
      .get(`/api/homeList.json?page=${page}`)
      .then(res => {
        dispatch(writerList(res.data.data, page + 1))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
