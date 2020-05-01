# Show Current Articles

Used to get the title of all the current articles in the database.

URL : /petition/articles/summary

Method : GET

Auth required : NO

Permissions required : None

### Success Response

Code : `200 OK`

Content example

    For an article stored in database

    {
    _id : ObjectID("5eac1bc719736912c5e1d80b")
    support : 0
    date : 2020-05-01T12:53:27.785+00:00
    title : "111"
    author : "111"
    author_email : "111@gmail.com"
    category : "Learning"
    author_id : ObjectID("5eac1af219736912c5e1d80a")
    summary : "111"
    body : "111"
    }
