const multipleOfaNumber = (i) => {
  let multipleOfThree = i % 3 == 0;
  let multipleOfFive = i % 5 == 0;
  if (multipleOfThree && multipleOfFive) {
    console.log("FizzBuzz");
  } else if (multipleOfThree) {
    console.log("Fizz");
  } else if (multipleOfFive) {
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
  let lastCharacter = age.toString().split("").pop();

  switch (lastCharacter) {    
    case "1":
      console.log("Вам" + " " + age + " " + "рік");
      break;
    case "2":
    case "3":
    case "4":
      console.log("Вам" + " " + age + " " + "роки");
      break;
    case "0":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      console.log("Вам" + " " + age + " " + "років");
      break;

    default:
      console.log("You made a mistake. Please enter your age correctly");
  }
};

yourAge(0); // Вам 0 років
yourAge(21); // Вам 21 рік;
yourAge(22); // Вам 22 роки;
yourAge(66); // Вам 66 років;