import express from 'express';
import bodyParser from 'body-parser';

import {
    graphqlExpress,
    graphiqlExpress
} from 'graphql-server-express';

import cors from 'cors';

import schema from './data/schema';

import './db';

const PORT = 4000;

const server = express();

const router = express.Router();

/** */
router.post('/graphql', graphqlExpress({ schema }));
router.get('/graphql', graphqlExpress({ schema }));

/** */
// middleware
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});


server.use(bodyParser.json());
server.use('*', cors({origin: 'http://localhost:3000'}));

server.get('/', function (req, res) {
    res.send('hello world');
});

server.use('/api', router);

server.use('/graphiql', graphiqlExpress({ endpointURL: '/api/graphql' }));

server.listen(PORT, () => console.log('server running'));