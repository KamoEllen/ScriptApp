import React, { useState, useEffect, useRef } from 'react';

const Explain: React.FC = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [videoUrl, setVideoUrl] = useState<string>('');

    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popupRef.current &&
                !popupRef.current.contains(event.target as Node) &&
                !(event.target as HTMLElement).classList.contains('video-iframe')
            ) {
                closePopup();
            }
        };

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closePopup();
            }
        };

        if (showPopup) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscapeKey);
            disableBodyScroll();
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
            enableBodyScroll();
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
            enableBodyScroll();
        };
    }, [showPopup]);

    const disableBodyScroll = () => {
        document.body.style.overflow = 'hidden';
    };

    const enableBodyScroll = () => {
        document.body.style.overflow = 'auto';
    };

    const openPopup = (url: string) => {
        const videoId = url.split('v=')[1];
        setVideoUrl(`https://www.youtube.com/embed/${videoId}`);
        setShowPopup(true);
    };

    const closePopup = () => {
        setVideoUrl('');
        setShowPopup(false);
    };

    const resources = [
        {
            id: 1,
            imageUrl: 'https://i.pinimg.com/originals/b6/1a/3b/b61a3bc87c65e8395aba1557ce1dd6e6.jpg',
            title: 'Tutorial 1',
            description: 'Description',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
        },
        {
            id: 2,
            imageUrl: 'https://i.pinimg.com/originals/b6/1a/3b/b61a3bc87c65e8395aba1557ce1dd6e6.jpg',
            title: 'Tutorial 2',
            description: 'Description',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
        },
        {
            id: 3,
            imageUrl: 'https://i.pinimg.com/originals/b6/1a/3b/b61a3bc87c65e8395aba1557ce1dd6e6.jpg',
            title: 'Tutorial 3',
            description: 'Description',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
        },
        {
            id: 4,
            imageUrl: 'https://i.pinimg.com/originals/b6/1a/3b/b61a3bc87c65e8395aba1557ce1dd6e6.jpg',
            title: 'Tutorial 4',
            description: 'Description',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
        },
        {
            id: 5,
            imageUrl: 'https://i.pinimg.com/originals/b6/1a/3b/b61a3bc87c65e8395aba1557ce1dd6e6.jpg',
            title: 'Tutorial 5',
            description: 'Description',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
        },
        {
            id: 6,
            imageUrl: 'https://i.pinimg.com/originals/b6/1a/3b/b61a3bc87c65e8395aba1557ce1dd6e6.jpg',
            title: 'Tutorial 6',
            description: 'Description',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
        },
        {
            id: 7,
            imageUrl: 'https://i.pinimg.com/originals/b6/1a/3b/b61a3bc87c65e8395aba1557ce1dd6e6.jpg',
            title: 'Tutorial 7',
            description: 'Description',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
        },
        {
            id: 8,
            imageUrl: 'https://i.pinimg.com/originals/b6/1a/3b/b61a3bc87c65e8395aba1557ce1dd6e6.jpg',
            title: 'Tutorial 8',
            description: 'Description',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
        },
        // Add more resources as needed
    ];

    return (
        <section id="tutorials" className="container py-24 sm:py-32">
            <div className="min-h-screen bg-secondary-100 dark:bg-secondary-900 text-gray-800 dark:text-white">
                <div className="container mx-auto px-4 py-8 mb-4">
                    <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
                        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            Learn{" "}
                        </span>
                        Features
                    </h2>
                    <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground md:text-center">
                       Less typing , more time
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {resources.map((resource) => (
                            <div key={resource.id} className="bg-muted/50 border rounded-lg overflow-hidden">
                                <img src={resource.imageUrl} alt={resource.title} className="w-full h-64 object-cover" />
                                <div className="p-4 md:p-6">
                                    <h3 className={`text-xl font-semibold text-${resource.color}-500 dark:text-${resource.color}-300 mb-2`}>{resource.title}</h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">{resource.description}</p>
                                    <button onClick={() => openPopup(resource.learnMoreUrl)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">Watch Video</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popup */}
                {showPopup && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                        <div ref={popupRef} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                            <button className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={closePopup}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="w-full h-full" style={{ paddingTop: '56.25%', position: 'relative' }}>
                                <iframe className="absolute top-0 left-0 w-full h-full video-iframe" src={videoUrl} title="YouTube Video" allowFullScreen />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Explain;

{/*
import React, { useState, useEffect, useRef } from 'react';

const Explain: React.FC = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [videoUrl, setVideoUrl] = useState<string>('');

    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popupRef.current &&
                !popupRef.current.contains(event.target as Node) &&
                !(event.target as HTMLElement).classList.contains('video-iframe')
            ) {
                closePopup();
            }
        };

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closePopup();
            }
        };

        if (showPopup) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscapeKey);
            disableBodyScroll();
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
            enableBodyScroll();
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
            enableBodyScroll();
        };
    }, [showPopup]);

    const disableBodyScroll = () => {
        document.body.style.overflow = 'hidden';
    };

    const enableBodyScroll = () => {
        document.body.style.overflow = 'auto';
    };

    const openPopup = (url: string) => {
        const videoId = url.split('v=')[1];
        setVideoUrl(`https://www.youtube.com/embed/${videoId}`);
        setShowPopup(true);
    };

    const closePopup = () => {
        setVideoUrl('');
        setShowPopup(false);
    };

    const resources = [
        {
            id: 1,
            imageUrl: 'https://i.pinimg.com/originals/b6/1a/3b/b61a3bc87c65e8395aba1557ce1dd6e6.jpg',
            title: 'Tutorial 1',
            description: 'Description',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
        },
        {
            id: 2,
            imageUrl: 'https://i.pinimg.com/originals/b6/1a/3b/b61a3bc87c65e8395aba1557ce1dd6e6.jpg',
            title: 'Tutorial 2',
            description: 'Description',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
        },
        {
            id: 3,
            imageUrl: 'https://i.pinimg.com/originals/b6/1a/3b/b61a3bc87c65e8395aba1557ce1dd6e6.jpg',
            title: 'Tutorial 3',
            description: 'Description',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
        },
        {
            id: 4,
            imageUrl: 'https://i.pinimg.com/originals/b6/1a/3b/b61a3bc87c65e8395aba1557ce1dd6e6.jpg',
            title: 'Tutorial 4',
            description: 'Description',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
        },
          {
            id: 5,
            imageUrl: 'https://i.pinimg.com/originals/b6/1a/3b/b61a3bc87c65e8395aba1557ce1dd6e6.jpg',
            title: 'Tutorial 5',
            description: 'Description',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
        },
          {
            id: 6,
            imageUrl: 'https://i.pinimg.com/originals/b6/1a/3b/b61a3bc87c65e8395aba1557ce1dd6e6.jpg',
            title: 'Tutorial 6',
            description: 'Description',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
        },
        {
            id: 7,
            imageUrl: 'https://i.pinimg.com/originals/b6/1a/3b/b61a3bc87c65e8395aba1557ce1dd6e6.jpg',
            title: 'Tutorial 7',
            description: 'Description',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
        },
          {
            id: 8,
            imageUrl: 'https://i.pinimg.com/originals/b6/1a/3b/b61a3bc87c65e8395aba1557ce1dd6e6.jpg',
            title: 'Tutorial 8',
            description: 'Description',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
        },
        // Add more resources as needed
    ];

    return (
        <section id="tutoials" className="container py-24 sm:py-32">
        <div className="min-h-screen bg-secondary-100 dark:bg-secondary-900 text-gray-800 dark:text-white">
            <div className="container mx-auto px-4 py-8 mb-4">
                
                <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
           Learn{" "}
        </span>
         Features
      </h2>
         <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground md:text-center">
     Learn how to work better in less time
      </p>       
     
                
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                    {resources.map((resource) => (
                        <div key={resource.id} className="bg-muted/50 border rounded-lg overflow-hidden">
                            <img src={resource.imageUrl} alt={resource.title} className="w-full h-64 object-cover" />
                            <div className="p-4 md:p-6">
                                <h3 className={`text-xl font-semibold text-${resource.color}-500 dark:text-${resource.color}-300 mb-2`}>{resource.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">{resource.description}</p>
                                <button onClick={() => openPopup(resource.learnMoreUrl)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">Watch Video</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            
            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div ref={popupRef} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                        <button className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={closePopup}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="w-full h-full">
                            <iframe className="w-full h-full video-iframe" src={videoUrl} title="YouTube Video" allowFullScreen style={{ width: '800px', height: '450px' }} />
                        </div>
                    </div>
                </div>
            )}
        </div>
            </section >
    );
};

export default Explain;
*/}
 {/*bg-white dark:bg-gray-800 shadow-lg*/}
{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> */}
{/* Popup */}

 {/*        {showPopup && (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div ref={popupRef} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            <button className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={closePopup}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className="w-full h-full">
                <iframe className="w-full h-full video-iframe" src={videoUrl} title="YouTube Video" allowFullScreen style={{ width: '800px', height: '450px' }} />
            </div>
        </div>
    </div>
)}

            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div ref={popupRef} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                        <button className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={closePopup}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                       <div className="w-full h-full">
                            <iframe className="w-full h-full video-iframe" src={videoUrl} title="YouTube Video" allowFullScreen />
                        </div>
                    </div>
                </div>
            )}
            */}
