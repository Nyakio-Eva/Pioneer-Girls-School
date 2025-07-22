import { FaTiktok, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaPhone } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'

export default function Footer() {
    return(
        <footer className="bg-[#0c356a] text-gray-800 py-16 bottom-0">
            <div className="max-w-9xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-yellow-400 uppercase tracking-wide">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-white hover:text-yellow-400 transition-colors flex items-center"> <ChevronRight className="w-4 h-4 mr-2 text-white" /> Home</Link></li>
                            <li><Link to="/inspire" className="text-white hover:text-yellow-400 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Discover Who We Are</Link></li>
                            <li><Link to="/pathways" className="text-white hover:text-yellow-400 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Discover Pathways</Link></li>
                            <li><Link to="/student-life" className="text-white hover:text-yellow-400 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Discover Student Life</Link></li>
                            <li><Link to="/student-life" className="text-white hover:text-yellow-400 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Discover Talents</Link></li>
                            <li><Link to="/join-us" className="text-white hover:text-yellow-400 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Join Us</Link></li>
                            <li><Link to="/fees" className="text-white hover:text-yellow-400 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Discover Friendly Fees</Link></li>
                            <li><Link to="#" className="text-white hover:text-yellow-400 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Discover Our Location</Link></li>
                            <li><Link to="/get-access" className="text-white hover:text-yellow-400 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Get Access</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-yellow-400 uppercase tracking-wide">Contact Us</h4>
                        <div className="space-y-3">
                            <div>
                                <div className="font-semibold text-yellow-400">Telephone:</div>
                                <div className="text-white">+254 205038234</div>
                            </div>
                            <div>
                                <div className="font-semibold text-yellow-400">Email Us:</div>
                                <div className="text-white break-words">admissions@pioneergirlsjuniorschool.co.ke</div>
                                <div className="text-white text-sm mt-1">Po Box 33-01015 Ithanga, Muranga</div>
                            </div>
                            <div>
                                <div className="font-semibold text-yellow-400">Physical Address</div>
                                <div className="text-white text-sm">
                                    <div>Off Nairobi-Meru Highway, Delmonte Factory</div>
                                    <div>road, Mitumbiri, Ithanga, Murang'a County</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Schools */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-yellow-400 uppercase tracking-wide">Our Schools</h4>
                        <ul className="space-y-2">
                           <li><a href="https://www.pioneergirlsschool.co.ke/" target="_blank"
                            rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Pioneer Girls School</a></li>
                            <li><a href="https://www.pioneergroupofschools.co.ke/" target="_blank"
                            rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Pioneer Group of schools</a></li>
                            <li><a href="https://www.stpaulthomasacademy.co.ke/"  target="_blank"
                            rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />St Paul Thomas Academy</a></li>
                            <li><a href="https://www.pioneergirlsjunioracademy.co.ke/" target="_blank"
                            rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Pioneer Girls Junior Academy</a></li>
                            <li><a href="https://www.pioneerjunioracademy.co.ke/" target="_blank"
                            rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Pioneer Junior Academy</a></li>
                            <li><a href="https://www.pioneerschools.ac.ke/" target="_blank"
                            rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Pioneer School</a></li>
                            <li><a href="https://piu.ac.ke/"  target="_blank"
                             rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white" />Pioneer International University</a></li>
                        </ul>
                        
                    </div>

                    {/* Our Socials */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-yellow-400 uppercase tracking-wide">Our Socials</h4>
                        <div className="flex space-x-2">
                            <a href="https://www.tiktok.com/@pioneergirlsschool" target="_blank"
                                 rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                                <FaTiktok size={16} />
                            </a>
                            <a href="https://www.facebook.com/people/Pioneer-Girls-School/100067849162594/" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                                <FaFacebook size={16} />
                            </a>
                            <a href="https://www.instagram.com/explore/locations/1661580044124468/pioneer-girls-high-school/" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                                <FaInstagram size={16} />
                            </a>
                            <a href="https://x.com/pioneergirlske?lang=en" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                                <FaTwitter size={16} />
                            </a>
                            <a href="https://ke.linkedin.com/company/pioneer-girls-school" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                                <FaLinkedin size={16} />
                            </a>
                            <a href="https://www.youtube.com/watch?v=GLXcmVXluQs" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                                <FaYoutube size={16} />
                            </a>
                        </div>
                        <div className="text-xs text-gray-300 mt-4">
                            <div>Regulated by the Ministry of Education Kenya (21P3000036)</div>
                            <div>Licensed by Murang'a County</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section with Tagline */}
                <div className="mt-12 pt-8 border-t border-gray-600">
                    <div className="text-center">
                        <div className="bg-[#DCAE3D] text-white px-6 py-3 rounded-lg inline-block text-lg font-semibold mb-4">
                            Vitae Abudantae | Life In Abundance
                        </div>
                        <div className="text-gray-300 text-sm">
                            <a href="#" className="hover:text-yellow-400 mr-4">Privacy Policy</a>
                            <a href="#" className="hover:text-yellow-400 mr-4">Disclaimer</a>
                            <a href="#" className="hover:text-yellow-400 mr-4">Sitemap</a>
                            <span className="container mx-auto text-center">
                                &copy; {new Date().getFullYear()} Pioneer Schools
                            </span>
                        </div>
                    </div>
                </div>

                {/* Floating Chat Button */}
                <div className="fixed bottom-6 left-6">
                    <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg">
                        <FaPhone size={20} className="text-white" />
                    </button>
                </div>
            </div>
        </footer>
    )
}