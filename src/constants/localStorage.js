

// saveToLocalStorage.js

const saveToLocalStorage = (key, data) => {
  try {
    // JSON.stringify kullanarak veriyi bir stringe dönüştür ve localStorage'a sakla
    window.localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    // Hata durumunda hata mesajını konsola yazdır
    console.error('Error saving data to localStorage:', error);
  }
};

export default saveToLocalStorage;