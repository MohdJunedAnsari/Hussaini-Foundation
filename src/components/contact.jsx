// import { ChevronDownIcon } from '@heroicons/react/16/solid'

// export default function Contact() {
//   return (
//     <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
//       <div
//         aria-hidden="true"
//         className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//       >
//         <div
//           style={{
//             clipPath:
//               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//           }}
//           className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
//         />
//       </div>
//       <div className="mx-auto max-w-2xl text-center">
//         <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact</h2>
//         <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
//       </div>
//       {/* sidebar */}
//       <div className='lg:flex'>
//         <div className="lg:w-[50%]">
//           <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Get in touch</h1>
//           <p className="mt-2 text-lg/8 text-gray-600">Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.</p>
//           <ul>
//             <li><a href="#">545 Mavis Island
// Chicago, IL 99191</a></li>
//             <li><a href="#">
// +1 (555) 234-5678</a></li>
//             <li><a href="#">hello@example.com</a></li>
//           </ul>
//         </div>
//       <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20 lg:w-[50%]">
//         <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//           <div>
//             <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
//               First name
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="first-name"
//                 name="first-name"
//                 type="text"
//                 autoComplete="given-name"
//                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//               />
//             </div>
//           </div>
//           <div>
//             <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
//               Last name
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="last-name"
//                 name="last-name"
//                 type="text"
//                 autoComplete="family-name"
//                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//               />
//             </div>
//           </div>
          
//           <div className="sm:col-span-2">
//             <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
//               Email
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//               />
//             </div>
//           </div>
//           <div className="sm:col-span-2">
//             <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
//               Phone number
//             </label>
//             <div className="mt-2.5">
//               <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
//                 <div className="grid shrink-0 grid-cols-1 focus-within:relative">
//                   <select
//                     id="country"
//                     name="country"
//                     autoComplete="country"
//                     aria-label="Country"
//                     className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                   >
//                     <option>US</option>
//                     <option>CA</option>
//                     <option>EU</option>
//                   </select>
//                   <ChevronDownIcon
//                     aria-hidden="true"
//                     className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
//                   />
//                 </div>
//                 <input
//                   id="phone-number"
//                   name="phone-number"
//                   type="text"
//                   placeholder="123-456-7890"
//                   className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="sm:col-span-2">
//             <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
//               Message
//             </label>
//             <div className="mt-2.5">
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={4}
//                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//                 defaultValue={''}
//               />
//             </div>
//           </div>
//           <div className="flex gap-x-4 sm:col-span-2">
//             <div className="flex h-6 items-center">
//               <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
//                 <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
//                 <input
//                   id="agree-to-policies"
//                   name="agree-to-policies"
//                   type="checkbox"
//                   aria-label="Agree to policies"
//                   className="absolute inset-0 appearance-none focus:outline-hidden"
//                 />
//               </div>
//             </div>
//             <label htmlFor="agree-to-policies" className="text-sm/6 text-gray-600">
//               By selecting this, you agree to our{' '}
//               <a href="#" className="font-semibold whitespace-nowrap text-indigo-600">
//                 privacy policy
//               </a>
//               .
//             </label>
//           </div>
//         </div>
//         <div className="mt-10">
//           <button
//             type="submit"
//             className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             Let's talk
//           </button>
//         </div>
//       </form>
//       </div>
//     </div>
//   )
// }


// import { ChevronDownIcon } from '@heroicons/react/24/solid';

// export default function Contact() {
//   return (
//     <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
//       {/* Background blur blob */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//       >
//         <div
//           style={{
//             clipPath:
//               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//           }}
//           className="relative left-1/2 -z-10 aspect-[1155/678] w-[72.875rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
//         />
//       </div>

//       {/* Header */}
//       <div className="mx-auto max-w-2xl text-center">
//         <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Contact</h2>
//         <p className="mt-2 text-lg text-gray-600">
//           Aute magna irure deserunt veniam aliqua magna enim voluptate.
//         </p>
//       </div>

//       {/* Main content: Sidebar + Form */}
//       <div className="mx-auto mt-16 max-w-7xl lg:flex lg:gap-24 sm:mt-20">
//         {/* Sidebar */}
//         <div className="lg:w-1/2 space-y-6">
//           <h3 className="text-3xl font-semibold text-gray-900">Get in touch</h3>
//           <p className="text-gray-600">
//             Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut
//             tincidunt integer elementum id sem. Arcu sed malesuada et magna.
//           </p>
//           <ul className="space-y-2 text-gray-700">
//             <li>
//               <strong>Address:</strong> 545 Mavis Island, Chicago, IL 99191
//             </li>
//             <li>
//               <strong>Phone:</strong>{' '}
//               <a href="tel:+15552345678" className="text-indigo-600">
//                 +1 (555) 234-5678
//               </a>
//             </li>
//             <li>
//               <strong>Email:</strong>{' '}
//               <a href="mailto:hello@example.com" className="text-indigo-600">
//                 hello@example.com
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Form */}
//         <form action="#" method="POST" className="mt-16 lg:mt-0 lg:w-1/2 space-y-6">
//           <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//             <div>
//               <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
//                 First name
//               </label>
//               <input
//                 id="first-name"
//                 name="first-name"
//                 type="text"
//                 required
//                 autoComplete="given-name"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div>

