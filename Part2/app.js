const express = require('express');
const app = express();

app.use(express.json());

app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});
