import React from 'react';

const Tutor = () => {
    return (
        <div className="h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
                    Featured Resources
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
                            alt="Headless UI" className="w-full h-64 object-cover" />
                        <div className="p-4 md:p-6">
                            <h3 className="text-xl font-semibold text-indigo-500 dark:text-indigo-300 mb-2">Headless UI</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">
                                Completely unstyled, fully accessible UI
                                components,
                                designed to integrate beautifully with Tailwind CSS.
                            </p>
                            <a href="#"
                                className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full">Learn
                                More</a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img src="https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg"
                            alt="Heroicons" className="w-full h-64 object-cover" />
                        <div className="p-4 md:p-6">
                            <h3 className="text-xl font-semibold text-purple-500 dark:text-purple-300 mb-2">Heroicons</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">A set of 450+ free MIT-licensed SVG icons.
                                Available
                                as basic SVG icons and via first-party React and Vue libraries.</p>
                            <a href="#"
                                className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full">Learn
                                More</a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img src="https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg"
                            alt="Hero Patterns" className="w-full h-64 object-cover" />
                        <div className="p-4 md:p-6">
                            <h3 className="text-xl font-semibold text-cyan-500 dark:text-cyan-300 mb-2">Hero Patterns</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">A collection of over 100 free MIT-licensed
                                high-quality
                                SVG patterns for you to use in your web projects.</p>
                            <a href="#"
                                className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full">Learn
                                More</a>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/640x360"
                            alt="Placeholder" className="w-full h-64 object-cover" />
                        <div className="p-4 md:p-6">
                            <h3 className="text-xl font-semibold text-green-500 dark:text-green-300 mb-2">Placeholder Card</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">This is a placeholder card. Replace with your content.</p>
                            <a href="#"
                                className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full">Learn
                                More</a>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/640x360"
                            alt="Placeholder" className="w-full h-64 object-cover" />
                        <div className="p-4 md:p-6">
                            <h3 className="text-xl font-semibold text-yellow-500 dark:text-yellow-300 mb-2">Placeholder Card</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">This is a placeholder card. Replace with your content.</p>
                            <a href="#"
                                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full">Learn
                                More</a>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/640x360"
                            alt="Placeholder" className="w-full h-64 object-cover" />
                        <div className="p-4 md:p-6">
                            <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-300 mb-2">Placeholder Card</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">This is a placeholder card. Replace with your content.</p>
                            <a href="#"
                                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">Learn
                                More</a>
                        </div>
                    </div>

                    {/* Card 7 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/640x360"
                            alt="Placeholder" className="w-full h-64 object-cover" />
                        <div className="p-4 md:p-6">
                            <h3 className="text-xl font-semibold text-red-500 dark:text-red-300 mb-2">Placeholder Card</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">This is a placeholder card. Replace with your content.</p>
                            <a href="#"
                                className="inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full">Learn
                                More</a>
                        </div>
                    </div>

                    {/* Card 8 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/640x360"
                            alt="Placeholder" className="w-full h-64 object-cover" />
                        <div className="p-4 md:p-6">
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-300 mb-2">Placeholder Card</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">This is a placeholder card. Replace with your content.</p>
                            <a href="#"
                                className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full">Learn
                                More</a>
                        </div>
                    </div>

                    {/* Card 9 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/640x360"
                            alt="Placeholder" className="w-full h-64 object-cover" />
                        <div className="p-4 md:p-6">
                            <h3 className="text-xl font-semibold text-orange-500 dark:text-orange-300 mb-2">Placeholder Card</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">This is a placeholder card. Replace with your content.</p>
                            <a href="#"
                                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full">Learn
                                More</a>
                        </div>
                    </div>

                    {/* Card 10 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/640x360"
                            alt="Placeholder" className="w-full h-64 object-cover" />
                        <div className="p-4 md:p-6">
                            <h3 className="text-xl font-semibold text-indigo-500 dark:text-indigo-300 mb-2">Placeholder Card</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">This is a placeholder card. Replace with your content.</p>
                            <a href="#"
                                className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full">Learn
                                More</a>
                        </div>
                    </div>

                    {/* Card 11 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/640x360"
                            alt="Placeholder" className="w-full h-64 object-cover" />
                        <div className="p-4 md:p-6">
                            <h3 className="text-xl font-semibold text-indigo-500 dark:text-indigo-300 mb-2">Placeholder Card</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">This is a placeholder card. Replace with your content.</p>
                            <a href="#"
                                className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full">Learn
                                More</a>
                        </div>
                    </div>

                    {/* Card 12 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/640x360"
                            alt="Placeholder" className="w-full h-64 object-cover" />
                        <div className="p-4 md:p-6">
                            <h3 className="text-xl font-semibold text-indigo-500 dark:text-indigo-300 mb-2">Placeholder Card</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">This is a placeholder card. Replace with your content.</p>
                            <a href="#"
                                className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full">Learn
                                More</a>
                        </div>
                    </div>

                 
                </div>
            </div>
        </div>
    );
}

export default Tutor;
