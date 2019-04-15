import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper, RecommentItem } from '../style'

class Recommend extends PureComponent {
  render() {
    const { list } = this.props
    return (
      <RecommendWrapper>
        {list.map(item => {
          return <RecommentItem imgUrl={item.get('imgUrl')} key={item} alt="" />
        })}
      </RecommendWrapper>
    )
  }
}
const mapState = state => ({
  list: state.getIn(['home', 'recommendList'])
})
export default connect(mapState)(Recommend)
