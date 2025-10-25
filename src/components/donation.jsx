
import React, { useState } from 'react';

const Donation = () => {
  const [form, setForm] = useState({
    amount: '',
    customAmount: '',
    name: '',
    email: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Select a preset donation amount
  const selectAmount = (value) => {
    setForm((prev) => ({ ...prev, amount: value, customAmount: '' }));
  };

  // Load Razorpay SDK dynamically
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle donation form submission and payment
  const handlePayment = async (e) => {
    e.preventDefault();
    const finalAmount = form.amount || form.customAmount;

    if (!form.name || !form.email || !finalAmount || finalAmount < 1) {
      alert('Please fill in all fields with a valid amount.');
      return;
    }

    const isLoaded = await loadRazorpay();
    if (!isLoaded) {
      alert('Failed to load Razorpay. Please try again later.');
      return;
    }

    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // 🔐 Replace with your actual Razorpay Key ID
      amount: finalAmount * 100,
      currency: 'INR',
      name: 'Hussaini Foundation',
      description: 'Donation Payment',
      image: '/img1.png', // adjust path as needed
      prefill: {
        name: form.name,
        email: form.email,
      },
      handler: async (response) => {
        alert(`Thank you, ${form.name}! Your payment was successful.`);

        try {
          await fetch('http://127.0.0.1:8000/api/donation/donate/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: form.name,
              email: form.email,
              amount: finalAmount,
              payment_id: response.razorpay_payment_id,
            }),
          });
        } catch (error) {
          console.error('Error saving donation:', error);
        }
      },
      theme: { color: '#16a34a' },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 lg:px-24">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-4">Make a Donation</h2>
        <p className="text-center text-gray-600 mb-6">
          Your generous contribution helps us reach more lives.
        </p>

        <form onSubmit={handlePayment} className="space-y-6">
          {/* Preset Amount Buttons */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Choose Amount</label>
            <div className="grid grid-cols-3 gap-3">
              {[100, 500, 1000].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => selectAmount(val)}
                  className={`py-2 px-4 rounded border text-center ${
                    form.amount == val
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 hover:bg-green-100'
                  }`}
                >
                  ₹{val}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Or Enter Custom Amount
            </label>
            <input
              type="number"
              min="1"
              name="customAmount"
              value={form.customAmount}
              onChange={handleChange}
              placeholder="e.g. 250"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Donor Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Donor Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
          >
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donation;
