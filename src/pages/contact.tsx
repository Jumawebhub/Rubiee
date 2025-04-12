import './contact.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // Define placeholders for EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_ncncfar'; // Replace with your actual service ID
  const EMAILJS_TEMPLATE_ID = 'template_wk3i3if'; // Replace with your actual template ID
  const EMAILJS_PUBLIC_KEY = 'mSKdWUtE8R4IuWjZv'; // Replace with your actual public key

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitStatus('success');
          form.current?.reset();
        },
        (error) => {
          console.error('Error:', error);
          setSubmitStatus('error');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">There are various ways of reaching me</p>

      {submitStatus === 'success' && (
        <div className="alert alert-success" role="alert">
          Message sent successfully!
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="alert alert-error" role="alert">
          Something went wrong. Please try again.
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className="contact-form" noValidate>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            name="user_name" 
            id="name" 
            placeholder="Enter your name" 
            required 
            aria-required="true"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            name="user_email" 
            id="email" 
            placeholder="Enter your email" 
            required 
            aria-required="true"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input 
            type="tel" 
            name="user_phone" 
            id="phone" 
            placeholder="Enter your phone number" 
            pattern="[0-9]{10,15}" 
            title="Please enter a valid phone number (10-15 digits)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="service">What do you need?</label>
          <select id="service" name="service" required aria-required="true">
            <option value="">Select a service</option>
            <option value="Banner">Banner</option>
            <option value="Flyer">Flyer</option>
            <option value="Poster">Poster</option>
            <option value="Business Card">Business Card</option>
            <option value="Social Media Post">Social Media Post</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="submit-btn" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};