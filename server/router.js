const express = require('express');
const app = express();

const projectsRouter = require('./network/projects');
const technologiesRouter = require('./network/technologies');
const usersRouter = require('./network/users');

app.use('/projects', projectsRouter);
app.use('/technologies', technologiesRouter);
app.use('/users', usersRouter);

module.exports = app;