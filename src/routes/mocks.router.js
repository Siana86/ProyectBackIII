
import { Router } from 'express';
import { generateMockUsers, generateMockPets } from '../utils/mocking.js'
import { AppError } from '../middlewares/errorHandler.js';
import Users from '../dao/Users.dao.js'
import Pet from '../dao/Pets.dao.js'
import { createHash } from '../utils/index.js';


const router = Router();
const usersService = new Users()
const petsService = new Pet()

//GetUsers
router.get('/mocks/users', async (req, res, next) => {
    try {
        const { qty } = req.query;
        const qtyNumber = Number(qty);

        if (isNaN(qtyNumber) || qtyNumber <= 0) {
            return next(new AppError('La cantidad debe ser un número entero positivo', 400));
        }

        const users = await generateMockUsers(qtyNumber);
        res.json({ status: 'success', payload: users });
    } catch (err) {
        next(err);
    }
});


//GetPets
router.get('/mocks/pets', (req, res, next) => {
    try {
        const { qty } = req.query;
        const qtyNumber = Number(qty);

        if (isNaN(qtyNumber) || qtyNumber <= 0) {
            return next(new AppError('La cantidad debe ser un número entero positivo', 400));
        }

        const pets = generateMockPets(qtyNumber);
        res.json({ status: 'success', payload: pets });
    } catch (err) {
        next(err);
    }
});


//SavePetsAndUsersMock
router.post('/mocks/generateData', async (req, res, next) => {
    try {
        const { users = 0, pets = 0 } = req.body;

        if (isNaN(users) || users < 0 || isNaN(pets) || pets < 0) {
            return next(new AppError('Los parámetros users y pets deben ser números enteros >= 0', 400));
        }

        let insertedUsersCount = 0;
        let insertedPetsCount = 0;

        // Guardar Users mock
        if (users > 0) {
            const mockUsers = await generateMockUsers(users); // ✅ await aquí
            await Promise.all(mockUsers.map(u => usersService.save(u)));
            insertedUsersCount = mockUsers.length;
        }

        // Guardar Pets mock
        if (pets > 0) {
            const mockPets = generateMockPets(pets);
            await Promise.all(mockPets.map(p => petsService.save(p)));
            insertedPetsCount = mockPets.length;
        }

        res.json({
            status: 'success',
            message: 'Datos generados e insertados correctamente',
            inserted: {
                users: insertedUsersCount,
                pets: insertedPetsCount
            }
        });
    } catch (err) {
        next(err);
    }
});

export default router;
