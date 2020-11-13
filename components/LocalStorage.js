import AsyncStorage from '@react-native-community/async-storage';

const compress = (data) => JSON.stringify(data);

const decompress = (data) => {
  return data ? JSON.parse(data) : data;
};

export default class LocalStorage {
  setItem(key, value) {
    return AsyncStorage.setItem(key, compress(value));
  }

  getItem(key) {
    return AsyncStorage.getItem(key).then(decompress);
  }

  removeItem(key) {
    return AsyncStorage.removeItem(key);
  }

  getAllKeys() {
    return AsyncStorage.getAllKeys();
  }

  multiGet(keys, callback) {
    return AsyncStorage.multiGet(keys, callback)
      .then((results) => results.map(([key, value]) => ([key, decompress(value)])));
  }

  multiSet(keyValuePairs, callback) {
    const data = keyValuePairs.map(([key, value]) => ([key, compress(value)]));
    return AsyncStorage.multiSet(data, callback);
  }

  multiRemove(keys, callback) {
    return AsyncStorage.multiRemove(keys, callback);
  }

  clear(callback) {
    return AsyncStorage.clear(callback);
  }
}
