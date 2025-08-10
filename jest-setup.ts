// jest-setup.ts (TypeScript)
import '@testing-library/jest-native/extend-expect';
import {jest} from "@jest/globals";
import React from "react";

// Type the mocks properly
jest.mock('expo-router', () => ({
    router: {
        push: jest.fn(),
        back: jest.fn(),
        replace: jest.fn(),
        navigate: jest.fn(),
    },
    useLocalSearchParams: jest.fn(() => ({
        city: 'London',
        countryCode: 'GB'
    } as { city: string; countryCode: string })),
    Stack: {
    Screen: ({ children }: { children: React.ReactNode }) => children,
},
Link: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock your services with proper typing
jest.mock('./src/services/apiConfig', () => ({
        WEATHER_CONFIG: {
            API_KEY: 'test-api-key',
            BASE_URL: 'https://test-api.com',
            ENDPOINTS: {
                CURRENT: '/weather',
                FORECAST: '/forecast'
            }
        } as const,
        getWeatherIconUrl: jest.fn((iconCode: string): string => `https://test-icon.com/${iconCode}.png`
)
}));