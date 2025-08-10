export interface WeatherAPIError {
    cod: string | number;
    message: string;
}

export enum WeatherErrorType {
    API_LIMIT = 'API_LIMIT',
    INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
    MISSING_API_KEY = 'MISSING_API_KEY',
    NO_DATA_FOUND = 'NO_DATA_FOUND',
    UNKNOWN_ERROR = 'UNKNOWN_ERROR',
    CANT_LOAD_SCREEN = 'CANT_LOAD_SCREEN'
}

export interface WeatherErrorDetails {
    type: WeatherErrorType;
    message: string;
    userMessage: string;
    canRetry: boolean;
}

export const weatherErrorResponse = (error: any): WeatherErrorDetails => {
    const statusCode = error?.response?.status || error?.cod;

    if (statusCode === 401) {
        return {
            type: WeatherErrorType.MISSING_API_KEY,
            message: 'Unauthorized: Invalid API key.',
            userMessage: 'Invalid API key. Please check configuration.',
            canRetry: false
        };
    }

    if (statusCode  === 429) {
        return {
            type: WeatherErrorType.API_LIMIT,
            message: 'API request limit exceeded.',
            userMessage: 'Daily API request limit reached. Try again later.',
            canRetry: false
        }
    }

    if (statusCode  === 500) {
        return {
            type: WeatherErrorType.INTERNAL_SERVER_ERROR,
            message: `Internal Server error: ${statusCode}`,
            userMessage: 'Weather service is temporarily down. Try again later.',
            canRetry: true
        }
    }

    if (statusCode  === 404 || error?.message?.includes('Not Found')) {
        return {
            type: WeatherErrorType.NO_DATA_FOUND,
            message: 'Data not found.',
            userMessage: 'No weather data found for this location.',
            canRetry: true
        }
    }

    if (error?.message?.includes('fetch') || error?.message?.includes('network')) {
        return {
            type: WeatherErrorType.CANT_LOAD_SCREEN,
            message: error.message || 'Network error',
            userMessage: 'Cannot load weather data. Check your internet connection.',
            canRetry: true
        };
    }

    return {
        type: WeatherErrorType.UNKNOWN_ERROR,
        message: error?.message || 'Unknown error occurred',
        userMessage: 'Something went wrong. Please try again.',
        canRetry: true
    };
}

export const shouldShowRetryButton = (errorType: WeatherErrorType): boolean => {
    return [
        WeatherErrorType.NO_DATA_FOUND,
        WeatherErrorType.API_LIMIT,
        WeatherErrorType.INTERNAL_SERVER_ERROR,
        WeatherErrorType.NO_DATA_FOUND,
        WeatherErrorType.CANT_LOAD_SCREEN,
        WeatherErrorType.UNKNOWN_ERROR
    ].includes(errorType);
};

export const getErrorTitle = (errorType: WeatherErrorType): string => {
    switch (errorType) {
        case WeatherErrorType.API_LIMIT:
            return 'Daily API Limit Reached';
        case WeatherErrorType.INTERNAL_SERVER_ERROR:
            return 'Service Unavailable';
        case WeatherErrorType.MISSING_API_KEY:
            return 'Configuration Error';
        case WeatherErrorType.NO_DATA_FOUND:
            return 'No Data Available';
        case WeatherErrorType.CANT_LOAD_SCREEN:
            return 'Connection Error';
        case WeatherErrorType.UNKNOWN_ERROR:
        default:
            return 'Something Went Wrong';
    }
};
