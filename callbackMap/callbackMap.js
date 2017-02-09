var words = ["ground", "control", "to", "major", "tom"];

function myMap(wordArray, callback) {
  var newWordArray = [];
  wordArray.forEach(function(anything) {
    newWordArray.push(callback(anything));
  });
  console.log(newWordArray);
}

myMap(words, function(word) {
  return word.length;
});
