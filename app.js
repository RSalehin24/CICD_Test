const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to Azure!')
});

app.listen(8080, () => {
    console.log('Server is listening to the port 8080 ...')
})