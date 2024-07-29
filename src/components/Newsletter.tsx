import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Newsletter: React.FC = () => {
  const [buttonText, setButtonText] = useState('Subscribe');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    emailjs.init('4UDRjSQKlKIX9WDLC'); // Replace 'YOUR_USER_ID' with your actual user ID
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

    const serviceID = 'service_08m1wiw'; // Replace with your actual service ID
    const templateID = 'template_8b88igj'; // Replace with your actual template ID

    emailjs.sendForm(serviceID, templateID, event.currentTarget)
      .then(() => {
        setButtonText('Subscribe');
        alert('Subscribed successfully!');
        setEmail('');
        setName('');
      })
      .catch((err) => {
        setButtonText('Subscribe');
        alert('Error: ' + JSON.stringify(err));
      });
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <h3 className="text-center text-4xl md:text-5xl font-bold">
        Join The{' '}
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
        id="form" 
        onSubmit={handleSubmit} 
        className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-4 border border-gray-300 rounded-lg shadow-md bg-white"
      >
        <div className="flex-1">
          <input 
            type="text" 
            name="to_act_name" 
            id="to_act_name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name" 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex-1">
          <input 
            type="email" 
            name="to_name" 
            id="to_name" 
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
