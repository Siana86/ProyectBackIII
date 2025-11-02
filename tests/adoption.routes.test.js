import request from "supertest";
import app from "../src/app.js";
import { connectTestDB, disconnectTestDB } from "./config/db.js";
import { createMockUser, createMockPet } from "./config/testData.js";


describe("Tests Funcional - Adoption Router", () => {
    let user, pet;

    beforeAll(async () => {
        await connectTestDB();
        user = await createMockUser();
        pet = await createMockPet(false);
    });

    afterAll(async () => {
        await disconnectTestDB();
    });

    // --- GET ALL ---
    it("GET /api/adoptions → debería devolver lista de adopciones (vacía al inicio)", async () => {
        const res = await request(app).get("/api/adoptions");
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe("success");
        expect(Array.isArray(res.body.payload)).toBe(true);
    });

    // --- GET by ID not found ---
    it("GET /api/adoptions/:aid → devuelve 404 si no existe la adopción", async () => {
        const fakeId = "64b6b1b6b1b6b1b6b1b6b1b6";
        const res = await request(app).get(`/api/adoptions/${fakeId}`);
        expect(res.statusCode).toBe(404);
        expect(res.body.status).toBe("error");
        expect(res.body.error).toBe("Adoption not found");
    });

    // --- POST create adoption ---
    it("POST /api/adoptions/:uid/:pid → crea una adopción exitosa", async () => {
        const res = await request(app).post(`/api/adoptions/${user._id}/${pet._id}`);
        expect(res.statusCode).toBe(201);
        expect(res.body.status).toBe("success");
        expect(res.body.message).toBe("Pet adopted");
    });

    // --- POST error: mascota ya adoptada ---
    it("POST /api/adoptions/:uid/:pid → error si la mascota ya fue adoptada", async () => {
        const petAdopted = await createMockPet(true);
        const res = await request(app).post(`/api/adoptions/${user._id}/${petAdopted._id}`);
        expect(res.statusCode).toBe(400);
        expect(res.body.status).toBe("error");
        expect(res.body.error).toContain("ya fue adoptada");
    });

    // --- POST error: usuario no existe ---
    it("POST /api/adoptions/:uid/:pid → error si el usuario no existe", async () => {
        const fakeUser = "64b6b1b6b1b6b1b6b1b6b1b6";
        const newPet = await createMockPet(false);
        const res = await request(app).post(`/api/adoptions/${fakeUser}/${newPet._id}`);
        expect(res.statusCode).toBe(404);
        expect(res.body.status).toBe("error");
        expect(res.body.error).toContain("No existe un usuario");
    });

    // --- POST error: mascota no existe ---
    it("POST /api/adoptions/:uid/:pid → error si la mascota no existe", async () => {
        const fakePet = "64b6b1b6b1b6b1b6b1b6b1b6";
        const res = await request(app).post(`/api/adoptions/${user._id}/${fakePet}`);
        expect(res.statusCode).toBe(404);
        expect(res.body.status).toBe("error");
        expect(res.body.error).toBe("Pet not found");
    });
});
