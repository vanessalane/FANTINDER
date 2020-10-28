const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
    {
        movieId: {
            type: Schema.Types.ObjectId
        },
        tmdbId: {
            type: Number,
            required: true,
            unique: true
        },
        rating: {
            type: Number,
        },
        voteCount: {
            type: Number,
        },
        title: {
            type: String,
            required: true,
        },
        overview: {
            type: String,
            required: true,
        },
        releaseDate: {
            type: String,
        },
        poster: {
            type: String,
        },
        trailer: {
            type: String,
        }
    }
);

const Movie = model('Movie', movieSchema);

module.exports = Movie;