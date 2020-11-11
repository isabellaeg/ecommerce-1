const express = require("express");
const path = require("path");
const parser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const helmet = require("helmet");
const db = require("./api/db/db");
const cors = require("cors");

const morgan = require("morgan");

const routes = require("./api/Routes");
const { User } = require("./api/Models/index");

const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));
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

//Facebook Auth

passport.use(
  new FacebookStrategy(
    {
      clientID: "1063540104067137",
      clientSecret: "85ee31aaa7d5c2b2776bcb50599d7a10",
      callbackURL: "http://localhost:4000/api/auth/facebook/callback",
      profileFields: ["email", "name"],
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log("profile = ", profile);

      User.findOne({
        where: {
          //nickname: profile.name.givenName + " " +  profile.name.familyName,
          email: profile.emails[0].value,
          //password : profile.id,
        },
      }).then((user) => {
        if (!user) {
          User.create({
            email: profile.emails[0].value,
            nickname: profile.name.givenName + " " + profile.name.familyName,
            password: profile.id,
          }).then((user) => {
            cb(null, user);
          });
        } else {
          cb(null, user);
        }
      });
    }
  )
);

//       User.findOrCreate({
//         where: {
//           //nickname: profile.name.givenName + " " +  profile.name.familyName,
//           email: profile.emails[0].value,
//           //password : profile.id,
//         },
//         default: {
//           nickname: profile.name.givenName + " " + profile.name.familyName,
//           password: profile.id,
//         },
//       })
//         .then((user) => {
//           console.log("User Callback = ", user);
//           cb(null, user);
//         })
//         .catch(cb);
//     }
//   )
// );

passport.serializeUser(function (user, done) {
  console.log("User[0] del serialize = ", user[0]);
  if (user.length > 0) {
    done(null, user[0].id);
  } else {
    done(null, user.id);
  }
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id).then((user) => done(null, user));
});

app.use("/api", routes);
app.use("/*", function (req, res, next) {
  res.sendFile(__dirname + "/public/index.html");
});

db.sync({ force: false }).then(() => {
  //app.listen(3000, () => console.log("listening on 3000..."));
  app.listen(4000, () => console.log("listening on 4000..."));
});

module.exports = app;
