const express = require('express');
const app = express();

app.use(express.json());
const fs = require('fs');

app.post('/profile', (req, res) => {
    const profile = req.body;

    fs.readFile('profiles.json', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).json({ error: 'Server error while reading file' });
        }

        let profiles = [];
        if (!err) {
            try {
                profiles = JSON.parse(data);
            } catch (parseError) {
                return res.status(500).json({ error: 'Server error while parsing profiles' });
            }
        }

        profiles.push(profile);

        fs.writeFile('profiles.json', JSON.stringify(profiles, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Server error while writing file' });
            }
            res.status(201).json({ message: 'Profile saved successfully' });
        });
    });
});

app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});
