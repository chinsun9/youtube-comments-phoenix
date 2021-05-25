import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Comment from './components/Comment';

const Main = styled.div`
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 2rem;

  > div {
    max-width: 900px;
    margin: auto;
  }
`;

function App() {
  // 채널 아이콘

  return (
    <Main>
      <Header />

      <div className="contents">
        <div className="commentThread">
          <Comment />
          {/* <div className="expander">
            <div className="replies">
              <img src={downIcon} alt="downIcon" />
              답글 보기
            </div>
            <div className="expanderContents">...</div>
          </div> */}
        </div>
      </div>
    </Main>
  );
}

export default App;
