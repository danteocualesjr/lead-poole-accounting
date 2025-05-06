
import React from 'react';
import TeamCard from '../components/TeamCard';

const Team = () => {
  const teamMembers = [
    { name: 'Justin Poole, CPA', title: 'President' },
    { name: 'Leoni Berlin', title: 'Senior Accountant' },
    { name: 'Barbara Hagelgans, CPA, MBA', title: 'Senior Accountant' },
    { name: 'Cate Gillen, CPA, MBA', title: 'Staff Accountant' },
    { name: 'Linda Cifizzari', title: 'Staff Accountant' },
    { name: 'Mary Pochron', title: 'Staff Accountant' },
    { name: 'Heather Rhodes', title: 'Staff Accountant' },
    { name: 'Craig Jocius', title: 'Bookkeeper' },
    { name: 'Erin Poole', title: 'Firm Administrator' },
    { name: 'Laurie Myers', title: 'Staff Accountant' },
    { name: 'Jessica Grusholt', title: 'Bookkeeper, Notary Public – State of Maryland' },
    { name: 'Kim Horn', title: 'Administrative Professional' },
    { name: 'Jordyn Sumter', title: 'Receptionist' }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="section-title">Our Team</h1>
          <p className="section-subtitle mx-auto">
            The team at Poole Accounting comprises experienced professionals dedicated to providing exceptional accounting services.
          </p>
          <div className="glass inline-block px-6 py-2 rounded-full text-accounting-blue-dark mt-2">
            All our CPA's hold valid MD CPA certificates.
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard 
              key={member.name}
              name={member.name}
              title={member.title}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
