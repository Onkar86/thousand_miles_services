import { Globe2, Ship, TrendingUp, Shield, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1606964212858-c215029db704?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dunsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80"
            alt="Container ship at port"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>

        <nav className="relative z-10 container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="/logo/1000.png" // Relative path from the public folder
                alt="Thousand Miles Services Logo"
                className="h-12 w-13" // Adjust height and width as needed
              />
              {/* <Globe2 className="h-8 w-8 text-blue-500" /> */}
              <span className="text-2xl font-bold text-white">Thousand Miles Services</span>
            </div>
            <div className="hidden md:flex space-x-8 text-white">
              <a href="#services" className="hover:text-blue-400">Services</a>
              <a href="#about" className="hover:text-blue-400">About</a>
              <a href="#contact" className="hover:text-blue-400">Contact</a>
            </div>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-6 pt-32">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your Global Trade Partner
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Connecting businesses worldwide through reliable import and export solutions. Expert logistics, customs clearance, and international trade services.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <Ship className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Freight Solutions</h3>
              <p className="text-gray-600">Comprehensive sea and air freight services for efficient global transportation.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Trade Consulting</h3>
              <p className="text-gray-600">Expert guidance on international trade regulations and market entry strategies.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Customs Clearance</h3>
              <p className="text-gray-600">Seamless customs documentation and compliance management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80"
                alt="Global business meeting"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                <p className="text-gray-600">With over 15 years of experience in international trade, we've built a reputation for reliability and excellence.</p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <ArrowRight className="h-5 w-5 text-blue-600" />
                    <span>Global network of trusted partners</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ArrowRight className="h-5 w-5 text-blue-600" />
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ArrowRight className="h-5 w-5 text-blue-600" />
                    <span>Competitive rates</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ArrowRight className="h-5 w-5 text-blue-600" />
                    <span>End-to-end logistics solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-400" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+91 86928 03848</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-400" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>amey.hajare17@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-400" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>Navi Mumbai<br />abc 123345</p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
          <img
                src="./public/logo/1000.png" // Relative path from the public folder
                alt="Thousand Miles Services Logo"
                className="h-12 w-13" // Adjust height and width as needed
              />
            {/* <Globe2 className="h-6 w-6 text-blue-500" /> */}
            <span className="text-xl font-bold text-white">Thousand Miles Services</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Thousand Miles Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;