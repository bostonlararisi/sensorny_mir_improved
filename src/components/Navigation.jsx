import React, { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import { ROUTES } from '../routes';
import {
  Home,
  BookOpen,
  MessageCircle,
  User,
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  LogIn,
  LogOut,
  Settings
} from 'lucide-react';

const Navigation = ({ darkMode, toggleDarkMode }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { path: ROUTES.HOME, label: 'home', icon: Home },
    { path: ROUTES.COURSES, label: 'courses', icon: BookOpen },
    { path: ROUTES.FORUM, label: 'forum', icon: MessageCircle }
  ];

  if (isAdmin) {
    navigationItems.push({ path: ROUTES.ADMIN, label: 'admin', icon: Settings });
  }

  const languages = [
    { code: 'ru', name: 'Русский' },
    { code: 'che', name: 'Нохчийн' },
    { code: 'tt', name: 'Татарча' }
  ];

  const changeLanguage = (langCode) => i18n.changeLanguage(langCode);
  const handleLogout = () => logout();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to={ROUTES.HOME} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">СМ</span>
            </div>
            <span className="text-xl font-bold text-high-contrast">
              {t('page_title')}
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-autism-friendly ${isActive(item.path) ? 'active' : ''}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{t(item.label)}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-2">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label="Выбрать язык">
                  <Globe className="w-5 h-5" />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content className="w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50" sideOffset={5}>
                  {languages.map((lang) => (
                    <DropdownMenu.Item
                      key={lang.code}
                      onSelect={() => changeLanguage(lang.code)}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg outline-none cursor-pointer ${
                        i18n.language === lang.code ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300' : ''
                      }`}
                    >
                      {lang.name}
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label="Переключить тему">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {isAuthenticated ? (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label="Меню пользователя">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {user?.name}
                    </span>
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content className="w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50" sideOffset={5}>
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{user?.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user?.email}</p>
                    </div>
                    <DropdownMenu.Item asChild>
                      <Link to={ROUTES.PROFILE} className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 outline-none cursor-pointer">
                        <User className="w-4 h-4 mr-2" />
                        Профиль
                      </Link>
                    </DropdownMenu.Item>
                    {isAdmin && (
                      <DropdownMenu.Item asChild>
                        <Link to={ROUTES.ADMIN} className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 outline-none cursor-pointer">
                          <Settings className="w-4 h-4 mr-2" />
                          Админ панель
                        </Link>
                      </DropdownMenu.Item>
                    )}
                    <DropdownMenu.Separator className="h-[1px] bg-gray-200 dark:bg-gray-700 my-1" />
                    <DropdownMenu.Item onSelect={handleLogout} className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg outline-none cursor-pointer">
                      <LogOut className="w-4 h-4 mr-2" />
                      Выйти
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            ) : (
              <Link to={ROUTES.LOGIN} className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:block">Войти</span>
              </Link>
            )}

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)} className={`nav-autism-friendly ${isActive(item.path) ? 'active' : ''}`}>
                    <Icon className="w-4 h-4" />
                    <span>{t(item.label)}</span>
                  </Link>
                );
              })}
              {isAuthenticated ? (
                <>
                  <Link to={ROUTES.PROFILE} onClick={() => setIsMenuOpen(false)} className="nav-autism-friendly">
                    <User className="w-4 h-4" />
                    <span>Профиль</span>
                  </Link>
                  <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="nav-autism-friendly text-red-600 dark:text-red-400">
                    <LogOut className="w-4 h-4" />
                    <span>Выйти</span>
                  </button>
                </>
              ) : (
                <Link to={ROUTES.LOGIN} onClick={() => setIsMenuOpen(false)} className="nav-autism-friendly text-blue-600 dark:text-blue-400">
                  <LogIn className="w-4 h-4" />
                  <span>Войти</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
