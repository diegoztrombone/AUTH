const UserModel = require("../model/Users");

const passportSignupController = async (email, password, done) => {
  try {
    
    const user = await UserModel.create({ email, password });

    return done(null, user);
  } catch (error) {
    done({info: new Error("Email in use")});
  }
};

const passportLoginController = async (email, password, done) => {
  try {

    const user = await UserModel.findOne({ email });
    
    if (!user) {
      return done(null, false);
    }

    const validate = await user.isValidPassword(password);


    if (!validate) {
      return done(null, false);
    }

    return done(null, user);
  } catch (error) {
    done(error);
  }
};


const passportJWTcontroller = async (token, done) => {
  try {
    return done(null, token.user);
  } catch (error) {
    done(error);
  }
};


// const passportGithubController = async (accessToken, refreshToken, profile, done) => {
//   try {
//     // Vamos a buscar en la BBDD si el id que github nos ha enviado desde el front
//     const user = await UserModel.findOne({ githubID: profile.id });

//     // Si ya esta registrado le mandamoos adelante con el middleware de passport
//     if (user) {
//       return done(null, user);
//     }

//     // Si no esta en la BBDD lo creamos con las info enviado por parte de github
//     const newUser = UserModel.create({ 
//       githubID: profile.id,
//       email: profile.emails[0].value
//      });

//     // Una vez registrado seguimos con el nuevo usuario creado con el middleware
//     return done(null, newUser);
//   } catch (error) {
//     done(error);
//   }
// };

// module.exports = {
//   passportSignupController,
//   passportLoginController,
//   passportGithubController,
//   passportJWTcontroller,
// };

module.exports = {
  passportSignupController,
  passportLoginController,
  passportJWTcontroller,
};

