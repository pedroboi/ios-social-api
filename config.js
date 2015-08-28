module.exports = {
  host: '0.0.0.0',
  port: process.env.PORT || 3000,
  secret: 'thisIsASimpleSecret123',
  issuer: 'ACode',
  cookieName:'socialAPI',
  tokenExpiration: 60*24,
  availableFriendsLimit: 8,
  mongo: {
	  uri: 'mongodb://acsocial:ac4success@ds047478.mongolab.com:47478/social',
	  options: {
		  db: {
			safe: true
		  }		  
	  }
  }
};