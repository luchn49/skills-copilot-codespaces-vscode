// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for PUT /comments/:id
// 5. Create a route for DELETE /comments/:id
// 6. Start the server
// 7. Test the API
function createWebServer() {
  const express = require('express');
  const app = express();
  app.use(express.json());
  app.get('/comments', (req, res) => {
    res.json([]);
  });
  app.post('/comments', (req, res) => {
    res.status(201).json({ id: 1 });
  });
  app.put('/comments/:id', (req, res) => {
    res.json({ id: 1 });
  });
  app.delete('/comments/:id', (req, res) => {
    res.status(204).send();
  });
  app.listen(3000, () => console.log('Server is running'));
}