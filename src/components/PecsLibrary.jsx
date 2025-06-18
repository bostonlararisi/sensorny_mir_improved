import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Volume2, Search } from 'lucide-react';
import { pecsData } from '../data/siteData';

const PecsCard = ({ card, onCardClick }) => {
  const { i18n } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  
  const playAudio = (e) => {
    e.stopPropagation();
    // Симуляция воспроизведения аудио
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 1000);
  };
  
  const getCardText = () => {
    return card[i18n.language] || card.ru;
  };
  
  return (
    <div 
      className="pecs-card group"
      onClick={() => onCardClick && onCardClick(card)}
    >
      <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
        {/* Placeholder for image */}
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg flex items-center justify-center">
          <span className="text-white text-2xl font-bold">
            {getCardText().charAt(0)}
          </span>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="font-medium text-lg mb-2 text-high-contrast">
          {getCardText()}
        </h3>
        
        <button 
          onClick={playAudio}
          className={`btn-secondary text-sm flex items-center justify-center space-x-1 mx-auto ${
            isPlaying ? 'opacity-50' : ''
          }`}
          disabled={isPlaying}
        >
          <Volume2 className="w-4 h-4" />
          <span>{isPlaying ? '🔊' : '🔈'}</span>
        </button>
      </div>
    </div>
  );
};

const PecsLibrary = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (card) => {
    setSelectedCards(prev => {
      const isSelected = prev.find(c => c.id === card.id);
      if (isSelected) {
        return prev.filter(c => c.id !== card.id);
      } else {
        return [...prev, card];
      }
    });
  };

  const filteredCards = () => {
    let allCards = [];
    
    pecsData.forEach(category => {
      if (selectedCategory === 'all' || selectedCategory === category.id) {
        allCards = [...allCards, ...category.cards.map(card => ({
          ...card,
          categoryId: category.id
        }))];
      }
    });

    if (searchTerm) {
      allCards = allCards.filter(card => 
        Object.values(card).some(value => 
          typeof value === 'string' && 
          value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    return allCards;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-high-contrast mb-4">
          {t('pecsLibrary_title')}
        </h1>
        
        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={t('search_placeholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-autism-friendly pl-10"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`btn-autism-friendly ${
              selectedCategory === 'all' ? 'btn-primary' : 'btn-secondary'
            }`}
          >
            Все категории
          </button>
          {pecsData.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`btn-autism-friendly ${
                selectedCategory === category.id ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              {t(category.name)}
            </button>
          ))}
        </div>

        {/* Selected Cards Counter */}
        {selectedCards.length > 0 && (
          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
            <p className="text-blue-800 dark:text-blue-200">
              Выбрано карточек: {selectedCards.length}
            </p>
            <button
              onClick={() => setSelectedCards([])}
              className="btn-secondary mt-2"
            >
              Очистить выбор
            </button>
          </div>
        )}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredCards().map(card => (
          <PecsCard
            key={`${card.categoryId}-${card.id}`}
            card={card}
            onCardClick={handleCardClick}
          />
        ))}
      </div>

      {filteredCards().length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            Карточки не найдены. Попробуйте изменить поисковый запрос или категорию.
          </p>
        </div>
      )}
    </div>
  );
};

export default PecsLibrary;

