import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCheck } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <CheckCheck />,
    title: "Breakdown impot scripts",
    description:
      "Import, edit, and manage scripts merge amendments with The Script App. Spend more time supervising, less time on administrative tasks.",
 },
  {
    icon: <CheckCheck />,
    title: "Automate copy and paste documents",
    description:
      "Automate repetitive tasks like form filling and formatting, allowing you to focus on creative aspects of script supervision.",
  },
  {
    icon: <CheckCheck />,
    title: "Storage Integration",
    description:
      "Securely store and access folders, photos and reports from anywhere.",
  },
  {
    icon: <CheckCheck />,
    title: "Real-Time Collaboration",
    description:
      "Export your sides and reports and share it with your team , ensuring everyone is on the same page throughout the production process.",
  },
  {
    icon: <CheckCheck />,
    title: "Intuitive User Experience",
    description:
      "Enjoy a user-friendly customisable interface designed to enhance your workflow and elevate the script supervision experience.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Here are some of the key features that make The Script App the best choice for script supervision.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
