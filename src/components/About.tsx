import about from "../assets/About us page-cuate.svg";

const contactMethods = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        {/* SVG paths */}
      </svg>
    ),
    contact: "Mountain View, California, United States",
    title: "Our office",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        {/* SVG paths */}
      </svg>
    ),
    contact: "+1 (555) 000-000",
    title: "Phone",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        {/* SVG paths */}
      </svg>
    ),
    contact: "Support@example.com",
    title: "Email",
  },
];

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-5">
        <div className="px-8 flex flex-col-reverse md:flex-row gap-4 md:gap-4">
          <img
            src={about}
            alt=""
            className="w-[400px] md:w-[300px] h-auto object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-8 md:pb-0 pt-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-4">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Let us know how we can help
              </h2>
              <p className="text-xl text-muted-foreground pt-6 mt-4 md:mt-4">
                We’re here to help and answer any question you might have. We look forward to hearing from you.
              </p>
              <div>
                <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
                  {contactMethods.map((item, idx) => (
                    <li key={idx}>
                      <h4 className="text-gray-800 text-lg font-medium">{item.title}</h4>
                      <div className="mt-3 flex items-center gap-x-3">
                        <div className="flex-none text-gray-400">
                          {item.icon}
                        </div>
                        <p>{item.contact}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


{/*
import about from "../assets/About us page-cuate.svg";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-5">
        <div className="px-8 flex flex-col-reverse md:flex-row gap-4 md:gap-4">
          <img
            src={about}
            alt=""
            className="w-[400px] md:w-[300px] h-auto object-contain rounded-lg" // Adjusted image width
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-8 md:pb-0 pt-6"> 
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-4">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Let us know how we can help
              </h2>
              <p className="text-xl text-muted-foreground pt-6 mt-4 md:mt-4">
                We’re here to help and answer any question you might have.We look forward to hearing from you .
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
*/}
