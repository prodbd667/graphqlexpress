import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

mongoose.connection.on('open', (ref) => console.log('connect to mongo server'));
mongoose.connection.on('error', (err) => {
    console.log('connect to mongo server');
    console.log(err);
});

mongoose.connect('');