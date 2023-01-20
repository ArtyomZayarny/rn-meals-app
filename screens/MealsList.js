import { StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';

export const MealsList = () => {
  return (
    <View style={styles.container}>
      <Text>Meals list</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
