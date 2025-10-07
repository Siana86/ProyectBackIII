import { faker } from '@faker-js/faker'
import { createHash } from "../utils/index.js"

//Usuarios mockeados
export function generateMockUsers(qty = 50) {
    const users = []

    for (let i = 0; i < qty; i++) {
        const user = {
            _id: faker.database.mongodbObjectId(),
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: createHash('coder123'),
            role: faker.helpers.arrayElement(['user', 'admin']),
            pets: [],
            createdAt: faker.date.past(),
            updatedAt: faker.date.recent(),
        }
        users.push(user)
    }

    return users
}

// Mascotas mockeadas
export function generateMockPets(qty = 50) {
    const pets = []

    for (let i = 0; i < qty; i++) {
        const pet = {
            _id: faker.database.mongodbObjectId(),
            name: faker.animal.petName(),
            species: faker.animal.type(),
            age: faker.number.int({ min: 1, max: 15 }),
            adopted: faker.datatype.boolean(),
            createdAt: faker.date.past(),
            updatedAt: faker.date.recent(),
        }
        pets.push(pet)
    }

    return pets
}
