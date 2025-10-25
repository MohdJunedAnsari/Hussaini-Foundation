
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    country: 'IN',
    phone_number: '',
    message: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) return alert("You must agree to continue.");

    fetch('http://localhost:8000/api/contact/submit/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => alert(data.message || 'Message sent successfully!'))
      .catch((err) => alert('Error sending message.'));
  };

  return (
    <section id="contact" className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* Background Blur Decoration */}
      <div aria-hidden className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-1/2 aspect-[1155/678] w-[72.875rem] -translate-x-1/2 rotate-[30deg]
                     bg-gradient-to-tr from-[#32a85c] to-[#1d4d2b] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold text-green-800 sm:text-5xl">Contact Us</h2>
        <p className="mt-2 text-lg text-gray-600">
          Have a question or feedback? We'd love to hear from you.
        </p>
      </div>

      {/* Content */}
      <div className="mx-auto mt-16 max-w-7xl lg:flex lg:gap-24 sm:mt-20">
        {/* Left Info Section */}
        <div className="lg:w-1/2 space-y-6">
          <h3 className="text-3xl font-semibold text-green-900">Get in Touch</h3>
          <p className="text-gray-600">
            Fill out the form and we’ll get back to you shortly.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Address:</strong> 545 Mavis Island, Chicago, IL 99191</li>
            <li>
              <strong>Phone:</strong>{' '}
              <a href="tel:+15552345678" className="text-green-600 hover:underline">
                +1 (555) 234-5678
              </a>
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:hello@example.com" className="text-green-600 hover:underline">
                hello@example.com
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-16 lg:mt-0 lg:w-1/2 space-y-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-900">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                required
                value={formData.first_name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 px-3.5 py-2 shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-900">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                required
                value={formData.last_name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 px-3.5 py-2 shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 px-3.5 py-2 shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="phone_number" className="block text-sm font-medium text-gray-900">
                Phone Number
              </label>
              <div className="mt-1 flex rounded-md border border-gray-300 overflow-hidden shadow-sm">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="bg-gray-100 px-3 border-none text-gray-600"
                >
                  <option value="IN">IN</option>
                  <option value="US">US</option>
                  <option value="CA">CA</option>
                  <option value="EU">EU</option>
                </select>
                <input
                  type="text"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="flex-1 px-3 py-2 border-none focus:outline-none"
                  placeholder="123-456-7890"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 px-3.5 py-2 shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div className="flex items-center sm:col-span-2">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
              />
              <label htmlFor="agree" className="ml-2 block text-sm text-gray-600">
                I agree to the terms and privacy policy.
              </label>
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full rounded-md bg-green-600 px-3.5 py-2.5 text-white text-sm font-semibold shadow-sm hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
