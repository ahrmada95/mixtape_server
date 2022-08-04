const express = require("express");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4001;

//import user credentials db
const usersCred = require('./userCred');
//global variable holding array of all the users and their cradentials
const USER_CREDENTIALS = usersCred.usersCred;

//import user information db
const usersInfo = require('./userInfo')
const USER_INFO = usersInfo.usersInfo

//import playlist information db
const playLists = require('./playlists')
const PLAYLISTS = playLists.playlists

const musicLibrary = require('./musicLibrary')
const MUSICLIBRARY = musicLibrary.song


//returns list of users and their credentials 
app.get('/user/credentials/all', (request, result) => {
    result.send(USER_CREDENTIALS);
}) 

//returns single user and their credentials
app.get('/user/credentials/:user_id', (request, result) => {
    result.send(USER_CREDENTIALS[(request.params.user_id) - 1]);
}) 

//returns list of all users and their profile-information and status
app.get('/user/info/all', (request, result) => {
    result.send(USER_INFO)
})

//returns single user and all their profile-information and status
app.get('/user/info/:user_id', (request, result) => {
    result.send(USER_INFO[(request.params.user_id) - 1])
})

app.get('/playlist/all', (request, result) => {
    result.send(PLAYLISTS)
}) 

app.get('/playlist/:playlist_id', (request, result) => {
    result.send(PLAYLISTS[(request.params.playlist_id) - 1])
}) 


app.get('/music/all', (request, result) => {
    result.send(MUSICLIBRARY)
})

app.get('/music/:song_id', (request, result) => {
    result.send(MUSICLIBRARY[(request.params.song_id) - 1])
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));