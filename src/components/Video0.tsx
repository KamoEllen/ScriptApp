import React, { useState } from 'react';


    return (
        <div className="video-wrapper">
            <div className="h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
                        Tutorial Resources
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {videoUrls.map((videoUrl, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                                <img
                                    src={`https://via.placeholder.com/640x360.png?text=Video+${index+1}`}
                                    alt={`Video ${index+1}`}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4 md:p-6">
                                    <h3 className="text-xl font-semibold text-indigo-500 dark:text-indigo-300 mb-2">
                                        Video {index + 1}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">
                                        Description of Video {index + 1}. Replace with actual content.
                                    </p>
                                    <button
                                        onClick={() => openModal(videoUrl)}
                                        className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modalUrl && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-full max-w-3xl mx-auto my-6">
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                            <div className="relative pb-9/16">
                                {/* Aspect ratio trick for responsive video */}
                                <iframe
                                    src={modalUrl}
                                    title="Video Player"
                                    className="absolute top-0 left-0 w-full h-full"
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            </div>
                            <button
                                onClick={closeModal}
                                className="absolute top-0 right-0 m-4 text-gray-600 dark:text-gray-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Video;
