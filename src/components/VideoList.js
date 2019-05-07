import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedVideo = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedVideo}</div>;
};

export default VideoList;
