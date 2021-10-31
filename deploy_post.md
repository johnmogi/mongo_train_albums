music albums - show collection + youtube video
spotify integration?

backEnd: mongo + express joi cors
FrontEnd: nextJs with endpoints
hooks + service for CRUD
styled components

deploy: digital ocean

musicAlbums database:

albums collection:
_id
albumName
albumImage
artist
date
category

 {
    "albumName": "Jar of flies",
    "albumImage": "jof.jpg",
    "artist": "Alice In Chaines",
    "date": "15-08-1997",
    "categoryId":"617a421b8bdd2e8504c14d11"
 }
 {
    "albumName": "nevermind",
    "albumImage": "nvm.jpg",
    "artist": "Nirvana",
    "date": "15-08-2000",
    "categoryId":"617a421b8bdd2e8504c14d11"
 }
{
    "name":"rock",
    "description":"best music"
}


sudo mongorestore --db musicAlbums --drop /var/www/dep/Server/database
