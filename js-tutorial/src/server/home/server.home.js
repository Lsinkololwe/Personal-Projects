const express = require('express');
const router = express.Router()

router.get('/', (req, res) => { 
    res.json({ page: 'home page' })
});

router.get('/test', (req, res) => { 
    res.json({ page: 'test page' })
});

module.exports = router;