import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';

const navItems = [
  { label: "Home", path: "/", hasDropdown: false },
  { label: "Be Inspired", path: "/be-inspired", hasDropdown: false },
  { 
    label: "Inspire", 
    path: "/inspired", 
    hasDropdown: true, 
    options: [
      { label: "Inspired History", path: "/inspired/history" },
      { label: "Inspired Leadership", path: "/inspired/leadership" },
    ] 
  },
  { 
    label: "Pathways", 
    path: "/pathways", 
    hasDropdown: true, 
    options: [
      { label: "TailorMade Pathways", path: "/pathways/tailormade" },
      { label: "Science Technology Engineering & Mathematics", path: "/pathways/stem" },
      { label: "Social Sciences", path: "/pathways/social-sciences" },
      { label: "Arts & Sport Science", path: "/pathways/arts-sports" },
      { label: "Aviation", path: "/pathways/aviation" },
      { label: "Marine", path: "/pathways/marine" },
      { label: "AI studies", path: "/pathways/AI" },
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
      { label: "Peformance Arts", path: "/student-life/performance-arts" },
      { label: "Art Club", path: "/student-life/art-club" },
      { label: "Science Club", path: "/student-life/science-club" },
      { label: "Debate Club", path: "/student-life/debate-club" },
    ] 
  },
  { 
    label: "Boarding Life", 
    path: "/boarding-life", 
    hasDropdown: true, 
    options: [
      { label: "Dorm Life", path: "/boarding-life/dorm-life" },
      { label: "Dance Life", path: "/boarding-life/dance-life" },
      { label: "Health & Wellness", path: "/boarding-life/health-wellness" },
      { label: "Security", path: "/boarding-life/security" },
      { label: "St. John Ambulance", path: "/boarding-life/st-john-ambulance" },
      { label: "Nursing Care", path: "/boarding-life/nursing-care" },
      { label: "Chaplaincy", path: "/boarding-life/chaplaincy" },
    ] 
  },
  { 
    label: "Join Us", 
    path: "/join-us", 
    hasDropdown: true, 
    options: [
      { label: "Join Grade 10", path: "/join-us/grade-10" },
      { label: "Join Form 2", path: "/join-us/form-2" },
      { label: "Join Form 3", path: "/join-us/form-3" },
      { label: "Enquire", path: "/join-us/enquire" },
    ] 
  },
  { 
    label: "Fees", 
    path: "/fees", 
    hasDropdown: true, 
    options: [
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

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  

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
            // X icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Nav links container */}
        <div className="hidden xl:flex items-center h-full">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group h-4 flex items-center border-l border-gray-400 first:border-l-0 last:border-r"
              onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
              onMouseEnter={() => setActiveDropdown(index)}
              // onMouseLeave={() => setActiveDropdown(null)}
              ref={dropdownRef}
            >
              {item.hasDropdown ? (
                <div className="px-4 py-4 rounded-sm hover:bg-[#cfa53aff] cursor-pointer h-full flex items-center transition-colors duration-200">
                  <div className="flex items-center space-x-1">
                    <span className="text-md font-bold whitespace-nowrap">{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-200 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </div>
                </div>
              ) : (
                <Link to={item.path} className="px-4 py-4 rounded-sm hover:bg-[#cfa53aff] cursor-pointer h-full flex items-center transition-colors duration-200">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-bold whitespace-nowrap">{item.label}</span>
                  </div>
                </Link>
              )}

              {/* Dropdown */}
              {item.hasDropdown && activeDropdown === index && (
                <div className="absolute top-full left-0 mt-8 bg-[#bfd5ee] shadow-lg rounded-md border border-gray-200 mr-10 rounded-sm z-50">
                  <div className="p-2">
                    {/* <p className="text-sm text-gray-700 font-semibold">{item.label}</p> */}
                    <div className="mt-2 space-y-1">
                      {item.options?.map((option, idx) => (
                        <Link
                          key={idx}
                          to={option.path} // Example path
                          className="block py-1 text-sm text-gray-600 hover:bg-[#cfa53aff] rounded-md p-2 whitespace-nowrap"
                        >
                         {option.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Mobile Menu - shown only on small screens */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-[#bfd5ee] p-6 z-50">
            <div className="flex flex-col items-start space-y-2">
              {navItems.map((item, index) => (
                <div key={index} className="w-full">
                  <div className="flex items-center w-full">
                    <span className="font-semibold text-gray-800">{item.label}</span>
                    {item.hasDropdown && (
                      <button
                        className="ml-2 flex items-center"
                        onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                        aria-label={`Toggle ${item.label} dropdown`}
                        style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${activeDropdown === index ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>
                  {/* Dropdown Items */}
                  {item.hasDropdown && activeDropdown === index && (
                    <div className=" ml-6 space-y-1">
                      {item.options?.map((option, idx) => (
                        <Link
                          key={idx}
                          to={option.path}
                          className="block text-sm text-gray-700 hover:bg-[#cfa53aff] px-2 py-1 rounded"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {option.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Non-dropdown direct links */}
                  {!item.hasDropdown && (
                    <Link
                      to={item.path!}
                      className="block text-sm text-gray-700 hover:bg-[#cfa53aff] px-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                    </Link>
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