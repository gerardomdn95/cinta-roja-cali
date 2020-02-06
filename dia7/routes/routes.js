const express = require('express');
const router = express.Router();

const Movie = require('../schema/movies');
const mainRoute = '/api/v1';

router.get('/', (request, response) => {
    response.status(200).send('Server Arriba');
});

// CRUD

// Create
router.post(`${mainRoute}/createMovie`, (req, res) => {
    const { title, year, description, image, theme, director } = req.body;
    const newMovie = Movie({
        title,
        year,
        description,
        image,
        theme,
        director
    });
    newMovie.save((err, movie) => {
        err
            ? res.status(409).send(err)
            : res.status(201).send(movie._id);
    });
});

// Read
router.get(`${mainRoute}/getMovies`, (req, res) => {
    Movie.find((err, movies) => {
        err
            ? res.status(404).send(err)
            : res.status(200).send(movies);
    });
});

router.get(`${mainRoute}/getMovieById`, (req, res) => {
    const { id } = req.query;
    Movie.findById(id, (err, movie) => {
        err
            ? res.status(404).send(err)
            : res.status(200).send(movie);
    });
});

// Update
// Completamete el registro
router.put(`${mainRoute}/updateMovieById`, (req, res) => {
    const { id } = req.query;
    const { title, year, description, image, theme, director } = req.body;
    if(Object.keys(req.body).length === 6) {
        Movie.findByIdAndUpdate(id, {
            title,
            year,
            description,
            image,
            theme,
            director
        }, (err, movie) => {
            err
                ? res.status(304).send(err)
                : res.status(202).send(movie._id)
        })
    } else {
        res.status(400).send('Método incorrecto, intemnta utilizar PATCH');
    }
});

// Parcilmente el registro
router.patch(`${mainRoute}/updateMovieById`, (req, res) => {
    const { id } = req.query;
    const { title, year, description, image, theme, director } = req.body;
    if(Object.keys(req.body).length < 6 && Object.keys(req.body).length > 0) {
        Movie.findByIdAndUpdate(id, {
            title,
            year,
            description,
            image,
            theme,
            director
        }, (err, movie) => {
            err
                ? res.status(304).send(err)
                : res.status(202).send(movie._id)
        })
    } else {
        res.status(400).send('Método incorrecto, intemnta utilizar PATCH');
    }
});

// Delete
router.delete(`${mainRoute}/deleteMovieById`, (req, res) => {
    const { id } = req.query;
    Movie.findOneAndDelete(id, (err, movie) => {
        err
            ? res.status(404).send(err)
            : res.status(204).send()
    })
});

module.exports = router;