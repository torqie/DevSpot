const db = require("../models");
module.exports = async function(req, res, next) {
  // Get token from header
  const token = req.header('Authorization');
  console.log('Token: ', token);

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
    db.User.findOne({accessToken: token}).then(response => {
      console.log("asdfasdfs", response);
      //If response is empty token isn't valid
      if(response.length <= 0) {
        res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req.user = response.data;
        next();
      }
      // Else set the req.user and go to next
    }).catch(error => {
      console.log('Error verifying access token', error);
    });

};