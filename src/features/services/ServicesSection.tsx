import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code, Framer, Phone, BarChart2, Server, Cloud, Lock, HelpCircle } from 'react-feather';
import { useTheme } from '../../constants/ThemeContext';

const ServicesSection = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Theme-aware colors
  const bgColor = isDark ? 'bg-dark' : 'bg-light';
  const textColor = isDark ? 'text-white' : 'text-dark';
  const mutedTextColor = isDark ? 'text-white/80' : 'text-dark/70';
  const cardBg = isDark ? 'bg-dark/80' : 'bg-light/80';
  const cardBorder = isDark ? 'border-white/10' : 'border-dark/10';
  

  const serviceTabs = [
    { id: 'all', label: 'All Services' },
    { id: 'design', label: 'Design' },
    { id: 'development', label: 'Development' },
    { id: 'marketing', label: 'Marketing' },
  ];

  const services = [
    {
      id: 1,
      title: 'UI/UX Design',
      description: 'Create intuitive and engaging user experiences that drive conversion and user satisfaction.',
      icon: <Framer className="text-primary" size={24} />,
      category: 'design',
      features: ['User Research', 'Wireframing', 'Prototyping', 'UI Design', 'Usability Testing'],
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Build responsive, high-performance websites with modern frameworks and best practices.',
      icon: <Code className="text-primary" size={24} />,
      category: 'development',
      features: ['React/Next.js', 'Vue/Nuxt.js', 'Node.js', 'Headless CMS', 'API Integration'],
    },
    {
      id: 3,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      icon: <Phone className="text-primary" size={24} />,
      category: 'development',
      features: ['React Native', 'Flutter', 'iOS Swift', 'Android Kotlin', 'PWA Development'],
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to increase visibility and drive targeted traffic.',
      icon: <BarChart2 className="text-primary" size={24} />,
      category: 'marketing',
      features: ['SEO Optimization', 'PPC Campaigns', 'Social Media', 'Content Strategy', 'Analytics'],
    },
    {
      id: 5,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for businesses of all sizes.',
      icon: <Cloud className="text-primary" size={24} />,
      category: 'development',
      features: ['AWS', 'Azure', 'Google Cloud', 'Server Setup', 'DevOps'],
    },
    {
      id: 6,
      title: 'Backend Services',
      description: 'Robust backend systems and API development to power your applications.',
      icon: <Server className="text-primary" size={24} />,
      category: 'development',
      features: ['REST/GraphQL APIs', 'Database Design', 'Microservices', 'Authentication', 'Serverless'],
    },
    {
      id: 7,
      title: 'Security Solutions',
      description: 'Protect your digital assets with comprehensive security assessments and solutions.',
      icon: <Lock className="text-primary" size={24} />,
      category: 'development',
      features: ['Penetration Testing', 'Security Audits', 'Compliance', 'Encryption', 'Firewalls'],
    },
    {
      id: 8,
      title: 'Support & Maintenance',
      description: 'Ongoing support and optimization to keep your digital products running smoothly.',
      icon: <HelpCircle className="text-primary" size={24} />,
      category: 'marketing',
      features: ['Performance Monitoring', 'Bug Fixes', 'Updates', 'Backups', '24/7 Support'],
    },
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <section className={`py-20 ${bgColor} ${textColor} relative overflow-hidden`}>
      {/* Background elements */}
      <div className={`absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b ${
        isDark ? 'from-primary/10' : 'from-primary/5'
      } to-transparent z-0`} />
      
      <div className={`absolute bottom-0 right-0 w-80 h-80 rounded-full ${
        isDark ? 'bg-accent/10' : 'bg-accent/5'
      } blur-3xl z-0`} />
      
      <div className={`absolute top-1/4 left-10 w-60 h-60 rounded-full ${
        isDark ? 'bg-primary/10' : 'bg-primary/5'
      } blur-3xl z-0`} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-primary to-accent text-dark font-bold rounded-full px-6 py-2">
              OUR SERVICES
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Solutions That <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Drive Growth</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-xl ${mutedTextColor} max-w-3xl mx-auto`}
          >
            We offer a comprehensive suite of digital services designed to transform your business and achieve measurable results.
          </motion.p>
        </div>
        
        {/* Service Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {serviceTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-primary to-accent text-dark'
                  : `${cardBg} ${textColor} hover:${isDark ? 'bg-dark-lighter' : 'bg-light-darker'}`
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`h-full ${cardBg} backdrop-blur-sm border ${cardBorder} rounded-2xl overflow-hidden transition-all duration-500 ${
                hoveredService === service.id 
                  ? 'border-primary/50 shadow-xl shadow-primary/10' 
                  : ''
              }`}>
                {/* Service header */}
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className={`${
                      isDark ? 'bg-primary/10' : 'bg-primary/5'
                    } p-3 rounded-xl mr-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className={`${mutedTextColor} mb-4`}>{service.description}</p>
                </div>
                
                {/* Features expandable section */}
                <div className={`px-6 pb-6 transition-all duration-500 ${
                  hoveredService === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <div className={`border-t ${cardBorder} pt-4`}>
                    <h4 className="font-medium text-primary mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                          <span className={mutedTextColor}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                {hoveredService === service.id && (
                  <div className={`absolute inset-0 ${
                    isDark ? 'bg-gradient-to-br from-primary/5 to-accent/5' : 'bg-gradient-to-br from-primary/3 to-accent/3'
                  } -z-10 rounded-2xl`} />
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={`mt-20 ${isDark ? 'bg-dark/90' : 'bg-light/90'} backdrop-blur-sm border ${cardBorder} rounded-2xl p-10 relative overflow-hidden`}
        >
          <div className={`absolute top-0 right-0 w-60 h-60 ${
            isDark ? 'bg-gradient-to-r from-primary/10 to-accent/10' : 'bg-gradient-to-r from-primary/5 to-accent/5'
          } rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 z-0`} />
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Digital Presence</span>?
              </h3>
              <p className={`text-xl ${mutedTextColor} mb-8 max-w-2xl mx-auto`}>
                Let's discuss how our services can help your business achieve its goals and stand out in the digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-dark font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-lg">
                  Get a Free Consultation
                </button>
                <button className={`bg-transparent border-2 ${
                  isDark ? 'border-white/20 hover:border-primary' : 'border-dark/20 hover:border-primary'
                } ${textColor} font-bold py-4 px-8 rounded-full transition-all duration-300 ${
                  isDark ? 'hover:text-primary' : 'hover:text-primary-dark'
                } text-lg`}>
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;