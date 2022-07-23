
const primitiveMultiply = (b = 2) => {
  let firstInput = Number(prompt("input"));

  if (firstInput > -1) {
    return firstInput * b;
  } else {
    throw new Error("Not a number");
  }
};

for (;;) {
  try {
    let result = primitiveMultiply();
    console.log(result);
    break;
  } catch (e) {
    if (e instanceof Error) {
      console.log("Not a valid number. Try again.");
    } else {
      throw e;
    }
  }
}
