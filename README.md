# Unimelb-INFO30005-Project-2020
Unimelb-Web Information Technologies (INFO30005)-project-Semester 1 2020

### Website Link

Link: https://info30005-project-umsv.herokuapp.com

### Our three main functions:

**1.  users:** 

Login: https://info30005-project-umsv.herokuapp.com/users/login
    
Register: https://info30005-project-umsv.herokuapp.com/users/register
    
Dashboard (need authentication): https://info30005-project-umsv.herokuapp.com/users/dashboard


**2.  articles:** 

View petition articles : https://info30005-project-umsv.herokuapp.com/petition/articles/summary

Add articles (need authentication): https://info30005-project-umsv.herokuapp.com/users/articles/add

**3.  comment:**

Get comment about an article (need authentication) : https://info30005-project-umsv.herokuapp.com/petition/articles/:id

Comment will be post to : https://info30005-project-umsv.herokuapp.com/users/comment/:id

(Here id == id of the article)

**4.  support:**

Suppots will  be add to: https://info30005-project-umsv.herokuapp.com/users/support/:id

(Here id == id of the article)

#### Test account for authentication(login):
        
    email: ******@student.unimelb.edu.au
    password: ******
        
#### ID of test article: 
    id : 5eac1bc719736912c5e1d80b
    
### Mocha test

After installing mocha using code: npm install -g mocha

Run the code 'mocha test/**/    *.js --exit' to start the test.    
    
### Reference:

The CSS file in layout.pug was obtain from Bootswatch, the link is down below
https://bootswatch.com/

The three javascript files in layout.pug was obtain from Bootstrap, the link is down below
https://getbootstrap.com/docs/4.4/getting-started/introduction/

The CSS file in article.pug and article_id.pug was obtain from colorlib, the link is down below
https://colorlib.com/wp/templates/
https://colorlib.com/preview/#timezone
