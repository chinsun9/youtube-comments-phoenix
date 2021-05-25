import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Comment from './components/Comment';
import { useCommentState } from './context/GlobalContext';

const Main = styled.div`
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 2rem;

  > div {
    max-width: 900px;
    margin: auto;
  }

  .contents {
    .commentThread {
      margin-bottom: 16px;
    }
  }
`;

function App() {
  const comment = useCommentState();

  return (
    <Main>
      <Header />

      <div className="contents">
        {Array.from(comment).map(([id, data]) => {
          return (
            <div className="commentThread" key={id}>
              <Comment data={data} />
            </div>
          );
        })}
      </div>
    </Main>
  );
}

export default App;
