import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CategoriesScreen } from './screens/CategoriesScreen';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';
import { MealDetailsScreen } from './screens/MealDetailsScreen';
import { FavoriteScreen } from './screens/FavoriteScreen';
//import { FavoriteContextProvider } from './store/context/favorite-context';
import { store } from './redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: '#fff',
        sceneContainerStyle: {
          backgroundColor: '#3f2f25',
        },
        drawerContentStyle: {
          backgroundColor: '#351401',
        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="list" />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="star" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoriteContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: '#fff',
              contentStyle: {
                backgroundColor: '#3f2f25',
              },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="meals-list" component={MealsOverviewScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoriteContextProvider> */}
    </>
  );
}
