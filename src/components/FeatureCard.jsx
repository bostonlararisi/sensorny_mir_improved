import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, link, linkText }) => {
  return (
    <div className="card-autism-friendly group hover:scale-105 transition-transform">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-high-contrast">{title}</h3>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>

      <Link
        to={link}
        className="btn-primary flex items-center justify-center space-x-2 w-full text-white no-underline"
      >
        <span>{linkText}</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default FeatureCard;