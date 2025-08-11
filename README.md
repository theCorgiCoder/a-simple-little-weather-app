# A Simple Little Weather App

A React Native weather application built with Expo, Typescript, and no other third party libraries that displays the current weather forecasts for selected cities. 

## Challenges

Honestly I was a bit rusty in React Native since I've been working primarily in Kotlin and Android development the last 7 months, so I needed to warm myself up
before diving into the project. I also had a few tricky moments with the routing now working properly since normally I would have used React navigation before, but at the same time
I appreciate the simplicity of expo router. Once I got going I found myself understanding what I was doing far faster than I used to thanks to my updated understanding
of mobile architecture. I am quite proud of the setup of my files and think I've managed to keep the UI and business logic separate and easy to update if the app is ever scaled up.

## If I had more time to spare:

I would add accessibility, I didn't have time to add it to this test, but I am aware of the EU accessibility act. 

I would update the details screen forecasts to be pressable drop down components, I think it would look cleaner and add a bit more fun to the UX. 

I think a 5-day forecast would be great to add, and if I want to be really complicated I'd allow the users to type in
a zipcode or city themselves but that would need a lot more logic to work out with added validation etc. Being able to favorite specific cities would be fun too.

## Features

- **Displays list of cities from around the world
- **When a city is tapped a detailed screen of their current weather is displayed along with today and tomorrows forecast
- **A refresh feature was added to the detailed screen to update the current weather information but swiping down on the screen.

## Tech Stack

- **React Native** with Expo
- **Expo & Expo Router** for quick app building in Expo Go App and file-based navigation
- **Expo Go App** - if you want to test the application that way, otherwise use an emulator or physical device in Android Studio or Xcode(ios)
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
  ROUTE_URL: '/screens/detailsScreen/details',
  ENDPOINTS: {
    CURRENT: '/weather',
    FORECAST: '/forecast'
  }
};
```
##IMPORTANT: NEED AN API KEY FOR IT TO WORK, SEE INSTRUCTIONS BELOW!
4. Start the development server:
```bash
npx expo start
```
5. Make sure you have Expo Go App downloaded if you want to test on your current device easily. Otherwise you will need to have set up a emulator for either Android (Android Studio) or iOS(Xcode)
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
- etc.

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

*Built with the foot sleeping support of dog-veloper Alfie*

## Since 3rd Party libraries were not allowed for this test I did not install Jest for testing with, without this restriction I would of set up some basic
## unit tests to test the components (like dateUtils and Buttons, API calls etc) to help with debugging any issues that might have arisen.
## I did test manually by altering data to see if the proper error messages would show up, or if screens would load properly.
