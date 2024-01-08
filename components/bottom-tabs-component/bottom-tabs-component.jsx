import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainPage from '../../pages/main-page/main-page';
import NewsPage from '../../pages/news-page/news-page';
import ContactPage from '../../pages/contact-page/contact-page';
import SensorsPage from '../../pages/sensors-page/sensors-page';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return(
        <Tab.Navigator
        initialRouteName='Главная'
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name='Главная'
                component={MainPage}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                  }}
            />
            <Tab.Screen
                name='Новости'
                component={NewsPage}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="newspaper-variant" color={color} size={size} />
                    ),
                  }}
            />
            <Tab.Screen
                name='Контакты'
                component={ContactPage}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="contacts" color={color} size={size} />
                    ),
                  }}
            />
            <Tab.Screen
                name='Сенсоры'
                component={SensorsPage}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="motion-sensor" color={color} size={size} />
                    ),
                  }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;