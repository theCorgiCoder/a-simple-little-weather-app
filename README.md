# A Simple Little Weather App

A React Native weather application built with Expo, Typescript, and no other third party libraries that displays the current weather forecasts for selected cities. 


## Tech Stack

- **React Native** with Expo
- **Expo & Expo Router** for quick app building in Expo Go App and file-based navigation
- **TypeScript** for type safety
- **OpenWeatherMap API** for weather data
## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- OpenWeatherMap API key

### Installation

1. Clone the repository:
```bash
git clone <project-url>  (Url: https://github.com/theCorgiCoder/a-simple-little-weather-app.git)
cd a-simple-little-weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Create your API configuration:
```bash
# Create src/services/apiConfig.ts with your API key
export const WEATHER_CONFIG = {
  API_KEY: 'your-openweathermap-api-key',
  BASE_URL: 'https://api.openweathermap.org/data/2.5',
  ENDPOINTS: {
    CURRENT: '/weather',
    FORECAST: '/forecast'
  }
};
```

4. Start the development server:
```bash
npx expo start
```

### Getting an API Key

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your free API key
3. For testing you can add it to your `apiConfig.ts` file directly, but for a more SECURE option:
4. (Optional but best practice) create a .env file in your base project folder and create a variable for your api key there. In 'apiConfig.ts' add this variable for you apiKey as such: process.env.API_KEY_VARIABLE. Make sure to add .env to your '.gitignore' file as well so it won't be displayed publically on your repository.

## Usage

1. **Home/Index Screen**: Browse the list of featured cities
2. **Tap a City**: Navigate to detailed weather view for that city.
3. **Weather Details**: View current conditions and expandable today/tomorrow forecasts

## Featured Cities

The app includes weather for these cities by default:
- Stockholm, Sweden
- London, United Kingdom
- New York, United States
- Tokyo, Japan
- Sydney, Australia

You can easily add more cities by updating the city list in `src/constants/cities.ts`.

## Development

### Adding New Cities

Edit `src/constants/cities.ts`:
```typescript
export const FEATURED_CITIES = [
  { name: 'Paris', country: 'FR' },
  // Add your cities here
];
```

### Customizing Forecast Times

Modify `src/utils/dateUtils.ts` to change which forecast times are displayed.

## License

MIT License - feel free to use this project for learning and development.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

*Built with the foot sleeping support of dog-veloper Alfie*
