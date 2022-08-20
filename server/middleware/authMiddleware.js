const jwt = require('jsonwebtoken');
function auth(req, res, next) {
	let accessToken = req.headers['x-auth-token'];

	if (!accessToken) {
		console.log('no access token');
		return res.status(401).json({ msg: 'No token, authorization denied' });
	}

	try {
		const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN);
		// add user from payload
		req.user = decoded;

		next();
	} catch (error) {
		res.status(400).json({ msg: 'token is not valid' });
	}
}

module.exports = auth;
