/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as MenuIcon } from '../icons/MenuIcon.svg';

const Main = styled.div`
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    h2 {
      color: #030303;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0.1px;
      margin-right: 32px;
    }

    .subMenu {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #606060;

      svg {
        width: 24px;
      }

      span {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }

  .commentBox {
    display: flex;
    margin-bottom: 24px;

    .authorThumbnail {
      height: 40px;
      margin-right: 16px;

      img {
        height: 100%;
        border-radius: 50%;
      }
    }

    .main {
      width: 100%;

      .creationBox {
        position: relative;
        height: 24.5px;
        margin-bottom: 8px;

        input {
          width: 100%;
          position: relative;
          font-size: 14px;
          background-color: transparent;
          border: none;
          margin-bottom: 8px;

          :focus {
            outline: none;
          }
        }

        label {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          border-bottom: 1px solid #909090;

          ::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 100%;
            border-bottom: 2px solid #000000;
            transform-origin: center;
            transform: scaleX(0);
          }
        }

        input:focus + label::after {
          transition: all 0.3s ease;
          transform: scaleX(1);
        }
      }

      .footer {
        display: flex;
        justify-content: flex-end;
        gap: 16px;

        button {
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.5px;
          height: 39px;
          min-width: 71.96px;
          padding: 10px 16px;
          border: none;
          border-radius: 2px;
          background-color: #065fd4;
          color: #fff;

          &.cancel {
            background-color: transparent;
            color: #060606;
          }

          :disabled {
            cursor: auto;
            background-color: #cccccc;
            color: #606060;
          }
        }
      }
    }
  }
`;

function Header() {
  const [isEditable, setIsEditable] = useState(false);
  const [comment, setComment] = useState('');

  const onCommentChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setComment(value);
  };

  const onCancelHandler = () => {
    setIsEditable(false);
    setComment('');
  };

  const onFocusHandler = () => {
    setIsEditable(true);
  };

  return (
    <Main>
      <div className="title">
        <h2>댓글 {140}개</h2>
        <div className="subMenu">
          <MenuIcon />
          <span>정렬 기준</span>
        </div>
      </div>

      <div className="commentBox">
        <div className="authorThumbnail">
          <img src="https://i.pravatar.cc/48" alt="authorThumbnail" />
        </div>
        <div className="main">
          <div className="creationBox">
            <input
              type="text"
              name="comment"
              placeholder="공개 댓글 추가 ..."
              spellCheck="false"
              value={comment}
              onFocus={onFocusHandler}
              onChange={onCommentChangeHandler}
            />
            <label htmlFor="comment" />
          </div>
          {isEditable ? (
            <div className="footer">
              <button
                type="button"
                className="cancel"
                onClick={onCancelHandler}
              >
                취소
              </button>
              <button type="button" disabled={comment.length === 0}>
                댓글
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </Main>
  );
}

export default Header;
