{/* import one from '../assets/Design community-pana.svg'; */}
import one from '../assets/Design-pana-animate.svg';
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
{/*
<a href="https://storyset.com/work">Work illustrations by Storyset</a>
*/}
//import one from '../assets/Recording-a-movie-cuate.svg'; Adjust the path to your image
