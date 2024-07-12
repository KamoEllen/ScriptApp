import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-green-500 to-green-200 text-transparent bg-clip-text">
              Ready 
            </span>{" "}
            to  
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-green-500 to-green-200 text-transparent bg-clip-text">
              elevate
            </span>{" "}
            your script supervision  {" "}
            <span className="text-green-500 underline" >experience?</span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          From importing scripts to exporting reports, and handling edits to automating form filling.The Script App respects your dedication by offering efficient management tools, saving you valuable time.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>

          <a
            className={`w-full md:w-1/3 }`}
          >
            
            Download Now, Save Time Later
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};



{/*
import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-gray-400 to-green-500 text-transparent bg-clip-text">
              Ready 
            </span>{" "}
            to  
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-gray-400 via-green-500 to-gray-500 text-transparent bg-clip-text">
              elevate
            </span>{" "}
            your script supervision  {" "}
            <span className="text-green-500 underline" >experience?</span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          From importing scripts to exporting reports, and handling edits to automating form filling.The Script App respects your dedication by offering efficient management tools, saving you valuable time.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>

          <a
            className={`w-full md:w-1/3 }`}
          >
            
            Download Now, Save Time Later
          </a>
        </div>
      </div>

    
      <div className="z-10">
        <HeroCards />
      </div>

     
      <div className="shadow"></div>
    </section>
  );
};
  */}


