const express = require("express");
const path = require("path");
const parser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const helmet = require("helmet");
const db = require("./api/db/db");

const routes = require("./api/Routes");
const { User } = require("./api/Models/index");

const app = express();
app.use(helmet());

app.use(cookieParser());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(
  session({
    secret: "canalcultural",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false);
            }
            done(null, user);
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id).then((user) => done(null, user));
});

app.use("/api", routes);

db.sync({ force: false }).then(() => {
  //app.listen(3000, () => console.log("listening on 3000..."));
  app.listen(4000, () => console.log("listening on 4000..."));
});

module.exports = app;
