// Express appni boshlab olish
const express = require("express");
const app = express();

var cors = require('cors')
app.use(cors())
// mongooseni yuklab olish
const mongoose = require('mongoose');

// Dotenv orqali port numberni olib olish
require("dotenv").config();
const port = process.env.PORT;
// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});
 
// routers
const productRouter = require("./routes/productsRoute");
 app.use("/products", productRouter);
const categoryRouter = require("./routes/categorys");
app.use("/categorys", categoryRouter);
const userRouter = require("./routes/users");
app.use('/users', userRouter);

// Databasega ulanish
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL)
  .then(()=>{
    app.listen(port, () => {
      console.log(`Server ${port} portda ishga tushdi va MongoDB ga ulandi`);
    });
  })
  .catch(err=> console.log(err))
