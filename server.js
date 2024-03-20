const express = require('express');
const allRoutes = require('./routes/allRoutes');
const app = express();

 app.use ('/',allRoutes)

const PORT = 1337

app.get('/', (req, res, next) => {
    res.send(`Server is running.Visit http://localhost${PORT} to access`);
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})