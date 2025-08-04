
# 📦 Conteneurisation d’un projet TypeScript avec Docker (Multi-projets)

Ce guide décrit comment structurer, conteneuriser et exécuter plusieurs projets TypeScript avec Docker sans utiliser de volumes. C’est idéal pour le déploiement et l'apprentissage clair.

---

## 🗂️ Structure du projet

```
typescript-projects/
│
├── projet1/
│   ├── src/
│   │   └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
│
├── projet2/
│   ├── src/
│   │   └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
│
└── docker-compose.yml
```

---

## 📁 Contenu des fichiers

### `package.json`

```json
{
  "name": "projetX",
  "version": "1.0.0",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

---

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src"]
}
```

---

### `src/index.ts`

```ts
console.log("Projet X : Hello depuis TypeScript !");
```

---

### `Dockerfile` (build multi-étapes, sans volume)

```dockerfile
# Étape 1 : build
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : exécution
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm install --only=production
CMD ["node", "dist/index.js"]
```

---

### `docker-compose.yml` (à la racine)

```yaml
version: "3.8"

services:
  projet1:
    build: ./projet1
    container_name: projet1

  projet2:
    build: ./projet2
    container_name: projet2
```

---

## 🚀 Commandes utiles

### Builder et lancer tous les projets :
```bash
docker compose up --build
```

### Rebuilder si changement TypeScript :
```bash
docker compose build
docker compose up
```

---

## ✅ Recommandation

Utilisez cette approche sans volumes pour :
- Des builds reproductibles
- Un déploiement sur Render, Railway, etc.
- Apprendre la conteneurisation proprement

---

Fadloulahi'Dev me remercier paaaaaaassssss!!!!!!!!!!!!
ADIYAAH SAFAR BII SI BARKE BOROM TOUBA

