const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const indexHtml = require('./public/index');
const notes = require('./public/notes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/', indexHtml);
app.use('/', notes);



// The following HTML routes should be created:

// GET /notes should return the notes.html file.
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/note.html'));
});

// GET * should return the index.html file.

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
  

// The following API routes should be created:

// GET /api/notes should read the db.json file and return all saved notes as JSON.
const { db} = require('./db/db.json');

router.get('/api/notes', (req, res) => {
  let results = zookeepers;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});
// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
app.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = animals.length.toString();
  
    if (!validateAnimal(req.body)) {
      res.status(400).send('The animal is not properly formatted.');
    } else {
      const animal = createNewAnimal(req.body, animals);
      res.json(animal);
    }
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
