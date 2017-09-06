var router=require('express').Router();
var sequelize=require('../db.js');
var User=sequelize.import('../models/user');


router.post('/', function(req, res) {
	
	var username = req.body.user.username;
	var pass = req.body.user.password;   //TODO; hash this password-HASH=not human readable


	User.create({
		username: username,
		passwordhash: ''  //TODO: make it hashed
	}).then(
			//Sequlize is going to return the object it created from db.
			function createSuccess(user){
				//successful get this:
				res.json({
					user: user,
					message: 'created'
				});

			},
			function createError(err){
				res.send(500, err.message);

			}
		);
});

module.exports=router;