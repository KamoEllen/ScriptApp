import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Basic",
    popular: 1,
    price: 20,
    description:
      "Get access to all features and tools within the first 24h.",
    buttonText: "Start Free Trial",
    benefitList: [
      "Import scripts with ease",
      "Create forms",
      "Export or send via email",
      "Secure storage integration",
      "Optimized for iOS",
      "Efficient script editing",
      "Auto-fill repetitive fields",
      "Real-time collaboration",
      "24/7 customer support",
      "Track changes",
    ],
  },
];

export const Pricing = () => {
  const pricing = pricingList[0]; // Since there's only one pricing option

  return (
    <section id="pricing" className="container py-12 sm:py-24 lg:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Enjoy 24h free trial with us and only pay 20 pounds a month after that. Cancel anytime within the first 30 days.
      </h3>
      <div className="flex justify-center">
        <div className="w-full lg:w-3/4 xl:w-2/3">
          <Card
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle>
                <span className="inline bg-gradient-to-r from-green-400 via-green-500 to-blue-500 text-transparent bg-clip-text">
                  {pricing.title}
                </span>{" "}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>
            <hr className="my-2 lg:my-4 border-t-2 border-gray-200" />
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Features Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Features</h3>
                  <ul className="space-y-2">
                    {pricing.benefitList.map((benefit: string) => (
                      <li key={benefit} className="flex items-center">
                        <Check className="text-green-500 mr-2" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Pricing Details Section */}
                <div className="flex flex-col items-center justify-center lg:items-end lg:justify-start lg:mt-12">
                  <div className="border rounded-lg mt-6 p-8 lg:p-16 border-gray-300 text-center lg:text-left">
                    <div className="text-3xl md:text-4xl mb-2 font-bold">£{pricing.price} <span className="text-sm text-muted-foreground">/month</span></div>
                    <Button>{pricing.buttonText}</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
