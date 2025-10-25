import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-16 sm:py-24 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-green-700 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to making a difference in the lives of those who need it most.
          </p>
        </div>

        {/* Image + Text Section */}
        <div className="lg:flex lg:items-center lg:space-x-10">
          <img
            src="/img1.png"
            alt="Our Team"
            className="w-full lg:w-1/2 rounded-xl shadow-md mb-8 lg:mb-0"
          />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Who We Are</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hussaini Foundation is a nonprofit organization working toward uplifting communities through education, healthcare, and humanitarian aid. We believe in equal opportunity, compassion, and creating long-term impact.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Since our inception, we have helped thousands with your support. From providing food and water to running education campaigns, we strive to bring hope and sustainability to every life we touch.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-green-50 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-green-700 mb-2">Our Mission</h4>
            <p className="text-gray-700">
              To serve humanity through compassion, education, and sustainable development programs that empower communities.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-green-700 mb-2">Our Vision</h4>
            <p className="text-gray-700">
              A world where every person has access to basic human rights and opportunities to thrive.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-green-700 mb-2">Our Values</h4>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Compassion</li>
              <li>Transparency</li>
              <li>Service</li>
              <li>Community</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

