import { faker } from '@faker-js/faker'
import { createHash } from "../utils/index.js"

//Usuarios mockeados
export async function generateMockUsers(qty = 50) {
    const users = []

    for (let i = 0; i < qty; i++) {
        const hashedPassword = await createHash('coder123');
        const user = {
            _id: faker.database.mongodbObjectId(),
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: hashedPassword,
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
            specie: faker.animal.type(),
            age: faker.number.int({ min: 1, max: 15 }),
            adopted: faker.datatype.boolean(),
            createdAt: faker.date.past(),
            updatedAt: faker.date.recent(),
        }
        pets.push(pet)
    }

    return pets
}
