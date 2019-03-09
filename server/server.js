var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var db = require('./routers/db')

//routers
var projectsRouter = require('./routers/projects');
var profilesRouter = require('./routers/profiles');
var matchingRouter = require('./routers/match')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.use("/projects", projectsRouter);
app.use("/profiles", profilesRouter)
app.use("/match", matchingRouter)

app.use(express.static(path.join(__dirname, '../build')));

db.setup()

app.listen(9009, () => console.log("OWL started on 9009"))