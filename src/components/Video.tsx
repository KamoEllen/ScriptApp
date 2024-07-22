// Video.tsx
import React, { useState } from 'react';

interface VideoProps {
    videoUrl: string;
}

const Video: React.FC<VideoProps> = ({ videoUrl }) => {
    const [overlayOpen, setOverlayOpen] = useState(false);

    const toggleOverlay = () => {
        setOverlayOpen(!overlayOpen);
    };

    return (
        <div className="video-wrapper">
            <div className={`video ${overlayOpen ? 'open' : ''}`} onClick={toggleOverlay}>
                <iframe
                    src={videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            {overlayOpen && (
                <div className="video-overlay" onClick={toggleOverlay}>
                    <iframe
                        src={videoUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default Video;
