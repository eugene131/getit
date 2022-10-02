import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: '배유진',
    comment: '안녕하세요, 소통해요.',
  },
  {
    name: '유재석',
    comment: '리액트 재밌어요~',
  },
  {
    name: '강민경',
    comment: '저도 배워보고 싶어요',
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;