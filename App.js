import { StatusBar } from 'expo-status-bar';
import { Text, } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './src/infrastructure/components/wrappper/wrapper';
import { theme } from './src/infrastructure/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <Wrapper>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      </Wrapper>
      </ThemeProvider>
  );
}

