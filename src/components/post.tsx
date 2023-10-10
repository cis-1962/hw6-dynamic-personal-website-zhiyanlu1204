import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MediaInput from './media-input';

Post.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default function Post({
  title,
  imageUrl,
  description,
}: {
  title: string;
  imageUrl: string;
  description: string;
}) {
  const [isEditPost, setIsEditPost] = useState(false);
  const onEditPost = () => {
    setIsEditPost(true);
  };
  return (
    <div>
      {isEditPost ? (
        <MediaInput
          shouldShowTitleInput
          onSaveEdit={onEditPost}
          onCancelEdit={onEditPost}
        />
      ) : (
        <div>
          <img src={imageUrl} alt="Non provided" width="400" height="500" />
          <h5>{title}</h5>
          <p>{description}</p>
          <button type="button" onClick={() => onEditPost()}>
            Edit Post
          </button>
        </div>
      )}
    </div>
  );
}
