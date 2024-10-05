const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
async function signUp(req, res) {
     try {
          console.log(req.body, 'req.body');
          let password = bcrypt.hashSync(req.body.password, saltRounds);
          console.log(password, 'password');
          let user = new User(req.body);
          user.password = password;
          await user.save();
          // res.end("<h1> Sign up successfully.. </h1>");

          res.redirect('/');
     } catch (err) {
          console.log(err);
     }
}
async function getUsers(req, res) {
     try {
          let users = await User.find({})
          console.log(users);
          //res.send(users);
          res.render('userlist', {
               users: users
          })
     } catch(err) {
          console.log(err);
     }
}
async function doLogin(req, res) {
     try {
          console.log(req.body);
          let user = await User.findOne({email: req.body.email});
          if(!User) {
               res.end("<h1> No user Exit..</h1>");
          } else {
               let isMatch = await bcrypt.compare(req.body.password, user.password);
               if(isMatch) {
               res.end("<h1> Login Successfully...</h1>");
               } else {
                    res.end("<h1> Incorrect Password...<h1>");
               }
          }
     } catch(err) {
          console.log(err);
     }
}
module.exports = {
     signUp,
     getUsers,
     doLogin
}