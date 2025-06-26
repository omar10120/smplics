// src/features/about/AboutSection.tsx
import { motion } from 'framer-motion';
import { Briefcase, Globe, Users, BarChart2, Award } from 'react-feather';
import logo from '@/assets/logo.png';

const AboutSection = () => {
  const stats = [
    { value: 15, label: 'Years Experience', icon: <Briefcase className="text-primary" size={24} /> },
    { value: 500, label: 'Projects Delivered', icon: <Globe className="text-primary" size={24} /> },
    { value: 40, label: 'Team Experts', icon: <Users className="text-primary" size={24} /> },
    { value: 98, label: 'Client Satisfaction', icon: <BarChart2 className="text-primary" size={24} /> },
    { value: 24, label: 'Awards Won', icon: <Award className="text-primary" size={24} /> },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative thinking to solve complex challenges.',
      color: 'from-primary to-accent',
    },
    {
      title: 'Excellence',
      description: 'Quality is at the core of everything we do, from concept to delivery.',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Collaboration',
      description: 'Great things happen when diverse minds work together towards a common goal.',
      color: 'from-green-500 to-teal-600',
    },
  ];

  const team = [
    { name: 'Alex Morgan', role: 'Founder & CEO', image: 'team1' },
    { name: 'Taylor Kim', role: 'CTO', image: 'team2' },
    { name: 'Jordan Smith', role: 'Creative Director', image: 'team3' },
    { name: 'Casey Johnson', role: 'Lead Developer', image: 'team4' },
  ];

  return (
    <section className="py-20 bg-dark text-white relative overflow-hidden" >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary/10 to-transparent z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl z-0" />
      
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
              OUR STORY
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Crafting Digital <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Excellence</span> Since 2012
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Smplics has been at the forefront of digital innovation, transforming businesses through cutting-edge solutions and strategic thinking.
          </motion.p>
        </div>
        
        {/* Timeline */}
        <div className="flex flex-col md:flex-row gap-10 mb-20">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h3 className="text-3xl font-bold mb-4">Our Journey</h3>
              <p className="text-white/80 mb-6">
                Founded in 2012 with a vision to revolutionize digital experiences, we've grown from a small garage startup to an industry leader with global reach.
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-white/10 z-0" />
              
              {[
                { year: '2012', title: 'Company Founded', description: 'Started in a small office with just 3 team members and big dreams.' },
                { year: '2012', title: 'First Major Client', description: 'Secured partnership with Fortune 500 company, marking our breakthrough.' },
                { year: '2016', title: 'Global Expansion', description: 'Opened international offices in Europe and Asia.' },
                { year: '2020', title: 'Digital Transformation Leader', description: 'Recognized as industry leader in digital innovation.' },
                { year: '2023', title: 'AI Integration', description: 'Pioneered AI-driven solutions for enhanced customer experiences.' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-16 pb-10"
                >
                  <div className="absolute left-5 top-1 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center -translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="text-primary font-bold mb-1">{item.year}</div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-white/80">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full min-h-[500px] flex items-center justify-center text-dark">
                {/* Company Vision Image */}
                <img src={logo} alt="Company Vision Image" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-lg rotate-12 z-0 opacity-20" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full z-0 opacity-20" />
            </motion.div>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-white/80 max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we create
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark/80 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center`}>
                    <div className="bg-dark w-10 h-10 rounded-md flex items-center justify-center">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${value.color}`} />
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-white/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">Leadership Team</h3>
            <p className="text-white/80 max-w-3xl mx-auto">
              The brilliant minds driving innovation and excellence at Smplics
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center text-dark">
                    Team Member
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h4 className="text-xl font-bold">{member.name}</h4>
                    <p className="text-primary">{member.role}</p>
                  </div>
                  
                  {/* Social links */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {['linkedin', 'twitter', 'dribbble'].map((social, i) => (
                      <div 
                        key={i}
                        className="w-10 h-10 rounded-full bg-dark/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors"
                      >
                        <i className={`fab fa-${social}`} />
                        <div className="w-4 h-4 bg-gray-400 rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* <motion.div>
          do any think anmy think
        </motion.div> */}
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-dark to-dark/90 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}+
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;