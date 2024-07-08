const PlayButton = () => (
  <button
    type="button"
    className="w-64 lg:w-auto absolute top-full left-1/2 flex items-center transform -translate-y-1/2 -translate-x-1/2 bg-black rounded-full font-medium group p-4 shadow-xl"
    aria-label="play video"
  >
    <svg className="w-6 h-6 fill-current text-white group-hover:text-green-600 flex-shrink-0" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
    <span className="ml-3 text-white">Watch the playlist (guide)</span>
  </button>
);
{/* <section className="bg-gradient-to-b from-black-50 to white shadow-inner"> */}
const VideoSection = () => (
  
    <section className="bg-gradient">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col max-w-4xl mx-auto pt-8 md:pt-12 lg:pt-16">
        <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold ">
            Learn how
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              to use{" "}
            </span>
            The Script App
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Watch the playlist and get started with The Script App today.
          </p>
        </div>
        <div className="w-full">
          <div className="relative shadow-2xl mx-6 lg:mx-0">
            <div className="iframe-container">
              <iframe
                width="100%"    //Adjusted width to 100% 
                height="500"    //Adjusted height to 500px, change as needed 
                src="https://www.youtube.com/embed/?listType=playlist&list=PL590L5WQmH8eYTXiTTjzo4YnK7vkCqZTI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <PlayButton />
          </div>
        </div>
        {/* Add space here */}
        <div className="h-30"></div>
      </div>
    </div>
  </section>
);

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="items-center">
        

        
        <VideoSection /> {/* Ensure VideoSection is rendered here */}
      </div>
    </section>
  );
};
