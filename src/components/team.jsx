import React from 'react';

const teamMembers = [
  {
    name: 'Ali Hussain',
    role: 'Founder & Director',
    image: './img1.png',
    bio: 'Visionary leader dedicated to empowering the community through compassion and service.',
  },
  {
    name: 'Fatima Zahra',
    role: 'Community Manager',
    image: './img1.png',
    bio: 'Leads our outreach and social campaigns with empathy and strong organizational skills.',
  },
  {
    name: 'Imran Sheikh',
    role: 'Fundraising Lead',
    image: './img1.png',
    bio: 'Passionate about connecting generous donors with impactful causes.',
  },
  {
    name: 'Amina Rizvi',
    role: 'Operations Coordinator',
    image: './img1.png',
    bio: 'Ensures smooth coordination of our daily humanitarian operations.',
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-20 sm:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700">Meet Our Team</h2>
        <p className="mt-3 text-gray-600">
          Dedicated individuals working together to create a better future.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <img
              loading='lazy'
              src={member.image}
              alt={member.name}
              className="w-full h-60 object-cover rounded-t-xl"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-green-800">{member.name}</h3>
              <p className="text-sm text-green-600 font-medium">{member.role}</p>
              <p className="text-sm mt-3 text-gray-600">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
