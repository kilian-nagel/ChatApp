
WebChat Project
----------------


Content
----------------
- Presentation
- App Structure


Presentation
----------------


App Structure
----------------
Features
- Authentification.
- Fetch Album / Music from Spotify API.
- Manage User profile.

Database
- JSON

Authentification
- Auth API

Database

db Utilisateurs
{
   uid
   username
   mail
   data
      profile
        img
      	role
      recent_musics ( array )
      liked_musics ( array )
      published_musics ( array )
      playists
        name
        musics ( array that reference db musics )
}



