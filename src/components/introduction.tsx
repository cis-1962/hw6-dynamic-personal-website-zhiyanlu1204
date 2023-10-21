import React, { useState } from 'react';
import redux from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../app/store';
import { Post, editIntro } from './post-slice';
import MediaInput from './input-media';
import 'tailwindcss/tailwind.css';

export default function Introduction() {
  const [showEditButton, setShowEditButton] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  const intro: Post = useSelector(
    (state: RootState) => state.post.introduction,
  );
  const dispatch = useDispatch();

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
    dispatch(editIntro(post));
    setHasInitialized(true);
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
      {isEdit ? (
        <MediaInput
          shouldShowTitleInput={false}
          existingPost={intro}
          onSaveEdit={onSaveInputEdit}
          onCancelEdit={onCancelInputEdit}
          shouldShowDelete={false}
          onDeletePost={null}
        />
      ) : null}
      {hasInitialized ? (
        <div>
          <img src={intro.imageUrl} alt="No img :)" width="400" height="500" />
          <p>{intro.description}</p>
        </div>
      ) : null}
    </div>
  );
}
