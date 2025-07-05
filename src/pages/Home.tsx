// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import { useTheme } from '../constants/ThemeContext';
import logo from '@/assets/logo.png';

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Theme-aware colors
  const primaryColor = isDark ? '#EC6435' : '#D45328';
  const textColor = isDark ? 'text-white' : 'text-dark';
  const mutedTextColor = isDark ? 'text-white/80' : 'text-dark/80';
  const cardBg = isDark ? 'bg-dark/50' : 'bg-light-darker/50';
  const cardBorder = isDark ? 'border-white/10' : 'border-dark/10';
  
  return (
    <section className="relative min-h-screen overflow-hidden" id="hero-section">
      {/* Background with logo pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: '35%',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          filter: isDark ? 'none' : 'invert(1)'
        }}
      />
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 z-0 ${
        isDark 
          ? 'bg-gradient-to-b from-dark/95 via-dark/80 to-dark' 
          : 'bg-gradient-to-b from-light/80 via-light/60 to-light'
      }`} />
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              backgroundColor: primaryColor,
              animation: `pulse ${Math.random() * 4 + 2}s infinite`,
              opacity: Math.random() * 0.4 + 0.1
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col items-center text-center">
        <div className="mb-8">
          <div className="bg-primary/20 backdrop-blur-sm rounded-full p-2 inline-block mb-6">
            <div className="bg-primary/10 rounded-full p-2">
              <div className="bg-gradient-to-r from-primary to-accent text-dark font-bold rounded-full px-4 py-1 text-sm">
                INNOVATING THE FUTURE
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className={textColor}>We Build </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>
          
          <p className={`text-xl ${mutedTextColor} max-w-2xl mx-auto mb-10`}>
            Smplics transforms visions into reality through cutting-edge solutions
            and strategic digital innovation for forward-thinking businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link 
              to="/services" 
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-dark font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg"
            >
              Explore Our Services
            </Link>
            <Link 
              to="/contact" 
              className={`bg-transparent border-2 ${
                isDark ? 'border-white/20' : 'border-dark/20'
              } hover:border-primary ${
                isDark ? 'text-white' : 'text-dark'
              } font-bold py-4 px-8 rounded-full transition-all duration-300 hover:text-primary text-lg`}
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto w-full">
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '500+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '40+', label: 'Team Experts' },
          ].map((stat, index) => (
            <div 
              key={index}
              className={`${cardBg} backdrop-blur-sm border ${cardBorder} rounded-xl p-6 transition-all hover:border-primary/30`}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className={`${mutedTextColor} text-sm`}>{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-primary flex justify-center p-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl z-0" />
      <div className="absolute bottom-40 left-10 w-60 h-60 rounded-full bg-accent/10 blur-3xl z-0" />
    </section>
  );
};

export default Home;