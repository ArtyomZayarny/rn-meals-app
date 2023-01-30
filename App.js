import { StatusBar } from 'expo-status-bar';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { MealsList } from './screens/MealsList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
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
          <Stack.Screen name="meals-categories" component={CategoriesScreen} />
          <Stack.Screen name="meals-list" component={MealsList} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
