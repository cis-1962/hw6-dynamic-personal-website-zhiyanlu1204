import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Post, updatePost, deletePost } from './post-slice';
import MediaInput from './input-media';

export default function BlogPost({ post }: { post: Post }) {
  const [isEditPost, setIsEditPost] = useState(false);
  const dispatch = useDispatch();

  const onEditPost = () => {
    setIsEditPost(true);
  };

  /* UPDATE POST */
  const onSaveInputEdit = (savedPost: Post) => {
    setIsEditPost(false);
    dispatch(updatePost(savedPost));
    console.log('saved this post edit');
  };

  const onCancelPostEdit = () => {
    setIsEditPost(false);
    console.log('canceled post edit');
  };

  const onDeletePost = () => {
    setIsEditPost(false);
    console.log('deleting post');
    dispatch(deletePost(post));
  };

  return (
    <div>
      {isEditPost ? (
        <MediaInput
          shouldShowTitleInput
          existingPost={post}
          onSaveEdit={onSaveInputEdit}
          onCancelEdit={onCancelPostEdit}
          shouldShowDelete
          onDeletePost={onDeletePost}
        />
      ) : (
        <div>
          <img src={post.imageUrl} alt="No img :)" width="400" height="500" />
          <h5>{post.title}</h5>
          <p>{post.description}</p>
          <button type="button" onClick={() => onEditPost()}>
            Edit Post
          </button>
        </div>
      )}
    </div>
  );
}
