const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
    pathname: String,
    name: {
        type: String,
        required: true
    },
    typeENG: String,
    typeSPA: String,
    year: Number,
    technologies: [
        {
            type: Schema.ObjectId,
            ref: 'technologies'
        }
    ],
    ux: String,
    url: String,
    gitHub: String,
    images: [
        {
            url: String
        }
    ],
    descriptionENG: String,
    descriptionSPA: String,
    inDevelopment: Boolean,
    available: Boolean
});

const technologiesSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

const usersSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    }
});

const Projects = mongoose.model('projects', projectsSchema);
const Technologies = mongoose.model('technologies', technologiesSchema);
const Users = mongoose.model('users', usersSchema);

module.exports = {
    Projects,
    Technologies,
    Users
};