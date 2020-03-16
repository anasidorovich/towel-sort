// You should implement your task here.
module.exports = function towelSort(matrix) {
  return flatten(matrix || []);
}

function flatten(array) {
  var flattened = [];
  (function flat(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      let el = matrix[i];
      if (Array.isArray(el)) {
        if ((i + 1) % 2 == 0) {
          el.sort((a, b) => b - a);
        }
        flat(el);
      } else {
        flattened.push(el);
      }
    }
  })(array);
  return flattened;
}
