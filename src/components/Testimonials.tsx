{/*import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Import images statically
import image1 from "@/assets/albert-dera-ILip77SbmOE-unsplash.jpg";
import image2 from "@/assets/caique-nascimento-3ujVzg9i2EI-unsplash.jpg";
import image3 from "@/assets/danie-franco-f49XhYbpiA0-unsplash.jpg";
import image4 from "@/assets/mathias-huysmans-U4JDjYmjn1g-unsplash.jpg";
import image5 from "@/assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import image6 from "@/assets/jessica-felicio-_cvwXhGqG-o-unsplash.jpg";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

*/}

export const Testimonials = () => {
  return (
    <section class="max-w-5xl mx-auto w-full px-10 dark:bg-gray-800 dark:text-white">
  <div class="flex items-center justify-center flex-col gap-y-2 py-5">
   <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why The  
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Community{" "}
        </span>
        Loves The Script App
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Here is what other script supervisors have to say about their experience
      </p>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
    <div
      class="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-2 flex flex-col gap-y-10 justify-between">
      <div class="flex flex-col gap-y-3.5">
        <p class="font-bold text-xl">Brilliant house to rent</p>
        <p class="font-medium text-slate-700/90 dark:text-gray-300">All eFounders teams have moved to Cycle for all
          things product management and it is truly a game-changer.</p>
      </div>
      <div class="flex flex-col">
        <img src="https://randomuser.me/api/portraits/women/54.jpg" alt="Jane Cooper" class="h-10 w-10">
        <p class="pt-2 text-sm font-semibold">Jane Cooper</p>
        <p class="text-sm font-medium text-slate-700/70 dark:text-gray-400">CEO at ABC Corporation</p>
      </div>
    </div>
    <div
      class="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-3 flex flex-col gap-y-10 justify-between">
      <div class="flex flex-col gap-y-3.5">
        <p class="font-bold text-xl">Efficient customer support</p>
        <p class="font-medium text-slate-700/90 dark:text-gray-300">The customer support team at our service is
          incredibly responsive and helpful. They went above and beyond to assist me with my issue.</p>
      </div>
      <div class="flex flex-col">
        <img src="https://randomuser.me/api/portraits/women/30.jpg" alt="John Doe" class="h-10 w-10">
        <p class="pt-2 text-sm font-semibold">Emily Smith</p>
        <p class="text-sm font-medium text-slate-700/70 dark:text-gray-400">Marketing Manager at ABC Company</p>
      </div>
    </div>
    <div
      class="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-3 flex flex-col gap-y-10 justify-between">
      <div class="flex flex-col gap-y-3.5">
        <p class="font-bold text-xl">Seamless integration process</p>
        <p class="font-medium text-slate-700/90 dark:text-gray-300">Integrating our systems with our service was smooth
          and hassle-free. The support team guided us through every step of the process.</p>
      </div>
      <div class="flex flex-col">
        <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="Jane Doe" class="h-10 w-10">
        <p class="pt-2 text-sm font-semibold">Sarah Brown</p>
        <p class="text-sm font-medium text-slate-700/70 dark:text-gray-400">CTO at XYZ Corporation</p>
      </div>
    </div>
    <div
      class="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-2 flex flex-col gap-y-10 justify-between">
      <div class="flex flex-col gap-y-3.5">
        <p class="font-bold text-xl">Reliable service uptime</p>
        <p class="font-medium text-slate-700/90 dark:text-gray-300">Our service has consistently maintained high uptime,
          ensuring that our operations run smoothly without any disruptions.</p>
      </div>
      <div class="flex flex-col">
        <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="Ash Doe" class="h-10 w-10">
        <p class="pt-2 text-sm font-semibold">James White</p>
        <p class="text-sm font-medium text-slate-700/70 dark:text-gray-400">COO at XYZ Corporation</p>
      </div>
    </div>
  </div>
</section>
    {/*
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why The  
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Community{" "}
        </span>
        Loves The Script App
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Here is what other script supervisors have to say about their experience
      </p>
    </section>
    */}
  );
};
{/*
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Import images statically
import image1 from "@/assets/albert-dera-ILip77SbmOE-unsplash.jpg";
import image2 from "@/assets/caique-nascimento-3ujVzg9i2EI-unsplash.jpg";
import image3 from "@/assets/danie-franco-f49XhYbpiA0-unsplash.jpg";
import image4 from "@/assets/mathias-huysmans-U4JDjYmjn1g-unsplash.jpg";
import image5 from "@/assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import image6 from "@/assets/jessica-felicio-_cvwXhGqG-o-unsplash.jpg";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

// Define testimonials array using imported image variables
const testimonials: TestimonialProps[] = [
  {
    image: image1,
    name: "John Lee",
    userName: "script supervisor",
    comment: "The Script App has made my job so much easier! I can't imagine going back to the old way of doing things.",
  },
  {
    image: image2,
    name: "Ellie Williams",
    userName: "script supervisor",
    comment:
      "I've been using The Script App for a few months now and I love it! It's so easy to use and has all the features I need to keep my scripts organized and up-to-date.",
  },
  {
    image: image3,
    name: "Deon Anderson",
    userName: "script supervisor",
    comment:
      "Don't know how I managed without The Script App before. It's a game changer for script supervisors! Highly recommend it to anyone in the industry.",
  },
  {
    image: image4,
    name: "Jia Mason",
    userName: "script supervisor",
    comment:
      "One of the best tools I've used for script supervision!",
  },
  {
    image: image5,
    name: "Emory King",
    userName: "script supervisor",
    comment:
      "Perfect for script supervisors who want to streamline their workflow and save time on administrative tasks. Highly recommend it!",
  },
  {
    image: image6,
    name: "Lesego Mokone",
    userName: "script supervisor",
    comment:
      " I love being able to covert my scripts to PDF and share them with my team in seconds. The Script App is a must-have for script supervisors!",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why The  
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Community{" "}
        </span>
        Loves The Script App
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Here is what other script supervisors have to say about their experience
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(({ image, name, userName, comment }, index) => (
          <Card key={index} className="max-w-md md:break-inside-avoid overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar>
                <div className="aspect-w-1 aspect-h-1">
                  <AvatarImage src={image} alt="" className="object-cover rounded-full w-full h-full" />
                </div>
                <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <CardTitle className="text-lg">{name}</CardTitle>
                <CardDescription>{userName}</CardDescription>
              </div>
            </CardHeader>

            <CardContent>{comment}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
*/}
