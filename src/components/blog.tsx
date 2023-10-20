import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../app/store';
import { Post, createPost } from './post-slice';
import BlogPost from './blog-post';
import MediaInput from './input-media';

export default function Blog() {
  const [isAddPost, setIsAddPost] = useState(false);
  const postsArray = useSelector((state: RootState) => state.post).posts;
  const dispatch = useDispatch();

  const onClickAddPost = () => {
    console.log('adding post');
    setIsAddPost(true);
  };

  /* ADD NEW POST */
  const onSaveNewPost = (post: Post) => {
    setIsAddPost(false);
    console.log('new post saved');
    dispatch(createPost(post));
  };

  const onCancelNewPost = () => {
    setIsAddPost(false);
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <button type="button" onClick={() => onClickAddPost()}>
        Add Post
      </button>
      {isAddPost ? (
        <MediaInput
          shouldShowTitleInput
          existingPost={{
            id: -1,
            title: 'Add post title',
            imageUrl: 'Add image url',
            description: 'Add a description',
          }}
          onSaveEdit={onSaveNewPost}
          onCancelEdit={onCancelNewPost}
        />
      ) : null}
      {postsArray.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}
