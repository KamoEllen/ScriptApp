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
        
      
    <a target="_blank" rel="noreferrer" href="https://example.com" className="flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-all hover:bg-blue-200">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-[#1d9bf0]">
    <circle cx="12" cy="12" r="10" fill="currentColor" />
  </svg>

  <p className="text-sm font-semibold text-[#1d9bf0]">Compatible with: IOS - IPAD - MacOS</p>
</a>

        
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          From importing scripts to exporting reports and handling edits to automating form filling.The Script App respects your dedication by offering efficient management tools, saving you valuable time.
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


