// import React, { useState } from 'react';

// const Donation = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     amount: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement('script');
//       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();

//     const res = await loadRazorpayScript();
//     if (!res) {
//       alert('Razorpay SDK failed to load.');
//       return;
//     }

//     const options = {
//       key: 'YOUR_RAZORPAY_KEY_ID', // 🔁 Replace with your Razorpay Key ID
//       amount: formData.amount * 100, // Amount in paise
//       currency: 'INR',
//       name: 'Hussaini Foundation',
//       description: 'Donation',
//       image: './img1.png',
//       handler: function (response) {
//         alert(`Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);
//         // ✅ Optional: POST response to backend to verify
//       },
//       prefill: {
//         name: formData.name,
//         email: formData.email,
//       },
//       notes: {
//         donation_for: 'Charity',
//       },
//       theme: {
//         color: '#22c55e', // Tailwind green-500
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
//       <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-md">
//         <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Make a Donation</h2>
//         <form onSubmit={handlePayment} className="space-y-5">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Donation Amount (₹)</label>
//             <input
//               type="number"
//               name="amount"
//               id="amount"
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition"
//           >
//             Donate Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Donation;


// import React, { useState } from 'react';

// const Donation = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     amount: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Payment logic will go here (Razorpay / Stripe)
//     console.log('Donating:', formData);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
//       <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-md">
//         <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Make a Donation</h2>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Donation Amount (₹)</label>
//             <input
//               type="number"
//               name="amount"
//               id="amount"
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition"
//           >
//             Donate Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Donation;


// import React, { useState } from 'react';

// const Donation = () => {
//   const [amount, setAmount] = useState('');
//   const [customAmount, setCustomAmount] = useState('');

//   const handleAmountChange = (value) => {
//     setAmount(value);
//     setCustomAmount('');
//   };

//   const handleCustomAmountChange = (e) => {
//     setAmount('');
//     setCustomAmount(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const donationValue = amount || customAmount;
//     alert(`Thank you for donating ₹${donationValue}`);
//     // Here you would send the data to your backend or payment gateway
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-24">
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Make a Donation</h2>
//         <p className="text-center text-gray-600 mb-8">
//           Your generous support helps us continue our mission and serve those in need.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Select Amount</label>
//             <div className="grid grid-cols-3 gap-4">
//               {[100, 500, 1000].map((val) => (
//                 <button
//                   key={val}
//                   type="button"
//                   onClick={() => handleAmountChange(val)}
//                   className={`py-2 px-4 rounded border text-center ${
//                     amount === val
//                       ? 'bg-green-600 text-white'
//                       : 'bg-gray-100 hover:bg-green-100'
//                   }`}
//                 >
//                   ₹{val}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div>
//             <label htmlFor="custom" className="block text-sm font-medium text-gray-700 mb-1">
//               Or Enter Custom Amount
//             </label>
//             <input
//               id="custom"
//               type="number"
//               min="1"
//               value={customAmount}
//               onChange={handleCustomAmountChange}
//               placeholder="e.g. 250"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//               Your Name
//             </label>
//             <input
//               id="name"
//               type="text"
//               required
//               placeholder="Full Name"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               id="email"
//               type="email"
//               required
//               placeholder="you@example.com"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
//           >
//             Donate Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Donation;


// import React, { useState } from 'react';

// const Donation = () => {
//   const [amount, setAmount] = useState('');
//   const [customAmount, setCustomAmount] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleAmountChange = (value) => {
//     setAmount(value);
//     setCustomAmount('');
//   };

//   const handleCustomAmountChange = (e) => {
//     setAmount('');
//     setCustomAmount(e.target.value);
//   };

//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement('script');
//       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     const finalAmount = amount || customAmount;
//     if (!finalAmount || finalAmount < 1) {
//       alert('Please enter a valid donation amount.');
//       return;
//     }

//     const res = await loadRazorpayScript();
//     if (!res) {
//       alert('Razorpay SDK failed to load.');
//       return;
//     }

