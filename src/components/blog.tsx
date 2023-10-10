import React from 'react';
import Post from './post';

export default function Blog() {
  const onClickAddPost = () => {};
  return (
    <div>
      <h1>Blog Posts</h1>
      <button type="button" onClick={() => onClickAddPost()}>
        Add Post
      </button>
      <Post
        imageUrl="https://upload.wikimedia.org/wikipedia/en/5/55/Shoyo_Hinata.png"
        title="mybaby"
        description="babyuwu"
      />
    </div>
  );
}
