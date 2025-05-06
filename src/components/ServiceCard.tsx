
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  backgroundImage?: string;
}

const ServiceCard = ({ title, description, icon: Icon, delay = 0, backgroundImage }: ServiceCardProps) => {
  return (
    <div 
      className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-xl group animate-fade-in overflow-hidden relative"
      style={{ animationDelay: `${delay}s` }}
    >
      {backgroundImage && (
        <div className="absolute inset-0 -z-10 opacity-25 group-hover:opacity-35 transition-opacity duration-300">
          <AspectRatio ratio={16/9} className="h-full">
            <img 
              src={backgroundImage} 
              alt="" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      )}
      <div className="bg-accounting-blue-dark/10 p-4 rounded-full inline-block mb-4 group-hover:bg-accounting-blue-dark/20 transition-colors duration-300">
        <Icon className="text-accounting-blue-dark" size={24} />
      </div>
      <h3 className="text-xl font-semibold text-accounting-blue-dark mb-3">{title}</h3>
      <p className="text-accounting-gray">{description}</p>
    </div>
  );
};

export default ServiceCard;
