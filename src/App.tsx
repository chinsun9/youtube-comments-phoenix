import React from 'react';
import './App.css';
import likeIcon from './icons/LikeIcon.svg';
import dislikeIcon from './icons/DislikeIcon.svg';
import heartIcon from './icons/HeartIcon.svg';
import menuIcon from './icons/MenuIcon.svg';
import downIcon from './icons/DownIcon.svg';
import upIcon from './icons/UpIcon.svg';

function App() {
  // 채널 아이콘

  return (
    <div className="App">
      <div className="header">
        <div className="title">
          <h2>댓글 {140}개</h2>
          <div className="subMenu">
            <img src={menuIcon} alt="menuIcon" />
            <span>정렬 기준</span>
          </div>
        </div>

        <div className="commentBox">
          <div className="authorThumbnail">
            <img src="https://i.pravatar.cc/48" alt="authorThumbnail" />
          </div>
          <div className="main">
            <div className="creationBox" />
            <div className="footer">
              <button type="button">취소</button>
              <button type="button">댓글</button>
            </div>
          </div>
        </div>
      </div>

      <div className="contents">
        <div className="commentThread">
          <div className="comment">
            <div className="authorThumbnail">
              <img src="https://i.pravatar.cc/48" alt="authorThumbnail" />
            </div>
            <div className="main">
              <div className="header">
                <h3>username</h3>
                <div className="publishedTime">{1}주 전</div>
              </div>
              <div className="content">good good</div>
              <div className="toolbar">
                <div className="likeButton">
                  <img src={likeIcon} alt="likeIcon" />
                  <span>199</span>
                  <img src={dislikeIcon} alt="dislikeIcon" />
                  <span>199</span>
                  <div className="creator-heart">
                    <img src="https://i.pravatar.cc/48" alt="" />
                    <img src={heartIcon} alt="" />
                  </div>
                  <div className="replyButton">답글</div>
                </div>
              </div>
            </div>
          </div>
          <div className="expander">
            <div className="replies">
              <img src={downIcon} alt="downIcon" />
              답글 보기
            </div>
            <div className="expanderContents">...</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
