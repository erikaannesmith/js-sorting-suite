function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var temp = array[i]
    for (var x = i-1; x >= 0 && array[x] > temp; x--) {
      array[x+1] = array[x];
    };
    array[x+1] = temp;
  };
  return array;
};

module.exports = insertionSort