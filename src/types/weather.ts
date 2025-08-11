
export interface CurrentWeatherResponse {
    main: {
        temp: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    weather: Array<{
        description: string;
        icon: string;
    }>;
    name: string;
    sys: {
        country: string;
    };
}

export interface WeatherForecastItem {
    dt: number;
    main: {
        temp: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    weather: Array<{
        description: string;
        icon: string;
    }>;
}

export interface WeatherForecastResponse {
    list: WeatherForecastItem[];
}

