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
      "Can I skip the trial and subscribe directly?",
    answer:
      "Yes, if you prefer, you can skip the 24-hour trial and subscribe directly by paying £20 per month. This allows you to start using Script App immediately without waiting for the trial period to end.",
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
