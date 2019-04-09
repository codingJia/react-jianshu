import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/5185243-97adae6d28b594b3.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/5185243-97adae6d28b594b3.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
  ],
  articleList: [
    {
      id: 1,
      title: '锋格练字：为什么练字要先从楷书练起？',
      desc:
        '我们学习书法，大概都是从楷书入手，练书法好比学武术，楷书是基础，就像武术中的练马步、劈叉、压腿、练气等等基本的功夫，不是一天半天就能练好的，需要...',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/5185243-97adae6d28b594b3.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 2,
      title: '借用过道空间，定制8开门衣柜代替隔墙',
      desc:
        '我家的户型比较奇葩，主卧面积非常小，如果再做一个大衣柜的话，本身就窄的空间更显压抑了。老公提议说，借点过道的空间，直接用衣柜当隔墙，但前提是，确...',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/12961974-cd4bf9379c1b6033.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
  ]
})
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
