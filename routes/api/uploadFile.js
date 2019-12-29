const express = require('express');
const router = express.Router();

// Make an absolute path
const resolve = require('path').resolve;

router.post('/', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;
    file.mv(`${resolve('client')}/public/uploads/${file.name}`, err => {
        if (err) {
            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `/uploads${file.name}` });
    })
});

module.exports = router;