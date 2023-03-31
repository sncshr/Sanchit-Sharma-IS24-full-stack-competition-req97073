const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// defining the Express app
const app = express();
// defining an array to work as the database (temporary solution)
const ads = [
  {
    productId: 1,
    productName: "Product 01",
    productOwnerName: "Lisa",
    Developers: [
     "John",
     "Jeff",
    ],
    scrumMasterName: "Sam",
    startDate: "2023/01/01",
    methodology: "Agile"
},
{
  productId: 2,
  productName: "Product 02",
  productOwnerName: "Alan",
  Developers: [
   "John",
   "Jeff",
  ],
  scrumMasterName: "Bob",
  startDate: "2022/08/01",
  methodology: "Agile"
},
{
  productId: 123,
  productName: "Product A",
  productOwnerName: "John Doe",
  Developers: [
    "Alice",
    "Bob",
    "Charlie",
    "David"
  ],
  scrumMasterName: "Jane Smith",
  startDate: "2022/01/01",
  methodology: "Agile"
},
{
  productId: 456,
  productName: "Product B",
  productOwnerName: "Jane Smith",
  Developers: [
    "Frank",
    "Grace",
    "Haley",
    "Ian"
  ],
  scrumMasterName: "John Doe",
  startDate: "2022/02/01",
  methodology: "Waterfall"
},
{
  productId: 789,
  productName: "Product C",
  productOwnerName: "Alice Johnson",
  Developers: [
    "Kate",
    "Liam",
    "Mia",
    "Nate"
  ],
  scrumMasterName: "Samuel Lee",
  startDate: "2022/03/01",
  methodology: "Waterfall"
},
{
  productId: 101112,
  productName: "Product D",
  productOwnerName: "David Williams",
  Developers: [
    "Peter",
    "Queenie",
    "Ralph"

  ],
  scrumMasterName: "Sarah Wilson",
  startDate: "2022/04/01",
  methodology: "Waterfall"
},
{
  productId: 131415,
  productName: "Product E",
  productOwnerName: "Evelyn Brown",
  Developers: [
    "Uma",
    "Vincent",
    "Wendy",
    "Xavier"
  ],
  scrumMasterName: "Zoe Turner",
  startDate: "2022/05/01",
  methodology: "Agile"
},
{
  productId: 161718,
  productName: "Product F",
  productOwnerName: "Frank Miller",
  Developers: [
    "Abby",
    "Benjamin",
    "Claire",
    "Daniel"
  ],
  scrumMasterName: "Grace Adams",
  startDate: "2022/06/01",
  methodology: "Waterfall"
},
{
  productId: 192021,
  productName: "Product G",
  productOwnerName: "Grace Adams",
  Developers: [
    "Fiona",
    "George",
    "Hazel",
    "Isaac"
  ],
  scrumMasterName: "Kevin Lee",
  startDate: "2022/07/01",
  methodology: "Waterfall"
},
{
  productId: 222324,
  productName: "Product H",
  productOwnerName: "Harry Thompson",
  Developers: [
    "Katie",
    "Leo",
    "Matthew",
    "Nina"
  ],
  scrumMasterName: "Patricia Davis",
  startDate: "2022/08/01",
  methodology: "Waterfall"
}
];

// adding Helmet for API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

//CORS enabled for all origins
app.use(cors());

//Morgan for logging
app.use(morgan('combined'));

//Endpoint to get all data
app.get('/api', (req, res) => {
  res.send(ads);
});
//Endpoint to get data by id
app.get('/api/product/:id', (req, res) => {
  const ad = ads.find(c => c.productId === parseInt(req.params.id));
  if (!ad) res.status(404).send('The ad with the given ID was not found.');
  res.send(ad);
});
//Endpoint to create new data
app.post('/api/product', (req, res) => {
  const ad = {
    productId: ads.length + 1,
    productName: req.body.productName,
    productOwnerName: req.body.productOwnerName,
    Developers: req.body.Developers,
    scrumMasterName: req.body.scrumMasterName,
    startDate: req.body.startDate,
    methodology: req.body.methodology
  };
  ads.push(ad);
  res.send(ad);
});
//Endpoint to update data by id
app.put('/api/product/:id', (req, res) => {
  // Look up the ad
  // If not existing, return 404
  const ad = ads.find(c => c.productId === parseInt(req.params.id));
  if (!ad) res.status(404).send('The ad with the given ID was not found.');
  // Update ad based on request body
  ad.productName = req.body.productName;
  ad.productOwnerName = req.body.productOwnerName;
  ad.Developers = req.body.Developers;
  ad.scrumMasterName = req.body.scrumMasterName;
  ad.startDate = req.body.startDate;
  ad.methodology = req.body.methodology;
  // Return the updated ad
  res.send(ad);
});
//Endpoint to delete data by id
app.delete('/api/product/:id', (req, res) => {
  // Look up the ad
  // Not existing, return 404
  const ad = ads.find(c => c.productId === parseInt(req.params.id));
  if (!ad) res.status(404).send('The ad with the given ID was not found.');
  // Delete
  const index = ads.indexOf(ad);
  ads.splice(index, 1);
  // Return the same ad with 200
  res.send(ad);
});
//Health check endpoint
app.get('/api/health', (req, res) => {
  //return 200 if the service is up
  res.status(200).send('OK');
});



//start at port 3000 
app.listen(3000, () => {
  console.log('listening on port 3000');
});



//Validation function
function validateAd(ad) {
  const schema = {
    productName: Joi.string().min(3).required(),
    productOwnerName: Joi.string().min(3).required(),
    Developers: Joi.array().items(Joi.string()).min(1).required(),
    scrumMasterName: Joi.string().min(3).required(),
    startDate: Joi.date().required(),
    methodology: Joi.string().min(3).required()
  };
  return Joi.validate(ad, schema);
}