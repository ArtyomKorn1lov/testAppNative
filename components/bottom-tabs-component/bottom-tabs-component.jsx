import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainPage from '../../pages/main-page/main-page';
import NewsPage from '../../pages/news-page/news-page';
import ContactPage from '../../pages/contact-page/contact-page';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return(
        <Tab.Navigator
        initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name='Home'
                component={MainPage}
                options={{
                    tabBarLabel: 'Главная',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                  }}
            />
            <Tab.Screen
                name='News'
                component={NewsPage}
                options={{
                    tabBarLabel: 'Новости',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                  }}
            />
            <Tab.Screen
                name='Contact'
                component={ContactPage}
                options={{
                    tabBarLabel: 'Контакты',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                  }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;