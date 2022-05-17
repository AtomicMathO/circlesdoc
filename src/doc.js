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
 * @apiDefine Dashboard Dashboard related endpoint
 *
 * All the logics and endpoints related to the User's Dashboard
 */

/**
 * @apiDefine Event Event related endpoint
 *
 * All the logics and endpoints related to the Events of a Circle
 */

/**
 * @api {POST} /api/login Signin with an existing user.
 * @apiName LoginUser
 * @apiGroup User
 *
 * @apiBody {String} email User email
 * @apiBody {String} password User password
 *
 * @apiSuccess {Boolean} Logged User is logged
 * @apiSuccess {Number} user_id User's ID
 * @apiSuccess {String} surname User's surname
 * @apiSuccess {String} Token A generated Token
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 Ok
 *    {
 *      "logged": true,
 *      "user_id": 15,
 *      "surname": "PeppaP",
 *      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1LCJpYXQiOjE2NTIwMDY3NDAsImV4cCI6MTY1MjAxMDM0MH0.wYDyyVFdBfJo4aTXrd0AsQJea48I-Nnqt9_Ouru8jV"
 *    }
 */

/**
 * @api {POST} /api/register Register a new user.
 * @apiName CreateUser
 * @apiGroup User
 *
 * @apiDescription Add mew user's informations in database, on success return User infos and an access token.
 *
 * @apiBody {String} firstname User firstname
 * @apiBody {String} lastname User lastname
 * @apiBody {String} surname User surname
 * @apiBody {String} email User email
 * @apiBody {String} password User password
 * @apiBody {Date} birthdate User birthdate
 * @apiBody {String} img_url User img_url
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
 * @api {POST} /api/circle/new/:user_id  Add a User to an existing Circle
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
 * @apiHeader {String} Authorization The token generated at user's login
 *
 * @apiDescription Get Circle Info by its ID.
 *
 * @apiParam {Number} id Circle Id
 *
 * @apiSuccess {Object} circle
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

/**
 * @api {GET} /api/dashboard/:id Get All Circles and theirs infos by a user'id
 * @apiName Dashboard
 * @apiGroup Dashboard
 * @apiHeader {String} Authorization The token generated at user's login
 *
 * @apiDescription Get All Circles and theirs infos by a user'id.
 *
 * @apiParam {Number} id User Id
 *
 * @apiSuccess {Object[]} circle
 * @apiSuccess {Number} circle.circle_id
 * @apiSuccess {String} circle.name
 * @apiSuccess {String} circle.description
 * @apiSuccess {String} circle.color
 * @apiSuccess {String} circle.img_url
 * @apiSuccess {Object[]} circle.admin
 * @apiSuccess {Number} circle.admin.id
 * @apiSuccess {String} circle.admin.firstname
 * @apiSuccess {String} circle.admin.lastname
 * @apiSuccess {String} circle.admin.surname
 * @apiSuccess {String} circle.admin.email
 * @apiSuccess {Date} circle.admin.birthdate
 * @apiSuccess {String} circle.admin.img_url
 * @apiSuccess {String} circle.admin.img_url
 * @apiSuccess {String} circle.unique_code
 * @apiSuccess {Number} circle.users_count
 * @apiSuccess {Object[]} circle.users
 * @apiSuccess {Number} circle.users.id
 * @apiSuccess {String} circle.users.firstname
 * @apiSuccess {String} circle.users.lastname
 * @apiSuccess {String} circle.users.surname
 * @apiSuccess {String} circle.users.email
 * @apiSuccess {Date} circle.users.birthdate
 * @apiSuccess {String} circle.users.img_url
 * @apiSuccess {Number} circle.futur_events
 * @apiSuccess {Object[]} circle.events
 * @apiSuccess {Number} circle.events.id
 * @apiSuccess {Date} circle.events.start
 * @apiSuccess {Date} circle.events.end
 * @apiSuccess {String} circle.events.title
 * @apiSuccess {String} circle.events.description
 * @apiSuccess {String} circle.events.color
 * @apiSuccess {Boolean} circle.events.allday
 * @apiSuccess {Object[]} circle.messages
 * @apiSuccess {String} circle.messages.text
 * @apiSuccess {Date} circle.messages.time
 * @apiSuccess {String} circle.messages.surname
 * @apiSuccess {Number} circle.messages.user_id
 * @apiSuccess {Number} circle.messages.img_url
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 Ok
 * [
 *  {
 *      "circle_id": 5,
 *      "name": "Le gras c'est la vie.",
 *      "description": "Kaamelott et Bacon, quoi de mieux ?",
 *      "color": "#F00",
 *      "img_url": "https://picsum.photos/300/200",
 *      "admin": [
 *          {
 *              "id": 1,
 *              "email": "chuck.norris@oclock.io",
 *              "img_url": "https://randomuser.me/api/portraits/men/75.jpg",
 *              "surname": "ChuckN",
 *              "lastname": "Norris",
 *              "birthdate": "1950-12-25",
 *              "firstname": "Chuck"
 *          }
 *      ],
 *      "unique_code": "c05YWfEb",
 *      "users_count": "2",
 *      "users": [
 *          {
 *              "id": 1,
 *              "email": "chuck.norris@oclock.io",
 *              "img_url": "https://randomuser.me/api/portraits/men/75.jpg",
 *              "surname": "ChuckN",
 *              "lastname": "Norris",
 *              "birthdate": "1950-12-25",
 *              "firstname": "Chuck"
 *          },
 *          {
 *              "id": 2,
 *              "email": "elon.musk@oclock.io",
 *              "img_url": "https://randomuser.me/api/portraits/men/15.jpg",
 *              "surname": "ElonM",
 *              "lastname": "Musk",
 *              "birthdate": "1960-11-06",
 *              "firstname": "Elon"
 *          }
 *      ],
 *      "futur_events": "1",
 *      "events": [
 *          {
 *              "id": 7,
 *              "end": "2022-05-28T00:00:00+00:00",
 *              "color": "#F0F",
 *              "start": "2022-05-28T00:00:00+00:00",
 *              "title": "Petite fête avec Trotro",
 *              "allday": true,
 *              "user_id": 4,
 *              "circle_id": 5,
 *              "created_at": "2022-05-12T10:35:18.488522+00:00",
 *              "description": "On va s'éclater avec mon ami Trotro"
 *          }
 *      ],
 *      "messages": [
 *          {
 *              "text": "Hello",
 *              "time": "2022-05-17T12:49:10.77065+00:00",
 *              "img_url": "https://randomuser.me/api/portraits/men/75.jpg",
 *              "surname": "ChuckN",
 *              "user_id": 1
 *          },
 *          {
 *              "text": "coucou peppa pig !",
 *              "time": "2022-05-17T12:50:26.931613+00:00",
 *              "img_url": "https://randomuser.me/api/portraits/men/75.jpg",
 *              "surname": "ChuckN",
 *              "user_id": 1
 *          }
 *      ]
 *  }
 * ]
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
 * @api {GET} /api/circle/:circle_id/event Get all the Events of a circle
 * @apiName GetEvents
 * @apiGroup Event
 * @apiHeader {String} Authorization The token generated at user's login
 *
 * @apiDescription Get all the Events of a circle.
 *
 * @apiParam {Number} circle_id Circle Id
 *
 * @apiSuccess {Object[]} event
 * @apiSuccess {Number} event.id
 * @apiSuccess {String} event.title
 * @apiSuccess {Date} event.start
 * @apiSuccess {Date} event.end
 * @apiSuccess {String} event.description
 * @apiSuccess {Boolean} event.allday
 * @apiSuccess {Number} event.user_id
 * @apiSuccess {Number} event.circle_id
 * @apiSuccess {String} event.color
 * @apiSuccess {Date} event.created_at
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 Ok
 * [
 *    {
 *        "id": 7,
 *        "title": "Petite fête avec Trotro",
 *        "start": "2022-05-28T00:00:00.000Z",
 *        "end": "2022-05-28T00:00:00.000Z",
 *        "description": "On va s'éclater avec mon ami Trotro",
 *        "allday": true,
 *        "user_id": 4,
 *        "circle_id": 5,
 *        "color": "#F0F",
 *        "created_at": "2022-05-12T10:35:18.488Z"
 *    },
 *    {
 *        "id": 12,
 *        "title": "Mega Teuf de fin d'Apo",
 *        "start": "2022-05-28T00:00:00.000Z",
 *        "end": "2022-05-28T00:00:00.000Z",
 *        "description": "On a mérité de boire, mais pas trop",
 *        "allday": true,
 *        "user_id": 4,
 *        "circle_id": 5,
 *        "color": "#F0F",
 *        "created_at": "2022-05-12T10:35:18.488Z"
 *    }
 *]
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
 * @api {POST} /api/circle/:circle_id/event Create an Event for a circle
 * @apiName CreateEvent
 * @apiGroup Event
 * @apiHeader {String} Authorization The token generated at user's login
 *
 * @apiDescription Create an Event for a circle.
 *
 * @apiParam {Number} circle_id Circle Id
 *
 *
 * @apiBody {String} event.title
 * @apiBody {String} event.description
 * @apiBody {Boolean} event.allday
 * @apiBody {Date} event.start
 * @apiBody {Date} event.end
 * @apiBody {String} event.color
 * @apiBody {Number} event.user_id
 *
 *
 * @apiSuccess {Object} event
 * @apiSuccess {Number} event.id
 * @apiSuccess {String} event.title
 * @apiSuccess {Date} event.start
 * @apiSuccess {Date} event.end
 * @apiSuccess {String} event.description
 * @apiSuccess {Boolean} event.allday
 * @apiSuccess {Number} event.user_id
 * @apiSuccess {Number} event.circle_id
 * @apiSuccess {String} event.color
 * @apiSuccess {Date} event.created_at
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 Ok
 * {
 *    "id": 7,
 *    "title": "Petite fête avec Trotro",
 *    "start": "2022-05-28T00:00:00.000Z",
 *    "end": "2022-05-28T00:00:00.000Z",
 *    "description": "On va s'éclater avec mon ami Trotro",
 *    "allday": true,
 *    "user_id": 4,
 *    "circle_id": 5,
 *    "color": "#F0F",
 *    "created_at": "2022-05-12T10:35:18.488Z"
 * }
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
 * @api {Get} /api/circle/event/:event_id Get an Event by its Id
 * @apiName GetEvent
 * @apiGroup Event
 * @apiHeader {String} Authorization The token generated at user's login
 *
 * @apiDescription Get an Event by its Id.
 *
 * @apiParam {Number} event_id Event Id
 *
 *
 * @apiSuccess {Object} event
 * @apiSuccess {Number} event.id
 * @apiSuccess {String} event.title
 * @apiSuccess {Date} event.start
 * @apiSuccess {Date} event.end
 * @apiSuccess {String} event.description
 * @apiSuccess {Boolean} event.allday
 * @apiSuccess {Number} event.user_id
 * @apiSuccess {Number} event.circle_id
 * @apiSuccess {String} event.color
 * @apiSuccess {Date} event.created_at
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 Ok
 * {
 *    "id": 7,
 *    "title": "Petite fête avec Trotro",
 *    "start": "2022-05-28T00:00:00.000Z",
 *    "end": "2022-05-28T00:00:00.000Z",
 *    "description": "On va s'éclater avec mon ami Trotro",
 *    "allday": true,
 *    "user_id": 4,
 *    "circle_id": 5,
 *    "color": "#F0F",
 *    "created_at": "2022-05-12T10:35:18.488Z"
 * }
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
 * @api {PATCH} /api/circle/event/:event_id Update any field of an Event by its Id
 * @apiName PatchEvent
 * @apiGroup Event
 * @apiHeader {String} Authorization The token generated at user's login
 *
 * @apiDescription Update any field of an Event by its Id.
 *
 * @apiParam {Number} event_id Event Id
 *
 *
 * @apiBody {String} event.title
 * @apiBody {String} event.description
 * @apiBody {Boolean} event.allday
 * @apiBody {Date} event.start
 * @apiBody {Date} event.end
 * @apiBody {String} event.color
 * @apiBody {Number} event.user_id
 * @apiBody {Number} event.circle_id
 *
 *
 * @apiSuccess {Object} event
 * @apiSuccess {Number} event.id
 * @apiSuccess {String} event.title
 * @apiSuccess {Date} event.start
 * @apiSuccess {Date} event.end
 * @apiSuccess {String} event.description
 * @apiSuccess {Boolean} event.allday
 * @apiSuccess {Number} event.user_id
 * @apiSuccess {Number} event.circle_id
 * @apiSuccess {String} event.color
 * @apiSuccess {Date} event.created_at
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 Ok
 * {
 *    "id": 7,
 *    "title": "Petite fête avec Trotro",
 *    "start": "2022-05-28T00:00:00.000Z",
 *    "end": "2022-05-28T00:00:00.000Z",
 *    "description": "On va s'éclater avec mon ami Trotro",
 *    "allday": true,
 *    "user_id": 4,
 *    "circle_id": 5,
 *    "color": "#F0F",
 *    "created_at": "2022-05-12T10:35:18.488Z"
 * }
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
 * @api {DELETE} /api/circle/event/:event_id Delete an Event by its Id
 * @apiName DeleteEvent
 * @apiGroup Event
 * @apiHeader {String} Authorization The token generated at user's login
 *
 * @apiDescription Delete an Event by its Id.
 *
 * @apiParam {Number} event_id Event Id
 *
 *
 * @apiSuccessExample {String} Success-Response:
 *    HTTP/1.1 204 No Content
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
