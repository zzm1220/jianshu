import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 30px;
    .banner {
        width: 625px;
        height: 270px;
    }
`;

export const HomeLeft = styled.div`
    width: 625px;
    float: left;
    margin-right: 15px;
`;

export const HomeRight = styled.div`
    width: 320px;
    float: left;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    margin-right: 22px;
    margin-bottom: 18px;
    padding-right: 10px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background: #f7f7f7;
    cursor: pointer;
    .topicPic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    width: 100%;
    height: 140px;
    overflow: hidden;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #dcdcdc;
    word-wrap: break-word;
    .list-img {
        float: right;
        width: 150px;
        border-radius: 10px
    }
`;

export const Content = styled.div`
    width: 458px;
    float: left;
    cursor: pointer;
    h3 {
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color: #333;
        margin-bottom: 6px;
    }
    p {
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    width: 320px;
    margin-top: -6px;
`;

export const RecommendItem = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 6px;
    .recommendImg {
        width: 100%;
        border-radius: 4px;
    }
`;