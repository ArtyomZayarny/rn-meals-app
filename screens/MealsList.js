import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useLayoutEffect } from 'react';
import { MealItem } from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';

export const MealsList = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.indexOf(categoryId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id == categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
