module.exports = {
	strictMode: true,
	env: {
		WEBSITE_NAME: "Your Secret",
		WEBSITE_DESCRIPTION: "Share everything you ever wanted anonymously!",
		WEBSITE_NAME_HTTP_STRING: "yoursecret",
		PRODUCTION: false,
	},
	images: {
		domains: [
			"gravatar.com",
			"s3-us-west-1.amazonaws.com",
			"befreebucket-for-outputs.s3.amazonaws.com",
			"kevinurielfonseca.me",
			"i0.wp.com",
		],
	},
};
