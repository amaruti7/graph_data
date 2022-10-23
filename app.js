const express = require('express');
const generatebargraph = require('./controller/bar');
const generatedonutgraph = require('./controller/donut');
const userData = require('./default/user_data');
const app = express();

const port = 9000;

app.get('/bar/:id', (req, res) => {
    const id = req.params.id;
    const bargraphdata = generatebargraph(userData, id);
    res.json(bargraphdata);
});

app.get('/donut', (req, res) => {
    const donutGraphData = generatedonutgraph(userData);
    res.json(donutGraphData);
})

app.listen(port, () => {
    console.log('server started!!!' + port);
});
