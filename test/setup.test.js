process.env.NODE_ENV = "test";

// const dbUser  = require('../models/dbUsers')
import dbUser from "../models/dbUsers";
// const blogArticles = require('../models/blogArticles')
import blogArticles from "../models/blogArticles";
// const messageQuerries = require("../models/messageQueries");
import messageQuerries from "../models/messageQueries";

//Cleaning The Database Before And After Each Test
before((done) => {
  dbUser.deleteMany({}, function (err) {});
  blogArticles.deleteMany({}, function (err) {});
  messageQuerries.deleteMany({}, function (err) {});
  done();
});

after((done) => {
  dbUser.deleteMany({}, function (err) {});
  blogArticles.deleteMany({}, function (err) {});
  messageQuerries.deleteMany({}, function (err) {});
  done();
});
