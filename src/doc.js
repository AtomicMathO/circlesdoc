/**
 * @apiDefine User User related endpoints
 *
 * All the logics and endpoints related to the User
 */

/**
 * @apiDefine Circle Circle related endpoints
 *
 * All the logics and endpoints related to the Circle
 */

/**
 * @api {POST} /api/login Signin with an existing user.
 * @apiName LoginUser
 * @apiGroup User
 * @apiSuccess {String} Token A generated Token
 */

/**
 * @api {POST} /api/register Register a new user.
 * @apiName CreateUser
 * @apiGroup User
 *
 * @apiDescription Add mew user's informations in database, on success return User infos and an access token.
 *
 * @apiSuccess {Object} user
 * @apiSuccess {String} user.firstname
 * @apiSuccess {String} user.lastname
 * @apiSuccess {String} user.surname
 * @apiSuccess {String} user.email
 * @apiSuccess {Date} user.birthdate
 * @apiSuccess {String} user.img_url
 * @apiSuccess {String} Token A generated Token
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 Ok
 *    {
 *      "id": "15"
 *      "firstname": "Peppa",
 *      "lastname": "Pig",
 *      "surname": "PeppaP",
 *      "email": "peppapig@oclock.io",
 *      "birthdate": "2001-12-25T00:00:00.000Z"
 *      "img_url": ""
 *      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1LCJpYXQiOjE2NTIwMDY3NDAsImV4cCI6MTY1MjAxMDM0MH0.wYDyyVFdBfJo4aTXrd0AsQJea48I-Nnqt9_Ouru8jV"
 *    }
 */

/**
 * @api {GET} /api/profil/:id Get User's Profil
 * @apiName GetUser
 * @apiGroup User
 * @apiHeader {String} Authorization The token generated at user's login
 *
 * @apiDescription Retrieve user's information from database.
 *
 * @apiParam {Number} id User's unique ID.
 *
 * @apiSuccess {Object} user
 * @apiSuccess {String} user.firstname
 * @apiSuccess {String} user.lastname
 * @apiSuccess {String} user.surname
 * @apiSuccess {String} user.email
 * @apiSuccess {Date} user.birthdate
 * @apiSuccess {String} user.img_url
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 Ok
 *    {
 *      "firstname": "Peppa",
 *      "lastname": "Pig",
 *      "surname": "PeppaP",
 *      "email": "peppapig@oclock.io",
 *      "birthdate": "2001-12-25T00:00:00.000Z"
 *      "img_url": "/public/circles/id/image_id"
 *    }
 * @apiError NoAccessRight Only authenticated User can access the data.
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error.
 *
 * @apiErrorExemple Response (exemple):
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "Unauthorized User"
 *    }
 */

/**
 * @api {PATCH} /api/profil/:id Update User's Profil
 * @apiName PatchUser
 * @apiGroup User
 * @apiHeader {String} Authorization The token generated at user's login
 *
 * @apiDescription Update user's information in the database.
 *
 * @apiParam {Number} id User's unique ID.
 *
 * @apiBody {String} firstname User firstname
 * @apiBody {String} lastname User lastname
 * @apiBody {String} username User username
 * @apiBody {String} email User email
 * @apiBody {Date} birthdate User birthdate
 * @apiBody {String} img_url User image
 *
 * @apiSuccess {Object} user
 * @apiSuccess {String} user.firstname
 * @apiSuccess {String} user.lastname
 * @apiSuccess {String} user.surname
 * @apiSuccess {String} user.email
 * @apiSuccess {Date} user.birthdate
 * @apiSuccess {String} user.img_url
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 Ok
 *    {
 *      "firstname": "Peppa",
 *      "lastname": "Pig",
 *      "surname": "PeppaP",
 *      "email": "peppapig@oclock.io",
 *      "birthdate": "2001-12-25T00:00:00.000Z"
 *      "img_url": "/public/circles/id/image_id"
 *    }
 * @apiError NoAccessRight Only authenticated User can access the data.
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error.
 *
 * @apiErrorExemple Response (exemple):
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "Unauthorized User"
 *    }
 */

/**
 * @api {DELETE} /api/profil/:id Delete a user
 * @apiName DeleteUser
 * @apiGroup User
 * @apiHeader {String} Authorization The token generated at user's login
 *
 * @apiDescription Remove a user from database.
 *
 * @apiParam {Number} id User's unique ID.
 *
 * @apiSuccess {String} result User successfully deleted
 *
 * @apiSuccessExample {String} Success-Response:
 *    HTTP/1.1 200 Ok
 *
 *      User successfully deleted
 *
 * @apiError NoAccessRight Only authenticated User can access the data.
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error.
 *
 * @apiErrorExemple Response (exemple):
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "Unauthorized User"
 *    }
 */

/**
 * @api {GET} /api/profil/:id/circles Get all Circles of a User
 * @apiName GetCirclesByUserId
 * @apiGroup User
 * @apiHeader {String} Authorization The token generated at user's login
 *
 * @apiDescription Retrieve user's information from database.
 *
 * @apiParam {Number} id User's unique ID.
 *
 * @apiSuccess {Array} circles
 * @apiSuccess {Object} circle
 * @apiSuccess {Number} circle.id
 * @apiSuccess {String} circle.name
 * @apiSuccess {String} circle.description
 * @apiSuccess {String} circle.color
 * @apiSuccess {Number} circle.admin_id
 * @apiSuccess {String} circle.unique_code
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 Ok
 *    {
 *      "circle_id": 1,
 *      "name": "Les leveurs de coudes",
 *      "description": "On aime la biere et on en est fiers",
 *      "color": "#00F",
 *      "admin": 18
 *      }
 * @apiError NoAccessRight Only authenticated User can access the data.
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error.
 *
 * @apiErrorExemple Response (exemple):
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "Unauthorized User"
 *    }
 */

