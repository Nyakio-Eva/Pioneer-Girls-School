import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';

const navItems = [
  { label: "Home", path: "/", hasDropdown: false },
  { label: "Be Inspired", path: "/be-inspired", hasDropdown: false },
  { 
    label: "Inspire", 
    path: "/inspire", 
    hasDropdown: true, 
    options: [
      { label: "Inspired History", path: "/inspire/history" },
      { label: "Inspired Leadership", path: "/inspire/leadership" },
    ] 
  },
  { 
    label: "Pathways", 
    path: "/pathways", 
    hasDropdown: true, 
    options: [
      // { label: "TailorMade Pathways", path: "/pathways/tailormade" },
      { label: "School of Science Technology Engineering & Mathematics", path: "/stem" },
      { label: "School of Social Sciences", path: "/social-sciences" },
      { label: "School of Arts & Sport Science", path: "/arts-sports" },
      { label: "Aviation Program", path: "/aviation" },
      { label: "Marine program", path: "/marine" },
      { label: "AI Program", path: "/AI" },
    ] 
  },
  { 
    label: "Student Life", 
    path: "/student-life", 
    hasDropdown: true, 
    options: [
      { label: "Soccer", path: "/student-life/soccer" },
      { label: "Swimming", path: "/student-life/swimming" },
      { label: "BasketBall", path: "/student-life/basketball" },
      { label: "Golf", path: "/student-life/golf" },
      // { label: "Performance Arts", path: "/student-life/performance-arts" },
      // { label: "Art Club", path: "/student-life/art-club" },
      // { label: "Science Club", path: "/student-life/science-club" },
      // { label: "Debate Club", path: "/student-life/debate-club" },
    ] 
  },
  { 
    label: "Boarding Life", 
    path: "/boarding-life", 
    hasDropdown: true, 
    options: [
      { label: "Dorm Life", path: "/boarding-life/dorm-life" },
      { label: "Dance Life", path: "/boarding-life/dance-life" },
      // { label: "Health & Wellness", path: "/boarding-life/health-wellness" },
      // { label: "Security", path: "/boarding-life/security" },
      // { label: "St. John Ambulance", path: "/boarding-life/st-john-ambulance" },
      { label: "Nursing Care", path: "/boarding-life/nursing-care" },
      { label: "Chaplaincy", path: "/boarding-life/chaplaincy" },
    ] 
  },
  { 
    label: "Join Us", 
    path: "/join-us", 
    hasDropdown: true, 
    options: [
      { label: "Join Grade 9", path: "/join-us/grade-9" },
      { label: "Join Grade 10", path: "/join-us/grade-10" },
      { label: "Join Form 2", path: "/join-us/form-2" },
      { label: "Join Form 3", path: "/join-us/form-3" },
      { label: "Join Form 4", path: "/join-us/form-4" },
      { label: "Enquire", path: "https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F", external: true },
    ] 
  },
  { 
    label: "Fees", 
    path: "/fees", 
    hasDropdown: true, 
    options: [
      { label: "Grade 9", path: "/fees/grade-9" },
      { label: "Grade 10", path: "/fees/grade-10" },
      { label: "Form 2", path: "/fees/form-2" },
      { label: "Form 3", path: "/fees/form-3" },
      { label: "Form 4", path: "/fees/form-4" },
      { label: "Terms & Conditions", path: "/fees/terms-conditions" },
    ] 
  },
  { 
    label: "Get Access", 
    path: "/get-access", 
    hasDropdown: true, 
    options: [
      { label: "Calendar of Events", path: "/get-access/calendar" },
      { label: "Student Access", path: "/get-access/student-access" },
      { label: "Staff Access", path: "/get-access/staff-access" },
    ] 
  },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsDropdownClicked(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === index ? null : index);
    setIsDropdownClicked(true);
  };

  const handleMouseEnter = (index: number) => {
    if (!isDropdownClicked) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isDropdownClicked) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
    setIsDropdownClicked(false);
  };

  return (
    <nav className="bg-[#bfd5ee] text-gray-800 shadow-lg">
      <div className="w-full mr-28 px-6 flex items-center justify-between h-full relative py-4">
        {/* Logo */}
        <div className="font-bold text-base text-gray-900 ml-4 flex items-center">
          <img src="/pgslogo.webp" alt="logo" className="object-contain h-10 w-10"/>
          Pioneer Girls School
        </div>
        
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden text-gray-700 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Nav links */}
        <div className="hidden xl:flex items-center h-full" ref={dropdownRef}>
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group h-4 flex items-center border-l border-gray-400 first:border-l-0 last:border-r"
              onMouseEnter={() => item.hasDropdown && handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.hasDropdown ? (
                <div
                  className="flex items-center px-4 py-4 rounded-sm hover:bg-[#cfa53aff] cursor-pointer h-full transition-colors duration-200"
                  onClick={(e) => handleDropdownToggle(e, index)}
                >
                  <Link
                    to={item.path}
                    className="text-md font-bold whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                  <ChevronDown
                    size={14}
                    className={`ml-1 transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`}
                  />
                </div>
              ) : (
                <Link 
                  to={item.path} 
                  className="px-4 py-4 rounded-sm hover:bg-[#cfa53aff] cursor-pointer h-full flex items-center transition-colors duration-200"
                >
                  <span className="text-md font-bold whitespace-nowrap">{item.label}</span>
                </Link>
              )}

              {/* Dropdown */}
              {item.hasDropdown && activeDropdown === index && (
                <div className="absolute top-full left-0 mt-8 bg-[#bfd5ee] shadow-lg rounded-md border border-gray-200 rounded-sm z-50">
                  <div className="p-2">
                    <div className="mt-2 space-y-1">
                      {item.options?.map((option, idx) =>
                        option.external ? (
                          <a
                            key={idx}
                            href={option.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-1 text-sm text-gray-600 hover:bg-[#cfa53aff] rounded-md p-2 whitespace-nowrap"
                            onClick={handleDropdownItemClick}
                          >
                            {option.label}
                          </a>
                        ) : (
                          <Link
                            key={idx}
                            to={option.path}
                            className="block py-1 text-sm text-gray-600 hover:bg-[#cfa53aff] rounded-md p-2 whitespace-nowrap"
                            onClick={handleDropdownItemClick}
                          >
                            {option.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-[#bfd5ee] p-6 z-50">
            <div className="flex flex-col items-start space-y-2">
              {navItems.map((item, index) => (
                <div key={index} className="w-full">
                  {!item.hasDropdown ? (
                    <Link
                      to={item.path}
                      className="flex items-center w-full font-semibold text-gray-800 hover:bg-[#cfa53aff] px-2 py-1 rounded"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="flex items-center w-full justify-between">
                      <Link
                        to={item.path}
                        className="font-semibold text-gray-800 hover:bg-[#cfa53aff] px-2 py-1 rounded flex-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <button
                        className="ml-2 flex items-center p-1"
                        onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                        style={{ background: "none", border: "none", cursor: "pointer" }}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${activeDropdown === index ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                  )}
                  
                  {item.hasDropdown && activeDropdown === index && (
                    <div className="ml-6 space-y-1">
                      {item.options?.map((option, idx) =>
                        option.external ? (
                          <a
                            key={idx}
                            href={option.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm text-gray-700 hover:bg-[#cfa53aff] px-2 py-1 rounded"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {option.label}
                          </a>
                        ) : (
                          <Link
                            key={idx}
                            to={option.path}
                            className="block text-sm text-gray-700 hover:bg-[#cfa53aff] px-2 py-1 rounded"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {option.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}