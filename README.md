# ProyectBackIII
Backend desarrollado con **Node.js + Express** que gestiona **usuarios, mascotas y adopciones**.  
Incluye endpoints CRUD, generación de datos mock, documentación con **Swagger**, pruebas automatizadas y despliegue con **Docker**.

## Descripción
Este proyecto implementa una **API RESTful** que incluye:
- Gestión completa de **usuarios**, **mascotas** y **adopciones**.  
- Creación y carga de mascotas con imagen.  
- Endpoints de datos **mock** para testing y desarrollo.  
- Documentación de la API con **Swagger / OpenAPI 3.0**.  
- Pruebas funcionales con **Jest** y **Supertest**.  
- Contenedor **Docker** para facilitar el despliegue.

## Tecnologías utilizadas
- Node.js  
- Express  
- MongoDB  
- Swagger (swagger-jsdoc + swagger-ui-express + yamljs)  
- Docker  
- Jest + Supertest
- Faker.js   
- Yarn / npm  

## Instalación y ejecución
### Requisitos previos
- Node.js (v16+)  
- Docker (para contenedores, opcional)  
- MongoDB (o usar el memory-server para pruebas)

### Instalación
```bash
git clone https://github.com/Siana86/ProyectBackIII.git
cd ProyectBackIII
npm install  
```
### Ejecución del proyecto en modo desarrollo
```bash
npm run dev 
```
### Ejecución del proyecto modo producción
```bash
npm start 
```

---
## Documentación de la API
La documentación de la API está generada con **Swagger (OpenAPI 3.0)**.

### URL
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

### Instalación

```bash
yarn install
yarn add swagger-jsdoc swagger-ui-express yamljs
yarn dev
```

---

## 🐳 Imagen en Docker Hub

[![Docker Hub](https://img.shields.io/badge/Docker%20Hub-anais86%2Fproyectbackiii-blue?logo=docker)](https://hub.docker.com/repository/docker/anais86/proyectbackiii/general)

La imagen oficial del proyecto está publicada en Docker Hub.  
Puedes descargarla y ejecutarla directamente con los siguientes comandos:

**Descargar la imagen desde Docker Hub**
```bash
docker pull anais86/proyectbackiii
```

**Ejecutar el contenedor**
```bash
docker run -d -p 3000:3000 anais86/proyectbackiii
```
---
**Autor:** Anais Marcano
**Repositorio:**  [(ProyectBackIII)](https://github.com/Siana86/ProyectBackIII.git)