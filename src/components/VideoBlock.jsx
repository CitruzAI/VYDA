import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

export default function VideoBlock({ title, src, poster, className = "" }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <figure className={`relative overflow-hidden bg-espresso rounded-sm ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full aspect-video object-cover"
        controls
        preload="metadata"
        playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      >
        <track kind="captions" />
      </video>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-espresso/50 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-4">
        {title && <figcaption className="text-ivory font-display text-lg">{title}</figcaption>}
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause video" : "Play video"}
          className="pointer-events-auto w-11 h-11 rounded-full bg-ivory/90 text-espresso flex items-center justify-center hover:bg-champagne-light transition-colors"
        >
          {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>
      </div>
    </figure>
  );
}
