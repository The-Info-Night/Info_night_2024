import { useTheme } from '../context/ThemeContext';

export function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'} shadow-md mt-auto`}>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>© 2024 DeepLife</p>
        </div>
      </div>
    </footer>
  );
}