//             <div>
//               <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
//                 Last name
//               </label>
//               <input
//                 id="last-name"
//                 name="last-name"
//                 type="text"
//                 required
//                 autoComplete="family-name"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-900">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 autoComplete="email"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="phone-number" className="block text-sm font-medium text-gray-900">
//                 Phone number
//               </label>
//               <div className="mt-1 flex rounded-md shadow-sm border border-gray-300">
//                 <div className="relative">
//                   <select
//                     id="country"
//                     name="country"
//                     autoComplete="country"
//                     className="h-full rounded-l-md border-transparent bg-transparent py-2 pl-3 pr-8 text-base text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   >
//                     <option>US</option>
//                     <option>CA</option>
//                     <option>EU</option>
//                     <option>IN</option>
//                   </select>
//                   <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
//                     {/* <ChevronDownIcon className="h-5 w-5 text-gray-400" /> */}
//                   </div>
//                 </div>
//                 <input
//                   id="phone-number"
//                   name="phone-number"
//                   type="text"
//                   placeholder="123-456-7890"
//                   className="flex-1 rounded-r-md border-0 py-2 px-3 text-gray-900 focus:outline-none"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="message" className="block text-sm font-medium text-gray-900">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={4}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div>

//             <div className="flex items-center sm:col-span-2">
//               <input
//                 id="agree"
//                 name="agree"
//                 type="checkbox"
//                 required
//                 className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
//               />
//               <label htmlFor="agree" className="ml-2 block text-sm text-gray-600">
//                 By submitting, you agree to our{' '}
//                 <a href="#" className="font-semibold text-indigo-600">
//                   privacy policy
//                 </a>
//                 .
//               </label>
//             </div>
//           </div>

//           <div className="pt-6">
//             <button
//               type="submit"
//               className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
//             >
//               Let's talk
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


// import { ChevronDownIcon } from '@heroicons/react/24/solid';

// export default function Contact() {
//   return (
//     <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
//       {/* Background Blur Blob */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//       >
//         <div
//           style={{
//             clipPath:
//               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//           }}
//           className="relative left-1/2 -z-10 aspect-[1155/678] w-[72.875rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#32a85c] to-[#1d4d2b] opacity-20"
//         />
//       </div>

//       {/* Header */}
//       <div className="mx-auto max-w-2xl text-center">
//         <h2 className="text-4xl font-bold tracking-tight text-green-800 sm:text-5xl">Contact Us</h2>
//         <p className="mt-2 text-lg text-gray-600">
//           We're here to answer your questions. Reach out and we’ll respond as soon as we can.
//         </p>
//       </div>

//       {/* Main content */}
//       <div className="mx-auto mt-16 max-w-7xl lg:flex lg:gap-24 sm:mt-20">
//         {/* Sidebar */}
//         <div className="lg:w-1/2 space-y-6">
//           <h3 className="text-3xl font-semibold text-green-900">Get in touch</h3>
//           <p className="text-gray-600">
//             Whether you have a question, feedback, or just want to say hello — we’d love to hear from you.
//           </p>
//           <ul className="space-y-2 text-gray-700">
//             <li>
//               <strong>Address:</strong> 545 Mavis Island, Chicago, IL 99191
//             </li>
//             <li>
//               <strong>Phone:</strong>{' '}
//               <a href="tel:+15552345678" className="text-green-600 hover:underline">
//                 +1 (555) 234-5678
//               </a>
//             </li>
//             <li>
//               <strong>Email:</strong>{' '}
//               <a href="mailto:hello@example.com" className="text-green-600 hover:underline">
//                 hello@example.com
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Form */}
//         <form action="#" method="POST" className="mt-16 lg:mt-0 lg:w-1/2 space-y-6">
//           <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//             <div>
//               <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
//                 First name
//               </label>
//               <input
//                 id="first-name"
//                 name="first-name"
//                 type="text"
//                 required
//                 autoComplete="given-name"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>

//             <div>
//               <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
//                 Last name
//               </label>
//               <input
//                 id="last-name"
//                 name="last-name"
//                 type="text"
//                 required
//                 autoComplete="family-name"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-900">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 autoComplete="email"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="phone-number" className="block text-sm font-medium text-gray-900">
//                 Phone number
//               </label>
//               <div className="mt-1 flex rounded-md shadow-sm border border-gray-300 overflow-hidden">
//                 <select
//                   id="country"
//                   name="country"
//                   autoComplete="country"
//                   className="h-full border-none bg-gray-100 py-2 pl-3 pr-7 text-gray-500 focus:ring-green-500"
//                 >
//                   <option>IN</option>
//                   <option>US</option>
//                   <option>CA</option>
//                   <option>EU</option>
//                 </select>
//                 <input
//                   id="phone-number"
//                   name="phone-number"
//                   type="text"
//                   placeholder="123-456-7890"
//                   className="flex-1 border-none py-2 px-3 text-gray-900 focus:outline-none"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="message" className="block text-sm font-medium text-gray-900">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={4}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>

//             <div className="flex items-center sm:col-span-2">
//               <input
//                 id="agree"
//                 name="agree"
//                 type="checkbox"
//                 required
//                 className="h-4 w-4 text-green-600 border-gray-300 rounded"
//               />
//               <label htmlFor="agree" className="ml-2 block text-sm text-gray-600">
//                 By submitting, you agree to our{' '}
//                 {/* <a href="#" className="font-semibold text-green-600 underline">
//                   privacy policy
//                 </a> */}
//                 .
//               </label>
//             </div>
//           </div>

//           <div className="pt-6">
//             <button
//               type="submit"
//               className="w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


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
