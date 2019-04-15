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
  width: 280px;
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
export const RecommendWrapper = styled.div`
  margin-top: -4px;
  padding-bottom: 4px;
  min-height: 228px;
  padding-top: 30px;
`
export const RecommentItem = styled.div`
  width: 280px;
  background: url(${props => props.imgUrl});
  background-size: contain;
  min-height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
  cursor: pointer;
`
export const WriterWrapper = styled.div`
  margin-bottom: 20px;
  padding-top: 0;
  font-size: 13px;
  text-align: center;
  margin-top: 30px;
`
export const TitleWrapper = styled.div`
  text-align: left;
`
export const TitleLeft = styled.span`
  font-size: 14px;
  color: #969696;
`
export const TitleRight = styled.a`
  float: right;
  display: inline-block;
  font-size: 14px;
  color: #969696;
`
export const WriterItem = styled.div`
  margin-top: 15px;
  overflow: hidden;
  img {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .descWrapper {
    text-align: left;
    float: left;
    height: 100%;
    margin-top: 5px;
    line-height: 1.5;
    .title {
      padding-top: 5px;
      margin-right: 60px;
      font-size: 14px;
    }
    .desc {
      margin-top: 2px;
      font-size: 12px;
      color: #969696;
    }
  }
  .attention {
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;
  }
`
export const AddMore = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  width: 100%;
  border-radius: 20px;
  background-color: #a5a5a5;
  height: 40px;
  margin: 30px auto 60px;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  border-radius: 20px;
  color: #fff;
  background-color: #a5a5a5;
`
