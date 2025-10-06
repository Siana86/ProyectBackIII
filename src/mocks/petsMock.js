
import { faker } from '@faker-js/faker';

export const generateMockPets = (quantity = 10) => {
    const pets = [];
    for (let i = 0; i < quantity; i++) {
        pets.push({
            id: faker.string.uuid(),
            name: faker.animal.dog(),
            specie: faker.helpers.arrayElement(['dog', 'cat', 'rabbit']),
            birthDate: faker.date.past({ years: 5 }),
            adopted: faker.datatype.boolean(),
            owner: faker.person.fullName(),
        });
    }
    return pets;
};
