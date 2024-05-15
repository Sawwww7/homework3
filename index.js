const multipleOfaNumber = (i) => {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log("Not a multiple of 3 or 5");
  }
};

multipleOfaNumber(3); // Fizz
multipleOfaNumber(10); //Buzz
multipleOfaNumber(15); //FizzBuzz
multipleOfaNumber(22); //Not a multiple of 3 or 5

const highYearQualifier = (i) => {
  if (i % 4 == 0) {
    console.log("A leap year.");
  } else if (!Number.isInteger(i)) {
    console.log(
      "You made a mistake. Please enter the correct number of days in a year!"
    );
  } else {
    console.log("A common year.");
  }
};

highYearQualifier(2024); // A leap year.
highYearQualifier(2025); // A common year.
highYearQualifier(2026); //A common year.
highYearQualifier(2027); //A common year.
highYearQualifier(2028); //A leap year.
highYearQualifier(1.5); //You made a mistake. Please enter the correct number of days in a year!
highYearQualifier(); //You made a mistake. Please enter the correct number of days in a year!

const yourAge = (age) => {
  try {
    let cobString = "Вам" + " " + age + " ";
    switch (
      5 <= age && age <= 20
        ? "$"
        : 105 <= age && age <= 120
        ? "$"
        : age >= 200
        ? "nonsense"
        : age.toString().split("").pop()
    ) {
      case "$":
        console.log(cobString + "років!");
        break;
      case "1":
        console.log(cobString + "рік");
        break;
      case "2":
      case "3":
      case "4":
        console.log(cobString + "роки");
        break;
      case "0":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        console.log(cobString + "років");
        break;
      case "nonsense":
        console.log("cannot be true");
        break;

      default:
        console.log("You made a mistake. Please enter your age correctly");
    }
  } catch (error) {
    console.error("Error: " + error.message);
  }
};

yourAge(0); // Вам 0 років
yourAge(11); // Вам 11 років!
yourAge(21); // Вам 21 рік;
yourAge(12); // Вам 11 років!
yourAge(22); // Вам 22 роки;
yourAge(66); // Вам 66 років;
yourAge(); //  Error: Cannot read properties of undefined (reading 'toString')
yourAge(200); // cannot be true
