Run "npm install"
This installs necessary dependencies
Run "npm run dev"
This starts the server

GET Routes:
http://localhost:3000/
This route should display "Hello World!"

http://localhost:3000/neighbourhood
This route should display "Working"

http://localhost:3000/neighbourhood/people
This route should display all the people in the database

http://localhost:3000/neighbourhood/houses
This route should display all the houses in the database

http://localhost:3000/neighbourhood/addresses
This route should display all the addresses in the database

http://localhost:3000/neighbourhood/people/2
This route will display the person with ID 2 in the database, this also works for the houses route and addresses route and the number can be changed

http://localhost:3000/neighbourhood/people?minAge=18&maxAge=45&householdSize=3
The people route can accept queries. minAge controls the minimum age of the data displayed, maxAge controls the maximum age and householdSize controls the exact noOfPeople in the house. The numbers can be changed as needed

POST Routes:
http://localhost:3000/neighbourhood/people
Creates a new person, requires data to be sent to the POST route. ID is automatically generated

http://localhost:3000/neighbourhood/houses
Creates a new house, requires data to be sent to the POST route. ID is automatically generated

http://localhost:3000/neighbourhood/addresses
Creates a new address, requires data to be sent to the POST route. ID is automatically generated

DELETE Routes:
http://localhost:3000/neighbourhood/people/2
Deletes a person from the database matching the ID passed, in this case ID 2

http://localhost:3000/neighbourhood/houses/2
Deletes a house from the database matching the ID passed, in this case ID 2

http://localhost:3000/neighbourhood/addresses/2
Deletes an address from the database matching the ID passed, in this case ID 2
