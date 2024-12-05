import React, { useEffect, useState } from 'react';
import { Cloud, Thermometer, Wind, Droplets, Sun, CloudRain, CloudSnow, CloudLightning } from 'lucide-react';
import { getWeatherData } from '../services/weatherService';
import { HumidityChart } from '../components/Weather/HumidityChart';
import { WindRose } from '../components/Weather/WindRose';
import type { WeatherData } from '../types/weather';

function getWeatherIcon(description: string) {
  if (description.includes('Ciel dégagé')) return Sun;
  if (description.includes('Pluie')) return CloudRain;
  if (description.includes('Neige')) return CloudSnow;
  if (description.includes('Orage')) return CloudLightning;
  return Cloud;
}

function getWeatherAnimation(description: string) {
  if (description.includes('Ciel dégagé')) return 'animate-sun';
  if (description.includes('Pluie')) return 'animate-rain';
  if (description.includes('Neige')) return 'animate-snow';
  if (description.includes('Orage')) return 'animate-lightning';
  return 'animate-float';
}

function getWeatherGradient(temperature: number) {
  if (temperature > 30) return 'bg-gradient-to-br from-red-500 to-orange-500';
  if (temperature > 20) return 'bg-gradient-to-br from-orange-400 to-yellow-500';
  if (temperature > 10) return 'bg-gradient-to-br from-blue-400 to-green-500';
  return 'bg-gradient-to-br from-blue-600 to-blue-400';
}

export function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const data = await getWeatherData();
        setWeather(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-32 w-32 border-8 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 text-center">
        <div className="bg-red-50 dark:bg-red-900 rounded-lg p-8 transform hover:scale-105 transition-all duration-300">
          <p className="text-red-600 dark:text-red-200 text-xl">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  if (!weather) return null;

  const WeatherIcon = getWeatherIcon(weather.description);
  const weatherAnimation = getWeatherAnimation(weather.description);
  const gradient = getWeatherGradient(weather.temperature);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className={`rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ${gradient}`}>
        <div className="backdrop-blur-sm bg-white/10 p-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="flex items-center mb-8 md:mb-0">
              <div className={`${weatherAnimation} p-4`}>
                <WeatherIcon className="w-24 h-24 text-white" />
              </div>
              <div className="ml-6">
                <h1 className="text-6xl font-bold text-white mb-2">
                  {weather.temperature}°C
                </h1>
                <p className="text-2xl text-white/90">
                  {weather.description}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg text-white/80">
                Mis à jour à {new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4 p-6 bg-white/20 rounded-xl backdrop-blur-md">
                <Thermometer className="w-12 h-12 text-white" />
                <div>
                  <p className="text-lg text-white/80">Température ressentie</p>
                  <p className="text-3xl font-semibold text-white">
                    {weather.temperature}°C
                  </p>
                </div>
              </div>
            </div>

            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4 p-6 bg-white/20 rounded-xl backdrop-blur-md">
                <Droplets className="w-12 h-12 text-white animate-bounce" />
                <div>
                  <p className="text-lg text-white/80">Humidité</p>
                  <p className="text-3xl font-semibold text-white">
                    {weather.humidity}%
                  </p>
                </div>
              </div>
            </div>

            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4 p-6 bg-white/20 rounded-xl backdrop-blur-md">
                <Wind className="w-12 h-12 text-white animate-pulse" />
                <div>
                  <p className="text-lg text-white/80">Vent</p>
                  <p className="text-3xl font-semibold text-white">
                    {weather.windSpeed} km/h
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <HumidityChart humidity={weather.humidity} />
            <WindRose windSpeed={weather.windSpeed} />
          </div>
        </div>
      </div>
    </div>
  );
}