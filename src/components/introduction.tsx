import React, { useState } from 'react';
import MediaInput from './media-input';

export default function Introduction() {
  const [showEditButton, setShowEditButton] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    console.log('clicked edit');
    setShowEditButton(false);
    setIsEdit(true);
  };

  const onHideMediaInputUI = () => {
    setIsEdit(false);
    setShowEditButton(true);
  };

  const onSaveInputEdit = () => {
    onHideMediaInputUI();
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
          onSaveEdit={onSaveInputEdit}
          onCancelEdit={onCancelInputEdit}
        />
      ) : null}
    </div>
  );
}
