Install Express, cors, dotenv

```bash
npm install express cors dotenv

run server
npm run start

Install prisma 
npm install @prisma/client
npx prisma init
```

Setup docker
docker login
docker run --name noobie-isc -e POSTGRES_PASSWORD=12345 -e POSTGRES_USER=postgres -e POSTGRES_DB=postgres -p 5432:5432 -d postgres

Migration
npx prisma generate
npm run migrate

Seed data resep
npm run seed

