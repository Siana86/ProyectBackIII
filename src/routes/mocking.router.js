
import { Router } from 'express';
import { generateMockUsers } from '../mocks/usersMock.js';
import { generateMockPets } from '../mocks/petsMock.js';
import { AppError } from '../middlewares/errorHandler.js';

const router = Router();

router.get('/mocking/users', (req, res, next) => {
    try {
        const { qty } = req.query;
        const qtyNumber = Number(qty);

        if (isNaN(qtyNumber) || qtyNumber <= 0) {
            // lanzamos error controlado
            return next(new AppError('La cantidad debe ser un número entero positivo', 400));
        }

        const users = generateMockUsers(qtyNumber);
        res.json({ status: 'success', payload: users });
    } catch (err) {
        next(err);
    }
});

router.get('/mocking/pets', (req, res, next) => {
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


export default router;
