import { WeatherData } from '../types/weather';

export async function getCurrentLocation(): Promise<GeolocationCoordinates> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('La géolocalisation n\'est pas supportée par votre navigateur'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position.coords),
      (error) => {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            reject(new Error('Veuillez autoriser l\'accès à votre position'));
            break;
          case error.POSITION_UNAVAILABLE:
            reject(new Error('Information de localisation indisponible'));
            break;
          case error.TIMEOUT:
            reject(new Error('Délai d\'attente dépassé pour obtenir la position'));
            break;
          default:
            reject(new Error('Une erreur inconnue est survenue'));
        }
      }
    );
  });
}

export async function getWeatherData(): Promise<WeatherData> {
  try {
    const coords = await getCurrentLocation();
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
    );
    
    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    
    const weatherDescriptions: { [key: number]: string } = {
      0: 'Ciel dégagé',
      1: 'Partiellement nuageux',
      2: 'Nuageux',
      3: 'Couvert',
      45: 'Brouillard',
      48: 'Brouillard givrant',
      51: 'Bruine légère',
      53: 'Bruine modérée',
      55: 'Bruine dense',
      61: 'Pluie légère',
      63: 'Pluie modérée',
      65: 'Pluie forte',
      71: 'Neige légère',
      73: 'Neige modérée',
      75: 'Neige forte',
      95: 'Orage',
    };
    
    return {
      temperature: Math.round(data.current.temperature_2m),
      humidity: Math.round(data.current.relative_humidity_2m),
      windSpeed: Math.round(data.current.wind_speed_10m),
      description: weatherDescriptions[data.current.weather_code] || 'Conditions actuelles'
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erreur météo: ${error.message}`);
    }
    throw new Error('Une erreur inattendue est survenue');
  }
}