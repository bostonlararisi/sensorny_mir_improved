import React from 'react';

const StatCard = ({ icon: Icon, number, label, color = "blue" }) => {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600"
  };

  return (
    <div className="card-autism-friendly text-center">
      <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[color]} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-3xl font-bold text-high-contrast mb-2">{number}</div>
      <div className="text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  );
};

export default StatCard;