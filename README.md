## Documentación de la API

La documentación de la API está generada con **Swagger (OpenAPI 3.0)**.

### 🔗 URL
- Local: [http://localhost:3000/api/docs](http://localhost:3000/api/docs)

### Endpoints Principales

**Users**
- `GET /api/users` — Obtener todos los usuarios
- `GET /api/users/{uid}` — Obtener usuario por ID
- `PUT /api/users/{uid}` — Actualizar usuario
- `DELETE /api/users/{uid}` — Eliminar usuario

**Mocks**
- `GET /api/mocks/users?qty=5` — Generar usuarios mock
- `GET /api/mocks/pets?qty=5` — Generar mascotas mock
- `POST /api/mocks/generateData` — Insertar datos mock

### ⚙️ Instalación

```bash
yarn install
yarn add swagger-jsdoc swagger-ui-express yamljs
yarn dev







Docker
https://hub.docker.com/repository/docker/anais86/proyectbackiii/general


Testing adoption.router.js usando Supertest, Jest, faker-js y mongodb-memory-server.