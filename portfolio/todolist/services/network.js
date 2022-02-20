let hostname = process.env.LOCAL_URI;
// LOCAL_URI = http://localhost:8081

const version = "/v1";
hostname = hostname + version;
const addURL = hostname + "/todos/add/";
const listAPI = hostname + "/todos/list/";
const updateURL = hostname + "/todos/update/";
const delURL = hostname + "/todos/del/";

const loginURL = hostname + "/login";
const signUpURL = hostname + "/signup";

const twitterRedirect = hostname + "/auth/twitter";
const twitterSuccess = hostname + "/auth/twitter/login/success";
const twitterLogout = hostname + "/auth/twitter/logout";

const googleRedirect = hostname + "/auth/google";
const googleSuccess = hostname + "/auth/google/login/success";
const googleLogout = hostname + "/auth/google/logout";

const fbRedirect = hostname + "/auth/fb";
const fbSuccess = hostname + "/auth/fb/login/success";
const fbLogout = hostname + "/auth/fb/logout";

export {
	googleRedirect,
  googleSuccess,
	googleLogout,
  fbRedirect,
  fbSuccess,
	fbLogout,
  twitterRedirect,
  twitterSuccess,
	twitterLogout,
	addURL,
	listAPI,
	updateURL,
	delURL,
	loginURL,
	signUpURL,
};
