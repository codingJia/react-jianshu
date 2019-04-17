import { fromJS } from 'immutable'

const defaultSatae = fromJS({
  title: '这几个学习方法，打破你的思维惯性，带你走向高效人生',
  content:
    '<img src="https://upload-images.jianshu.io/upload_images/13795115-29f5081352a01822.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp" alt="" /><p>比如2019年你要看60本书和电影，那你平摊下来一个月平均看5本书和电影，再平均下来每周看1-2本就可以了；可以先建个自己的书单和影单库-平时有感兴趣的书单或者影单集中起来；再每个月从中挑几本想看的看，看完之后就把这些看过的书单/影单记录下来，可以通过实实在在的记录看到自己的成长获得满足感；</p>'
})

export default (state = defaultSatae, action) => {
  switch (action.type) {
    default:
      return state
  }
}
