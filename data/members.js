const faker = require("faker");
const uuidv4 = require("uuid/v4");

export default function generateMembers() {
  let data = [];

  Array(20)
    .fill("")
    .forEach(() => {
      let firstName = faker.name.firstName();
      let lastName = faker.name.lastName();
      let name = `${firstName} ${lastName}`;
      data.push({
        key: uuidv4(),
        title: randomItems(["Mr", "Ms", "Miss"]),
        name,
        firstName,
        lastName,
        dialCode: "+44",
        gender: randomItems(["male", "female", "unisex"]),
        birthday: "13123123",
        phoneNo: "1213123123",
        nationality: "Thai",
        citizenIdBlock1: faker.random.number(),
        citizenIdBlock2: faker.random.number(),
        citizenIdBlock3: faker.random.number(),
        citizenIdBlock4: faker.random.number(),
        citizenIdBlock5: faker.random.number(),
        passportNo: faker.random.number(),
        expectedSalary: faker.random.number()
      });
    });

  return data;
}

function randomItems(array) {
  const randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}
