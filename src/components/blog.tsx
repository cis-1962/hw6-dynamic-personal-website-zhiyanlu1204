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
    <div className="content-evenly p-5">
      <h1 className="text-center mb-4 font-extrabold text-4xl">Blog Posts</h1>
      <button
        className="text-white bg-purple-500 hover:bg-purple-700 px-2 py-2 ml-auto rounded flex flex-col items-center mr-6"
        type="button"
        onClick={() => onClickAddPost()}
      >
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
          shouldShowDelete={false}
          onDeletePost={null}
        />
      ) : null}
      <div className="grid grid-cols-2 divide-x">
        {postsArray.map((post) => (
          <div>
            <BlogPost key={post.id} post={post} />
          </div>
        ))}
      </div>
      {postsArray.length === 0 ? <div className="h-80" /> : null}
    </div>
  );
}
