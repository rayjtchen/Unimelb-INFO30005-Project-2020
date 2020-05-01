# Register

Used to collect data for a registered user.

URL : /users/register

Method : POST

Auth required : NO

Data constraints

    {
        "email": "[valid unimelb email address]",
        "username": "[valid string username]",
        "password": "[valid string password]",
        "Enter the password again": "[valid string confirmation password equals to the password above]"
    }
Data example

    {
        "email": "test@student.unimelb.edu.au",
        "username": "test",
        "password": "test",
        "Enter the password again": "test"
    }


### Success Response

Code : `200 OK`

Content example

    {
        "email": "test@student.unimelb.edu.au",
        "username": "test",
        "password": "test",
        "Enter the password again": "test"
    }

### Error Response

Condition : If any field is empty.

Code : `400 BAD REQUEST`

Content :

    {
        "[field]": [
            "field is required"
        ]
    }
   
**OR**

Condition : If 'Email' is not a valid email address.

Code : `400 BAD REQUEST`

Content :

    {
        "Email": [
            "Email is not valid"
        ]
    }

**OR**

Condition : If 'Email' has already been registered into database.

Code : `400 BAD REQUEST`

Content :

    {
        "Email": [
            "Email is already registered"
        ]
    }

**OR**

Condition : If 'Enter the password again' is not equal to 'password'.

Code : `400 BAD REQUEST`

Content :

    {
        "Enter the password again": [
            "Passwords do not match"
        ]
    }
