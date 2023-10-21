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
    <div className="m-4 border-2 border-fuchsia-300/100 bg-fuchsia-200/100 p-4 rounded">
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
          <img
            className="text-left font-semibold text-3xl"
            src={post.imageUrl}
            alt="No img :)"
            width="400"
            height="500"
          />
          <h1 className="text-center mb-4 font-bold text-2xl">{post.title}</h1>
          <p className="text-left mb-4 font-regular text-xl">
            {post.description}
          </p>
          <button
            className="text-white bg-orange-600 hover:bg-orange-700 px-2 py-2 ml-auto rounded"
            type="button"
            onClick={() => onEditPost()}
          >
            Edit Post
          </button>
          <p className="text-right font-bold text-m">{post.id}</p>
        </div>
      )}
    </div>
  );
}
