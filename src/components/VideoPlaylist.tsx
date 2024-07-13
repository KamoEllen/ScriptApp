// VideoPlaylist.tsx
import React from 'react';
import Video from './Video'; // Adjust path as necessary
import './styles.css'; // Assuming your CSS file is named styles.css

const VideoPlaylist: React.FC = () => {
    // Example video URLs (replace with your own)
    const videos = [
        'https://www.youtube.com/embed/oqZY1_fUulo',
        'https://www.youtube.com/embed/kCfT3DOaV0A',
        'https://www.youtube.com/embed/tpnw3YDNOE4',
        'https://www.youtube.com/embed/HdA-3CvwiJk',
        'https://www.youtube.com/embed/TWVMrwrW864',
        'https://www.youtube.com/embed/t3lFdTSkqIM',
        'https://www.youtube.com/embed/aEyVbI408dA',
        'https://www.youtube.com/embed/EYCRFim8vZQ',
        'https://www.youtube.com/embed/Le5JrrQ_BX8',
        'https://www.youtube.com/embed/b3V-BknuSwc',
        'https://www.youtube.com/embed/liBB1ZDJTbo',
        'https://www.youtube.com/embed/C1VWtGt9SP8',
    ];

    return (
        <section className="video-playlist bg-muted/50 py-16 my-24 sm:my-32">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col max-w-6xl mx-auto pt-8 md:pt-12 lg:pt-16">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Learn how
                            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                                {' '}
                                to use{' '}
                            </span>
                            The Script App
                        </h2>
                        <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
                            Select a video to learn about a specific feature. Enlarge the video to view in full screen.
                        </p>
                    </div>
                    <div className="video-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {videos.map((videoUrl, index) => (
                            <Video key={index} videoUrl={videoUrl} />
                        ))}
                    </div>
                    <div className="h-30"></div>
                </div>
            </div>
        </section>
    );
};

export default VideoPlaylist;
