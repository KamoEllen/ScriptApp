import about from "../assets/connected-world-amico.svg";
import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
   
    <section id="about" className="container my-6 sm:my-8">
      <div className="bg-white border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-6 md:gap-12">
          <img
            src={about}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Contact Us
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                We are here to help and answer any question you might have. We look forward to hearing from you.
              </p>
              <p className="text-sm text-gray-300 mt-2">
                **We won't spam you, we promise!**
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Statistics />
            </div>
          </div>
        </div>
      </div>
    </section>
     </div>
     <hr className="w-11/12 mx-auto" />
  );
};
