import { ChaosHumanBody } from '../components/ChaosHumanBody';
import { useTheme } from '../context/ThemeContext';

export function ChaosHome() {
  const { isDarkMode } = useTheme();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className={`text-4xl text-center mb-12 transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-gray-900'} font-happy-christmas`}>
        Explorez le Corps Humain
      </h1>
      <ChaosHumanBody />
    </div>
  );
}