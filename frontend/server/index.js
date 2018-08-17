const express = require('express')
const path = require('path');
const proxy = require('express-http-proxy');
const app = express();

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
app.use(express.static('dist'))
app.use('/api', proxy('http://localhost:8080/project2'));
app.post('/run', async (req, res) => {
    try {
        const json = await runForeignTests();
        res.json(json);
    } catch (err) {
        res.status(500).send(err);
    }
});

const publicPath = '/';
const outputPath = path.resolve(process.cwd(), 'dist/frontend');

// compression middleware compresses your server responses which makes them
// smaller (applies also to assets). You can read more about that technique
// and other good practices on official Express.js docs http://mxs.is/googmy
//app.use(compression());
app.use(publicPath, express.static(outputPath));

app.get('*', (req, res) =>
res.sendFile(path.resolve(outputPath, 'index.html')),
);


app.listen(80, () => console.log('Example app listening on port 80!'))
