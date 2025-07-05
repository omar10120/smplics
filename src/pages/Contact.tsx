// src/pages/Contact.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Check, Calendar } from 'react-feather';
import { useTheme } from '../constants/ThemeContext';

const ContactPage = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    datetime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState('');

  // Theme-aware colors
  const bgColor = isDark ? 'bg-dark' : 'bg-light';
  const textColor = isDark ? 'text-white' : 'text-dark';
  const mutedTextColor = isDark ? 'text-white/80' : 'text-dark/70';
  const cardBg = isDark ? 'bg-dark/80' : 'bg-light/80';
  const cardBorder = isDark ? 'border-white/10' : 'border-dark/10';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateTimeSelect = (dateTime: string) => {
    setSelectedDateTime(dateTime);
    setFormData(prev => ({ ...prev, datetime: dateTime }));
    setShowCalendar(false);
  };

  const sendEmail = async (data: typeof formData) => {
    // Prepare email content
    const emailContent = `
      New Contact Form Submission:
      
      Name: ${data.name}
      Email: ${data.email}
      Subject: ${data.subject}
      Message: ${data.message}
      Meeting Time: ${data.datetime || 'Not specified'}
      
      Sent from Smplics website
    `;

    try {
      // Use EmailJS or your email sending service
      // This is a placeholder - you'll need to implement actual email sending
      console.log('Sending email to info@smplics.com', emailContent);
      
      // For demonstration, we'll simulate the email sending
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send form data to your backend/email service
      const emailSent = await sendEmail(formData);
      
      if (emailSent) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '', datetime: '' });
        setSelectedDateTime('');
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
      
      // Reset success message after 5 seconds
      if (isSubmitted) {
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: 'Email Us',
      details: ['info@smplics.com', 'support@Smplics.com'],
      action: 'Send a message'
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      title: 'Call Us',
      details: ['+(971) 58584-0433', '+(971) 58584-0433'],
      action: 'Call now'
    },
    {
      icon: <Clock className="text-primary" size={24} />,
      title: 'Working Hours',
      details: ['Sunday-thursday: 10am - 5pm', 'Friday: Closed'],
      action: 'Book appointment'
    }
  ];

  const faqs = [
    {
      question: 'How quickly do you respond to inquiries?',
      answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes, we offer a free 30-minute consultation for new clients to discuss your project needs and how we can help.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We work with clients across various industries including tech, healthcare, finance, e-commerce, and education.'
    },
    {
      question: 'Can I visit your office for a meeting?',
      answer: 'Absolutely! We welcome visitors by appointment. Please contact us to schedule a meeting at our office.'
    }
  ];

  return (
    <div className={`${bgColor} ${textColor}`} id='contact-section'>
      {/* Hero Section */}
      <section className={`relative py-24 overflow-hidden ${bgColor}`}>
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${
          isDark ? 'from-primary/10' : 'from-primary/5'
        } to-transparent z-0`} />
        <div className={`absolute top-1/4 left-1/4 w-80 h-80 rounded-full ${
          isDark ? 'bg-accent/10' : 'bg-accent/5'
        } blur-3xl z-0`} />
        <div className={`absolute bottom-20 right-20 w-60 h-60 rounded-full ${
          isDark ? 'bg-primary/10' : 'bg-primary/5'
        } blur-3xl z-0`} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-primary to-accent text-dark font-bold rounded-full px-6 py-2">
                GET IN TOUCH
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Let's <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect</span> and Create Something Amazing
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-xl ${mutedTextColor} max-w-2xl mx-auto`}
            >
              We're here to answer your questions and discuss how we can help your business thrive in the digital world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${cardBg} backdrop-blur-sm border ${cardBorder} rounded-xl p-6 hover:border-primary/30 transition-all duration-300`}
              >
                <div className="mb-4">
                  <div className={`${
                    isDark ? 'bg-primary/10' : 'bg-primary/5'
                  } p-3 rounded-full inline-block`}>
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <ul className="space-y-2 mb-4">
                  {item.details.map((detail, i) => (
                    <li key={i} className={mutedTextColor}>{detail}</li>
                  ))}
                </ul>
                <button className="text-primary font-medium hover:opacity-80 transition-opacity">
                  {item.action} →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 relative">
        <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b ${
          isDark ? 'from-dark' : 'from-light'
        } to-transparent z-0`} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`${cardBg} backdrop-blur-sm border ${cardBorder} rounded-2xl p-8`}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3">Send Us a Message</h2>
                <p className={mutedTextColor}>Have questions or ready to start your project? Fill out the form below and our team will get back to you promptly.</p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${
                    isDark ? 'bg-primary/10' : 'bg-primary/5'
                  } mb-6`}>
                    <Check className="text-primary" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className={`${mutedTextColor} mb-6`}>
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary font-medium hover:opacity-80"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium mb-2 ${textColor}`}>Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full ${
                          isDark ? 'bg-dark/50' : 'bg-light/50'
                        } border ${cardBorder} rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all ${textColor}`}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium mb-2 ${textColor}`}>Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full ${
                          isDark ? 'bg-dark/50' : 'bg-light/50'
                        } border ${cardBorder} rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all ${textColor}`}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${textColor}`}>Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full ${
                          isDark ? 'bg-dark/50' : 'bg-light/50'
                        } border ${cardBorder} rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all ${textColor}`}
                      required
                    />
                  </div>
                  
                  {/* Google Calendar Booking */}
                  <div className="mb-6">
                    <label className={`block text-sm font-medium mb-2 ${textColor}`}>
                      Preferred Meeting Time
                    </label>
                    
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={selectedDateTime || "Select date and time"}
                        readOnly
                        className={`w-full ${
                          isDark ? 'bg-dark/50' : 'bg-light/50'
                        } border ${cardBorder} rounded-lg px-4 py-3 cursor-pointer ${textColor}`}
                        onClick={() => setShowCalendar(!showCalendar)}
                      />
                      
                      <button
                        type="button"
                        onClick={() => setShowCalendar(!showCalendar)}
                        className={`flex items-center gap-2 ${
                          isDark ? 'bg-dark/70' : 'bg-light/70'
                        } border ${cardBorder} px-4 rounded-lg transition-all hover:border-primary`}
                      >
                        <Calendar size={18} />
                        {selectedDateTime ? "Change" : "Select"}
                      </button>
                    </div>
                    
                    {showCalendar && (
                      <div className="mt-4">
                        <div className="text-center mb-3 text-sm text-primary">
                          Choose from available slots
                        </div>
                        <div className="border rounded-lg overflow-hidden">
                          <iframe
                            src="https://calendar.app.google/Roea7sNHRwXBHSV28"
                            width="100%"
                            height="400"
                            frameBorder="0"
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <div className="mt-3 text-sm text-center text-gray-500">
                          Powered by Google Calendar
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${textColor}`}>Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full ${
                          isDark ? 'bg-dark/50' : 'bg-light/50'
                        } border ${cardBorder} rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all ${textColor}`}
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-dark font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl ${
                      isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
            
            {/* Map & Location */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className={`rounded-2xl overflow-hidden h-full border ${cardBorder}`}>
                <div className={`${
                  isDark ? 'bg-dark-lighter' : 'bg-light-darker'
                } h-96 flex items-center justify-center`}>
                  <div className="text-center">
                    <div className={`${
                      isDark ? 'bg-white/10' : 'bg-dark/10'
                    } rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Our Headquarters</h3>
                    <p className={mutedTextColor}>123 Innovation Street, Tech City</p>
                    <div className={`${
                      isDark ? 'bg-white/10' : 'bg-dark/10'
                    } rounded-xl w-full h-64 mt-4 flex items-center justify-center`}>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                        <MapPin className="text-dark" size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`mt-8 ${cardBg} backdrop-blur-sm border ${cardBorder} rounded-2xl p-6`}>
                <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  {[
                    'Industry-leading expertise in digital transformation',
                    'Dedicated support team available 24/7',
                    'Proven track record with Fortune 500 companies',
                    'Custom solutions tailored to your business needs',
                    'Transparent pricing with no hidden fees',
                    'Flexible meeting scheduling'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`w-5 h-5 rounded-full ${
                        isDark ? 'bg-primary/10' : 'bg-primary/5'
                      } flex items-center justify-center mt-1 mr-3`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      <span className={textColor}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py- relative">
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${
          isDark ? 'from-dark/20' : 'from-light/20'
        } to-transparent z-0`} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block mb-4"
              >
                <div className="bg-gradient-to-r from-primary to-accent text-dark font-bold rounded-full px-6 py-2">
                  FREQUENTLY ASKED QUESTIONS
                </div>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Common Questions About Our Services
              </motion.h2>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${cardBg} backdrop-blur-sm border ${cardBorder} rounded-xl p-6`}
                >
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className={mutedTextColor}>{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;