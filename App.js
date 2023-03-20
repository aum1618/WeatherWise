import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import MainNavigater from './src/features/navigation/MainNavigater';
import { SafeArea } from './src/infrastructure/components/utility/safe-area.component';
import { Wrapper } from './src/infrastructure/components/wrappper/wrapper';
import { theme } from './src/infrastructure/theme';
import MainScreen from './src/screens/main.screen';
import GeocodingContextProvider from './src/services/geocodingAPI/geocodingContext';
import { ImagesContextProvider } from './src/services/ImagesContext/ImagesContext';
import WeatherContextProvider from './src/services/weatherAPI/WeatherContext/WeatherContext';

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <ImagesContextProvider>
      <GeocodingContextProvider>
      <WeatherContextProvider>
        <Wrapper>
      {/* <SafeArea> */}
      <MainNavigater />
      <StatusBar style="light" />
      {/* </SafeArea> */}
      </Wrapper>
      </WeatherContextProvider>
      </GeocodingContextProvider>
      </ImagesContextProvider>
      </ThemeProvider>
  );
}

