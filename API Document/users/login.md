# Login

Used to collect a Token for a registered User.

URL : /users/login

Method : POST

Auth required : NO

Data constraints

    {
        "UM email": "[valid email address]",
        "password": "[correct password]"
    }
Data example

    {
        "UM emial": "test@student.unimelb.edu.au",
        "password": "1234"
    }


### Success Response

Code : `200 OK`

Content example

    {
        "UM emial": "test@student.unimelb.edu.au",
        "password": "1234"
    }

### Error Response

Condition : If 'UM Email' is not registered.

Code : `404 NOT FOUND`

Content :

    {
        "UM Email": [
            "Email is not registered"
        ]
    }
   
**OR**

Condition : If 'UM Email' and 'password' combination is wrong.

Code : `404 NOT FOUND`

Content :

    {
        "Password": [
            "Password incorrect"
        ]
    }
