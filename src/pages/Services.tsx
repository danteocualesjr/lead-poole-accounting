
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
      icon: Calculator
    },
    { 
      title: 'QuickBooks Services', 
      description: 'Setup, training, and support for QuickBooks users.',
      icon: FileText
    },
    { 
      title: 'Payroll', 
      description: 'Full-service payroll processing ensuring accuracy and compliance.',
      icon: Users
    },
    { 
      title: 'Part-Time CFO Services', 
      description: 'Financial expertise without the full-time cost.',
      icon: BriefcaseBusiness
    },
    { 
      title: 'Audits & Reviews', 
      description: 'Professional financial statement audits and reviews.',
      icon: FileCheck
    },
    { 
      title: 'Cash Flow Management', 
      description: 'Strategies to improve and maintain positive cash flow.',
      icon: DollarSign
    },
    { 
      title: 'Business Valuation', 
      description: 'Expert valuation services for your business.',
      icon: BarChart
    },
    { 
      title: 'Strategic Planning', 
      description: 'Develop comprehensive plans for business growth.',
      icon: TrendingUp
    },
    { 
      title: 'New Business Formation', 
      description: 'Guidance on entity selection and business setup.',
      icon: Building
    }
  ];

  const taxServices = [
    { 
      title: 'Tax Preparation', 
      description: 'Individual and business tax return preparation.',
      icon: FileCheck
    },
    { 
      title: 'Tax Planning', 
      description: 'Proactive strategies to minimize your tax liability.',
      icon: Coffee
    },
    { 
      title: 'IRS Audit Representation', 
      description: 'Professional representation during IRS audits.',
      icon: Shield
    },
    { 
      title: 'Back Taxes & Tax Problems', 
      description: 'Solutions for non-filed returns and back taxes owed.',
      icon: FileQuestion
    },
    { 
      title: 'Payroll Tax Issues', 
      description: 'Resolution for payroll tax problems and compliance.',
      icon: CreditCard
    },
    { 
      title: 'IRS Payment Plans', 
      description: 'Negotiate manageable payment plans with the IRS.',
      icon: PieChart
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
