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
    <div className="p-5">
      <h1 className="text-center mb-4 font-extrabold text-4xl">
        Hey this is me!
      </h1>
      {showEditButton ? (
        <button
          className="text-white bg-blue-500 hover:bg-green-700 px-2 py-2 rounded float-right mr-6"
          type="button"
          onClick={() => onClickEdit()}
        >
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
        <div className="border-2 border-amber-300/100 bg-amber-200/100 p-4 rounded">
          <img
            className="text-left font-semibold text-3xl"
            src={intro.imageUrl}
            alt="No img :)"
            width="400"
            height="500"
          />
          <p className="text-left mb-4 font-semibold text-2xl">
            {intro.description}
          </p>
        </div>
      ) : (
        <div className="h-80" />
      )}
    </div>
  );
}
