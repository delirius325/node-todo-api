var mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Todoapp';

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI);

console.log(`Connected to ${MONGODB_URI}`);

module.exports = {
    mongoose
}