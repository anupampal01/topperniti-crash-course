import React from 'react';

const VideoModal = ({ videoUrl }) => (
  <div className="card">
    <iframe
      width="100%"
      height="250"
      src={videoUrl}
      title="Demo Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

export default VideoModal;
