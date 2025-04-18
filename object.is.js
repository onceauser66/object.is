const object = {
  is: function (a, b) {
    if (
      a === b ||
      (Number.isNaN(a) && Number.isNaN(b)) ||
      (1 / a !== 1 / b)
    ) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
};