/**
 * @api {POST} /api/circle Create a new circle
 * @apiName PostCircle
 * @apiGroup Circle
 * @apiHeader {String} Authorization The token generated at user's login
 *
 * @apiDescription Create a new circle.
 *
 * @apiBody {String} name Circle name
 * @apiBody {String} description Circle description
 * @apiBody {String} color Circle color
 * @apiBody {String} img_url Circle image
 * @apiBody {Number} user_id Circle creator ID
 *
 * @apiSuccess {Object} circle
 * @apiSuccess {Number} circle.id
 * @apiSuccess {String} circle.name
 * @apiSuccess {String} circle.description
 * @apiSuccess {String} circle.color
 * @apiSuccess {Number} circle.admin_id
 * @apiSuccess {String} circle.unique_code
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 201 Ok
 *
 *    {
 *      "id": 1,
 *      "name": "Les leveurs de coudes",
 *      "description": "On aime la biere et on en est fiers",
 *      "color": "#00F",
 *      "admin": 18
 *      "unique_code": "JUE13sbV"
 *      }
 * @apiError NoAccessRight Only authenticated User can access the data.
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error.
 *
 * @apiErrorExemple Response (exemple):
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "Unauthorized User"
 *    }
 */

/**
 * @api {POST} /api/circle/new/:user_id  Add a User to an existint Circle
 * @apiName PostUserToCircle
 * @apiGroup Circle
 * @apiHeader {String} Authorization The token generated at user's login
 *
 * @apiDescription Add a new user to a circle.
 *
 * @apiParam {Number} user_id Id of the User to add
 * @apiBody {Number} circle_id Id of the circle
 *
 *
 * @apiSuccessExample {String} Success-Response:
 *    HTTP/1.1 200 Ok
 *
 *    User added to circle
 *
 * @apiError NoAccessRight Only authenticated User can access the data.
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error.
 *
 * @apiErrorExemple Response (exemple):
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "Unauthorized User"
 *    }
 */

/**
 * @api {DELETE} /api/circle/remove/:user_id Remove a user from an existing Circle
 * @apiName DeleteUserToCircle
 * @apiGroup Circle
 * @apiHeader {String} Authorization The token generated at user's login
 *
 * @apiDescription Add a new user to a circle.
 *
 * @apiParam {Number} user_id Id of the User to add
 * @apiBody {Number} circle_id Id of the circle
 *
 *
 * @apiSuccessExample {String} Success-Response:
 *    HTTP/1.1 204 No Content
 *
 *
 * @apiError NoAccessRight Only authenticated User can access the data.
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error.
 *
 * @apiErrorExemple Response (exemple):
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "Unauthorized User"
 *    }
 */

/**
 * @api {GET} /api/circle/:id Get Circle info by its ID
 * @apiName GetCircle
 * @apiGroup Circle
 *
 * @apiDescription Get Circle Info by its ID.
 *
 * @apiParam {Number} id Circle Id
 *
 * @apiSuccess {Object} user
 * @apiSuccess {String} circle.name
 * @apiSuccess {String} circle.description
 * @apiSuccess {String} circle.color
 * @apiSuccess {String} circle.img_url
 * @apiSuccess {Number} circle.admin
 * @apiSuccess {String} circle.unique_code
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 Ok
 *    {
 *      "id": "1"
 *      "name": "Les leveurs de coudes",
 *      "description": "On aime la biere et on en est fiers",
 *      "color": "#00F",
 *      "img_url": "",
 *      "admin": 18
 *      "unique_code": "JUE13sbV"
 *    }
 * @apiError NoAccessRight Only authenticated User can access the data.
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error.
 *
 * @apiErrorExemple Response (exemple):
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "Unauthorized User"
 *    }
 */

/**
 * @api {PATCH} /api/circle/:id Update Circle selected by its ID
 * @apiName PatchCircle
 * @apiGroup Circle
 *
 * @apiDescription Update Circle selected by its ID.
 *
 * @apiParam {Number} id Circle Id
 *
 * @apiSuccess {Object} user
 * @apiSuccess {String} circle.name
 * @apiSuccess {String} circle.description
 * @apiSuccess {String} circle.color
 * @apiSuccess {String} circle.img_url
 * @apiSuccess {Number} circle.admin
 * @apiSuccess {String} circle.unique_code
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 Ok
 *    {
 *      "id": "1"
 *      "name": "Les leveurs de coudes",
 *      "description": "On aime la biere et on en est fier!!!",
 *      "color": "#00F",
 *      "img_url": "",
 *      "admin": 18
 *      "unique_code": "JUE13sbV"
 *    }
 * @apiError NoAccessRight Only authenticated User can access the data.
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error.
 *
 * @apiErrorExemple Response (exemple):
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "Unauthorized User"
 *    }
 */

/**
 * @api {DELETE} /api/circle/:id Delete a Circle
 * @apiName DeleteUserToCircle
 * @apiGroup Circle
 * @apiHeader {String} Authorization The token generated at user's login
 *
 * @apiDescription Add a new user to a circle.
 *
 * @apiParam {Number} id Id of the circle
 * @apiBody {Number} user_id Id of the User to control if is admin of the circle
 *
 *
 * @apiSuccessExample {String} Success-Response:
 *    HTTP/1.1 204 No Content
 *
 *
 * @apiError NoAccessRight Only authenticated User can access the data.
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error.
 *
 * @apiErrorExemple Response (exemple):
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "Unauthorized User"
 *    }
 */
