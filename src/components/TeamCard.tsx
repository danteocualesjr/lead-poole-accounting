
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamCardProps {
  name: string;
  title: string;
  delay?: number;
  photoUrl?: string;
}

const TeamCard = ({ name, title, delay = 0, photoUrl }: TeamCardProps) => {
  return (
    <div 
      className="glass rounded-xl p-6 text-center transition-all duration-300 hover:shadow-xl animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      {photoUrl ? (
        <Avatar className="w-24 h-24 mx-auto mb-4">
          <AvatarImage src={photoUrl} alt={name} className="object-cover" />
          <AvatarFallback className="bg-accounting-gray-light text-2xl font-bold text-accounting-blue-dark">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
      ) : (
        <div className="w-24 h-24 bg-accounting-gray-light rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl font-bold text-accounting-blue-dark">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
      )}
      <h3 className="text-xl font-semibold text-accounting-blue-dark mb-1">{name}</h3>
      <p className="text-accounting-gray">{title}</p>
    </div>
  );
};

export default TeamCard;
