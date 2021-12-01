const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to Azure, RSalehin24!')
});

app.listen(8080, () => {
    console.log('Server is listening to the port 8080 ...')
})