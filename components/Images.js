import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
  },
});

const Images = (props) => (
  <View style={styles.container}>
    {props.results.map(uri => (
      <Image
        style={styles.image}
        key={uri}
        source={{uri}}
      />
    ))}
  </View>
);

Images.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Images;
