import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Newsletter = () => {
  const [buttonText, setButtonText] = useState('Subscribe');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    emailjs.init('4UDRjSQKlKIX9WDLC');
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate fields
    if (!email || !name) {
      setError('Please fill in all fields.');
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setButtonText('Sending...');

    const serviceID = 'service_08m1wiw';
    const templateID = 'template_8b88igj';

    emailjs.sendForm(serviceID, templateID, event.currentTarget)
      .then(() => {
        setButtonText('Subscribe');
        alert('Subscribed successfully!');
        setEmail('');
        setName('');
      }, (err) => {
        setButtonText('Subscribe');
        alert('Error: ' + JSON.stringify(err));
      });
  };

  return (
    <div className="flex justify-center items-center p-4">
       <h3 className="text-center text-4xl md:text-5xl font-bold">
          Join The {" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Community
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-4">
          Be the first to know when we launch new features and updates.
        </p>
        <p className="text-sm text-center text-gray-300 mt-2 mb-4">
                **Don't worry, we won't spam you.**
              </p>
      <form id="form" onSubmit={handleSubmit} className="flex items-center space-x-4 p-4 border border-gray-300 rounded-lg shadow-md bg-white">
        <div className="flex-1">
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name" 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex-1">
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button 
          type="submit" 
          className="py-2 px-4 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {buttonText}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Newsletter;

{/*
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
          Join The {" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Community
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-4">
          Be the first to know when we launch new features and updates.
        </p>
        <p className="text-sm text-center text-gray-300 mt-2 mb-4">
                **Don't worry, we won't spam you.**
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
*/}
