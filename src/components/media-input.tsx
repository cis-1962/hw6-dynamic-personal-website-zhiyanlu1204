import React, { useState } from 'react';
import PropTypes from 'prop-types';

MediaInput.propTypes = {
  shouldShowTitleInput: PropTypes.bool.isRequired,
};

export default function MediaInput({
  shouldShowTitleInput,
  onSaveEdit,
  onCancelEdit,
}: {
  shouldShowTitleInput: boolean;
  onSaveEdit: () => void;
  onCancelEdit: () => void;
}) {
  const onTitleChange = (string) => {};
  const onImageChange = (string) => {};
  const onDescriptionChange = (string) => {};

  return (
    <div>
      <form>
        {shouldShowTitleInput ? (
          <label htmlFor="title">
            Title
            <input
              id="title"
              type="text"
              placeholder="Enter the title of the post"
              onChange={(e) => onTitleChange(e.target.value)}
            />
          </label>
        ) : null}
        <label htmlFor="image">
          Image
          <input
            id="image"
            type="text"
            placeholder="Enter image url"
            onChange={(e) => onImageChange(e.target.value)}
          />
        </label>
        <label htmlFor="description">
          Description
          <input
            id="description"
            type="text"
            placeholder="Enter description"
            onChange={(e) => onDescriptionChange(e.target.value)}
          />
        </label>
        <input type="button" onClick={() => onSaveEdit()} value="Save" />
        <input type="button" onClick={() => onCancelEdit()} value="Cancel" />
      </form>
    </div>
  );
}
