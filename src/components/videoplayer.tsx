import React from "react";

export default function VideoPlayer() {
  return (
    <video
      className="w-[100%] h-[90%] md:w-[60%] md:h-[65%] rounded-md shadow-lg"
      controls
      preload="auto"
    >
      <source src="/mas-video.mp4" type="video/mp4" />
      Your browser does not support videos :&#40;.
    </video>
  );
}
