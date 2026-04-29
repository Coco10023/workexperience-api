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
MYSQL_URL = mysql://root:TiHfloFTCVsxgWGoIuUEGAhivRpmuaxu@mysql.railway.internal:3306/railway
MYSQLDATABASE = railway
MYSQLHOST = mysql.railway.internal
MYSQLPASSWORD = XXXXXXXXX
MYSQLPORT = 3306
MYSQLUSER = root
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

## Publicering 
https://workexperience-api-9ekl.onrender.com/api/workexperience
