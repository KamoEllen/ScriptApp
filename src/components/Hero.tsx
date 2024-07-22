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
        
      
        <a target="_blank" rel="noreferrer" href="https://example.com"
    className="mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-all hover:bg-blue-200">
  
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204" class="h-5 w-5 text-[#1d9bf0]">
      <path fill="currentColor"
        d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.20 26.16z">
      </path>
    </svg>


    <p className="text-sm font-semibold text-[#1d9bf0]">Compatible with : IOS - IPAD - MacOS</p>
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


