let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 1000);

// console.log( result);

const user = [
  {
    firstName1: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female",
  },

  {
    firstName2: "mary",
    lastName: "smith",
    birthDate: "feb 5, 1935",
    gender: "female",
  },

  {
    firstName3: "john",
    lastName: "Barnes",
    birthDate: "march 5, 1946",
    gender: "male",
  },
];
//.keys()
// console.log(Object.keys(user));

//.entries()
// for (const [key, value] of Object.entries(user)) {
//     console.log(`${key}: ${value}`);
//   }

for (const element of user) {
  console.log(element.birthDate);
  if (parseInt(element.birthDate.slice(-4)) % 2 === 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}
