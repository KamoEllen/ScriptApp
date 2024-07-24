export const Statistics = () => {
  interface StatsProps {
    icon: JSX.Element;
    quantity: string;
    description: string;
  }

  const stats: StatsProps[] = [
    
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      quantity: "info@thescriptapp.com",
      description: "Email",
    },
  ];
{/*
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      quantity: "012 345 56788",
      description: "Phone Number",
    },
    */}
  return (
    <section id="statistics" className="p-6 ">
      <div className="max-w-4xl mx-auto "> 
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {stats.map(({ icon, quantity, description }: StatsProps, index: number) => (
            <div key={index} className="p-4 bg-muted/50  rounded-lg border  transition duration-300 ease-in-out">
              {/* bg-gray border-black border-opacity-10 hover:border-opacity-20 */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">{icon}</div>
                <div className="flex flex-col">
                  <span className="font-bold">{description}</span>
                  <span>{quantity}</span>
                  {/* text-gray-800 & text-gray-600 */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

{/*
export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "2.7K+",
      description: "Users",
    },
    {
      quantity: "1.8K+",
      description: "Subscribers",
    },
    {
      quantity: "112",
      description: "Downloads",
    },
    {
      quantity: "Many More",
      description: "Features",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
*/}
