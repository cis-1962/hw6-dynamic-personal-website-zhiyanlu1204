import React, { useState } from 'react';
import redux from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../app/store';
import { Post, createPost } from './post-slice';
import MediaInput from './input-media';

export default function Introduction() {
  const [showEditButton, setShowEditButton] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  // const postsArray = useSelector((state: RootState) => state.mediaInput.title);

  const onHideMediaInputUI = () => {
    setIsEdit(false);
    setShowEditButton(true);
  };

  const onClickEdit = () => {
    console.log('clicked edit');
    setShowEditButton(false);
    setIsEdit(true);
  };

  const onSaveInputEdit = (post: Post) => {
    onHideMediaInputUI();
    /**
     * TODO: IMPLEMENT INTRO LOGIC: new POST is created
     */
  };

  const onCancelInputEdit = () => {
    onHideMediaInputUI();
  };

  return (
    <div>
      <h1>Hey this is me!</h1>
      {showEditButton ? (
        <button type="button" onClick={() => onClickEdit()}>
          Edit
        </button>
      ) : null}
      {/* {isEdit ? (
        <MediaInput
          shouldShowTitleInput={false}
          isNewPost
          oldPostID={-1}
          onSaveEdit={onSaveInputEdit}
          onCancelEdit={onCancelInputEdit}
        />
      ) : null} */}
    </div>
  );
}
