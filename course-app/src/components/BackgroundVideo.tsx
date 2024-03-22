import React from "react";
import ReactPlayer from "react-player";
import "../styles/HomePage.css";

interface BackgroundVideoProps {
  videoUrl: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ videoUrl }) => {
  return (
    <div className="background-video">
      <ReactPlayer
        url={videoUrl}
        playing
        loop
        muted
        width="921px"
        height="335px"
      />
    </div>
  );
};

export default BackgroundVideo;
