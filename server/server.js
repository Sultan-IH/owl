var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



//routers
var projectsRouter = require('./routers/projects');
var profilesRouter = require('./routers/profiles');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.use("/projects", projectsRouter);
app.use("/profiles", profilesRouter)

app.use(express.static(path.join(__dirname, '../build')));

app.listen(9009, () => console.log("OWL started on 9009"))