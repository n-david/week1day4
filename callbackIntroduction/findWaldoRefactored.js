function actionWhenFound() {
  console.log("Found Waldo!");
}

["Alice", "Bob", "Waldo", "Winston"].forEach(function (person) {
  if (person === 'Waldo') {
    actionWhenFound();
  }
});
