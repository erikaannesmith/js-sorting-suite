function bubbleSort(array) {
  for (var x = 0; x < array.length; x++) {
    for (var i = 0; i < array.length; i++) {
      temp = array[i];
      if (temp > array[i+1]) {
        array[i] = array [i+1]
        array[i+1] = temp
      };
    };
  };
  return array
};

module.exports = bubbleSort