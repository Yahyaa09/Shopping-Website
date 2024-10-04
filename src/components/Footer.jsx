import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
        
        {/* Company Info */}
        <div className="lg:w-1/4">
          <h2 className="text-2xl font-bold text-white mb-4">Ecomzy</h2>
          <p className="text-sm mb-2">Your trusted partner for innovative solutions.</p>
          <p className="text-sm">© 2024 Ecomzy. All Rights Reserved.</p>
          <div className="mt-4 space-x-4 flex">
            <a href="https://facebook.com" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="https://twitter.com" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="https://instagram.com" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://linkedin.com" className="hover:text-blue-600"><FaLinkedinIn /></a>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="lg:w-1/4">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
        
        {/* Contact Information */}
        <div className="lg:w-1/4">
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li><span className="font-bold">Phone:</span> +1 (123) 456-7890</li>
            <li><span className="font-bold">Email:</span> info@company.com</li>
            <li><span className="font-bold">Address:</span> 123 Business St, Suite 456, City, Country</li>
          </ul>
        </div>
        
        {/* Newsletter Signup */}
        <div className="lg:w-1/4">
          <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">Subscribe to our newsletter for the latest news and updates.</p>
          <form className="flex space-x-2">
            <input 
              type="email" 
              className="px-4 py-2 w-full rounded-md text-black focus:outline-none" 
              placeholder="Enter your email" 
            />
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">Privacy Policy | Terms of Service</p>
        <p className='text-sm'>This website is made by <span className='font-bold'>Mohammad Yahyaa</span></p>
      </div>
    </footer>
  );
};

export default Footer;
