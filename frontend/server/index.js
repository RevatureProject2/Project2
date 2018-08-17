const express = require('express')
const app = express()

const runForeignTests = require('./middleware/runForeignTests');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Methods", "DELETE");
    res.header("Access-Control-Allow-Methods", "PUT");
    next();
  });

app.post('/run', async (req, res) => {
    try {
        const json = await runForeignTests();
        res.json(json);
    } catch (err) {
        res.status(500).send(err);
    }
});
app.get('/', (req, res) => res.send('Hello NullPointerException!!!'))

app.listen(3001, () => console.log('Example app listening on port 3001!'))
