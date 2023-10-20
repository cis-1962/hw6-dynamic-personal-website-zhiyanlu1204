import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../app/store';

import { Post, incID } from './post-slice';

export default function MediaInput({
  shouldShowTitleInput,
  existingPost,
  onSaveEdit,
  onCancelEdit,
}: {
  shouldShowTitleInput: boolean;
  existingPost: Post;
  onSaveEdit: (post: Post) => void;
  onCancelEdit: () => void;
}) {
  const [title, setTitle] = useState(existingPost.title);
  const [imageUrl, setImageUrl] = useState(existingPost.imageUrl);
  const [description, setDescription] = useState(existingPost.description);
  const id = useSelector((state: RootState) => state.post.id);
  const dispatch = useDispatch();

  const onTitleChange = (s: string) => {
    setTitle(s);
  };
  const onImageChange = (s: string) => {
    setImageUrl(s);
  };
  const onDescriptionChange = (s: string) => {
    setDescription(s);
  };

  const onSaveLocalEdit = () => {
    console.log('save on input-media level');
    if (existingPost.id === -1) {
      dispatch(incID());
      const newPost = {
        id,
        title,
        imageUrl,
        description,
      };
      onSaveEdit(newPost);
    } else {
      const editedPost = {
        id: existingPost.id,
        title,
        imageUrl,
        description,
      };
      onSaveEdit(editedPost);
    }
  };

  return (
    <div>
      <form>
        {shouldShowTitleInput ? (
          <label htmlFor="title">
            Title
            <input
              id="title"
              type="text"
              placeholder={title}
              onChange={(e) => onTitleChange(e.target.value)}
            />
          </label>
        ) : null}
        <label htmlFor="image">
          Image
          <input
            id="image"
            type="text"
            placeholder={imageUrl}
            onChange={(e) => onImageChange(e.target.value)}
          />
        </label>
        <label htmlFor="description">
          Description
          <input
            id="description"
            type="text"
            placeholder={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
          />
        </label>
        <input type="button" onClick={() => onSaveLocalEdit()} value="Save" />
        <input type="button" onClick={() => onCancelEdit()} value="Cancel" />
      </form>
    </div>
  );
}
