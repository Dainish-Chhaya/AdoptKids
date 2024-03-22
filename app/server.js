import express from "express"; //import express
import initialize from "./app.js";

const app = express(); ///Create the express app
const port = 3000;
initialize(app);
app.listen(port, () => console.log(`Server is listening at port ${port}`)); //Listen to the specific port
