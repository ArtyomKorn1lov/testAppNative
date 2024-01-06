import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './components/bottom-tabs-component/bottom-tabs-component';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}