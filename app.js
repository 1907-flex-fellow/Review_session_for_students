const express = require('express');
const path = require('path');

const { User, Note } = require('./db').models;

const app = express();
module.exports = app;
app.use(express.json());
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));


// get route /api/notes
app.get('/api/notes', (req, res, next)=> {
    Note.findAll()
        .then( notes => res.send(notes))
        .catch(next)
})
// post route /api/notes
app.post('/api/notes', (req, res, next)=> {
    Note.create(req.body)
        .then(note => res.send(note))
        .catch(next)
})
// put /api/users/notes/:id
app.put('/api/users/notes/:id', (req, res, next)=> {
    Note.findByPk(req.params.id)
        .then(note => note.update(req.body))
        .then(note => res.send(note))
        .catch(next)
})
// delete /api/notes/:id
app.delete('/api/notes/:id', (req, res, next)=>{
    // Note.destroy({
    //     where: {
    //         id: req.params.id
    //     }
    // })    
    Note.findByPk(req.params.id)
        .then(note => note.destroy())
        .then(() => res.status(204))
        .catch(next)
})
