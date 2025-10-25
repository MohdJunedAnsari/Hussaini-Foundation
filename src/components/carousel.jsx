
// import React, { useEffect, useRef, useState } from "react";

// const slides = [
//   {
//     img: "./img1.png",
//     title: "Welcome to My Carousel",
//     description: "This is a beautiful responsive carousel made with React + Tailwind.",
//     buttonText: "Learn More",
//   },
//   {
//     img: "./img1.png",
//     title: "Slide Two Title",
//     description: "Every slide can have its own text and CTA.",
//     buttonText: "Explore",
//   },
//   {
//     img: "./img1.png",
//     title: "Another Great Slide",
//     description: "Fast, smooth and mobile-friendly!",
//     buttonText: "Get Started",
//   },
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slideTimeout = useRef(null);
//   const touchStartX = useRef(null);
//   const touchEndX = useRef(null);
//   const totalSlides = slides.length;

//   const goToSlide = (index) => setCurrentIndex(index);
//   const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
//   const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

//   // Autoplay functionality
//   useEffect(() => {
//     const startAutoSlide = () => {
//       slideTimeout.current = setTimeout(() => nextSlide(), 4000);
//     };

//     startAutoSlide();
//     return () => clearTimeout(slideTimeout.current);
//   }, [currentIndex]);

//   // Swipe detection
//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e) => {
//     touchEndX.current = e.changedTouches[0].clientX;
//     const delta = touchStartX.current - touchEndX.current;
//     if (delta > 50) nextSlide();       // Swipe left
//     else if (delta < -50) prevSlide(); // Swipe right
//   };

//   return (
//     <div
//       className="relative w-full"
//       onMouseEnter={() => clearTimeout(slideTimeout.current)}
//       onMouseLeave={() => (slideTimeout.current = setTimeout(() => nextSlide(), 4000))}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* Slides */}
//       <div className="relative h-96 lg:h-[87vh] overflow-hidden rounded-lg">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//               currentIndex === index ? "opacity-100 z-20" : "opacity-0 z-10"
//             }`}
//           >
//             <img
//               src={slide.img}
//               alt={slide.title}
//               className="w-full h-full object-contain"
//             />
//             {/* Overlay Text */}
//             <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-6">
//               <h2 className="text-xl md:text-4xl font-bold">{slide.title}</h2>
//               <p className="mt-2 text-base md:text-lg">{slide.description}</p>
//               <button className="mt-4 px-5 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition">
//                 {slide.buttonText}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Indicators */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             aria-label={`Go to slide ${index + 1}`}
//             className={`w-3 h-3 rounded-full transition-colors ${
//               index === currentIndex ? "bg-white" : "bg-gray-500"
//             }`}
//             onClick={() => goToSlide(index)}
//           ></button>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 -translate-y-1/2 z-30 group"
//         aria-label="Previous Slide"
//       >
//         <span className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center group-hover:bg-white/60 transition">
//           <svg className="w-4 h-4 text-white" viewBox="0 0 6 10" fill="none">
//             <path d="M5 1 1 5l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </span>
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 -translate-y-1/2 z-30 group"
//         aria-label="Next Slide"
//       >
//         <span className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center group-hover:bg-white/60 transition">
//           <svg className="w-4 h-4 text-white" viewBox="0 0 6 10" fill="none">
//             <path d="m1 9 4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </span>
//       </button>
//     </div>
//   );
// };

// export default Carousel;

import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    img: "https://media.istockphoto.com/id/1331669431/photo/human-hands-holding-together-closeup.jpg?s=2048x2048&w=is&k=20&c=rIncxvnHAljM32X2K335OqH1DqtCnycRFaUJ7T6TFlI=", // Replace with your own image if needed
    // img:"img1.png",
    title: "Empowering Communities Through Compassion",
    description: "Join hands with Hussaini Foundation to support food drives, education, and medical aid.",
    buttonText: "Get Involved",
  },
  {
    img: "https://media.istockphoto.com/id/1343472952/photo/happy-school-girls-walking-together-in-a-school-corridor-while-talking-to-each-other.jpg?s=2048x2048&w=is&k=20&c=9JrvWTDnXr9trFlkf-R9ig97b8AnB-3IlU4OE24jQm8=",
    // img:"img1.png",
    title: "Education for Every Child",
    description: "We believe in nurturing young minds through accessible learning opportunities.",
    buttonText: "Sponsor Education",
  },
  {
    img: "https://media.istockphoto.com/id/1220522816/photo/elderly-woman-pouring-pills-from-bottle-on-hand-top-view.jpg?s=2048x2048&w=is&k=20&c=nzE9S5rmLM8irrrAYluG8YTz6MJYDYhr3Bk-wklshT4=",
    // img:"img1.png",
    title: "Healthcare Access for All",
    description: "Bringing critical medical support to underprivileged communities.",
    buttonText: "Donate Now",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideTimeout = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const totalSlides = slides.length;

  const goToSlide = (index) => setCurrentIndex(index);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  // Autoplay functionality
  useEffect(() => {
    const startAutoSlide = () => {
      slideTimeout.current = setTimeout(() => nextSlide(), 5000);
    };

    startAutoSlide();
    return () => clearTimeout(slideTimeout.current);
  }, [currentIndex]);

  // Swipe detection
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchStartX.current - touchEndX.current;
    if (delta > 50) nextSlide();       // Swipe left
    else if (delta < -50) prevSlide(); // Swipe right
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => clearTimeout(slideTimeout.current)}
      onMouseLeave={() => (slideTimeout.current = setTimeout(() => nextSlide(), 5000))}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="relative h-96 lg:h-[87vh] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentIndex === index ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <img
              loading="lazy"
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-6">
              <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
              <p className="mt-2 text-base md:text-lg max-w-xl">{slide.description}</p>
              <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-30 group"
        aria-label="Previous Slide"
      >
        <span className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center group-hover:bg-white/60 transition">
          <svg className="w-4 h-4 text-white" viewBox="0 0 6 10" fill="none">
            <path d="M5 1 1 5l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-30 group"
        aria-label="Next Slide"
      >
        <span className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center group-hover:bg-white/60 transition">
          <svg className="w-4 h-4 text-white" viewBox="0 0 6 10" fill="none">
            <path d="m1 9 4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
