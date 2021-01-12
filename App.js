import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator} from 'react-native';
import Form from './components/Form';
import Images from './components/Images';

const endpoint = 'https://api.unsplash.com/search/photos';
const key = 'tPFYRkOBe5_kmPT80fF360avmPVssqIvOzrpkA5rprk';
const pageSize = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends Component {
  state = {
    results: null,
    loading: false,
  };

  fetchImages = async (queryString) => {
    this.setState({ loading: true });

    try {
      const response = await fetch(`${endpoint}?query=${queryString}&orientation=squarish&order_by=popular&per_page=${pageSize}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Client-ID ${key}`,
        },
      });

      const json = await response.json();

      this.setState({
        results: json.results.map(r => r.urls.thumb),
      });
    } catch(err) {
      Alert.alert('Something went wrong', 'Please try again');
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Form onSubmit={this.fetchImages} />

        {!!this.state.results && (
          <Images results={this.state.results} />
        )}

        <StatusBar style="auto" />
      </View>
    );
  }
}
