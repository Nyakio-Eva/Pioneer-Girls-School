import { FaTiktok, FaLinkedin, FaXTwitter, FaInstagram, FaFacebook, FaYoutube, } from 'react-icons/fa6';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'

export default function Footer() {
    return(
        <footer className="bg-[#13365e] text-gray-800 py-5 bottom-0 font-serif">
            <div className="border-t border-white"></div>
            <div className="max-w-9xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-[#bfd5ee] uppercase tracking-wide">Quick Links</h4>
                        <ul className="space-y-2 text-md">
                            <li><Link to="/" className="text-white hover:text-[#bfd5ee] transition-colors flex items-center"> <ChevronRight className="w-4 h-4 mr-2 text-white" /> Home</Link></li>
                            <li><Link to="/inspire" className="text-white hover:text-[#bfd5ee] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Inspire</Link></li>
                            <li><Link to="/pathways" className="text-white hover:text-[#bfd5ee] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Inspired Path</Link></li>
                            <li><Link to="/boarding-life" className="text-white hover:text-[#bfd5ee] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Inspire Study Life</Link></li>
                            <li><Link to="/student-life" className="text-white hover:text-[#bfd5ee] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Inspire Student Life</Link></li>
                            <li><Link to="/be-inspired" className="text-white hover:text-[#bfd5ee] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Be Inspired</Link></li>
                            <li><Link to="/fees" className="text-white hover:text-[#bfd5ee] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Fees</Link></li>
                            <li><Link to="/https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F" className="text-white hover:text-[#bfd5ee] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Book a Visit</Link></li>
                            <li><Link to="/get-access" className="text-white hover:text-[#bfd5ee] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Get Access</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-[#bfd5ee] uppercase tracking-wide">Contact Us</h4>
                        <div className="space-y-3 text-md">
                            {/* Phone */}
                            <div>
                            <div className="font-semibold text-[#bfd5ee]">Telephone:</div>
                                <a href="tel:+254205038234" className="text-white hover:text-[#bfd5ee]">
                                    +254 205-038-234
                                </a>
                            </div>

                            {/* Email & Postal */}
                            <div>
                            <div className="font-semibold text-[#bfd5ee]">Email Us:</div>
                                <a
                                    href="mailto:admissions@pioneergirlsschool.co.ke"
                                    className="text-white break-words hover:text-[#bfd5ee]"
                                >
                                    admissions@pioneergirlsschool.co.ke
                                </a>
                            
                            </div>

                            {/* Physical Address */}
                            <div className="font-semibold text-[#bfd5ee]">Address</div>
                                <div className="text-white text-sm mt-1 hover:text-[#bfd5ee]">
                                    Po Box 33-01015 Ithanga, Muranga
                                </div>
                                <div className="text-white text-sm">
                                    <a
                                    href="https://www.google.com/maps/place/Pioneer+Girls+School/@-1.0257503,37.0830836,17z"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#bfd5ee]"
                                    >
                                    Off Nairobi-Meru Highway, Delmonte Factory road, <br /> Mitumbiri, Ithanga, Murang'a County
                                    </a>
                                </div>
                            </div>
                        </div>

                    {/* Our Schools */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-[#bfd5ee] uppercase tracking-wide">Our Schools</h4>
                        <ul className="space-y-2 text-md">
                           <li><a href="https://www.pioneergirlsschool.co.ke/" target="_blank"
                            rel="noopener noreferrer" className="text-white hover:text-[#bfd5ee] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Pioneer Girls School</a></li>
                            <li><a href="https://www.pioneergroupofschools.co.ke/" target="_blank"
                            rel="noopener noreferrer" className="text-white hover:text-[#bfd5ee] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Pioneer Group of schools</a></li>
                            <li><a href="https://www.stpaulthomasacademy.co.ke/"  target="_blank"
                            rel="noopener noreferrer" className="text-white hover:text-[#bfd5ee] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />St Paul Thomas Academy</a></li>
                            <li><a href="https://www.pioneergirlsjunioracademy.co.ke/" target="_blank"
                            rel="noopener noreferrer" className="text-white hover:text-[#bfd5ee] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Pioneer Girls Junior Academy</a></li>
                            <li><a href="https://www.pioneerjunioracademy.co.ke/" target="_blank"
                            rel="noopener noreferrer" className="text-white hover:text-[#bfd5ee] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Pioneer Junior Academy</a></li>
                            <li><a href="https://www.pioneerschools.ac.ke/" target="_blank"
                            rel="noopener noreferrer" className="text-white hover:text-[#bfd5ee] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Pioneer School</a></li>
                            <li><a href="https://piu.ac.ke/"  target="_blank"
                             rel="noopener noreferrer" className="text-white hover:text-[#bfd5ee] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Pioneer International University</a></li>
                        </ul>
                        
                    </div>

                    {/* Our Socials */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-[#bfd5ee] uppercase tracking-wide">Our Socials</h4>
                        <div className="flex space-x-2">
                            <a href="https://www.tiktok.com/@pioneergirlsschool" target="_blank"
                                 rel="noopener noreferrer" className="w-10 h-10 text-white rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <FaTiktok size={24} />
                            </a>
                            <a href="https://www.facebook.com/people/Pioneer-Girls-School/100067849162594/" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 text-white rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://www.instagram.com/explore/locations/1661580044124468/pioneer-girls-high-school/" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 text-white rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://x.com/pioneergirlske?lang=en" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 text-white rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <FaXTwitter size={24} />
                            </a>
                            <a href="https://ke.linkedin.com/company/pioneer-girls-school" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 text-white rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://www.youtube.com/@pioneergroupofschools-keny981" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 text-white rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <FaYoutube size={24} />
                            </a>
                        </div>
                        <div className="text-sm text-gray-300 mt-4">
                            <div>Regulated by the Ministry of Education Kenya (21P3000036)</div>
                            <div>Licensed by Murang'a County</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section with Tagline */}
                <div>
                    <div className="text-center">
                        <div className="bg-white/10 text-white px-6 py-3 rounded-lg inline-block text-2xl font-bold mb-4 font-serif">
                            Vitae Abudantae | Life In Abundance
                        </div>
                        <div className="text-gray-300 text-sm">
                            <Link to={'/privacy-policy'} className="hover:text-[#bfd5ee] mr-4">Privacy Policy</Link>
                            <Link to={'/disclaimer'} className="hover:text-[#bfd5ee] mr-4">Disclaimer</Link>
                            <a href='https://www.pioneergirlsschool.co.ke/sitemap.xml' target='_blank' rel='noopener noreferrer' className="hover:text-[#bfd5ee] mr-4">Sitemap</a>
                            <span className="container mx-auto text-center">
                                &copy; {new Date().getFullYear()} Pioneer Girls School
                            </span>
                        </div>
                    </div>
                </div>

                {/* Floating Chat Button */}
                <div className="fixed bottom-6 left-6">
                    <Link to={'/https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F'} className="w-16 h-12 bg-[#bfd5ee] rounded-lg flex items-center justify-center hover:bg-blue-900 hover:text-white transition-colors shadow-lg py-2 px-16 whitespace-nowrap">
                        Enroll Today
                    </Link>
                </div>
            </div>
        </footer>
    )
}