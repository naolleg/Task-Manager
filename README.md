
### 1,clone the repo

--git clone https://github.com/naolleg/Task-Manager.git

--cd backend


### 2,Install dependencies

---npm install


### 3,Create a .env file in the root folder with your database URL:

---DATABASE_URL="mysql://user:password@localhost:3306/dbname"


### 4,Generate Prisma client

--npx prisma generate


### 5,Start the server

---node server.js


### requests 
GET /api/tasks
post /api/tasks
put  /api/tasks/:id
delete /api/tasks/:id
            
             
