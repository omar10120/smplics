
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '@/assets/logo.png';
import logoLight from '@/assets/logo.png';
import ThemeSwitcher from '../components/ThemeSwitcher';

const navLinks = [
  { name: 'Home', to: '/', sectionId: 'hero-section' },
  { name: 'About', to: '/', sectionId: 'about-section' },  
  { name: 'Services', to: '/', sectionId: 'services-section' },  
  { name: 'Contact', to: '/contact', sectionId: 'contact-section' },    
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero-section');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detect active section for home page
      if (location.pathname === '/') {
        const sections = ['hero-section', 'about-section', 'services-section'];
        let currentSection = 'hero-section';
        
        sections.forEach(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = section;
            }
          }
        });
        
        setActiveSection(currentSection);
      }
    };
    
    // Set initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  useEffect(() => {
    setMenuOpen(false);
    // Set default active section when on home page
    if (location.pathname === '/') {
      setActiveSection('hero-section');
    } else {
      setActiveSection('');
    }
  }, [location]);

  const handleNavigation = (to: string, sectionId?: string) => {
    setMenuOpen(false);
    
    // Handle section scrolling on home page
    if (location.pathname === to && sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Update active section immediately
        setActiveSection(sectionId);
        return;
      }
    }
    
    navigate(to);
    
    // Scroll to section after page transition
    if (sectionId && to === '/') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update active section after scroll
          setActiveSection(sectionId);
        }
      }, 100);
    }
  };

  // Determine if a link is active
  const isLinkActive = (link: { to: string; sectionId?: string }) => {
    if (link.to === '/') {
      // Home page links
      return location.pathname === '/' && 
             activeSection === link.sectionId;
    }
    // Contact page
    return location.pathname === link.to;
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-light/95 dark:bg-dark/95 backdrop-blur-sm py-2 shadow-lg bg-white' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <Link to="/" className="flex items-center z-50">
          <img 
            src={logo}
            alt="Company Logo"
            className={`transition-all duration-300 dark:block hidden ${
              scrolled ? 'h-10 w-auto' : 'h-14 w-auto'
            }`}
          />
          <img 
            src={logoLight}
            alt="Company Logo"
            className={`transition-all duration-300 dark:hidden block ${
              scrolled ? 'h-10 w-auto' : 'h-14 w-auto'
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const active = isLinkActive(link);
            return (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.to, link.sectionId)}
                className={`relative px-1 py-2 font-medium transition-colors ${
                  active
                    ? `text-primary`
                    : `text-dark dark:text-light-darker hover:text-primary`
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-underline" />
                )}
              </button>
            );
          })}
          
          <div className="flex items-center gap-4 ml-4">
            <ThemeSwitcher />
            <button 
              onClick={() => handleNavigation('/contact', 'contact-section')}
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-dark font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeSwitcher />
          <button
            className="relative z-50 w-10 h-10 flex flex-col justify-center items-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-dark dark:bg-light rounded-full transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
            <span className={`block w-6 h-0.5 bg-dark dark:bg-light mt-1 rounded-full transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-6 h-0.5 bg-dark dark:bg-light mt-1 rounded-full transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-light/95 dark:bg-dark/95 backdrop-blur-lg z-40 transition-all duration-500 ease-in-out ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
        style={{ paddingTop: '5rem' }}
      >
        <div className="absolute top-8 left-4">
          <img 
            src={logo}
            alt="Company Logo"
            className="h-12 w-auto dark:block hidden"
          />
          <img 
            src={logoLight}
            alt="Company Logo"
            className="h-12 w-auto dark:hidden block"
          />
        </div>
        
        <nav className="flex flex-col items-center space-y-8 pt-16">
          {navLinks.map((link) => {
            const active = isLinkActive(link);
            return (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.to, link.sectionId)}
                className={`text-2xl font-medium transition-colors ${
                  active 
                    ? 'text-primary' 
                    : 'text-dark dark:text-light hover:text-primary'
                }`}
              >
                {link.name}
              </button>
            );
          })}
          <button 
            onClick={() => handleNavigation('/contact', 'contact-section')}
            className="bg-gradient-to-r from-primary to-accent text-dark font-bold py-3 px-8 rounded-full text-lg mt-4"
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;