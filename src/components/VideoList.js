import React from "react";

import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const list = this.props.list.map((video) => {
      return (
        <VideoItem
          key={video.id.videoId}
          item={video}
          onClick={this.props.onSelect}
        />
      );
    });

    return <div className="ui relaxed divided list">{list}</div>;
  }
}

export default VideoList;
