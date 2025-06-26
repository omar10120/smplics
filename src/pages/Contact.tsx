// src/pages/Contact.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Check } from 'react-feather';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: 'Email Us',
      details: ['contact@Smplics.com', 'support@Smplics.com'],
      action: 'Send a message'
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      action: 'Call now'
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: 'Visit Us',
      details: ['123 Innovation Street', 'Tech City, TC 10001'],
      action: 'Get directions'
    },
    {
      icon: <Clock className="text-primary" size={24} />,
      title: 'Working Hours',
      details: ['Monday-Friday: 9am - 6pm', 'Saturday: 10am - 4pm', 'Sunday: Closed'],
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
    <div className="bg-dark text-white" id='contact-section'>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-transparent z-0" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl z-0" />
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl z-0" />
        
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
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              We're here to answer your questions and discuss how we can help your business thrive in the digital world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark/80 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="bg-primary/10 p-3 rounded-full inline-block">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <ul className="space-y-2 mb-4">
                  {item.details.map((detail, i) => (
                    <li key={i} className="text-white/80">{detail}</li>
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
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-dark to-dark/70 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-dark/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3">Send Us a Message</h2>
                <p className="text-white/80">Have questions or ready to start your project? Fill out the form below and our team will get back to you promptly.</p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                    <Check className="text-primary" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-white/80 mb-6">
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
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
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
              <div className="rounded-2xl overflow-hidden h-full border border-white/10">
                <div className="bg-gray-800 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Our Headquarters</h3>
                    <p className="text-white/80 mb-4">123 Innovation Street, Tech City</p>
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-dark/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  {[
                    'Industry-leading expertise in digital transformation',
                    'Dedicated support team available 24/7',
                    'Proven track record with Fortune 500 companies',
                    'Custom solutions tailored to your business needs',
                    'Transparent pricing with no hidden fees'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-64 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark/20 to-dark z-0" />
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
                  className="bg-dark/80 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-white/80">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Schedule a free consultation with our experts and discover how we can help you achieve your goals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-dark font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-lg">
                Schedule a Call
              </button>
              <button className="bg-transparent border-2 border-white/20 hover:border-primary text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:text-primary text-lg">
                View Case Studies
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;