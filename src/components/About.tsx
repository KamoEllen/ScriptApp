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
            <div className="pb-8 md:pb-0 pt-6"> {/* Added pt-4 for padding top */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-4">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                The Script App
              </h2>
              <p className="text-xl text-muted-foreground pt-6 mt-4 md:mt-4">
                We are a team of professionals who are passionate about making script supervision easier for everyone. Our app is designed to help you write scripts faster and more efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