//     const options = {
//       key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your key ID
//       amount: finalAmount * 100, // Amount in paise
//       currency: 'INR',
//       name: 'Hussaini Foundation',
//       description: 'Donation Payment',
//       image: './img1.png',
//       handler: function (response) {
//         alert(`Thank you, ${name}! Payment Successful.\nPayment ID: ${response.razorpay_payment_id}`);
//         // Here you can send `response`, `name`, `email`, and `finalAmount` to your backend
//       },
//       prefill: {
//         name,
//         email,
//       },
//       theme: {
//         color: '#16a34a', // Tailwind green-600
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-24">
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg ">
//         <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Make a Donation</h2>
//         <p className="text-center text-gray-600 mb-8">
//           Your generous support helps us continue our mission and serve those in need.
//         </p>

//         <form onSubmit={handlePayment} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Select Amount</label>
//             <div className="grid grid-cols-3 gap-4">
//               {[100, 500, 1000].map((val) => (
//                 <button
//                   key={val}
//                   type="button"
//                   onClick={() => handleAmountChange(val)}
//                   className={`py-2 px-4 rounded border text-center ${
//                     amount == val
//                       ? 'bg-green-600 text-white'
//                       : 'bg-gray-100 hover:bg-green-100'
//                   }`}
//                 >
//                   ₹{val}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div>
//             <label htmlFor="custom" className="block text-sm font-medium text-gray-700 mb-1">
//               Or Enter Custom Amount
//             </label>
//             <input
//               id="custom"
//               type="number"
//               min="1"
//               value={customAmount}
//               onChange={handleCustomAmountChange}
//               placeholder="e.g. 250"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//               Your Name
//             </label>
//             <input
//               id="name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               placeholder="Full Name"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               placeholder="you@example.com"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
//           >
//             Donate Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Donation;


// import React, { useState } from 'react';

// const Donation = () => {
//   const [form, setForm] = useState({
//     amount: '',
//     customAmount: '',
//     name: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const selectAmount = (value) => {
//     setForm((prev) => ({ ...prev, amount: value, customAmount: '' }));
//   };

//   const loadRazorpay = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement('script');
//       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     const finalAmount = form.amount || form.customAmount;

//     if (!form.name || !form.email || !finalAmount || finalAmount < 1) {
//       alert('Please fill all fields and enter a valid amount.');
//       return;
//     }

//     const isLoaded = await loadRazorpay();
//     if (!isLoaded) {
//       alert('Razorpay SDK failed to load.');
//       return;
//     }

//     const options = {
//       key: 'YOUR_RAZORPAY_KEY_ID', // 🔐 Replace with actual Razorpay key
//       amount: finalAmount * 100,
//       currency: 'INR',
//       name: 'Hussaini Foundation',
//       description: 'Donation Payment',
//       image: './img1.png',
//       prefill: {
//         name: form.name,
//         email: form.email,
//       },
//       handler: async (response) => {
//         alert(`Thank you, ${form.name}! Payment successful.`);

//         // Save donation to backend
//         try {
//           await fetch('http://127.0.0.1:8000/api/donation/donate/', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//               name: form.name,
//               email: form.email,
//               amount: finalAmount,
//               payment_id: response.razorpay_payment_id,
//             }),
//           });
//         } catch (error) {
//           console.error('Failed to save donation:', error);
//         }
//       },
//       theme: { color: '#16a34a' },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-6 lg:px-24">
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
//         <h2 className="text-3xl font-bold text-center text-green-700 mb-4">Make a Donation</h2>
//         <p className="text-center text-gray-600 mb-6">
//           Your contribution helps us make a difference.
//         </p>

//         <form onSubmit={handlePayment} className="space-y-6">
//           {/* Preset Amount */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Choose Amount</label>
//             <div className="grid grid-cols-3 gap-3">
//               {[100, 500, 1000].map((val) => (
//                 <button
//                   key={val}
//                   type="button"
//                   onClick={() => selectAmount(val)}
//                   className={`py-2 px-4 rounded border ${
//                     form.amount == val
//                       ? 'bg-green-600 text-white'
//                       : 'bg-gray-100 hover:bg-green-100'
//                   }`}
//                 >
//                   ₹{val}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Custom Amount */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Or Enter Custom Amount
//             </label>
//             <input
//               type="number"
//               min="1"
//               name="customAmount"
//               value={form.customAmount}
//               onChange={handleChange}
//               placeholder="e.g. 250"
//               className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               placeholder="Full Name"
//               className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               placeholder="you@example.com"
//               className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
//           >
//             Donate Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Donation;



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
