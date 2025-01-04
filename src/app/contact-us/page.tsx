import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      {/* Left Sidebar */}
      <div className=" w-full md:w-1/3 bg-amber-400 flex flex-col items-center justify-center p-6 ">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6 text-base lg:text-lg text-center">
          Got something on your mind? {`I’d`} love to hear from you! Feel free
          to reach out.
        </p>
        <div className="space-y-4 ">
          {/* Email */}
          <p className="text-sm  lg:text-lg ">
            <FaEnvelope size={27} />
            Email:{" "}
            <Link
              href="mailto:rababmuhammadhussain@gmail.com"
              className="underline  "
            >
              {" "}
              rababmuhammadhussain@gmail.com
            </Link>
          </p>
          {/* GitHub Icon */}
          <Link
            href="https://github.com/Rabab-Muhammad"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 bg-white text-black rounded-full hover:bg-teal-300 transition"
          >
            <FaGithub size={24} />
          </Link>
          {/* LinkedIn Icon */}
          <Link
            href="https://linkedin.com/in/rabab-muhammad-35913b1b8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 bg-white text-black rounded-full hover:bg-teal-300 transition"
          >
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-2/3 flex items-center justify-center p-6">
        <div className="bg-slate-200 shadow-md rounded-lg w-full max-w-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Get In Touch
          </h2>
          <form>
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your message"
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
);
}

