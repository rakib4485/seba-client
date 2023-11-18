import React, { useState } from 'react';
import { FaTwitter, FaInstagram, FaFacebook} from "react-icons/fa";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can send the form data to the server or perform any other actions
    };
    return (
       <div className=''>
        <div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold mb-4 text-center">যোগাযোগ করুন</h2>
        <p className="text-gray-600 mb-6 text-center">
        নীচের ফর্মটি পূরণ করুন বা সোশ্যাল মিডিয়াতে আমাদের সাথে সংযোগ করুন।
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            নাম
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            ইমেইল
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            বার্তা
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-primary"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-4 py-2 rounded-md text-white font-semibold bg-primary hover:bg-opacity-80 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-primary"
            >
              পাঠান
            </button>
            <div className="flex space-x-2">
              <a href="https://twitter.com/" className="text-blue-500 hover:text-blue-600">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com/" className="text-pink-600 hover:text-pink-700">
                <FaInstagram size={24} />
              </a>
              <a href="https://facebook.com/" className="text-blue-800 hover:text-blue-900">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
        </div>
         {/* <div className='w-[500px] mx-auto'>
            <form onSubmit={handleSubmit} className="w-96 bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    নাম
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    ইমেইল
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    বার্তা
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    জমা দিন
                </button>
            </form>
        </div> */}
       </div>
    );
};

export default ContactForm;