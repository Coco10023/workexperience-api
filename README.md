# Workexperience API

Detta är en REST-baserad webbtjänst byggd med Node.js, Express och MySQL. API:et hanterar arbetserfarenheter och stödjer CRUD-operationer.

## Tekniker
- Node.js
- Express
- MySQL
- mysql2
- cors
- dotenv

## Databas

Databas: `cv`  
Tabell: `workexperience`

Fält:
- id (primärnyckel, auto increment)
- companyname
- jobtitle
- location
- startdate
- enddate
- description

## Installation

1. Klona repot  
2. Kör `npm install`  
3. Skapa `.env`-fil med:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=cv
PORT=3000
```

## Starta servern:

npm run dev


## Endpoints
GET /api/workexperience:

Hämtar alla poster

GET /api/workexperience/:id:

Hämtar en specifik post

POST /api/workexperience:

Skapar en ny post


Exempel JSON:

{
  "companyname": "Mittuniversitetet",
  "jobtitle": "Labbhandledare",
  "location": "Sundsvall",
  "startdate": "2019-01-01",
  "enddate": "2019-12-31",
  "description": "Handledning av studenter"
}

PUT /api/workexperience/:id

Uppdaterar en post

DELETE /api/workexperience/:id

Raderar en post


## Funktionalitet
CRUD (Create, Read, Update, Delete)
Returnerar data i JSON-format
Serverside-validering (inga tomma fält tillåts)
Felmeddelanden vid ogiltig input
CORS aktiverat för cross-origin requests

## Testning

API:et kan testas med exempelvis Thunder Client eller Postman.
