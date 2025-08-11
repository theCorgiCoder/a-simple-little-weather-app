export enum WeatherErrorType {
    API_LIMIT_REACHED = 'API_LIMIT_REACHED',
    NETWORK_ERROR = 'NETWORK_ERROR',
    MISSING_API_KEY = 'MISSING_API_KEY',
    NO_DATA_FOUND = 'NO_DATA_FOUND',
    UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

export interface WeatherErrorItem {
    type: WeatherErrorType;
    cod: string | number;
    message: string;
    userMessage: string;
}