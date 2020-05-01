# Post Comment

Used to post comment about an article to database.

URL : /users/comment/:id  (id == the id of the article)

Method : POST

Auth required : YES


### Success Response

Code : `200 OK`

Content example
    
    A success comment posted and stored in database: 
    {
        _id : ObjectID("5eac1d1819736912c5e1d80c")
        date : 2020-05-01T12:59:04.492+00:00
        article_id : ObjectID(" 5eac1bc719736912c5e1d80b")
        author_id : ObjectID("5eac1af219736912c5e1d80a")
        author : "111"
        author_email : "111@gmail.com"
        body : "111"
        __v : 0
    }
