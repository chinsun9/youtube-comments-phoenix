/* eslint-disable no-case-declarations */
import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { Comment } from '../types';

type State = Map<number, Comment>;

const initialState: State = new Map<number, Comment>();

initialState.set(0, {
  id: 0,
  avatar: 'https://i.pravatar.cc/48',
  username: 'string',
  publishedTime: '1주 전',
  content: 'hello world!',
  likeCount: 999,
  dislikeCount: 0,
});

type CommentAction = { type: 'ADD_COMMENT'; comment: Comment };

const CommentContext = createContext<State>(initialState);
const CommentDispatch = createContext<Dispatch<CommentAction>>(() => null);

let nextId = 0;

function reducer(state: State, action: CommentAction): State {
  switch (action.type) {
    case 'ADD_COMMENT':
      const { comment } = action;
      nextId += 1;
      return new Map(state).set(nextId, { ...comment, id: nextId });

    default:
      throw new Error('Unhandled action');
  }
}

export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CommentContext.Provider value={state}>
      <CommentDispatch.Provider value={dispatch}>
        {children}
      </CommentDispatch.Provider>
    </CommentContext.Provider>
  );
}

export function useCommentState() {
  return useContext(CommentContext);
}

export function useCommentDispatch() {
  return useContext(CommentDispatch);
}
