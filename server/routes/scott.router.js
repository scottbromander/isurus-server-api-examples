const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

const googleMapsClient = require('@google/maps').createClient({
    key: process.env.GOOGLE_MAPS_API_KEY,
    Promise: Promise
});

/**
 * GET route template
 */
router.get('/', (req, res) => {

    googleMapsClient.geocode({address: '2622 Radisson Woods Drive, Blaine, MN 55449'})
    .asPromise()
    .then((response) => {
        console.log(response.json.results);
        res.send(response.json.results);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;

// GITHUB EXAMPLE
// axios({
//     method: 'GET',
//     url: 'https://api.github.com/users/scottbromander'
// }).then((response) => {
//     res.send(response.data);
// }).catch((err) => {
//     console.log('ERR IN API REQUEST:' + err);
//     res.sendStatus(500);
// })

// GIPHY EXAMPLE
// const giphyApiKey = process.env.GIPHY_API_KEY;
// const giphySearch = 'cats';
// const apiString = `http://api.giphy.com/v1/gifs/search?q=${giphySearch}&api_key=${giphyApiKey}&limit=5`;

// axios({
//     method: 'GET',
//     url: apiString
// }).then(response => {
//     res.send(response.data);
// }).catch(err => {
//     console.log('ERR!!!!!' + err);
//     res.sendStatus(500);
// })