import express from 'express'; //import express
import initialize from './app/app.js';

const app = express(); ///Create the express app
const port = 3007;
initialize(app);
app.listen(port, () => console.log(`Server is listening at port ${port}`)); //Listen to the specific port