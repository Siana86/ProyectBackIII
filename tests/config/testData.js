import { faker } from "@faker-js/faker";
import Users from "../../src/dao/Users.dao.js";
import Pet from "../../src/dao/Pets.dao.js";

const usersDao = new Users();
const petsDao = new Pet();

export const createMockUser = async () => {
    const user = {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: "hashed123",
        role: "user",
        pets: [],
    };
    const saved = await usersDao.save(user);
    return saved;
};

export const createMockPet = async (adopted = false) => {
    const pet = {
        name: faker.animal.dog(),
        specie: "dog",
        age: faker.number.int({ min: 1, max: 15 }),
        adopted,
    };
    const saved = await petsDao.save(pet);
    return saved;
};
