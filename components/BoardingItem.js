import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';

const BoardingItem = props => {
  const {item} = props;
  const {width} = useWindowDimensions();
  return (
    <View>
      <Image
        source={item.image}
        style={[styles.image, {width, height: 300, resizeMode: 'cover'}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
});

export default BoardingItem;
