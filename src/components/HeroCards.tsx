import one from '../assets/Recording-a-movie-cuate.svg'; // Adjust the path to your image

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative">
      <img
        src={one}
        alt="About feature"
        className="w-full lg:w-[600px] h-auto mx-auto" // Adjust the width as needed
        style={{ maxWidth: '100%', height: 'auto' }} // Ensure responsiveness
      />
    </div>
  );
};
