import { View, Text, StyleSheet }  from 'react-native'
import React from 'react'
const Triangle = () => {
  return <View style={[styles.triangle]} />;
}
const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
  },
});
export default Triangle