import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { MealsList } from '../components/MealList/MealsList';
//import { FavoriteContext } from '../store/context/favorite-context';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';

export const FavoriteScreen = () => {
  // const favoriteMealsCtx = useContext(FavoriteContext);
  const favoriteMeaslsIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMeaslsIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
