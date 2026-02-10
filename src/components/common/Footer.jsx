import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Desc */}
          <div>
            <div className="text-2xl font-serif font-bold tracking-wider mb-6">PATIL HOTELS</div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Nagpur's premier destination for refined stays, memorable celebrations, and exceptional hospitality.
            </p> 
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-white transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-white transition duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-white transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-white transition duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-500 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-gold-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-gold-500 transition">Rooms & Suites</a></li>
              <li><a href="#" className="hover:text-gold-500 transition">Facilities</a></li>
              <li><a href="#" className="hover:text-gold-500 transition">Special Offers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-500 uppercase tracking-widest text-xs">Contact Us</h4>
             <ul className="space-y-4 text-gray-300">
              <li>Nagpur, Maharashtra</li>
              <li>+91 7709244142</li>
              <li>info@patilhotels.in</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-500 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">Subscribe to receive special offers and news.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-none text-white px-4 py-2 w-full rounded-l-md focus:ring-1 focus:ring-gold-500"
              />
              <button className="bg-gold-500 text-white px-4 py-2 rounded-r-md hover:bg-gold-600 transition">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          &copy; 2026 PATIL Hotels. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
