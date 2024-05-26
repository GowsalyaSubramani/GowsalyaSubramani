import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon
} from 'react-share';

const SocialShare = ({ provider }) => {
  const shareUrl = provider.url;
  const title = provider.name;

  return (
    <div>
      <FacebookShareButton url={shareUrl} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
};

export default SocialShare;
