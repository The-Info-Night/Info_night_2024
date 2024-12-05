import { HumanBody } from "../components/HumanBody";
import { useTheme } from '../context/ThemeContext';

export function Home() {
  const { isDarkMode } = useTheme();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className={`text-4xl font-bold text-center mb-12 transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Explorez le Corps Humain
      </h1>
      <HumanBody />
    </div>
  );
}