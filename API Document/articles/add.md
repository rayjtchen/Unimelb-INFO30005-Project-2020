#Add Articles

Used to post articles to database.

URL : https://info30005-project-umsv.herokuapp.com/articles/add

Method : POST

Auth required : NO

Data constraints

    {
        "title": "[a valid string of title]",
        "author": "[a valid string of author]",
        "body" : "[a valid string of article body]"
    }
Data example

    {
        "title": "test article",
        "author": "Tom",
        "body" : "articles"
    }


###Success Response

Code : `200 OK`

Content example

    {
        "title": "test article",
        "author": "Tom",
        "body" : "articles"
    }
