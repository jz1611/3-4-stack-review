const express = require('express');
const app = express();
const pC = require("./controller/puppyController");
app.use(express.json());

app.get('/api/puppies', pC.getAllPuppies);
app.get('/api/puppy/:id', pC.getPuppyById);
app.post('/api/puppy', pC.postPuppy);
app.put('/api/puppy/:id', pC.updatePuppy);
app.delete('/api/unsmuggle/:id', pC.unsmugglePuppy);

const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));