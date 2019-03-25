import * as type from './actionTypes'
import { fromJS } from 'immutable'

import axios from 'axios'
export const searchFocus = () => ({
  type: type.SEARCH_FOCUS
})
export const searchBlur = () => ({
  type: type.SEARCH_BLUR
})
const changList = data => ({
  type: type.CHANG_LIST,
  data: fromJS(data)
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
