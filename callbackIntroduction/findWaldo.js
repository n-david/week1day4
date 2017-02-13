function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);
    }
  }
}

function actionWhenFound(position) {
  console.log("Found Waldo at index", position + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
