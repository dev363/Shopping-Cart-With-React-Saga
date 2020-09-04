Instruction for Cart Me Application Installion

#### Api Server #####
Nodejs,mongodb

1) Go to api server folder /api
2) run this Commant "npm install"
3) go to /api/config/index.json and update below credentials

Wroking with online MongoDb online https://account.mongodb.com/account/login

"db":{
    "MONGO_USER": "XXXXXXXX",
    "MONGO_PASSWORD": "XXXXXXXX",
    "MONGO_DB": "XXXXXXXX"
},

4) otherwise you can go to /api/db/index.js and change this line no 5
let mongoUrl = <url mongodb url>

5) come to api root /api/ folder
6) run "npm start" command
7) Server is running at http://localhost:5000 url

Api Postman Link: https://www.getpostman.com/collections/46cc7b17a9c80e7944f4

****************************************************************
****************************************************************
****************************************************************


#### Frontend App ####
Reactjs, Redux, Redux-Saga

1) Go to Frontend folder frontend/
2) run this Commant "npm install"
3) go to frontend/constants/ApisUrls.js and update this line with your api server url
export const BASE_URL="http://localhost:5000"
4)  run "npm start" command



***************************************************************
***************************************************************
***************************************************************


#####  How does work this application ? ###############

## First Step
1) You need to Add products and Promocodes 
2) To add new Products, promocode press "Go to Admin" button on header bar or direct Go to this http://localhost:3000/backend link
2) Add your Product, Prmocodes here

## Second Step

1) Now you can see Product list At home page http://localhost:3000
2) Add to cart items
3) delete cart item from "Cart items" section
4) Copy valid Coupon number from http://localhost:3000/backend
5) Apply Coupon code and check Calculation