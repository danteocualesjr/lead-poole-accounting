
import React from 'react';
import TeamCard from '../components/TeamCard';

const Team = () => {
  const teamMembers = [
    { 
      name: 'Justin Poole, CPA', 
      title: 'President',
      photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    { 
      name: 'Leoni Berlin', 
      title: 'Senior Accountant',
      photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    { 
      name: 'Barbara Hagelgans, CPA, MBA', 
      title: 'Senior Accountant',
      photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    { 
      name: 'Cate Gillen, CPA, MBA', 
      title: 'Staff Accountant',
      photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    { 
      name: 'Linda Cifizzari', 
      title: 'Staff Accountant',
      photoUrl: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    { 
      name: 'Mary Pochron', 
      title: 'Staff Accountant',
      photoUrl: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    { 
      name: 'Heather Rhodes', 
      title: 'Staff Accountant',
      photoUrl: 'https://images.unsplash.com/photo-1584361853901-dd1904bb7987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    { 
      name: 'Craig Jocius', 
      title: 'Bookkeeper',
      photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    { 
      name: 'Erin Poole', 
      title: 'Firm Administrator',
      photoUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    { 
      name: 'Laurie Myers', 
      title: 'Staff Accountant',
      photoUrl: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    { 
      name: 'Jessica Grusholt', 
      title: 'Bookkeeper, Notary Public – State of Maryland',
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    { 
      name: 'Kim Horn', 
      title: 'Administrative Professional',
      photoUrl: 'https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    { 
      name: 'Jordyn Sumter', 
      title: 'Receptionist',
      photoUrl: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }
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
              photoUrl={member.photoUrl}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
