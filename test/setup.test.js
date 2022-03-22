process.env.NODE_ENV = "test";


import dbUser from "../models/dbUsers";

import blogArticles from "../models/blogArticles";

import messageQuerries from "../models/messageQueries";


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
