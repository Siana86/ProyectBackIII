
import { faker } from '@faker-js/faker';

export const generateMockUsers = (quantity = 10) => {
    const users = [];
    for (let i = 0; i < quantity; i++) {
        users.push({
            id: faker.string.uuid(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            age: faker.number.int({ min: 18, max: 80 }),
        });
    }
    return users;
};
