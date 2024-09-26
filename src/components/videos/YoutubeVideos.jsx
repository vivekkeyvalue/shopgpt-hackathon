import { useRef, useState } from "react";
import YoutubeVideoPlayer from "./YoutubeVideoPlayer";
import YoutubeThumbnail from "./YoutubeThumbnail";

import "./styles.css";

const YoutubeVideos = () => {
  const videoSectionRef = useRef(null);

  const videoList = [
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=a3Ue-LN5B9U",
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=e1BHIY9p2WU",
    },
    {
      id: 3,
      url: "https://www.youtube.com/watch?v=uZ2eNBNYVww",
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=uZ2eNBNYVww",
    },
    {
      id: 5,
      url: "https://www.youtube.com/watch?v=uZ2eNBNYVww",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(videoList[0]);

  const handleThumbnailClick = (video) => {
    setActiveVideo(video);
    // Scroll to the video section when thumbnail is clicked
    videoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="snap-y snap-mandatory h-screen w-full overflow-y-scroll bg-[#1C002C]">
      {/* Full page section for the video */}
      <div
        className="snap-start w-full h-screen flex items-center justify-center "
        ref={videoSectionRef}
      >
        <YoutubeVideoPlayer videoLink={activeVideo.url} />
      </div>

      {/* Full page section for the thumbnail list */}
      <div className="snap-start w-full h-screen flex items-center justify-center ">
        <div className="w-full flex justify-center mt-6 gap-6 p-4">
          <div className="flex overflow-x-auto space-x-6">
            {videoList.map((video) => (
              <div key={video.url} onClick={() => handleThumbnailClick(video)}>
                <YoutubeThumbnail videoLink={video.url} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideos;
