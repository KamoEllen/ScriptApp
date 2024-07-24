import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What features does The Script App offer?",
    answer: "The Script App offers a variety of features designed to simplify the life of script supervisors. These include importing scripts, adding tramlines, auto-filling aspects of the continuity reports and exporting/sending documents via email. It's all interconnected to eliminate manual retyping and help streamline your workflow.",
    value: "item-1",
  },
  {
    question: "How does the 24-hour free trial work?",
    answer:
      "You can enjoy a 24-hour free trial of The Script App to explore all its features. During this period, you can import scripts, edit them and use all functionalities without any charge. This is perfect for dailies. If you decide to continue using The Script App after the free trial, you can subscribe for only £20 per month and cancel within the first 30 days.",
    value: "item-2",
  },
  {
    question:
      "How did The Script App come to be?",
    answer:
      "With extensive experience in script supervising and Film & TV industry, we recognized the constant struggle of a work/life balance. This led us to create The Script App, designed to elevate workflow and save time on administrative tasks.",
    value: "item-3",
  },
  {
    question: "How do I pay for The Script App?",
    answer: "Payment for Script App is handled through a secure online payment system. You can subscribe using a credit card or other accepted payment methods. Payments of £20 are processed monthly on the same date as your initial purchase date each month.",
    value: "item-4",
  },
  {
    question:
      "Can I suggest new features for The Script App?",
    answer:
      "Absolutely! We are always looking for new ways to improve The Script App and would love to hear your feedback. If you have ideas for new features or improvements, please get in touch. We're here to listen",
    value: "item-5",
  },
  
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

     
    </section>
  );
};
{/* we recognized the challenges of script management and the need for accuracy and efficiency.*/}
{/*

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What features does Script App offer?",
    answer: "Script App offers a variety of features designed to simplify the life of script supervisors. These include importing scripts, editing them, creating pages, auto-filling forms, and exporting or sending scripts via email. It's all interconnected to eliminate the need for manual retyping and streamline your workflow.",
    value: "item-1",
  },
  {
    question: "How does the 24-hour free trial work?",
    answer:
      "You can enjoy a 24-hour free trial of Script App to explore all its features. During this period, you can import scripts, edit them, and use all functionalities without any charge. If you decide to continue using Script App after the trial, you can subscribe for only £20 per month.",
    value: "item-2",
  },
 {
    question:
      "How did The Script App come to be?",
    answer:
      "With extensive experience in the production industry, we recognized the challenges of script management and the need for accuracy and efficiency. This led us to create The Script App, designed to elevate workflow and save time on administrative tasks.",
    value: "item-3",
  },
  {
    question: "How do I pay for Script App?",
    answer: "Payment for Script App is handled through a secure online payment system. You can subscribe using a credit card or other accepted payment methods. Payments are processed monthly at the rate of £20 per month.",
    value: "item-4",
  },
  {
    question:
      "Can I suggest new features for Script App?",
    answer:
      "Absolutely! We value your feedback and suggestions for improving Script App. If you have ideas for new features or improvements, please reach out to our support team. We are committed to improving Script App based on user input.",
    value: "item-5",
  },
  
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
 */}
{/*
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What features does The Script App offer?",
    answer: "The Script App offers a variety of features designed to simplify the life of script supervisors. These include importing scripts, editing them, creating pages, auto-filling forms, and exporting or sending scripts via email. It's all interconnected to eliminate the need for manual retyping and streamline your workflow.",
    value: "item-1",
  },
  {
    question: "How does the 24-hour free trial work?",
    answer:
      "You can enjoy a 24-hour free trial of The Script App to explore all its features. During this period, you can import scripts, edit them, and use all functionalities without any charge. If you decide to continue using Script App after the trial, you can subscribe for only £20 per month.",
    value: "item-2",
  },
  {
    question:
      "How did The Script App come to be?",
    answer:
      "With extensive experience in the production industry, we recognized the challenges of script management and the need for accuracy and efficiency. This led us to create The Script App, designed to elevate workflow and save time on administrative tasks.",
    value: "item-3",
  },
  {
    question: "How do I pay for The Script App?",
    answer: "Payment for Script App is handled through a secure online payment system. You can subscribe using a credit card or other accepted payment methods. Payments are processed monthly at the rate of £20 per month.",
    value: "item-4",
  },
  {
    question:
      "Can I suggest new features for The Script App?",
    answer:
      "Absolutely! We value your feedback and suggestions for improving The Script App. If you have ideas for new features or improvements, please reach out to our support team. We are committed to improving The Script App based on user input.",
    value: "item-5",
  },
  
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

     
    </section>
  );
};
*/}
{/*

   <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
  */}
