// Create web server
// 1. Install express
// 2. Import express
// 3. Create app
// 4. Create router
// 5. Create router handler
// 6. Export router
// 7. Import router in index.js
// 8. Add router as middleware

const express = require('express');
const router = express.Router();

// GET /comments
router.get('/', (req, res) => {
  res.send('Get all comments');
});

// GET /comments/:id
router.get('/:id', (req, res) => {
  res.send('Get comment with id: ' + req.params.id);
});

// POST /comments
router.post('/', (req, res) => {
  res.send('Create comment');
});

// PUT /comments/:id
router.put('/:id', (req, res) => {
  res.send('Update comment with id: ' + req.params.id);
});

// DELETE /comments/:id
router.delete('/:id', (req, res) => {
  res.send('Delete comment with id: ' + req.params.id);
});

module.exports = router;

