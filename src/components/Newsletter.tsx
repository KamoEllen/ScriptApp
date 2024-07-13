import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      console.log("Email is valid, proceed to subscribe:", email);
      // Here you can proceed with your subscription logic, e.g., sending the email
      // Reset the form after submission
      setEmail("");
      setMessage("Email successfully sent!");
      setTimeout(() => {
        setMessage("");
      }, 3000); // Clear the message after 3 seconds
    } else {
      console.log("Invalid email. Please enter a valid email address.");
      // You can display an error message to the user if needed
    }
  };

  const validateEmail = (email: string) => {
    // A simple email validation using regex
    const re =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Join Our {" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Community
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Be the first to know when we launch new features and updates.
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            type="email"
            placeholder="enter your email"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="email"
            value={email}
            onChange={handleChange}
            required
          />
          <Button type="submit">Subscribe</Button>
        </form>

        {message && (
          <p className="text-green-500 text-center mt-4">{message}</p>
        )}
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
