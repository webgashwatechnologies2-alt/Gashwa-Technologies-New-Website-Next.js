'use client';

import { useState, useRef } from 'react';

export default function Video() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const bgIframeRef = useRef<HTMLIFrameElement>(null);

  const BG_VIDEO_ID = 'rOZRF0zbgks';
  const MODAL_VIDEO_ID = 'rOZRF0zbgks';

  const bgSrc = `https://www.youtube.com/embed/${BG_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${BG_VIDEO_ID}&enablejsapi=1`;
  const modalSrc = `https://www.youtube.com/embed/${MODAL_VIDEO_ID}?autoplay=1`;

  const pauseBackgroundVideo = () => {
    bgIframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
      '*'
    );
  };

  const playBackgroundVideo = () => {
    bgIframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
      '*'
    );
  };

  const handleOpen = () => {
    pauseBackgroundVideo();
    setIsVideoOpen(true);
  };

  const handleClose = () => {
    setIsVideoOpen(false);
    playBackgroundVideo();
  };

  return (
    <>
      <div className="video-box-area">
        <div className="video-wrap style1 img-custom-anim-left">
          <div className="container">
            <div
              className="video-box fix position-relative rounded-4 overflow-hidden"
              style={{ minHeight: '400px' }}
            >
              <iframe
                ref={bgIframeRef}
                src={bgSrc}
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ border: 0, pointerEvents: 'none' }}
                allow="autoplay; encrypted-media"
                title="Background video"
              />

              <button
                onClick={handleOpen}
                className="play-btn popup-video border-0 bg-transparent position-absolute top-50 start-50 translate-middle"
                aria-label="Play video"
                style={{ cursor: 'pointer', zIndex: 2 }}
              >
                <i className="fa-sharp fa-solid fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div
          className="mfp-bg mfp-ready"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={handleClose}
        >
          <div
            className="position-relative w-100 p-3"
            style={{ maxWidth: '800px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="btn text-white position-absolute top-0 end-0 m-2 fs-3"
              style={{ zIndex: 10000 }}
              aria-label="Close video"
            >
              &times;
            </button>
            <div className="ratio ratio-16x9">
              <iframe
                src={modalSrc}
                title="Gashwa Technologies - Website Designing Company in Shimla Himachal"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
