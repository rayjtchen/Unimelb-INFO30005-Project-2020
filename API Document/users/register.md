# Login

Used to collect data for a registered user.

URL : https://info30005-project-umsv.herokuapp.com/users/register

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

    check('email', 'Email is not valid').isEmail(),
    
    check('password2', 'Passwords do not match').exists().custom((value,{req})=>{
        return value === req.body.password;

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

Condition : If 'Enter the password again' is not equal to 'password'.

Code : `400 BAD REQUEST`

Content :

    {
        "Enter the password again": [
            "Passwords do not match"
        ]
    }