import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export const Subtitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    color: '#e2b497',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitleContainer: {
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
  },
});
