export interface WeatherData {
  cod?: number | string;
  name: string;
  rainPrediction?: string;
  visibility?: number;
  clouds?: {
    all: number;
  };
  sys?: {
    country: string;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  main: {
    temp: number;
    feels_like?: number;
    humidity: number;
    pressure?: number;
  };
  wind: {
    speed: number;
    gust?: number;
  };
}
