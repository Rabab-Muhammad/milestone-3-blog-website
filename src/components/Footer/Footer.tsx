import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* website name */}
          <div className="text-center md:text-left">
            <h1 className="text-lg font-semibold mb-4">CodeEase Blog</h1>
            <p className="text-gray-400 hover:text-emerald-500">
              Join us to learn, grow, and stay ahead in the tech world!
            </p>
          </div>
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-emerald-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-400 hover:text-emerald-500"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#blogs"
                  className="text-gray-400 hover:text-emerald-500"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-400 hover:text-emerald-500"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#footer"
                  className="text-gray-400 hover:text-emerald-500"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-400 hover:text-emerald-500"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-400 hover:text-emerald-500"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-400 hover:text-emerald-500"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4">
              Subscribe to our Newsletter
            </h4>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-[1px] focus:ring-slate-100 "
              />

              <button
                type="submit"
                className="w-full border border-emerald-400 hover:bg-emerald-600 hover:border-none text-white py-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <Link
            href="mailto:rababmuhammadhussain@gmail.com"
            className="text-gray-400 hover:text-teal-300"
            aria-label="Email"
          >
            <FaEnvelope size={28} />
          </Link>
          <Link
            href="https://github.com/Rabab-Muhammad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-300"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </Link>
          <Link
            href="https://linkedin.com/in/rabab-muhammad-35913b1b8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} CodeEase Blog. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
