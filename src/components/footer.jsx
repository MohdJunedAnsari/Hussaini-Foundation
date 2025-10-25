import { FaFacebookF, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [email, setEmail] = useState('');

  // Show scroll-to-top button
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white px-6 pt-12 pb-6 relative">
      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-3">About Us</h3>
          <p className="text-sm text-gray-400 leading-6">
            Hussaini Foundation is a non-profit organization dedicated to uplifting underserved communities through education, health, and humanitarian services.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Subscribe to Newsletter</h3>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 rounded bg-white text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-white text-gray-800 p-2 rounded-full hover:bg-green-500 hover:text-white transition-transform transform hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Hussaini Foundation. All rights reserved.
      </div>

      {/* Scroll to top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-md hover:bg-green-700 transition z-50"
        >
          <FaArrowUp size={16} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
