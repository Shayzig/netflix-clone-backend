import { dbService } from '../../services/db.service.js';
import { logger } from '../../services/logger.service.js';
import mongodb from 'mongodb';
const { ObjectId } = mongodb;

async function query() {
    try {
        const criteria = {};
        const collection = await dbService.getCollection('myList');
        const movieCursor = await collection.find(criteria);
        const movies = await movieCursor.toArray();
        return movies;
    } catch (err) {
        logger.error('cannot find movies', err);
        throw err;
    }
}

async function getById(movieId) {
    try {

        const collection = await dbService.getCollection('myList');
        const movie = await collection.findOne({ _id: ObjectId });

        return movie;
    } catch (err) {
        logger.error(`while finding movie ${movieId}`, err);
        throw err;
    }
}

async function remove(movieId) {
    try {

        const collection = await dbService.getCollection('myList');
        await collection.deleteOne({ _id: ObjectId });
        return movieId;
    } catch (err) {
        logger.error(`cannot remove movie ${movieId}`, err);
        throw err;
    }
}

async function add(movie) {
    try {
        const collection = await dbService.getCollection('myList');
        await collection.insertOne(movie);
        return movie;
    } catch (err) {
        logger.error('cannot insert movie', err);
        throw err;
    }
}

export const movieService = {
    remove,
    query,
    getById,
    add,
};
