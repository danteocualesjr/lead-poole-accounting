import React from 'react';
import { 
  Calculator, FileCheck, Users, Coffee, Shield, CreditCard, BarChart, PieChart, 
  FileText, Building, TrendingUp, BriefcaseBusiness, FileQuestion, DollarSign
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const businessServices = [
    { 
      title: 'Small Business Accounting', 
      description: 'Comprehensive accounting services tailored to small businesses.',
      icon: Calculator,
      backgroundImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
    },
    { 
      title: 'QuickBooks Services', 
      description: 'Setup, training, and support for QuickBooks users.',
      icon: FileText,
      backgroundImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
    },
    { 
      title: 'Payroll', 
      description: 'Full-service payroll processing ensuring accuracy and compliance.',
      icon: Users,
      backgroundImage: 'https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
    },
    { 
      title: 'Part-Time CFO Services', 
      description: 'Financial expertise without the full-time cost.',
      icon: BriefcaseBusiness,
      backgroundImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
    },
    { 
      title: 'Audits & Reviews', 
      description: 'Professional financial statement audits and reviews.',
      icon: FileCheck,
      backgroundImage: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
    },
    { 
      title: 'Cash Flow Management', 
      description: 'Strategies to improve and maintain positive cash flow.',
      icon: DollarSign,
      backgroundImage: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
    },
    { 
      title: 'Business Valuation', 
      description: 'Expert valuation services for your business.',
      icon: BarChart,
      backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
    },
    { 
      title: 'Strategic Planning', 
      description: 'Develop comprehensive plans for business growth.',
      icon: TrendingUp,
      backgroundImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
    },
    { 
      title: 'New Business Formation', 
      description: 'Guidance on entity selection and business setup.',
      icon: Building,
      backgroundImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
    }
  ];

  const taxServices = [
    { 
      title: 'Tax Preparation', 
      description: 'Individual and business tax return preparation.',
      icon: FileCheck,
      backgroundImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
    },
    { 
      title: 'Tax Planning', 
      description: 'Proactive strategies to minimize your tax liability.',
      icon: Coffee,
      backgroundImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
    },
    { 
      title: 'IRS Audit Representation', 
      description: 'Professional representation during IRS audits.',
      icon: Shield,
      backgroundImage: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
    },
    { 
      title: 'Back Taxes & Tax Problems', 
      description: 'Solutions for non-filed returns and back taxes owed.',
      icon: FileQuestion,
      backgroundImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21ed6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
    },
    { 
      title: 'Payroll Tax Issues', 
      description: 'Resolution for payroll tax problems and compliance.',
      icon: CreditCard,
      backgroundImage: 'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
    },
    { 
      title: 'IRS Payment Plans', 
      description: 'Negotiate manageable payment plans with the IRS.',
      icon: PieChart,
      backgroundImage: 'https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle mx-auto">
            We offer a comprehensive suite of services tailored to meet the needs of various clients.
          </p>
        </div>
        
        {/* Business Services */}
        <div className="mb-20">
          <div className="glass-dark rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Business Services</h2>
            <p className="text-white/80">
              Are you running your business at peak performance? Call on us to increase efficiency, stay in compliance, and boost your revenue and profits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessServices.map((service, index) => (
              <ServiceCard 
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
        
        {/* Tax Services */}
        <div>
          <div className="glass-dark rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Tax Services</h2>
            <p className="text-white/80">
              Don't pay more in taxes than you have to! Take full advantage of all deductions and credits with our tax planning, compliance, and preparation services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {taxServices.map((service, index) => (
              <ServiceCard 
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
