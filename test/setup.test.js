process.env.NODE_ENV = "test";


import dbUser from "../src/models/dbUsers";

import blogArticles from "../src/models/blogArticles";

import messageQuerries from "../src/models/messageQueries";


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
