import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { SafeArea } from './src/infrastructure/components/utility/safe-area.component';
import { Wrapper } from './src/infrastructure/components/wrappper/wrapper';
import { theme } from './src/infrastructure/theme';
import MainScreen from './src/screens/main.screen';
import WeatherContextProvider from './src/services/weatherAPI/WeatherContext/WeatherContext';

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <WeatherContextProvider>
        <Wrapper>
      <SafeArea>
      <MainScreen />
      <StatusBar style="light" />
      </SafeArea>
      </Wrapper>
      </WeatherContextProvider>
      </ThemeProvider>
  );
}

