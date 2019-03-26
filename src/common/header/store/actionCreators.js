import * as type from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

const changList = data => ({
  type: type.CHANG_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: type.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: type.SEARCH_BLUR
})

export const changMouseEnter = () => ({
  type: type.CHANGE_ENTER
})

export const changMouseLeave = () => ({
  type: type.CHANGE_LEAVE
})

export const changePage = page => ({
  type: type.CHANGE_PAGE,
  page
})
export const getList = () => {
  return dispatch => {
    axios
      .get('/api/headerList.json')
      .then(res => {
        dispatch(changList(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
