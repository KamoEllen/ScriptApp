import React, { useState } from 'react';

const Explain: React.FC = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false); // Explicitly declare type for showPopup
    const [videoUrl, setVideoUrl] = useState<string>(''); // Explicitly declare type for videoUrl

    const openPopup = (url: string) => {
        setVideoUrl(url);
        setShowPopup(true);
    };

    const closePopup = () => {
        setVideoUrl('');
        setShowPopup(false);
    };

    // Example data for cards
    const resources = [
        {
            id: 1,
            imageUrl: 'https://th.bing.com/th/id/OIP.i2Xyg2lc5voJPtGXRfvFMwHaFk?rs=1&pid=ImgDetMain',
            title: 'Tutorial',
            description: 'Cute tutorial letting uses know what theyy will watch.',
            url: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U'
        },
         {
            id: 2,
            imageUrl: 'https://th.bing.com/th/id/OIP.i2Xyg2lc5voJPtGXRfvFMwHaFk?rs=1&pid=ImgDetMain',
            title: 'Tutorial',
            description: 'Cute tutorial letting uses know what theyy will watch.',
            url: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U'
        },
         {
            id: 3,
            imageUrl: 'https://th.bing.com/th/id/OIP.i2Xyg2lc5voJPtGXRfvFMwHaFk?rs=1&pid=ImgDetMain',
            title: 'Tutorial',
            description: 'Cute tutorial letting uses know what theyy will watch.',
            url: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U'
        },
         {
            id: 4,
            imageUrl: 'https://th.bing.com/th/id/OIP.i2Xyg2lc5voJPtGXRfvFMwHaFk?rs=1&pid=ImgDetMain',
            title: 'Tutorial',
            description: 'Cute tutorial letting uses know what theyy will watch.',
            url: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U'
        },
         {
            id: 5,
            imageUrl: 'https://th.bing.com/th/id/OIP.i2Xyg2lc5voJPtGXRfvFMwHaFk?rs=1&pid=ImgDetMain',
            title: 'Tutorial',
            description: 'Cute tutorial letting uses know what theyy will watch.',
            url: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U'
        },
         {
            id: 6,
            imageUrl: 'https://th.bing.com/th/id/OIP.i2Xyg2lc5voJPtGXRfvFMwHaFk?rs=1&pid=ImgDetMain',
            title: 'Tutorial',
            description: 'Cute tutorial letting uses know what theyy will watch.',
            url: 'https://www.youtube.com/watch?v=b2F4yMDyy_U',
            color: 'indigo',
            learnMoreUrl: 'https://www.youtube.com/watch?v=b2F4yMDyy_U'
        },
        // Add more resources as needed
    ];

    return (
        <div className="h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
                    Featured Resources
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource) => (
                        <div key={resource.id} className={`bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden`}>
                            <img src={resource.imageUrl} alt={resource.title} className="w-full h-64 object-cover" />
                            <div className="p-4 md:p-6">
                                <h3 className={`text-xl font-semibold text-${resource.color}-500 dark:text-${resource.color}-300 mb-2`}>{resource.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">
                                    {resource.description}
                                </p>
                                <a href={resource.learnMoreUrl} className={`inline-block bg-${resource.color}-500 hover:bg-${resource.color}-600 text-white px-4 py-2 rounded-full`}>Learn More</a>
                                <button onClick={() => openPopup(resource.url)} className={`inline-block bg-${resource.color}-500 hover:bg-${resource.color}-600 text-white px-4 py-2 rounded-full ml-2`}>Watch Video</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                        <button className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={closePopup}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe className="w-full h-full" src={videoUrl} title="YouTube Video" allowFullScreen />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Explain;
