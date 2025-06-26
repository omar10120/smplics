// src/components/layout/Footer.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', to: '/about' },
        { name: 'Our Team', to: '/team' },
        { name: 'Careers', to: '/careers' },
        { name: 'Press', to: '/press' },
        { name: 'Contact', to: '/contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', to: '/services/web' },
        { name: 'Mobile Apps', to: '/services/mobile' },
        { name: 'UI/UX Design', to: '/services/design' },
        { name: 'Cloud Solutions', to: '/services/cloud' },
        { name: 'Digital Marketing', to: '/services/marketing' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', to: '/blog' },
        { name: 'Case Studies', to: '/case-studies' },
        { name: 'Whitepapers', to: '/whitepapers' },
        { name: 'Webinars', to: '/webinars' },
        { name: 'Documentation', to: '/docs' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'LinkedIn', icon: 'LinkedIn', url: '#' },
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'Dribbble', icon: 'Dribbble', url: '#' },
    { name: 'GitHub', icon: 'GitHub', url: '#' },
  ];

  return (
    <footer className="bg-dark text-white border-t border-white/10">
      {/* Top section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center">
                <div className="bg-primary w-3 h-3 rounded-full mr-2" />
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Smplics
                </h2>
              </div>
            </Link>
            
            <p className="text-white/80 mb-6 max-w-xs">
              Transforming businesses through innovative digital solutions and cutting-edge technology.
            </p>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <div className="w-5 h-5 bg-primary rounded-full" />
              </div>
              <div>
                <p className="font-medium">Call us anytime</p>
                <p className="text-primary">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <div className="w-5 h-5 bg-primary rounded-full" />
              </div>
              <div>
                <p className="font-medium">Send us an email</p>
                <p className="text-primary">contact@Smplics.com</p>
              </div>
            </div>
          </div>
          
          {/* Footer links */}
          {footerLinks.map((column, colIndex) => (
            <motion.div
              key={colIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: colIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6 relative inline-block pb-2">
                {column.title}
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.to}
                      className="text-white/80 hover:text-primary transition-colors flex items-start"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 relative inline-block pb-2">
              Newsletter
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
            </h3>
            <p className="text-white/80 mb-6">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            
            <form className="mb-6">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-dark/50 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-dark font-bold py-3 px-6 rounded-lg transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
            
            <div>
              <h4 className="font-medium mb-3">Follow us</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="bg-white/5 hover:bg-primary/10 border border-white/10 rounded-lg p-3 transition-all"
                  >
                    <div className="w-5 h-5 bg-white rounded-full" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} Smplics. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((item, index) => (
                <a 
                  key={index}
                  href="#"
                  className="text-white/60 hover:text-primary text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-sm">Designed with</span>
              <div className="w-5 h-5 bg-primary rounded-full relative">
                <div className="absolute inset-0 animate-ping bg-primary rounded-full opacity-30" />
              </div>
              <span className="text-white/60 text-sm">in Tech City</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-accent/10 blur-3xl -z-10" />
    </footer>
  );
};

export default Footer;