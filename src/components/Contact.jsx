import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setError('');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'akshad.dambhare@example.com',
      link: 'mailto:akshad.dambhare@example.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/akshadDambhare',
      link: 'https://linkedin.com/in/akshadDambhare'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/akshadDambhare',
      link: 'https://github.com/akshadDambhare'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 XXXXXXXXXX',
      link: 'tel:+91XXXXXXXXXX'
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="section-subtitle">Let's connect and discuss opportunities</p>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-container">
            <h3>Send me a message</h3>
            
            {submitted ? (
              <div className="success-message">
                <h4>✓ Thank you for your message!</h4>
                <p>I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {error && <div className="error-message">{error}</div>}
                
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Methods */}
          <div className="contact-methods">
            <h3>Connect With Me</h3>
            <div className="methods-grid">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <span className="method-icon">{method.icon}</span>
                  <div className="method-info">
                    <h4>{method.title}</h4>
                    <p>{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
