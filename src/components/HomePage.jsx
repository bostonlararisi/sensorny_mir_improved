import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Image, 
  MessageCircle, 
  ArrowRight,
  Heart,
  Users,
  Target,
  Lightbulb
} from 'lucide-react';

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

const HomePage = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: BookOpen,
      title: t('courses_aba'),
      description: t('courses_aba_desc'),
      link: '/courses',
      linkText: t('start_learning')
    },
    {
      icon: Image,
      title: t('pecs_library'),
      description: t('pecs_library_desc'),
      link: '/pecs',
      linkText: t('open_library')
    },
    {
      icon: MessageCircle,
      title: t('forum'),
      description: t('forum_desc'),
      link: '/forum',
      linkText: t('join_forum')
    }
  ];
  
  return (
    <div className="min-h-screen bg-calm">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('welcome_message')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {t('welcome_description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/courses"
                className="min-h-12 px-8 py-4 text-lg font-medium rounded-lg border-2 border-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white text-blue-600 hover:bg-gray-100 no-underline flex items-center justify-center"
                style={{minWidth: '120px'}}
              >
                {t('get_started')}
              </Link>
              <Link
                to="/pecs"
                className="min-h-12 px-8 py-4 text-lg font-medium rounded-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 no-underline flex items-center justify-center"
                style={{minWidth: '120px'}}
              >
                {t('learn_more')}
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <StatCard
            icon={BookOpen}
            number="10+"
            label={t('stats_courses')}
            color="blue"
          />
          <StatCard
            icon={Image}
            number="500+"
            label={t('stats_pecs')}
            color="green"
          />
          <StatCard
            icon={Users}
            number="3"
            label={t('stats_languages')}
            color="purple"
          />
          <StatCard
            icon={Heart}
            number="100%"
            label={t('stats_free')}
            color="orange"
          />
        </div>
        
        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-high-contrast mb-4">
              {t('what_we_offer')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('platform_description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-high-contrast mb-4">
              {t('why_choose_us')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-high-contrast mb-2">
                  {t('evidence_based')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('evidence_based_desc')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-high-contrast mb-2">
                  {t('community_support')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('community_support_desc')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-high-contrast mb-2">
                  {t('practical_tools')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('practical_tools_desc')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-high-contrast mb-2">
                  {t('multilingual')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('multilingual_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;