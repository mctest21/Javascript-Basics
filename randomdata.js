function generateRandomUserData(count = 100) {
  const firstNames = ["John", "Jane", "Alex", "Emily", "Chris", "Taylor", "Ryan", "Samantha", "Michael", "Sarah"];
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Lopez", "Wilson"];
  const streets = ["Main St", "High St", "Maple Ave", "Broadway", "Oak St", "Pine St", "Cedar Ln", "Park Ave"];
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Austin", "Dallas", "Seattle"];
  const states = ["NY", "CA", "IL", "TX", "AZ", "WA", "FL", "CO"];

  const users = [];

  for (let i = 0; i < count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const fullName = `${firstName} ${lastName}`;

    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Math.floor(Math.random() * 1000)}@example.com`;

    const age = Math.floor(Math.random() * (60 - 18 + 1)) + 18;

    const address = `${Math.floor(Math.random() * 9999)} ${streets[Math.floor(Math.random() * streets.length)]}, ${cities[Math.floor(Math.random() * cities.length)]}, ${states[Math.floor(Math.random() * states.length)]}`;

    users.push({ name: fullName, email, age, address });
  }

  return users;
}

// Example: Generate and log 100 users
const testData = generateRandomUserData(100);
console.log(testData);

export default generateRandomUserData;
//====================================================
const faker = require('faker');

function generateUsers(count = 100) {
  const users = [];

  for (let i = 0; i < count; i++) {
    const user = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      age: faker.datatype.number({ min: 18, max: 75 }),
      address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.country()}`
    };
    users.push(user);
  }

  return users;
}

// Example usage
const userData = generateUsers(100);
console.log(JSON.stringify(userData, null, 2));
