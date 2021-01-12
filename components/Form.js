import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
 } from 'react-native';

const borderColor = '#444';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    fontSize: 14,
    padding: 10,
    borderColor: borderColor,
    borderWidth: 1,
    color: borderColor,
    flexGrow: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonContainer: {
    backgroundColor: borderColor,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    padding: 10,
    borderColor: borderColor,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  }
});

class Form extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  onChangeText = (text) => {
    this.setState({ text });
  };

  onPress = () => {
    if (this.state.text) {
      this.props.onSubmit(this.state.text);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this.onChangeText}
          style={styles.input}
          placeholder="Search unsplash..."
        />

        <TouchableOpacity onPress={this.onPress} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default Form;
