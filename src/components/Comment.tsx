import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as LikeIcon } from '../icons/LikeIcon.svg';
import { ReactComponent as DislikeIcon } from '../icons/DislikeIcon.svg';
// import { ReactComponent as HeartIcon } from '../icons/HeartIcon.svg';
import IconButton from './IconButton';

const Main = styled.div`
  display: flex;

  .authorThumbnail {
    height: 40px;
    margin-right: 16px;

    img {
      height: 100%;
      border-radius: 50%;
    }
  }

  .main {
    .header {
      color: #030303;
      display: flex;

      h3 {
        font-size: 13px;
        font-weight: 700;
        line-height: 18px;
      }

      .publishedTime {
        font-size: 12px;
        letter-spacing: 0.3px;
      }
    }

    .content {
      font-size: 14px;
      letter-spacing: 0.2px;
      line-height: 20px;
      white-space: pre-wrap;
    }

    .toolbar {
      display: flex;
      align-items: center;
      color: #606060;

      > * {
        margin: 8px;
      }

      span {
        font-size: 12px;
        letter-spacing: 0.3px;
      }

      button.replyButton {
        cursor: pointer;
        font-size: 13px;
        background-color: transparent;
        border: none;
        font-weight: 500;
      }
    }
  }
`;

function Comment() {
  const onLikeHandler = () => {
    console.log('like');
  };

  return (
    <Main>
      <div className="authorThumbnail">
        <img src="https://i.pravatar.cc/48" alt="authorThumbnail" />
      </div>
      <div className="main">
        <div className="header">
          <h3>Username</h3>
          &nbsp;
          <div className="publishedTime">{1}주 전</div>
        </div>
        <div className="content">good good</div>
        <div className="toolbar">
          <IconButton onClick={onLikeHandler}>
            <LikeIcon />
          </IconButton>

          <span>199</span>
          <IconButton onClick={onLikeHandler}>
            <DislikeIcon />
          </IconButton>
          {/* <span>199</span> */}
          {/* <div className="creator-heart">
            <img src="https://i.pravatar.cc/48" alt="" />
            <HeartIcon />
          </div> */}
          <button type="button" className="replyButton">
            답글
          </button>
        </div>
      </div>
    </Main>
  );
}

export default Comment;
