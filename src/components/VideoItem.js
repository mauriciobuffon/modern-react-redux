import "./VideoItem.css";

import React from "react";

const VideoItem = ({ item, onClick }) => {
  return (
    <div onClick={(e) => onClick(item)} className="video-item item">
      <img
        alt={item.snippet.title}
        src={item.snippet.thumbnails.default.url}
        className="ui image"
      />
      <div className="content">
        <div className="header">{item.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
