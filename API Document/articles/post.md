# Add Articles

Used to post articles to database.

URL : https://info30005-project-umsv.herokuapp.com/users/articles/add

Method : POST

Auth required : YES

Data constraints

    {
        "author": "[a valid string of author username filled out automatically]",
        "author_email": "[a valid string of author email filled out automatically]",
        "category": "[a valid string of category choosen from the options given]"
        "title": "[a valid string of title]",
        "summary": "[a valid string of summary of the articles]"
        "body": "[a valid string of article body]"
    }
    
Data example

    {
        "author": "test",
        "author_email": "test@student.unimelb.edu.au",
        "category": "Learning"
        "title": "petition title",
        "summary": "petition summary"
        "body": "petition main article"
    }

    


### Success Response

Code : `200 OK`

Content example

    For an article success posted and stored in database

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
