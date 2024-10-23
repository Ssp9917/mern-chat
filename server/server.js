import express from 'express'
import cors from 'cors'
const app = express();
const port = process.env.PORT || 6001;


// middleware
app.use(cors());
app.use(express.json());

//connect to mongoDB config
// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.lfvbtud.mongodb.net/MRKing-DB?retryWrites=true&w=majority`)
// .then(() => console.log('MongoDB connected...'))


//   import routes here



app.get("/", (req, res) => {
  res.send("Hello Foodi Client Server!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});