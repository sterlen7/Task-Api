const express = require('express');
const app = express();


const allRoutes = require('./routes/allRoutes')


 app.use ('/',allRoutes)

const PORT = 5000

app.get('/', (req, res, next) => {
    res.send(`Server is running.Visit http://localhost${PORT} to access`);
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})