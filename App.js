import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Counter from './components/Counter';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9FA1FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});