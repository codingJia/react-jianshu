import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`
export const HomeRight = styled.div`
  width: 240px;
  float: right;
`
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic {
    width: 125px;
    height: 100px;
    display: block;
    float: left;
  }
`
export const ItemInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    font-size: 18px;
    line-height: 27px;
    color: #333;
    font-weight: bold;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`
