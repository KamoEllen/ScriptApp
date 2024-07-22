import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        {/* Button */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://example.com"
          className="flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-all hover:bg-blue-200"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-current text-green-600"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path>
          </svg>
          <p className="text-sm font-semibold text-[#0a5526]">Compatible with: IOS & MacOS</p>
        </a>
        {/* Button ends */}
        
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Ready{" "}
            <span>
              to
            </span>{" "}
          </h1>{" "}
          <h2 className="inline">
            elevate{" "}
            <span>
              your script supervision{" "}
            </span>{" "}
            <span className="inline text-green-500 bg-clip-text">
              experience?
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          From importing scripts to exporting reports and handling edits to automating form filling. The Script App respects your dedication by offering efficient management tools, saving you valuable time.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>

          <a className="w-full md:w-1/3" href="#">
            Download Now, Save Time Later
          </a>
          </div>
        <div className="space-y-4 md:space-y-0 md:space-x-4">

          {/* Ratings */}
          <div className="flex space-x-4 items-center text-white">
            <div className="flex items-center space-x-2">
              <img
                loading="lazy"
                width="40"
                height="40"
                decoding="async"
                className="h-6 w-6 max-w-none rounded-full ring-2 ring-primary"
                src="https://randomuser.me/api/portraits/men/29.jpg"
                alt=""
              />
              <img
                loading="lazy"
                width="40"
                height="40"
                decoding="async"
                className="h-6 w-6 max-w-none rounded-full ring-2 ring-primary"
                src="https://randomuser.me/api/portraits/men/90.jpg"
                alt=""
              />
              <img
                loading="lazy"
                width="40"
                height="40"
                decoding="async"
                className="h-6 w-6 max-w-none rounded-full ring-2 ring-primary"
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt=""
              />
              <img
                loading="lazy"
                width="40"
                height="40"
                decoding="async"
                className="h-6 w-6 max-w-none rounded-full ring-2 ring-primary"
                src="https://randomuser.me/api/portraits/men/5.jpg"
                alt=""
              />
              <span className="flex-shrink-0 text-xs font-medium leading-5 text-primary">+15</span>
              
            </div>

            <div className="h-4 border-l border-gray-700"></div>

            <div className="flex items-center">
              <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
              </svg>
              <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
              </svg>
              <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
              </svg>
              <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
              </svg>
              <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
              </svg>
            </div>
          </div>
          {/* Ratings end */}
        </div>
      </div>

      {/* Hero cards section */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
