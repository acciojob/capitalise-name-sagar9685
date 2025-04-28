document.getElementById("fname").addEventListener("blur", function () {
  if (this.value.length <= 100) {
    this.value = this.value.toUpperCase();
  }
});